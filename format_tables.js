// format_tables.js
// Ratakan tabel Markdown supaya rapi dibaca di editor.
//
// node format_tables.js <file.md>
// node format_tables.js --all

const fs = require("fs");
const path = require("path");

// Pecah satu baris tabel jadi sel.
// Pipe yang di-escape (\|) BUKAN pemisah — itu isi sel.
function splitRow(line) {
    let s = line.trim();
    if (s.startsWith("|")) s = s.slice(1);
    if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);

    const cells = [];
    let buf = "";

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === "\\" && s[i + 1] === "|") {
            buf += "\\|";
            i++;
        } else if (ch === "|") {
            cells.push(buf);
            buf = "";
        } else {
            buf += ch;
        }
    }
    cells.push(buf);

    return cells.map((c) => c.trim().replace(/[ \t]+/g, " "));
}

const isTableRow = (l) => l.trim().startsWith("|") && l.trim().endsWith("|");
const isSeparator = (l) => /^\|[\s:|-]+\|$/.test(l.trim()) && l.includes("-");
const isFence = (l) => /^\s*(```|~~~)/.test(l);
const indentOf = (l) => (l.match(/^([ \t]*)/) || ["", ""])[1];

function alignTable(rows) {
    const indent = indentOf(rows[0]);
    const parsed = rows.map(splitRow);
    const colCount = Math.max(...parsed.map((r) => r.length));

    const norm = parsed.map((r) => {
        const copy = r.slice();
        while (copy.length < colCount) copy.push("");
        return copy;
    });

    const widths = new Array(colCount).fill(3);
    norm.forEach((r, i) => {
        if (i === 1) return; // baris separator
        r.forEach((cell, c) => {
            if (cell.length > widths[c]) widths[c] = cell.length;
        });
    });

    const out = [];
    norm.forEach((r, i) => {
        if (i === 1) {
            const seps = widths.map((w) => "-".repeat(w + 2));
            out.push(indent + "|" + seps.join("|") + "|");
            return;
        }
        const cells = r.map((cell, c) => " " + cell.padEnd(widths[c]) + " ");
        out.push(indent + "|" + cells.join("|") + "|");
    });

    return out;
}

function formatFile(file) {
    let src = fs.readFileSync(file, "utf8");

    // normalkan akhir baris supaya tidak campur CRLF dan LF
    src = src.replace(/\r\n/g, "\n");

    const lines = src.split("\n");
    const out = [];

    let i = 0;
    let changed = 0;
    let inFence = false;

    while (i < lines.length) {
        if (isFence(lines[i])) {
            inFence = !inFence;
            out.push(lines[i]);
            i++;
            continue;
        }

        if (inFence) {
            out.push(lines[i]);
            i++;
            continue;
        }

        if (isTableRow(lines[i])) {
            const block = [];
            const indent = indentOf(lines[i]);
            while (i < lines.length && isTableRow(lines[i])) {
                block.push(lines[i]);
                i++;
            }

            // tabel di dalam list bernomor tidak diberi baris kosong,
            // karena itu memutus daftarnya
            const insideList = indent.length > 0;

            if (!insideList && out.length > 0 && out[out.length - 1].trim() !== "") {
                out.push("");
                changed++;
            }

            if (block.length >= 2 && isSeparator(block[1])) {
                const aligned = alignTable(block);
                if (aligned.join("\n") !== block.join("\n")) changed++;
                out.push(...aligned);
            } else {
                out.push(...block);
            }

            if (
                !insideList &&
                i < lines.length &&
                lines[i].trim() !== "" &&
                !isFence(lines[i])
            ) {
                out.push("");
                changed++;
            }
        } else {
            out.push(lines[i]);
            i++;
        }
    }

    const result = out.join("\n");
    if (result !== src) {
        fs.writeFileSync(file, result, "utf8");
    }
    return { changed };
}

// ---------- main ----------
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Pakai: node format_tables.js <file.md>");
    console.log("       node format_tables.js --all");
    process.exit(1);
}

let files = [];

if (args[0] === "--all") {
    const walk = (dir, out = []) => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            if (e.name === ".git" || e.name === "node_modules") continue;
            const full = path.join(dir, e.name);
            if (e.isDirectory()) walk(full, out);
            else if (e.name.endsWith(".md")) out.push(full);
        }
        return out;
    };
    files = walk(__dirname);
} else {
    files = args;
}

let total = 0;

for (const f of files) {
    if (!fs.existsSync(f)) {
        console.log(`  lewat  ${f} (tidak ada)`);
        continue;
    }
    const { changed } = formatFile(f);
    if (changed > 0) {
        console.log(`  rapi   ${path.relative(__dirname, f)}  (${changed} tabel)`);
        total += changed;
    }
}

console.log();
console.log(total === 0 ? "Semua tabel sudah rata." : `${total} tabel dirapikan.`);
