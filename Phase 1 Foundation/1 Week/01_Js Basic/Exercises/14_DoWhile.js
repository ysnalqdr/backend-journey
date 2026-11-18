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

    // push 0, i jadi 1, cek 1 < 3 ya
    // push 1, i jadi 2, cek 2 < 3 ya
    // push 2, i jadi 3, cek 3 < 3 tidak
    const jawab = [0, 1, 2];

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

    // i = 10, badan jalan sekali (jalan 1, i 11), cek 11 < 5 tidak
    const jawab = 1;

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

    // 0+1, 1+2, 3+3, 6+4 = 10
    // i mendarat tepat di 4, dan 4 <= 4 ya, jadi 4 putaran
    const jawab = 10;

    periksa("E3", jawab, total, "total");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Cari dulu di mana masalahnya, lalu tulis hasilnya.");
console.log("");

// M1. Kondisi salah sejak awal, tapi badan tetap jalan sekali.
//
// Catatan 2026-11-18: komentar lama menulis "kondisinya tidak pernah berubah",
// itu SALAH. i = 0 dan kondisi i > 0 sudah false sejak awal, jadi loop berhenti
// setelah satu putaran. Ini bukan infinite loop, ini sifat do...while.
{
    let i = 0;
    let hitung = 0;

    do {
        hitung++;
    } while (i > 0);

    // i = 0, kondisi 0 > 0 sudah false sejak awal
    // tapi badan tetap jalan sekali -> hitung = 1
    // BUKAN infinite loop, karena kondisinya false, bukan selalu true
    const jawab = 1;

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

    // total += 0 -> tetap 0, i jadi 1, cek 1 < 0 tidak
    const jawab = 0;

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

    // +5=5, +4=9, +3=12, cek 12 > 12 TIDAK -> lanjut
    // +2=14, cek 14 > 12 YA -> break
    // i mendarat tepat di total 12, dan 12 > 12 itu false
    const jawab = 14;

    periksa("M3", jawab, total, "total");
}

console.log("");
console.log("=== HARD ===");
console.log("do...while digabung dengan ternary, modulus, dan kondisi ganda.");
console.log("");

// H1. Deret Collatz, berhenti saat angka jadi 1.
//
// Catatan 2026-11-18: angka asli 27 butuh 111 langkah, tidak mungkin dilacak
// manual. Diganti 6 supaya bisa diverifikasi: 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
// Yang diuji tetap dua hal: membaca ternary, dan tahu kondisi mana yang menghentikan.
{
    let angka = 6;
    let langkah = 0;

    do {
        angka = angka % 2 === 0 ? angka / 2 : angka * 3 + 1;
        langkah++;
    } while (angka !== 1 && langkah < 50);

    // 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
    // 8 putaran. Berhenti karena angka === 1, bukan karena langkah
    const jawab = 8;

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

    // +3=3, +6=9, +9=18, +12=30
    // putaran ke-4 tetap jalan, kondisi diperiksa SESUDAH badan
    // 30 < 30 itu false -> berhenti. total = 30
    const jawab = 30;

    periksa("H2", jawab, total, "total");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis do...while yang mengisi array dengan angka 2, 6, 10, 14, ...
//     Mulai dari 2, naik 4, sampai nilainya >= n.
//     Untuk n = 14 hasilnya [2, 6, 10, 14].
//     Untuk n = 22 hasilnya [2, 6, 10, 14, 18, 22].
//     Untuk n = 3 hasilnya [2].
//     Untuk n = 0 hasilnya [2]  <- minimal satu angka, itu sifat do...while.
//
// Catatan 2026-11-18: versi asli memakai angka 1 naik 3 dan meminta FUNGSI.
// Fungsi materi minggu 2, jadi diganti loop. Angka diubah supaya tidak sama
// dengan contoh di materi.

{
    const n = 14;
    const hasil = [];
    let i = 2;

    do {
        hasil.push(i);
        i += 4;
    } while (i <= n);

    console.log("W1 hasil untuk n = 14: " + JSON.stringify(hasil));

    const uji = [
        [14, [2, 6, 10, 14]],
        [22, [2, 6, 10, 14, 18, 22]],
        [3, [2]],
        [0, [2]],
    ];
    let lulus = 0;

    for (const [masuk, harap] of uji) {
        let j = 2;
        const keluar = [];
        do {
            keluar.push(j);
            j += 4;
        } while (j <= masuk);
        if (JSON.stringify(keluar) === JSON.stringify(harap)) lulus++;
    }

    if (lulus === uji.length) {
        console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
    } else {
        console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
    }
}

// Jawaban pertamaku salah (2026-11-18):
//
//   do {
//       hasil.push(i);
//       i += 2;        // salah: naik 2, seharusnya 4
//   } while (i <= n)   // salah: kurang titik koma
//
// Strukturnya sudah benar: push dulu, lalu naikkan, lalu kondisi i <= n.
// Dua kesalahan kecil: jumlah kenaikan, dan titik koma wajib di do...while.
