# Train Log

Catatan sesi latihan. Tujuannya mengukur **apakah kemampuan naik**, bukan berapa lama duduk.

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

| Tanggal    | Konsep                   | Soal | PASS | FAIL | Level  | Catatan                             |
|------------|--------------------------|------|------|------|--------|-------------------------------------|
| 2026-11-07 | ternary                  | 1    | 0    | 1    | —      | alasan salah sasaran                |
| 2026-11-12 | `for` mundur             | 2    | 2    | 0    | EASY   | `i--` belum diajarkan, soal dicabut |
| 2026-11-12 | `for` off-by-one         | 2    | 1    | 1    | MEDIUM | `let` ganda tidak terlihat          |
| 2026-11-12 | akumulasi `-=`           | 1    | 1    | 0    | MEDIUM | lulus setelah 4 percobaan           |
| 2026-11-12 | `for` variatif           | 6    | 1    | 5    | EASY   | dihentikan, kualitas turun          |
| 2026-11-12 | `for` per konsep         | 10   | 10   | 0    | MEDIUM | setelah aturan trace, 10/10         |
| 2026-11-12 | `break`, `continue`, `%` | 7    | 6    | 1    | MEDIUM | `% 3` disangka ganjil               |
| 2026-11-12 | nested loop              | 3    | 3    | 0    | MEDIUM | struktur dulu, hitungan menyusul    |
| 2026-11-12 | `%` selain 2             | 4    | 3    | 1    | MEDIUM | angka pada `+=` masih goyah         |

**Catatan pola:** 26 soal dalam satu hari, melebihi batas 20 (README #22b). Sesi seharusnya
dipecah dua hari.

**Yang berubah:** batch pertama 1/6, lalu 10/10 setelah aturan "tulis deret sampai angka gagal"
dan "tabel empat kolom" diterapkan. Cara kerja lebih menentukan daripada penjelasan.

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

## Aturan

1. Isi **setelah** sesi selesai, bukan di tengah
2. Konsep dengan 3 FAIL di hari yang sama → pindah ke `## Deferred` di `Catatan.md` (README 17b)
3. Konsep yang lulus → tambahkan ke `REVIEW_QUEUE.md`. Interval mengikuti README #38:
   lulus bersih 4 hari, lulus setelah koreksi 2 hari, gagal 1 hari
4. Kalau level tertinggi masih EASY setelah 3 sesi, konsep itu belum dikuasai — jangan naik
   status di `SKILLS.md`
