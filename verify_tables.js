// verify_tables.js
// Verifikasi tabel markdown: kolom konsisten, teks non-tabel tidak berubah.
//
// node verify_tables.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;

const isRow = (l) => l.trim().startsWith("|") && l.trim().endsWith("|");
const isSep = (l) => /^\|[\s:|-]+\|$/.test(l.trim()) && l.includes("-");
const isFence = (l) => /^\s*(```|~~~)/.test(l);

// hitung kolom, hormati pipe yang di-escape
function ncol(line) {
    let s = line.trim();
    if (s.startsWith("|")) s = s.slice(1);
    if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);

    let n = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "\\" && s[i + 1] === "|") {
            i++;
            continue;
        }
        if (s[i] === "|") n++;
    }
    return n;
}

function walk(dir, ext, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.name === ".git" || e.name === "node_modules") continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full, ext, out);
        else if (e.name.endsWith(ext)) out.push(full);
    }
    return out;
}

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, "/");

// ---------- 1. kolom konsisten ----------
const problems = [];
let tableCount = 0;

for (const f of walk(ROOT, ".md")) {
    const lines = fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n").split("\n");
    let fence = false;
    let i = 0;

    while (i < lines.length) {
        if (isFence(lines[i])) {
            fence = !fence;
            i++;
            continue;
        }
        if (fence) {
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
            if (block.length < 2 || !isSep(block[1])) continue;

            tableCount++;
            const want = ncol(block[0]);
            block.forEach((row, k) => {
                const got = ncol(row);
                if (got !== want) {
                    problems.push(`${rel(f)}:${at + k} kolom ${got} vs ${want}`);
                }
            });
        } else {
            i++;
        }
    }
}

// ---------- 2. teks non-tabel tidak berubah ----------
const textChanged = [];

const strip = (t) =>
    t
        .replace(/\r\n/g, "\n")
        .split("\n")
        .filter((l) => !isRow(l))
        .filter((l) => l.trim() !== "")
        .map((l) => l.replace(/\s+$/, ""))
        .join("\n")
        .trim();

let changedFiles = [];
try {
    changedFiles = execSync("git diff --name-only", { cwd: ROOT, encoding: "utf8" })
        .split("\n")
        .filter((x) => x.endsWith(".md"));
} catch {
    console.log("(tidak bisa membaca git diff)");
}

for (const f of changedFiles) {
    const abs = path.join(ROOT, f);
    if (!fs.existsSync(abs)) continue;
    let oldText;
    try {
        oldText = execSync(`git show HEAD:"${f}"`, {
            cwd: ROOT,
            encoding: "utf8",
            maxBuffer: 10 * 1024 * 1024,
        });
    } catch {
        continue;
    }
    if (strip(oldText) !== strip(fs.readFileSync(abs, "utf8"))) {
        textChanged.push(f);
    }
}

// ---------- laporan ----------
console.log("=".repeat(60));
console.log("  VERIFIKASI TABEL");
console.log("=".repeat(60));
console.log(`\nTabel diperiksa: ${tableCount}`);

if (problems.length) {
    console.log(`\nMASALAH (${problems.length})`);
    problems.slice(0, 10).forEach((p) => console.log(`  X  ${p}`));
} else {
    console.log("  ok  semua tabel punya kolom konsisten");
}

if (textChanged.length) {
    console.log(`\nTEKS NON-TABEL BERUBAH (${textChanged.length})`);
    textChanged.forEach((f) => console.log(`  !  ${f}`));
} else {
    console.log("  ok  teks non-tabel tidak berubah");
}

console.log();
process.exit(problems.length || textChanged.length ? 1 : 0);
