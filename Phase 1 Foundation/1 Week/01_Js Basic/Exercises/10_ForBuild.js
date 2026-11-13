// 10_ForBuild.js
// Hari 4 - membangun ulang dasar for loop.
// Dibuat 2026-11-12 setelah batch M1-M6 gagal 1 dari 6.
// Isi: analisis, materi per konsep, soal, dan jawaban.
// Jawaban ditulis di bawah tiap soal, tidak dihapus walaupun salah.

// Analisis batch M1-M6
//
// | Soal | Jawabanku | Benar | Jenis salah                   |
// |------|-----------|-------|-------------------------------|
// | M1   | 342       | 4     | bentuk perubahan tidak dikenali |
// | M2   | 65        | 75    | batas 25 terlewat             |
// | M3   | 0         | 0     | benar                         |
// | M4   | 15        | 14    | penjumlahan di kepala         |
// | M5   | 11000     | 1000  | penjumlahan di kepala         |
// | M6   | 4         | 5     | jumlah putaran kurang satu    |
//
// Tiga kelompok, bukan enam kesalahan.
//
// A. Bentuk perubahan. M1. Tidak mengenali i *= 2 sebagai dikali dua,
//    jadi deretnya tidak bisa ditulis.
// B. Batas dan jumlah putaran. M2 dan M6. Berhenti satu angka terlalu cepat.
// C. Akumulasi nilai. M4 dan M5. Bagian for benar, penjumlahannya salah
//    karena dihitung di kepala.
//
// M3 benar karena kondisinya jelas gagal sejak awal, tidak butuh deret.
//
// Yang selalu salah, bukan for-nya:
//
// | Selalu salah                        | Muncul di |
// |-------------------------------------|-----------|
// | Menulis deret i sampai angka gagal  | M1, M2, M6 |
// | Menghitung banyaknya angka di deret | M2, M6     |
// | Menjumlahkan nilai deret            | M4, M5     |

// Konsep A - bentuk perubahan
//
// Lima bentuk dan deretnya, semua terverifikasi:
//
//   i++    dari 0, i < 3    -> [0,1,2]          gagal di 3
//   i--    dari 3, i >= 1   -> [3,2,1]          gagal di 0
//   i += 2 dari 1, i <= 10  -> [1,3,5,7,9]      gagal di 11
//   i += 5 dari 5, i <= 25  -> [5,10,15,20,25]  gagal di 30
//   i *= 2 dari 2, i < 20   -> [2,4,8,16]       gagal di 32
//
// Nama tiap bentuk:
//
// | Bentuk | Nama                     | Yang terjadi pada i |
// |--------|--------------------------|---------------------|
// | i++    | increment                | tambah 1            |
// | i--    | decrement                | kurang 1            |
// | i += 2 | addition assignment      | tambah 2            |
// | i -= 2 | subtraction assignment   | kurang 2            |
// | i *= 2 | multiplication assignment| dikali 2            |
//
// i *= 2 bukan tambah 2. Dia mengalikan i dengan 2, jadi i berlipat:
// 2, 4, 8, 16, 32.
//
// Cara menulis deret, tiga langkah, selalu sama:
// 1. Tulis nilai awal i
// 2. Terapkan bentuk perubahannya
// 3. Berhenti setelah satu angka gagal syarat
//
// Contoh i *= 2, awal 2, syarat i < 20:
//
//   2 -> 4 -> 8 -> 16 -> 32
//                        ^ 32 < 20 salah, berhenti di sini
//
// Yang masuk loop: 2, 4, 8, 16. Empat angka.

// Soal A1
//
// let hitung = 0;
//
// for (let i = 1; i < 40; i *= 3) {
//   hitung++;
// }
//
// console.log(hitung);
//
// Tulis deret i-nya dulu sampai satu angka yang gagal. Lalu jawab.
//
// Jawab:
