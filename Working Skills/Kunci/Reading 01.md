# Kunci — Reading 01: Total Pembayaran

Jangan dibuka sebelum menjawab.

---

## Jawaban 1 — Apa yang masuk?

| Variabel | Nilai | Tipe | Asal |
|---|---|---|---|
| `hargaTiket` | `"250000"` | string | form web |
| `jumlahBeli` | `"2"` | string | form web |
| `kodePromo` | `"HEMAT"` | string | form web |
| `statusMember` | `false` | boolean | sesi login |

Kunci: **semua dari form berupa teks**, walaupun isinya angka.

---

## Jawaban 2 — Apa yang keluar?

```
harga    : 250000
jumlah   : 2
valid    : true
diskon   : 10
subtotal : 500000
potongan : 50000
total    : 450000
label    : pembelian biasa
```

Perhatikan `harga : 250000` — tercetak tanpa tanda kutip, karena `Number()` sudah mengubahnya jadi angka.

`label` jadi "pembelian biasa" karena `450000 > 500000` itu `false`.

---

## Jawaban 3 — Kalau input salah

**(a) `jumlahBeli = "abc"`**

```
jumlah = parseInt("abc") → NaN
valid  = !Number.isNaN(NaN) → false
```

Tapi `valid` **tidak dipakai di mana pun**. Kode tetap jalan:

```
subtotal = 250000 * NaN = NaN
potongan = NaN
total    = NaN
label    = NaN > 500000 → false → "pembelian biasa"
```

Output jadi `NaN` di semua angka, tapi program tidak error dan tidak memberi tahu apa pun.

**Ini bug:** `valid` dihitung, lalu tidak pernah dipakai. Kalau ada `if (!valid) { ... return; }`, ini tidak terjadi.

**(b) `jumlahBeli = "0"`**

```
jumlah = 0
valid  = !isNaN(0) && !isNaN(0) && 0 > 0 → false
subtotal = 0, potongan = 0, total = 0
```

Sama: `valid` false tapi diabaikan. Output semua `0`, program jalan normal, tidak ada peringatan.

**(c) `statusMember = true` + `kodePromo = "HEMAT"`**

```
diskon = 10    (dari HEMAT)
diskon = 20    (dari member, MENIMPA)
```

Member dapat 20%, promo HEMAT hilang. Kalau harapannya "member 20% + promo 10% = 30%", kode ini salah.

Yang benar-benar terjadi: **diskon terakhir menang**, bukan yang terbesar, bukan penjumlahan. Urutan `if` menentukan.

---

## Jawaban 4 — Baris paling rapuh

```javascript
if (kodePromo === "HEMAT") {
    diskon = 10;
} else if (kodePromo === "MEMBER") {
    diskon = 15;
}
```

**Rapuh karena:** diskon ditulis sebagai angka di dalam kode, bukan diambil dari data.

Kalau besok ada promo `"NEWYEAR"` dengan diskon 25%, kode ini **tidak error** — promo itu hanya diabaikan, dan user membayar penuh. Tidak ada yang tahu sampai ada komplain.

Kode yang benar: diskon disimpan di data (tabel promo), kode hanya mengambil.

Alternatif jawaban yang juga benar:

```javascript
if (statusMember) {
    diskon = 20;
}
```

Rapuh karena **menimpa** nilai sebelumnya, bukan membandingkan. Kalau urutan `if` ditukar, hasilnya berubah — dan tidak ada yang menyadari.

---

## Jawaban 5 — Nama yang harus diganti

| Nama sekarang | Masalah | Usulan |
|---|---|---|
| `hargaTiket` | menjelaskan **asal** (tiket), bukan maksud. Kalau dipakai untuk merchandise juga, namanya salah. | `hargaSatuan` |
| `jumlahBeli` | terdengar seperti perintah/aksi, bukan jumlah. | `jumlahItem` |
| `valid` | terlalu umum. Valid untuk apa? | `dataPesananValid` |
| `label` | tidak menjelaskan label apa | `labelNilaiPembelian` |

Nama yang baik menjelaskan **maksud**, bukan tipe dan bukan asal.

---

## Yang paling penting dari latihan ini

Ada tiga hal yang **tidak akan ketahuan** kalau kamu hanya menjalankan kode:

1. `valid` dihitung tapi tidak dipakai — output tetap keluar, terlihat "jalan"
2. Diskon saling menimpa, bukan menjumlah — hanya kelihatan kalau dicoba dengan dua diskon
3. Promo baru diabaikan diam-diam — tidak ada error, tidak ada log

Itulah alasan aturan #29 melarang menjalankan sebelum membaca. Menjalankan hanya menunjukkan **satu jalur**; membaca menunjukkan **semua jalur yang mungkin**.
