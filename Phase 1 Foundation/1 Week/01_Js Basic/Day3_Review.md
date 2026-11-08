# Day 3 Review — Conditions

Bahan bacaan santai. Tidak perlu dikerjakan sekaligus.
Baca satu bagian, tutup, coba jelaskan ulang dengan kata sendiri.

---

## 1. Yang sudah kamu kuasai

| Konsep | Bukti |
|---|---|
| `if` / `else if` / `else` + urutan kondisi | Gate Log #3 |
| Ternary `? :` | Gate Log #2, #4, #6, #7 |
| `switch` + `break` | Gate Log #15–#20, semua level |
| Truthy / falsy untuk angka | Day 2.5, 3/3 |
| Assignment vs output | Gate Log #12, #16, #19 |

---

## 2. Enam jebakan yang kamu alami sendiri

Ini bukan teori. Ini kesalahan nyata yang kamu buat — dan sudah dikoreksi.

### Jebakan 1 — Yang diperiksa itu hasil perbandingan, bukan nilai variabel

```javascript
const tiket = 0;
console.log(tiket > 0 ? "Tersedia" : "Habis");
```

**Salah kira:** "karena `tiket` falsy".
**Benar:** yang diperiksa `tiket > 0`. Hasilnya `false`, jadi ambil `"Habis"`.

**Uji cepat:** kalau `tiket = -5`, `-5` itu **truthy**, tapi `-5 > 0` tetap `false`. Output tetap `"Habis"`.

---

### Jebakan 2 — `=` menugaskan, `console.log` mencetak

```javascript
let diskon = 0;
diskon = 20;          // ← tidak mencetak apa pun
console.log(diskon);  // ← ini yang mencetak: 20
```

**Cara cepat:** hitung jumlah `console.log`. Itu jumlah baris output.

---

### Jebakan 3 — Nama `case` itu label, bukan data

```javascript
case "reguler":
  harga = 80000 * 0.9;
```

Yang tercetak adalah **nilai variabel** (`72000`), bukan nama `case` (`"reguler"`).

---

### Jebakan 4 — `switch` tidak looping

`switch` berjalan **sekali**, dari atas ke bawah, lalu selesai.
Fallthrough hanya ke **bawah**, tidak pernah kembali ke atas.

---

### Jebakan 5 — Cocok ≠ berhenti

```javascript
case "admin":
  console.log("A");     // ← tanpa break
case "user":
  console.log("U");     // ← ikut jalan
  break;
```

Output: `A` lalu `U`.

**Yang menghentikan adalah `break`**, bukan kecocokan `case`.

---

### Jebakan 6 — `case 2` berbeda dari `case "2"`

`switch` membandingkan dengan `===`, jadi tipe harus sama.

| `level` | `case 2` cocok? |
|---|---|
| `2` (number) | ✅ |
| `"2"` (string) | ❌ |

Ini penting di backend: data dari form selalu **string**.

---

## 3. Referensi cepat

### Ternary

```javascript
kondisi ? nilaiKalauTrue : nilaiKalauFalse
```

- Tepat **satu** `?` dan **satu** `:`
- Mengembalikan nilai apa pun — string, number, boolean
- Maksimal satu tingkat; lebih dari itu pakai `if/else`

### `switch`

```javascript
switch (variabel) {
  case "nilai":
    // jalan kalau === cocok
    break;              // WAJIB
  default:
    // kalau tidak ada yang cocok
}
```

- Bandingkan dengan `===`, tipe harus sama
- Tanpa `break` → fallthrough ke `case` bawah
- `break` di `case` terakhir tidak berpengaruh

### Urutan `else if`

Urutkan dari **paling ketat** ke **paling longgar**:

```javascript
if (nilai >= 90)      { }   // dulu
else if (nilai >= 80) { }   // baru
else if (nilai >= 70) { }   // terakhir
```

Kalau dibalik, kondisi longgar menang duluan dan sisanya tidak pernah jalan.

---

## 4. Tiga pertanyaan untuk menguji diri

Jawab tanpa buka bagian di atas.

**Q1.** Kenapa kode ini mencetak `"Habis"` walaupun `stok` bernilai `-5`?

```javascript
const stok = -5;
console.log(stok > 0 ? "Tersedia" : "Habis");
```

**Q2.** Ada bug di mana? Untuk input mana bug ini muncul?

```javascript
const tier = "platinum";
let benefit = "";

switch (tier) {
  case "platinum":
    benefit = "semua";
  case "gold":
    benefit = "premium";
    break;
}
console.log(benefit);
```

**Q3.** Berapa baris yang tercetak, dan apa isinya?

```javascript
let a = 1;
console.log(a);
a = 2;
console.log(a);
a = 3;
```

<details>
<summary>Jawaban (buka setelah mencoba)</summary>

**Q1.** Yang diperiksa `stok > 0`, bukan `stok`. `-5 > 0` hasilnya `false`, jadi ambil `"Habis"`. Walaupun `-5` itu truthy, ia tidak lebih besar dari nol.

**Q2.** `case "platinum"` tidak punya `break`. Untuk `tier = "platinum"`, `benefit` jadi `"semua"`, lalu jatuh ke `case "gold"` dan **ditimpa** jadi `"premium"`. User platinum rugi. Bug ini **tidak muncul** kalau `tier = "gold"`.

**Q3.** Dua baris: `1` dan `2`. `a = 3` tidak mencetak karena tidak ada `console.log` setelahnya.

</details>

---

## 5. Materi berikutnya — `&&` `||` `!` dan short-circuit

### Tiga operator

```javascript
umur >= 17 && punyaTiket      // DAN
punyaTiket || punyaUndangan   // ATAU
!sudahLogin                   // BUKAN
```

| Operator | Dibaca | Hasilnya benar kalau |
|---|---|---|
| `&&` | dan | **kedua** sisi benar |
| `\|\|` | atau | **salah satu** benar |
| `!` | bukan | membalik nilainya |

### Tabel kebenaran

| A | B | `A && B` | `A \|\| B` |
|---|---|---|---|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

### `!` membalik apa pun

```javascript
!true       // false
!false      // true
!0          // true    karena 0 falsy, dibalik jadi true
!"halo"     // false   karena teks berisi itu truthy, dibalik jadi false
```

### Short-circuit — bagian yang paling penting

JavaScript itu malas. Kalau sudah tahu jawabannya, ia berhenti dan **tidak memeriksa sisanya**.

```javascript
false && apaPun     // false, sisi kanan TIDAK dijalankan
true  || apaPun     // true,  sisi kanan TIDAK dijalankan
```

Kenapa `&&` berhenti di kiri yang false: karena kalau satu sisi sudah false, hasilnya pasti false. Tidak perlu memeriksa kanan.

Kenapa `||` berhenti di kiri yang true: karena kalau satu sisi sudah true, hasilnya pasti true. Tidak perlu memeriksa kanan.

### Kegunaan nyata: mencegah error

Ini alasan short-circuit penting.

```javascript
const user = null;

if (user.nama === "Yasin") { }
```

Kalau dijalankan, hasilnya:

```
TypeError: Cannot read properties of null (reading 'nama')
```

Karena `user` itu `null`, tidak punya properti `nama`.

Sekarang tambahkan `&&` di depan:

```javascript
if (user && user.nama === "Yasin") { }
```

Alurnya:

```
user = null
  ↓
null && ...          && periksa kiri dulu
  ↓
null itu falsy → BERHENTI, hasilnya null
  ↓
user.nama TIDAK PERNAH dijalankan → tidak error
```

Kode kedua tidak error. Bukan karena `null` diubah jadi sesuatu, tapi karena **sisi kanan tidak pernah dieksekusi**.

### Kenapa ini dipakai setiap hari di backend

Hampir semua validasi request bentuknya begini:

```javascript
if (req.body && req.body.user && req.body.user.id) {
  // baru proses
}
```

Kalau salah satu kosong, pengecekan berhenti di situ. Tidak ada error, dan yang diproses hanya data yang lengkap.

### Pola lain: `&&` untuk menjalankan sesuatu bersyarat

```javascript
const isAdmin = true;
isAdmin && console.log("Tampilkan menu admin");
```

Kalau `isAdmin` false, sisi kanan tidak jalan. Ini singkatan dari:

```javascript
if (isAdmin) {
  console.log("Tampilkan menu admin");
}
```

Tapi hanya cocok untuk satu baris. Lebih dari itu, pakai `if` biasa.

### Dua jebakan yang sering terjadi

**Jebakan 1 — `&&` mengembalikan nilai, bukan selalu boolean**

```javascript
console.log(5 && 10);        // 10
console.log(0 && 10);        // 0
console.log("a" || "b");     // "a"
console.log(null || "b");    // "b"
```

`&&` mengembalikan sisi **kanan** kalau kiri truthy, dan sisi **kiri** kalau kiri falsy.

`||` mengembalikan sisi **kiri** kalau kiri truthy, dan sisi **kanan** kalau kiri falsy.

Ini bukan bug — ini cara kerjanya. Tapi kalau kamu mengira hasilnya selalu `true` atau `false`, kamu akan bingung.

**Jebakan 2 — jangan pakai `||` untuk angka**

```javascript
const stok = 0;
const stokTampil = stok || 100;   // 100  ← salah, stok jadi hilang
```

Karena `0` itu falsy, `||` menggantinya dengan `100`. Padahal stok `0` itu informasi yang sah.

Untuk angka, pakai `??` — yang akan dibahas setelah ini.

### Tiga pertanyaan untuk menguji diri

Jawab tanpa buka bagian di atas.

**Q1.** Apa yang tercetak, dan kenapa?

```javascript
const stok = 0;
const sudahLogin = true;

console.log(stok > 0 && sudahLogin);
console.log(stok > 0 || sudahLogin);
console.log(!sudahLogin);
```

**Q2.** Kenapa baris kedua tidak error padahal `user` bernilai `null`?

```javascript
const user = null;

console.log(user.nama);
console.log(user && user.nama);
```

**Q3.** Apa yang tercetak?

```javascript
console.log(0 && "halo");
console.log("halo" && "dunia");
console.log(null || "cadangan");
```

<details>
<summary>Jawaban</summary>

**Q1.** `false`, `true`, `false`.
`stok > 0` adalah `0 > 0` → `false`. Lalu `false && true` → `false`, dan `false || true` → `true`. `!true` → `false`.

**Q2.** Baris pertama **error**, bukan tidak error. `user` itu `null`, jadi `user.nama` melempar `TypeError`. Baris kedua **aman**, karena `null` itu falsy sehingga `&&` berhenti di kiri dan `user.nama` tidak pernah dijalankan.

**Q3.** `0`, `"dunia"`, `"cadangan"`.
`0` itu falsy, jadi `&&` mengembalikan sisi kiri: `0`. `"halo"` truthy, jadi `&&` mengembalikan sisi kanan: `"dunia"`. `null` falsy, jadi `||` mengembalikan sisi kanan: `"cadangan"`.

</details>

---

## 6. Catatan re-check

| Konsep | Lulus | Re-check |
|---|---|---|
| Ternary | 2026-11-08 | **2026-11-10** |
| `switch` + `break` | 2026-11-08 | **2026-11-10** |

Pada 10 November, uji ulang dua konsep ini dengan **satu soal MEDIUM** masing-masing, tanpa buka materi. Kalau gagal, status turun ke 2.
