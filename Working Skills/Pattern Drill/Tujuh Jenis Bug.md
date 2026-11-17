# Tujuh Jenis Bug — Cara Mengenalinya

Materi untuk pattern drill. Dibaca sekali, lalu dipakai setiap kali membaca kode.

Nama Inggrisnya penting, karena itu yang dipakai di review kode dan di pesan error.

---

## Cara pakai

Jangan dihafal. Yang dihafal cuma **cirinya** — satu tanda yang bisa dilihat dalam 3 detik.

| #   | Nama                        | Ciri dalam 3 detik                                |
|-----|-----------------------------|---------------------------------------------------|
| 1   | off-by-one                  | hitungan putaran meleset satu                     |
| 2   | shadowing                   | ada `let` di dalam loop untuk nama yang sudah ada |
| 3   | reset di dalam loop         | penampung diisi ulang tiap putaran                |
| 4   | guard salah posisi          | sisi kiri `&&` membaca yang mungkin kosong        |
| 5   | batas tidak diperiksa       | `.length` dipasangkan `<=`, atau indeks lewat     |
| 6   | nilai salah ditambahkan     | yang ditambahkan bukan nilai yang dimaksud        |
| 7   | nilai dihitung lalu dibuang | nama variabel hanya muncul sekali                 |

---

# 1. Off-by-one

**Nama:** off-by-one error. Artinya "meleset satu".

Hitungan putaran salah satu angka. Bisa lebih satu, bisa kurang satu. Tidak menyentuh array.

```javascript
const panjang = 5;
const arr = [];

for (let i = 1; i < panjang; i++) {
    arr.push(i);
}
```

Hasilnya `[1, 2, 3, 4]`. Angka `5` tidak pernah masuk, karena `5 < 5` itu `false`.

**Ciri:** tidak ada array yang diindeks. Yang salah cuma jumlah putaran.

**Kenapa berbahaya:** tidak error. Kode jalan, hasilnya masuk akal, cuma kurang satu.

**Dari mana asalnya:** `<` vs `<=`, atau mulai dari `0` vs `1`.

---

# 2. Shadowing

**Nama:** variable shadowing. Artinya "variabel tertutup bayangan".

Variabel dideklarasikan ulang di blok yang lebih dalam. Yang luar tidak tersentuh, dan tidak ada error.

```javascript
let total = 0;

for (let i = 1; i <= 3; i++) {
    let total = i * 10;    // variabel BARU, bukan yang luar
}

console.log(total);        // 0, bukan 30
```

**Ciri:** ada `let` atau `const` di dalam blok, untuk nama yang sudah ada di luar.

**Kenapa berbahaya:** namanya sama, jadi terasa sudah benar. Yang luar tetap `0` selamanya.

**Dari mana asalnya:** menyalin baris deklarasi ke dalam loop.

---

# 3. Reset di dalam loop

**Nama:** reset inside loop. Tidak ada nama khusus di literatur, tapi polanya jelas.

Penampung diisi ulang setiap putaran, jadi tidak pernah menumpuk.

```javascript
let total = 0;

for (let i = 1; i <= 3; i++) {
    total = 0;             // menghapus hasil putaran sebelumnya
    total += i;
}
```

Hasilnya `3`, bukan `6`. Setiap putaran mulai dari nol lagi.

**Ciri:** variabel penampung muncul di **kiri** `=` lebih dari sekali, dan salah satunya di dalam loop.

**Bedanya dengan shadowing:** shadowing membuat variabel **baru**. Reset mengisi ulang variabel **yang sama**. Hasil akhirnya mirip, penyebabnya beda.

**Dari mana asalnya:** baris inisialisasi ikut tersalin ke dalam loop.

---

# 4. Guard salah posisi

**Nama:** guard clause in wrong order. Atau *unsafe short-circuit*.

Pemeriksaan keamanan ditaruh **setelah** hal yang seharusnya dijaga.

```javascript
if (user.nama.length > 0 && user) {
    console.log("ada");
}
```

Kalau `user` itu `null`, `user.nama` sudah error **sebelum** `&& user` sempat diperiksa.

**Ciri:** di dalam `&&`, sisi kiri membaca properti dari sesuatu yang mungkin kosong.

**Cara memeriksa:** untuk setiap `&&`, tanyakan — apakah sisi kiri **menjamin** sisi kanan aman?

```javascript
if (user && user.nama && user.nama.length > 0) { }   // benar
```

**Kenapa berbahaya:** error-nya `TypeError: Cannot read properties of null`. Muncul hanya kalau datanya kosong — jadi di komputer developer yang datanya lengkap, tidak pernah terlihat.

---

# 5. Batas tidak diperiksa

**Nama:** unchecked array bound. Atau *index out of range*.

Indeks melewati panjang array. Hasilnya `undefined`, bukan error.

```javascript
const data = [1, 2, 3];
let jumlah = 0;

for (let i = 0; i <= data.length; i++) {
    jumlah += data[i];
}
```

Putaran terakhir: `data[3]` itu `undefined`. `0 + undefined` hasilnya `NaN`.

**Ciri:** `.length` dipasangkan dengan `<=`. Atau indeks yang bisa melebihi panjang.

**Bedanya dengan off-by-one:** off-by-one soal **jumlah putaran**. Ini soal **indeks melewati array** — dan akibatnya `undefined`, bukan cuma kurang satu.

**Aturan:** `.length` selalu dipasangkan `<`, tidak pernah `<=`.

---

# 6. Nilai salah ditambahkan

**Nama:** wrong value accumulated. Tidak ada nama baku, tapi ini pola paling sering di latihan.

Yang ditambahkan bukan nilai yang dimaksud.

```javascript
const harga = 250000;
const jumlah = 2;
let total = 0;

for (let i = 1; i <= jumlah; i++) {
    total += 1;              // seharusnya total += harga
}
```

Hasilnya `2`, bukan `500000`.

**Ciri:** lihat huruf setelah `+=`. Apakah itu nilai yang dimaksud?

**Variasinya:** `total += i` padahal harusnya `total += daftar[i]`. Ini yang kamu alami saat re-check `+=` — `i` itu **posisi**, bukan **isi**.

**Cara memeriksa:** baca bagian kanan `+=` dengan suara keras. "Tambahkan satu" vs "tambahkan harga".

---

# 7. Nilai dihitung lalu dibuang

**Nama:** dead store. Atau *unused variable*.

Hasil perhitungan tidak pernah dibaca siapa pun. Kodenya terlihat bekerja, padahal sia-sia.

```javascript
const valid = jumlah > 0;
const subtotal = harga * jumlah;
console.log(subtotal);
```

`valid` dihitung, tapi tidak dipakai di mana pun. Kalau `jumlah` itu `0`, kode tetap jalan dan mencetak `0`, tanpa memberi tahu bahwa datanya tidak sah.

**Ciri:** cari nama variabel itu **sekali lagi** di seluruh file. Kalau hanya muncul di baris pembuatannya, dia tidak berguna.

**Kenapa berbahaya:** barisnya panjang, ada `!`, ada `&&` — terasa penting. Padahal hasilnya dibuang. Mata melewatinya.

**Ini bug yang paling tidak kelihatan**, dan yang kamu lewatkan di Reading 01.

---

# Tabel pembeda — yang sering tertukar

| Kalau melihat                              | Jenis                   |
|--------------------------------------------|-------------------------|
| `let` di dalam loop, nama sama dengan luar | 2 shadowing             |
| `= 0` di dalam loop untuk penampung        | 3 reset                 |
| `<=` dipasangkan `.length`                 | 5 batas tidak diperiksa |
| hitungan meleset satu, tanpa array         | 1 off-by-one            |
| `&&` dengan properti di kiri               | 4 guard salah posisi    |
| `+=` dengan nilai yang aneh                | 6 nilai salah           |
| variabel muncul sekali saja                | 7 nilai dibuang         |

---

# Kenapa nama itu penting

Kamu tidak bisa mencari pola yang tidak punya nama.

Kalau kamu hanya merasa "ada yang aneh", kamu akan membaca ulang kode itu berkali-kali dan tetap tidak menemukan. Tapi kalau kamu punya daftar tujuh pertanyaan:

1. Batas loop tepat?
2. Ada deklarasi ulang?
3. Penampung direset?
4. Guard di posisi benar?
5. Indeks bisa lewat?
6. Yang ditambahkan benar?
7. Ada nilai dibuang?

— maka kamu punya **prosedur**, bukan perasaan.

Itu yang membedakan orang yang "hati-hatinya bagus" dari orang yang **sistematis**.

---

# Ringkas

| #   | Nama Inggris            | Ciri                  |
|-----|-------------------------|-----------------------|
| 1   | off-by-one              | meleset satu          |
| 2   | shadowing               | `let` ganda           |
| 3   | reset in loop           | penampung diisi ulang |
| 4   | unsafe short-circuit    | `&&` terbalik         |
| 5   | unchecked bound         | `<=` + `.length`      |
| 6   | wrong value accumulated | `+=` salah nilai      |
| 7   | dead store              | variabel sekali pakai |
