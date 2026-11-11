# Review 01 — Hitung Diskon Pesanan

**Level:** 1
**Tanggal dibuat:** 2026-11-08
**Aturan:** README #30

---

## Cara pakai

1. Baca kode di bawah.
2. Salin `Templates/CodeReview.md` ke `Trace.md`.
3. Periksa **berurutan**: Design → Functionality → Complexity → Tests → Naming → Style.
4. Setiap temuan ditulis dengan label `[blocking]` atau `[nit]`, **beserta alasan**.
5. Jangan memperbaiki kodenya. Hanya beri komentar.

Kalau kamu langsung memperbaiki, kamu sedang jadi penulis — bukan reviewer.

---

## Konteks

Kode ini menghitung harga akhir pesanan tiket. Ada dua sumber diskon: kode promo dan status member. Diskon tidak boleh membuat harga jadi negatif.

Kode ini sudah jalan di produksi selama dua minggu.

---

## Kode

```javascript
const pesanan = {
    total: 300000,
    kodePromo: "HEMAT",
    member: false
};

let d = 0;
let x = pesanan.total;

if (pesanan.kodePromo === "HEMAT") {
    d = 10;
}

if (pesanan.member) {
    d = 20;
}

let akhir = x - (x * d / 100);

if (akhir < 0) {
    akhir = 0;
}

if (akhir == 0) {
    console.log("gratis");
} else {
    console.log("bayar", akhir);
}

let diskonRupiah = x * d / 100;
let totalAkhir = x - diskonRupiah;
```

---

## Yang harus kamu cari

Ada **6 masalah** di kode ini. Sebarannya:

| Lapisan | Jumlah | Petunjuk |
|---|---|---|
| Design | 1 | ada dua sumber diskon — bagaimana seharusnya keduanya berhubungan? |
| Functionality | 1 | satu operator yang salah tipe |
| Complexity | 2 | ada perhitungan yang diulang, dan ada variabel yang tidak dipakai |
| Naming | 1 | dua nama variabel tidak menjelaskan apa pun |
| Style | 1 | `[nit]` saja |

**Yang tidak termasuk masalah:** pengecekan `akhir < 0`. Itu memang perlu, walaupun tidak akan pernah terjadi dengan data ini.

---

## Format jawaban

```
[blocking] baris X: <temuan>
Alasan: <kenapa ini masalah, dan apa akibatnya>

[nit] baris Y: <temuan>
Alasan: <kenapa>
```

---

## Yang diuji

| Kemampuan | Lapisan |
|---|---|
| melihat bahwa dua diskon saling menimpa | Design |
| menemukan `==` di antara `===` | Functionality |
| melihat perhitungan ganda | Complexity |
| membedakan nama buruk dari nama panjang | Naming |
| tidak menandai hal yang benar sebagai bug | Semua |
