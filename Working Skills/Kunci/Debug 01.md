# Kunci — Debug 01: Stok Berkurang Dua Kali

Jangan dibuka sebelum menulis bug report dan menjawab langkah 3.

---

## Langkah 1 — Bug report yang baik

```
Judul             : Stok berkurang dua kali untuk satu pembelian
Langkah reproduksi: 1. Buka event dengan stok 10.
                    2. Pilih 1 tiket.
                    3. Tekan tombol bayar satu kali.
Harapan           : stok jadi 9, satu pesanan dibuat, satu notifikasi
Kenyataan         : stok jadi 8, satu pesanan dibuat, satu notifikasi
Dugaan penyebab   : (dugaan) pengurangan stok ditulis dua kali dalam
                    alur yang sama. Belum dibuktikan.
```

**Kesalahan umum di langkah ini:**

| Salah                                                                 | Kenapa salah                                          |
|-----------------------------------------------------------------------|-------------------------------------------------------|
| "stok berkurang dua" saja                                             | tidak ada langkah, tidak bisa direproduksi orang lain |
| menulis "karena ada `stok - jumlahBeli` dua kali" di bagian Kenyataan | itu sudah masuk analisis, bukan observasi             |
| tidak menulis harapan                                                 | tanpa harapan, tidak ada yang tahu ini bug atau bukan |

---

## Langkah 3a — Reproduce

```
pesanan dibuat, stok sekarang: 9
notifikasi terkirim
stok akhir: 8
stok seharusnya: 9
```

Perilaku user muncul: stok akhir `8`, seharusnya `9`.

---

## Langkah 3b — Locate

Pengurangan pertama (baris 15):

```javascript
stok = stok - jumlahBeli;      // 10 - 1 = 9
```

Pengurangan kedua (baris 21):

```javascript
stok = stok - jumlahBeli;      // 9 - 1 = 8
```

---

## Langkah 3c — Root cause

Jawaban yang **belum** akar: *"karena ada dua pengurangan"*. Itu gejala.

Akar masalahnya: **tidak ada batas yang menandai bahwa pesanan untuk transaksi ini sudah dibuat.**

Alurnya:

```
1. validasi stok cukup        ← benar
2. kurangi stok               ← benar
3. buat pesanan               ← benar
4. kirim notifikasi           ← benar
5. kurangi stok LAGI          ← tidak ada alasan
```

Langkah 5 tidak punya tugas. Komentarnya bilang `// kurangi stok (untuk cadangan)` — tapi "cadangan" bukan tugas yang sah. Stok tidak butuh cadangan; stok adalah satu angka.

**Yang seharusnya mencegahnya:** setiap langkah punya satu tugas jelas. Langkah 5 tidak punya tugas, jadi seharusnya tidak ada.

Ini masalah **Design**, bukan Functionality. Kodenya melakukan apa yang ditulis; yang salah adalah ada langkah tanpa alasan.

---

## Langkah 3d — Verifikasi

Hapus baris pengurangan kedua:

```
pesanan dibuat, stok sekarang: 9
notifikasi terkirim
stok akhir: 9
stok seharusnya: 9
```

Cocok. Dugaan terbukti.

**Kenapa langkah ini penting:** tanpa verifikasi, kamu hanya menebak. Dengan verifikasi, kamu punya bukti — dan bukti itu yang membuat perbaikan bisa dipertanggungjawabkan.

---

## Langkah 4 — Perbaikan

```javascript
const stokAwal = 10;
let stok = stokAwal;

const jumlahBeli = 1;

if (stok >= jumlahBeli) {
    stok = stok - jumlahBeli;
    console.log("pesanan dibuat, stok sekarang:", stok);
    console.log("notifikasi terkirim");
}
```

**Satu perubahan:** hapus baris pengurangan kedua.

Yang **tidak** boleh dilakukan di langkah ini:

| Jangan                              | Kenapa                                    |
|-------------------------------------|-------------------------------------------|
| sekalian mengganti nama variabel    | memperbesar risiko, dan tidak terkait bug |
| sekalian menambah fungsi            | bukan tugas perbaikan bug                 |
| sekalian mengubah `if` jadi `while` | mengubah perilaku, bukan memperbaiki      |
| menambah `try/catch`                | menutupi gejala, bukan menyelesaikan      |

Perbaikan bug = perubahan terkecil yang membuat bug hilang. Perapian dilakukan di commit terpisah.

---

## Langkah 5 — Cegah terulang

Jawaban yang baik menyebut **mekanisme**, bukan niat:

| Jawaban lemah     | Jawaban kuat                                                                                                         |
|-------------------|----------------------------------------------------------------------------------------------------------------------|
| "lebih hati-hati" | "satu fungsi hanya boleh mengubah stok sekali; kalau butuh dua, itu tanda ada dua tanggung jawab"                    |
| "ditest dulu"     | "test: untuk 1 pembelian, stok akhir harus `stokAwal - jumlahBeli`. Test ini akan gagal kalau ada pengurangan kedua" |
| "review kode"     | "di review, tanya tiap baris: tugasnya apa? baris tanpa tugas = hapus"                                               |

---

## Hal yang perlu kamu bawa dari sini

Bug ini **tidak akan ketahuan dari membaca satu baris**. Kedua baris benar secara sintaks. Keduanya masuk akal kalau dibaca sendiri-sendiri.

Yang menemukannya adalah **membaca alur sebagai satu kesatuan** dan bertanya: *"langkah ini tugasnya apa?"*

Itu sebabnya #34 menaruh "locate" dan "root cause" sebagai langkah terpisah. Kalau digabung, kamu akan berhenti di gejala pertama yang terlihat.
