// Pattern Drill 03 — mengenali jenis bug
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
//   5. Jalankan: node pattern_drill_03.js
//
// Fokus seri ini: jenis 1 vs 5, dan jenis 7 di kode panjang.
// Setiap potongan punya SATU jenis saja.

const sudahMenjawab = true;

const potongan = [

    // 1
    `const a = [1, 2];
let total = 0;
for (let i = 0; i <= a.length; i++) {
    total += a[i];
}`,

    // 2
    `// maksudnya: jumlahkan 1 sampai 5
let total = 0;
for (let i = 1; i < 5; i++) {
    total += i;
}`,

    // 3
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    let total = i;
}
console.log(total);`,

    // 4
    `let total = 0;
for (let i = 1; i <= 4; i++) {
    total = 0;
    total += i;
}`,

    // 5
    `if (user.alamat.kota && user) {
    console.log("ada");
}`,

    // 6
    `const harga = 2000;
const jumlah = 3;
let total = 0;
for (let i = 1; i <= jumlah; i++) {
    total += 1;
}`,

    // 7
    `const total = 50;
const cek = total > 100;
console.log(total);`,

    // 8
    `let total = 0;
for (let i = 1; i <= 3; i++) {
    total += i;
}
console.log(total);`,

    // 9
    `const data = [1, 2, 3];
const keluar = [];
for (let i = 0; i <= data.length; i++) {
    keluar.push(data[i]);
}`,

    // 10
    `// maksudnya: isi array dengan 1 sampai 6
const panjang = 6;
const arr = [];
for (let i = 1; i < panjang; i++) {
    arr.push(i);
}`,

    // 11
    `let total = 0;
for (let i = 1; i <= 4; i++) {
    total += i;
}
const rata = total / 4;
const batas = 3;
const lolos = rata > batas;
console.log(rata);`,

    // 12
    `if (data.isi.length > 0 && data) {
    console.log("ada");
}`,

    // 13
    `// maksudnya: mulai dari 15, kurangi 1, 2, 3 secara bertahap
let total = 0;
for (let i = 1; i <= 3; i++) {
    let sisa = 15;
    total += sisa - i;
}`,

    // 14
    `let total = 0;
for (let i = 2; i <= 8; i += 2) {
    total += i;
}
console.log(total);`,

    // 15
    `// maksudnya: jumlahkan semua isi daftar
const daftar = [5, 10, 15];
let total = 0;
for (let i = 0; i < daftar.length; i++) {
    total += i;
}`,

    // 16
    `const nilai = [4, 5];
const keluar = [];
for (let i = 0; i <= nilai.length; i++) {
    keluar.push(nilai[i]);
}`,

    // 17
    `let jumlah = 0;
for (let i = 1; i <= 4; i++) {
    let jumlah = jumlah + i;
}
console.log(jumlah);`,

    // 18
    `let total = 0;
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) continue;
    total += i;
}`,

    // 19
    `let hitung = 0;
for (let i = 0; i < 10; i += 4) {
    hitung++;
}`,

    // 20
    `const stok = 8;
let total = 0;
for (let i = 1; i <= stok; i++) {
    total += i;
}
const cukup = total >= 36;
const sisa = stok - 3;
console.log(total);`,
];

// Isi jawabanmu di sini. Satu angka per potongan.
// Jawaban learner 2026-11-18.
const jawab = [
    5, 0, 2, 3, 4,
    6, 7, 0, 5, 0,
    7, 4, 0, 0, 0,
    5, 2, 0, 2, 7,
];

// Kunci
const kunci = [
    5,  // 1  i <= a.length -> a[2] undefined -> NaN
    1,  // 2  i < 5 -> 5 tidak masuk, off-by-one
    2,  // 3  let total di dalam loop -> variabel baru
    3,  // 4  total = 0 di dalam loop -> direset
    4,  // 5  user.alamat dibaca sebelum user diperiksa
    6,  // 6  total += 1, seharusnya total += harga
    7,  // 7  cek dihitung lalu tidak dipakai
    0,  // 8  BENAR, 6
    5,  // 9  i <= data.length -> data[3] undefined
    1,  // 10 i < 6 dari 1 -> 6 tidak masuk
    7,  // 11 lolos dihitung lalu tidak dipakai
    4,  // 12 data.isi dibaca sebelum data diperiksa
    3,  // 13 let sisa = 15 di dalam loop -> direset
    0,  // 14 BENAR, 20
    6,  // 15 total += i, seharusnya total += daftar[i]
    5,  // 16 i <= nilai.length -> nilai[2] undefined
    2,  // 17 let jumlah di dalam loop -> variabel baru
    0,  // 18 BENAR, 9
    0,  // 19 BENAR, 3 putaran
    7,  // 20 cukup dihitung lalu tidak dipakai
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
    console.log("lalu ubah `const sudahMenjawab = false;` menjadi `true`.");
    console.log("Jangan buka kunci sebelum menjawab.");
    process.exit(0);
}

console.log("=== PATTERN DRILL 03 ===");
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
