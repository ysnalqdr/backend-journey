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
- [ ] `if` / `else if` / `else`
- [ ] Ternary operator `? :`
- [ ] `switch` statement
- [ ] Logical operators `&&`, `||`, `!`
- [ ] Nullish coalescing `??`
- [ ] Truthy and falsy values

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
