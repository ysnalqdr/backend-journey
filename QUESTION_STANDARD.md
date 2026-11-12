# Question Standard

Setiap pertanyaan yang diajukan ke learner harus lolos standar ini. Berlaku di gate
harian, re-check, dan Working Skills.

Dasarnya riset, bukan selera. Sumber ada di bagian akhir.

---

## Kenapa pertanyaan diatur

Pertanyaan menentukan apa yang benar-benar dipelajari. Tiga temuan yang jadi dasar:

**Mengingat sendiri lebih kuat daripada membaca ulang.** Bjork menyebutnya retrieval
practice. Kalau jawaban sudah terlihat di pertanyaan, tidak ada yang diingat.

**Salah dulu justru bagus.** Metcalfe menemukan orang yang mencoba menjawab lalu salah
mengingat koreksinya lebih kuat daripada yang langsung diberi jawaban benar. Efeknya
disebut hypercorrection, dan paling kuat kalau kesalahannya diyakini.

**Soal sebelum materi mengalahkan materi sebelum soal.** Meta-analisis Kapur atas 53
studi menemukan urutan soal dulu lalu dijelaskan hasilnya lebih baik. Di satu mata
kuliah ETH, tingkat kelulusan naik 20 persen.

Ketiganya menunjuk arah yang sama: pertanyaan harus memaksa mengingat, membiarkan salah,
dan datang sebelum penjelasan.

---

## Tiga larangan

Pertanyaan tidak boleh memuat jawabannya. Tiga bentuk yang dilarang.

### a. Bocor negatif

Menyebut nilai yang salah memberitahu bahwa jawabannya bukan itu.

```
Salah:  a isinya apa? Kenapa bukan 100?
Benar:  a isinya apa, dan dari mana nilainya diambil?
```

### b. Bocor perbandingan

Mengatakan ada perbedaan atau perubahan adalah setengah jawaban.

```
Salah:  c isinya apa? Kenapa beda dengan a?
Benar:  Sebutkan isi a dan c.
```

### c. Bocor ya/tidak

Pada titik yang sedang diuji, tebakan dapat lima puluh persen.

```
Salah:  Apakah kode ini error?
Benar:  Apa yang terjadi saat kode ini dijalankan?
```

---

## Batasnya

Nilai input boleh disebut, hasil yang diuji tidak.

| Boleh                                   | Tidak boleh            |
|-----------------------------------------|------------------------|
| `batas` bernilai 0                      | jadi hasilnya 0        |
| `??` hanya mengganti null dan undefined | karena itu `a` tetap 0 |
| `user.alamat` bernilai null             | `&&` berhenti di situ  |

Bagian `## Yang sudah diketahui` hanya berisi nilai, tipe, dan definisi. Tidak boleh
berisi kesimpulan.

---

## Satu pertanyaan satu langkah

Satu nomor menguji satu hal. Kalau satu nomor menanyakan tiga hal sekaligus, yang
terukur jadi kabur dan learner tidak tahu mana yang meleset.

Boleh tiga nomor berurutan yang menaik. Tidak boleh satu nomor bercabang tiga.

---

## Tangga lima tingkat

Setiap konsep diuji menaik, bukan diulang di tingkat yang sama.

| Tangga | Bentuk soal     | Yang dilatih             |
|--------|-----------------|--------------------------|
| 1      | Prediksi hasil  | berani mengambil posisi  |
| 2      | Telusuri alasan | penalaran mekanisme      |
| 3      | Cari yang salah | diagnosis miskonsepsi    |
| 4      | Ubah konteks    | transfer ke situasi baru |
| 5      | Tulis dari nol  | produksi tanpa contoh    |

Padanannya dengan empat level gerbang yang sudah dipakai:

| Tangga  | Level gerbang |
|---------|---------------|
| 1 dan 2 | EASY          |
| 3       | MEDIUM        |
| 4       | HARD          |
| 5       | WRITE         |

Tangga 4 wajib mengubah konteks, bukan mengubah angka. `stok` dari 5 jadi 10 masih
tangga 1. `stok` dari angka jadi teks dari database itu tangga 4.

---

## Lapisan kritis

Untuk tangga 3 dan 4, tempel satu dari empat pertanyaan ini. Pilih yang paling masuk
akal untuk kodenya, jangan pakai semuanya.

| Pertanyaan                                      | Yang digali              |
|-------------------------------------------------|--------------------------|
| Asumsi developer di sini apa?                   | dasar yang tidak ditulis |
| Dari sudut pandang siapa kode ini benar?        | batas keberlakuan        |
| Apa akibatnya kalau data dari database berbeda? | implikasi                |
| Bukti apa yang akan membatalkan jawabanmu?      | daya uji                 |

Keempatnya tidak bisa dihafal, karena jawabannya tergantung kode yang sedang dibaca.

---

## Koreksi setelah menjawab

Salah yang dijawab dengan yakin harus dikoreksi di tempat, segera, dan eksplisit.

Yang dilarang: menunda koreksi, melunakkan dengan "hampir benar", atau membiarkan
kesalahan lewat supaya learner merasa enak. Hypercorrection bekerja justru karena
koreksinya tegas dan dekat dengan kesalahannya.

Yang wajib ada dalam koreksi: apa yang salah, kenapa salah, dan apa yang benar.

---

## Cek sebelum kirim

Baca ulang bagian `## Yang ditanyakan` dan periksa enam hal.

1. Ada kata "bukan", "tidak", "beda", atau "berubah" yang menunjuk hal yang diuji?
2. Ada pertanyaan yang bisa dijawab ya atau tidak?
3. Ada nomor yang menanyakan lebih dari satu hal?
4. Bagian `## Yang sudah diketahui` berisi kesimpulan, bukan fakta?
5. Tingkatnya naik dari soal sebelumnya, atau mengulang tingkat yang sama?
6. Untuk tangga 3 dan 4, ada satu pertanyaan kritis?

Kalau ada satu saja yang gagal, pertanyaan ditulis ulang sebelum dikirim, bukan setelah
learner menjawab.

Pertanyaan yang terlanjur dikirim dalam keadaan bocor dicabut, ditandai VOID di Gate Log,
dan dicatat sebagai kesalahan pengajar.

---

## Sumber

| Sumber                               | Yang diambil                                              |
|--------------------------------------|-----------------------------------------------------------|
| Bjork Lab, UCLA                      | retrieval practice, desirable difficulties                |
| Metcalfe, errorful generation        | salah dulu memperkuat ingatan, hypercorrection            |
| Kapur, ETH Zurich                    | soal sebelum materi, meta-analisis 53 studi               |
| Chi, self-explanation                | pertanyaan "kenapa" menaikkan pemahaman                   |
| Paul dan Elder, Socratic Questioning | asumsi, sudut pandang, implikasi, bukti                   |
| Sentance dkk, PRIMM                  | prediksi, telusuri, ubah, cipta                           |
| Lister dkk                           | butuh sekitar 50% akurasi tracing sebelum menulis mandiri |
| Bloom, lewat Illinois CITL           | hindari pertanyaan ya atau tidak, minta jawaban panjang   |
| Biggs, SOLO                          | relational lebih tinggi daripada daftar fakta             |
| Concept inventory, Hestenes          | distractor untuk mendiagnosis, bukan untuk dibocorkan     |
