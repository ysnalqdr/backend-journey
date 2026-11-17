// 12_For.js
// Konsep: for loop. Empat level: EASY, MEDIUM, HARD, WRITE.
// Isi jawabanmu di baris "const jawab", ganti null dengan jawabanmu.
// Untuk WRITE, tulis fungsinya di bagian paling bawah.
// Lalu jalankan: node 12_For.js

function periksa(nomor, jawab, benar, satuan) {
    if (jawab === null) {
        console.log(nomor + ": belum dijawab");
    } else if (JSON.stringify(jawab) === JSON.stringify(benar)) {
        console.log(nomor + ": benar, " + JSON.stringify(benar) + " " + satuan);
    } else {
        console.log(nomor + ": salah, jawabanmu " + JSON.stringify(jawab) + ", seharusnya " + JSON.stringify(benar));
    }
}

console.log("=== EASY ===");
console.log("Prediksi hasil. Tulis deret i dulu, jangan di kepala.");
console.log("");

// E1. Akumulasi sederhana.
{
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        total += i;
    }

    const jawab = null;

    periksa("E1", jawab, total, "total");
}

// E2. Mundur dengan langkah 4.
{
    let hitung = 0;

    for (let i = 10; i > 0; i -= 4) {
        hitung++;
    }

    const jawab = null;

    periksa("E2", jawab, hitung, "putaran");
}

// E3. Perubahan berlipat.
{
    let hitung = 0;

    for (let i = 2; i < 30; i *= 3) {
        hitung++;
    }

    const jawab = null;

    periksa("E3", jawab, hitung, "putaran");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Kode di bawah punya bug. Cari dulu, lalu tulis outputnya.");
console.log("");

// M1. Batas terlalu longgar pada array.
{
    const buah = ["apel", "jeruk", "mangga", "pisang"];
    const keluar = [];

    for (let i = 0; i <= buah.length; i++) {
        keluar.push(String(buah[i]));
    }

    const jawab = null;

    periksa("M1", jawab, keluar, "array");
}

// M2. Variabel penampung ditulis ulang di dalam loop.
{
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        let total = i * 10;
    }

    const jawab = null;

    periksa("M2", jawab, total, "total");
}

// M3. continue pada putaran tertentu.
{
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        if (i === 4) continue;
        total += i;
    }

    const jawab = null;

    periksa("M3", jawab, total, "total");
}

console.log("");
console.log("=== HARD ===");
console.log("Menggabung for dengan break, continue, modulus, dan ternary.");
console.log("");

// H1. break dan continue dalam satu loop.
{
    let total = 0;

    for (let i = 1; i <= 20; i++) {
        if (i % 7 === 0) break;
        if (i % 3 === 0) continue;
        total += i;
    }

    const jawab = 12;

    periksa("H1", jawab, total, "total");
}

// H2. Ternary di dalam loop.
{
    const hasil = [];

    for (let i = 1; i <= 5; i++) {
        hasil.push(i % 2 === 0 ? i * 10 : i);
    }

    const jawab = [1, 20, 3, 40, 5];

    periksa("H2", jawab, hasil, "array");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis loop yang menjumlahkan 1 sampai n.
//     Untuk n = 7 hasilnya 28, karena 1+2+3+4+5+6+7 = 28.
//     Untuk n = 1 hasilnya 1.
//     Untuk n = 0 hasilnya 0.
//
// Catatan 2026-11-15: versi asli soal ini meminta FUNGSI, padahal fungsi materi
// minggu 2. Diganti jadi loop saja supaya sesuai README #42.

const n = 7;
let totalN = 0;

for (let i = 1; i <= n; i++) {
    totalN += i;
}

{
    const harap = [1, 1, 0, 28, 55];
    const masuk = [1, 1, 0, 7, 10];
    let lulus = 0;

    for (let k = 0; k < harap.length; k++) {
        let uji = 0;
        for (let i = 1; i <= masuk[k]; i++) {
            uji += i;
        }
        if (uji === harap[k]) lulus++;
    }

    if (lulus === harap.length) {
        console.log("W1: benar, lulus " + lulus + " dari " + harap.length + " kasus");
    } else {
        console.log("W1: salah, lulus " + lulus + " dari " + harap.length + " kasus");
    }
}

// Jawaban pertamaku salah (2026-11-15): menulis `if` bukan `for`.
//   if ( let i = 1; i <= n; i++) {
// Hasilnya: SyntaxError: Unexpected identifier 'i'
// Sebab: `if` di dalam kurungnya minta pertanyaan, bukan deklarasi variabel.
// Logikanya sudah benar (28), tapi kode tidak pernah jalan.

console.log("totalN:", totalN);

console.log("");
console.log("=== VERIFY ===");
console.log("Kode di bawah ditulis AI. Ada satu bug. Temukan dulu, jangan diperbaiki.");
console.log("");

// V1. AI menulis ini untuk "jumlahkan semua isi array".
//
//   const angka = [10, 20, 30];
//   let total = 0;
//
//   for (let i = 1; i <= angka.length; i++) {
//       total += angka[i];
//   }
//   console.log(total);
//
// AI mengaku hasilnya 60.
//
// Yang ditanyakan:
//   a) Berapa hasil sebenarnya? (satu nilai, atau tulis "NaN")
//   b) Ada DUA hal salah. Sebut keduanya.

{
    const jawabA = "NaN";
    periksa("V1a hasil sebenarnya", jawabA, "NaN", "nilai");

    // Dua kesalahan:
    // 1. i mulai dari 1, bukan 0 -> angka[0] terlewat
    // 2. i <= angka.length -> putaran terakhir angka[3] = undefined
    //    undefined masuk ke += -> total jadi NaN
    //
    // Perbaikan: i = 0 dan i < angka.length.
    // Bug jenis 1 (off-by-one) dan 5 (batas tidak diperiksa).
}

console.log("");
console.log("=== EXPLAIN ===");
console.log("Tulis komentar review maksimal 3 kalimat.");
console.log("");

// E1. Tulis komentar review untuk kode ini.
//
//   let total = 0;
//
//   for (let i = 1; i <= 5; i++) {
//       total += i * i;
//   }
//
// Kode ini BENAR.
// Tiga hal wajib: apa yang dilakukan, hasil akhirnya berapa, dan
// kenapa total harus dideklarasikan DI LUAR loop.
//
// Tulis di Working Skills/Review/04_Komentar For.md

console.log("E1: tulis komentarmu di Working Skills/Review/04_Komentar For.md");
