# Review 04 — Komentar untuk `for`

**Blok Working Skills:** `review-02` — bagian EXPLAIN, latihan ketiga
**Materi:** `for`, akumulasi
**Aturan:** README #47

---

## Kenapa latihan ini ada

Dua latihan sebelumnya melatih komentar untuk kode rusak dan kode benar. Yang ini menambah
satu hal: **menjelaskan keputusan desain**.

`total` dideklarasikan **di luar** loop. Itu keputusan, bukan kebetulan. Kalau dipindah ke
dalam, hasilnya nol. Reviewer yang baik bisa menjelaskan **kenapa** posisi itu penting,
bukan cuma menyebut "sudah benar".

---

## Aturan komentar

Tiga hal, maksimal 3 kalimat:

| #   | Yang wajib ada                                             |
|-----|------------------------------------------------------------|
| 1   | **Apa** yang dilakukan kode                                |
| 2   | **Hasil akhirnya** berapa                                  |
| 3   | **Keputusan desain** yang perlu diketahui orang berikutnya |

---

# Soal E1

```javascript
let total = 0;

for (let i = 1; i <= 5; i++) {
    total += i * i;
}
```

Kode ini **benar**.

## Yang ditanyakan

Tulis komentar review. Maksimal 3 kalimat. Wajib menyebut:

1. Apa yang dilakukan kode ini
2. Berapa `total` di akhir
3. Kenapa `total` harus dideklarasikan **di luar** loop

## Komentarku

> Kode ini menghitung `i * 5` di setiap putaran lalu mengakumulasikannya ke `total`,
> jadi hasil akhirnya `5 + 10 + 15` = **30**.
> `total` harus dideklarasikan di luar loop karena kalau ditulis di dalam, variabelnya
> dibuat baru setiap putaran sehingga nilai putaran sebelumnya ter-reset dan hanya
> putaran terakhir yang tersisa.

Dijawab 2026-11-21.


---

## Setelah menulis

Jangan jalankan dulu. Cek sendiri:

| #   | Pertanyaan                                     | Sudah? |
|-----|------------------------------------------------|--------|
| 1   | Apakah aku menyebut apa yang dilakukan?        |        |
| 2   | Apakah aku menyebut hasil akhirnya?            |        |
| 3   | Apakah aku menjelaskan kenapa `total` di luar? |        |

---

## Kunci

<details>
<summary>Buka kunci</summary>

### Jawaban yang lulus

> Kode ini menjumlahkan kuadrat 1 sampai 5, hasilnya `55` (`1+4+9+16+25`). `total` harus
> dideklarasikan di luar loop karena dia penampung: kalau ditulis di dalam, setiap putaran
> membuat variabel baru yang mulai dari `0`, sehingga yang tersisa hanya kuadrat terakhir.
> `i` boleh di dalam karena dia hanya dipakai satu putaran.

**Kenapa lulus:**

| Syarat             | Dipenuhi                       |
|--------------------|--------------------------------|
| Apa yang dilakukan | menjumlahkan kuadrat 1–5       |
| Hasil akhir        | 55                             |
| Keputusan desain   | total di luar karena penampung |

### Jawaban yang TIDAK lulus

> Kodenya benar, totalnya 55.

Kenapa gagal: menyebut hasil, tapi tidak menyebut apa pun tentang **kenapa**. Orang
berikutnya tidak tahu bahwa memindahkan `let total` akan merusak kode. Itu informasi yang
justru paling berguna.

> Sebaiknya `total` ditulis di dalam loop supaya lebih rapi.

Kenapa gagal: saran yang **merusak kode**. Ini kesalahan paling berbahaya dalam review —
komentar yang salah lebih buruk daripada tidak ada komentar.

</details>

---

## Kenapa jawaban salah lebih berbahaya daripada diam

Kalau kamu diam, penulis kode akan mencari tahu sendiri.
Kalau kamu salah, penulis kode akan **mempercayaimu** dan merusak kode yang tadinya benar.

Itu sebabnya latihan ini dinilai keras pada poin ketiga. Saran harus punya alasan, dan
alasannya harus benar.

---

## Yang dinilai

| Level | Arti                                                       |
|-------|------------------------------------------------------------|
| 0     | tidak menulis apa pun                                      |
| 1     | "sudah benar" tanpa penjelasan                             |
| 2     | menyebut hasil, tanpa keputusan desain                     |
| 3     | tiga hal lengkap                                           |
| 4     | tiga hal lengkap + menjelaskan apa yang rusak kalau diubah |

Target: **3 ke atas**.
