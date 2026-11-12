// convert_wide.js
// Ubah tabel yang terlalu lebar (> 100 char) jadi daftar.
// Tabel yang sempit dibiarkan sebagai tabel.
//
// node convert_wide.js

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const LIMIT = 100;

function splitRow(line) {
    let s = line.trim();
    if (s.startsWith("|")) s = s.slice(1);
    if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);

    const cells = [];
    let buf = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "\\" && s[i + 1] === "|") {
            buf += "|";
            i++;
        } else if (s[i] === "|") {
            cells.push(buf.trim());
            buf = "";
        } else {
            buf += s[i];
        }
    }
    cells.push(buf.trim());
    return cells;
}

const isRow = (l) => l.trim().startsWith("|") && l.trim().endsWith("|");
const isSep = (l) => /^\|[\s:|-]+\|$/.test(l.trim()) && l.includes("-");
const isFence = (l) => /^\s*(```|~~~)/.test(l);

function walk(dir, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if ([".git", "node_modules", ".vscode"].includes(e.name)) continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full, out);
        else if (e.name.endsWith(".md")) out.push(full);
    }
    return out;
}

const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

let converted = 0;
const report = [];

for (const file of walk(ROOT)) {
    const src = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n");
    const lines = src.split("\n");
    const out = [];

    let fence = false;
    let i = 0;
    let fileChanged = 0;

    while (i < lines.length) {
        if (isFence(lines[i])) {
            fence = !fence;
            out.push(lines[i]);
            i++;
            continue;
        }
        if (fence) {
            out.push(lines[i]);
            i++;
            continue;
        }

        if (isRow(lines[i])) {
            const block = [];
            const at = i + 1;
            while (i < lines.length && isRow(lines[i])) {
                block.push(lines[i]);
                i++;
            }

            if (block.length < 2 || !isSep(block[1])) {
                out.push(...block);
                continue;
            }

            const width = Math.max(...block.map((l) => l.length));

            if (width <= LIMIT) {
                out.push(...block);
                continue;
            }

            // --- konversi ke daftar ---
            const header = splitRow(block[0]);
            const rows = block.slice(2).map(splitRow);

            // header kolom pertama dipakai sebagai kunci
            for (const r of rows) {
                if (r.every((c) => c === "")) continue;

                const key = r[0] || "";
                const rest = [];

                for (let c = 1; c < header.length; c++) {
                    const val = (r[c] || "").trim();
                    const label = (header[c] || "").trim();
                    if (!val || val === "—" || val === "-") continue;
                    rest.push(`- ${label}: ${val}`);
                }

                if (key) {
                    out.push(`**${key}**`);
                }
                out.push(...rest);
                out.push("");
            }

            fileChanged++;
        } else {
            out.push(lines[i]);
            i++;
        }
    }

    if (fileChanged > 0) {
        fs.writeFileSync(file, out.join("\n"), "utf8");
        converted += fileChanged;
        report.push(`  ${rel(file)}  (${fileChanged} tabel)`);
    }
}

console.log(report.join("\n"));
console.log(`\n${converted} tabel dikonversi jadi daftar.`);
