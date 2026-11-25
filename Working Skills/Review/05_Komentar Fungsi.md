# Review 05 — Komentar untuk Fungsi yang Benar

**Level:** EXPLAIN
**Materi:** fungsi, parameter, `return`
**Dikerjakan:** 2026-11-25

---

## Kode yang dikomentari

```javascript
function hitungRata(nilai1, nilai2, nilai3) {
    const jumlah = nilai1 + nilai2 + nilai3;
    const rata = jumlah / 3;
    return rata;
}
```

Kode ini **BENAR**. Tidak ada bug.

---

## Yang ditanyakan

| #   | Isi                                                              |
|-----|------------------------------------------------------------------|
| 1   | Apa yang dilakukan fungsi ini                                    |
| 2   | Berapa hasilnya untuk `hitungRata(10, 20, 30)`                   |
| 3   | Satu hal yang membuat fungsi ini **rapuh** kalau datanya berubah |

---

## Komentarku

> Fungsi ini menjumlahkan tiga nilai lalu membaginya dengan 3 untuk mendapat rata-rata,
> jadi `hitungRata(10, 20, 30)` menghasilkan **20**.
> Yang rapuh ada di `const rata = jumlah / 3;` — angka `3` ditulis mati, jadi kalau
> nanti rata-rata dihitung dari 4 atau 5 nilai, baris ini tetap membagi 3 dan hasilnya
> salah tanpa error.

---

## Kenapa ini penting

Ini **bug yang sama bentuknya** dengan soal VERIFY di `16_Function.js`:

| Soal    | Angka ditulis mati | Akibat                       |
|---------|--------------------|------------------------------|
| VERIFY  | `harga * 20`       | parameter `persen` diabaikan |
| EXPLAIN | `jumlah / 3`       | jumlah nilai diabaikan       |

Dan yang membuat EXPLAIN lebih sulit: **kodenya masih benar** untuk 3 nilai.
Tidak ada yang menyadarinya sampai datanya berubah.

---

## Catatan penilaian

Learner menjawab ketiga-tiganya benar pada percobaan pertama, tanpa koreksi.
Nomor 3 dijawab tepat: menyebut barisnya (`const rata = jumlah / 3;`), menyebut
angka yang ditulis mati (`3`), dan menyebut akibatnya (kalau parameter jadi 4 atau 5).
