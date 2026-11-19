// BAHAN-DILUAR-JADWAL: seri ini memakai array, materi minggu 3.
// Dipakai di minggu 1 atas keputusan learner 2026-11-17: lanjutkan drill,
// array dikejar saat waktunya. Penjaga #31 melewati file dengan penanda ini.

// Pattern Drill — mengenali jenis bug tanpa menghitung
//
// Cara pakai:
//   1. Baca 20 potong kode di bawah
//   2. Untuk masing-masing, sebut nomor jenisnya:
//        1 off-by-one        5 batas tidak diperiksa
//        2 shadowing         6 nilai salah ditambahkan
//        3 reset di loop     7 nilai dihitung lalu dibuang
//        4 guard salah       0 BENAR, tidak ada bug
//   3. Tulis jawabanmu di array `jawab` di bagian bawah
//   4. Jalankan: node pattern_drill_01.js
//
// Waktu: 5 menit. Jangan dijalankan, jangan dihitung. Cuma dikenali.
// Satu potongan hanya punya SATU jenis bug.

const potongan = [

    // 1
    `const buah = ["apel", "jeruk"];
for (let i = 0; i <= buah.length; i++) {
    console.log(buah[i]);
}`,

    // 2
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    let total = i * 10;
}
console.log(total);`,

    // 3
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    total = 0;
    total += i;
}`,

    // 4
    `if (user.nama.length > 0 && user) {
    console.log("ada");
}`,

    // 5
    `const harga = 250000;
const jumlah = 2;
let total = 0;
for (let i = 1; i <= jumlah; i++) {
    total += 1;
}`,

    // 6
    `const valid = jumlah > 0;
const subtotal = harga * jumlah;
console.log(subtotal);`,

    // 7
    `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,

    // 8
    `const data = [1, 2, 3];
let jumlah = 0;
for (let i = 0; i <= data.length; i++) {
    jumlah += data[i];
}`,

    // 9
    `// maksudnya: jumlahkan 1 sampai 5
let total = 0;
for (let i = 1; i < 5; i++) {
    total += i;
}`,

    // 10
    `let hasil = 0;
for (let i = 1; i <= 4; i++) {
    hasil += i;
}
console.log(hasil);`,

    // 11
    `let total = 0;
const daftar = [10, 20, 30];
for (let i = 0; i < daftar.length; i++) {
    total += daftar[i];
}`,

    // 12
    `let total = 0;
for (let i = 1; i <= 5; i++) {
    i++;
    total += i;
}`,

    // 13
    `const data = ["a", "b", "c"];
const keluar = [];
for (let i = 0; i <= data.length; i++) {
    keluar.push(data[i]);
}`,

    // 14
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    let sisa = 10;
    sisa -= i;
    total += sisa;
}`,

    // 15
    `const user = null;
if (user.nama && user) {
    console.log("ada");
}`,

    // 16
    `const stok = 0;
const habis = stok <= 0;
console.log(habis);`,

    // 17
    `let total = 0;
for (let i = 1; i <= 4; i++) {
    total += i * 10;
}
console.log(total);`,

    // 18
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    total += i;
}
const rata = total / 3;
const cek = rata > 0;
console.log(rata);`,

    // 19
    `const panjang = 5;
const arr = [];
for (let i = 1; i < panjang; i++) {
    arr.push(i);
}`,

    // 20
    `let total = 0;
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) continue;
    total += i;
}`,
];

// Isi jawabanmu di sini. Satu angka per potongan, 0 kalau menurutmu benar.
// Ganti null dengan nomor jenis bug.
const jawab = [
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
];

// Kunci
const kunci = [
    5,  // 1  i <= buah.length -> putaran terakhir buah[2] = undefined
    2,  // 2  let total di dalam loop -> yang luar tetap 0
    3,  // 3  total = 0 di dalam loop -> hasil putaran lalu terhapus
    4,  // 4  user.nama dibaca sebelum user diperiksa
    6,  // 5  total += 1, seharusnya total += harga
    7,  // 6  valid dihitung lalu tidak dipakai
    0,  // 7  BENAR
    5,  // 8  i <= data.length -> data[3] = undefined -> NaN
    1,  // 9  i < 5 padahal maksudnya 1..5 -> 5 tidak masuk, off-by-one
    0,  // 10 BENAR, 10
    0,  // 11 BENAR, 60
    6,  // 12 i++ sebelum total += i -> menambahkan 2,3,4,5,6
    5,  // 13 i <= data.length -> data[3] = undefined
    3,  // 14 sisa = 10 di dalam loop -> direset tiap putaran
    4,  // 15 user.nama dibaca sebelum user diperiksa
    0,  // 16 BENAR, true
    0,  // 17 BENAR, 100
    7,  // 18 cek dihitung lalu tidak dipakai
    1,  // 19 i < panjang -> 5 tidak pernah masuk
    0,  // 20 BENAR, 9
];

const nama = {
    0: "benar",
    1: "off-by-one",
    2: "shadowing",
    3: "reset di dalam loop",
    4: "guard salah posisi",
    5: "batas tidak diperiksa",
    6: "nilai salah ditambahkan",
    7: "nilai dihitung lalu dibuang",
};

console.log("=== PATTERN DRILL 01 ===");
console.log("");

let benar = 0;
let dijawab = 0;

for (let i = 0; i < potongan.length; i++) {
    const nomor = i + 1;
    const j = jawab[i];

    if (j === null) {
        console.log(nomor + ": belum dijawab");
        continue;
    }

    dijawab++;

    if (j === kunci[i]) {
        benar++;
        console.log(nomor + ": benar (" + nama[kunci[i]] + ")");
    } else {
        console.log(nomor + ": salah, jawabanmu " + nama[j] +
            ", seharusnya " + nama[kunci[i]]);
    }
}

console.log("");
console.log("Skor: " + benar + " dari " + potongan.length +
    " (" + dijawab + " dijawab)");
console.log("");

if (benar === potongan.length) {
    console.log("Lulus. Naikkan kesulitan: kurangi waktu jadi 3 menit.");
} else if (benar >= 16) {
    console.log("Hampir. Ulangi besok, jangan hari ini.");
} else {
    console.log("Di bawah 16. Baca ulang BUG_TAXONOMY.md, lalu ulangi besok.");
}
