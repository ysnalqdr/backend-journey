# Docs 01 — Cari Sendiri di MDN

**Tanggal dibuat:** 2026-11-08
**Aturan:** README #31

---

## Aturan main

1. **Jangan tanya tutor dulu.** Buka dokumentasi resmi.
2. Kutip baris yang menjawab pertanyaanmu — tempel di sini.
3. Kalau tidak ketemu, tulis **"tidak ketemu"** dan jelaskan **kenapa** dokumentasinya membingungkan. Itu jawaban sah, bukan kegagalan.
4. Baru setelah itu boleh tanya, dengan menyertakan kutipanmu.

---

## Tugas 1 — `typeof` untuk array

**Pertanyaan:** `typeof [1,2,3]` menghasilkan `"object"`. Bagaimana cara memeriksa apakah sesuatu itu array?

**Cari di:** MDN → `Array.isArray`

**Kutipan yang kutemukan:**

```

```

**Jawabanku:**

> **Tidak dikerjakan 2026-11-25** — `Array.isArray` butuh materi array (minggu 3).
> Ditunda ke minggu 3.

**Menit yang kuhabiskan:** —

---

## Tugas 2 — beda `slice` dan `splice`

**Pertanyaan:** Apa bedanya, dan mana yang **mengubah array aslinya**?

**Cari di:** MDN → `Array.prototype.slice` dan `Array.prototype.splice`

**Kutipan yang kutemukan:**

```

```

**Jawabanku:**

> **Tidak dikerjakan 2026-11-25** — `slice`/`splice` butuh materi array (minggu 3).
> Ditunda ke minggu 3.

**Menit:** —

---

## Tugas 3 — `Number.isNaN` vs `isNaN`

**Pertanyaan:** Kenapa ada dua? Kapan yang satu lebih tepat?

**Cari di:** MDN → `Number.isNaN` dan `isNaN`

**Enam hasil yang dijalankan learner 2026-11-25 (semua benar):**

```
isNaN("abc")             -> true
Number.isNaN("abc")      -> false
isNaN("123")             -> false
Number.isNaN("123")      -> false
isNaN(undefined)         -> true
Number.isNaN(undefined)  -> false
```

**Jawabanku:**

> Bedanya: `isNaN` mengubah nilainya jadi angka dulu, baru diperiksa. Jadi `"abc"`
> berubah jadi `NaN` dan hasilnya `true`. `Number.isNaN` memeriksa langsung tanpa
> mengubah, jadi `"abc"` bukan `NaN` dan hasilnya `false`.
> Yang lebih tepat dipakai: `Number.isNaN`, karena `isNaN` menutupi penyebab —
> masalahnya tipe string, bukan `NaN`.

**Menit:** 15

**Koreksi:** penjelasan awal learner menyebut `"abc"` bukan angka, tanpa menyebut
langkah konversi. Mekanismenya dijelaskan setelah itu.

---

## Tugas 4 — operator `??` di dokumentasi resmi

**Pertanyaan:** Apa nama resminya, dan apa yang terjadi kalau dicampur `&&` tanpa tanda kurung?

**Cari di:** MDN → `Nullish coalescing operator`

**Kutipan yang kutemukan:**

```
?? tidak bisa dicampur langsung dengan && atau ||. Kombinasi itu wajib memakai
tanda kurung, kalau tidak menghasilkan SyntaxError.
```

**Jawabanku:**

> Nama resminya **Nullish coalescing operator**. Kalau dicampur `&&` tanpa kurung,
> hasilnya **SyntaxError** — bukan error saat program jalan, tapi error saat kode
> dibaca. Buktinya: `null ?? 1 && 2` menghasilkan
> `SyntaxError: Unexpected token '&&'`. Yang benar: `null ?? (1 && 2)`.

**Menit:** 10

**Koreksi:** learner sempat mengutip kalimat tentang "falsy values" yang tidak
menjawab pertanyaan. Jenis errornya sudah benar, kutipannya yang salah.

---

## Tugas 7 (tambahan 2026-11-27) — `??` memeriksa apa saja

**Hasil dijalankan learner:**

```
0 ?? 5         -> 0
null ?? 5      -> 5
undefined ?? 5 -> 5
```

**Jawaban learner:** "karena tidak ada null, selalu memilih kiri" — **benar isinya**,
tapi belum menyebut `undefined`.

**Kutipan MDN yang dicari:**

```
The nullish coalescing (??) operator is a logical operator that returns its
right-hand side operand when its left-hand side operand is null or undefined,
and otherwise returns its left-hand side operand.
```

**Temuan penting:** learner menulis "tidak ketemu dan susah dimengerti karena bahasa
Inggris". Padahal kalimat itu adalah **kalimat pertama** di halaman.

Artinya hambatannya bukan struktur dokumentasi, tapi **kemampuan membaca bahasa
Inggris**. Ini bukan kesalahan learner, tapi **keterampilan yang belum dilatih**, dan
belum ada di sistem sama sekali.

**Konsekuensi:** semua dokumentasi backend (MDN, Node, PostgreSQL, Spring) berbahasa
Inggris. Kalau tidak ditangani, hambatan yang sama akan muncul di setiap fase.

---

## Tugas 5 — baca dokumentasi yang sulit

**Pertanyaan:** Buka MDN → `Array.prototype.reduce`. **Tanpa** membaca penjelasan panjangnya, coba pahami dari **satu contoh kode** saja.

**Kutipan yang kutemukan:**

```

```

**Yang masih tidak kupahami setelah membaca:**

> **Tidak dikerjakan 2026-11-25** — `reduce` butuh materi array (minggu 3).

**Menit:** —

---

## Penilaian diri

| Tugas | Ketemu? | Menit | Dokumentasinya jelas? |
|-------|---------|-------|-----------------------|
| 1     |         |       |                       |
| 2     |         |       |                       |
| 3     |         |       |                       |
| 4     |         |       |                       |
| 5     |         |       |                       |

**Tugas mana yang paling sulit, dan kenapa:**

>

---

## Setelah selesai

Bandingkan dengan `Kunci/Docs 01.md` — di sana ada catatan tentang **apa yang biasanya tidak dijelaskan MDN** dan di mana harus mencari kalau begitu.

---

## Yang diuji

| Kemampuan                                         | Tugas |
|---------------------------------------------------|-------|
| mencari jawaban spesifik, bukan membaca semuanya  | 1, 3  |
| membedakan dua hal yang mirip                     | 2, 3  |
| membaca dokumentasi yang ditulis untuk orang lain | 5     |
| menilai kualitas dokumentasi                      | semua |
| mengakui "tidak ketemu" tanpa merasa gagal        | semua |
