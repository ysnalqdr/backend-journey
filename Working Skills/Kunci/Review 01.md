# Kunci — Review 01: Hitung Diskon

Jangan dibuka sebelum menulis komentar review.

---

## Design (2 temuan)

### D1 — `[blocking]` Dua sumber diskon saling menimpa, bukan digabung

```javascript
if (pesanan.kodePromo === "HEMAT") {
    diskonPersen = 10;
}

if (pesanan.member) {
    diskonPersen = 20;      // ← MENIMPA 10
}
```

**Bukti terukur:**

```
promo HEMAT saja : bayar 270000    (diskon 10%)
member saja      : bayar 240000    (diskon 20%)
dua-duanya       : bayar 240000    (diskon 20%, promo HEMAT HILANG)
```

User yang punya promo **dan** member membayar sama dengan member tanpa promo. Promo-nya tidak berguna.

**Kenapa blocking:** ini kerugian finansial dan kepercayaan user. User memasukkan kode promo, melihat tidak ada efek, lalu komplain.

**Pertanyaan desain yang harus dijawab:** diskon itu **ditambah** (10+20=30), **diambil terbesar** (max 20), atau **tidak boleh digabung**? Kode ini tidak memilih salah satu — ia hanya kebetulan mengambil yang terakhir.

---

### D2 — `[blocking]` Promo `"MEMBER"` tidak pernah ditangani

Kode hanya mengenal `"HEMAT"`. Tidak ada daftar promo. Tidak ada jalur untuk promo lain.

```
promo MEMBER     : bayar 300000    (tidak ada diskon sama sekali)
```

**Kenapa blocking:** promo baru masuk tanpa mengubah kode ini, dan user tidak dapat diskon. Tidak ada error, tidak ada log, tidak ada yang tahu.

Ini **bug laten** — tidak muncul pada data sekarang, muncul saat ada promo baru.

---

## Functionality (1 temuan)

### F1 — `[blocking]` `diskonPersen` tidak dibatasi

Tidak ada pengecekan bahwa `diskonPersen` ada di antara 0 dan 100.

**Kenapa blocking:** kalau nanti diskon diambil dari database dan ada data rusak (`diskonPersen = 150`), maka:

```
potongan = 300000 * 150 / 100 = 450000
hargaAkhir = 300000 - 450000 = -150000
```

Lalu masuk ke `if (hargaAkhir < 0)` dan tercetak `"gratis"` — padahal seharusnya ini **data rusak yang harus ditolak**, bukan dianggap gratis.

Pengecekan `hargaAkhir < 0` menutupi gejala, bukan mencegah penyebab.

---

## Naming (2 temuan)

### N1 — `[nit]` `hargaAkhir` vs `potongan` vs `total`

Objeknya bernama `pesanan.total`, tapi hasil akhirnya `hargaAkhir`. Dua istilah untuk hal yang mirip: `total` dan `hargaAkhir`.

**Kenapa nit:** tidak menyebabkan bug, tapi membaca kode ini butuh satu detik ekstra untuk memastikan `total` dan `hargaAkhir` bukan hal yang sama.

Usulan: `pesanan.subtotal` dan `totalBayar`.

### N2 — `[nit]` `diskonPersen` sebenarnya menyimpan **persen**, bukan rupiah — nama sudah benar, tapi `potongan` menyimpan rupiah tanpa penanda

`potongan` bisa berarti persen atau rupiah. Usulan: `potonganRupiah`.

**Kenapa nit:** hanya kebingungan membaca, bukan bug.

---

## Yang BUKAN masalah

| Hal                                      | Kenapa bukan masalah                                      |
|------------------------------------------|-----------------------------------------------------------|
| `const` pada `potongan` dan `hargaAkhir` | sudah benar, nilainya tidak diubah                        |
| pengecekan `hargaAkhir < 0`              | perlu sebagai jaring pengaman, walaupun bukan solusi akar |
| `console.log` untuk output               | sesuai konteks skrip sederhana                            |
| tidak ada fungsi                         | satu alur, belum perlu dipisah                            |

Kalau kamu menandai salah satu dari ini sebagai `[blocking]`, itu **false positive** — dan reviewer yang sering false positive akan diabaikan oleh penulis kode.

---

## Cara menilai dirimu

| Temuan                       | Bobot |
|------------------------------|-------|
| D1 (diskon menimpa)          | 30%   |
| D2 (promo tidak dikenal)     | 25%   |
| F1 (tidak dibatasi)          | 25%   |
| N1 atau N2                   | 10%   |
| **tidak ada false positive** | 10%   |

Lulus kalau ≥ 70% **dan** tidak ada false positive.

---

## Satu hal yang perlu kamu bawa dari sini

Kode ini **berjalan tanpa error**. Tidak ada satu pun baris yang salah tulis. Semua test dengan satu diskon akan lulus.

Yang membuatnya salah adalah **desainnya**, bukan sintaksnya.

Google menaruh Design di urutan pertama review justru karena ini: bug yang paling mahal adalah bug yang tidak terlihat saat kode dijalankan.
