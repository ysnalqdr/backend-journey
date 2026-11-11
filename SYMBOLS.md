# SYMBOLS.md

Panduan membaca simbol JavaScript. Dibaca saat menemukan simbol yang tidak dikenal.

Kolom **Dibaca** memakai Bahasa Inggris, karena itu yang dipakai saat interview.

---

## 1. Tanda baca struktur

| Simbol | Dibaca | Fungsi | Contoh |
|---|---|---|---|
| `( )` | parentheses / "kurung biasa" | membungkus parameter, kondisi, atau mengelompokkan operasi | `if (stok > 0)`, `(2 + 3) * 4` |
| `{ }` | braces / curly brackets / "kurung kurawal" | membungkus blok kode atau object | `if (x) { }`, `const user = { nama: "Yasin" }` |
| `[ ]` | brackets / square brackets / "kurung siku" | array, atau akses elemen | `const list = [1, 2, 3]`, `list[0]` |
| `;` | semicolon / "titik koma" | mengakhiri satu perintah | `const x = 5;` |
| `,` | comma / "koma" | memisahkan item dalam daftar | `console.log(a, b, c)` |
| `.` | dot / "titik" | mengakses properti atau memanggil method | `user.nama`, `console.log` |

---

## 2. Tanda kutip

| Simbol | Dibaca | Fungsi | `${}` bekerja? |
|---|---|---|---|
| `'...'` | single quotes / "kutip tunggal" | teks | tidak |
| `"..."` | double quotes / "kutip ganda" | teks | tidak |
| `` `...` `` | backticks / "backtick" | template literal | **ya** |

```javascript
const a = 'halo';            // teks biasa
const b = "halo";            // teks biasa, sama saja
const c = `halo ${nama}`;    // template literal, bisa sisipkan variabel
```

---

## 3. Operator penugasan (assignment)

Semua simbol ini artinya **"isi dengan"**, bukan **"sama dengan"**.

| Simbol | Dibaca | Arti | Contoh | Hasil |
|---|---|---|---|---|
| `=` | equals / "sama dengan" | isi variabel | `let x = 5` | x berisi 5 |
| `+=` | plus equals | tambahkan lalu simpan | `x += 3` | sama dengan `x = x + 3` |
| `-=` | minus equals | kurangi lalu simpan | `x -= 3` | sama dengan `x = x - 3` |
| `*=` | times equals | kalikan lalu simpan | `x *= 2` | sama dengan `x = x * 2` |
| `/=` | divide equals | bagi lalu simpan | `x /= 2` | sama dengan `x = x / 2` |
| `%=` | modulo equals | sisa bagi lalu simpan | `x %= 3` | sama dengan `x = x % 3` |
| `++` | increment | tambah satu | `x++` | sama dengan `x += 1` |
| `--` | decrement | kurang satu | `x--` | sama dengan `x -= 1` |

**Penting:** `=` bukan "sama dengan". `=` artinya "isi". Untuk bertanya "sama dengan", pakai `===`.

```javascript
let x = 5;          // ISI x dengan 5
if (x === 5) { }    // TANYA: apakah x sama dengan 5?
```

---

## 4. Operator perbandingan

Semua ini menghasilkan `true` atau `false`.

| Simbol | Dibaca | Arti | Contoh | Hasil |
|---|---|---|---|---|
| `===` | triple equals / strictly equal | sama nilai **dan** tipe | `5 === 5` | `true` |
| `!==` | strictly not equal | beda nilai atau tipe | `5 !== "5"` | `true` |
| `==` | double equals / loosely equal | sama setelah konversi tipe | `5 == "5"` | `true` |
| `!=` | not equal | beda setelah konversi tipe | `5 != "5"` | `false` |
| `>` | greater than | lebih besar | `10 > 5` | `true` |
| `<` | less than | lebih kecil | `5 < 10` | `true` |
| `>=` | greater than or equal | lebih besar atau sama | `5 >= 5` | `true` |
| `<=` | less than or equal | lebih kecil atau sama | `5 <= 5` | `true` |

**Aturan: pakai `===` dan `!==`. Jangan `==` dan `!=`.**

---

## 5. Operator logika

| Simbol | Dibaca | Arti | Contoh |
|---|---|---|---|
| `&&` | AND / "dan" | benar kalau **kedua** sisi benar | `umur >= 17 && punyaTiket` |
| `\|\|` | OR / "atau" | benar kalau **salah satu** benar | `punyaTiket \|\| punyaUndangan` |
| `!` | NOT / "bukan" | membalik nilai | `!sudahLogin` |
| `??` | nullish coalescing | pakai kanan kalau kiri `null`/`undefined` | `stok ?? 0` |

### Cara membaca `!`

`!` adalah **negasi**. Ia membalik `true` jadi `false`, dan sebaliknya.

```javascript
const sudahLogin = false;

!sudahLogin        // true   ← dibaca: "bukan sudahLogin" / "belum login"
!true              // false
!false             // true
!0                 // true   ← karena 0 falsy, dibalik jadi true
!"halo"            // false  ← karena "halo" truthy, dibalik jadi false
```

**Cara membacanya dalam kalimat:**

| Kode | Dibaca |
|---|---|
| `if (!sudahLogin)` | "kalau belum login" |
| `if (!teks)` | "kalau teks kosong" |
| `if (!stok)` | "kalau stok tidak ada" ← **hindari untuk angka** |
| `if (stok !== 0)` | "kalau stok bukan nol" |

### Cara membaca `??` (nullish coalescing)

Nama lengkapnya **nullish coalescing operator**. Dibaca: **"cadangan kalau null"**.

Kata *nullish* artinya **null-ish** = mirip null. Yang termasuk cuma dua: `null` dan `undefined`.

```javascript
stok ?? 0        // dibaca: "stok, kalau null pakai 0"
nama ?? "Tamu"   // dibaca: "nama, kalau null pakai Tamu"
```

| Kode | Dibaca |
|---|---|
| `stok ?? 0` | "stok, kalau null atau undefined pakai 0" |
| `nama ?? "Tamu"` | "nama, kalau null pakai Tamu" |

**Bedanya dengan `\|\|`:** `\|\|` mengganti semua yang falsy (`0`, `""`, `false`, `NaN`). `??` hanya mengganti `null` dan `undefined`.

```javascript
const stok = 0;

stok || 100    // 100  ← stok 0 dianggap kosong, hilang
stok ?? 100    // 0    ← stok 0 dipertahankan, karena bukan null
```

**Aturan pakai:** angka dan boolean → `??`. Teks tampilan → `\|\|`.

### Cara membaca `&&` dan `\|\|`

| Kode | Dibaca |
|---|---|
| `a && b` | "a dan b" |
| `a \|\| b` | "a atau b" |
| `umur >= 17 && punyaTiket` | "umur cukup dan punya tiket" |
| `punyaTiket \|\| punyaUndangan` | "punya tiket atau punya undangan" |

Nama lengkapnya **logical AND operator** dan **logical OR operator**.

### Tabel kebenaran `&&` dan `||`

| A | B | `A && B` | `A \|\| B` |
|---|---|---|---|
| true | true | **true** | **true** |
| true | false | false | **true** |
| false | true | false | **true** |
| false | false | false | false |

---

## 6. Operator aritmatika

| Simbol | Dibaca | Arti | Contoh | Hasil |
|---|---|---|---|---|
| `+` | plus | tambah, atau gabung teks | `2 + 3` | `5` |
| `-` | minus | kurang | `5 - 2` | `3` |
| `*` | times / asterisk | kali | `4 * 3` | `12` |
| `/` | divided by / slash | bagi | `10 / 2` | `5` |
| `%` | modulo / percent sign | sisa bagi | `10 % 3` | `1` |
| `**` | exponent / power | pangkat | `2 ** 3` | `8` |

**Ingat:** `+` punya dua tugas (tambah angka atau gabung teks). `-`, `*`, `/`, `%` hanya satu tugas (hitung angka).

---

## 7. Simbol khusus

| Simbol | Dibaca | Fungsi | Contoh |
|---|---|---|---|
| `//` | comment / "komentar" | catatan, tidak dijalankan | `// ini catatan` |
| `${ }` | template placeholder | menyisipkan nilai ke teks | `` `Halo ${nama}` `` |
| `? :` | ternary / conditional | pilih satu dari dua nilai | `x > 0 ? "ya" : "tidak"` |
| `?:` | dibaca "if true then, else" | lihat contoh | — |

### Cara membaca ternary

```javascript
const status = umur >= 17 ? "dewasa" : "anak";
```

Bacanya:

```
umur >= 17  ?  "dewasa"  :  "anak"
    ↑            ↑          ↑
 kondisi      kalau true  kalau false
```

Kalimatnya: **"kalau umur lebih atau sama dengan 17, maka 'dewasa', kalau tidak maka 'anak'."**

---

## 8. Simbol yang akan datang

Belum dipelajari, tapi akan muncul. Jangan dihafal dulu.

| Simbol | Dibaca | Muncul di | Fungsi |
|---|---|---|---|
| `=>` | arrow | Week 02 | fungsi singkat |
| `...` | spread / rest | Week 04 | membuka isi array/object |
| `?.` | optional chaining | Week 04 | akses properti yang mungkin kosong |
| `??=` | nullish assignment | Week 04 | isi kalau masih kosong |

---

## Cara cepat mengingat

```
=        ISI          "x = 5"        → kotak x diisi 5
===      TANYA SAMA   "x === 5"      → apakah x berisi 5?
!        BALIK        "!x"           → kebalikan dari x
&&       DAN          "a && b"       → dua-duanya harus benar
||       ATAU         "a || b"       → salah satu benar cukup
??       CADANGAN     "a ?? b"       → pakai b kalau a kosong
+        TAMBAH/GABUNG               → hati-hati, dua tugas
```

---

## Kesalahan membaca yang paling sering

| Ditulis | Sering dibaca sebagai | Sebenarnya |
|---|---|---|
| `x = 5` | "x sama dengan 5" | "isi x dengan 5" |
| `x == 5` | "x sama dengan 5" | "apakah x sama dengan 5, setelah konversi tipe" |
| `x === 5` | "x sama dengan sama dengan 5" | "apakah x sama dengan 5, tanpa konversi" |
| `!x` | "tidak x" | "kebalikan dari x" |
| `x != y` | "x tidak sama dengan y" | "apakah x beda dengan y, setelah konversi" |
| `x !== y` | — | "apakah x beda dengan y, tanpa konversi" |
