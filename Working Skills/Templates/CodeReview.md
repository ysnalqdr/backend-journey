# Template — Code Review

Dipakai dua arah: saat mereview kode orang, dan saat kode sendiri direview.

---

## Sesi

**Tanggal:**
**Arah:** mereview / direview
**File:**
**Penulis:**

---

## Urutan pemeriksaan

Ikuti urutan ini. **Jangan lompat ke style di awal** — itu kebiasaan reviewer pemula.

### 1. Design

Apakah potongan kode ini masuk akal di tempatnya? Apakah tugasnya jelas satu, atau bercampur?

> Komentar:

### 2. Functionality

Apakah melakukan yang dimaksud? Bagaimana kalau inputnya aneh?

> Komentar:

### 3. Complexity

Apakah lebih rumit dari perlu? Ada bagian yang bisa dihapus tanpa kehilangan apa pun?

> Komentar:

### 4. Tests

Kalau ini berubah besok, apa yang akan menangkap kesalahannya?

> Komentar:

### 5. Naming

Apakah nama menjelaskan maksud, atau cuma menjelaskan tipe?

> Komentar:

### 6. Style

Ini paling akhir, dan hampir selalu `[nit]`.

> Komentar:

---

## Daftar komentar

| #   | Baris | Label                  | Komentar | Alasan |
|-----|-------|------------------------|----------|--------|
| 1   |       | `[blocking]` / `[nit]` |          |        |
| 2   |       |                        |          |        |
| 3   |       |                        |          |        |

**Aturan label:**
- `[blocking]` = harus diperbaiki sebelum digabung. Wajib ada alasan.
- `[nit]` = opsional. Kalau penulis tidak mengerjakan, tidak masalah.

**Aturan alasan:** "ini salah" bukan alasan. Yang diterima: "ini salah **karena** X, **akibatnya** Y".

---

## Kalau aku yang direview

**Komentar yang kuterima:**

| #   | Komentar | Setuju? | Yang kulakukan |
|-----|----------|---------|----------------|
| 1   |          |         |                |
| 2   |          |         |                |

**Yang kutolak, dan alasannya:**

>

Menolak komentar review itu sah — asal ada alasan. Yang tidak sah: mengerjakan semuanya tanpa berpikir, atau menolak semuanya tanpa alasan.
