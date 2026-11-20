// 15_Nested.js
// Konsep: nested loop. Empat level: EASY, MEDIUM, HARD, WRITE.
// Isi jawabanmu di baris "const jawab", ganti null dengan jawabanmu.
// Lalu jalankan: node 15_Nested.js

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
console.log("Loop dalam jalan penuh setiap kali loop luar jalan satu kali.");
console.log("");

// E1. Hitung total putaran.
{
    let hitung = 0;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 5; j++) {
            hitung++;
        }
    }

    const jawab = 15;

    periksa("E1", jawab, hitung, "putaran");
}

// E2. Isi array.
{
    const deret = [];

    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 2; j++) {
            deret.push(i * 10 + j);
        }
    }

    const jawab = [11, 12, 21, 22];

    periksa("E2", jawab, deret, "array");
}

// E3. Batas loop dalam memakai i.
{
    let total = 0;

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= i; j++) {
            total += i;
        }
    }

    // i dijumlahkan sebanyak panjang barisnya:
    // i=1 -> +1 (1 kali), i=2 -> +2,+2 (2 kali), i=3 -> +3,+3,+3, i=4 -> +4 x4
    // 1 + 4 + 9 + 16 = 30
    const jawab = 30;

    periksa("E3", jawab, total, "total");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Cari dulu di mana masalahnya, lalu tulis hasilnya.");
console.log("");

// M1. break di loop dalam, loop luar tetap jalan.
{
    const deret = [];

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (j > i) break;
            deret.push("" + i + j);
        }
    }

    const jawab = ["11", "21", "22", "31", "32", "33"];

    periksa("M1", jawab, deret, "array");
}

// M2. break yang memakai hasil kali.
{
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (i * j === 6) break;
            total += i * j;
        }
    }

    const jawab = 15;

    periksa("M2", jawab, total, "total");
}

// M3. Variabel penampung di dalam loop dalam.
{
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 2; j++) {
            let total = i * j;
        }
    }

    const jawab = 0;

    periksa("M3", jawab, total, "total");
}

console.log("");
console.log("=== HARD ===");
console.log("Nested loop digabung dengan ternary, continue, dan akumulasi.");
console.log("");

// H1. continue di loop dalam.
{
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            if (j === i) continue;
            total += i * j;
        }
    }

    const jawab = 22;

    periksa("H1", jawab, total, "total");
}

// H2. Ternary di loop dalam.
{
    const deret = [];

    for (let i = 1; i <= 2; i++) {
        for (let j = 1; j <= 3; j++) {
            deret.push(j % 2 === 0 ? i + "-genap" : i + "-ganjil");
        }
    }

    const jawab = ["1-ganjil", "1-genap", "1-ganjil", "2-ganjil", "2-genap", "2-ganjil"];

    periksa("H2", jawab, deret, "array");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis dua loop bersarang yang menghasilkan array pola segitiga.
//     Untuk n = 3 hasilnya ["*1", "**2", "***3"].
//     Untuk n = 1 hasilnya ["*1"].
//     Untuk n = 0 hasilnya [].
//
// Catatan 2026-11-17: versi asli soal ini meminta FUNGSI, padahal fungsi materi
// minggu 2. Diganti jadi loop saja supaya sesuai README #42.

{
    const n = 3;
    const hasil = [];

    for (let i = 1; i <= n; i++) {
        let bintang = "";
        for (let j = 1; j <= i; j++) {
            bintang += "*";
        }
        hasil.push(bintang + i);
    }

    console.log("W1 hasil untuk n = 3: " + JSON.stringify(hasil));

    const uji = [
        [3, ["*1", "**2", "***3"]],
        [1, ["*1"]],
        [0, []],
        [4, ["*1", "**2", "***3", "****4"]],
    ];
    let lulus = 0;

    for (const [masuk, harap] of uji) {
        const keluar = [];
        for (let i = 1; i <= masuk; i++) {
            let b = "";
            for (let j = 1; j <= i; j++) b += "*";
            keluar.push(b + i);
        }
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

// V1. AI menulis ini untuk "hitung total putaran nested 3 x 4".
//
//   let hitung = 0;
//
//   for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= 4; j++) {
//           hitung++;
//       }
//   }
//   console.log(hitung);
//
// AI mengaku hasilnya 7, karena "3 + 4".
//
// Yang ditanyakan: berapa hasil sebenarnya?

{
    const jawab = 12;
    periksa("V1 total putaran", jawab, 12, "putaran");

    // Alasan: loop luar 3, loop dalam 4, jadi 3 x 4 = 12, bukan 3 + 4.
    // Loop dalam jalan PENUH setiap kali loop luar jalan sekali.
}

console.log("");
console.log("=== EXPLAIN ===");
console.log("Tulis komentar review maksimal 3 kalimat.");
console.log("");

// E1. Tulis komentar review untuk kode ini.
//
//   const hasil = [];
//
//   for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= 3; j++) {
//           hasil.push(i + "-" + j);
//       }
//   }
//
// Kode ini BENAR. Tapi ada yang perlu dikomentari: apa yang terjadi
// kalau i naik ke 2, dan berapa total isi array?
//
// Ini latihan menulis komentar untuk kode yang tidak rusak —
// bagian tersulit dari review.

console.log("E1: tulis komentarmu di Working Skills/Review/03_Komentar Nested.md");
