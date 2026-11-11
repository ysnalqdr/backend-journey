# Template — Bug Report

Diisi **sebelum** memperbaiki apa pun. Salin ke `Catatan.md` bagian `## Bug log`.

---

## Bug

**Judul:**

> Satu kalimat, spesifik. Bukan "ada error", tapi "stok jadi 0 setelah checkout dua kali".

**Tanggal:**

---

## Langkah reproduksi

1.
2.
3.

**Seberapa sering terjadi?** selalu / kadang / sekali

---

## Harapan

> Apa yang seharusnya terjadi.

---

## Kenyataan

> Apa yang benar-benar terjadi. Tempel pesan error kalau ada.

```
(tempel output di sini)
```

---

## Dugaan penyebab

> Tandai jelas ini **dugaan**, bukan fakta.

**Dugaan:**
**Alasan menduga begitu:**
**Cara membuktikan:**

---

## Setelah diperbaiki

**Akar masalah sebenarnya:**

> Apakah dugaan awal benar? Kalau salah, apa yang sebenarnya.

**Perbaikan:**

**Cara memastikan tidak muncul lagi:**

---

## Aturan

1. **Pisahkan harapan dari kenyataan.** Dua kolom terpisah, bukan satu paragraf.
2. **Dugaan wajib ditandai dugaan.** Menulis dugaan sebagai fakta adalah kesalahan paling umum di laporan bug.
3. **"Cara membuktikan" wajib diisi.** Kalau tidak tahu cara membuktikan, itu artinya belum paham bugnya.
4. **Jangan tulis solusi di bagian kenyataan.** Solusi masuk setelah akar masalah ditemukan.

---

## Contoh buruk vs baik

**Buruk:**

> Ada bug di checkout. Stoknya salah. Tolong diperbaiki.

Kenapa buruk: tidak ada langkah, tidak ada harapan, tidak ada kenyataan, tidak bisa direproduksi orang lain.

**Baik:**

> **Judul:** Stok berkurang dua kali saat tombol bayar ditekan dua kali cepat
>
> **Langkah:** 1. Buka event A (stok 10). 2. Pilih 1 tiket. 3. Tekan bayar dua kali dalam 1 detik.
>
> **Harapan:** stok jadi 9, satu pesanan dibuat.
>
> **Kenyataan:** stok jadi 8, dua pesanan dibuat.
>
> **Dugaan:** pengecekan stok dan pengurangan stok tidak dalam satu transaksi, jadi request kedua membaca stok lama. Belum dibuktikan.

Kenapa baik: orang lain bisa mengulang, tahu bedanya, dan tahu apa yang sedang diduga.
