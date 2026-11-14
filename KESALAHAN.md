# KESALAHAN.md

Kesalahan **berpikir**, bukan kesalahan kode. Bug log mencatat kode yang rusak; file ini mencatat pola pikir yang salah.

**Dibaca sebulan sekali.** Yang muncul **3 kali** bukan berarti kamu bodoh — artinya konsep itu butuh pendekatan berbeda, bukan diulang dengan cara yang sama.

---

## Empat jenis kesalahan

Setiap baris wajib diberi **Jenis**. Penanganannya berbeda — ini yang membuat file ini berguna.

**CONCEPT**, cirinya tidak paham idenya. Penanganan: ajar ulang dengan analogi berbeda, bukan
diulang.

**READING**, cirinya salah baca instruksi. Penanganan: latih membaca sampai selesai sebelum
menjawab.

**SYNTAX**, cirinya typo atau simbol salah. Penanganan: drill simbol itu 5 kali.

**LOGIC**, cirinya ide benar tapi urutan atau alurnya salah. Penanganan: telusuri langkah per
langkah.


**Kenapa dipisah:** kesalahan READING tidak sembuh dengan belajar konsep. Kesalahan SYNTAX tidak sembuh dengan penjelasan ulang. Kalau semua diperlakukan sama, kamu berlatih hal yang salah.

---

## Cara mengisi

Setiap kali kamu sadar salah — di gerbang, di placement check, di latihan — tambahkan satu baris. Tiga detik. Jangan menunggu sampai rapi.

```markdown
Setiap baris: **tanggal · jenis · muncul ke-berapa · sudah diperbaiki?**

```

Kolom "sudah diperbaiki?" diisi `ya` kalau di review berikutnya kamu sudah bisa jawab benar **tanpa buka materi** dan **alasannya benar**.

---

## Catatan

Setiap baris: **tanggal · jenis · muncul ke-berapa · sudah diperbaiki?**

- **2026-11-06** · CONCEPT · ke-1 · belum
  - Salah: jawab `0 == ""` itu `false`
  - Konsep benar: `==` mengubah tipe sebelum membandingkan
- **2026-11-06** · CONCEPT · ke-1 · belum
  - Salah: jawab soal 4 outputnya `D`
  - Konsep benar: tipe data menentukan hasil perbandingan
- **2026-11-06** · READING · ke-1 · belum
  - Salah: tulis `subtotal + promo` padahal instruksinya potong
  - Konsep benar: membaca instruksi sampai selesai
- **2026-11-06** · CONCEPT · ke-1 · belum
  - Salah: tidak bisa jelaskan kenapa `if (stok)` untuk `0` salah
  - Konsep benar: truthy/falsy untuk angka
- **2026-11-07** · CONCEPT · ke-1 · belum
  - Salah: alasan `NaN == NaN` ditulis "string sama string"
  - Konsep benar: NaN itu number, dan tidak sama dengan apa pun
- **2026-11-07** · SYNTAX · ke-1 · ya
  - Salah: menulis `>+` bukan `>=`
  - Konsep benar: operator perbandingan
- **2026-11-07** · CONCEPT · ke-1 · ya
  - Salah: menjawab `"90" < "100"` itu `true`
  - Konsep benar: perbandingan teks huruf per huruf
- **2026-11-07** · READING · ke-1 · ya
  - Salah: pakai `stokTiket` sebagai jumlah beli
  - Konsep benar: membaca nama variabel sesuai maksudnya
- **2026-11-08** · CONCEPT · ke-1 · ya
  - Salah: alasan ternary: "karena tiket falsy"
  - Konsep benar: yang diperiksa `tiket > 0`, bukan `tiket`
- **2026-11-08** · READING · ke-1 · ya
  - Salah: melihat `!` padahal kode tidak punya `!`
  - Konsep benar: membaca simbol satu per satu sebelum menjawab
- **2026-11-08** · CONCEPT · ke-1 · ya
  - Salah: mengira `switch` melakukan looping
  - Konsep benar: `switch` berjalan sekali, fallthrough hanya ke bawah
- **2026-11-08** · CONCEPT · ke-**2** · belum
  - Salah: `diskon = 20` disangka mencetak 20
  - Konsep benar: `=` menugaskan, `console.log` mencetak
- **2026-11-08** · CONCEPT · ke-1 · belum
  - Salah: `case 2` dikira sama dengan `case "2"`
  - Konsep benar: `switch` membandingkan dengan `===`, tipe harus sama
- **2026-11-08** · CONCEPT · ke-1 · ya
  - Salah: jawab "berhenti di case B" tanpa sebut `break`
  - Konsep benar: `break` yang menghentikan, bukan kecocokan `case`
- **2026-11-08** · CONCEPT · ke-1 · ya
  - Salah: output dijawab "reguler" padahal yang tercetak angka 72000
  - Konsep benar: nama `case` itu label, yang tercetak adalah nilai variabel
- **2026-11-08** · CONCEPT · ke-**3** · belum
  - Salah: `&&` disangka mengembalikan `true`
  - Konsep benar: `&&` mengembalikan nilai asli sisi yang dipilih, bukan boolean
- **2026-11-08** · CONCEPT · ke-1 · belum
  - Salah: "kiri true dan kanan false, JS hanya membaca yang true"
  - Konsep benar: `&&` WAJIB periksa kanan kalau kiri truthy; berhenti hanya kalau kiri falsy
- **2026-11-08** · CONCEPT · ke-1 · belum
  - Salah: perbaikan crash: "ganti `.nama` jadi string"
  - Konsep benar: memperbaiki data ≠ memperbaiki kode; guard ditaruh sebelum akses properti
- **2026-11-08** · CONCEPT · ke-**3** · belum
  - Salah: `if` gagal disangka menjalankan `default` di dalam switch
  - Konsep benar: `default` bagian dari `switch`; kalau `if` gagal, switch tidak jalan sama sekali
- **2026-11-08** · READING · ke-1 · belum
  - Salah: membaca `sudahLogin` (boolean `false`) sebagai teks kosong `""`
  - Konsep benar: periksa tipe nilai sebelum menyimpulkan
- **2026-11-08** · READING · ke-1 · belum
  - Salah: menjawab "tidak tercetak apapun" padahal kode punya `else`
  - Konsep benar: baca seluruh struktur `if/else` sebelum menjawab
- **2026-11-12** · CONCEPT · ke-4 · belum
  - Salah: `user.alamat = null` disangka menyebabkan error
  - Konsep benar: kondisi falsy ≠ error; `&&` berhenti sebelum menyentuh properti
- **2026-11-12** · CONCEPT · ke-1 · belum
  - Salah: `??` dijelaskan sebagai pengganti untuk `null` dan `undefined`
  - Konsep benar: untuk `null`, `??` dan `||` hasilnya sama. `??` dipakai justru karena
    `0`, `""`, dan `false` adalah nilai sah yang tidak boleh diganti `||`
  - Pulih 2026-11-12: diuji dengan kasus `stokMinimum = 0`, menjawab benar 3/3
- **2026-11-12** · CONCEPT · ke-1 · sudah
  - Salah: arah ternary dan `if` dibalik, dikira ternary bisa masuk ke dalam `if`
  - Konsep benar: `if` itu pernyataan, ternary itu ekspresi. Yang bisa jadi nilai hanya
    ekspresi; `if` tidak bisa ditaruh di variabel sama sekali
  - Pulih 2026-11-12: diuji ulang tanpa dipersempit, jawaban tepat
- **2026-11-12** · READING · ke-1 · belum
  - Salah: menghitung `saldo -= i * 2` tanpa melihat `let saldo = 50` di atas loop
  - Konsep benar: baca variabel yang dideklarasikan di atas loop sebelum menelusuri;
    nilainya berubah tiap putaran, bukan tetap
- **2026-11-12** · CONCEPT · ke-2 · belum
  - Salah: `jumlah += i` dijawab sebagai jumlah putaran (`3`), bukan jumlah nilai (`12`)
  - Konsep benar: `x++` menghitung berapa kali, `x += i` menjumlahkan nilai `i`
- **2026-11-12** · LOGIC · ke-1 · sudah
  - Salah: batch 6 soal `for`, 5 salah karena penjumlahan di akhir dikerjakan di kepala
    (`65` vs `75`, `15` vs `14`, `11000` vs `1000`, `4` vs `5`)
  - Konsep benar: bagian `for` dibaca benar; yang perlu dibiasakan adalah menulis tiga baris
    trace sebelum menjawab, bukan menjumlahkan di kepala
  - Pulih 2026-11-12: 10 soal per konsep dijawab 10/10 dengan deret dan tabel tertulis
- **2026-11-12** · CONCEPT · ke-1 · belum
  - Salah: `i % 3 === 0` dibaca sebagai "ganjil", dan `break` dijawab seperti `continue`
    (S4 dijawab `19`, seharusnya `3`)
  - Konsep benar: `% 3` itu kelipatan 3, bukan ganjil. `break` menghentikan seluruh loop,
    jadi putaran setelahnya tidak pernah terjadi
- **2026-11-12** · CONCEPT · ke-1 · sudah
  - Salah: `===` dibaca sebagai operasi pengurangan (`i === 2` dijawab `1,0,1,2,1,2`)
  - Konsep benar: `===` hanya membandingkan, hasilnya `true` atau `false`
  - Pulih 2026-11-12: soal S7 dijawab benar (`[1,2,4,5]`)
- **2026-11-12** · CONCEPT · ke-1 · sudah
  - Salah: `%` disangka butuh pembagian, dan dikira tidak bisa dihitung
  - Konsep benar: `%` dihitung dengan pengurangan berulang, dan `% 2` cukup dilihat
    genap atau ganjil
  - Pulih 2026-11-12: S3 dan S5 dijawab benar
- **2026-11-12** · CONCEPT · ke-**2** · sudah
  - Salah: `if` ditulis di kanan `=` empat kali berturut-turut, lalu menyalin variabel lain
  - Konsep benar: `if` tidak menghasilkan nilai, jadi tidak bisa jadi isi variabel. Yang
    menghasilkan nilai hanya ekspresi, dan ternary adalah bentuk ekspresi dari `if/else`
  - Pulih 2026-11-12: diuji tanpa dipersempit, menjawab "if itu pernyataan bukan ekspresi"

---

## Review bulanan

Isi setiap akhir bulan. Salin baris yang muncul ≥ 2 kali ke sini, lalu tentukan tindakan.

```markdown
## Review <bulan>

| Konsep | Muncul berapa kali | Tindakan |
|---|---|---|
| | | ulangi materi / ganti pendekatan / buat latihan sendiri |

**Kesimpulan bulan ini:**
**Yang akan saya lakukan berbeda bulan depan:**
```

---

## Aturan

1. Catat **segera**, jangan menunggu rapi.
2. Tulis kesalahannya apa adanya. Tidak perlu diperhalus.
3. Yang muncul 3 kali wajib dibahas dengan pendekatan berbeda — bukan diulang.
4. Jangan hapus baris lama, walaupun sudah diperbaiki. Riwayatnya yang berguna.
