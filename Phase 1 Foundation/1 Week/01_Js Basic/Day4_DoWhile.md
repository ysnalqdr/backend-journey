# Day 4 — `do...while` mendalam

Bahan bacaan. Lanjutan `Day4_While.md`. Bagian 6 di file itu hanya pengantar.

Baca sampai habis sebelum soal.

---

# Bagian 1 — satu-satunya loop yang jalan dulu

```javascript
do {
    // badan loop
} while (kondisi);
```

Urutannya:

1. jalankan badan
2. **baru** periksa kondisi
3. kalau `true`, ulangi dari langkah 1

`while` urutannya kebalikan:

1. periksa kondisi
2. kalau `true`, jalankan badan

Bedanya bukan gaya penulisan. Bedanya **hasil**.

---

# Bagian 2 — perbedaan yang bisa dilihat

Kondisi salah sejak awal. `i` mulai dari `10`, syaratnya `i < 5`.

```javascript
let i = 10;
let jalan = 0;

while (i < 5) {
    jalan++;
    i++;
}

console.log(jalan);   // 0
```

```javascript
let i = 10;
let jalan = 0;

do {
    jalan++;
    i++;
} while (i < 5);

console.log(jalan);   // 1
```

|                          | `while`           | `do...while`           |
|--------------------------|-------------------|------------------------|
| Kondisi diperiksa        | sebelum badan     | sesudah badan          |
| Jalan minimal            | 0 kali            | **1 kali**             |
| Kondisi salah sejak awal | badan tidak jalan | badan jalan **sekali** |

Terverifikasi:

```
while     -> 0 putaran
do-while  -> 1 putaran
```

---

# Bagian 3 — titik koma yang wajib

```javascript
do {
    // badan
} while (kondisi);      // <- titik koma di sini
```

Ini satu-satunya loop yang butuh titik koma setelah `while (kondisi)`.

Kalau lupa:

```
SyntaxError: Unexpected token ...
```

Alasannya: `while` di sini bukan statement baru, tapi **ekor** dari `do`. Tanpa titik koma, JavaScript tidak tahu kalimatnya sudah selesai.

Kalau bingung mengingat, baca begini: *"lakukan ini, selama itu"* — satu kalimat, jadi butuh titik.

---

# Bagian 4 — tabel pemeriksaan untuk `do...while`

Bentuknya beda dari `while`. Baris **pertama selalu `ya`**, karena kondisi belum diperiksa.

```javascript
let i = 1;
let total = 0;

do {
    total += i;
    i++;
} while (i <= 3);
```

| periksa | `i` sebelum badan | jalan?                   | `total` setelah |
|---------|-------------------|--------------------------|-----------------|
| —       | 1                 | **ya** (tanpa diperiksa) | `0 + 1 = 1`     |
| 1       | 2                 | `2 <= 3` ya              | `1 + 2 = 3`     |
| 2       | 3                 | `3 <= 3` ya              | `3 + 3 = 6`     |
| 3       | 4                 | `4 <= 3` tidak           | berhenti        |

3 putaran. `total` = `6`.

Perhatikan: jumlah baris `ya` = 3, jumlah penjumlahan = 3. Aturan lama tetap berlaku.

## Contoh yang berhenti karena kondisi salah sejak awal

```javascript
let i = 10;
let hitung = 0;

do {
    hitung++;
    i++;
} while (i < 5);
```

| periksa | `i` sebelum badan | jalan?                   | `hitung` setelah |
|---------|-------------------|--------------------------|------------------|
| —       | 10                | **ya** (tanpa diperiksa) | 1                |
| 1       | 11                | `11 < 5` tidak           | berhenti         |

1 putaran. `hitung` = `1`.

Baris pertama tetap jalan walaupun `10 < 5` sudah salah. Itu inti `do...while`.

---

# Bagian 5 — `break` dan `continue` di `do...while`

Keduanya bekerja sama seperti di `while`.

## `break` keluar seketika

```javascript
let i = 1;
let total = 0;

do {
    if (i === 3) break;
    total += i;
    i++;
} while (i <= 5);
```

| periksa | `i` | yang terjadi            | `total` |
|---------|-----|-------------------------|---------|
| —       | 1   | `1 === 3` tidak, tambah | 1       |
| 1       | 2   | `2 === 3` tidak, tambah | 3       |
| 2       | 3   | `3 === 3` ya → `break`  | 3       |

Hasil `3`. `break` dijalankan **sebelum** `total += i`, jadi `3` tidak ikut.

## `continue` melewati sisa badan

```javascript
let i = 0;
let total = 0;

do {
    i++;
    if (i % 2 === 0) continue;
    total += i;
} while (i < 6);
```

| `i` | genap?     | `total` |
|-----|------------|---------|
| 1   | tidak      | 1       |
| 2   | ya, lewati | 1       |
| 3   | tidak      | 4       |
| 4   | ya, lewati | 4       |
| 5   | tidak      | 9       |
| 6   | ya, lewati | 9       |

Hasil `9`. Perhatikan `i++` ditaruh **sebelum** `continue` — kalau ditaruh sesudah, `i` tidak pernah naik dan loop jadi tak berujung.

---

# Bagian 6 — bahaya: lupa perubahan

Sama seperti `while`.

```javascript
let i = 1;

do {
    console.log(i);
    // i++ LUPA
} while (i <= 5);
```

`i` tetap `1`, kondisi selalu `true`, loop tidak pernah berhenti. **Infinite loop.**

Aturannya sama: satu variabel harus muncul di kondisi **dan** berubah di badan.

---

# Bagian 7 — kapan `do...while` benar-benar dipakai

Bukan untuk menghitung 1 sampai 10. Untuk itu `for` lebih jelas.

`do...while` dipakai kalau pekerjaannya **harus terjadi minimal sekali**, dan pengecekan baru masuk akal setelahnya.

| Kasus                                   | Kenapa `do...while`                         |
|-----------------------------------------|---------------------------------------------|
| menu harus tampil dulu                  | dengan `while` bisa tidak muncul            |
| minta input sampai valid                | input pertama harus diminta, baru diperiksa |
| ambil data, lalu cek apakah perlu ulang | pengecekan butuh data dulu                  |
| lempar dadu sampai dapat 6              | harus lempar dulu, baru tahu hasilnya       |

Contoh menu:

```javascript
let pilihan;

do {
    // tampilkan menu
    // baca pilihan user
    pilihan = "keluar";
} while (pilihan !== "keluar");
```

Menu tampil sekali, lalu berhenti karena pilihannya `"keluar"`. Dengan `while`, `pilihan` masih `undefined` saat kondisi pertama diperiksa, dan menunya tidak akan pernah tampil.

---

# Bagian 8 — perbandingan lengkap tiga loop

|                          | `for`   | `while`      | `do...while` |
|--------------------------|---------|--------------|--------------|
| Kondisi diperiksa        | sebelum | sebelum      | **sesudah**  |
| Minimal jalan            | 0       | 0            | **1**        |
| Awal ditulis di          | kepala  | sebelum loop | sebelum loop |
| Perubahan ditulis di     | kepala  | dalam badan  | dalam badan  |
| Titik koma di akhir      | tidak   | tidak        | **ya**       |
| Jumlah putaran diketahui | cocok   | kurang cocok | kurang cocok |

## Cara memilih

| Pertanyaan                                  | Jawaban      |
|---------------------------------------------|--------------|
| Jumlah putaran sudah diketahui?             | `for`        |
| Harus jalan minimal sekali?                 | `do...while` |
| Menunggu kondisi berubah, jumlah tak tentu? | `while`      |

---

# Bagian 9 — kesalahan umum

| Kesalahan                                      | Akibat                  |
|------------------------------------------------|-------------------------|
| titik koma hilang setelah `while (kondisi)`    | `SyntaxError`           |
| `i++` tidak ditulis                            | infinite loop           |
| `continue` sebelum `i++`                       | infinite loop           |
| mengira `do...while` sama dengan `while`       | selisih satu putaran    |
| memakai `do...while` untuk hitungan yang jelas | kode lebih sulit dibaca |

Yang keempat paling berbahaya, karena hasilnya **hampir** benar — selisih satu, dan tidak ada error.

---

# Ringkas

| Istilah            | Arti                                                        |
|--------------------|-------------------------------------------------------------|
| do-while statement | loop yang badannya jalan sebelum kondisi diperiksa          |
| post-test loop     | nama lain untuk `do...while`, karena kondisi diuji di akhir |
| pre-test loop      | nama lain untuk `while` dan `for`                           |

Tiga hal yang harus diingat:

1. Badan jalan **dulu**, kondisi **kemudian**
2. Minimal **satu** putaran, apa pun kondisinya
3. Titik koma setelah `while (kondisi)` — wajib

Sudah? Lanjut ke gerbang EASY.
