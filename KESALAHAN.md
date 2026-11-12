# KESALAHAN.md

Kesalahan **berpikir**, bukan kesalahan kode. Bug log mencatat kode yang rusak; file ini mencatat pola pikir yang salah.

**Dibaca sebulan sekali.** Yang muncul **3 kali** bukan berarti kamu bodoh — artinya konsep itu butuh pendekatan berbeda, bukan diulang dengan cara yang sama.

---

## Empat jenis kesalahan

Setiap baris wajib diberi **Jenis**. Penanganannya berbeda — ini yang membuat file ini berguna.

****CONCEPT****
- Ciri: Tidak paham idenya
- Penanganan: Ajar ulang dengan analogi **berbeda**, bukan diulang

****READING****
- Ciri: Salah baca instruksi
- Penanganan: Latih membaca sampai selesai sebelum menjawab

****SYNTAX****
- Ciri: Typo, simbol salah
- Penanganan: Drill simbol itu 5×

****LOGIC****
- Ciri: Ide benar, urutan/alur salah
- Penanganan: Telusuri langkah per langkah


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
