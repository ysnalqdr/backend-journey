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

Dikerjakan 2026-11-28 lewat sembilan kotak kecil. Semua isi di bawah adalah jawaban learner.

```
1. Masuk  : stok awal (angka), dan permintaan tiap hari (deretan angka)
2. Keluar : dua angka — total terlayani, dan total gagal

3. Langkah:
   a. siapkan stok = stokAwal, terlayani = 0, gagal = 0
   b. untuk setiap hari: bandingkan permintaan hari itu dengan stok
   c. kalau permintaan <= stok:
        terlayani += permintaan
        stok -= permintaan
   d. kalau permintaan > stok:
        terlayani += stok
        gagal += permintaan - stok
        stok = 0
   e. setelah semua hari selesai: kembalikan terlayani dan gagal
      (stok TIDAK dikembalikan — soal tidak memintanya)

4. Kasus:
   - stok 0 sejak awal  -> semua permintaan masuk gagal, terlayani tetap 0,
                           program tidak error
   - permintaan 0       -> terlayani dan gagal tidak bertambah, stok tetap
                           (tidak perlu if khusus: 0 > stok itu false)
   - permintaan negatif -> stok MALAH BERTAMBAH (stok - (-5) = stok + 5),
                           harus ditolak
```

## Catatan proses

Learner awalnya menjawab dalam satu paragraf panjang, bukan urutan bernomor. Setelah
dipecah jadi sembilan kotak kecil dengan angka nyata (stok 10, permintaan 3, lalu stok 7,
permintaan 8), semua kotak dijawab benar kecuali satu:

| Kotak | Salah                | Koreksi                            |
|-------|----------------------|------------------------------------|
| 3d    | "gagal mulai dari 8" | `gagal += permintaan - stok` = `1` |

Pelajaran untuk assistant: soal rencana yang terlalu besar membuat learner bingung
bukan karena tidak paham, tapi karena keputusannya terlalu banyak sekaligus. Pecah
jadi kotak bernomor dengan angka nyata.

---

# Soal 3

## Masalah

Sebuah sistem login menerima email dan password. Password yang tersimpan sudah di-hash.
Tentukan apakah user boleh masuk. Setelah tiga kali salah, akun dikunci.

## Rencana

Dikerjakan 2026-11-28 lewat kotak bernomor. Semua isi di bawah adalah jawaban learner.

```
1. Masuk  : email (teks), password mentah (teks),
             dan data user tersimpan: password hash, jumlah salah, status terkunci

2. Keluar : boolean — boleh masuk atau tidak

3. Langkah:
   a. cari user berdasarkan email
   b. kalau user tidak ditemukan: tolak dengan pesan "Email atau password salah"
   c. periksa apakah akun terkunci; kalau ya, tolak
   d. hash password yang diketik, bandingkan dengan hash tersimpan
   e. kalau cocok: izinkan masuk, dan set jumlah salah = 0
   f. kalau tidak cocok: tolak dengan pesan "Email atau password salah",
      jumlah salah += 1, lalu kalau jumlah salah >= 3 -> kunci akun

4. Kasus:
   - email tidak terdaftar  -> tolak, pesan SAMA dengan password salah
                               ("Email atau password salah"), jangan bilang
                               "email tidak terdaftar"
   - akun terkunci          -> tolak walaupun password benar
   - password kosong        -> tolak
   - user sudah login       -> tidak perlu cek password lagi
```

## Catatan proses

Urutan pemeriksaan adalah bagian tersulit. Learner awalnya menaruh "periksa terkunci"
**setelah** pemeriksaan password. Alasannya keliru: kalau akun terkunci, password
tidak perlu diperiksa sama sekali, dan penghitung salah tidak boleh bertambah.

Learner juga awalnya menjawab bahwa sistem **boleh memberi tahu** "email tidak
terdaftar". Itu lubang keamanan bernama **username enumeration**: penyerang bisa
memetakan email mana yang punya akun tanpa menebak satu password pun. Setelah
dijelaskan, learner menjawab benar: satu pesan yang sama untuk kedua kasus.

**Ide learner yang bagus tapi di luar cakupan:** kunci sebaiknya **sementara** dan
terbuka sendiri setelah waktunya habis. Itu desain lebih baik, tapi butuh `Date`
(materi minggu 6). Dicatat sebagai pengembangan, bukan bagian rencana ini.

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
   e. LANJUT sampai semua hari selesai (jangan berhenti saat stok 0)
4. Kasus  :
   - stok 0 sejak awal -> semua permintaan gagal, tidak error
   - permintaan 0 -> tidak mengubah apa pun
   - permintaan negatif -> perlu ditolak
```

Yang diuji: apakah kamu sadar harus ada dua penghitung, bukan satu.

**Cacat kunci ditemukan 2026-11-28.** Kunci semula menulis "berhenti kalau stok 0".
Itu salah: kalau berhenti, `totalGagal` tidak menghitung permintaan di hari-hari
berikutnya. Contoh: stok 10, permintaan 5, 8, 6, 4 -> gagal seharusnya 3+6+4 = 13,
tapi dengan `break` hanya tercatat 3.

Learner 2026-11-28 menjawab "lanjut", dan itu benar. Kunci sudah diperbaiki.

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
