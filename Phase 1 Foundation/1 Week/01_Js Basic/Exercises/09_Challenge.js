// 09_Challenge.js
// Hari 4 - soal dan jawaban
//
// PENTING: file ini TIDAK boleh dijalankan sebelum menjawab.
// Isi "Jawab:" dulu untuk setiap soal, baru ubah sudahMenjawab jadi true.
//
// Kalau dijalankan sebelum menjawab, kamu akan melihat output yang
// seharusnya kamu prediksi sendiri. Latihannya jadi tidak ada gunanya.

const sudahMenjawab = false;

if (!sudahMenjawab) {
    console.log("STOP. Jawab dulu semua soal di file ini.");
    console.log("Isi baris 'Jawab:' untuk soal 1 sampai 16, lalu");
    console.log("tulis kode untuk soal 17 sampai 21.");
    console.log("Baru ubah sudahMenjawab jadi true.");
} else {


    // Soal 1. A1. for (let i = 0; i < 4; i++). Berapa baris, isinya apa?
    // Jawab:

    for (let i = 0; i < 4; i++) {
      console.log(i);
    }

    // Soal 2. A2. for (let i = 1; i <= 4; i++). Berapa baris, bedanya dengan soal 1?
    // Jawab:

    for (let i = 1; i <= 4; i++) {
      console.log(i);
    }

    // Soal 3. A3. let i = 5, while (i > 0), i -= 2. Berapa baris, isinya apa?
    // Jawab:

    let i3 = 5;

    while (i3 > 0) {
      console.log(i3);
      i3 -= 2;
    }

    // Soal 4. A4. let i = 10, while (i < 5). Berapa baris tercetak?
    // Jawab:

    let i4 = 10;

    while (i4 < 5) {
      console.log("jalan");
    }

    // Soal 5. A5. Sama seperti soal 4 tapi do...while. Berapa baris, kenapa beda?
    // Jawab:

    let i5 = 10;

    do {
      console.log("jalan");
    } while (i5 < 5);

    // Soal 6. A6. continue di i===2, break di i===4. Berapa baris, isinya apa?
    // Jawab:

    for (let i = 0; i < 5; i++) {
      if (i === 2) continue;
      if (i === 4) break;
      console.log(i);
    }

    // Soal 7. A7. nested loop 2x2. Berapa baris, isinya apa?
    // Jawab:

    for (let i = 1; i <= 2; i++) {
      for (let j = 1; j <= 2; j++) {
        console.log(i + "-" + j);
      }
    }

    // Soal 8. B1. Developer ingin mencetak 0,1,2. Ada bug? Di mana?
    // Jawab:

    for (let i = 0; i <= 3; i++) {
      console.log(i);
    }

    // Soal 9. B2. Apa yang terjadi saat dijalankan? Di mana masalahnya?
    // Jawab:

    // let i9 = 0;
    // while (i9 < 5) {
    //   if (i9 === 2) continue;
    //   console.log(i9);
    //   i9++;
    // }

    // Soal 10. B3. Apa yang terjadi? Kenapa?
    // Jawab:

    // for (let i = 0; i < 10; i--) {
    //   console.log(i);
    // }

    // Soal 11. B4. Developer ingin berhenti total saat j===2. Apakah kode ini
    // melakukannya? Kalau tidak, apa yang salah?
    // Jawab:

    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log("i=" + i + " j=" + j);
      }
    }

    // Soal 12. C1. Dua versi ini mencetak hal yang sama. Mana yang lebih baik, kenapa?
    // Jawab:

    for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }

    for (let i = 0; i < 10; i++) {
      if (i % 2 !== 0) continue;
      console.log(i);
    }

    // Soal 13. C2. Kode ini benar, tapi rapuh kalau syarat berubah. Apa yang rapuh?
    // Jawab:

    const daftarHarga = [50000, 75000, 120000];
    let totalHarga = 0;

    for (let i = 0; i < 3; i++) {
      totalHarga += daftarHarga[i];
    }

    console.log(totalHarga);

    // Soal 14. D1. Tulis tabel: nilai i, hasil kondisi, yang tercetak.
    // Jawab:

    for (let i = 3; i > 0; i--) {
      console.log(i * 2);
    }

    // Soal 15. D2. Berapa nilai akhir total? Telusuri, jangan tebak.
    // Jawab:

    let total = 0;

    for (let i = 1; i <= 4; i++) {
      total += i;
    }

    console.log(total);

    // Soal 16. D3. Berapa baris tercetak? Telusuri tabel i dan j.
    // Jawab:

    let hitung = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (j === i) continue;
        hitung++;
      }
    }

    console.log(hitung);

    // Soal 17. E1. Cetak angka 1 sampai 10. Pakai for.
    // Jawab:

    // tulis kodemu di sini

    // Soal 18. E2. Cetak angka genap dari 2 sampai 10. Pakai for dan %.
    // Jawab:

    // tulis kodemu di sini

    // Soal 19. E3. Cetak angka 10 sampai 1 (mundur). Pakai for.
    // Jawab:

    // tulis kodemu di sini

    // Soal 20. E4. Jumlahkan 1 sampai 5, cetak hasilnya. Pakai for.
    // Jawab:

    // tulis kodemu di sini

    // Soal 21. E5. Cetak pola bintang bertingkat 3 baris. Pakai nested loop.
    // Jawab:

    // tulis kodemu di sini

    // Soal 22. F1. Kenapa for lebih sering dipakai daripada while?
    // Jawab:

    // Soal 23. F2. Kalau ada for (;;) tanpa break, apa kesimpulanmu?
    // Jawab:

    // Soal 24. F3. Loop 1 juta kali butuh 2 detik. Apa yang diperiksa dulu
    // sebelum menyimpulkan "JavaScript lambat"?
    // Jawab:

    // Soal 25. F4. Kenapa do...while jarang dipakai padahal menyelesaikan
    // masalah nyata?
    // Jawab:

}
