# Review 01 — Hitung Diskon Pesanan

**Level:** 1
**Aturan:** README #30

---

## Cara pakai

1. Baca `review_01.js`. **Jangan jalankan.**
2. Salin `Templates/CodeReview.md` ke `Trace.md`.
3. Periksa **berurutan**: Design → Functionality → Complexity → Tests → Naming → Style.
4. Setiap temuan diberi label `[blocking]` atau `[nit]`, **beserta alasan**.
5. Baru ubah `sudahReview` jadi `true` dan jalankan, untuk membuktikan temuanmu.

---

## Konteks

Catatan: soal ini semula memakai objek (`pesanan.total`), materi minggu 4.
Diganti jadi variabel biasa pada 2026-11-20 supaya sesuai aturan #58.
Kelima bug tidak berubah.

Kode ini menghitung harga akhir pesanan tiket. Ada dua sumber diskon: kode promo dan status member.

Kode ini sudah berjalan di produksi dua minggu. Tidak ada laporan bug.

---

## Kode

```javascript
const totalPesanan = 300000;
const kodePromo = "HEMAT";
const member = false;

let diskonPersen = 0;

if (kodePromo === "HEMAT") {
    diskonPersen = 10;
}

if (member) {
    diskonPersen = 20;
}

const potongan = totalPesanan * diskonPersen / 100;
const hargaAkhir = totalPesanan - potongan;

if (hargaAkhir < 0) {
    console.log("gratis");
} else {
    console.log("bayar", hargaAkhir);
}
```

---

## Ada 5 masalah

**Design**
- Jumlah: 2
- Petunjuk: (1) dua sumber diskon — bagaimana seharusnya keduanya berhubungan? (2) ada nilai promo yang tidak ditangani sama sekali

**Functionality**
- Jumlah: 1
- Petunjuk: satu nilai yang seharusnya dibatasi, tapi tidak

**Naming**
- Jumlah: 2
- Petunjuk: dua nama yang menyesatkan atau tidak konsisten


**Yang BUKAN masalah** — jangan ditandai, nanti dihitung salah:

- `pesanan` sebagai nama objek — sudah jelas
- `console.log` untuk output — sesuai konteks, ini skrip sederhana
- `const` pada `potongan` dan `hargaAkhir` — sudah benar
- pengecekan `hargaAkhir < 0` — perlu, walaupun tidak akan pernah terjadi dengan data ini

---

## Format jawaban

```
[blocking] baris X: <temuan>
Alasan: <kenapa ini masalah, akibatnya apa>

[nit] baris Y: <temuan>
Alasan: <kenapa>
```

---

## Komentarku

> **[blocking] baris 11-13** — `diskonPersen` ditimpa. HEMAT + member bayar 240000,
> sama dengan member saja, jadi kode promo HEMAT tidak berguna. Seharusnya 210000
> kalau dua diskon ditambahkan. Kode harus memilih aturan (ditambah, diambil terbesar,
> atau tidak digabung); sekarang hanya kebetulan mengambil yang terakhir ditulis.
>
> **[blocking] baris 7-9** — promo selain `"HEMAT"` tidak dikenali, `diskonPersen`
> tetap 0 dan pembeli bayar penuh 300000. Tidak ada error, tidak ada log, jadi tidak
> ada yang tahu promo itu gagal.
>
> **[blocking] baris 15** — `diskonPersen` tidak dibatasi 0-100. Kalau berisi 150,
> `potongan` jadi 450000, `hargaAkhir` jadi -150000, lalu tercetak `gratis` —
> data rusak berubah jadi pesanan gratis tanpa satu pun error.
>
> **[nit] baris 15** — `potongan` tidak menyebut satuannya. `diskonPersen` jelas
> memakai persen, `potongan` bisa rupiah atau persen. Usulan: `potonganRupiah`.

Dikerjakan 2026-11-21.

**False positive:** sempat menandai `console.log("gratis")` dan mengusulkan ganti nama
`totalPesanan`. Keduanya sudah dinyatakan bukan masalah di soal. Yang pertama
diperbaiki sendiri; yang kedua tetap terjadi.

**Catatan cacat soal:** kunci N1 menyebut `totalPesanan` vs `hargaAkhir` sebagai masalah,
padahal daftar bukan-masalah menyebut `totalPesanan` sudah jelas. Dua pernyataan itu
bertentangan.

---

## Setelah menulis komentar

1. Ubah `sudahReview` jadi `true`
2. `node review_01.js`
3. Bandingkan temuanmu dengan `Kunci/Review 01.md`

---

## Yang diuji

| Kemampuan                                     | Lapisan       |
|-----------------------------------------------|---------------|
| melihat dua diskon saling menimpa             | Design        |
| menemukan kondisi yang tidak pernah benar     | Design        |
| melihat nilai yang tidak dibatasi             | Functionality |
| membedakan nama menyesatkan dari nama panjang | Naming        |
| **tidak** menandai hal yang benar sebagai bug | Semua         |
