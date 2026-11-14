# Cara Membaca Kode

Materi untuk blok Reading. Dibaca sekali, lalu dipakai setiap kali membaca kode orang.

Sumber ada di bagian akhir. Dasarnya riset, bukan selera.

---

## Kenapa membaca kode dilatih terpisah

Pendidikan programming hampir selalu berisi **membuat** kode. Akibatnya programmer lemah dalam
**membaca** kode, terutama kode orang lain. Dan kemampuan membaca tidak datang sebagai efek
samping — dia harus dilatih sengaja.

Buktinya ada. Studi 11 minggu pada 57 mahasiswa (Endres, Weimer dkk., FSE 2021) membandingkan
dua jenis latihan: membaca teknis vs latihan spasial. Kelompok yang dilatih **membaca**
menaikkan kemampuan programming **lebih besar** (p = 0.02), dan khususnya unggul pada soal yang
menuntut menelusuri kode (p = 0.03).

Artinya: latihan membaca bukan kegiatan sampingan. Dia menaikkan kemampuan menulis.

---

## Yang dilakukan expert, dan tidak dilakukan pemula

Busjahn dkk. (ICPC 2015) melacak gerakan mata programmer saat membaca kode:

|        | Cara membaca                                                  |
|--------|---------------------------------------------------------------|
| Pemula | hampir berurutan, atas ke bawah seperti teks biasa            |
| Expert | **jauh lebih tidak berurutan** — melompat mengikuti alur data |

Uwano dkk. menemukan hal serupa: 70% baris dilihat dalam 30% waktu pertama. Programmer
**memindai dulu**, baru menyelam.

Jadi membaca dari baris 1 sampai habis adalah cara pemula. Itu bukan salah, tapi lambat dan
mudah kehilangan gambaran besar.

---

## Empat langkah membaca

### Langkah 1 — Pindai, jangan baca

30 detik. Jangan baca isi baris. Hanya cari:

- nama fungsi dan nama variabel
- angka yang muncul
- kata kunci: `if`, `for`, `while`, `return`, `break`, `continue`
- komentar, kalau ada

Tujuan langkah ini bukan memahami. Tujuan: tahu di mana hal penting berada.

### Langkah 2 — Satu kalimat: kode ini untuk apa

Tutup kodenya, lalu tulis satu kalimat:

> "Kode ini menghitung ... dari ... lalu menghasilkan ..."

Kalau tidak bisa, berarti langkah 1 belum cukup. Ulangi, cari nama fungsi dan nilai kembaliannya.

### Langkah 3 — Telusuri satu jalur data saja

Pilih **satu** nilai. Ikuti dari masuk sampai keluar.

```
hargaTiket "250000"
  -> Number(hargaTiket) = 250000
  -> harga = 250000
  -> subtotal = harga * jumlah
  -> ...
```

Jangan telusuri semuanya sekaligus. Satu nilai, sampai habis. Baru nilai berikutnya.

Inilah yang dilakukan expert: mengikuti alur, bukan urutan baris.

### Langkah 4 — Baru baca detail

Sekarang baca baris per baris, dengan pertanyaan:

- baris ini mengubah nilai apa?
- kalau syaratnya berubah, apa yang rusak?
- nilai apa yang tidak pernah diperiksa?

---

## Empat pertanyaan close reading

Dari praktik close reading yang diadaptasi untuk kode (Felienne Hermans):

| Pertanyaan                                | Gunanya                |
|-------------------------------------------|------------------------|
| Apa hal pertama yang menarik perhatianku? | melatih pemindaian     |
| Apa berikutnya? Terhubung?                | melatih melihat relasi |
| Apakah keduanya bertentangan?             | menemukan kejanggalan  |
| Bagian mana yang belum kupahami?          | mengakui batas         |

Pertanyaan ketiga yang paling berguna. Kejanggalan biasanya menandakan bug atau nama yang
menyesatkan.

---

## Yang perlu dicatat saat membaca

Bukan ringkasan. Yang dicatat:

| Yang dicatat                 | Contoh                                            |
|------------------------------|---------------------------------------------------|
| nilai yang masuk dan tipenya | `hargaTiket` = `"250000"`, string, dari form      |
| nilai yang keluar            | `total` = `450000`, number                        |
| asumsi yang tidak tertulis   | "kode ini menganggap diskon tidak pernah negatif" |
| baris paling rapuh           | baris yang rusak kalau data berubah               |
| nama yang menyesatkan        | nama yang menjelaskan tipe, bukan maksud          |

---

## Tiga kesalahan saat membaca kode

**1. Langsung membaca baris per baris.** Lambat, dan kehilangan gambaran besar. Pindai dulu.

**2. Mencoba memahami semuanya sekaligus.** Pilih satu jalur data, ikuti sampai habis.

**3. Menyimpulkan "kode ini benar" tanpa memeriksa.** Kode yang tidak error bukan berarti benar.
Enam jenis bug di `BUG_TAXONOMY.md` tidak melempar error sama sekali.

---

## Hubungan dengan file lain

| File                                      | Isi                                 |
|-------------------------------------------|-------------------------------------|
| `BUG_TAXONOMY.md`                         | enam jenis bug yang harus diperiksa |
| `Working Skills/Reading/`                 | latihan membaca                     |
| `Working Skills/Templates/CodeReading.md` | format jawaban                      |
| `Trace.md`                                | tempat menulis hasil                |

---

## Sumber

| Sumber                                   | Yang diambil                                     |
|------------------------------------------|--------------------------------------------------|
| Endres, Fansher, Shah, Weimer (FSE 2021) | latihan membaca menaikkan kemampuan programming  |
| Busjahn dkk. (ICPC 2015)                 | expert membaca tidak berurutan, pemula berurutan |
| Uwano dkk.                               | 70% baris dilihat dalam 30% waktu pertama        |
| Felienne Hermans, Code Reading Club      | close reading, membaca tidak dilatih sengaja     |
| Czerwonka, Greiler, Tilford (Microsoft)  | review: 15% defect, 50% maintainability          |
