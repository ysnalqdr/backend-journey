// 10_ForBuild.js
// Hari 4 - membangun ulang dasar for loop.
// Dibuat 2026-11-12 setelah batch M1-M6 gagal 1 dari 6.
// Isi: analisis, soal per konsep, dan tempat jawaban.
// Jawaban ditulis di bawah tiap soal, tidak dihapus walaupun salah.

// Analisis batch M1-M6
//
// | Soal | Jawabanku | Benar | Jenis salah                     |
// |------|-----------|-------|---------------------------------|
// | M1   | 342       | 4     | bentuk perubahan tidak dikenali |
// | M2   | 65        | 75    | batas 25 terlewat               |
// | M3   | 0         | 0     | benar                           |
// | M4   | 15        | 14    | penjumlahan di kepala           |
// | M5   | 11000     | 1000  | penjumlahan di kepala           |
// | M6   | 4         | 5     | jumlah putaran kurang satu      |
//
// Tiga kelompok, bukan enam kesalahan.
//
// A. Bentuk perubahan. M1. i *= 2 tidak dikenali sebagai dikali dua.
// B. Batas dan jumlah putaran. M2 dan M6. Berhenti satu angka terlalu cepat.
// C. Akumulasi nilai. M4 dan M5. Bagian for benar, penjumlahan di kepala.
//
// M3 benar karena kondisinya gagal sejak awal, tidak butuh deret.
//
// Aturan pengerjaan: tulis deret i sampai satu angka gagal, baru jawab.
// Tidak boleh menghitung di kepala.


// Konsep A - bentuk perubahan
//
// Soal A1 (dari M1). Hitung berapa putaran.
//
// let hitung = 0;
//
// for (let i = 2; i < 20; i *= 2) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Jawab:

// Soal A2. Hitung berapa putaran.
//
// let hitung = 0;
//
// for (let i = 5; i < 100; i *= 2) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Jawab:

// Soal A3. Hitung berapa putaran.
//
// let hitung = 0;
//
// for (let i = 10; i > 0; i -= 3) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Jawab:


// Konsep B - batas dan jumlah putaran
//
// Soal B1 (dari M2). Berapa nilai total.
//
// let total = 0;
//
// for (let i = 5; i <= 25; i += 5) {
//   total += i;
// }
//
// console.log(total);
//
// Jawab:

// Soal B2 (dari M6). Hitung berapa putaran.
//
// let hitung = 0;
//
// for (let i = 1; i <= 10; i += 2) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Jawab:

// Soal B3 (dari M3). Berapa nilai total.
//
// let total = 0;
//
// for (let i = 10; i < 5; i++) {
//   total += i;
// }
//
// console.log(total);
//
// Jawab:

// Soal B4. Hitung berapa putaran.
//
// let hitung = 0;
//
// for (let i = 0; i <= 10; i += 5) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Jawab:


// Konsep C - akumulasi nilai
//
// Soal C1 (dari M4). Berapa nilai total.
//
// let total = 0;
//
// for (let i = 3; i >= 1; i--) {
//   total += i * i;
// }
//
// console.log(total);
//
// Jawab:

// Soal C2 (dari M5). Berapa nilai total.
//
// let total = 0;
//
// for (let i = 1; i <= 4; i++) {
//   total += i * 100;
// }
//
// console.log(total);
//
// Jawab:

// Soal C3. Berapa nilai total.
//
// let total = 0;
//
// for (let i = 2; i <= 8; i += 2) {
//   total += i * 10;
// }
//
// console.log(total);
//
// Jawab:
