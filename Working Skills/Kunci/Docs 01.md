# Kunci — Docs 01

Jangan dibuka sebelum mengerjakan kelima tugas.

---

## Tugas 1 — `Array.isArray`

**Kutipan MDN yang menjawab:**

> `Array.isArray()` determines whether the passed value is an `Array`.

**Jawaban:** `Array.isArray([1,2,3])` → `true`. `Array.isArray("abc")` → `false`.

**Kenapa `typeof` tidak cukup:** `typeof []` menghasilkan `"object"`, sama seperti `{}` dan `null`. `typeof` tidak bisa membedakan array dari objek lain.

---

## Tugas 2 — `slice` vs `splice`

**Kutipan MDN:**

> `slice()` returns a shallow copy of a portion of an array into a new array object. **The original array will not be modified.**

> `splice()` changes the contents of an array **by removing or replacing existing elements and/or adding new elements in place**.

**Jawaban:**

|                      | `slice`            | `splice`                |
|----------------------|--------------------|-------------------------|
| mengubah array asli? | **tidak**          | **ya**                  |
| mengembalikan        | array baru         | elemen yang dihapus     |
| dipakai untuk        | mengambil sebagian | menghapus / menyisipkan |

Nama yang mirip, perilaku yang berlawanan. Ini salah satu sumber bug paling umum untuk pemula.

---

## Tugas 3 — `Number.isNaN` vs `isNaN`

**Kutipan MDN:**

> `Number.isNaN()` returns `true` if the given value is `NaN` and its type is `Number`; otherwise `false`.

> `isNaN()` returns `true` if the value is `NaN`, **or if it cannot be converted to a number**.

**Jawaban:**

| Input       | `Number.isNaN(x)` | `isNaN(x)`        |
|-------------|-------------------|-------------------|
| `NaN`       | `true`            | `true`            |
| `"abc"`     | `false`           | **`true`** ← beda |
| `undefined` | `false`           | **`true`** ← beda |
| `"123"`     | `false`           | `false`           |

`isNaN` mengubah dulu ke angka, baru memeriksa. Jadi `"abc"` dianggap `NaN` walaupun ia string, bukan `NaN`.

**Aturan:** pakai `Number.isNaN`. `isNaN` hampir selalu salah pilih.

---

## Tugas 4 — `??`

**Nama resmi:** **nullish coalescing operator**.

**Kutipan MDN:**

> The `??` operator returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.

**Soal campur `&&`:** MDN menyebutkan bahwa menggabungkan `??` dengan `&&` atau `||` **tanpa tanda kurung** menghasilkan `SyntaxError`. JavaScript menolak menebak maksudnya.

```javascript
a || b ?? c        // SyntaxError
(a || b) ?? c      // jalan
a || (b ?? c)      // jalan
```

---

## Tugas 5 — `reduce`

**Kutipan contoh MDN yang paling jelas:**

```javascript
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);   // 10
```

**Cara membacanya tanpa penjelasan panjang:**

1. Argumen pertama = fungsi yang dijalankan tiap elemen
2. Fungsi itu menerima dua hal: **nilai yang sudah terkumpul** dan **elemen sekarang**
3. Argumen kedua (`0`) = nilai awal penampung
4. Hasil akhirnya satu nilai

`reduce` = "lipat semua elemen jadi satu".

---

## Yang biasanya TIDAK dijelaskan MDN

Ini bagian yang penting — dokumentasi resmi punya batas:

| MDN menjelaskan    | MDN tidak menjelaskan           |
|--------------------|---------------------------------|
| apa fungsi itu     | kapan kamu **butuh** fungsi itu |
| parameter dan tipe | kapan **jangan** memakainya     |
| contoh yang benar  | kesalahan umum orang lain       |
| perilaku resmi     | performa di data besar          |

Kalau kamu merasa "sudah baca tapi masih bingung", sering kali yang kurang bukan penjelasan fungsinya — tapi **konteks pemakaian**. Itu dicari di tempat lain: Stack Overflow, blog, atau bertanya.

**"Tidak ketemu di MDN" adalah jawaban yang sah.** Itu berarti dokumentasinya lengkap soal *apa*, tapi kurang soal *kapan*.

---

## Cara menilai dirimu

| Tugas | Lulus kalau                                                       |
|-------|-------------------------------------------------------------------|
| 1     | menyebut `Array.isArray` dan alasan `typeof` tidak cukup          |
| 2     | menyebut `splice` mengubah asli, `slice` tidak                    |
| 3     | menyebut `isNaN` mengonversi dulu                                 |
| 4     | menyebut nama "nullish coalescing" dan `SyntaxError` tanpa kurung |
| 5     | bisa menjelaskan `reduce` dalam satu kalimat sendiri              |

Tidak perlu sempurna. Yang dinilai: **kamu mencari sendiri, bukan menunggu dijelaskan.**
