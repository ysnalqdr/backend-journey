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

**Audit 2026-11-14, jarak ke tujuan:**

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
