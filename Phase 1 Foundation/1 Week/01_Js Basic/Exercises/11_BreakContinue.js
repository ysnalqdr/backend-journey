// 11_BreakContinue.js
// Hari 4 - break, continue, dan modulus.
// Dibuat 2026-11-12. Soal dan jawaban, dijalankan untuk memeriksa sendiri.
// Jawaban salah tidak dihapus, dikoreksi di bawahnya.

// Modulus
//
// % dibaca modulus, nama lengkapnya modulus operator atau remainder operator.
// Hasilnya sisa bagi, bukan hasil bagi.
//
// Cara menghitung tanpa pembagian: kurangi terus sampai tidak bisa lagi.
//
//   7 % 3    -> 7 - 3 = 4 ; 4 - 3 = 1 ; 1 sudah lebih kecil dari 3 -> sisa 1
//   9 % 3    -> 9 - 3 = 6 ; 6 - 3 = 3 ; 3 - 3 = 0              -> sisa 0
//   10 % 3   -> 10 - 3 = 7 ; 7 - 3 = 4 ; 4 - 3 = 1             -> sisa 1
//
// Jalan pintas untuk % 2: genap hasilnya 0, ganjil hasilnya 1.
//
//   i % 2 === 0  -> genap
//   i % 2 === 1  -> ganjil
//   i % 3 === 0  -> kelipatan 3

console.log("=== Modulus ===");
console.log("7 % 3  =", 7 % 3);
console.log("9 % 3  =", 9 % 3);
console.log("10 % 3 =", 10 % 3);
console.log("");

// Break dan continue
//
// break    -> loop berhenti total, putaran berikutnya tidak ada
// continue -> putaran ini dilewati, putaran berikutnya tetap jalan
//
// Posisi if menentukan: kalau if di atas penambahan, putaran itu tidak menambah.
//                       kalau if di bawah penambahan, putaran itu sudah menambah.

function periksa(nomor, jawab, benar, satuan) {
    if (jawab === null) {
        console.log(nomor + ": belum dijawab");
    } else if (JSON.stringify(jawab) === JSON.stringify(benar)) {
        console.log(nomor + ": benar, " + JSON.stringify(benar) + " " + satuan);
    } else {
        console.log(nomor + ": salah, jawabanmu " + JSON.stringify(jawab) + ", seharusnya " + JSON.stringify(benar));
    }
}

console.log("=== Soal break dan continue ===");

// S1. Berapa nilai total.
{
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        if (i === 4) break;
        total += i;
    }

    // Jawabanku: 3 (salah, berhenti di i=3 padahal 3 === 4 false)
    // Benar: 1 + 2 + 3 = 6
    const jawab = 6;

    periksa("S1", jawab, total, "total");
}

// S2. Berapa nilai total.
{
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        total += i;
    }

    // Jawabanku: 12
    const jawab = 12;

    periksa("S2", jawab, total, "total");
}

// S3. Apa isi array hasil.
{
    const hasil = [];

    for (let i = 1; i <= 6; i++) {
        if (i % 2 === 0) continue;
        hasil.push(i);
    }

    // Jawabanku: [1, 3, 5]
    const jawab = [1, 3, 5];

    periksa("S3", jawab, hasil, "array");
}

// S4. Berapa nilai total. Ini yang salah, diulang di akhir sesi.
{
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) break;
        total += i;
    }

    // Jawabanku: 19 (salah, dua kekeliruan: i % 3 disangka ganjil,
    //            dan break disangka continue)
    // Benar: 1 + 2 = 3, berhenti di i = 3
    const jawab = 3;

    periksa("S4", jawab, total, "total");
}

// S5. Berapa nilai hitung.
{
    let hitung = 0;

    for (let i = 1; i <= 8; i++) {
        if (i % 2 === 1) continue;
        hitung += i;
    }

    // Jawabanku: 20
    const jawab = 20;

    periksa("S5", jawab, hitung, "hitung");
}

// S6. Apa isi array out. Dua if dalam satu loop.
{
    const out = [];

    for (let i = 1; i <= 6; i++) {
        if (i === 2) continue;
        if (i === 5) break;
        out.push(i);
    }

    // Jawabanku: [1, 3, 4]
    const jawab = [1, 3, 4];

    periksa("S6", jawab, out, "array");
}

// S7. Soal pendek setelah koreksi.
{
    const hasil = [];

    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        hasil.push(i);
    }

    // Jawabanku: [1, 2, 4, 5]
    const jawab = [1, 2, 4, 5];

    periksa("S7", jawab, hasil, "array");
}

console.log("");
console.log("=== Nested loop (belum diuji) ===");

// Nested loop
//
// Loop dalam jalan penuh setiap kali loop luar jalan satu kali.
// Total putaran = jumlah luar x jumlah dalam.
// break di loop dalam hanya keluar dari loop dalam, loop luar tetap jalan.

{
    let hitung = 0;

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 3; j++) {
            hitung++;
        }
    }

    console.log("N1: " + hitung + " putaran (4 x 3)");
}

{
    const hasil = [];

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 2; j++) {
            hasil.push(i + "-" + j);
        }
    }

    console.log("N2: " + JSON.stringify(hasil));
}

{
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 2; j++) {
            total += i * j;
        }
    }

    console.log("N3: " + total);
}
