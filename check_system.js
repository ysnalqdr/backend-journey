// check_system.js
// Periksa kesehatan repo Backend Journey.
//
// Jalankan: node check_system.js
// Exit 1 kalau ada masalah kritis.

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = __dirname;
const errors = [];
const warnings = [];
const oks = [];

const ok = (m) => oks.push(m);
const warn = (m) => warnings.push(m);
const err = (m) => errors.push(m);

const read = (p) => {
    try {
        return fs.readFileSync(path.join(ROOT, p), "utf8");
    } catch {
        return "";
    }
};

const exists = (p) => fs.existsSync(path.join(ROOT, p));

// kumpulkan semua file dengan ekstensi tertentu
function walk(dir, ext, out = []) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return out;
    }
    for (const e of entries) {
        if (e.name === "node_modules" || e.name === ".git") continue;
        const full = path.join(dir, e.name);
        if (e.isDirectory()) {
            walk(full, ext, out);
        } else if (e.name.endsWith(ext)) {
            out.push(full);
        }
    }
    return out;
}

const rel = (p) => path.relative(ROOT, p).replace(/\\/g, "/");

// ---------- 1. Semua file .js sintaks valid ----------
const jsFiles = walk(ROOT, ".js");
let syntaxBad = 0;
for (const f of jsFiles) {
    try {
        execSync(`node --check "${f}"`, { stdio: "pipe" });
    } catch {
        err(`sintaks rusak: ${rel(f)}`);
        syntaxBad++;
    }
}
if (syntaxBad === 0) ok(`sintaks: ${jsFiles.length} file .js valid`);

// ---------- 2. Penjaga anti-bocor ----------
const GUARDS = {
    "Working Skills/Reading/reading_01.js": "sudahMenjawab",
    "Working Skills/Review/review_01.js": "sudahReview",
    "Working Skills/Debug/debug_01.js": "sudahLapor",
    "Phase 1 Foundation/1 Week/01_Js Basic/Exercises/09_Challenge.js": "sudahMenjawab",
};

for (const [file, flag] of Object.entries(GUARDS)) {
    if (!exists(file)) {
        err(`hilang: ${file}`);
        continue;
    }
    const src = read(file);
    if (!src.includes(`const ${flag} = false;`)) {
        err(`penjaga hilang di ${path.basename(file)}`);
    } else {
        ok(`penjaga aktif: ${path.basename(file)}`);
    }
}

// ---------- 3. File latihan punya kunci ----------
const LATIHAN = [
    ["Working Skills/Reading/01_Total Pembayaran.md", "Working Skills/Kunci/Reading 01.md"],
    ["Working Skills/Review/01_Kode Review.md", "Working Skills/Kunci/Review 01.md"],
    ["Working Skills/Docs/01_Cari Sendiri di MDN.md", "Working Skills/Kunci/Docs 01.md"],
    ["Working Skills/Debug/01_Stok Berkurang Dua Kali.md", "Working Skills/Kunci/Debug 01.md"],
];

for (const [soal, kunci] of LATIHAN) {
    if (!exists(soal)) {
        err(`soal hilang: ${soal}`);
    } else if (!exists(kunci)) {
        err(`kunci hilang untuk ${path.basename(soal)}`);
    } else {
        ok(`soal + kunci: ${path.basename(soal, ".md")}`);
    }
}

// ---------- 4. Referensi file di dokumen tidak menggantung ----------
const FUTURE = new Set(["API-CONTRACT.md", "ONBOARDING.md"]);
const DOCS = ["README.md", "PLAN.md", "SKILLS.md", "Working Skills/README.md"];
const REF = /`([A-Za-z0-9_/.\- ]+\.(?:md|js|png))`/g;

const seen = new Set();
const missing = [];

for (const d of DOCS) {
    if (!exists(d)) continue;
    const src = read(d);
    let m;
    while ((m = REF.exec(src)) !== null) {
        let ref = m[1].trim();

        // buang awalan perintah: "node x.js", "python x.py", "git x"
        ref = ref.replace(/^(node|python3?|npx|git|npm)\s+/i, "").trim();

        if (seen.has(ref)) continue;
        if (ref.startsWith("NN_")) continue;
        if (FUTURE.has(path.basename(ref))) continue;
        seen.add(ref);

        if (exists(ref)) continue;
        const base = path.basename(ref);
        const found = walk(ROOT, path.extname(ref)).some((f) => path.basename(f) === base);
        if (!found) missing.push(`${ref} (dari ${d})`);
    }
}

if (missing.length) {
    missing.forEach((m) => warn(`referensi tidak ketemu: ${m}`));
} else {
    ok(`referensi dokumen: ${seen.size} file dirujuk, semua ada`);
}

// ---------- 5. Template tidak duplikat ----------
if (exists("_templates")) {
    err("_templates/ masih ada — template sudah dipindah ke Working Skills/Templates/");
} else {
    ok("template: satu lokasi saja");
}

// ---------- 6. SKILLS.md punya bagian Working Skills ----------
const skills = read("SKILLS.md");
if (!skills.includes("## Working Skills")) {
    err("SKILLS.md tidak punya bagian Working Skills");
} else {
    ok("SKILLS.md: bagian Working Skills ada");
}

// ---------- 7. README punya protokol sesi ----------
const readme = read("README.md");
if (!readme.includes("## Session Protocol")) {
    err("README.md tidak punya Session Protocol");
} else {
    ok("README.md: Session Protocol ada");
}

// ---------- 8. Bug log 9 kolom ----------
const catatanFiles = walk(path.join(ROOT, "Phase 1 Foundation"), ".md")
    .filter((f) => path.basename(f) === "Catatan.md");

for (const c of catatanFiles) {
    const src = fs.readFileSync(c, "utf8");
    if (!src.includes("## Bug log")) continue;
    const seg = src.split("## Bug log")[1].split("## Gate Log")[0];
    if (!seg.includes("Dugaan penyebab")) {
        err(`bug log ${path.basename(path.dirname(c))}: tidak ada kolom 'Dugaan penyebab'`);
    } else {
        ok(`bug log: ${path.basename(path.dirname(c))} format benar`);
    }
}

// ---------- 9. Explain back terisi ----------
for (const c of catatanFiles) {
    const src = fs.readFileSync(c, "utf8");
    if (!src.includes("## Explain back")) continue;
    const seg = src.split("## Explain back")[1].split("##")[0].trim();
    if (seg.startsWith("<") || seg.length < 20) {
        warn(`explain back kosong: ${path.basename(path.dirname(c))}`);
    } else {
        ok(`explain back terisi: ${path.basename(path.dirname(c))}`);
    }
}

// ---------- 10. Re-check jatuh tempo ----------
const today = new Date();
today.setHours(0, 0, 0, 0);

const rq = read("REVIEW_QUEUE.md");
const overdue = [];
let pending = 0;

for (const line of rq.split("\n")) {
    const m = line.match(
        /^\|\s*(.+?)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*\**(\d{4}-\d{2}-\d{2})\**\s*\|(.*)\|$/
    );
    if (!m) continue;
    const [, konsep, , due, rest] = m;
    if (konsep.trim().toLowerCase() === "concept") continue;

    const cells = rest.split("|");
    if (cells.length < 2) continue;
    if (cells[0].trim()) continue; // sudah direview

    pending++;
    const d = new Date(due + "T00:00:00");
    if (d < today) overdue.push(`${konsep.trim()} (jatuh tempo ${due})`);
}

if (overdue.length) {
    overdue.forEach((o) => warn(`re-check terlewat: ${o}`));
} else {
    ok(`review queue: ${pending} item menunggu, tidak ada yang terlewat`);
}

// ---------- 11. Setiap .js latihan punya .md pendamping ----------
const wsDir = path.join(ROOT, "Working Skills");
if (fs.existsSync(wsDir)) {
    const orphans = [];
    for (const js of walk(wsDir, ".js")) {
        const dir = path.dirname(js);
        const hasMd = fs.readdirSync(dir).some((f) => f.endsWith(".md"));
        if (!hasMd) orphans.push(rel(js));
    }
    if (orphans.length) {
        orphans.forEach((o) => err(`file .js tanpa .md pendamping: ${o}`));
    } else {
        ok("working skills: setiap .js punya .md");
    }
}

// ---------- 12. Jumlah aturan README ----------
const mainRules = (readme.match(/^\d+\. /gm) || []).length;
const subRules = (readme.match(/^\d+[a-g]\. /gm) || []).length;
if (mainRules < 30) {
    warn(`aturan README hanya ${mainRules}, seharusnya ≥ 30`);
} else {
    ok(`aturan README: ${mainRules} utama + ${subRules} sub = ${mainRules + subRules}`);
}

// ---------- 13. Gate log ada isinya ----------
for (const c of catatanFiles) {
    const src = fs.readFileSync(c, "utf8");
    if (!src.includes("## Gate Log")) continue;
    const n = (src.match(/^\|\s*\d+\s*\|/gm) || []).length;
    if (n === 0) {
        warn(`gate log kosong: ${path.basename(path.dirname(c))}`);
    } else {
        ok(`gate log: ${n} entri`);
    }
}

// ---------- 14. Commit 7 hari terakhir ----------
let commitCount = 0;
try {
    const out = execSync("git log --oneline --since=\"7 days ago\"", {
        cwd: ROOT,
        encoding: "utf8",
        stdio: "pipe",
    });
    commitCount = out.split("\n").filter((l) => l.trim()).length;
} catch {
    commitCount = 0;
}

if (commitCount === 0) {
    warn("tidak ada commit dalam 7 hari terakhir");
} else {
    ok(`commit 7 hari terakhir: ${commitCount}`);
}

// ---------- 15. Working tree bersih ----------
let dirty = "";
try {
    dirty = execSync("git status --porcelain", {
        cwd: ROOT,
        encoding: "utf8",
        stdio: "pipe",
    }).trim();
} catch {
    dirty = "";
}

if (dirty) {
    const n = dirty.split("\n").length;
    warn(`working tree belum bersih (${n} file)`);
} else {
    ok("working tree bersih");
}

// ---------- Laporan ----------
const line = "=".repeat(64);
console.log(line);
console.log("  BACKEND JOURNEY — PEMERIKSAAN SISTEM");
console.log(line);

if (oks.length) {
    console.log(`\nLULUS (${oks.length})`);
    oks.forEach((m) => console.log(`  ok   ${m}`));
}

if (warnings.length) {
    console.log(`\nPERHATIAN (${warnings.length})`);
    warnings.forEach((m) => console.log(`  !    ${m}`));
}

if (errors.length) {
    console.log(`\nGAGAL (${errors.length})`);
    errors.forEach((m) => console.log(`  X    ${m}`));
}

const total = oks.length + warnings.length + errors.length;
const score = total ? Math.round((oks.length / total) * 100) : 0;

console.log();
console.log(`Skor: ${oks.length}/${total} pemeriksaan lulus (${score}%)`);
console.log();

process.exit(errors.length ? 1 : 0);
