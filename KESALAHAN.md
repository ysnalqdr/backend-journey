# KESALAHAN.md

Kesalahan **berpikir**, bukan kesalahan kode. Bug log mencatat kode yang rusak; file ini mencatat pola pikir yang salah.

**Dibaca sebulan sekali.** Yang muncul **3 kali** bukan berarti kamu bodoh — artinya konsep itu butuh pendekatan berbeda, bukan diulang dengan cara yang sama.

---

## Empat jenis kesalahan

Setiap baris wajib diberi **Jenis**. Penanganannya berbeda — ini yang membuat file ini berguna.

| Jenis | Ciri | Penanganan |
|---|---|---|
| **CONCEPT** | Tidak paham idenya | Ajar ulang dengan analogi **berbeda**, bukan diulang |
| **READING** | Salah baca instruksi | Latih membaca sampai selesai sebelum menjawab |
| **SYNTAX** | Typo, simbol salah | Drill simbol itu 5× |
| **LOGIC** | Ide benar, urutan/alur salah | Telusuri langkah per langkah |

**Kenapa dipisah:** kesalahan READING tidak sembuh dengan belajar konsep. Kesalahan SYNTAX tidak sembuh dengan penjelasan ulang. Kalau semua diperlakukan sama, kamu berlatih hal yang salah.

---

## Cara mengisi

Setiap kali kamu sadar salah — di gerbang, di placement check, di latihan — tambahkan satu baris. Tiga detik. Jangan menunggu sampai rapi.

```markdown
| Tanggal | Jenis | Kesalahan | Konsep yang salah | Muncul ke- | Sudah diperbaiki? |
```

Kolom "sudah diperbaiki?" diisi `ya` kalau di review berikutnya kamu sudah bisa jawab benar **tanpa buka materi** dan **alasannya benar**.

---

## Catatan

| Tanggal | Jenis | Kesalahan | Konsep yang salah | Muncul ke- | Sudah diperbaiki? |
|---|---|---|---|---|---|
| 2026-11-06 | CONCEPT | jawab `0 == ""` itu `false` | `==` mengubah tipe sebelum membandingkan | 1 | belum |
| 2026-11-06 | CONCEPT | jawab soal 4 outputnya `D` | tipe data menentukan hasil perbandingan | 1 | belum |
| 2026-11-06 | READING | tulis `subtotal + promo` padahal instruksinya potong | membaca instruksi sampai selesai | 1 | belum |
| 2026-11-06 | CONCEPT | tidak bisa jelaskan kenapa `if (stok)` untuk `0` salah | truthy/falsy untuk angka | 1 | belum |
| 2026-11-07 | CONCEPT | alasan `NaN == NaN` ditulis "string sama string" | NaN itu number, dan tidak sama dengan apa pun | 1 | belum |
| 2026-11-07 | SYNTAX | menulis `>+` bukan `>=` | operator perbandingan | 1 | ya |
| 2026-11-07 | CONCEPT | menjawab `"90" < "100"` itu `true` | perbandingan teks huruf per huruf | 1 | ya |
| 2026-11-07 | READING | pakai `stokTiket` sebagai jumlah beli | membaca nama variabel sesuai maksudnya | 1 | ya |
| 2026-11-08 | CONCEPT | alasan ternary: "karena tiket falsy" | yang diperiksa `tiket > 0`, bukan `tiket` | 1 | ya |
| 2026-11-08 | READING | melihat `!` padahal kode tidak punya `!` | membaca simbol satu per satu sebelum menjawab | 1 | ya |
| 2026-11-08 | CONCEPT | mengira `switch` melakukan looping | `switch` berjalan sekali, fallthrough hanya ke bawah | 1 | ya |
| 2026-11-08 | CONCEPT | `diskon = 20` disangka mencetak 20 | `=` menugaskan, `console.log` mencetak | **2** | belum |
| 2026-11-08 | CONCEPT | `case 2` dikira sama dengan `case "2"` | `switch` membandingkan dengan `===`, tipe harus sama | 1 | belum |
| 2026-11-08 | CONCEPT | jawab "berhenti di case B" tanpa sebut `break` | `break` yang menghentikan, bukan kecocokan `case` | 1 | belum |

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
