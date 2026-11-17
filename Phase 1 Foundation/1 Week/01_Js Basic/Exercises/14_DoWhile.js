// 14_DoWhile.js
// Konsep: do...while. Empat level: EASY, MEDIUM, HARD, WRITE.
// Isi jawabanmu di baris "const jawab", ganti null dengan jawabanmu.
// Lalu jalankan: node 14_DoWhile.js

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
console.log("do...while memeriksa kondisi SETELAH badan, jadi badan jalan minimal sekali.");
console.log("");

// E1. do...while biasa.
{
    let i = 0;
    const deret = [];

    do {
        deret.push(i);
        i++;
    } while (i < 3);

    const jawab = null;

    periksa("E1", jawab, deret, "array");
}

// E2. Kondisi gagal sejak awal, tapi badan tetap jalan.
{
    let i = 10;
    let jalan = 0;

    do {
        jalan++;
        i++;
    } while (i < 5);

    const jawab = null;

    periksa("E2", jawab, jalan, "kali jalan");
}

// E3. Akumulasi.
{
    let i = 1;
    let total = 0;

    do {
        total += i;
        i++;
    } while (i <= 4);

    const jawab = null;

    periksa("E3", jawab, total, "total");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Cari dulu di mana masalahnya, lalu tulis hasilnya.");
console.log("");

// M1. Perubahan tidak ada, jadi kondisinya tidak pernah berubah.
{
    let i = 0;
    let hitung = 0;

    do {
        hitung++;
    } while (i > 0);

    const jawab = null;

    periksa("M1", jawab, hitung, "kali jalan");
}

// M2. Sama seperti while, tapi pakai do...while.
{
    let i = 0;
    let total = 0;

    do {
        total += i;
        i++;
    } while (i < 0);

    const jawab = null;

    periksa("M2", jawab, total, "total");
}

// M3. break di tengah do...while.
{
    let i = 5;
    let total = 0;

    do {
        total += i;
        i--;
        if (total > 12) break;
    } while (i > 0);

    const jawab = null;

    periksa("M3", jawab, total, "total");
}

console.log("");
console.log("=== HARD ===");
console.log("do...while digabung dengan ternary, modulus, dan kondisi ganda.");
console.log("");

// H1. Deret Collatz, berhenti saat angka jadi 1.
{
    let angka = 27;
    let langkah = 0;

    do {
        angka = angka % 2 === 0 ? angka / 2 : angka * 3 + 1;
        langkah++;
    } while (angka !== 1 && langkah < 200);

    const jawab = null;

    periksa("H1", jawab, langkah, "langkah");
}

// H2. Dua kondisi di while, salah satunya soal total.
{
    let i = 1;
    let total = 0;

    do {
        total += i * 3;
        i++;
    } while (i <= 5 && total < 30);

    const jawab = null;

    periksa("H2", jawab, total, "total");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis do...while yang mengisi array dengan angka 1, 4, 7, ...
//     sampai nilainya >= n.
//     Untuk n = 7 hasilnya [1, 4, 7].
//     Untuk n = 8 hasilnya [1, 4, 7].
//     Untuk n = 0 hasilnya [1]  <- minimal satu angka, itu sifat do...while.
//     Untuk n = 13 hasilnya [1, 4, 7, 10, 13].
//
// Catatan 2026-11-17: versi asli soal ini meminta FUNGSI, padahal fungsi materi
// minggu 2. Diganti jadi loop saja supaya sesuai README #42.

{
    const n = 7;
    const hasil = [];
    let i = 1;

    do {
        hasil.push(i);
        i += 3;
    } while (i <= n);

    console.log("W1 hasil untuk n = 7: " + JSON.stringify(hasil));

    const uji = [
        [7, [1, 4, 7]],
        [8, [1, 4, 7]],
        [0, [1]],
        [13, [1, 4, 7, 10, 13]],
    ];
    let lulus = 0;

    for (const [masuk, harap] of uji) {
        let j = 1;
        const keluar = [];
        do {
            keluar.push(j);
            j += 3;
        } while (j <= masuk);
        if (JSON.stringify(keluar) === JSON.stringify(harap)) lulus++;
    }

    if (lulus === uji.length) {
        console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
    } else {
        console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
    }
}

console.log("");
console.log("=== VERIFY ===");
console.log("Kode di bawah ditulis AI. Ada satu bug. Temukan dulu.");
console.log("");

// V1. AI menulis ini untuk "tampilkan menu minimal sekali".
//
//   let pilihan = "keluar";
//
//   while (pilihan !== "keluar") {
//       console.log("menu tampil");
//   }
//
// Yang ditanyakan:
//   a) Berapa kali "menu tampil" tercetak? (satu nilai)
//   b) Kenapa berbeda dari yang diminta?

{
    const jawabA = 0;
    periksa("V1a menu tercetak", jawabA, 0, "kali");

    // Alasan: while memeriksa kondisi SEBELUM badan. pilihan sudah "keluar",
    // jadi kondisi langsung false dan badan tidak pernah jalan.
    // Untuk "minimal sekali" harus do...while, bukan while.
}

console.log("");
console.log("=== EXPLAIN ===");
console.log("Tulis komentar review maksimal 3 kalimat.");
console.log("");

// E1. Tulis komentar review untuk kode ini.
//
//   let i = 1;
//   let total = 0;
//
//   do {
//       if (i === 4) continue;
//       total += i;
//       i++;
//   } while (i <= 6);
//
// Tiga hal wajib: apa rusak, kapan, bagaimana memperbaiki.
// Tulis di Working Skills/Review/02_Komentar While.md bagian kedua.

console.log("E1: tulis komentarmu di Working Skills/Review/02_Komentar While.md");
