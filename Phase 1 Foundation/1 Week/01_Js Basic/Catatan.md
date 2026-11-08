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
- [ ] String to number: `Number()`, `parseInt()`, `parseFloat()`
- [ ] Number to string: `String()`, `.toString()`
- [ ] Arithmetic: `+ - * / % **`
- [ ] Assignment: `+= -= *= /=`
- [ ] Comparison: `==` vs `===` (why `===` matters)
- [ ] `NaN` and how to check with `Number.isNaN()`

### Day 3 - Conditions
- [x] `if` / `else if` / `else`
- [ ] Ternary operator `? :`
- [ ] `switch` statement
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

**Level:** EASY / MEDIUM / HARD
**Verdict:** PASS / FAIL
**Type:** CONCEPT / READING / SYNTAX / LOGIC / —
**Time target:** EASY 30s / MEDIUM 2m / HARD 5m

## Deferred

Konsep yang gagal 3× dan ditunda. Sertakan soal yang mematahkannya.

| Concept | Question that broke it | Date |
|---|---|---|
| | | |

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
