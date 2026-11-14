# LATIHAN_MEMECAH_MASALAH.md

Latihan yang tidak ada di gerbang harian: diberi **masalah dalam bahasa manusia**, tanpa kode.
Tugasmu menulis rencana, bukan kode.

Kenapa ini dilatih terpisah: semua soal gerbang sudah punya kode jadi. Kamu membaca, bukan
merancang. Itu keterampilan berbeda, dan yang kedua tidak pernah dilatih.

---

## Cara pakai

1. Baca masalahnya.
2. Tulis rencana dalam lima baris. Bukan kode.
3. Baru tulis kodenya, kalau mau.
4. Bandingkan dengan kunci.

Kalau rencanamu lima barisnya benar, kodenya biasanya mudah. Kalau rencananya kacau, kodenya
akan kacau walaupun sintaksnya benar.

---

## Format rencana

Selalu empat bagian, berurutan:

```
1. Masuk  : data apa yang diterima, tipenya apa
2. Keluar : apa yang harus dihasilkan, tipenya apa
3. Langkah: urutan kerja, satu baris satu langkah
4. Kasus  : input aneh apa yang harus tetap aman
```

Bagian 4 yang paling sering dilewatkan, dan yang paling sering jadi bug.

---

# Soal 1

## Masalah

Sebuah toko punya daftar harga barang. Setiap barang punya nama dan harga. Ada juga kode
diskon: kalau total belanja di atas 200.000, potong 10 persen. Hitung total yang harus dibayar.

## Rencana

```
1. Masuk  :
2. Keluar :
3. Langkah:
4. Kasus  :
```

---

# Soal 2

## Masalah

Sebuah gudang menyimpan stok tiket. Setiap hari ada permintaan yang berbeda-beda. Kalau stok
tidak cukup, permintaan hari itu hanya dilayani sebisanya, dan sisanya gagal. Hitung berapa
tiket yang berhasil dilayani dan berapa yang gagal.

## Rencana

```
1. Masuk  :
2. Keluar :
3. Langkah:
4. Kasus  :
```

---

# Soal 3

## Masalah

Sebuah sistem login menerima email dan password. Password yang tersimpan sudah di-hash.
Tentukan apakah user boleh masuk. Setelah tiga kali salah, akun dikunci.

## Rencana

```
1. Masuk  :
2. Keluar :
3. Langkah:
4. Kasus  :
```

---

# Kunci

Dibuka setelah menulis ketiga rencana.

## Soal 1

```
1. Masuk  : array of object {nama, harga}, angka total belanja
2. Keluar : number, total setelah diskon
3. Langkah:
   a. jumlahkan semua harga
   b. periksa apakah total > 200000
   c. kalau ya, kurangi 10 persen
   d. kembalikan hasil
4. Kasus  :
   - array kosong -> total 0, tidak error
   - harga negatif -> tidak masuk akal, perlu ditolak atau diabaikan
   - total tepat 200000 -> TIDAK dapat diskon, karena "di atas" bukan "sama dengan"
```

Yang diuji di kasus keempat: apakah kamu sadar `>` dan `>=` beda di batas.

## Soal 2

```
1. Masuk  : angka stok awal, array permintaan harian
2. Keluar : dua angka, total terlayani dan total gagal
3. Langkah:
   a. mulai dari stok awal
   b. untuk setiap hari: kalau permintaan <= stok, layani penuh
   c. kalau permintaan > stok, layani sebanyak stok, sisanya masuk gagal
   d. kurangi stok
   e. berhenti kalau stok 0
4. Kasus  :
   - stok 0 sejak awal -> semua permintaan gagal, tidak error
   - permintaan 0 -> tidak mengubah apa pun
   - permintaan negatif -> perlu ditolak
```

Yang diuji: apakah kamu sadar harus ada dua penghitung, bukan satu.

## Soal 3

```
1. Masuk  : email, password mentah, data user tersimpan
2. Keluar : boolean, boleh masuk atau tidak
3. Langkah:
   a. cari user berdasarkan email
   b. kalau tidak ada, tolak
   c. bandingkan hash password dengan hash yang tersimpan
   d. kalau cocok, izinkan dan reset penghitung salah
   e. kalau tidak, tambah penghitung salah, kunci kalau sudah 3
4. Kasus  :
   - email tidak terdaftar -> tolak, tapi JANGAN beri tahu "email tidak ada"
     (itu memberi tahu penyerang email mana yang terdaftar)
   - password kosong -> tolak
   - akun terkunci -> tolak walaupun password benar
   - user sudah login -> tidak perlu cek password lagi
```

Yang diuji: apakah kamu memikirkan keamanan, bukan cuma "benar atau salah".

---

## Kenapa latihan ini berbeda dari gerbang

| Gerbang                   | Latihan ini                             |
|---------------------------|-----------------------------------------|
| kode sudah ada            | kode belum ada                          |
| menjawab "apa output"     | merancang "bagaimana caranya"           |
| ada jawaban benar tunggal | ada beberapa rencana yang bisa diterima |
| menguji pemahaman konsep  | menguji pemecahan masalah               |

Yang kedua itu yang ditanya di interview: "bagaimana kamu akan membangun ini?"
