// convert_gatelog.js
// Ubah tabel Gate Log jadi satu baris per entri, supaya tidak wrap.
//
// node convert_gatelog.js

const fs = require("fs");
const path = require("path");

const FILE = path.join(
    __dirname,
    "Phase 1 Foundation",
    "1 Week",
    "01_Js Basic",
    "Catatan.md"
);

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
        const at = i;
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

        // hanya Gate Log: punya kolom Verdict dan Level
        const iVerdict = header.findIndex((h) => /verdict/i.test(h));
        const iLevel = header.findIndex((h) => /^level$/i.test(h));

        if (iVerdict === -1 || iLevel === -1) {
            out.push(...block);
            continue;
        }

        const idx = (name) => header.findIndex((h) => new RegExp(name, "i").test(h));
        const iNo = idx("^#");
        const iConcept = idx("concept");
        const iQ = idx("question");
        const iA = idx("my answer");
        const iType = idx("type");
        const iTime = idx("time");
        const iNote = idx("note");

        for (const r of rows) {
            const no = (r[iNo] || "").trim();
            const level = (r[iLevel] || "").trim();
            const concept = (r[iConcept] || "").trim();
            const q = (r[iQ] || "").trim();
            const a = (r[iA] || "").trim();
            const v = (r[iVerdict] || "").trim();
            const t = iType >= 0 ? (r[iType] || "").trim() : "";
            const time = iTime >= 0 ? (r[iTime] || "").trim() : "";
            const note = iNote >= 0 ? (r[iNote] || "").trim() : "";

            // baris 1: penanda
            const head = [`**#${no}**`, level, concept, v, t !== "—" ? t : "", time !== "—" ? time : ""]
                .filter(Boolean)
                .join(" · ");

            out.push(head);

            if (q) out.push(`- Soal: ${q}`);
            if (a) out.push(`- Jawab: ${a}`);
            if (note) out.push(`- Catatan: ${note}`);
            out.push("");
        }
    } else {
        out.push(lines[i]);
        i++;
    }
}

fs.writeFileSync(FILE, out.join("\n"), "utf8");
console.log("Gate Log dikonversi");
