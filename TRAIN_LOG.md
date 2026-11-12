# Train Log

Catatan sesi latihan ekstrem. Tujuannya mengukur **apakah kemampuan naik**, bukan berapa lama duduk.

Satu baris per sesi latihan.

---

## Format

| Tanggal | Konsep | Soal | PASS | FAIL | Level tertinggi lulus | Waktu total | Catatan |
|---------|--------|------|------|------|-----------------------|-------------|---------|

**Level tertinggi lulus:** EASY / MEDIUM / HARD
Konsep baru dianggap lulus hanya kalau ada minimal 1 MEDIUM yang PASS.

---

## Sesi

| Tanggal    | Konsep  | Soal | PASS | FAIL | Level tertinggi lulus | Waktu | Catatan                                                    |
|------------|---------|------|------|------|-----------------------|-------|------------------------------------------------------------|
| 2026-11-07 | ternary | 1    | 0    | 1    | —                     | 20s   | alasan salah sasaran: diperiksa `tiket > 0`, bukan `tiket` |

---

## Ringkasan per konsep

| Konsep  | Sesi | Total PASS | Total FAIL | Status | Bukti |
|---------|------|------------|------------|--------|-------|
| ternary | 1    | 0          | 1          | 1      | —     |

---

## Aturan

1. Isi **setelah** sesi selesai, bukan di tengah
2. Konsep dengan 3 FAIL di hari yang sama → pindah ke `## Deferred` di `Catatan.md` (README 17b)
3. Konsep yang lulus → tambahkan ke `REVIEW_QUEUE.md` dengan tanggal re-check +2 hari
4. Kalau `Level tertinggi lulus` masih EASY setelah 3 sesi, konsep itu **belum dikuasai** — jangan naik status di `SKILLS.md`
