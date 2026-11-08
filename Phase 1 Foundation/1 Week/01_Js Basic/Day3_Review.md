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

## 5. Yang akan datang

Sisa Day 3: **`&&` `||` `!`** dan **`??` vs `||`**.

Sekilas:

```javascript
umur >= 17 && punyaTiket     // DAN — dua-duanya harus benar
punyaTiket || punyaUndangan  // ATAU — salah satu cukup
!sudahLogin                  // BUKAN — membalik

stok || 100    // 100  ← salah untuk angka
stok ?? 100    // 0    ← benar
```

Yang paling penting nanti: **short-circuit** — JavaScript berhenti kalau sudah tahu jawabannya. Itu yang mencegah error seperti `user.nama` saat `user` bernilai `null`.

---

## 6. Catatan re-check

| Konsep | Lulus | Re-check |
|---|---|---|
| Ternary | 2026-11-08 | **2026-11-10** |
| `switch` + `break` | 2026-11-08 | **2026-11-10** |

Pada 10 November, uji ulang dua konsep ini dengan **satu soal MEDIUM** masing-masing, tanpa buka materi. Kalau gagal, status turun ke 2.
