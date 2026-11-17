// 13_WhileBuild.js
// Day 4 - membangun dasar while per konsep, sebelum gerbang.
// Soal dan jawaban dari sesi 2026-11-17.
// Lalu jalankan: node 13_WhileBuild.js

function periksa(nomor, jawab, benar, satuan) {
    if (jawab === null) {
        console.log(nomor + ": belum dijawab");
    } else if (JSON.stringify(jawab) === JSON.stringify(benar)) {
        console.log(nomor + ": benar, " + JSON.stringify(benar) + " " + satuan);
    } else {
        console.log(nomor + ": salah, jawabanmu " + JSON.stringify(jawab) +
            ", seharusnya " + JSON.stringify(benar));
    }
}

console.log("=== Konsep A - while sama dengan for ===");

{
    let i = 1;
    let total = 0;

    while (i <= 6) {
        total += i;
        i++;
    }

    // Trace: 0+1, 1+2, 3+3, 6+4, 10+5, 15+6 = 21
    // 6 baris, 6 putaran, 6 penjumlahan.
    // Jawaban pertama salah: i dianggap mulai dari 0, jadi ada 7 baris.
    const jawab = 21;

    periksa("A", jawab, total, "total");
}

console.log("");
console.log("=== Konsep B - kondisi gagal sejak awal ===");

{
    let i = 7;
    let hitung = 0;

    while (i > 10) {
        hitung++;
        i++;
    }

    // 7 > 10 sudah false, jadi badan tidak pernah jalan.
    const jawab = 0;

    periksa("B", jawab, hitung, "putaran");
}

console.log("");
console.log("=== Konsep C - bentuk perubahan ===");

{
    let i = 1;
    let total = 0;

    while (i <= 4) {
        total += i * 10;
        i++;
    }

    // i * 10 dihitung dulu, baru ditambahkan:
    // 0+10, 10+20, 30+30, 60+40 = 100
    const jawab = 100;

    periksa("C", jawab, total, "total");
}

console.log("");
console.log("=== Konsep D - deteksi bug ===");

{
    let i = 1;
    let total = 0;

    while (i <= 5) {
        i++;
        total += i;
    }

    // Bug: i++ ditulis SEBELUM total += i.
    // Yang ditambahkan jadi 2,3,4,5,6 -> 20, bukan 1,2,3,4,5 -> 15.
    // Kode jalan, tidak error, hasilnya masuk akal. Tidak ketahuan kalau hanya dijalankan.
    const jawabSalah = 20;
    const jawabBenar = 15;

    periksa("D nilai sebenarnya", jawabSalah, total, "total");
    periksa("D nilai seharusnya", jawabBenar, 15, "total");
}

console.log("");
console.log("=== Bentuk yang benar ===");

{
    let i = 1;
    let total = 0;

    while (i <= 5) {
        total += i;
        i++;
    }

    console.log("total dengan urutan benar:", total);
}

console.log("");
console.log("=== Jebakan: while (i) dengan langkah 2 dari angka ganjil ===");

{
    // Kode ini TIDAK dijalankan. Akan menggantung tanpa henti.
    //
    //   let i = 5;
    //   while (i) {
    //       i -= 2;
    //   }
    //
    // Deret: 5, 3, 1, -1, -3, -5, ... tidak pernah menyentuh 0.
    // while (i) butuh 0 untuk berhenti, karena 0 itu falsy.
    //
    // Versi aman: mulai dari angka genap, atau pakai i -= 1.

    let i = 6;
    let hitung = 0;

    while (i) {
        hitung++;
        i -= 2;
    }

    periksa("Jebakan (versi genap)", 3, hitung, "putaran");
}
