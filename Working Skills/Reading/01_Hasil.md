# Reading 01 — Total Pembayaran

**Tanggal:** 2026-11-15
**Level:** 1
**Blok Working Skills:** `reading-01` — selesai

---

## Hasil per pertanyaan

| #   | Pertanyaan                         | Hasil                      |
|-----|------------------------------------|----------------------------|
| 1   | Tipe empat variabel                | benar 4 dari 4             |
| 1   | Asal data                          | belum dijawab              |
| 2   | Delapan baris output               | benar 8 dari 8             |
| 3   | Input salah (`jumlahBeli` = `"0"`) | benar setelah dituntun     |
| 4   | Baris paling rapuh                 | naluri benar, alasan belum |
| 5   | Nama variabel                      | benar, melebihi kunci      |

---

## Dugaanku vs kenyataan

| #   | Dugaanku                         | Kenyataan                      | Cocok?   |
|-----|----------------------------------|--------------------------------|----------|
| 1   | 3 string, 1 boolean              | sama                           | ya       |
| 2   | 8 nilai berurutan benar          | sama                           | ya       |
| 3   | `jumlah` = `0`, `valid` = `true` | `valid` = `false`              | tidak    |
| 4   | "bisa bikin berantakan"          | promo baru diabaikan diam-diam | setengah |
| 5   | `harga`, `jumlah` terlalu umum   | benar, kunci tidak menyebutnya | ya       |

---

## Yang meleset

**1. `!` terlewat saat membaca.**

`!Number.isNaN(0)` dijawab `false`. Yang benar `true`.

`Number.isNaN(0)` bertanya "apakah 0 itu NaN?" Jawabnya tidak, jadi `false`. Tanda `!`
(logical NOT) membalik jadi `true`.

Ini kejadian ke-2. Yang pertama 2026-11-12.

**2. Nilai dijawab dengan tipe.**

Ditanya "`jumlah` isinya apa", dijawab dengan ekspresi (`Number(jumlahBeli)`), lalu dengan
tipe (`string`), lalu ditebak (`true`). Tiga percobaan.

Sebagian salahku: pertanyaannya tidak menyebut bentuk jawaban yang diminta.

**3. Alasan belum bisa dipertahankan.**

Pertanyaan 4 dijawab "bisa bikin berantakan dan kacau". Itu perasaan, bukan alasan. Alasan
yang bisa dipakai penulis kode untuk memperbaiki: *"promo baru diabaikan diam-diam, tidak
error, user membayar penuh"*.

Ini pembeda antara **membaca** dan **mereview**.

---

## Yang masih tidak kupahami

Asal data. Pertanyaan 1 menanyakan dari mana nilainya datang, bukan kenapa tipenya begitu.

| Variabel                                | Asal       |
|-----------------------------------------|------------|
| `hargaTiket`, `jumlahBeli`, `kodePromo` | form web   |
| `statusMember`                          | sesi login |

Penting untuk backend: semua yang datang dari form atau HTTP selalu string. Tidak ada angka
yang datang dari luar.

---

## Bug yang ditemukan

**`valid` dihitung lalu dibuang.**

```javascript
const valid = !Number.isNaN(harga) && !Number.isNaN(jumlah) && jumlah > 0;
```

Nama `valid` hanya muncul di baris itu. Tidak ada `if (!valid)` di mana pun.

Akibatnya: kalau `jumlahBeli = "0"`, `valid` jadi `false`, tapi proses tetap jalan. Output
`total : 0`, tanpa peringatan. Program terlihat normal.

Ini jenis bug ke-7 di `BUG_TAXONOMY.md`: **nilai dihitung lalu dibuang**.

---

## Yang perlu dilatih berikutnya

| Yang dilatih               | Cara                                              |
|----------------------------|---------------------------------------------------|
| membaca `!` sampai selesai | drill 5 contoh, tulis dulu isi fungsinya          |
| memberi alasan             | sebut **apa** rusak dan **kenapa** tidak ketahuan |
| melacak nilai terbuang     | cari setiap nama dua kali                         |

---

## Catatan sistem

Soal re-check hari ini memakai `penjualan[i]` — array, materi minggu 3. Ditanyakan di minggu 1.

Itu kesalahan guru, bukan learner. README #42 ditambahkan karena ini.
