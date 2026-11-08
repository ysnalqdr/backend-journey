# JS Basics

**Status:** in progress
**Started:** 1 November 2026
**Finished:** -

## Goal

By the end of this week I can write a temperature converter (Celsius to Fahrenheit and back) and a grade calculator using only variables, conditions, and loops, without looking at any reference.

## Topics

### Day 1 - Variables and data types
- [x] `let` vs `const` vs `var`
- [x] Naming rules and camelCase
- [x] Data types: string, number, boolean, null, undefined, object, symbol, bigint
- [x] `typeof` operator
- [x] Template literals

### Day 2 - Type conversion and operators
- [x] String to number: `Number()`, `parseInt()`, `parseFloat()`
- [x] Number to string: `String()`, `.toString()`
- [x] Arithmetic: `+ - * / % **`
- [x] Assignment: `+= -= *= /=`
- [x] Comparison: `==` vs `===` (why `===` matters)
- [x] `NaN` and how to check with `Number.isNaN()`

### Day 3 - Conditions
- [x] `if` / `else if` / `else`
- [x] Ternary operator `? :`
- [x] `switch` statement
- [ ] Logical operators `&&`, `||`, `!`
- [ ] Nullish coalescing `??`
- [x] Truthy and falsy values

### Day 4 - Loops
- [ ] `for` loop
- [ ] `while` loop
- [ ] `do...while` loop
- [ ] `break` and `continue`
- [ ] Nested loops

### Day 5 - Build the project
- [ ] Temperature converter
- [ ] Grade calculator
- [ ] Number guessing game (optional)

## What I built

- `01_Variables.js` — variables, template literals, `typeof`, arithmetic
- `02_Challenge.js` — string concatenation, `typeof null`
- `03_Error.js` — reproduced a TypeError on purpose to learn how to read errors

## What I learned

- `const` cannot be reassigned, `let` can
- `${}` only works inside backticks, not single or double quotes
- `typeof null` returns `"object"` because of an old JavaScript bug
- When an error happens, JavaScript stops and the rest of the file never runs
- `node file.js` looks for the file in the current folder only, so I have to `cd` first

## What confused me

- Forgot that `${}` needs backticks, so the output printed the literal text instead of the value
- Still not sure when to use `let` vs `const` — I default to `const` now and change to `let` only when needed
- Folder names with spaces need quotes in the terminal

## Explain back

<5 baris penjelasan pakai bahasa sendiri, TANPA buka materi. Kalau tidak bisa, hari itu belum selesai.>

## Bug log

| # | Gejala | Akar masalah | Fix |
|---|---|---|---|
| 1 | | | |

## Gate Log

Setiap soal yang ditanyakan, jawaban yang diberikan, dan putusannya. Tanpa ini, gerbang tidak punya bukti.

**Aturan pencatatan:** catat **semua FAIL**. Catat PASS hanya kalau MEDIUM atau HARD. PASS di level EASY tidak memberi informasi.

| # | Level | Concept | Question | My answer | Verdict | Type | Time | Note |
|---|---|---|---|---|---|---|---|---|
| 1 | EASY | ternary | `tiket=0`, `tiket > 0 ? "Tersedia" : "Habis"` | "Habis", alasan: tiket falsy | FAIL | CONCEPT | 20s | alasan salah sasaran — yang diperiksa `tiket > 0`, bukan `tiket` |
| 2 | EASY | ternary | `stok=-3`, `stok ? "Ada" : "Tidak ada"` | "Ada", alasan: -3 truthy | PASS | — | 15s | mekanisme benar; istilah "output true" dikoreksi |
| 3 | MEDIUM | if/else if | `nilai=90`, `if (nilai > 90)` A / `else if (nilai >= 80)` B | B, alasan: 90 > 90 false → cek >= 80 true | PASS | — | 40s | urutan kondisi + beda `>` vs `>=` benar |
| 4 | EASY | ternary | `stok=5, beli=3`, `stok - beli >= 2 ? "cukup" : "kurang"` | "cukup", 2 >= 2 true | PASS | — | 30s | langkah 1 dan 2 digabung, tapi hasil & alasan benar |
| 5 | EASY | ternary | `saldo=50000`, `saldo >= 100000 ? 1 : 0` | "1", number | FAIL | READING | 25s | tidak mengevaluasi kondisi; lalu salah baca `!` yang tidak ada |
| 6 | MEDIUM | ternary | cari bug: `umur >= 17 ? "dewasa" : "anak" : "remaja"` | SyntaxError, dua titik dua | PASS | — | 45s | tidak terjebak menghitung output |
| 7 | EASY | ternary | tulis dari nol: `stok=0` → ternary `status` | kode benar, output "habis" | PASS | — | 90s | ditulis tanpa melihat contoh |
| 8 | EASY | switch | `kode="B"`, tiga case + break | "dua" | FAIL | CONCEPT | 35s | tidak menyebut `break` sebagai penyebab berhenti |
| 9 | EASY | switch | `warna="merah"`, tanpa break di case pertama | "berhenti", "lanjut" | FAIL | CONCEPT | 40s | mengira switch melakukan looping |
| 10 | EASY | switch | `hewan="kucing"`, fallthrough sampai default | "meong","moo","petok" | PASS | — | 50s | melacak fallthrough sampai `default` dengan benar |
| 11 | MEDIUM | switch | cari bug: `level="gold"`, `diskon = 20` tanpa break | "20 dan 10" | FAIL | CONCEPT | 60s | benar temukan bug & fix, tapi salah hitung output — assignment disangka print |
| 12 | EASY | assignment | `saldo` ditimpa 3×, lalu 2× console.log | 2 baris, 200000, tidak mencetak | PASS | — | 35s | paham assignment menimpa nilai lama |
| 13 | EASY | switch | `level=2` angka, fallthrough case 2 → case 3 | "menengah dan lanjut" | FAIL | CONCEPT | 55s | ULANG kesalahan #11: assignment disangka print. Juga salah: `case 2` vs `case "2"` |
| 14 | EASY | switch | `role="user"`, dua case + break | "terbatas" | FAIL | CONCEPT | 45s | output benar, tapi mekanisme tidak disebut — "switch hanya mencari user" |
| 15 | EASY | switch | `warna="hijau"`, jelaskan proses di `case "merah"` | diperiksa, tidak cocok, dilewati, lanjut | PASS | — | 40s | mekanisme lengkap: urutan, perbandingan, lewati |
| 16 | EASY | switch | `level=2` angka, telusuri `case 1` | "menengah", `2 === 1` false | PASS | — | 30s | PASS kedua berturut-turut |
| 17 | MEDIUM | switch | cari bug: `tipe="vip"`, `harga * 0.8` tanpa break | "reguler" | FAIL | CONCEPT | 70s | bug & fix benar, tapi output dijawab nama case bukan angka (72000) |
| 18 | MEDIUM | switch | cari bug laten: `tier="silver"`, `case "platinum"` tanpa break | "fitur dasar" + temukan bug laten | PASS | — | 65s | menemukan bug yang tidak muncul untuk input saat ini |
| 19 | HARD | switch + ternary | `tier="gold"` → switch, lalu label pakai ternary | "Diskon 20%", lacak nilai diskon | PASS | — | 80s | pelacakan lengkap switch → ternary |
| 20 | WRITE | switch | tulis dari nol: `status="member"` → switch 3 case + break | kode benar, output potongan = 10 | PASS | — | 150s | semua syarat terpenuhi, bonus pakai template literal |

**Level:** EASY / MEDIUM / HARD
**Verdict:** PASS / FAIL
**Type:** CONCEPT / READING / SYNTAX / LOGIC / —
**Time target:** EASY 30s / MEDIUM 2m / HARD 5m

## Deferred

Konsep yang gagal 3× dan ditunda. Sertakan soal yang mematahkannya.

| Concept | Question that broke it | Date |
|---|---|---|
| | | |

**Kosong.** `switch` sudah tuntas di keempat level pada 2026-11-08 (Gate Log #15-#20).

## Questions to revisit

- Why does `var` still exist if it has bugs?
- What is the difference between `null` and `undefined` in practice?

## Resources used

- https://javascript.info/variables
- https://javascript.info/types
- https://javascript.info/type-conversions
- https://javascript.info/operators
- https://javascript.info/comparison
- https://javascript.info/ifelse
- https://javascript.info/logical-operators
- https://javascript.info/while-for
