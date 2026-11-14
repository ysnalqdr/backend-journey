# BUG_TAXONOMY.md

Enam jenis bug yang sudah muncul di latihan sendiri. Setiap kali membaca kode orang, periksa
keenamnya. Orang tidak bisa menemukan jenis bug yang tidak punya nama untuknya.

Sumber: Gate Log dan `KESALAHAN.md`, 2026-11-12 sampai 2026-11-14.

---

## Cara pakai

Sebelum menyimpulkan "kode ini benar", jalankan enam pertanyaan ini. Bukan untuk mencari
kesalahan, tapi untuk memastikan tidak ada yang terlewat.

| #   | Pertanyaan                                               | Yang dicari           |
|-----|----------------------------------------------------------|-----------------------|
| 1   | Apakah batas loop tepat?                                 | off-by-one            |
| 2   | Apakah ada variabel yang dideklarasikan ulang?           | shadowing             |
| 3   | Apakah penampung di-reset di dalam loop?                 | reset                 |
| 4   | Apakah guard ditaruh sebelum yang dijaga?                | guard salah posisi    |
| 5   | Apakah indeks bisa melewati panjang array?               | batas tidak diperiksa |
| 6   | Apakah yang ditambahkan benar-benar nilai yang dimaksud? | nilai salah           |

---

## 1. Off-by-one

Batas loop salah satu angka. Loop jalan satu kali lebih atau kurang.

```javascript
// salah: 6 putaran, padahal pelanggan cuma 5
for (let i = 0; i <= jumlahPelanggan; i++) { }

// benar
for (let i = 0; i < jumlahPelanggan; i++) { }
```

**Kapan muncul:** saat memakai `<=` padahal mulai dari `0`, atau `<` padahal mulai dari `1`.

**Cara memeriksa:** tulis deret `i` sampai satu angka yang gagal. Hitung berapa yang lolos.

**Bukti:** Gate Log #69, `terkirim` jadi `6` padahal seharusnya `5`.

---

## 2. Shadowing

Variabel dideklarasikan ulang di blok yang lebih dalam. Yang luar tidak tersentuh.

```javascript
let total = 0;

for (let i = 1; i <= 3; i++) {
    let total = i * 10;   // variabel BARU, bukan yang luar
}

console.log(total);       // 0, bukan 30
```

**Kapan muncul:** saat menyalin baris deklarasi ke dalam loop.

**Cara memeriksa:** cari `let` atau `const` di dalam loop untuk nama yang sudah ada di luar.

**Bukti:** Gate Log #70, `totalJam` tetap `0`.

---

## 3. Reset di dalam loop

Penampung diisi ulang setiap putaran, jadi tidak pernah menumpuk.

```javascript
let total = 0;

for (let i = 1; i <= 3; i++) {
    total = 0;            // menghapus hasil putaran sebelumnya
    total += i;
}
```

**Kapan muncul:** saat baris inisialisasi ikut tersalin ke dalam loop.

**Cara memeriksa:** apakah variabel penampung muncul di kiri `=` lebih dari sekali di dalam loop?

**Bukti:** `totalHarga` tetap `25000` padahal seharusnya `75000`.

---

## 4. Guard salah posisi

Pemeriksaan keamanan ditaruh **setelah** hal yang seharusnya dijaga.

```javascript
// salah: .nama dibaca sebelum user diperiksa
if (user.nama.length > 0 && user) { }

// benar
if (user && user.nama && user.nama.length > 0) { }
```

**Kapan muncul:** saat menambah guard di akhir tanpa memindahkan yang sudah ada.

**Cara memeriksa:** untuk setiap `&&`, apakah sisi kirinya menjamin sisi kanan aman?

**Bukti:** Gate Log #34, #35.

---

## 5. Batas tidak diperiksa

Indeks melewati panjang array. Hasilnya `undefined`, bukan error — jadi diam-diam salah.

```javascript
const buah = ["apel", "jeruk", "mangga"];

for (let i = 0; i <= buah.length; i++) {
    console.log(buah[i]);   // putaran terakhir mencetak undefined
}
```

**Kapan muncul:** setiap kali `<=` dipakai dengan `.length`.

**Cara memeriksa:** `.length` selalu dipasangkan dengan `<`, tidak pernah `<=`.

**Bukti:** soal M1 di `12_For.js`.

---

## 6. Nilai salah ditambahkan

Yang ditambahkan bukan nilai yang dimaksud.

```javascript
// salah: menambahkan 1 dan 2 bergantian
total += 1;

// benar: menambahkan nilai i
total += i;
```

**Kapan muncul:** saat menghitung di kepala tanpa menulis trace.

**Cara memeriksa:** lihat huruf setelah `+=`. Itu yang ditambahkan.

**Bukti:** Gate Log #78, S9 dijawab `9` padahal `37`.

---

## Yang sering terlewat karena tidak punya nama

| Bug                   | Kenapa sulit dilihat                     |
|-----------------------|------------------------------------------|
| off-by-one            | kelihatan benar, cuma satu karakter beda |
| shadowing             | nama sama, jadi terasa sudah benar       |
| reset di dalam loop   | barisnya wajar, cuma posisinya salah     |
| guard salah posisi    | dua-duanya ada, cuma urutannya terbalik  |
| batas tidak diperiksa | tidak error, hanya `undefined`           |
| nilai salah           | hasilnya angka, jadi terasa masuk akal   |

Keenamnya **tidak melempar error**. Itu sebabnya orang lain tidak melihatnya.

---

## Hubungan dengan file lain

| File                    | Isi                                                      |
|-------------------------|----------------------------------------------------------|
| `KESALAHAN.md`          | kesalahan **berpikir** (CONCEPT, READING, SYNTAX, LOGIC) |
| `BUG_TAXONOMY.md`       | kesalahan **kode** (enam jenis di atas)                  |
| `Working Skills/Debug/` | latihan menerapkan keenamnya                             |
| `Catatan.md` Bug log    | bug nyata yang ditemukan sendiri                         |
