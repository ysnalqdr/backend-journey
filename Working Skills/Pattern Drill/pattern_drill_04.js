// BAHAN-DILUAR-JADWAL: seri ini memakai array, materi minggu 3.
// Dipakai di minggu 1 atas keputusan learner 2026-11-17: lanjutkan drill,
// array dikejar saat waktunya. Penjaga #31 melewati file dengan penanda ini.

// Pattern Drill 04 — fokus jenis 1 (off-by-one) vs jenis 5 (batas tidak diperiksa)
//
// Cara pakai:
//   1. Baca 20 potongan. JANGAN dijalankan.
//   2. Tentukan jenisnya:
//        1 off-by-one        5 batas tidak diperiksa
//        2 shadowing         6 nilai salah ditambahkan
//        3 reset di dalam loop  7 nilai dihitung lalu dibuang
//        4 guard salah posisi   0 BENAR, tidak ada bug
//   3. Isi array `jawab`, ganti null dengan nomormu.
//   4. Ubah `sudahMenjawab` jadi true.
//   5. Jalankan: node pattern_drill_04.js
//
// Setiap soal jenis 1, 3, dan 6 menyebut MAKSUD kodenya. Tanpa itu soalnya tidak sah.
// Satu potongan hanya punya SATU jenis.

const sudahMenjawab = true;

const potongan = [

    // 1
    `const a = [3, 6];
let total = 0;
for (let i = 0; i <= a.length; i++) {
    total += a[i];
}`,

    // 2
    `// maksudnya: jumlahkan 1 sampai 4
let total = 0;
for (let i = 1; i < 4; i++) {
    total += i;
}`,

    // 3
    `let total = 0;
for (let i = 1; i <= 4; i++) {
    total += i;
}
console.log(total);`,

    // 4
    `const data = [1, 2, 3];
const keluar = [];
for (let i = 0; i <= data.length; i++) {
    keluar.push(data[i]);
}`,

    // 5
    `// maksudnya: isi array dengan 1, 2, 3, 4, 5, 6, 7
const arr = [];
for (let i = 1; i < 7; i++) {
    arr.push(i);
}`,

    // 6
    `const daftar = [2, 4, 6];
let total = 0;
for (let i = 0; i < daftar.length; i++) {
    total += daftar[i];
}
console.log(total);`,

    // 7
    `const nilai = [5];
const keluar = [];
for (let i = 0; i <= nilai.length; i++) {
    keluar.push(nilai[i]);
}`,

    // 8
    `// maksudnya: jumlahkan 1 sampai 3
let total = 0;
for (let i = 1; i <= 2; i++) {
    total += i;
}`,

    // 9
    `const total = 20;
const cek = total > 50;
console.log(total);`,

    // 10
    `let total = 0;
for (let i = 2; i <= 6; i += 2) {
    total += i;
}
console.log(total);`,

    // 11
    `const angka = [7, 8];
const keluar = [];
for (let i = 0; i <= angka.length; i++) {
    keluar.push(angka[i]);
}`,

    // 12
    `// maksudnya: jumlahkan 1 sampai 5
let total = 0;
for (let i = 1; i < 5; i++) {
    total += i;
}`,

    // 13
    `// maksudnya: total = harga x jumlah
const harga = 500;
const jumlah = 2;
let total = 0;
for (let i = 1; i <= jumlah; i++) {
    total += i;
}`,

    // 14
    `let hitung = 0;
for (let i = 0; i < 9; i += 3) {
    hitung++;
}
console.log(hitung);`,

    // 15
    `// maksudnya: isi array dengan 1 sampai 9
const arr = [];
for (let i = 1; i < 9; i++) {
    arr.push(i);
}`,

    // 16
    `let total = 0;
for (let i = 1; i <= 2; i++) {
    let total = i;
}
console.log(total);`,

    // 17
    `const data = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i <= data.length; i++) {
    total += data[i];
}`,

    // 18
    `let total = 0;
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    total += i;
}
console.log(total);`,

    // 19
    `// maksudnya: isi array dengan 0, 1, 2, 3, 4
const arr = [];
for (let i = 0; i < 4; i++) {
    arr.push(i);
}`,

    // 20
    `const stok = 5;
let total = 0;
for (let i = 1; i <= stok; i++) {
    total += i;
}
const cukup = total >= 15;
const sisa = stok - 2;
console.log(total);`,
];

// Isi jawabanmu di sini. Satu angka per potongan.
// Jawaban learner 2026-11-18. Skor 20 dari 20.
const jawab = [
    5, 1, 0, 5, 1,
    0, 5, 1, 7, 0,
    5, 1, 6, 0, 1,
    2, 5, 0, 1, 7,
];

// Kunci
const kunci = [
    5,  // 1  i <= a.length -> a[2] undefined -> NaN
    1,  // 2  i < 4 -> 4 tidak masuk, maksud 1..4
    0,  // 3  BENAR, 10
    5,  // 4  i <= data.length -> data[3] undefined
    1,  // 5  i < 7 -> 7 tidak masuk, maksud 1..7
    0,  // 6  BENAR, 12
    5,  // 7  i <= nilai.length -> nilai[1] undefined
    1,  // 8  i <= 2 -> 3 tidak masuk, maksud 1..3
    7,  // 9  cek dihitung lalu tidak dipakai
    0,  // 10 BENAR, 12
    5,  // 11 i <= angka.length -> angka[2] undefined
    1,  // 12 i < 5 -> 5 tidak masuk, maksud 1..5
    6,  // 13 total += i, seharusnya total += harga
    0,  // 14 BENAR, 3 putaran
    1,  // 15 i < 9 -> 9 tidak masuk, maksud 1..9
    2,  // 16 let total di dalam loop -> variabel baru
    5,  // 17 i <= data.length -> data[4] undefined -> NaN
    0,  // 18 BENAR, 12
    1,  // 19 i < 4 -> 4 tidak masuk, maksud 0..4
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

console.log("=== PATTERN DRILL 04 ===");
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
