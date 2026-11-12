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

Kode ini menghitung harga akhir pesanan tiket. Ada dua sumber diskon: kode promo dan status member.

Kode ini sudah berjalan di produksi dua minggu. Tidak ada laporan bug.

---

## Kode

```javascript
const pesanan = {
    total: 300000,
    kodePromo: "HEMAT",
    member: false
};

let diskonPersen = 0;

if (pesanan.kodePromo === "HEMAT") {
    diskonPersen = 10;
}

if (pesanan.member) {
    diskonPersen = 20;
}

const potongan = pesanan.total * diskonPersen / 100;
const hargaAkhir = pesanan.total - potongan;

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
