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
    ["Working Skills/Reading/02_Simulasi Stok.md", "Working Skills/Kunci/Reading 02.md"],
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

// ---------- 3b. Setiap re-check punya .md dan .js berpasangan ----------
{
    const rdir = path.join(ROOT, "Recheck");
    if (!fs.existsSync(rdir)) {
        err("folder Recheck/ tidak ada");
    } else {
        const names = fs.readdirSync(rdir).filter((f) => f.endsWith(".md") && f !== "README.md");
        const jsNames = fs.readdirSync(rdir).filter((f) => f.endsWith(".js"));
        const pairs = [];

        for (const md of names) {
            const base = md.replace(/\.md$/, "");
            const js = base + "_recheck.js";
            if (!jsNames.includes(js)) {
                err(`re-check ${md} tidak punya ${js}`);
            } else {
                pairs.push(base);
            }
        }

        if (pairs.length) {
            ok(`re-check: ${pairs.length} sesi lengkap (.md + .js)`);
        } else if (names.length === 0) {
            warn("belum ada sesi re-check");
        }
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
        if (/\bYYYY\b/.test(ref)) continue;
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

// ---------- 10b. Item antrean berbentuk daftar juga dipantau ----------
{
    const daftar = [];
    const reItem = /^\*\*(.+?)\*\*\s*·\s*(?:muncul\s*)?(\d{4}-\d{2}-\d{2})\s*→\s*jatuh tempo\s*(\d{4}-\d{2}-\d{2})/;

    for (const line of rq.split(/\r?\n/)) {
        const m = line.match(reItem);
        if (!m) continue;
        const [, konsep, muncul, due] = m;
        // lewati kalau baris itu sudah menyebut PASS
        if (/PASS/i.test(line)) continue;
        const d = new Date(due + "T00:00:00");
        if (d < today) {
            daftar.push(`${konsep.trim()} (jatuh tempo ${due})`);
        }
    }

    if (daftar.length) {
        daftar.forEach((o) => warn(`re-check terlewat: ${o}`));
    } else {
        ok("antrean daftar: tidak ada yang terlewat");
    }
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

    // format tabel (lama) atau format daftar (baru)
    const tabel = (src.match(/^\|\s*\d+\s*\|/gm) || []).length;
    const daftar = (src.match(/^\*\*#\d+\*\*/gm) || []).length;
    const n = Math.max(tabel, daftar);

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

// ---------- 16. Tabel markdown ----------
{
    const isRow = (l) => l.trim().startsWith("|") && l.trim().endsWith("|");
    const isSep = (l) => /^\|[\s:|-]+\|$/.test(l.trim()) && l.includes("-");
    const isFence = (l) => /^\s*(```|~~~)/.test(l);

    // hitung kolom, hormati pipe yang di-escape (\|)
    const ncol = (line) => {
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
    };

    const badCols = [];
    const tooWide = [];
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
                        badCols.push(`${rel(f)}:${at + k} kolom ${got} vs ${want}`);
                    }
                });

                const w = Math.max(...block.map((l) => l.length));
                if (w > 100) tooWide.push(`${rel(f)}:${at} (${w} char)`);
            } else {
                i++;
            }
        }
    }

    if (badCols.length) {
        badCols.slice(0, 5).forEach((b) => err(`tabel tidak konsisten: ${b}`));
    } else {
        ok(`tabel markdown: ${tableCount} tabel, kolom konsisten`);
    }

    if (tooWide.length) {
        tooWide.slice(0, 3).forEach((t) => warn(`tabel terlalu lebar: ${t}`));
        if (tooWide.length > 3) warn(`... dan ${tooWide.length - 3} tabel lebar lainnya`);
    } else {
        ok("tabel: semua muat di lebar editor");
    }
}

// ---------- 17. Tidak ada pemisah ==== di file latihan ----------
{
    const bad = [];
    // Aturan #26 berlaku untuk file latihan dan re-check, bukan dokumentasi markdown
    // (markdown pakai --- sebagai garis bagian, itu standar).
    const targets = [...walk(ROOT, ".js")].filter((f) => {
        const r = rel(f);
        if (r.startsWith("Documents/")) return false;
        if (r.startsWith("check_system") || r.startsWith("format_tables") || r.startsWith("verify_tables") || r.startsWith("convert_wide")) return false;
        return true;
    });

    for (const f of targets) {
        const lines = fs.readFileSync(f, "utf8").split(/\r?\n/);
        lines.forEach((line, i) => {
            // garis pemisah di dalam file .js: 3+ karakter = - * _ berdiri sendiri
            if (/^\s*\/\/\s*[=\-*_]{3,}\s*$/.test(line)) {
                bad.push(`${rel(f)}:${i + 1}`);
            }
        });
    }

    if (bad.length) {
        bad.slice(0, 5).forEach((b) => err(`garis pemisah dilarang: ${b}`));
        if (bad.length > 5) err(`... dan ${bad.length - 5} lainnya`);
    } else {
        ok("tidak ada garis pemisah ==== di file .js");
    }
}

// ---------- 18. Pertanyaan tidak membocorkan jawaban ----------
{
    // Aturan 27b. Berlaku untuk file soal di Working Skills dan Recheck.
    // Yang dicari: kalimat tanya yang menyebut nilai salah, perbandingan,
    // atau pertanyaan ya/tidak pada hal yang sedang diuji.
    const POLA = [
        [/kenapa bukan/i, "bocor negatif (kenapa bukan)"],
        [/mengapa bukan/i, "bocor negatif (mengapa bukan)"],
        [/kenapa tidak (sampai|masuk|jalan|tercetak|error)/i, "bocor negatif (kenapa tidak)"],
        [/kenapa beda|kenapa berbeda|mengapa berbeda/i, "bocor perbandingan"],
        [/apakah (kode ini |program ini )?(error|salah|jalan)/i, "bocor ya atau tidak"],
        [/apakah sesuai (keinginan|harapan)/i, "bocor ya atau tidak"],
    ];

    const soalDirs = ["Working Skills/Reading", "Working Skills/Review", "Working Skills/Docs", "Working Skills/Debug", "Recheck"];
    const temuan = [];

    for (const d of soalDirs) {
        const dir = path.join(ROOT, d);
        if (!fs.existsSync(dir)) continue;
        for (const f of fs.readdirSync(dir)) {
            if (!f.endsWith(".md") || f === "README.md") continue;
            const p = path.join(dir, f);
            const lines = fs.readFileSync(p, "utf8").split(/\r?\n/);
            lines.forEach((line, i) => {
                // lewati baris yang menandai kesalahan dengan sengaja (koreksi)
                if (/koreksi|salah:|contoh salah|dilarang/i.test(line)) return;
                for (const [re, label] of POLA) {
                    if (re.test(line)) temuan.push(`${d}/${f}:${i + 1} ${label}`);
                }
            });
        }
    }

    if (temuan.length) {
        temuan.slice(0, 6).forEach((t) => warn(`pertanyaan bocor: ${t}`));
        if (temuan.length > 6) warn(`... dan ${temuan.length - 6} lainnya`);
    } else {
        ok("pertanyaan bebas bocoran (aturan 27b)");
    }
}

// ---------- 19. Setiap jawaban punya catatan keyakinan ----------
{
    // Aturan 40. Entri Gate Log baru wajib menyebut yakin atau ragu.
    const c = path.join(ROOT, "Phase 1 Foundation/1 Week/01_Js Basic/Catatan.md");
    const src = fs.readFileSync(c, "utf8");
    const blok = src.split("## Gate Log")[1] || "";
    const entri = blok.split(/\*\*#\d+\*\*/).slice(1);

    // hanya periksa entri setelah aturan 40 berlaku (2026-11-14 ke atas)
    const baru = entri.filter((e) => /2026-11-1[4-9]|2026-1[2]-\d\d/.test(e.slice(0, 300)));
    const tanpaKeyakinan = baru.filter((e) => !/yakin|ragu/i.test(e.slice(0, 400)));

    if (baru.length === 0) {
        ok("keyakinan: belum ada entri baru setelah aturan 40");
    } else if (tanpaKeyakinan.length) {
        warn(`keyakinan belum dicatat di ${tanpaKeyakinan.length} entri Gate Log baru`);
    } else {
        ok(`keyakinan tercatat di ${baru.length} entri Gate Log baru`);
    }
}

// ---------- 20. Antrean re-check memakai interval yang benar ----------
{
    const isi = read("REVIEW_QUEUE.md");
    const daftar = [];
    const reItem = /^\*\*(.+?)\*\*\s*·\s*(?:muncul\s*)?(\d{4}-\d{2}-\d{2})\s*→\s*(?:jatuh tempo\s*)?(\d{4}-\d{2}-\d{2})/;

    for (const line of isi.split(/\r?\n/)) {
        const m = line.match(reItem);
        if (!m) continue;
        const [, konsep, muncul, due] = m;
        const selisih = Math.round(
            (new Date(due + "T00:00:00") - new Date(muncul + "T00:00:00")) / 86400000
        );
        if (selisih < 1 || selisih > 14) {
            daftar.push(`${konsep.trim()} (${selisih} hari)`);
        }
    }

    if (daftar.length) {
        daftar.forEach((d) => warn(`interval re-check di luar 1-14 hari: ${d}`));
    } else {
        ok("interval re-check dalam rentang 1-14 hari");
    }
}

// ---------- 21. Working Skills ditagih setiap sesi ----------
{
    // Aturan 41. Status dibaca dari Working Skills/status.json.
    const f = path.join(ROOT, "Working Skills/status.json");

    if (!fs.existsSync(f)) {
        err("Working Skills/status.json tidak ada");
    } else {
        const data = JSON.parse(fs.readFileSync(f, "utf8"));
        const semua = data.blok || [];
        const belum = semua.filter((b) => b.status === "belum");
        const sedang = semua.filter((b) => b.status === "sedang");
        const selesai = semua.filter((b) => b.status === "selesai");

        // setiap blok wajib punya soal dan kunci yang benar-benar ada
        const hilang = [];
        for (const b of semua) {
            if (!fs.existsSync(path.join(ROOT, b.soal))) hilang.push(b.id + " soal");
            if (!fs.existsSync(path.join(ROOT, b.kunci))) hilang.push(b.id + " kunci");
        }

        if (hilang.length) {
            hilang.forEach((h) => err(`Working Skills: file hilang (${h})`));
        } else if (selesai.length === 0) {
            warn(`Working Skills: 0 dari ${semua.length} blok pernah dikerjakan. Jalankan node working_skills.js`);
        } else if (belum.length || sedang.length) {
            warn(`Working Skills: ${belum.length + sedang.length} blok menunggu, ${selesai.length} selesai`);
        } else {
            ok(`Working Skills: ${selesai.length} dari ${semua.length} blok selesai`);
        }

        // blok yang tertunda lebih dari 7 hari
        const kini = new Date();
        kini.setHours(0, 0, 0, 0);
        const tertunda = semua
            .filter((b) => b.status !== "selesai" && b.terakhir)
            .map((b) => ({
                nama: b.nama,
                umur: Math.round((kini - new Date(b.terakhir + "T00:00:00")) / 86400000),
            }))
            .filter((b) => b.umur > 7);

        if (tertunda.length) {
            tertunda.forEach((b) => warn(`Working Skills tertunda ${b.umur} hari: ${b.nama}`));
        }
    }
}


// ---------- 22. Pattern drill utuh dan kuncinya sah ----------
{
    const f = "Working Skills/Pattern Drill/pattern_drill_01.js";
    if (!exists(f)) {
        warn("pattern drill 01 belum ada");
    } else {
        const src = read(f);
        const nPotongan = (src.match(/^\s{4}\/\/ \d+$/gm) || []).length;
        const kunciBlok = src.split("const kunci = [")[1] || "";
        const kunciIsi = kunciBlok.split("];")[0] || "";
        const nKunci = (kunciIsi.match(/^\s*\d+,/gm) || []).length;
        const nJawab = ((src.split("const jawab = [")[1] || "").split("];")[0].match(/null,/g) || []).length;

        const sah = (kunciIsi.match(/^\s*(\d+),/gm) || []).map((m) => parseInt(m, 10));
        const diLuar = sah.filter((v) => v < 0 || v > 7);

        if (nPotongan !== 20) warn(`pattern drill: ${nPotongan} potongan, seharusnya 20`);
        else if (nKunci !== 20) warn(`pattern drill: ${nKunci} kunci, seharusnya 20`);
        else if (nJawab !== 20) warn(`pattern drill: ${nJawab} slot jawab, seharusnya 20`);
        else if (diLuar.length) warn(`pattern drill: kunci di luar 0-7: ${diLuar.join(",")}`);
        else ok(`pattern drill utuh: 20 potongan, 20 kunci, kunci sah 0-7`);
    }
}

// ---------- 23. Level VERIFY dan EXPLAIN ada ----------
{
    const enam = ["EASY", "MEDIUM", "HARD", "WRITE", "VERIFY", "EXPLAIN"];
    const files = walk(path.join(ROOT, "Phase 1 Foundation"), ".js")
        .filter((f) => f.includes("Exercises") && /^\d\d_/.test(path.basename(f)));

    const lengkap = files.filter((f) => {
        const src = fs.readFileSync(f, "utf8");
        return enam.every((lv) => src.includes(`=== ${lv} ===`));
    });

    if (lengkap.length === 0) {
        warn("belum ada file latihan dengan enam level (aturan 45)");
    } else {
        ok(`enam level: ${lengkap.length} file (${lengkap.map((f) => path.basename(f)).join(", ")})`);
    }
}

// ---------- 24. Semua blok Working Skills punya file soal ----------
{
    const d = JSON.parse(read("Working Skills/status.json"));
    const hilang = d.blok.filter((b) => !exists(b.soal));
    const kunciHilang = d.blok.filter((b) => b.kunci && !exists(b.kunci));

    if (hilang.length) {
        hilang.forEach((b) => err(`blok ${b.id}: file soal tidak ada (${b.soal})`));
    } else if (kunciHilang.length) {
        kunciHilang.forEach((b) => err(`blok ${b.id}: file kunci tidak ada (${b.kunci})`));
    } else {
        ok(`blok Working Skills: ${d.blok.length} blok, semua file ada`);
    }
}


// ---------- 25. File latihan yang error harus bertanda SENGAJA-ERROR ----------
{
    const dir = "Phase 1 Foundation/1 Week/01_Js Basic/Exercises";
    const files = fs.existsSync(path.join(ROOT, dir))
        ? fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".js"))
        : [];

    const gagalTakBertanda = [];
    const bertanda = [];

    for (const f of files) {
        const full = path.join(ROOT, dir, f);
        const src = fs.readFileSync(full, "utf8");
        const bertandaError = src.includes("SENGAJA-ERROR");

        let error = false;
        try {
            execSync(`node "${full}"`, {
                timeout: 15000,
                stdio: ["ignore", "ignore", "ignore"],
            });
        } catch {
            error = true;
        }

        if (error && !bertandaError) gagalTakBertanda.push(f);
        if (error && bertandaError) bertanda.push(f);
    }

    if (gagalTakBertanda.length) {
        gagalTakBertanda.forEach((f) =>
            warn(`${f} error saat dijalankan tanpa tanda SENGAJA-ERROR`));
    } else {
        ok(`file latihan: ${files.length} file, ${bertanda.length} sengaja error dan bertanda`);
    }
}


// ---------- 26. Setiap level VERIFY punya jawaban dan kunci ----------
{
    const dir = "Phase 1 Foundation/1 Week/01_Js Basic/Exercises";
    const files = fs.existsSync(path.join(ROOT, dir))
        ? fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".js"))
        : [];

    const bermasalah = [];
    let diperiksa = 0;

    for (const f of files) {
        const src = fs.readFileSync(path.join(ROOT, dir, f), "utf8");
        if (!src.includes("=== VERIFY ===")) continue;
        diperiksa++;

        const blokVerify = src.split("=== VERIFY ===")[1].split("=== EXPLAIN ===")[0] || "";

        // harus ada periksa(...) di dalam blok VERIFY
        if (!/periksa\(/.test(blokVerify)) {
            bermasalah.push(`${f}: VERIFY tanpa periksa()`);
        }
        // jawaban tidak boleh null
        if (/const jawab\w* = null/.test(blokVerify)) {
            bermasalah.push(`${f}: VERIFY masih null`);
        }
    }

    if (diperiksa === 0) {
        warn("belum ada level VERIFY di file latihan");
    } else if (bermasalah.length) {
        bermasalah.forEach((m) => warn(m));
    } else {
        ok(`level VERIFY: ${diperiksa} file, semua ada jawaban dan penjaga`);
    }
}

// ---------- 27. Setiap level EXPLAIN menunjuk file review ----------
{
    const dir = "Phase 1 Foundation/1 Week/01_Js Basic/Exercises";
    const files = fs.existsSync(path.join(ROOT, dir))
        ? fs.readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".js"))
        : [];

    const hilang = [];
    let diperiksa = 0;

    for (const f of files) {
        const src = fs.readFileSync(path.join(ROOT, dir, f), "utf8");
        if (!src.includes("=== EXPLAIN ===")) continue;
        diperiksa++;

        const m = src.match(/Working Skills\/Review\/([^"\n]+\.md)/);
        if (!m) {
            hilang.push(`${f}: EXPLAIN tidak menunjuk file review`);
        } else if (!exists(`Working Skills/Review/${m[1]}`)) {
            hilang.push(`${f}: file review tidak ada (${m[1]})`);
        }
    }

    if (diperiksa === 0) {
        warn("belum ada level EXPLAIN di file latihan");
    } else if (hilang.length) {
        hilang.forEach((h) => warn(h));
    } else {
        ok(`level EXPLAIN: ${diperiksa} file, semua menunjuk file review yang ada`);
    }
}

// ---------- 28. Nomor aturan README berurutan ----------
{
    const nos = [...readme.matchAll(/^(\d+)\. \*\*/gm)].map((m) => parseInt(m[1], 10));
    let loncat = null;
    for (let i = 1; i < nos.length; i++) {
        if (nos[i] < nos[i - 1]) { loncat = `#${nos[i - 1]} lalu #${nos[i]}`; break; }
    }
    if (loncat) warn(`nomor aturan README tidak berurutan: ${loncat}`);
    else ok(`nomor aturan README berurutan (${nos.length} aturan bernomor)`);
}


// ---------- 29. Utang terbuka dilaporkan setiap sesi ----------
{
    const src = read("REVIEW_QUEUE.md");
    const blok = (src.split("## Terbuka")[1] || "").split("## Selesai")[0];

    // baris tabel: | Item | Jenis | Muncul | Jatuh tempo | Status |
    const baris = blok
        .split("\n")
        .filter((l) => l.trim().startsWith("|"))
        .map((l) => l.split("|").map((c) => c.trim()))
        .filter((c) => c.length >= 6)
        .filter((c) => c[1] && c[1] !== "Item" && !/^-+$/.test(c[1]));

    const hari = new Date();
    hari.setHours(0, 0, 0, 0);

    const mendesak = baris.filter((c) => {
        const m = (c[4] || "").match(/(\d{4}-\d{2}-\d{2})/);
        if (!m) return false;
        const t = new Date(m[1]);
        t.setHours(0, 0, 0, 0);
        return t <= hari;
    });

    if (baris.length === 0) {
        ok("utang: tidak ada yang terbuka");
    } else if (mendesak.length) {
        mendesak.forEach((c) => warn("utang jatuh tempo: " + c[1]));
        ok("utang: " + baris.length + " terbuka, " + mendesak.length + " jatuh tempo");
    } else {
        ok("utang: " + baris.length + " terbuka, tidak ada yang jatuh tempo");
    }
}

// ---------- 30. Jumlah commit hari ini tidak melewati alarm ----------
{
    // Ambil semua tanggal commit, filter di JS.
    // Catatan 2026-11-18: `git log --since=<hari ini>` mengembalikan kosong
    // di Windows, jadi cara itu tidak bisa dipakai.
    let log = "";
    try {
        log = execSync("git log --date=format:%Y-%m-%d --pretty=format:%ad", {
            encoding: "utf8",
        });
    } catch {
        log = "";
    }

    const hariIni = new Date().toLocaleDateString("en-CA");
    const n = log.trim() ? log.trim().split("\n").filter((d) => d === hariIni).length : 0;

    if (n > 8) {
        warn("commit hari ini: " + n + " commit (alarm > 8, aturan 52)");
    } else {
        ok("commit hari ini: " + n + ", di bawah alarm");
    }
}

// ---------- 31. Soal tidak memakai bahan yang belum diajarkan ----------
{
    const skills = read("SKILLS.md");

    // cari baris array di tabel konsep, ambil nomor minggunya
    const barisArray = skills.split("\n").find((l) => /Array & method/.test(l));
    let mingguArray = 99;
    if (barisArray) {
        const kolom = barisArray.split("|").map((c) => c.trim());
        const angka = kolom.map((c) => parseInt(c, 10)).filter((n) => !isNaN(n));
        if (angka.length) mingguArray = angka[0];
    }

    // kalau array sudah lewat (minggu sekarang >= minggu array), tidak perlu dicek
    const mingguSekarang = 1;
    if (mingguArray <= mingguSekarang) {
        ok("bahan soal: array sudah diajarkan, tidak perlu dicek");
    } else {
        // file soal yang lahir di minggu 1
        const kandidat = walk(path.join(ROOT, "Recheck"), ".js")
            .concat(walk(path.join(ROOT, "Working Skills"), ".js"));

        const pelanggar = [];
        for (const f of kandidat) {
            const src = fs.readFileSync(f, "utf8");
            // hanya periksa file soal, bukan file hasil/kunci
            if (!/soal|recheck|drill/i.test(path.basename(f))) continue;
            // lewati file yang sudah diterima learner sebagai bahan di luar jadwal
            if (src.includes("BAHAN-DILUAR-JADWAL")) continue;

            const pakaiIndeks = /\[i\]/.test(src);
            const pakaiLength = /\.length/.test(src);
            const pakaiPush = /\.push\(/.test(src);

            if (pakaiIndeks || pakaiLength || pakaiPush) {
                pelanggar.push(rel(f));
            }
        }

        if (pelanggar.length) {
            pelanggar.forEach((f) => warn("soal pakai array padahal array minggu " +
                mingguArray + ": " + f));
        } else {
            ok("bahan soal: tidak ada yang memakai array di luar jadwal");
        }
    }
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
