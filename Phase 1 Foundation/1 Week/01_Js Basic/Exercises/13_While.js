// 13_While.js
// Konsep: while loop. Empat level: EASY, MEDIUM, HARD, WRITE.
// Isi jawabanmu di baris "const jawab", ganti null dengan jawabanmu.
// Lalu jalankan: node 13_While.js

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
console.log("while hanya punya kondisi. Perubahan ditulis di dalam badan.");
console.log("");

// E1. Akumulasi dengan while.
{
    let i = 1;
    let total = 0;

    while (i <= 5) {
        total += i;
        i++;
    }

    // Trace: 0+1, 1+2, 3+3, 6+4, 10+5 = 15
    // 5 baris, 5 putaran, 5 penjumlahan.
    const jawab = 15;

    periksa("E1", jawab, total, "total");
}

// E2. Kondisi gagal sejak awal.
{
    let i = 10;
    let jalan = 0;

    while (i < 5) {
        jalan++;
        i++;
    }

    // 10 < 5 sudah false, jadi badan tidak pernah jalan.
    // while memeriksa kondisi SEBELUM badan.
    const jawab = 0;

    periksa("E2", jawab, jalan, "kali jalan");
}

// E3. Mundur dengan langkah 7.
{
    let i = 20;
    let hitung = 0;

    while (i > 0) {
        hitung++;
        i -= 7;
    }

    // i: 20 -> 13 -> 6 -> -1
    // periksa 1: 20 > 0 ya, hitung 1
    // periksa 2: 13 > 0 ya, hitung 2
    // periksa 3:  6 > 0 ya, hitung 3
    // periksa 4: -1 > 0 tidak, berhenti
    // i boleh negatif. Justru -1 yang menghentikan loop.
    const jawab = 3;

    periksa("E3", jawab, hitung, "putaran");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Cari dulu di mana masalahnya, lalu tulis hasilnya.");
console.log("");

// M1. Perubahan i tidak pernah terjadi.
//
// Kode ini TIDAK dijalankan, karena akan menggantung tanpa henti.
// Baca saja, lalu jawab apa yang terjadi.
//
//   let i = 1;
//   let total = 0;
//
//   while (i <= 5) {
//       total += i;
//       if (i === 99) {
//           i++;
//       }
//   }
//
{
    const jawab = null;

    periksa("M1", jawab, "tak berujung", "keterangan");
}

// M2. Kondisi yang tidak pernah benar.
{
    let i = 5;
    let total = 0;

    while (i < 3) {
        total += i;
        i++;
    }

    const jawab = null;

    periksa("M2", jawab, total, "total");
}

// M3. i dinaikkan dua kali di satu putaran.
{
    let i = 1;
    let total = 0;

    while (i <= 6) {
        if (i === 4) {
            i++;
        }
        total += i;
        i++;
    }

    const jawab = null;

    periksa("M3", jawab, total, "total");
}

console.log("");
console.log("=== HARD ===");
console.log("while digabung dengan break, continue, modulus, dan pembagian.");
console.log("");

// H1. break dan continue dalam while.
{
    let i = 1;
    let total = 0;

    while (i <= 30) {
        if (i % 9 === 0) break;
        if (i % 4 === 0) {
            i++;
            continue;
        }
        total += i;
        i++;
    }

    const jawab = null;

    periksa("H1", jawab, total, "total");
}

// H2. Membagi dua sampai habis.
{
    let i = 100;
    let langkah = 0;

    while (i > 1) {
        i = Math.floor(i / 2);
        langkah++;
    }

    const jawab = null;

    periksa("H2", jawab, langkah, "langkah");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis fungsi hitungMundur(n) yang mengembalikan array
//     berisi angka dari n turun sampai 1.
//     hitungMundur(3) menghasilkan [3, 2, 1].
//     hitungMundur(1) menghasilkan [1].
//     hitungMundur(0) menghasilkan [].
//
// Wajib memakai while, bukan for.

const hitungMundur = null;

{
    if (hitungMundur === null) {
        console.log("W1: belum ditulis");
    } else {
        const uji = [
            [3, [3, 2, 1]],
            [1, [1]],
            [0, []],
            [5, [5, 4, 3, 2, 1]],
        ];
        let lulus = 0;

        for (const [masuk, harap] of uji) {
            if (JSON.stringify(hitungMundur(masuk)) === JSON.stringify(harap)) lulus++;
        }

        if (lulus === uji.length) {
            console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
        } else {
            console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
        }
    }
}