// convert_skills.js
// Ubah tabel SKILLS.md jadi bentuk sempit: tabel status + daftar bukti terpisah.
//
// node convert_skills.js

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "SKILLS.md");

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

const src = fs.readFileSync(FILE, "utf8").replace(/\r\n/g, "\n");
const lines = src.split("\n");
const out = [];

let i = 0;
while (i < lines.length) {
    if (isRow(lines[i])) {
        const block = [];
        while (i < lines.length && isRow(lines[i])) {
            block.push(lines[i]);
            i++;
        }

        if (block.length < 2 || !isSep(block[1])) {
            out.push(...block);
            continue;
        }

        const header = splitRow(block[0]);
        const rows = block.slice(2).map(splitRow);

        // hanya proses tabel konsep (punya kolom Status + Bukti)
        const iStatus = header.findIndex((h) => /status/i.test(h));
        const iBukti = header.findIndex((h) => /bukti/i.test(h));
        const iMinggu = header.findIndex((h) => /minggu/i.test(h));

        if (iStatus === -1 || iBukti === -1) {
            out.push(...block);
            continue;
        }

        const tabel = ["| Konsep | Status | Minggu |", "|---|---|---|"];
        const bukti = [];

        for (const r of rows) {
            const konsep = r[0] || "";
            const status = (r[iStatus] || "").trim() || "-";
            const minggu = iMinggu >= 0 ? (r[iMinggu] || "").trim() : "";
            const ev = (r[iBukti] || "").trim();

            tabel.push(`| ${konsep} | ${status} | ${minggu} |`);
            if (ev) bukti.push(`- **${konsep.replace(/\*\*/g, "")}** — ${ev}`);
        }

        out.push(...tabel);

        if (bukti.length) {
            out.push("");
            out.push("**Bukti:**");
            out.push("");
            out.push(...bukti);
        }

        out.push("");
    } else {
        out.push(lines[i]);
        i++;
    }
}

fs.writeFileSync(FILE, out.join("\n"), "utf8");
console.log("selesai");
