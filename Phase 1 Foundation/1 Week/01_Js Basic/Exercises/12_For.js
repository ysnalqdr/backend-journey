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

    const jawab = null;

    periksa("H1", jawab, total, "total");
}

// H2. Ternary di dalam loop.
{
    const hasil = [];

    for (let i = 1; i <= 5; i++) {
        hasil.push(i % 2 === 0 ? i * 10 : i);
    }

    const jawab = null;

    periksa("H2", jawab, hasil, "array");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis fungsi hitungTotal(n) yang menjumlahkan angka 1 sampai n.
//     hitungTotal(4) menghasilkan 10, karena 1+2+3+4 = 10.
//     hitungTotal(1) menghasilkan 1.
//     hitungTotal(0) menghasilkan 0.
//
// Ganti null di bawah dengan fungsimu.

const hitungTotal = null;

{
    if (hitungTotal === null) {
        console.log("W1: belum ditulis");
    } else {
        const uji = [
            [4, 10],
            [1, 1],
            [0, 0],
            [10, 55],
        ];
        let lulus = 0;

        for (const [masuk, harap] of uji) {
            if (hitungTotal(masuk) === harap) lulus++;
        }

        if (lulus === uji.length) {
            console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
        } else {
            console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
        }
    }
}
