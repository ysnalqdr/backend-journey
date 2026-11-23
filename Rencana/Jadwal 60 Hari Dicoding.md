# Jadwal 60 Hari — Dicoding JS + SQL, berdampingan dengan Backend Journey

Dibuat 2026-11-23. Mulai 2026-11-24, selesai 2027-01-22.

---

## Prinsip

| Peran               | Sumber                  |
|---------------------|-------------------------|
| Input (baca materi) | Kelas Dicoding          |
| Latihan (uji paham) | Gerbang Backend Journey |
| Catatan             | `TRAIN_LOG.md`          |

Satu topik, dua bentuk. Bukan dua kurikulum.

---

## Aturan yang tidak boleh dilanggar

| #   | Aturan                                                | Kenapa                       |
|-----|-------------------------------------------------------|------------------------------|
| 1   | Topik yang sudah dikuasai: lewati modulnya, kuis saja | kelas self-paced             |
| 2   | Gerbang Journey tetap wajib                           | kuis bukan menulis kode      |
| 3   | Waktu habis: Dicoding dulu, Journey belakangan        | Dicoding punya tenggat       |
| 4   | Gerbang Journey tidak absen lebih dari 2 hari         | tanpa latihan tak menempel   |
| 5   | Kuis dan ujian akhir wajib dikerjakan                 | tanpa itu tak ada sertifikat |
| 6   | Satu hari satu commit                                 | aturan #57                   |

---

## Fase 1 — Dicoding JavaScript, 32 hari

46 jam dibagi 32 hari = **1 jam 26 menit per hari**.

Topik di bawah ini **perkiraan urutan** berdasarkan silabus yang terlihat. Sesuaikan
dengan urutan modul asli saat kelas dibuka.

| Hari | Topik Dicoding                                    | Pasangan di Journey         |
|------|---------------------------------------------------|-----------------------------|
| 1    | Persiapan + Gerbang Dunia JavaScript (setup Node) | protokol buka               |
| 2    | Variabel, `let`/`const`, tipe data                | lewati, sudah dikuasai      |
| 3    | Operator aritmatika, perbandingan, logika         | lewati                      |
| 4    | Konversi tipe, string, template literal           | lewati                      |
| 5    | `if`, `else`, `switch`, ternary                   | lewati, kuis saja           |
| 6    | Falsy/truthy, logika non-boolean                  | lewati                      |
| 7    | **Kuis modul 1-6**                                | re-check                    |
| 8    | `for` loop                                        | lewati, gerbang sudah lulus |
| 9    | `while`, `do...while`                             | lewati                      |
| 10   | `break`, `continue`                               | lewati                      |
| 11   | **Function dasar**                                | **Day 5 gerbang**           |
| 12   | Parameter, argumen, `return`                      | Day 5 gerbang               |
| 13   | **Scope**                                         | Day 5 EXPLAIN               |
| 14   | **Kuis modul loop + fungsi**                      | re-check fungsi             |
| 15   | Array dasar                                       | **Day 6 Journey**           |
| 16   | Array method (`push`, `map`, `filter`)            | Day 6 gerbang               |
| 17   | Object dasar                                      | Day 7 Journey               |
| 18   | Object method, `this`                             | Day 7 gerbang               |
| 19   | Destructuring                                     | Day 7 gerbang               |
| 20   | Spread, rest parameter                            | Day 7 gerbang               |
| 21   | **Kuis modul array + object**                     | re-check                    |
| 22   | ES6: arrow function, `let`/`const`                | Day 8 Journey               |
| 23   | Higher-order function                             | Day 8 gerbang               |
| 24   | Callback                                          | Day 8 gerbang               |
| 25   | Error handling (`try`/`catch`)                    | Day 9 Journey               |
| 26   | Module (`import`/`export`)                        | Day 9 gerbang               |
| 27   | Testing dasar                                     | Day 9 gerbang               |
| 28   | **Kuis modul ES6**                                | re-check                    |
| 29   | Latihan submission 1                              | Working Skills              |
| 30   | Latihan submission 2                              | Working Skills              |
| 31   | Review menyeluruh                                 | Working Skills              |
| 32   | **Ujian akhir**                                   | commit + catat sertifikat   |

---

## Fase 2 — Dicoding SQL, 28 hari

11 jam dibagi 28 hari = **24 menit per hari**. Ringan, karena Journey sudah berat.

| Hari | Topik SQL                                 | Pasangan di Journey       |
|------|-------------------------------------------|---------------------------|
| 33   | Pengantar database, instalasi             | —                         |
| 34   | `SELECT` dasar                            | —                         |
| 35   | `WHERE`                                   | —                         |
| 36   | `ORDER BY`, `LIMIT`                       | —                         |
| 37   | Fungsi agregat (`COUNT`, `SUM`, `AVG`)    | —                         |
| 38   | `GROUP BY`                                | —                         |
| 39   | `HAVING`                                  | —                         |
| 40   | **Kuis modul 1-7**                        | re-check                  |
| 41   | `INSERT`                                  | —                         |
| 42   | `UPDATE`                                  | —                         |
| 43   | `DELETE`                                  | —                         |
| 44   | `NULL` handling                           | —                         |
| 45   | `JOIN` dasar                              | —                         |
| 46   | `INNER JOIN`                              | —                         |
| 47   | `LEFT` / `RIGHT JOIN`                     | —                         |
| 48   | **Kuis modul 8-15**                       | re-check                  |
| 49   | Subquery                                  | —                         |
| 50   | `CASE`                                    | —                         |
| 51   | Index dan kenapa query lambat             | —                         |
| 52   | Normalisasi tabel                         | —                         |
| 53   | Constraint (`PRIMARY KEY`, `FOREIGN KEY`) | —                         |
| 54   | **Kuis modul 16-21**                      | re-check                  |
| 55   | Latihan query 1                           | Working Skills            |
| 56   | Latihan query 2                           | Working Skills            |
| 57   | Latihan query 3                           | Working Skills            |
| 58   | Review menyeluruh                         | Working Skills            |
| 59   | **Ujian akhir**                           | commit + catat sertifikat |
| 60   | Cadangan (kalau ada yang tertinggal)      | —                         |

---

## Tiga pola harian

### Pola A — hari libur

| Sesi  | Isi                             | Waktu  |
|-------|---------------------------------|--------|
| Pagi  | Dicoding — 1 modul              | 45 mnt |
| Siang | Gerbang Journey topik yang sama | 45 mnt |
| Sore  | Working Skills                  | 35 mnt |
| Malam | SQL Dicoding + catat + commit   | 40 mnt |

**Total 2 jam 45 menit**

### Pola B — hari kuliah

| Sesi  | Isi                             | Waktu  |
|-------|---------------------------------|--------|
| Siang | Dicoding — 1 modul              | 40 mnt |
| Sore  | Gerbang Journey topik yang sama | 30 mnt |
| Malam | Working Skills + commit         | 30 mnt |

**Total 1 jam 40 menit** · SQL tidak di hari kuliah

### Pola C — hari kerja / lelah

| Sesi  | Isi                                             | Waktu  |
|-------|-------------------------------------------------|--------|
| Malam | **Satu** blok: Dicoding **atau** Working Skills | 30 mnt |

**Total 30 menit** · SQL tidak

---

## Cara memakai jadwal ini

1. Setiap hari, buka file ini dan lihat baris hari ke-berapa.
2. Kerjakan modul Dicoding **dulu**, baru gerbang Journey.
3. Kalau modulnya sudah dikuasai, **lewati** dan langsung kuis.
4. Catat di `TRAIN_LOG.md`: hari ke-, modul apa, lulus atau tidak.
5. Commit.

---

## Yang perlu disiapkan

| #   | Siapkan                               | Kenapa                                     |
|-----|---------------------------------------|--------------------------------------------|
| 1   | Kedua kelas sudah dipilih di Dicoding | tidak bisa diganti                         |
| 2   | Node.js v26 (sudah ada)               | modul "Gerbang Dunia JavaScript" butuh ini |
| 3   | VS Code (sudah ada)                   | —                                          |
| 4   | Catatan nomor hari terakhir           | supaya tidak kehilangan urutan             |

---

## Tanda peringatan

| Tanda                 | Artinya                   | Tindakan                                     |
|-----------------------|---------------------------|----------------------------------------------|
| Tertinggal 3 hari     | beban menumpuk            | pakai Pola A dua hari berturut               |
| Tertinggal 7 hari     | bahaya                    | hentikan Journey 3 hari, kejar Dicoding saja |
| Tertinggal 14 hari    | sertifikat terancam       | evaluasi: lanjut atau lepas salah satu       |
| Modul terasa mudah    | sudah dikuasai            | **lewati**, jangan buang waktu               |
| Modul terasa mustahil | materi belum ada dasarnya | tandai, lanjut, kembali nanti                |

---

## Yang TIDAK termasuk di jadwal ini

| Hal                                               | Kenapa                         |
|---------------------------------------------------|--------------------------------|
| Kelas "Belajar Back-End Pemula dengan JavaScript" | kelas ketiga, tidak ada slot   |
| Sertifikasi AWS                                   | belum waktunya                 |
| Proyek portofolio                                 | jadwalnya terpisah, minggu 10+ |
