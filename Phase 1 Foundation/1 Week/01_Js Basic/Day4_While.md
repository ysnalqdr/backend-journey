# Day 4 — `while` dan `do...while`

Lanjutan Day 4. `for` sudah tuntas; sekarang `while`, lalu `do...while`, lalu nested.

Bahan bacaan. Sumber: javascript.info/while-for, MDN Loops and iteration.

Baca sampai habis sebelum soal. Jangan melompat ke gerbang.

---

# Bagian 1 — kenapa `while` ada

`for` butuh tiga hal yang kamu tulis di kepalanya: **awal**, **kondisi**, **perubahan**.

Itu cocok kalau jumlah putaran sudah diketahui. "Hitung 1 sampai 10" — kamu tahu ada 10.

Tapi ada pekerjaan yang jumlah putarannya **tidak diketahui**:

- mengulang sampai user memasukkan angka yang benar
- menunggu stok berkurang sampai habis
- membaca data sampai ketemu yang dicari

Untuk kasus itu `for` tidak pas. Kamu tidak bisa menulis "10 putaran" kalau kamu belum tahu ada berapa.

`while` jawabannya.

---

# Bagian 2 — bentuk `while`

`while` dibaca **"selama"**. Nama lengkapnya **while statement**.

```javascript
while (kondisi) {
    // badan loop
}
```

Hanya ada **satu** bagian di kepala: kondisi. Tidak ada awal, tidak ada perubahan.

Keduanya kamu tulis sendiri:

```javascript
let i = 1;              // awal — DI LUAR loop

while (i <= 5) {        // kondisi
    total += i;
    i++;                // perubahan — DI DALAM badan
}
```

## Tiga bagian `for` pindah ke mana

| Bagian    | Di `for`              | Di `while`              |
|-----------|-----------------------|-------------------------|
| awal      | `let i = 1` di kepala | **sebelum** loop        |
| kondisi   | `i <= 5` di kepala    | di dalam kurung `while` |
| perubahan | `i++` di kepala       | **di akhir badan**      |

Kalau salah tempat, hasilnya berbeda. Ini sumber bug paling umum di `while`.

---

# Bagian 3 — cara menghitung putaran (metode baru)

Ini bagian terpenting di halaman ini.

Kamu sudah tiga kali salah di sini: menulis "2 putaran" lalu menjumlahkan 3 kali. Penyebabnya: kamu **menghitung putaran dan menjumlahkan nilai sebagai dua pekerjaan terpisah**. Dua pekerjaan berarti bisa tidak cocok.

Metodenya kuganti. Jangan hitung putaran secara terpisah. **Buat tabel pemeriksaan.**

## Bentuk tabelnya

Empat kolom, satu baris per pemeriksaan kondisi:

| periksa | nilai `i` | kondisi            | jalan? |
|---------|-----------|--------------------|--------|
| 1       | 1         | `1 <= 5` ya        | **ya** |
| 2       | 2         | `2 <= 5` ya        | **ya** |
| 3       | 3         | `3 <= 5` ya        | **ya** |
| 4       | 4         | `4 <= 5` ya        | **ya** |
| 5       | 5         | `5 <= 5` ya        | **ya** |
| 6       | 6         | `6 <= 5` **tidak** | tidak  |

Baris yang **jalan?** = `ya` itulah putaran. Hitung baris itu saja.

Di atas: 5 baris `ya` → 5 putaran.

## Kenapa ini menyelesaikan masalahmu

Karena **jumlah baris tabel = jumlah putaran**, tanpa kamu hitung lagi. Baris pertama yang `tidak` adalah akhirnya. Tidak ada kesempatan untuk menulis 2 putaran lalu menjumlahkan 3 kali — tabelnya sudah menunjukkannya.

## Lanjutkan ke penjumlahan

Setelah tabel jadi, jumlahkan nilai `i` **hanya dari baris yang `ya`**, dengan jumlah baris sama persis.

| periksa | `i` | jalan? | `total` setelah |
|---------|-----|--------|-----------------|
| 1       | 1   | ya     | `0 + 1 = 1`     |
| 2       | 2   | ya     | `1 + 2 = 3`     |
| 3       | 3   | ya     | `3 + 3 = 6`     |
| 4       | 4   | ya     | `6 + 4 = 10`    |
| 5       | 5   | ya     | `10 + 5 = 15`   |
| 6       | 6   | tidak  | berhenti        |

5 baris `ya`, 5 baris penjumlahan. Cocok. Hasil `15`.

## Contoh dengan langkah bukan 1

```javascript
let i = 10;
let hitung = 0;

while (i > 0) {
    hitung++;
    i -= 3;
}
```

| periksa | `i` | kondisi        | jalan? |
|---------|-----|----------------|--------|
| 1       | 10  | `10 > 0` ya    | ya     |
| 2       | 7   | `7 > 0` ya     | ya     |
| 3       | 4   | `4 > 0` ya     | ya     |
| 4       | 1   | `1 > 0` ya     | ya     |
| 5       | -2  | `-2 > 0` tidak | tidak  |

4 putaran. `hitung` = `4`.

Perhatikan: nilai `i` di baris **tidak** tetap ditulis. Itu yang membuktikan loop berhenti di sana.

## Contoh kondisi gagal sejak awal

```javascript
let i = 10;
let hitung = 0;

while (i < 5) {
    hitung++;
    i++;
}
```

| periksa | `i` | kondisi        | jalan? |
|---------|-----|----------------|--------|
| 1       | 10  | `10 < 5` tidak | tidak  |

1 baris, dan baris itu `tidak`. **0 putaran.** `hitung` = `0`.

`while` memeriksa kondisi **sebelum** menjalankan badan. Kalau sudah salah sejak awal, badan tidak pernah jalan.

---

# Bagian 4 — bahaya `while`: lupa perubahan

Ini kesalahan yang `for` tidak mungkin buat, tapi `while` sangat mudah.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    // i++ LUPA DITULIS
}
```

`i` tetap `1` selamanya. `1 <= 5` selalu `true`. Loop **tidak pernah berhenti**. Program menggantung, dan di terminal harus dihentikan paksa dengan `Ctrl + C`.

Namanya **infinite loop**.

| Penyebab                     | Gejala                                          |
|------------------------------|-------------------------------------------------|
| perubahan tidak ditulis      | program diam, tidak selesai                     |
| perubahan salah arah         | `i++` padahal kondisinya `i > 0`                |
| kondisi tidak pernah berubah | variabel lain yang diubah, bukan yang diperiksa |

**Aturan:** setiap `while` wajib punya satu variabel yang **muncul di kondisi** dan **berubah di badan**. Kalau tidak ada, itu infinite loop.

---

# Bagian 5 — kondisi boleh berupa apa saja

`while` mengubah kondisinya jadi boolean, sama seperti `if`.

```javascript
let i = 3;

while (i) {         // sama dengan while (i !== 0)
    console.log(i);
    i--;
}
```

Output: `3`, `2`, `1`. Berhenti saat `i` jadi `0`, karena `0` itu **falsy**.

**Hati-hati:** pola ini berbahaya kalau `0` adalah nilai yang sah. Kalau `i` mulai dari `0`, loop tidak jalan sama sekali.

---

# Bagian 6 — `do...while`

`do...while` dibaca **"lakukan, selama"**. Nama lengkapnya **do-while statement**.

```javascript
do {
    // badan loop
} while (kondisi);
```

Perhatikan dua hal:

1. Badan ditulis **dulu**, kondisi diperiksa **kemudian**
2. Ada **titik koma** setelah `while (kondisi)` — satu-satunya loop yang butuh itu

## Bedanya dengan `while`

|              | Kondisi diperiksa | Minimal jalan |
|--------------|-------------------|---------------|
| `while`      | **sebelum** badan | 0 kali        |
| `do...while` | **sesudah** badan | **1 kali**    |

Ini bukan perbedaan kecil. Kalau kondisinya salah sejak awal:

```javascript
let i = 10;

while (i < 5) {
    console.log("while jalan");
}
// tidak mencetak apa pun — 0 putaran
```

```javascript
let i = 10;

do {
    console.log("do jalan");
} while (i < 5);
// mencetak "do jalan" SEKALI — 1 putaran
```

## Kapan `do...while` dipakai

Kalau pekerjaannya **harus dilakukan minimal sekali**, baru kemudian diperiksa apakah perlu diulang.

Contoh nyata: menu yang harus tampil dulu, baru ditanya "mau ulang?"

```javascript
let pilihan;

do {
    // tampilkan menu, baca pilihan
    pilihan = "keluar";
} while (pilihan !== "keluar");
```

Menu tampil sekali, lalu berhenti karena pilihannya `"keluar"`. Kalau pakai `while`, menu tidak akan pernah tampil.

## Tabel pemeriksaan untuk `do...while`

Bentuknya beda: **baris pertama selalu `ya`**, karena kondisi belum diperiksa.

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

---

# Bagian 7 — perbandingan tiga loop

|                          | `for`  | `while`      | `do...while` |
|--------------------------|--------|--------------|--------------|
| Jumlah putaran diketahui | ya     | tidak        | tidak        |
| Awal ditulis di          | kepala | sebelum loop | sebelum loop |
| Perubahan ditulis di     | kepala | dalam badan  | dalam badan  |
| Minimal jalan            | 0      | 0            | **1**        |
| Butuh titik koma         | tidak  | tidak        | **ya**       |

## Cara memilih

| Pertanyaan                      | Jawab        |
|---------------------------------|--------------|
| Jumlah putaran sudah diketahui? | `for`        |
| Harus jalan minimal sekali?     | `do...while` |
| Selain itu                      | `while`      |

---

# Bagian 8 — kesalahan umum

| Kesalahan                          | Akibat                         |
|------------------------------------|--------------------------------|
| `i++` tidak ditulis                | infinite loop                  |
| `i++` ditulis sebelum `total += i` | nilai pertama terlewat         |
| kondisi salah arah                 | 0 putaran                      |
| titik koma hilang di `do...while`  | `SyntaxError`                  |
| menghitung putaran tanpa tabel     | jumlah penjumlahan tidak cocok |

Yang terakhir itu punyamu. Tabel di Bagian 3 dibuat untuk itu.

---

# Ringkas

| Istilah            | Arti                                            |
|--------------------|-------------------------------------------------|
| while statement    | loop dengan satu kondisi di kepala              |
| do-while statement | loop yang badannya jalan dulu                   |
| infinite loop      | loop yang tidak pernah berhenti                 |
| falsy              | nilai yang dianggap `false` (`0`, `""`, `null`) |

Sudah? Lanjut ke gerbang EASY.
