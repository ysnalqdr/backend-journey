// working_skills.js
// Menagih blok Working Skills yang belum dikerjakan.
//
// Aturan 41: setiap sesi wajib satu blok Working Skills.
// Skrip ini membaca status.json, lalu:
//   - menampilkan blok mana yang harus dikerjakan sekarang
//   - memperingatkan blok yang tertunda lebih dari 7 hari
//   - keluar dengan kode 1 kalau semua blok masih belum, supaya tidak bisa diabaikan
//
// Cara pakai:
//   node working_skills.js            tampilkan tagihan
//   node working_skills.js --selesai <id>   tandai satu blok selesai
//   node working_skills.js --json     keluaran mesin

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "Working Skills/status.json");
const BATAS_HARI = 7;

function baca() {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

function simpan(data) {
    fs.writeFileSync(FILE, JSON.stringify(data, null, 2) + "\n");
}

function hariSejak(tanggal) {
    if (!tanggal) return null;
    const lalu = new Date(tanggal + "T00:00:00");
    const kini = new Date();
    kini.setHours(0, 0, 0, 0);
    return Math.round((kini - lalu) / 86400000);
}

function urutPrioritas(blok) {
    // belum dulu, lalu sedang, lalu selesai. Di dalamnya, yang paling lama tidak disentuh duluan.
    const bobot = { belum: 0, sedang: 1, selesai: 2 };
    return [...blok].sort((a, b) => {
        const beda = (bobot[a.status] ?? 9) - (bobot[b.status] ?? 9);
        if (beda !== 0) return -beda;
        const ta = a.terakhir ? new Date(a.terakhir).getTime() : 0;
        const tb = b.terakhir ? new Date(b.terakhir).getTime() : 0;
        return ta - tb;
    });
}

const arg = process.argv.slice(2);

if (arg[0] === "--selesai") {
    const id = arg[1];
    if (!id) {
        console.log("Sebutkan id bloknya. Contoh: node working_skills.js --selesai reading-02");
        process.exit(1);
    }

    const data = baca();
    const blok = data.blok.find((b) => b.id === id);

    if (!blok) {
        console.log("Blok dengan id \"" + id + "\" tidak ada.");
        console.log("Id yang tersedia: " + data.blok.map((b) => b.id).join(", "));
        process.exit(1);
    }

    const hari = new Date().toISOString().slice(0, 10);
    blok.status = "selesai";
    blok.terakhir = hari;
    simpan(data);

    console.log("Ditandai selesai: " + blok.nama + " (" + hari + ")");
    const sisa = data.blok.filter((b) => b.status !== "selesai");
    console.log(sisa.length ? "Sisa " + sisa.length + " blok." : "Semua blok selesai.");
    process.exit(0);
}

const data = baca();
const semua = data.blok;
const belum = semua.filter((b) => b.status === "belum");
const sedang = semua.filter((b) => b.status === "sedang");
const selesai = semua.filter((b) => b.status === "selesai");

if (arg[0] === "--json") {
    console.log(JSON.stringify({ belum: belum.length, sedang: sedang.length, selesai: selesai.length, semua }, null, 2));
    process.exit(0);
}

console.log("================================================================");
console.log("  WORKING SKILLS — TAGIHAN SESI INI");
console.log("================================================================");
console.log("");

console.log("  Selesai : " + selesai.length + " dari " + semua.length);
console.log("  Belum   : " + belum.length);
console.log("  Sedang  : " + sedang.length);
console.log("");

// peringatan blok yang tertunda
const tertunda = semua
    .filter((b) => b.status !== "selesai" && b.terakhir)
    .map((b) => ({ ...b, umur: hariSejak(b.terakhir) }))
    .filter((b) => b.umur !== null && b.umur > BATAS_HARI);

if (tertunda.length) {
    console.log("  TERTUNDA LEBIH DARI " + BATAS_HARI + " HARI");
    tertunda.forEach((b) => console.log("    ! " + b.nama + " (" + b.umur + " hari)"));
    console.log("");
}

if (belum.length === 0 && sedang.length === 0) {
    console.log("  Semua blok sudah selesai.");
    console.log("  Buat blok baru, atau naikkan level soal yang sudah ada.");
    console.log("");
    process.exit(0);
}

const antre = urutPrioritas([...belum, ...sedang]);

console.log("  KERJAKAN SATU BLOK INI SEKARANG");
console.log("");
const utama = antre[0];
console.log("    id       : " + utama.id);
console.log("    nama     : " + utama.nama);
console.log("    soal     : " + utama.soal);
console.log("    kunci    : " + utama.kunci);
console.log("    kemampuan: " + utama.kemampuan.join(", "));
console.log("    catatan  : " + utama.catatan);
console.log("");

if (antre.length > 1) {
    console.log("  Berikutnya, kalau yang di atas sudah:");
    antre.slice(1, 4).forEach((b) => console.log("    - " + b.id + "  " + b.nama));
    console.log("");
}

console.log("  Setelah selesai, tandai:");
console.log("    node working_skills.js --selesai " + utama.id);
console.log("");

// blok belum pernah dikerjakan sama sekali = peringatan keras
const belumPernah = semua.filter((b) => b.status === "belum" && !b.terakhir).length;
if (belumPernah === semua.length) {
    console.log("  PERINGATAN: tidak ada satu pun blok Working Skills yang pernah dikerjakan.");
    console.log("  Gerbang harian melatih mengingat konsep. Ini melatih yang diminta di kerja.");
    console.log("");
    process.exit(1);
}

process.exit(0);
