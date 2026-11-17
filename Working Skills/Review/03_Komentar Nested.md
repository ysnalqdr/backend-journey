# Review 03 — Komentar untuk Kode yang BENAR

**Blok Working Skills:** `review-02` — bagian EXPLAIN, latihan kedua
**Materi:** nested loop
**Aturan:** README #47

---

## Kenapa latihan ini lebih sulit dari yang sebelumnya

Review 02 melatih komentar untuk kode yang **rusak**. Itu mudah, karena ada yang jelas salah.

Latihan ini melatih komentar untuk kode yang **benar**. Dan itu justru bagian tersulit dari
review, karena:

- tidak ada bug yang bisa ditunjuk
- tidak ada yang bisa diperbaiki
- tapi kode tetap perlu **dijelaskan**, karena orang berikutnya harus memahaminya

Dan dari data Microsoft (Czerwonka, Greiler, Tilford): hanya **~15%** komentar reviewer
menunjuk defect. **≥50%** soal maintainability — keterbacaan, penamaan, struktur.

Artinya: sebagian besar pekerjaan review bukan mencari bug. Tapi memastikan kode bisa
dipahami orang lain.

---

## Aturan komentar untuk kode yang benar

Tiga hal, maksimal 3 kalimat:

| #   | Yang wajib ada                                           |
|-----|----------------------------------------------------------|
| 1   | **Apa** yang dilakukan kode ini                          |
| 2   | **Yang tidak jelas** — bagian mana yang butuh penjelasan |
| 3   | **Saran** yang konkret, kalau ada                        |

Yang **tidak** boleh:

- "kodenya bagus" — tidak memberi informasi apa pun
- "sudah benar" — sama saja tidak berkomentar
- mengomentari gaya pribadi tanpa alasan

---

# Soal E1

```javascript
const hasil = [];

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        hasil.push(i + "-" + j);
    }
}
```

Kode ini **benar**. Tidak ada bug.

## Yang ditanyakan

Tulis komentar review. Maksimal 3 kalimat. Wajib menyebut:

1. Apa yang dilakukan kode ini
2. Berapa total isi `hasil` di akhir
3. Apa yang terjadi pada `j` ketika `i` naik ke `2`

## Komentarku

>

---

## Setelah menulis

Jangan jalankan dulu. Cek sendiri:

| #   | Pertanyaan                                       | Sudah? |
|-----|--------------------------------------------------|--------|
| 1   | Apakah aku menyebut apa yang dilakukan kode ini? |        |
| 2   | Apakah aku menyebut jumlah isi array?            |        |
| 3   | Apakah aku menjelaskan kenapa `j` kembali ke 1?  |        |

---

## Kunci

<details>
<summary>Buka kunci</summary>

### Jawaban yang lulus

> Kode ini membuat semua pasangan `i-j` dari dua loop 3×3, jadi `hasil` berisi 9 elemen
> dari `"1-1"` sampai `"3-3"`. Perhatikan `let j = 1` ditulis **di dalam** loop luar:
> itu sebabnya `j` kembali ke 1 setiap kali `i` naik, dan itulah yang membuat polanya
> benar. Kalau `let j` dipindah ke luar, loop dalam hanya jalan sekali dan hasilnya
> tinggal 3 elemen.

**Kenapa lulus:**

| Syarat                | Dipenuhi                              |
|-----------------------|---------------------------------------|
| Apa yang dilakukan    | membuat semua pasangan i-j            |
| Jumlah isi            | 9 elemen                              |
| Kenapa j kembali ke 1 | karena `let j = 1` di dalam loop luar |

Dan kalimat ketiga menambahkan sesuatu yang **tidak ditanyakan tapi berguna**: apa yang
rusak kalau baris itu dipindah. Itu nilai tambah reviewer yang baik.

### Jawaban yang TIDAK lulus

> Kodenya sudah benar dan rapi, tidak ada masalah.

Kenapa gagal: tidak memberi informasi apa pun. Orang berikutnya tetap harus membaca sendiri
untuk tahu isinya berapa.

> Sebaiknya pakai `forEach` saja biar lebih modern.

Kenapa gagal: menyarankan hal yang belum diajarkan (minggu 3), tanpa alasan yang terkait
kode ini. Saran tanpa alasan bukan review, tapi selera.

</details>

---

## Yang dinilai

| Level | Arti                                                    |
|-------|---------------------------------------------------------|
| 0     | tidak menulis apa pun                                   |
| 1     | "sudah benar" tanpa penjelasan                          |
| 2     | menyebut apa yang dilakukan, tapi tidak menyebut risiko |
| 3     | tiga hal lengkap                                        |
| 4     | tiga hal lengkap + satu wawasan yang tidak ditanyakan   |

Target: **3 ke atas**.

---

## Hubungan dengan BUG_TAXONOMY

Kode ini menyentuh satu jenis bug secara tidak langsung:

> **2. Shadowing** — variabel dideklarasikan ulang di blok yang lebih dalam.

Kalau `let j` dipindah ke luar, hasilnya bukan shadowing, tapi **reset tidak terjadi**.
Bedanya tipis, dan komentar yang baik bisa menjelaskannya.

Itu sebabnya latihan ini berguna: kode yang **benar** sering dekat dengan versi yang
**salah**, dan reviewer yang baik bisa menyebutkan batasnya.
