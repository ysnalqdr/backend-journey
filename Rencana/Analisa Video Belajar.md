# Analisa Video Belajar — Fokus Backend

Dibuat 2026-11-21. Kelima video dibaca transkripnya, dipetakan ke `SKILLS.md`.

---

## Ringkasan: mana yang berguna

| #   | Video                            | Durasi  | Berguna?             |
|-----|----------------------------------|---------|----------------------|
| 1   | PZN — JS Dasar                   | 8 jam   | **Ya, hampir semua** |
| 2   | Kenapa Coding — JS Modern        | 19 jam  | Ya, tapi 60% DOM     |
| 3   | Bro Code — JS Full Course        | ~6 jam  | **Tidak**            |
| 4   | SuperSimpleDev — Beginner to Pro | ~12 jam | Sebagian             |
| 5   | freeCodeCamp — JS Programming    | ~7 jam  | **Tidak**            |

**Kesimpulan:** dua video pertama yang layak. Tiga sisanya bisa dilewati.

---

## Kenapa 4 dari 5 tidak cocok

Keempatnya mengajarkan JavaScript **lewat browser**: `document.querySelector`,
`addEventListener`, `innerHTML`, `localStorage`, DOM.

Itu materi **frontend**. Di Node.js tidak ada `document`.

Yang backend-relevan dari video itu cuma bagian **bahasa**-nya — variabel, tipe,
loop, fungsi, error, async. Dan bagian itu lebih lengkap di PZN dan Kenapa Coding.

**Aturan:** kalau di transkrip muncul `document`, `addEventListener`,
`innerHTML`, `querySelector`, `localStorage`, `window.` — lewati.

---

# 1. Programmer Zaman Now — JS Dasar

`https://youtu.be/SDROba_M42g`

**Penilaian:** rujukan paling padat. Tidak ada proyek, tidak ada DOM. Materinya urut
dan setiap konsep dapat porsi sendiri. Paling cocok dengan gaya belajar kita.

## Sudah kamu kuasai — lewati

| Menit           | Materi                            |
|-----------------|-----------------------------------|
| 0:00–14:56      | Pendahuluan                       |
| 24:56           | Komentar                          |
| 30:13–51:05     | Number, Boolean, String, Variable |
| 1:12:38–1:39:20 | Operator, console                 |
| 1:46:56–1:58:36 | Template, konversi tipe           |
| 2:43:50         | If                                |
| 3:14:47–3:56:54 | Switch, typeof, ternary, falsy    |
| 4:06:20–4:20:09 | For, while, do-while, break       |

## Relevan sekarang — fungsi

| Menit       | Materi                  | Minggu |
|-------------|-------------------------|--------|
| **4:49:29** | Function                | 2      |
| **4:56:05** | Function Parameter      | 2      |
| **5:01:13** | Function Return Value   | 2      |
| **5:15:59** | Optional Parameter      | 2      |
| **5:20:10** | Default Parameter       | 2      |
| **5:51:35** | Function dalam Function | 2      |
| **5:54:50** | Scope                   | 2      |

**Tonton 4:49:29 sampai 6:06:36.** Itu 1 jam 17 menit, atau 50 menit di 1.5×.
Sudah menutup seluruh Day 5.

## Relevan nanti — jangan sekarang

| Menit   | Materi                 | Minggu |
|---------|------------------------|--------|
| 2:13:30 | Array                  | 3      |
| 2:32:02 | Object                 | 4      |
| 3:11:19 | Null                   | 3      |
| 3:24:59 | Operator `in`          | 4      |
| 3:41:43 | Optional chaining      | 4      |
| 4:32:38 | For In                 | 4      |
| 4:37:54 | For Of                 | 3      |
| 5:24:56 | Rest Parameter         | 3      |
| 5:38:12 | Function sebagai value | 5      |
| 5:44:44 | Anonymous function     | 5      |
| 6:06:36 | Recursive              | 10     |
| 6:28:17 | Arrow function         | 5      |
| 6:40:56 | Closure                | 5      |
| 6:47:49 | Object method          | 4      |
| 6:52:29 | Kata kunci `this`      | 4      |
| 7:04:10 | Getter dan setter      | 4      |
| 7:12:36 | Masalah `var`          | 4      |
| 7:18:57 | Destructuring          | 4      |

## Wajib untuk backend, belum waktunya

| Menit   | Materi      | Minggu | Kenapa                |
|---------|-------------|--------|-----------------------|
| 7:39:30 | Strict Mode | 4      | Node otomatis strict  |
| 7:46:05 | Debugger    | 4      | berhenti, lihat nilai |

## Lewati selamanya

| Menit   | Materi             | Kenapa             |
|---------|--------------------|--------------------|
| 2:55:41 | Popup              | browser saja       |
| 4:26:18 | Label              | hampir tak dipakai |
| 4:42:42 | With statement     | dilarang           |
| 6:15:34 | Function Generator | sangat jarang      |

---

# 2. Kenapa Coding — JS Modern

`https://youtu.be/mOLglF_8UNc`

**Penilaian:** materinya bagus dan ada tugas, tapi setengah video adalah DOM dan
proyek frontend. Yang berharga justru bagian akhir — dan itu bagian paling
backend-relevan dari kelima video.

## Relevan untuk backend

| Menit    | Materi             | Minggu | Kenapa         |
|----------|--------------------|--------|----------------|
| 3:21:39  | Math Object        | 2      | `Math.floor`   |
| 16:36:29 | Error Handling     | 5      | wajib produksi |
| 17:04:26 | Asynchronous JS    | 5      | inti backend   |
| 18:11:52 | Working with API   | 6      | inti backend   |
| 19:24:38 | JavaScript Modules | 7      | `require`      |

**Ini bagian yang tidak ada di PZN.** PZN 8 jam berhenti di destructuring, tidak
menyentuh async, error handling, atau module.

## Relevan untuk fungsi

| Menit   | Materi                  | Minggu |
|---------|-------------------------|--------|
| 5:41:29 | Function                | 2      |
| 6:03:42 | Tugas Function          | 2      |
| 6:04:18 | Function Expressions    | 5      |
| 6:08:16 | Arrow Function          | 5      |
| 6:16:09 | IIFE                    | 5      |
| 6:23:46 | Higher-Order & Callback | 5      |
| 6:32:35 | Recursion               | 10     |

## Lewati — semua DOM

| Menit            | Materi              |
|------------------|---------------------|
| 6:46:34–8:21:12  | DOM, Event Handling |
| 8:21:57–14:31:08 | 12 proyek DOM       |
| 18:56:48         | Weather App         |

Itu **6 jam 44 menit** yang tidak terpakai untuk backend.

## Relevan nanti

| Menit    | Materi           | Minggu |
|----------|------------------|--------|
| 3:33:12  | Date Object      | 6      |
| 14:31:08 | OOP              | 13     |
| 15:44:05 | Shopping App OOP | 13     |

---

# 3. Bro Code — JS Full Course

`https://youtu.be/lfmg-EJ8gm4`

**Penilaian: lewati.** Hampir seluruhnya DOM dan proyek browser. Yang berguna cuma
`console.log` dan `Math`, dan dua-duanya sudah kamu kuasai.

Tidak ada satu pun timestamp di video ini yang perlu ditonton sekarang.

---

# 4. SuperSimpleDev — Beginner to Pro

`https://youtu.be/EerdGm-ehJQ`

**Penilaian: tunda.** Ini yang paling mendekati backend dari tiga video besar —
deskripsinya menyebut `backend`, `callbacks`, `promises`, `async await`, dan
**250+ latihan**.

Tapi semuanya dibangun di atas proyek **amazon.com clone** (DOM). Bagian async-nya
baru berguna setelah lewat minggu 5.

**Tonton nanti** saat masuk minggu 5. Simpan linknya.

---

# 5. freeCodeCamp — JS Programming

`https://youtu.be/jS4aFq5-91M`

**Penilaian: lewati untuk sekarang.** Semua proyeknya DOM: passenger counter,
Blackjack, Chrome Extension, localStorage.

Yang relevan hanya potongan fungsi:

| Menit       | Materi                      |
|-------------|-----------------------------|
| 25:10–36:35 | Fungsi pertama              |
| 3:12:51     | Returning values            |
| 3:21:05     | `Math.random`, `Math.floor` |

Tapi semuanya dalam konteks DOM. PZN mengajarkannya lebih bersih.

---

# Peta: menit ke minggu

| Minggu | Materi                           | Sumber                      |
|--------|----------------------------------|-----------------------------|
| 2      | fungsi, parameter, return, scope | PZN 4:49–6:06               |
| 3      | array, null, for-of              | PZN 2:13, 3:11, 4:37        |
| 4      | object, `this`, strict mode      | PZN 2:32, 6:47–7:39         |
| 5      | callback, arrow, closure, async  | KC 6:23, 6:40, 16:36, 17:04 |
| 6      | API, HTTP, Date                  | KC 18:11, 3:33              |
| 7      | module, `require`                | KC 19:24                    |

---

# Yang TIDAK ADA di kelima video

Ini penting, supaya tidak mengira sudah punya semua bahan.

| Yang dibutuhkan backend           | Ada?  |
|-----------------------------------|-------|
| Node.js (`fs`, `process`, `path`) | tidak |
| HTTP method, status code, header  | tidak |
| Express, routing, middleware      | tidak |
| SQL / PostgreSQL                  | tidak |
| Testing (JUnit, Jest)             | tidak |
| Docker                            | tidak |
| Authentication, hashing           | tidak |

**Artinya:** kelima video ini hanya menutup **minggu 1–7**. Minggu 8 ke atas butuh
sumber lain — akan kucari saat waktunya tiba.

---

# Urutan tonton

| #   | Kapan    | Tonton                        | Durasi      |
|-----|----------|-------------------------------|-------------|
| 1   | besok    | PZN 4:49:29–6:06:36           | 50m di 1.5x |
| 2   | minggu 3 | PZN 2:13:30, 4:37:54          | 20m         |
| 3   | minggu 4 | PZN 2:32:02, 6:47:49, 7:39:30 | 40m         |
| 4   | minggu 5 | KC 6:23, 6:40, 16:36, 17:04   | 1j          |
| 5   | minggu 6 | KC 18:11:52                   | 30m         |
| 6   | minggu 7 | KC 19:24:38                   | 25m         |

**Total sampai minggu 7: sekitar 3 jam 50 menit.** Dari 5 video yang totalnya 52 jam.

---

# Aturan menonton

| #   | Aturan                               | Kenapa                             |
|-----|--------------------------------------|------------------------------------|
| 1   | Satu bagian per sesi                 | 8 jam sekali duduk tidak menempel  |
| 2   | 1.5x setelah 10 menit pertama        | pembicara lebih lambat dari bacamu |
| 3   | Jangan mencatat sambil nonton        | dua-duanya gagal                   |
| 4   | Setelah nonton, tulis satu kalimat   | tanpa ini cuma merasa paham        |
| 5   | Ada `document` / `innerHTML`? lewati | itu frontend                       |
| 6   | Video tidak menggantikan soal        | input tanpa latihan hilang 2 hari  |
