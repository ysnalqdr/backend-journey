# Hasil Pattern Drill 02

**Tanggal:** 2026-11-17
**Blok:** `pattern-01` (ulangan)
**Skor:** 17 dari 20
**Kategori:** hampir — ulangi besok

---

## Perbandingan dengan drill 01

|                      | Drill 01                | Drill 02                    |
|----------------------|-------------------------|-----------------------------|
| Skor                 | 16 dari 19              | **17 dari 20**              |
| Jenis 5 (batas)      | salah                   | benar 2 dari 3              |
| Jenis 7 (dead store) | salah di kode panjang   | **benar 3 dari 3**          |
| Jenis 4 (guard)      | benar setelah dikoreksi | **langsung benar 2 dari 2** |
| Jenis 1 (off-by-one) | salah                   | **benar**                   |

---

## Tiga yang salah

### 11 — dijawab 6, seharusnya 0

```javascript
let hitung = 0;
for (let i = 0; i < 10; i += 4) {
    hitung++;
}
```

Dijawab jenis 6 (nilai salah ditambahkan). Seharusnya **0** — tidak ada bug.

`hitung` itu **penghitung putaran**, bukan penjumlah nilai. `i` jalan `0, 4, 8` → 3 putaran,
jadi `hitung` = 3. Tidak ada yang salah.

Kesalahan: mengira `hitung++` seharusnya `hitung += i`. Nama variabel memberi tahu maksudnya —
kalau maksudnya menjumlah, namanya `total`.

### 13 — dijawab 0, seharusnya 3

```javascript
// maksudnya: mulai dari 20, kurangi 1, 2, 3, 4 secara bertahap
let total = 0;
for (let i = 1; i <= 4; i++) {
    let sisa = 20;
    total += sisa - i;
}
```

Dijawab **0**. Seharusnya **3** (reset di dalam loop).

`sisa` selalu 20, karena `let sisa = 20` ditulis di dalam loop. Padahal maksudnya "bertahap",
yang butuh `sisa` menyimpan hasil putaran sebelumnya.

Hasil sebenarnya: `19 + 18 + 17 + 16 = 70`.
Hasil yang dimaksud: `19 + 18 + 17 + 16` dengan `sisa` menurun → `19 + 17 + 14 + 10 = 60`.

### 19 — dijawab 5, seharusnya 0

```javascript
const angka = [3, 6, 9];
let jumlah = 0;
for (let i = 0; i < angka.length; i++) {
    jumlah += angka[i];
}
```

Dijawab jenis 5 (batas tidak diperiksa). Seharusnya **0** — tidak ada bug.

`i` berhenti di 3 karena `3 < 3` itu false. `angka[3]` tidak pernah dibaca.

Kesalahan: melihat `.length` lalu langsung memutuskan "batas tidak diperiksa". Padahal yang
menentukan adalah **tanda** — `<=` bug, `<` tidak.

---

## Pola yang masih tersisa

| Jenis         | Benar | Salah |
|---------------|-------|-------|
| 1 off-by-one  | 1     | 0     |
| 2 shadowing   | 1     | 0     |
| 3 reset       | 1     | 1     |
| 4 guard       | 2     | 0     |
| 5 batas       | 2     | 1     |
| 6 nilai salah | 3     | 1     |
| 7 dead store  | 3     | 0     |
| 0 benar       | 4     | 2     |

Dua kelemahan yang jelas:

1. **Jenis 5 vs 0** — masih memakai "ada `.length`" sebagai penanda, bukan tanda `<` / `<=`.
2. **Jenis 3** — belum bisa membedakan "variabel di dalam loop memang salah" dari "memang
   benar karena hanya dipakai satu putaran".

---

## Catatan soal yang cacat

Dua soal di seri ini cacat dan sudah diperbaiki sebelum di-commit:

| #   | Cacat                      | Perbaikan                |
|-----|----------------------------|--------------------------|
| 15  | tidak menyebut maksud kode | ditambah komentar maksud |
| 13  | tidak menyebut maksud kode | ditambah komentar maksud |

Pelanggaran aturan #24c: soal wajib menyatakan yang sudah diketahui, termasuk maksud kode.

Tanpa maksud, satu potongan bisa punya dua jawaban sah — dan learner dinilai salah atas
ambiguitas yang dibuat pembuat soal.

---

## Yang perlu dilatih

| #   | Yang dilatih  | Cara                                |
|-----|---------------|-------------------------------------|
| 1   | jenis 5 dan 0 | baca **tanda** dulu, baru `.length` |
| 2   | jenis 3 dan 0 | harus simpan nilai antar putaran?   |
| 3   | nama variabel | `hitung` = putaran, `total` = nilai |

---

## Rencana

Ulangi **2026-11-18** dengan 20 potongan baru (seri 03). Target 20 dari 20.

Jangan ulangi hari ini.
