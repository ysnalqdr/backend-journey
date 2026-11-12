# Day 2.5 — Repair Day

Bukan hari baru. Ini penambalan tiga lubang di Day 2 yang membuat Day 3 macet.

**Waktu:** 90–120 menit. **Tanpa AI.** **Tanpa buka catatan lama.**
**Lulus 2 dari 3 lubang → lanjut Day 3. Gagal → ulangi lubang yang gagal besok.**

Satu aturan sepanjang hari ini: **jangan hapus kode yang salah.** Komentari dan tulis alasannya.

---

# LUBANG 1 — Tipe data menentukan perilaku, bukan isi yang terlihat

## Kenapa ini lubang

Saat kamu menulis `const nilai = "90"`, kamu melihat `90`. Tapi JavaScript melihat **teks**, bukan angka. Dan teks dibandingkan **huruf per huruf**, dari kiri ke kanan — seperti urutan di kamus.

## Jalankan ini, jangan ditebak

Buat file `00_Repair_Types.js` di folder `Exercises/`. Ketik sendiri, jalankan, lalu **catat output-nya di komentar**.

```javascript
// Bagian A - perbandingan angka vs teks
console.log(90 < 100);          // ?
console.log("90" < "100");      // ?
console.log("90" < 100);        // ?
console.log("9" < "60");        // ?
console.log("2" > "10");        // ?

// Bagian B - apa yang terjadi saat dicetak
console.log(90);
console.log("90");
console.log(typeof 90);
console.log(typeof "90");

// Bagian C - kapan teks berubah jadi angka
console.log("90" * 1);
console.log("90" + 0);
console.log("90" - 0);
```

## Cara membaca hasilnya

**`90 < 100`**
- Hasil: `true`
- Kenapa: dua angka, dibandingkan sebagai nilai

**`"90" < "100"`**
- Hasil: `false`
- Kenapa: dua teks, dibandingkan huruf per huruf: `"9"` vs `"1"` — `9` lebih besar

**`"90" < 100`**
- Hasil: `true`
- Kenapa: teks diubah jadi angka dulu karena pasangannya angka

**`"9" < "60"`**
- Hasil: `false`
- Kenapa: teks vs teks → `"9"` vs `"6"` → `9` lebih besar

**`"2" > "10"`**
- Hasil: `true`
- Kenapa: teks vs teks → `"2"` vs `"1"` → `2` lebih besar


**Ini sebabnya penilaian mahasiswa bisa rusak:** nilai `"90"` dapat D, nilai `"100"` dapat A. Tidak ada error. Aplikasi jalan. Datanya salah.

## Tes lulus lubang 1

Tanpa buka catatan, jawab di `Catatan.md` bagian `## Explain back`:

1. Kenapa `"90" < "100"` hasilnya `false` padahal 90 memang lebih kecil dari 100?
2. Kalau data dari form selalu berupa teks, apa yang harus kamu lakukan **sebelum** membandingkannya?

---

# LUBANG 2 — `==` mengubah tipe, `===` tidak

## Kenapa ini lubang

`==` mencoba "membantu" dengan mengubah tipe dulu supaya bisa dibandingkan. Niatnya baik, hasilnya bencana: banyak pasangan yang **terlihat berbeda** malah dianggap sama.

## Jalankan

```javascript
// Bagian A - pasangan yang dianggap sama oleh ==
console.log(0 == "");           // ?
console.log(0 === "");          // ?
console.log(false == 0);        // ?
console.log(false === 0);       // ?
console.log(null == undefined); // ?
console.log(null === undefined);// ?
console.log("5" == 5);          // ?
console.log("5" === 5);         // ?

// Bagian B - yang tidak pernah sama, bahkan dengan ==
console.log(NaN == NaN);        // ?
console.log(Number.isNaN(NaN)); // ?
```
## Yang harus kamu lihat

`==` menghasilkan `true` untuk pasangan yang **berbeda tipe**. `===` menolak semua yang tipenya beda, tanpa mencoba menolong.

| Ekspresi              | `==`   | `===`   |
|-----------------------|--------|---------|
| `0` vs `""`           | `true` | `false` |
| `false` vs `0`        | `true` | `false` |
| `null` vs `undefined` | `true` | `false` |
| `"5"` vs `5`          | `true` | `false` |

**Aturan: selalu `===`.** Bukan karena `==` "salah", tapi karena `==` menebak maksudmu, dan tebakan yang salah lebih mahal daripada penolakan yang benar.

## Tes lulus lubang 2

Tanpa buka catatan:

1. Sebutkan 2 pasangan yang `==` bilang `true` tapi `===` bilang `false`.
2. Kenapa `NaN == NaN` hasilnya `false`, dan bagaimana cara mengecek NaN dengan benar?

---

# LUBANG 3 — Untuk angka, jangan pakai truthy/falsy

## Kenapa ini lubang

`0` itu falsy. Tapi `0` adalah **nilai yang sah** untuk stok, saldo, diskon, jumlah tiket, dan banyak hal lain di sistem nyata.

Kalau kamu menulis `if (stok)`, kamu tidak sedang bertanya "apakah stok habis" — kamu bertanya "apakah stok ada isinya". Dua pertanyaan berbeda, dan yang pertama yang kamu maksud.

## Jalankan

```javascript
// Bagian A - 0 diperlakukan sebagai "tidak ada"
const stok = 0;
console.log(Boolean(stok));         // ?
if (stok) {
  console.log("Tiket tersedia");    // jalan atau tidak?
} else {
  console.log("Tiket habis");
}

// Bagian B - masalah sebenarnya: 0 dan undefined tidak bisa dibedakan
const saldoA = 0;                   // saldo nol rupiah (data sah)
const saldoB = undefined;           // saldo belum pernah diisi (data tidak ada)

if (!saldoA) console.log("A dianggap kosong");
if (!saldoB) console.log("B dianggap kosong");
// Dua-duanya masuk ke cabang yang sama, padahal artinya beda

// Bagian C - cara yang benar
if (stok > 0) console.log("C: tersedia");
if (stok === 0) console.log("C: habis");
if (saldoA !== undefined) console.log("C: saldo diketahui");
```

## Cara berpikirnya

| Yang kamu mau tahu   | Jangan tulis | Tulis                                                     |
|----------------------|--------------|-----------------------------------------------------------|
| stok masih ada?      | `if (stok)`  | `if (stok > 0)`                                           |
| stok habis?          | `if (!stok)` | `if (stok === 0)`                                         |
| data ada atau tidak? | `if (nilai)` | `if (nilai !== undefined)` atau `??`                      |
| teks kosong?         | —            | `if (!teks)` ← ini boleh, karena `""` memang tidak berisi |

Untuk **teks dan object**, truthy/falsy aman. Untuk **angka**, selalu bandingkan eksplisit.

## Tes lulus lubang 3

Tulis ulang tiga kondisi ini dengan benar, tanpa melihat contoh di atas:

```javascript
// 1. kalau stok habis, cetak "Habis"
// 2. kalau saldo nol, cetak "Saldo kosong"
// 3. kalau diskon 0 persen, cetak "Tanpa diskon"
```

---

# Gerbang Day 2.5

Lulus kalau **2 dari 3** tes di atas benar tanpa buka catatan.

| Hasil        | Tindakan                                                                          |
|--------------|-----------------------------------------------------------------------------------|
| 3/3          | Lanjut Day 3 hari ini juga. Fondasi sudah rapat                                   |
| 2/3          | Lanjut Day 3, tapi ulangi lubang yang gagal besok pagi (15 menit)                 |
| 1/3 atau 0/3 | Ulangi Day 2.5 besok. Tulis di `Catatan.md` bagian mana yang paling membingungkan |

Setelah lulus, tulis di `Catatan.md`:

```markdown
## Explain back

Hari ini saya memperbaiki tiga hal di Day 2:
1. <penjelasan lubang 1 pakai bahasa sendiri>
2. <penjelasan lubang 2>
3. <penjelasan lubang 3>
```

Kalau tiga baris itu terasa sulit ditulis, berarti gerbangnya belum lulus — walaupun tes tertulisnya benar. Menulis dengan bahasa sendiri adalah tes terakhir.

---

# Setelah Day 2.5

Baru kembali ke `06_Conditions.js` dengan materi Day 3 yang sudah ada. Kamu akan menemukan Day 3 terasa jauh lebih ringan, karena percabangan itu mudah — yang sulit cuma tipe data di dalamnya.

**Yang tidak boleh dilakukan:** melompat ke `07_Challenge.js` sebelum `06_Conditions.js` jalan dan gerbang Day 3 lulus.
