# Apakah Video 2021–2024 Masih Relevan di 2026?

Dibuat 2026-11-22. Hasil riset, bukan dugaan.

---

## Jawaban singkat

**Ya, untuk bagian dasar — dan justru bagian dasar itulah yang kamu pelajari sekarang.**

Yang berubah sejak 2021–2024 adalah **permukaan**: API baru, tool baru.
Yang tidak berubah adalah **cara berpikir**: variabel, tipe, kondisi, loop, fungsi,
scope, `return`.

Tapi ada **tiga hal** dari video-video itu yang sekarang sudah usang, dan satu di
antaranya bisa membuatmu belajar kebiasaan yang salah.

---

## Kenapa dasarnya tetap sama

JavaScript punya standar bernama **ECMAScript**, dikelola **TC39**. Perubahannya
bertahap: setiap tahun menambah beberapa fitur, **tidak pernah menghapus**.

Artinya: `for` loop yang ditulis tahun 2015 **masih jalan persis sama** di 2026.
Kalau bahasa berubah total setiap 2 tahun, jutaan situs akan mati.

Yang perlu kamu tahu: **tidak satu pun** dari `let`, `const`, `if`, `for`,
`while`, `function`, `return`, `scope` berubah sejak 2015.

---

## Yang BARU di JavaScript

### ES2025 — resmi Juni 2025

| Fitur                    | Backend?    | Kapan    |
|--------------------------|-------------|----------|
| Set methods              | berguna     | minggu 3 |
| Iterator Helpers         | berguna     | minggu 3 |
| `Promise.try()`          | **berguna** | minggu 5 |
| Import Attributes        | berguna     | minggu 7 |
| `RegExp.escape()`        | kadang      | validasi |
| `Float16Array`           | tidak       | grafis   |
| Duplicate capture groups | tidak       | regex    |

### ES2026 — resmi 30 Juni 2026

| Fitur                   | Backend? | Kenapa                         |
|-------------------------|----------|--------------------------------|
| `Error.isError()`       | **ya**   | `instanceof Error` bisa bohong |
| `Array.fromAsync()`     | **ya**   | kumpulkan async iterator       |
| `Map.getOrInsert()`     | **ya**   | pola cache                     |
| `JSON.rawJSON()`        | **ya**   | BigInt lewat JSON              |
| `Uint8Array.toBase64()` | **ya**   | token, hash, upload            |
| `Math.sumPrecise()`     | kadang   | uang: `1e17+1-1e17` jadi 0     |
| `Iterator.concat()`     | kadang   | gabung dua sumber              |

### Yang BELUM jadi — 2027

| Fitur                       | Kenapa penting                      |
|-----------------------------|-------------------------------------|
| **Temporal**                | pengganti `Date` yang rusak         |
| **`using` / `await using`** | resource otomatis, untuk koneksi DB |
| Decorators                  | dipakai Spring, bukan JS murni      |

**Penting:** banyak artikel 2025 menulis "Temporal masuk ES2026". Itu **salah**.
Temporal baru masuk **2027**.

---

## Yang BERUBAH di Node.js — ini yang paling berdampak

Bagian ini **tidak ada di kelima video**, karena semuanya dibuat sebelum perubahan ini.

| Dulu install | Sekarang bawaan   | Dampak                    |
|--------------|-------------------|---------------------------|
| `node-fetch` | `fetch`           | panggil API tanpa install |
| `nodemon`    | `node --watch`    | restart otomatis          |
| `dotenv`     | `node --env-file` | baca `.env` tanpa package |
| `ts-node`    | `--strip-types`   | jalankan `.ts` langsung   |
| `jest`       | `node:test`       | test bawaan, ada coverage |
| —            | Permission Model  | batasi akses file         |

**Kenapa penting:** kelima video mengajarkan JS di **browser**. Tidak satu pun
mengajarkan bahwa Node sekarang punya `fetch`, `node:test`, dan `--watch` bawaan.
Kalau kamu menonton video 2021 lalu mengikuti semua yang dia install, kamu akan
memasang 5 package yang sekarang tidak perlu.

**Ini bukan alasan melewati videonya.** Tapi ini alasan membaca dokumentasi Node
saat masuk minggu 7.

---

## Tiga hal yang SUDAH USANG

| #   | Yang diajarkan           | Kenapa usang    | Yang benar     |
|-----|--------------------------|-----------------|----------------|
| 1   | `var` biasa              | bug hoisting    | `const`, `let` |
| 2   | `alert`, `prompt`        | tak ada di Node | `console.log`  |
| 3   | `document.querySelector` | tak ada di Node | tidak dipakai  |

Dan satu yang **berbahaya** kalau ditiru:

| Yang berbahaya            | Kenapa                 |
|---------------------------|------------------------|
| Kode tanpa `"use strict"` | Node otomatis strict   |
| Mengandalkan `==`         | backend wajib `===`    |
| Callback bertingkat       | sekarang `async/await` |

---

## Yang TIDAK berubah sama sekali

Ini 90% dari yang kamu pelajari sekarang:

| Konsep                              | Berubah?           |
|-------------------------------------|--------------------|
| `let`, `const`                      | tidak              |
| tipe data, `typeof`                 | tidak              |
| `if`, `else`, `switch`              | tidak              |
| `for`, `while`, `do-while`          | tidak              |
| `break`, `continue`, nested         | tidak              |
| **`function`, parameter, `return`** | **tidak**          |
| **scope**                           | **tidak**          |
| `try` / `catch`                     | tidak              |
| `async` / `await`                   | tidak (sejak 2017) |

**Kesimpulan:** Day 5 besok mengajarkan fungsi. Materi fungsi di video 2021 dan di
2026 **identik**.

---

## Risiko sebenarnya bukan "materi usang"

Risikonya ada dua, dan keduanya bukan soal tahun:

| Risiko                          | Penjelasan                   |
|---------------------------------|------------------------------|
| 1. Video mengajarkan frontend   | 4 dari 5 mayoritas DOM       |
| 2. Video mengajarkan tool usang | install hal yang kini bawaan |

Risiko pertama sudah ditangani di `Analisa Video Belajar.md`.
Risiko kedua ditangani di tabel Node.js di atas.

---

## Rekomendasi

| #   | Rekomendasi                         | Alasan                      |
|-----|-------------------------------------|-----------------------------|
| 1   | Tetap tonton PZN 4:49:29–6:06:36    | materi fungsi tak berubah   |
| 2   | Baca dokumentasi Node saat minggu 7 | di situ perubahan 2024–2026 |
| 3   | Jangan install apa pun dari video   | Node 26 sudah punya         |
| 4   | Cek tahun artikel sebelum percaya   | banyak salah soal Temporal  |
| 5   | Sumber utama tetap MDN              | selalu diperbarui           |

---

## Sumber yang dipakai

| Sumber                                             | Isi                       |
|----------------------------------------------------|---------------------------|
| `pawelgrzybek.com/whats-new-in-ecmascript-2025/`   | ES2025, 8 fitur           |
| `blog.openreplay.com/whats-new-ecmascript-2026/`   | ES2026, koreksi Temporal  |
| `w3schools.com/js/js_2025.asp`                     | daftar fitur ES2025       |
| `stacknotice.com/blog/nodejs-modern-features-2026` | Node gantikan npm         |
| `blog.thecodingant.in/node-js-in-2026...`          | Node 24/26, permission    |
| `tc39.es/ecma262/`                                 | spesifikasi resmi         |
| `github.com/tc39/proposals`                        | proposal dan tahun terbit |
