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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

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

    const jawab = null;

    periksa("H2", jawab, deret, "array");
}

console.log("");
console.log("=== WRITE ===");
console.log("Tulis sendiri, tanpa contoh. Bagian paling bawah file ini.");
console.log("");

// W1. Tulis fungsi segitiga(n) yang mengembalikan array berisi teks.
//     Baris ke-i berisi bintang sebanyak i, diakhiri nomor baris.
//     segitiga(3) menghasilkan ["*1", "**2", "***3"].
//     segitiga(1) menghasilkan ["*1"].
//     segitiga(0) menghasilkan [].
//
// Wajib memakai dua loop bersarang.

const segitiga = null;

{
    if (segitiga === null) {
        console.log("W1: belum ditulis");
    } else {
        const uji = [
            [3, ["*1", "**2", "***3"]],
            [1, ["*1"]],
            [0, []],
            [4, ["*1", "**2", "***3", "****4"]],
        ];
        let lulus = 0;

        for (const [masuk, harap] of uji) {
            if (JSON.stringify(segitiga(masuk)) === JSON.stringify(harap)) lulus++;
        }

        if (lulus === uji.length) {
            console.log("W1: benar, lulus " + lulus + " dari " + uji.length + " kasus");
        } else {
            console.log("W1: salah, lulus " + lulus + " dari " + uji.length + " kasus");
        }
    }
}
