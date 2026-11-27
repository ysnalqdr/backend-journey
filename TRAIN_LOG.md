# Train Log

Catatan sesi latihan. Tujuannya mengukur **apakah kemampuan naik**, bukan berapa lama
duduk.

Satu baris per sesi latihan.

---

## Format

| Tanggal | Konsep | Soal | PASS | FAIL | Level | Catatan |
|---------|--------|------|------|------|-------|---------|

**Level tertinggi lulus:** EASY / MEDIUM / HARD / WRITE
Konsep baru dianggap lulus hanya kalau ada minimal 1 MEDIUM yang PASS.

Catatan ditulis singkat, satu baris. Kalau perlu panjang, taruh di `Catatan.md`.

---

## Sesi

**2026-11-07** · ternary · 1 soal · 0 PASS · 1 FAIL · catatan: alasan salah sasaran

**2026-11-12** · delapan sesi dalam satu hari:

| Konsep                 | Soal | PASS | FAIL | Level  |
|------------------------|------|------|------|--------|
| `for` mundur           | 2    | 2    | 0    | EASY   |
| `for` off-by-one       | 2    | 1    | 1    | MEDIUM |
| akumulasi `-=`         | 1    | 1    | 0    | MEDIUM |
| `for` variatif         | 6    | 1    | 5    | EASY   |
| `for` per konsep       | 10   | 10   | 0    | MEDIUM |
| `break` `continue` `%` | 7    | 6    | 1    | MEDIUM |
| nested loop            | 3    | 3    | 0    | MEDIUM |
| `%` selain 2           | 4    | 3    | 1    | MEDIUM |

**Catatan pola:** 26 soal dalam satu hari, melebihi batas 20 (README #22b). Sesi seharusnya
dipecah dua hari.

**Yang berubah:** batch pertama 1/6, lalu 10/10 setelah aturan "tulis deret sampai angka
gagal" dan "tabel empat kolom" diterapkan. Cara kerja lebih menentukan daripada penjelasan.

---

## Ringkasan per konsep

| Konsep               | Sesi | PASS | FAIL | Status | Bukti                   |
|----------------------|------|------|------|--------|-------------------------|
| ternary              | 1    | 0    | 1    | 3      | Gate Log #1-#7          |
| `for`                | 5    | 15   | 7    | 2      | Gate Log #67-#75        |
| `break` / `continue` | 2    | 9    | 2    | 2      | Gate Log #76-#78        |
| nested loop          | 1    | 3    | 0    | 2      | Gate Log #77            |
| Working Skills       | 0    | 0    | 0    | 0      | belum pernah dikerjakan |

---

## Jadwal blok Working Skills sampai 2026-11-26

Ditetapkan 2026-11-17. Satu blok per sesi, digabung dengan gerbang supaya tidak ada sesi
yang isinya cuma sistem.

| Sesi   | Isi                                          | Waktu  |
|--------|----------------------------------------------|--------|
| 18 Nov | `pattern-01` ulang + `do...while` per konsep | 25 mnt |
| 19 Nov | `reading-02`                                 | 30 mnt |
| 20 Nov | `do...while` EASY + MEDIUM                   | 25 mnt |
| 21 Nov | `memecah-01` + `do...while` HARD             | 35 mnt |
| 22 Nov | `docs-01` + `do...while` WRITE               | 35 mnt |
| 23 Nov | `review-01`                                  | 30 mnt |
| 24 Nov | nested per konsep                            | 25 mnt |
| 25 Nov | `review-02` + nested EASY/MEDIUM             | 40 mnt |
| 26 Nov | `debug-01`                                   | 30 mnt |

**Kenapa urutan ini:**

| Blok         | Alasan posisi                                                              |
|--------------|----------------------------------------------------------------------------|
| `pattern-01` | termurah, mengukur apakah temuan 17 Nov masuk                              |
| `reading-02` | sebelum `review-01`, karena tidak bisa menilai kode yang belum bisa dibaca |
| `memecah-01` | tidak butuh prasyarat, menambal lubang audit                               |
| `docs-01`    | langsung berguna, tidak butuh prasyarat                                    |
| `review-01`  | butuh `reading-02`                                                         |
| `review-02`  | butuh `review-01`                                                          |
| `debug-01`   | butuh bug nyata + kemampuan membaca kode                                   |

**Aturan selama jadwal ini berjalan:**

1. Jangan menambah blok ke-9. Ide baru ditulis di `IMPROVEMENTS.md`, tidak dikerjakan.
2. Jangan mengganti blok yang terasa membosankan dengan sistem baru. Itu pola yang sudah
   tiga kali terjadi.
3. Kalau satu sesi terlewat, lanjut ke sesi berikutnya. Jangan menumpuk dua blok.
4. Satu blok per sesi. Yang kedua selalu jadi tidak dikerjakan.

---

## Urutan harian dan lantai minimum

Ditetapkan 2026-11-18. Tiga pola sesuai jadwal nyata, bukan satu pola untuk semua hari.

### Pola A — hari libur (4 sesi)

| Sesi  | Isi                               | Waktu  | Commit |
|-------|-----------------------------------|--------|--------|
| Pagi  | protokol buka + re-check          | 20 mnt | 1      |
| Siang | Working Skills block              | 35 mnt | 1      |
| Sore  | materi + gerbang per konsep       | 40 mnt | 1      |
| Malam | gerbang EASY sampai WRITE + catat | 45 mnt | 1      |

Total 2 jam 20 menit, 4 commit.

### Pola B — hari kuliah (3 sesi)

| Sesi  | Isi                    | Waktu  | Commit |
|-------|------------------------|--------|--------|
| Siang | protokol + re-check    | 20 mnt | 1      |
| Sore  | gerbang per konsep     | 30 mnt | 1      |
| Malam | Working Skills + catat | 35 mnt | 1      |

Total 1 jam 25 menit, 3 commit.

### Pola C — hari kerja (1-2 sesi)

| Sesi  | Isi                           | Waktu  | Commit |
|-------|-------------------------------|--------|--------|
| Malam | protokol + **satu** blok saja | 30 mnt | 1-2    |

Pilih satu: Working Skills **atau** gerbang. Jangan dua-duanya.

### Lantai minimum (aturan 57)

| Kondisi                | Lantai                   | Waktu      |
|------------------------|--------------------------|------------|
| Sehat, waktu penuh     | 4 sesi                   | 2 jam 20   |
| Sibuk                  | 2 sesi                   | 1 jam      |
| Lelah, hampir menyerah | **1 blok + 1 commit**    | **20 mnt** |
| Sakit / tidak bisa     | **1 commit dokumentasi** | **5 mnt**  |

Baris ketiga dan keempat **bukan kegagalan**. Itu bagian dari sistem. Yang tidak boleh: nol.

### Yang tidak pernah berubah di ketiga pola

| #   | Langkah                                      | Kenapa                           |
|-----|----------------------------------------------|----------------------------------|
| 1   | `node working_skills.js`                     | penagih, bukan ingatan           |
| 2   | Lihat utang di `REVIEW_QUEUE.md` bagian atas | utang tidak boleh tersembunyi    |
| 3   | Re-check yang jatuh tempo                    | retensi                          |
| 4   | Baru belajar hal baru                        | jangan menumpuk sebelum melunasi |

Urutan tidak boleh dibalik. Kalau dibalik, utang menumpuk dan akhirnya ditinggalkan.

---

## Ringkasan 2026-11-18

| Item             | Hasil                                    |
|------------------|------------------------------------------|
| `do...while`     | **tuntas enam level**                    |
| Pattern drill 03 | 15 dari 20 (belum lulus)                 |
| Re-check         | 2 dikerjakan: 1 PASS, 1 GAGAL            |
| Aturan baru      | #51-#57 commit discipline                |
| Buku utang       | `REVIEW_QUEUE.md` jadi satu tempat       |
| Utang lunas      | dead store panjang, `do...while` gerbang |
| Utang terbuka    | 8, tidak ada yang jatuh tempo            |
| Commit           | 10 (8 artefak sah, 2 sampah)             |
| Health check     | 39/40 (98%)                              |

**Pelanggaran yang tercatat:**

- Aturan 52 dilanggar di ketiga sesi (4, 3, 3 commit; batas 2)
- Commit #6 mengoreksi #7, seharusnya satu commit
- Commit #9 menghapus file yang masuk di #10, seharusnya ikut #10
- `--no-verify` dipakai 10 kali tanpa dicatat di tabel darurat
- Soal cacat ditemukan 4 kali: M1 komentar salah, M3 ambigu, H1 angka mustahil,
  W1 minta fungsi. Semua sudah diperbaiki
- Alarm commit rusak (`--since` mengembalikan kosong di Windows), sudah diperbaiki

---

## Rencana 2026-11-19

| #   | Blok                           | Waktu  | Isi                                |
|-----|--------------------------------|--------|------------------------------------|
| 1   | Pattern drill 04               | 10 mnt | fokus jenis 1, target 20/20        |
| 2   | Re-check: alasan dipertahankan | 10 mnt | komentar review wajib sebut akibat |
| 3   | Re-check: jenis bug 1 vs 5     | 5 mnt  | 5 potongan campuran                |
| 4   | `15_Nested.js` per konsep      | 20 mnt | konsep A-D                         |
| 5   | `15_Nested.js` EASY + MEDIUM   | 20 mnt | kalau per konsep lulus             |
| 6   | Catat                          | 5 mnt  | Gate Log, commit                   |

Total 70 menit. Kalau cuma 30 menit: poin 1 dan 2 saja.

**Target commit besok: 3.** Satu per sesi, maksimal 2 per sesi.

**Yang TIDAK dikerjakan besok:** array, empat file EXPLAIN, hook pre-commit, perubahan sistem.

**Aturan untuk diriku sendiri:** besok tidak ada perubahan sistem. Hari ini 7 aturan baru, 2
pemeriksaan baru, dan 1 alarm yang rusak. Itu sudah cukup untuk satu hari.

---

## Ringkasan 2026-11-19

| Item                          | Hasil                                          |
|-------------------------------|------------------------------------------------|
| Re-check alasan dipertahankan | **LUNAS** setelah 3 percobaan                  |
| Nested loop per konsep        | lulus 4 dari 4                                 |
| Pemeriksaan #31               | penjaga bahan soal di luar jadwal              |
| Aturan #58                    | soal tidak boleh pakai array sebelum diajarkan |
| Utang lunas                   | alasan dipertahankan                           |
| Utang terbuka                 | 5, dua jatuh tempo                             |
| Health check                  | 40/43 (93%)                                    |
| Working Skills                | 2 dari 8                                       |

**Kesalahan yang berhenti:** tiga pola learner yang muncul 3x+ sudah tidak berulang.

**Kesalahan yang masih berulang di sistem:** bahan soal di luar jadwal (5x), soal tanpa
maksud (4x), `--no-verify` tidak dicatat (~50x).

---

## Rencana 2026-11-20 — hari libur penuh

| #   | Blok                            | Waktu  |
|-----|---------------------------------|--------|
| 1   | Re-check nested per konsep      | 10 mnt |
| 2   | Nested EASY + MEDIUM            | 25 mnt |
| 3   | Nested HARD + WRITE             | 30 mnt |
| 4   | Nested VERIFY + EXPLAIN         | 25 mnt |
| 5   | **`review-01`** — blok tersulit | 40 mnt |
| 6   | Catat + commit                  | 10 mnt |

Total 2 jam 20 menit dengan jeda.

**Target yang benar:** nested enam level lulus, DAN `review-01` dikerjakan.
Bukan "Day 4 selesai".

**Kenapa `review-01` wajib masuk:** semua blok yang selesai sejauh ini adalah yang
paling terstruktur. Yang tersisa termasuk semua blok tanpa jawaban tunggal — dan justru
itu yang dibutuhkan untuk "melihat bug yang orang lain tidak lihat".

**Batasan:** tidak ada aturan baru, tidak ada pemeriksaan baru. `Audit/2026-11-19.md`
mencatat rasio aturan : konsep sudah tidak sehat.

---

## Ringkasan 2026-11-20

| Item                   | Hasil                                       |
|------------------------|---------------------------------------------|
| Nested loop enam level | **TUNTAS**                                  |
| Day 4                  | **SELESAI** (for, while, do-while, nested)  |
| Hook pre-commit        | **ditemukan mati**, diperbaiki              |
| Aturan #59, #60        | hook di repo + installer + verifikasi       |
| `review-01`            | Design lulus, Functionality dan Naming sisa |
| Health check           | 39/41 (95%)                                 |

**Bug sistem yang ditemukan hari ini:** `working_skills.js` selalu exit 0 karena
penjaganya hanya menyala kalau BELUM ADA satu pun blok dikerjakan. Hook-nya mati sejak
blok pertama selesai. Hook yang tidak pernah menolak lebih buruk daripada tidak ada hook,
karena terlihat seperti perlindungan.

**Utang dilunasi:** hook pre-commit.

**Sisa utang:** empat file EXPLAIN (1 dari 4), posisi vs isi dan array dasar (minggu 3).

---

## Rencana 2026-11-21

| #   | Blok                                             | Waktu  |
|-----|--------------------------------------------------|--------|
| 1   | Re-check nested (jeda 1 hari)                    | 10 mnt |
| 2   | `review-01` Functionality                        | 15 mnt |
| 3   | `review-01` Naming                               | 15 mnt |
| 4   | Jalankan `review_01.js` untuk membuktikan temuan | 5 mnt  |
| 5   | Tandai `review-01` selesai, commit               | 10 mnt |
| 6   | Day 5 — materi fungsi                            | 40 mnt |

Total sekitar 1 jam 35 menit.

---

## 2026-11-22 — kerja sistem, bukan sesi belajar

Isi hari ini: memindahkan `Audit/` dan `Rencana/` ke folder sendiri, menulis
`Rencana/Sesi Mandiri Fungsi.md`, dan `Rencana/Analisa Video Belajar.md`.

**`--no-verify` dipakai sekali di awal hari ini.** Alasannya: tidak ada sesi belajar
hari ini, jadi tidak ada blok Working Skills yang bisa dikerjakan. Aturan #57
mengizinkan commit dokumentasi untuk hari seperti ini. Hook menolak dengan benar —
ini bukan pelanggaran, ini pengecualian yang tercatat.

**Utang baru:** aturan #57 dan hook masih bertentangan. Hook menolak `wip:` dan commit
dokumentasi, padahal #57 membolehkan keduanya. Perlu diputuskan: hook diberi pengecualian,
atau #57 dihapus.

---

## Ringkasan 2026-11-22

| Item                  | Hasil                                        |
|-----------------------|----------------------------------------------|
| Bug sistem ditemukan  | 2 (array di `reading-02`, penjaga #31 buta)  |
| `reading-02`          | **selesai** — 57% lalu 74% setelah uji ulang |
| Working Skills        | **4 dari 8**                                 |
| `pattern_drill_05.js` | dibuat, 15 potongan soal posisi baris        |
| Health check          | 40/41 (98%)                                  |
| Commit                | 4                                            |

**Dua bug sistem:**
1. `reading_02.js` memakai array (`[3,4,2,5,1]`, `.length`, `[i]`) — materi minggu 3
2. Penjaga #31 tidak memeriksa folder `Reading/` karena filternya hanya
   `/soal|recheck|drill/`, dan tidak mendeteksi pola `= [`. Sudah diperbaiki

**Dua pola kesalahan learner yang dicatat di `KESALAHAN.md`:**
- CONCEPT ke-1: `const` dikira bisa berubah
- LOGIC ke-2: baris di dalam `{ }` dikira jalan tiap putaran

Pola kedua ini **sama** dengan `total += i` di nested loop. Muncul dua kali di hari
berbeda, jadi dibuatkan drill khusus: `pattern_drill_05.js`.

---

## Rencana 2026-11-23

| #   | Blok                                                                         | Waktu  |
|-----|------------------------------------------------------------------------------|--------|
| 1   | Re-check `reading-02` (jeda 1 hari)                                          | 10 mnt |
| 2   | `pattern_drill_05` — 15 potongan posisi baris                                | 15 mnt |
| 3   | Day 5 materi konsep 1-3 (kenapa fungsi, deklarasi, parameter)                | 20 mnt |
| 4   | Soal per konsep 1-3                                                          | 20 mnt |
| 5   | Day 5 materi konsep 4-7 (`return`, tanpa return, scope, fungsi dalam fungsi) | 20 mnt |
| 6   | Soal per konsep 4-7                                                          | 20 mnt |
| 7   | Gerbang EASY sampai EXPLAIN                                                  | 60 mnt |
| 8   | Commit                                                                       | 10 mnt |

Total sekitar 2 jam 35 menit.

**Target:** `16_Function.js` dengan enam level lulus, dan dua pola kesalahan 22 Nov
tidak berulang di drill.

**Sumber yang sudah disiapkan:** `Rencana/Sesi Mandiri Fungsi.md` (sembilan pertanyaan
mandiri) dan `Rencana/Analisa Video Belajar.md` (PZN 4:49:29–6:06:36).

---

## Ringkasan 2026-11-23

| Item                  | Hasil                                                    |
|-----------------------|----------------------------------------------------------|
| Re-check `reading-02` | **lulus** setelah 3 percobaan                            |
| `pattern_drill_05`    | **14/15** (93%)                                          |
| `review-02`           | **selesai**                                              |
| Working Skills        | **5 dari 8**                                             |
| Day 5 konsep 1        | **BELUM lulus** — nomor 1 dijawab 1 tempat, seharusnya 4 |
| Health check          | 40/41 (98%)                                              |
| Commit                | 2                                                        |

**Pola yang pulih:** `const` dikira bisa berubah, dan baris di dalam `{ }` dikira
jalan tiap putaran. Dua-duanya sudah benar di drill 05.

**Pola baru:** `i !== 1` dibaca sebagai "i sama dengan 2" (P12), dan kurung kurawal
tidak berpasangan (`SyntaxError`).

**Keputusan:** Day 5 konsep 1 diulang besok. Bukan dilanjutkan — karena kalau
konsep 1 belum masuk, konsep 2 (parameter) tidak akan masuk juga.

---

## Perubahan rencana: Dicoding mulai 24 November

Folder `Course/Dicoding/` sudah ada sejak `d581655` dengan jadwal 60 hari.
Beban: 1 jam 26 menit/hari untuk JS (32 hari), 24 menit/hari untuk SQL (28 hari).

**Dampak:** mulai besok ada dua sumber. Harus diputuskan mana yang jadi input.

| Sumber                   | Peran                                     |
|--------------------------|-------------------------------------------|
| **Dicoding**             | input materi (menggantikan video YouTube) |
| **Gerbang Journey**      | latihan dan uji paham                     |
| ~~YouTube PZN~~          | **dibatalkan** — duplikat dengan Dicoding |
| ~~9 pertanyaan ChatGPT~~ | **dibatalkan** — duplikat dengan Dicoding |

Alasan: Dicoding JS mengajarkan topik yang sama. Menonton video 50 menit untuk
topik yang diajarkan besok = kerja dua kali untuk satu hasil. Audit 2026-11-19
sudah memperingatkan soal menambah sumber tanpa menambah hasil.

**Kabar baik:** struktur asli Dicoding ternyata **dimulai dari modul 4 (fungsi)**,
bukan modul 1. Modul 1-3 (variabel, operator, `if`, loop) dilewati karena sudah
dikuasai. Jadi beban berat langsung di hari pertama — tapi topiknya persis sama
dengan Day 5 Journey.

**Koreksi 23 Nov malam:** rencana 2026-11-24 semula menulis "Dicoding 4.1-4.5".
Itu salah — 4.1-4.3 sudah dikerjakan 23 Nov. Besok seharusnya **4.4 + 4.5**
(parameter dan return value). Sudah diperbaiki di `Rencana/2026-11-24.md`.

---

## Rencana 2026-11-24

| #   | Blok                                                        | Waktu  |
|-----|-------------------------------------------------------------|--------|
| 1   | Dicoding hari 1: buka kelas, cek modul, kerjakan yang perlu | 40 mnt |
| 2   | Day 5 konsep 1 — ulang, soal baru                           | 15 mnt |
| 3   | Day 5 konsep 2-3 (deklarasi, parameter)                     | 40 mnt |
| 4   | Working Skills `docs-01`                                    | 20 mnt |
| 5   | Catat di `Course/Dicoding/Progress.md` + commit             | 10 mnt |

Total ±2 jam 5 menit.

**Target:** konsep 1-3 lulus, dan Dicoding hari 1 tercatat.

**Yang tidak dikerjakan:** video YouTube, 9 pertanyaan ChatGPT. Dibatalkan.

---

## 2026-11-23 — kerja sistem, drill, dan mulai Dicoding

| Item                     | Hasil                               |
|--------------------------|-------------------------------------|
| Re-check `reading-02`    | lulus setelah 3 percobaan           |
| `pattern_drill_05`       | **14/15** — dua pola lama pulih     |
| `review-02`              | selesai                             |
| Working Skills           | **5 dari 8**                        |
| Folder `Course/Dicoding` | dibuat, 3 file                      |
| Jadwal 60 hari           | direvisi sesuai struktur modul asli |
| Dicoding hari 1          | modul 4.1 dimulai                   |
| Health check             | 40/41 (98%)                         |

**Pola yang pulih:** `const` dikira bisa berubah, dan baris di dalam `{ }` dikira
jalan tiap putaran. Dua-duanya diuji di drill 05 dan dijawab benar.

**Pola baru tercatat:** `i !== 1` dibaca sebagai "i sama dengan 2" (P12),
dan kurung kurawal tidak berpasangan (`SyntaxError: Unexpected end of input`).

**Keputusan:** dua kelas Dicoding dipilih — JavaScript (46 jam) dan SQL (11 jam).
Alasan: JS sama dengan materi Journey tapi bersertifikat; SQL dipakai tiap hari
di backend. AWS dan Python ditolak.

**Rencana besok:** lihat `Rencana/2026-11-24.md`.

---

## Ringkasan 2026-11-24

| Item                | Hasil                                    |
|---------------------|------------------------------------------|
| Tujuh konsep fungsi | **lulus semua**, dengan 6 koreksi        |
| Gerbang fungsi      | **belum dimulai** — ditunda ke 25 Nov    |
| Dicoding            | bab 4 lulus (4.1-4.11), sekarang 5.1     |
| Dicoding dipause    | learner mau cari materi tambahan sendiri |
| Health check        | 39/41 (95%)                              |
| Working Skills      | 5 dari 8                                 |

**`--no-verify` dipakai sekali hari ini.** Alasannya: tidak ada blok Working Skills
yang dikerjakan. Seluruh sesi dipakai tujuh konsep fungsi, dan itu belajar — tapi
bukan blok Working Skills. Hook menolak dengan benar. Ini **kekurangan sesi**,
bukan pelanggaran yang dibenarkan: aturan #41 bilang setiap sesi wajib satu blok,
dan hari ini tidak ada.

**Koreksi learner terhadap assistant (3 hal):**
1. "aku belajar 1 perkonsep dulu biar fokus tidak terpecah"
2. "aku ingin remedial/recheck dari 1 perkonsep hingga benar sebelum lanjut"
3. "pertanyaan menjebak sekali, aku mana tahu kalau ada halaman produk dan lainnya"

Nomor 3 paling keras: soal menyebut "di enam tempat" tanpa menampilkan daftarnya.
Itu soal cacat, bukan kekurangan learner.

**Pola kesalahan learner yang tercatat:**
- READING ke-3: jumlah yang disebut soal tidak terbaca (5 dijawab 4, 6 dijawab 4)
- CONCEPT ke-4: "apa yang keluar dari fungsi" belum menempel (`undefined` dikira
  error, `12000` untuk fungsi tanpa `return`, `178000` untuk `200000 + 22000`,
  `200000` untuk `200000 + undefined`)

Pola kedua muncul **4 kali dalam satu sesi**. Penanganan diubah: setiap soal wajib
menanyakan "apa yang KELUAR", bukan "apa yang dihitung".

---

## Rencana 2026-11-25

| #   | Blok                         | Waktu  |
|-----|------------------------------|--------|
| 1   | Protokol buka                | 5 mnt  |
| 2   | Materi tambahan dari learner | 20 mnt |
| 3   | Gerbang EASY                 | 15 mnt |
| 4   | Gerbang MEDIUM               | 20 mnt |
| 5   | Gerbang HARD                 | 25 mnt |
| 6   | Gerbang WRITE                | 25 mnt |
| 7   | Gerbang VERIFY               | 10 mnt |
| 8   | Gerbang EXPLAIN              | 15 mnt |
| 9   | Working Skills `docs-01`     | 30 mnt |
| 10  | Catat + commit               | 10 mnt |

Total ±2 jam 55 menit. **Satu target: gerbang fungsi enam level lulus.**

Dicoding dipause 1-2 hari. Tenggatnya 2027-01-22, jadi masih aman. Kalau lebih
dari 3 hari, ingatkan.

---

## Ringkasan 2026-11-25

| Item                      | Hasil                          |
|---------------------------|--------------------------------|
| Gerbang fungsi enam level | **TUNTAS** — 10/10 pemeriksaan |
| Day 5                     | **SELESAI**                    |
| `docs-01`                 | selesai (tugas 3 dan 4)        |
| Working Skills            | **6 dari 8**                   |
| Health check              | 39/42 (93%)                    |
| Commit                    | 2                              |

**Yang paling berharga:** soal VERIFY. AI menulis `harga * 20` bukan `persen`.
Output `40000` **benar**, tapi kodenya salah. Learner awalnya menjawab `45000`
karena membaca kode dengan benar — itu naluri yang tepat, walaupun pertanyaannya
menanyakan output.

**Koreksi yang diberikan:**
- EASY E3: berhenti di langkah dalam `dua(dua(x))`
- MEDIUM M3: `"Halo, undefined"` bukan `undefined` — teks vs angka
- HARD H1b: `"kecil"` bukan kosong; H2b: `ReferenceError` bukan `undefined`
- WRITE: `12` ditulis mati dua kali sebelum akhirnya pakai `persen`
- VERIFY: `45000` vs `40000`
- docs-01 tugas 4: kutipan MDN tidak mendukung jawaban

---

## Rencana 2026-11-26

| #   | Blok                                           | Waktu  |
|-----|------------------------------------------------|--------|
| 1   | Protokol buka                                  | 5 mnt  |
| 2   | Re-check fungsi (jeda 1 hari)                  | 15 mnt |
| 3   | Working Skills `memecah-01`                    | 40 mnt |
| 4   | Dicoding lanjut 5.1 object (kalau learner mau) | 40 mnt |
| 5   | Catat + commit                                 | 10 mnt |

**Target:** re-check fungsi lulus, dan `memecah-01` selesai.

**Catatan:** Day 5 selesai, Day 6 (array) butuh keputusan. Dicoding sekarang di
5.1 (object) — itu **minggu 4** Journey. Jadi ada pilihan: ikut Dicoding ke object,
atau ikut Journey ke array dulu.

---

## Teguran learner 2026-11-25 — yang mengubah sistem

> *"tadi 7 kesalahan itu kamu yang koreksi lalu membenarkan, bukan dariku sendiri.
> Itu merusak pemahamanku."*

Kucek: dari 7 koreksi 25 Nov, **6 diberikan langsung oleh assistant**. Learner hanya
menemukan satu sendiri (WRITE `12` ditulis mati), dan itu pun setelah dua kali
ditunjukkan.

Dan yang lebih parah: `KESALAHAN.md` mencatat **60 kesalahan learner** dan
**0 kesalahan assistant**. Tidak ada file yang mengevaluasi tutor.

**Yang diperbaiki:**

| #   | Perbaikan                                  |
|-----|--------------------------------------------|
| 1   | `KESALAHAN_ASSISTANT.md` dibuat            |
| 2   | Aturan #52: satu artefak satu commit       |
| 3   | Aturan #53: kurang dari 3 artefak = sinyal |
| 4   | Aturan renumber #54-#62                    |

**Cara mengoreksi yang baru:**

| Lama                              | Baru                                       |
|-----------------------------------|--------------------------------------------|
| learner salah, assistant jelaskan | learner salah, assistant **tanya dulu**    |
| langsung beri jawaban             | beri **satu kesempatan** menemukan sendiri |
| jelaskan hasil akhir              | jelaskan **langkahnya**                    |

---

## 2026-11-26 — kosong

Tidak ada commit, tidak ada blok Working Skills, tidak ada Dicoding.

**Alasan (aturan #53):** learner sedang banyak tugas lain. Bukan karena sistem
terlalu berat, bukan karena materi tidak jelas. Satu hari lewat.

**Yang TIDAK dilakukan:** tidak ada hukuman, tidak ada pengulangan paksa, tidak ada
utang baru. Satu hari hilang tidak mengubah apa pun selain tanggal.

---

## Ringkasan 2026-11-27 — re-check 7 koreksi

| #   | Yang diuji                         | Hasil                  |
|-----|------------------------------------|------------------------|
| 1   | `tiga(tiga(2))`                    | benar `18`             |
| 2   | `"undefined!"` teks vs `undefined` | benar                  |
| 3   | `"A"` / `"B"` dua jalur return     | benar                  |
| 4   | `ReferenceError` vs `undefined`    | benar                  |
| 5   | `10000` angka mati                 | benar                  |
| 6   | output benar bukan kode benar      | benar setelah dituntun |
| 7   | kutipan dokumentasi                | **tidak ketemu**       |

**6 dari 7 pulih.** Nomor 6 dijawab benar setelah dua pertanyaan bantuan, tanpa
diberi jawaban — cara baru berjalan.

**Temuan baru dari nomor 7:** learner tidak bisa mengutip dokumentasi MDN karena
**bahasa Inggris**. Padahal kalimat yang dicari adalah **kalimat pertama** di halaman.
Hambatannya bukan struktur dokumentasi, tapi kemampuan membaca Inggris.

Ini belum ada di sistem sama sekali. Semua dokumentasi backend (MDN, Node,
PostgreSQL, Spring) berbahasa Inggris.

**Usulan (belum diputuskan):** blok Working Skills baru untuk membaca dokumentasi
Inggris — bukan kursus bahasa Inggris, tapi latihan membaca 5 kalimat dokumentasi
dan menerjemahkan maksudnya.

---

## Ringkasan 2026-11-27 (lanjutan)

| Item               | Hasil                                          |
|--------------------|------------------------------------------------|
| Re-check 7 koreksi | **6 dari 7 pulih**                             |
| Temuan baru        | hambatan bahasa Inggris di dokumentasi         |
| `memecah-01`       | **belum** — learner lelah, 2 hari banyak tugas |
| Commit             | 2                                              |
| Dicoding           | pause hari ke-2                                |

**`--no-verify` dipakai sekali.** Alasannya: tidak ada blok Working Skills yang
selesai. Re-check bukan blok Working Skills, dan `memecah-01` belum tuntas.
Hook menolak dengan benar. Ini kekurangan sesi, dicatat apa adanya.

---

## Rencana 2026-11-28

| #   | Blok                                                   | Waktu  | Artefak |
|-----|--------------------------------------------------------|--------|---------|
| 1   | Protokol buka                                          | 5 mnt  | —       |
| 2   | **`memecah-01`** — soal 2 dan 3                        | 40 mnt | 1       |
| 3   | **Day 6 konsep 1-4** (kenapa, membuat, indeks, length) | 25 mnt | 2       |
| 4   | Soal konsep 1-4                                        | 20 mnt | 3       |
| 5   | **Gerbang EASY array**                                 | 20 mnt | 4       |
| 6   | Catat + commit                                         | 10 mnt | 5       |

**±2 jam · 5 artefak**

**Target:** `memecah-01` selesai, dan array konsep 1-4 lulus dengan soal.

**Yang tidak dikerjakan:** Dicoding (masih pause), video YouTube.

---

## Rencana sesi berikutnya

**2026-11-15 — belum dikerjakan**

| #   | Blok              | Waktu  | Isi                         |
|-----|-------------------|--------|-----------------------------|
| 1   | Re-check `+=`     | 5 mnt  | satu soal, trace tertulis   |
| 2   | Reading 01        | 30 mnt | blok Working Skills pertama |
| 3   | `12_For.js` HARD  | 15 mnt | H1 dan H2                   |
| 4   | `12_For.js` WRITE | 10 mnt | `hitungTotal`               |
| 5   | Catat             | 5 mnt  | Gate Log, TRAIN_LOG, commit |

Kalau waktu cuma 40 menit: poin 1 dan 2 saja.

**Yang tidak dikerjakan:** `while`, `do...while`, `15_Nested` HARD, dan semua perubahan sistem.

**`Audit/2026-11-14.md`, jarak ke tujuan:**

| Yang diminta          | Yang dilatih sekarang        | Jarak           |
|-----------------------|------------------------------|-----------------|
| Kritis soal kode      | gerbang menanya "apa output" | jauh            |
| Review kode           | 1 file, belum dibuka         | jauh            |
| Solve problem         | tidak ada latihan merancang  | **tidak ada**   |
| Lihat bug tersembunyi | 1 file debug, belum dibuka   | jauh            |
| Mastering backend     | belum sampai HTTP            | wajar, minggu 1 |

**Temuan audit:** tidak ada satu pun latihan memecah masalah baru. Semua soal punya kode jadi.
Ditambahkan `Working Skills/Latihan Memecah Masalah.md` sebagai penutup lubang itu.

**Peringatan untuk diri sendiri:** 2026-11-14 menghabiskan satu sesi penuh membangun sistem
(5 aturan, 4 pemeriksaan, 2 skrip, 3 bug sendiri) sementara blok Working Skills tetap 0 dari 6.
Sisa minggu ini: nol perubahan sistem kecuali yang menghalangi belajar.

---

## Rencana sesi berikutnya

**2026-11-18**

| #   | Blok                          | Waktu  | Isi                                  |
|-----|-------------------------------|--------|--------------------------------------|
| 1   | Pattern drill 02              | 5 mnt  | 20 potongan baru, target 20/20       |
| 2   | Re-check 3 item               | 10 mnt | jenis bug 1 vs 5, dead store, alasan |
| 3   | `14_DoWhile.js` per konsep    | 20 mnt | konsep A-D                           |
| 4   | `14_DoWhile.js` EASY + MEDIUM | 15 mnt | kalau per konsep lulus               |
| 5   | Catat                         | 5 mnt  | Gate Log, commit                     |

Total 55 menit. Kalau cuma 30 menit: poin 1 dan 2 saja.

**Yang TIDAK dikerjakan besok:** array (belum waktunya), `15_Nested` gerbang, perubahan sistem.

**Peringatan untuk diri sendiri:** 2026-11-17 menghabiskan sesi penuh membangun sistem
(2 level baru, 1 drill, 4 pemeriksaan, 1 audit) sementara blok Working Skills masih
1 dari 8. Sisa minggu ini: nol perubahan sistem kecuali yang menghalangi belajar.

---

## Aturan

1. Isi **setelah** sesi selesai, bukan di tengah
2. Konsep dengan 3 FAIL di hari yang sama → pindah ke `## Deferred` di `Catatan.md` (README 17b)
3. Konsep yang lulus → tambahkan ke `REVIEW_QUEUE.md`. Interval mengikuti README #38:
   lulus bersih 4 hari, lulus setelah koreksi 2 hari, gagal 1 hari
4. Kalau level tertinggi masih EASY setelah 3 sesi, konsep itu belum dikuasai — jangan naik
   status di `SKILLS.md`

---

## Pemakaian `--no-verify`

Hook `pre-commit` menolak commit selama belum ada blok Working Skills dikerjakan. Jalur darurat
`git commit --no-verify` dicatat di sini setiap kali dipakai.

| Tanggal    | Commit          | Alasan                    |
|------------|-----------------|---------------------------|
| 2026-11-14 | aturan #41      | aturan sistem, bukan sesi |
| 2026-11-14 | skrip penagih   | membangun mekanisme       |
| 2026-11-14 | hook pre-commit | hook belum ada            |
