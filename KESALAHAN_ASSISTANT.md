# KESALAHAN_ASSISTANT.md

Kesalahan **tutor**, bukan learner. Dibuat 2026-11-25 setelah learner menegur:

> *"7 kesalahan itu kamu yang koreksi lalu membenarkan, bukan dariku sendiri.
> Itu merusak pemahamanku."*

Sebelum file ini ada, `KESALAHAN.md` mencatat **60 kesalahan learner** dan
**0 kesalahan assistant**. Itu bias: yang salah dicatat rapi, yang mengoreksi
tidak pernah dievaluasi.

**Aturan:** setiap kali learner menegur, atau setiap kali aku sadar salah,
tambahkan satu baris di sini. Format sama seperti `KESALAHAN.md`.

---

## Jenis kesalahan assistant

| Jenis      | Artinya                      |
|------------|------------------------------|
| **SOAL**   | soal cacat atau ambigu       |
| **KUNCI**  | kunci jawaban salah          |
| **BACA**   | salah baca jawaban learner   |
| **BOCOR**  | template membocorkan jawaban |
| **INSTAN** | langsung memberi jawaban     |
| **SISTEM** | pemeriksaan atau hook rusak  |
| **COMMIT** | jumlah commit tidak sesuai   |

------------|----------------------------------------------------------|----------------------------------------|

| **SOAL**   | soal cacat: ambigu, tanpa maksud, informasi kurang       | perbaiki soal, jangan salahkan learner |
| **KUNCI**  | kunci jawaban salah                                      | verifikasi `node` sebelum memberi      |
| **BACA**   | salah membaca jawaban learner                            | baca sampai habis sebelum menilai      |
| **BOCOR**  | memberi template yang membocorkan jawaban                | tanya, jangan isi                      |
| **INSTAN** | langsung memberi jawaban tanpa membuat learner menemukan | tanya dulu, jelaskan kemudian          |
| **SISTEM** | pemeriksaan/hook/aturan rusak atau bertentangan          | perbaiki dan uji                       |
| **COMMIT** | jumlah commit tidak sesuai pekerjaan                     | satu artefak satu commit               |

---

## Catatan

- **2026-11-25** · INSTAN · ke-6 · belum
  - Enam dari tujuh koreksi 25 Nov diberikan langsung oleh assistant
  - Rincian: E3, M3, H1b, H2b, VERIFY, docs-01 — learner tidak diberi kesempatan
    menemukan sendiri
  - Akibat: yang terlatih adalah kemampuan membaca koreksi, bukan menemukan kesalahan
  - Penanganan: kalau jawaban salah, **tanya dulu** ("coba cek bagian X, menurutmu
    apa yang terjadi?"), beri satu kesempatan, baru jelaskan langkahnya

- **2026-11-25** · COMMIT · ke-3 · belum
  - 25 Nov: 1 commit untuk 8 artefak. 23 Nov: 10 commit untuk 2 artefak
  - Penanganan: satu artefak satu commit, dan struktur harian 5 artefak

- **2026-11-25** · BOCOR · ke-2 · belum
  - Memberi template jawaban ("Alasan: HEMAT saja bayar ___") yang membocorkan isi
  - Ditegur learner 21 Nov, terulang 24 Nov pada soal "enam tempat"
  - Penanganan: tanya tanpa kerangka isian

- **2026-11-24** · SOAL · ke-4 · belum
  - Soal menyebut "di enam tempat berbeda" tanpa menampilkan daftarnya
  - Learner: *"pertanyaan menjebak sekali, aku mana tahu"*
  - Penanganan: kalau soal menyebut jumlah, tampilkan daftarnya

- **2026-11-24** · INSTAN · ke-5 · belum
  - Melompat dari konsep 1 ke konsep 6 tanpa verifikasi konsep 2-5
  - Learner menegur: *"kok langsung masuk ke konsep 6?"*
  - Penanganan: satu konsep, verifikasi, baru lanjut

- **2026-11-23** · KUNCI · ke-3 · belum
  - Kunci P4 di `pattern_drill_05.js` salah (`4`, seharusnya `0`)
  - Ketahuan karena diverifikasi `node` sebelum dipakai
  - Penanganan: verifikasi wajib, tidak ada pengecualian

- **2026-11-23** · SISTEM · ke-3 · sudah
  - Hook pre-commit mati sejak blok pertama selesai (`working_skills.js` selalu exit 0)
  - Tidak pernah menolak apa pun selama 5 hari
  - Penanganan: hook diuji dengan commit percobaan

- **2026-11-22** · SOAL · ke-3 · sudah
  - `reading_02.js` memakai array, materi minggu 3
  - Penjaga #31 juga buta: tidak memeriksa folder `Reading/`
  - Penanganan: penjaga diperluas

- **2026-11-21** · BOCOR · ke-1 · sudah
  - Memberi template jawaban untuk soal `review-01`
  - Learner: *"aku tidak mau ada template jawaban, jawabanku harus dari pikiranku sendiri"*
  - Penanganan: tanya tanpa kerangka

- **2026-11-20** · BACA · ke-2 · sudah
  - Menilai jawaban soal `break` salah, padahal maksud learner benar
  - Learner: *"ini maksudnya masih berlaku sepanjang kondisinya terpenuhi"*
  - Penanganan: baca sampai habis

- **2026-11-20** · BACA · ke-1 · sudah
  - Menilai EXPLAIN belum lengkap, padahal learner sudah menulis "`j` kembali ke `j1`"
  - Penanganan: baca sampai habis

---

## Rekap

| Jenis  | Muncul | Sudah diperbaiki |
|--------|--------|------------------|
| SOAL   | 4      | 2                |
| KUNCI  | 3      | 3                |
| BACA   | 2      | 2                |
| BOCOR  | 2      | 1                |
| INSTAN | 6      | 1                |
| SISTEM | 3      | 3                |
| COMMIT | 3      | 1                |

**Yang paling sering: INSTAN (6 kali).** Itu yang paling merusak, karena
mengubah latihan menjadi menonton.

---

## Aturan yang lahir dari file ini

| #   | Aturan                                                            |
|-----|-------------------------------------------------------------------|
| 1   | Kalau jawaban learner salah, **tanya dulu**. Jangan jelaskan.     |
| 2   | Beri satu kesempatan memperbaiki sendiri sebelum dijelaskan.      |
| 3   | Kalau tetap salah, jelaskan **langkahnya**, bukan hasil akhirnya. |
| 4   | Jangan pernah memberi kerangka isian yang membocorkan jawaban.    |
| 5   | Baca jawaban learner sampai habis sebelum menilai.                |
| 6   | Verifikasi kunci dengan `node` sebelum memberi.                   |
| 7   | Kalau soal menyebut jumlah, tampilkan daftarnya.                  |
| 8   | Satu artefak, satu commit.                                        |
