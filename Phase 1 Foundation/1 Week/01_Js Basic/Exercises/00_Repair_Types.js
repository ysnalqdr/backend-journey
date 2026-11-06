// DAY 2.5 REPAIR
// Types and comparison
// Format tiap baris: GUESS, REALITY, RESULT
// Dugaan yang salah sengaja disimpan, lihat README rule 10


// LUBANG 1
// Tipe data menentukan perilaku, bukan isi yang terlihat

// Bagian A, perbandingan angka vs teks

console.log(90 < 100);              // GUESS true    REALITY true    OK
console.log("90" < "100");          // GUESS true    REALITY false   WRONG
// ERROR  saya membaca "90" sebagai angka sembilan puluh
// FIX    dua sisi teks, jadi JS membandingkan huruf per huruf.
//        karakter pertama "9" (57) lebih besar dari "1" (49), berhenti di situ

console.log("90" < 100);            // GUESS false   REALITY true    WRONG
// ERROR  saya pikir sisi teks tetap dibandingkan sebagai teks
// FIX    satu sisi angka, jadi teks diubah jadi angka dulu. 90 < 100 jadi true

console.log("9" < "60");            // GUESS true    REALITY false   WRONG
// ERROR  saya membandingkan 9 dan 60 sebagai angka
// FIX    dua sisi teks. karakter pertama "9" (57) lebih besar dari "6" (54)

console.log("2" > "10");            // GUESS false   REALITY true    WRONG
// ERROR  saya pikir 2 lebih kecil dari 10 jadi hasilnya pasti false
// FIX    dua sisi teks. karakter pertama "2" (50) lebih besar dari "1" (49)

// Bagian B, apa yang terlihat saat dicetak

console.log(90);                    // 90
console.log("90");                  // 90, terlihat sama tapi ini teks
console.log(typeof 90);             // number
console.log(typeof "90");           // string

// Bagian C, kapan teks berubah jadi angka

console.log("90" * 1);              // 90, number, operator kali hanya untuk hitung
console.log("90" + 0);              // 900, STRING, operator tambah menggabungkan teks
// ERROR  saya tulis 900 dalam bentuk angka, padahal ini teks
// FIX    typeof ("90" + 0) adalah string. tambah menggabung kalau ada sisi teks
console.log("90" - 0);              // 90, number

// Gate Lubang 1, lulus 2 dari 2
// Q1  kenapa "90" < "100" false padahal 90 lebih kecil dari 100
// A1  dua sisi teks, jadi dibandingkan huruf per huruf dari kiri.
//     karakter pertama "9" lebih besar dari "1", jadi berhenti dan hasilnya false.
//     panjang dan nilai angka tidak pernah diperhitungkan
// Q2  kalau data form selalu teks, apa yang harus dilakukan sebelum membandingkan
// A2  konversi dulu pakai Number(), lalu cek Number.isNaN() sebelum membandingkan.
//     konversi saja tidak cukup, karena Number("abc") menghasilkan NaN,
//     dan NaN tidak pernah cocok dengan perbandingan apa pun


// LUBANG 2
// == mengubah tipe, === tidak

// Bagian A, pasangan yang dianggap sama oleh ==

console.log(0 == "");               // GUESS true    REALITY true    OK
console.log(0 === "");              // GUESS false   REALITY false   OK
console.log(false == 0);            // GUESS true    REALITY true    OK
console.log(false === 0);           // GUESS false   REALITY false   OK
console.log(null == undefined);     // GUESS true    REALITY true    OK
console.log(null === undefined);    // GUESS false   REALITY false   OK
console.log("5" == 5);              // GUESS true    REALITY true    OK
console.log("5" === 5);             // GUESS false   REALITY false   OK

// Bagian B, yang tidak pernah sama, bahkan dengan ==

console.log(NaN == NaN);            // GUESS false   REALITY false   OK tapi alasannya salah
// ERROR  saya tulis karena string sama string. NaN itu angka, bukan teks
// FIX    NaN tidak pernah sama dengan apa pun, termasuk dirinya sendiri.
//        kedua sisi tipenya sama, jadi == membandingkan langsung,
//        dan perbandingan itu selalu false. NaN artinya operasi angka yang gagal,
//        jadi dua kegagalan tidak dianggap sama

console.log(Number.isNaN(NaN));     // true
// pakai Number.isNaN(x), jangan x === NaN, karena NaN === NaN selalu false

// Gate Lubang 2, lulus 2 dari 2
// Q1  sebutkan 2 pasangan yang == true tapi === false, jelaskan kenapa == true
// A1  pasangan 1, "5" dan 5
//       == true, langkah 3 algoritma, angka vs teks, teks jadi angka
//       === false, hanya satu langkah, tipe berbeda jadi langsung berhenti
//     pasangan 2, 0 dan ""
//       == true, langkah 3, angka vs teks, "" jadi Number("") yaitu 0
//       === false, tipe berbeda, angka vs teks
// Q2  kenapa NaN == NaN false, dan bagaimana cek NaN dengan benar
// A2  NaN tidak pernah sama dengan apa pun termasuk dirinya sendiri,
//     karena NaN artinya operasi angka yang gagal.
//     cek pakai Number.isNaN(value), yang memeriksa nilai bukan membandingkan


// LUBANG 3
// Untuk angka, jangan pakai truthy atau falsy

// Bagian A, 0 diperlakukan sebagai tidak ada

const stok = 0;
console.log(Boolean(stok));         // GUESS ?    REALITY ?
if (stok) {
  console.log("Tiket tersedia");    // GUESS ?    REALITY ?
} else {
  console.log("Tiket habis");       // GUESS ?    REALITY ?
}

// Bagian B, masalah sebenarnya, 0 dan undefined tidak bisa dibedakan

const saldoA = 0;
const saldoB = undefined;

if (!saldoA) console.log("A dianggap kosong");  // GUESS ?    REALITY ?
if (!saldoB) console.log("B dianggap kosong");  // GUESS ?    REALITY ?

// Bagian C, cara yang benar

if (stok > 0) console.log("C: tersedia");
if (stok === 0) console.log("C: habis");
if (saldoA !== undefined) console.log("C: saldo diketahui");

// Gate Lubang 3, tulis ulang tiga kondisi ini tanpa melihat contoh

// 1  kalau stok habis, cetak Habis
// YOUR ANSWER


// 2  kalau saldo nol, cetak Saldo kosong
// YOUR ANSWER


// 3  kalau diskon 0 persen, cetak Tanpa diskon
// YOUR ANSWER
