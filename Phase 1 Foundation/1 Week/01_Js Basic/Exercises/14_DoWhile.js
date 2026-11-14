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

// W1. Tulis fungsi ulangSampai(n) yang mengembalikan array berisi
//     angka mulai dari 1, ditambah 3 terus, sampai nilainya melewati n.
//     Angka yang melewati n TIDAK dimasukkan.
//     ulangSampai(7) menghasilkan [1, 4, 7].
//     ulangSampai(8) menghasilkan [1, 4, 7].
//     ulangSampai(0) menghasilkan [1].
//
// Perhatikan kasus terakhir: minimal satu angka selalu masuk,
// karena itulah sifat do...while. Wajib memakai do...while.

const ulangSampai = null;

{
    if (ulangSampai === null) {
        console.log("W1: belum ditulis");
    } else {
        const uji = [
            [7, [1, 4, 7]],
            [8, [1, 4, 7]],
            [0, [1]],
            [13, [1, 4, 7, 10, 13]],
        ];
        let lulus = 0;

        for (const [masuk, harap] of uji) {
            if (JSON.stringify(ulangSampai(masuk)) === JSON.stringify(harap)) lulus++;
        }

        if (lulus === uji.length) {
            console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
        } else {
            console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
        }
    }
}
