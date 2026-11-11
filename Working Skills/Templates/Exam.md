# Exam

Ujian akhir per hari belajar. Berbeda dari gerbang harian: **Exam tidak boleh dibuka materinya sama sekali**, dan **semua konsep hari itu diuji dalam satu rangkaian**.

---

## Kapan

Di akhir hari, **setelah** semua materi dan gerbang selesai. Maksimal 20 menit.

## Aturan

1. **Tidak boleh buka materi, catatan, atau `SYMBOLS.md`**
2. **Tidak boleh pakai AI** — kalau macet, tulis "TIDAK TAHU", itu jawaban yang sah
3. Semua soal dikerjakan **berurutan**, tidak boleh lompat
4. Kalau ada yang salah → remediasi → ujian ulang **soal berbeda**, di hari lain
5. Skor **bukan** tujuan. Yang dilihat: soal mana yang gagal dan kenapa

## Skor

| Skor | Arti |
|---|---|
| 100% | lulus, lanjut hari berikutnya |
| 75–99% | lulus bersyarat — konsep yang gagal masuk `REVIEW_QUEUE.md` |
| < 75% | ulangi hari yang sama besok |

---

## Template

```markdown
# Exam — Day N

**Date:** 
**Duration:** 
**Material opened:** no
**AI used:** no

## Part 1 — Recall (tanpa melihat kode)

1. <pertanyaan konsep, jawab dengan kata sendiri>

## Part 2 — Predict output (3 soal)

1. ```javascript
   <kode>
   ```
   **Answer:**
   **Why:**

## Part 3 — Find the bug (2 soal)

1. ```javascript
   <kode rusak>
   ```
   **Bug:**
   **Fix:**
   **Why:**

## Part 4 — Write from memory (1 soal)

<instruksi, tanpa contoh>

**My code:**
```javascript
```

## Part 5 — Cross-concept (1 soal, gabung hari ini + hari sebelumnya)

```javascript
<kode>
```
**Answer:**
**Why:**

## Result

| Part | Score | Note |
|---|---|---|
| 1 Recall | /1 | |
| 2 Predict | /3 | |
| 3 Bug | /2 | |
| 4 Write | /1 | |
| 5 Cross | /1 | |
| **Total** | **/8** | |

**Verdict:** PASS / CONDITIONAL / REPEAT
**Concepts to review:**
```

---

## Exam pertama

Day 3 belum bisa diuji penuh — ternary dan `switch` belum lulus. Exam Day 3 dibuat setelah semua konsep Day 3 minimal berstatus 3.
