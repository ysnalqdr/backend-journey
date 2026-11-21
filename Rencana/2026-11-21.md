# Rencana Sore/Malam 2026-11-21 dan Day 5

Ditulis 2026-11-21 siang, setelah `review-01` dan utang EXPLAIN lunas.

---

## Prinsip untuk malam ini

Aturan #33: **baca untuk menjawab satu pertanyaan, bukan untuk "memahami seluruh halaman".**

Malam ini bukan waktu menulis kode. Menulis kode butuh kepala segar, dan besok sudah
disediakan untuk itu. Malam ini hanya **menanam pertanyaan** supaya besok tidak mulai
dari nol.

Kalau malam ini dipakai menulis kode juga, besok akan terasa seperti mengulang.

---

## Sore/malam — 45 menit, tiga blok

| #   | Blok                  | Waktu  | Yang dilakukan                |
|-----|-----------------------|--------|-------------------------------|
| 1   | Baca MDN Functions    | 20 mnt | satu halaman, satu pertanyaan |
| 2   | Tonton satu video     | 15 mnt | hanya satu, bukan playlist    |
| 3   | Tulis tiga pertanyaan | 10 mnt | yang belum terjawab           |

**Kalau hanya ada 20 menit:** kerjakan blok 1 saja. Blok 2 dan 3 boleh besok.

---

### Blok 1 — MDN, satu halaman

`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Function`

**Bacanya sampai bagian mana?** Sampai "Return values". Jangan lanjut ke closure,
arrow function, atau `this`. Itu minggu lain.

**Satu pertanyaan yang harus dijawab sambil baca:**

> Kalau `return` tidak ditulis, fungsi mengembalikan apa?

Jawab di kertas. Kalau tidak ketemu, tulis "tidak ketemu" — itu juga jawaban sah.

---

### Blok 2 — satu video, bukan playlist

Batasan: **maksimal 20 menit.** Kalau videonya 3 jam, jangan ditonton.

| Sumber                                          | Kenapa                                       |
|-------------------------------------------------|----------------------------------------------|
| Web Dev Simplified — "JavaScript Functions"     | pendek, langsung ke inti, tidak bertele-tele |
| freeCodeCamp — bagian functions di kurikulum JS | ada latihan langsung, bukan cuma nonton      |
| Programming with Mosh — Functions               | penjelasan paling sabar dari ketiganya       |

Yang **tidak** dianjurkan malam ini:

- video "100 JavaScript concepts in 1 hour" — terlalu padat, tidak ada yang menempel
- livestream / playlist 40 bagian — kamu bilang sendiri tidak mau menghabiskan waktu begitu
- video yang langsung membahas arrow function dan closure — itu materi setelah fungsi dasar

---

### Blok 3 — tulis tiga pertanyaan

Setelah baca dan tonton, tulis **tiga pertanyaan** yang belum terjawab. Bukan ringkasan —
pertanyaan. Contoh bentuknya:

- "Kalau parameter tidak diisi, isinya apa?"
- "Boleh tidak satu fungsi punya dua `return`?"
- "Bedanya `return` dan `console.log` apa?"

Besok kita mulai Day 5 dengan menjawab tiga pertanyaan itu dulu. Itu lebih efektif
daripada mulai dari "apa itu fungsi".

---

## Day 5 — apa yang akan dipelajari

**Topik:** Fungsi (`function`), parameter, argumen, `return`, dan scope.

Catatan: `SKILLS.md` menaruh fungsi di minggu 2. Kamu sudah menyelesaikan loop
(minggu 4 di peta) di hari ke-4, jadi urutannya dimajukan.

### Enam level, seperti biasa

| Level   | Isi                                                     | Jumlah soal |
|---------|---------------------------------------------------------|-------------|
| EASY    | baca fungsi, tebak hasilnya                             | 3           |
| MEDIUM  | parameter, argumen, `return`                            | 3           |
| HARD    | fungsi memanggil fungsi, `return` lebih dari satu jalur | 2           |
| WRITE   | tulis fungsi dari nol                                   | 1           |
| VERIFY  | kode "dari AI", cari yang salah                         | 1           |
| EXPLAIN | komentar review untuk fungsi yang benar                 | 1           |

### Konsep yang akan dibahas, satu per satu

| #   | Konsep                    | Kenapa penting                                  |
|-----|---------------------------|-------------------------------------------------|
| 1   | Kenapa fungsi ada         | tanpa ini, fungsi terasa seperti hafalan        |
| 2   | Deklarasi fungsi          | bentuk paling dasar                             |
| 3   | Parameter vs argumen      | dua kata yang sering tertukar                   |
| 4   | `return` vs `console.log` | paling sering salah                             |
| 5   | Fungsi tanpa `return`     | mengembalikan `undefined`, bukan `0`            |
| 6   | Scope                     | variabel di dalam fungsi tidak terlihat di luar |
| 7   | Fungsi memanggil fungsi   | dasar dari semua kode nyata                     |

### Jebakan yang paling mungkin kamu temui

| Jebakan                            | Contoh                                      |
|------------------------------------|---------------------------------------------|
| lupa `return`                      | fungsi menghitung tapi hasilnya `undefined` |
| `console.log` dikira `return`      | nilai tercetak tapi tidak bisa dipakai      |
| parameter dianggap variabel global | `undefined` di luar fungsi                  |
| `return` menghentikan fungsi       | baris setelah `return` tidak jalan          |

---

## Persiapan yang perlu disiapkan

| #   | Persiapan                               | Kenapa                            |
|-----|-----------------------------------------|-----------------------------------|
| 1   | Tidak ada yang perlu dipasang           | semua sudah jalan, Node v26       |
| 2   | Siapkan satu file baru `16_Function.js` | akan dibuat saat mulai            |
| 3   | Baca ulang `04_Komentar For.md`         | contoh komentar review yang benar |
| 4   | Tiga pertanyaan dari blok 3             | dibahas pertama sebelum materi    |

Yang **tidak** perlu:

- tidak perlu baca materi minggu 2 dulu
- tidak perlu memasang apa pun
- tidak perlu menghafal sintaks `function` — akan ditulis bersama

---

## Yang tidak boleh dilakukan malam ini

| Jangan                                    | Kenapa                                           |
|-------------------------------------------|--------------------------------------------------|
| Menulis kode fungsi dulu                  | besok jadi mengulang, bukan belajar              |
| Menonton lebih dari satu video            | materi menumpuk tanpa dicerna                    |
| Membaca sampai closure dan arrow function | itu materi setelah fungsi dasar                  |
| Belajar lebih dari 60 menit               | hasilnya turun setelah itu, dan besok jadi lelah |

---

## Besok, urutan yang akan kita pakai

| #   | Blok                                 | Waktu  |
|-----|--------------------------------------|--------|
| 1   | Jawab tiga pertanyaan dari malam ini | 10 mnt |
| 2   | Re-check `review-01` (jeda 1 hari)   | 10 mnt |
| 3   | Materi konsep 1-3                    | 20 mnt |
| 4   | Soal per konsep                      | 20 mnt |
| 5   | Materi konsep 4-7                    | 20 mnt |
| 6   | Soal per konsep                      | 20 mnt |
| 7   | Gerbang EASY sampai EXPLAIN          | 60 mnt |
| 8   | Commit                               | 10 mnt |

Total sekitar 2 jam 50 menit. Boleh dipecah dua sesi.
