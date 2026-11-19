// BAHAN-DILUAR-JADWAL: seri ini memakai array, materi minggu 3.
// Dipakai di minggu 1 atas keputusan learner 2026-11-17: lanjutkan drill,
// array dikejar saat waktunya. Penjaga #31 melewati file dengan penanda ini.

// Pattern Drill 02 — mengenali jenis bug
//
// Cara pakai:
//   1. Baca 20 potongan kode di bawah. JANGAN dijalankan.
//   2. Tentukan jenis tiap potongan:
//        1 off-by-one        5 batas tidak diperiksa
//        2 shadowing         6 nilai salah ditambahkan
//        3 reset di dalam loop  7 nilai dihitung lalu dibuang
//        4 guard salah posisi   0 BENAR, tidak ada bug
//   3. Isi array `jawab` di bagian bawah, ganti null dengan nomormu.
//   4. Ubah `sudahMenjawab` jadi true.
//   5. Jalankan: node pattern_drill_02.js
//
// Penjaga: kalau sudahMenjawab masih false, skrip hanya mencetak STOP.

const sudahMenjawab = true;

const potongan = [

    // 1
    `const daftar = [5, 10, 15];
for (let i = 0; i <= daftar.length; i++) {
    console.log(daftar[i]);
}`,

    // 2
    `let total = 0;
const angka = [2, 4, 6];
for (let i = 0; i < angka.length; i++) {
    total += 1;
}`,

    // 3
    `let jumlah = 0;
for (let i = 1; i <= 4; i++) {
    let jumlah = jumlah + i;
}
console.log(jumlah);`,

    // 4
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    total = 0;
    total += i * 2;
}`,

    // 5
    `const nama = ["ani", "budi"];
for (let i = 0; i <= nama.length; i++) {
    console.log(nama[i]);
}`,

    // 6
    `const cek = total > 100;
console.log(total);`,

    // 7
    `let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i;
}
console.log(total);`,

    // 8
    `if (data.isi.length > 0 && data) {
    console.log("ada");
}`,

    // 9
    `const panjang = 4;
let arr = [];
for (let i = 1; i < panjang; i++) {
    arr.push(i);
}`,

    // 10
    `let total = 0;
for (let i = 1; i <= 5; i++) {
    total += i;
}
const cek = total > 10;`,

    // 11
    `let hitung = 0;
for (let i = 0; i < 10; i += 4) {
    hitung++;
}`,

    // 12
    `const nilai = [1, 2, 3, 4];
let jumlah = 0;
for (let i = 0; i <= nilai.length; i++) {
    jumlah += nilai[i];
}`,

    // 13
    `// maksudnya: mulai dari 20, kurangi 1, 2, 3, 4 secara bertahap
let total = 0;
for (let i = 1; i <= 4; i++) {
    let sisa = 20;
    total += sisa - i;
}`,

    // 14
    `const user = null;
if (user.umur > 17 && user) {
    console.log("dewasa");
}`,

    // 15
    `// maksudnya: jumlahkan 1 sampai 4
let total = 0;
for (let i = 1; i <= 4; i++) {
    total += 1;
}`,

    // 16
    `const stok = 5;
const habis = stok === 0;
console.log("stok:", stok);`,

    // 17
    `const harga = 5000;
const jumlah = 3;
let total = 0;
for (let i = 1; i <= jumlah; i++) {
    total += 1;
}`,

    // 18
    `let i = 1;
let total = 0;
while (i <= 4) {
    total += i;
    i++;
}`,

    // 19
    `const angka = [3, 6, 9];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
    jumlah += angka[i];
}`,

    // 20
    `let total = 0;
for (let i = 1; i <= 6; i++) {
    if (i % 3 === 0) continue;
    total += i;
}`,
];

// Isi jawabanmu di sini. Satu angka per potongan.
// Jawaban learner 2026-11-17.
const jawab = [
    5, 6, 2, 3, 5,
    7, 0, 4, 1, 7,
    6, 5, 0, 4, 6,
    7, 6, 0, 5, 0,
];

// Kunci
const kunci = [
    5,  // 1  i <= daftar.length -> daftar[3] undefined
    6,  // 2  total += 1, seharusnya total += angka[i]
    2,  // 3  let jumlah di dalam loop -> variabel baru
    3,  // 4  total = 0 di dalam loop -> direset
    5,  // 5  i <= nama.length -> nama[2] undefined
    7,  // 6  cek dihitung lalu tidak dipakai
    0,  // 7  BENAR, 15
    4,  // 8  data.isi dibaca sebelum data diperiksa
    1,  // 9  i < 4 dari 1 -> 4 tidak masuk
    7,  // 10 cek dihitung lalu tidak dipakai
    0,  // 11 BENAR, hitung = 3
    5,  // 12 i <= nilai.length -> nilai[4] undefined
    3,  // 13 let sisa = 20 di dalam loop -> selalu 20, tidak bertahap
    4,  // 14 user.umur dibaca sebelum user diperiksa
    6,  // 15 total += 1, seharusnya total += i
    7,  // 16 habis dihitung lalu tidak dipakai
    6,  // 17 total += 1, seharusnya total += harga
    0,  // 18 BENAR, 10
    0,  // 19 BENAR, 18
    0,  // 20 BENAR, 12
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

if (!sudahMenjawab) {
    console.log("STOP");
    console.log("");
    console.log("Isi dulu array `jawab` di bagian bawah file ini,");
    console.log("lalu ubah `const sudahMenjawab = true;` menjadi `true`.");
    console.log("Jangan buka kunci sebelum menjawab.");
    process.exit(0);
}

console.log("=== PATTERN DRILL 02 ===");
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
    console.log("Lulus. Blok pattern-01 selesai.");
} else if (benar >= 16) {
    console.log("Hampir. Ulangi besok, jangan hari ini.");
} else {
    console.log("Di bawah 16. Baca ulang Tujuh Jenis Bug.md, lalu ulangi besok.");
}
