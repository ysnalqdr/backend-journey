# Day 4 Review — Loops

Bahan bacaan + latihan. Sumber: javascript.info/while-for, MDN Loops and iteration.

Cara pakai: baca satu bagian, tutup, jelaskan ulang dengan kata sendiri. Soal di bagian akhir dikerjakan tanpa buka materi.

---

# Bagian 1 — Kenapa loop ada

Tanpa loop, mencetak angka 1 sampai 100 butuh 100 baris `console.log`.

```javascript
console.log(1);
console.log(2);
// ... 98 baris lagi
console.log(100);
```

Dengan loop, satu baris:

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

Loop adalah cara mengatakan **"lakukan ini berulang, sampai suatu kondisi berhenti"**.

Tiga hal yang selalu ada di setiap loop:

| Bagian        | Pertanyaan                       |
|---------------|----------------------------------|
| **Awal**      | dari mana mulai?                 |
| **Kondisi**   | sampai kapan lanjut?             |
| **Perubahan** | apa yang berubah setiap putaran? |

Kalau salah satu hilang, loop tidak berhenti. Itu bukan bug kecil — itu program yang menggantung.

---

# Bagian 2 — `for` loop

## Nama dan bentuk

`for` dibaca **"untuk"**. Nama lengkapnya **for statement**.

```javascript
for (awal; kondisi; perubahan) {
    // badan loop
}
```

Tiga bagian dipisah **titik koma** `;` — bukan koma.

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

| Bagian      | Isi              | Kapan dijalankan                              |
|-------------|------------------|-----------------------------------------------|
| `awal`      | `let i = 0`      | **sekali**, sebelum loop mulai                |
| `kondisi`   | `i < 3`          | **sebelum setiap** putaran                    |
| `badan`     | `console.log(i)` | kalau kondisi `true`                          |
| `perubahan` | `i++`            | **setelah** badan, sebelum kondisi berikutnya |

## Urutan eksekusi

MDN menyebutnya lima langkah:

```
1. awal          dijalankan sekali
2. kondisi       diperiksa
3. kalau true → badan dijalankan
4. perubahan     dijalankan
5. kembali ke langkah 2
```

Kalau kondisi `false`, loop berhenti dan program lanjut ke baris setelah loop.

## Trace manual

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

| Putaran | `i` sebelum cek | `i < 3`?  | Yang tercetak | `i` setelah `i++` |
|---------|-----------------|-----------|---------------|-------------------|
| 1       | `0`             | true      | `0`           | `1`               |
| 2       | `1`             | true      | `1`           | `2`               |
| 3       | `2`             | true      | `2`           | `3`               |
| 4       | `3`             | **false** | —             | loop berhenti     |

Output: `0`, `1`, `2`. **Bukan** `0 1 2 3`.

Angka `3` tidak pernah tercetak karena kondisi diperiksa **sebelum** badan.

## `<=` vs `<` — sumber bug paling umum

```javascript
// mencetak 0,1,2  (3 putaran)
for (let i = 0; i < 3; i++) { }

// mencetak 0,1,2,3  (4 putaran)
for (let i = 0; i <= 3; i++) { }
```

Satu karakter, satu putaran lebih. Ini namanya **off-by-one error** — kesalahan paling sering di loop, dan penyebab paling umum array keluar batas.

Aturan praktis:

```
mulai dari 0, mau N kali  →  i < N
mulai dari 1, mau sampai N  →  i <= N
```

## Variabel `i` hanya hidup di dalam loop

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);      // ReferenceError: i is not defined
```

Kalau butuh `i` setelah loop, deklarasikan di luar:

```javascript
let i;

for (i = 0; i < 3; i++) {
    // ...
}

console.log(i);      // 3
```

## Bagian yang boleh dikosongkan

Ketiga bagian boleh kosong, **asal titik koma tetap ada**.

```javascript
for (;;) { }              // loop tanpa henti
```

Ini sama dengan `while (true)`. Berguna kalau kondisi harus diperiksa di tengah badan, bukan di awal.

## Arah mundur

```javascript
for (let i = 3; i > 0; i--) {
    console.log(i);
}
```

Output: `3`, `2`, `1`.

Perhatikan: kondisinya `i > 0`, bukan `i >= 0`. Kalau `>=`, akan tercetak `0` juga, lalu `-1`, `-2` — karena `-1 > 0` itu `false` tapi `-1 >= 0` juga `false`. Yang benar-benar bahaya adalah salah arah perubahan:

```javascript
for (let i = 3; i > 0; i++) {     // ← i NAIK padahal mau turun
    console.log(i);
}
```

Kondisi `i > 0` akan selalu `true`. Loop tidak pernah berhenti.

---

# Bagian 3 — `while` loop

## Nama dan bentuk

`while` dibaca **"selama"**. Nama lengkapnya **while statement**.

```javascript
while (kondisi) {
    // badan loop
}
```

Bedanya dengan `for`: **tidak ada bagian awal dan perubahan**. Kamu tulis sendiri di dalam atau di luar.

```javascript
let i = 0;              // awal — di luar loop

while (i < 3) {         // kondisi
    console.log(i);
    i++;                // perubahan — di dalam badan
}
```

Output sama: `0`, `1`, `2`.

## Kapan pakai `while` dibanding `for`

| Pakai `for` kalau...           | Pakai `while` kalau...                       |
|--------------------------------|----------------------------------------------|
| jumlah putaran sudah diketahui | jumlah putaran tidak diketahui               |
| menghitung 1 sampai 10         | mengulang sampai user memasukkan input benar |
| mengiterasi array              | menunggu kondisi berubah                     |

Contoh nyata `while` — validasi input:

```javascript
let nilai = 0;

while (nilai <= 0) {
    // dalam aplikasi nyata: baca input user
    nilai = 5;
}

console.log("nilai diterima:", nilai);
```

Kita tidak tahu berapa kali user akan salah memasukkan. Bisa 1×, bisa 10×. `for` tidak cocok di sini.

## Kondisi boleh berupa apa saja

`while` mengubah kondisinya jadi boolean, sama seperti `if`.

```javascript
let i = 3;

while (i) {          // sama dengan while (i !== 0)
    console.log(i);
    i--;
}
```

Output: `3`, `2`, `1`. Berhenti saat `i` jadi `0`, karena `0` itu falsy.

**Hati-hati:** pola ini berbahaya untuk angka yang boleh `0`. Kalau `i` mulai dari `0`, loop tidak jalan sama sekali.

---

# Bagian 4 — `do...while`

## Nama dan bentuk

`do...while` dibaca **"lakukan, selama"**. Nama lengkapnya **do-while statement**.

```javascript
do {
    // badan loop
} while (kondisi);
```

Perhatikan: titik koma **setelah** `while (kondisi)`. Ini satu-satunya loop yang butuh itu.

## Bedanya dengan `while`

|              | Kondisi diperiksa |
|--------------|-------------------|
| `while`      | **sebelum** badan |
| `do...while` | **sesudah** badan |

Akibatnya:

```javascript
let i = 10;

while (i < 3) {
    console.log("while jalan");
}
// tidak mencetak apa pun

do {
    console.log("do jalan");
} while (i < 3);
// mencetak "do jalan" SEKALI, walaupun kondisi false
```

`do...while` **selalu menjalankan badan minimal satu kali**.

## Kapan dipakai

Kalau kamu butuh badan jalan dulu, baru tahu hasilnya.

Contoh: meminta input sampai valid. User harus ditanya minimal sekali — tidak masuk akal bertanya "sudah benar?" sebelum pernah bertanya.

```javascript
let angka;

do {
    // dalam aplikasi nyata: angka = Number(prompt("Masukkan angka > 100"))
    angka = 50;
} while (angka <= 100);

console.log("angka diterima:", angka);
```

Kalau memakai `while`, kodenya jadi canggung karena harus mengisi `angka` dengan nilai palsu dulu supaya loop mau masuk.

**Aturan praktis:** `do...while` jarang dipakai. Kalau ragu, pakai `while`. Pakai `do...while` hanya kalau "minimal sekali" itu memang syarat, bukan kebetulan.

---

# Bagian 5 — `break` dan `continue`

## `break` — keluar dari loop

`break` dibaca **"break"** atau **"hentikan"**. Nama lengkapnya **break statement**.

Menghentikan loop **seketika**, tidak menunggu kondisi jadi `false`.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

Output: `0`, `1`, `2`. Saat `i` jadi `3`, loop berhenti sebelum mencetak.

## `continue` — lewati putaran ini

`continue` dibaca **"continue"** atau **"lanjutkan"**. Nama lengkapnya **continue statement**.

Melewati **sisa badan putaran ini**, lalu lanjut ke putaran berikutnya. Loop tidak berhenti.

```javascript
for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

Output: `0`, `1`, `2`, `4`, `5`. Angka `3` dilewati, sisanya tetap jalan.

## Perbedaan yang mudah tertukar

|                    | `break`                  | `continue`                    |
|--------------------|--------------------------|-------------------------------|
| Efek               | loop **berhenti**        | putaran ini **dilewati**      |
| Putaran berikutnya | tidak ada                | tetap jalan                   |
| Dipakai untuk      | sudah ketemu yang dicari | data ini tidak perlu diproses |

## `continue` di `for` vs `while` — jebakan

Di `for`, `continue` langsung melompat ke bagian **perubahan** (`i++`):

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// 0 1 3 4  — aman, i tetap naik
```

Di `while`, `continue` melompat ke **kondisi** — perubahan yang ada di bawah `continue` **tidak dijalankan**:

```javascript
let i = 0;

while (i < 5) {
    if (i === 2) continue;      // ← BAHAYA
    console.log(i);
    i++;
}
```

Saat `i` jadi `2`, `continue` melompat ke kondisi tanpa menjalankan `i++`. `i` tetap `2` selamanya. **Loop tak berujung.**

Perbaikannya: naikkan `i` **sebelum** `continue`.

```javascript
let i = 0;

while (i < 5) {
    i++;
    if (i === 2) continue;
    console.log(i);
}
```

Ini jebakan yang benar-benar terjadi di kode nyata. Kalau kamu menulis `continue` di dalam `while`, periksa dulu: apakah ada sesuatu yang berubah sebelum `continue`?

---

# Bagian 6 — Loop tak berujung (infinite loop)

Tanda-tandanya:

1. Kondisi selalu `true`
2. Perubahan bergerak ke arah yang salah
3. Perubahan tidak ada
4. `continue` melompati perubahan

Contoh masing-masing:

```javascript
// 1. kondisi selalu true
for (let i = 0; i >= 0; i++) { }        // i selalu >= 0

// 2. arah salah
for (let i = 0; i < 10; i--) { }        // i makin kecil, tidak akan pernah >= 10

// 3. tidak ada perubahan
for (let i = 0; i < 10; ) { }           // i tidak pernah berubah

// 4. continue melewati perubahan
let j = 0;
while (j < 10) {
    if (j > 5) continue;
    j++;
}
```

Cara mendeteksi tanpa menjalankan: **baca kondisi, lalu tanya "apakah variabel di kondisi ini pasti berubah ke arah yang membuat kondisi false?"**

Kalau jawabannya tidak yakin, itu tanda bahaya.

---

# Bagian 7 — Loop bersarang (nested loop)

Loop di dalam loop.

```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=1 j=2
i=1 j=3
i=2 j=1
i=2 j=2
i=2 j=3
```

Aturannya: **loop luar jalan sekali, loop dalam jalan sampai habis.**

Jumlah total putaran = luar × dalam. Di contoh ini 2 × 3 = 6.

## Trace tabel

| `i` | `j` | Tercetak  |
|-----|-----|-----------|
| 1   | 1   | `i=1 j=1` |
| 1   | 2   | `i=1 j=2` |
| 1   | 3   | `i=1 j=3` |
| 2   | 1   | `i=2 j=1` |
| 2   | 2   | `i=2 j=2` |
| 2   | 3   | `i=2 j=3` |

Perhatikan: `j` **kembali ke 1** setiap kali `i` naik. Itu karena `let j = 1` dijalankan ulang setiap kali loop dalam dimulai.

## `break` di loop bersarang hanya keluar dari loop dalam

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=2 j=1
i=3 j=1
```

`break` menghentikan loop dalam saja. Loop luar tetap jalan sampai selesai.

## Label — keluar dari dua loop sekaligus

Kalau butuh keluar dari keduanya, pakai **label**. Label adalah nama diikuti titik dua, ditulis sebelum loop.

```javascript
luar: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break luar;
        }
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=1 j=2
i=1 j=3
i=2 j=1
```

Setelah `i=2 j=1`, kondisi `i === 2 && j === 2` terpenuhi dan `break luar` menghentikan **kedua** loop.

Label jarang dipakai. Kalau kamu merasa butuh label, sering kali ada cara yang lebih sederhana — misalnya memindahkan loop ke fungsi dan memakai `return`.

---

# Bagian 8 — Yang belum dipelajari

Muncul nanti, jangan dihafal dulu:

| Bentuk                     | Muncul di | Untuk apa                        |
|----------------------------|-----------|----------------------------------|
| `for...of`                 | Minggu 3  | mengiterasi nilai array          |
| `for...in`                 | Minggu 4  | mengiterasi nama properti object |
| `forEach`, `map`, `filter` | Minggu 3  | method array                     |

Ketiganya akan terasa mudah setelah `for` biasa dikuasai, karena konsepnya sama: mengulang.

---

# Bagian 9 — Checklist review kode loop

Dipakai saat membaca kode loop orang lain, atau kode sendiri setelah 2 minggu.

| #   | Periksa                                          | Kenapa                                |
|-----|--------------------------------------------------|---------------------------------------|
| 1   | Mulai dari mana?                                 | menentukan nilai pertama              |
| 2   | Kondisinya `<` atau `<=`?                        | sumber off-by-one                     |
| 3   | Perubahan menuju arah yang benar?                | kalau salah arah → tak berujung       |
| 4   | Ada `break`? Keluar dari loop mana?              | di nested loop, hanya loop dalam      |
| 5   | Ada `continue`? Apakah perubahan terlewat?       | jebakan di `while`                    |
| 6   | Berapa putaran total?                            | hitung manual, cocokkan dengan output |
| 7   | Apa yang terjadi kalau kondisi langsung `false`? | loop 0 putaran, apakah itu benar?     |

Tujuh pertanyaan ini menjawab 90% bug loop.

---

# Bagian 10 — Soal

Kerjakan tanpa buka bagian di atas. Tulis jawaban di sini, nanti dicatat ke `09_Challenge.js`.

## Kelompok A — Prediksi output

**A1.**

```javascript
for (let i = 0; i < 4; i++) {
    console.log(i);
}
```

Berapa baris tercetak, isinya apa?

**A2.**

```javascript
for (let i = 1; i <= 4; i++) {
    console.log(i);
}
```

Berapa baris, isinya apa? Apa bedanya dengan A1?

**A3.**

```javascript
let i = 5;

while (i > 0) {
    console.log(i);
    i -= 2;
}
```

Berapa baris, isinya apa?

**A4.**

```javascript
let i = 10;

while (i < 5) {
    console.log("jalan");
}
```

Berapa baris tercetak?

**A5.**

```javascript
let i = 10;

do {
    console.log("jalan");
} while (i < 5);
```

Berapa baris tercetak? Kenapa beda dengan A4?

**A6.**

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(i);
}
```

Berapa baris, isinya apa?

**A7.**

```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i + "-" + j);
    }
}
```

Berapa baris, isinya apa?

## Kelompok B — Temukan bug

**B1.**

```javascript
for (let i = 0; i <= 3; i++) {
    console.log(i);
}
```

Developer ingin mencetak `0`, `1`, `2`. Ada bug? Di mana?

**B2.**

```javascript
let i = 0;

while (i < 5) {
    if (i === 2) continue;
    console.log(i);
    i++;
}
```

Apa yang terjadi saat dijalankan? Di mana masalahnya?

**B3.**

```javascript
for (let i = 0; i < 10; i--) {
    console.log(i);
}
```

Apa yang terjadi? Kenapa?

**B4.**

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log("i=" + i + " j=" + j);
    }
}
```

Developer ingin berhenti total saat `j === 2` pada putaran pertama. Apakah kode ini melakukannya? Kalau tidak, apa yang salah?

## Kelompok C — Review kode

**C1.** Dua kode ini mencetak hal yang sama. Mana yang lebih baik, dan kenapa?

```javascript
// Versi 1
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

```javascript
// Versi 2
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}
```

**C2.** Kode ini jalan dan benar. Tapi ada satu hal yang membuatnya rapuh — kalau syarat berubah, ia jadi salah. Apa itu?

```javascript
const daftarHarga = [50000, 75000, 120000];

let total = 0;

for (let i = 0; i < 3; i++) {
    total += daftarHarga[i];
}

console.log(total);
```

## Kelompok D — Telusuri flow

**D1.** Tulis tabel langkah demi langkah: nilai `i`, hasil kondisi, yang tercetak.

```javascript
for (let i = 3; i > 0; i--) {
    console.log(i * 2);
}
```

**D2.** Berapa nilai akhir `total`? Telusuri, jangan tebak.

```javascript
let total = 0;

for (let i = 1; i <= 4; i++) {
    total += i;
}

console.log(total);
```

**D3.** Berapa baris yang tercetak? Telusuri tabel `i` dan `j`.

```javascript
let hitung = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === i) continue;
        hitung++;
    }
}

console.log(hitung);
```

## Kelompok E — Tulis dari nol

**E1.** Cetak angka `1` sampai `10`, satu per baris. Pakai `for`.

**E2.** Cetak angka genap dari `2` sampai `10`. Pakai `for` dan operator modulo `%` (sisa bagi).

**E3.** Cetak angka `10` sampai `1` (mundur). Pakai `for`.

**E4.** Jumlahkan angka `1` sampai `5`, cetak hasilnya. Pakai `for` dan satu variabel penampung.

**E5.** Cetak pola ini pakai loop bersarang:

```
*
**
***
```

## Kelompok F — Berpikir kritis

**F1.** Kenapa `for` lebih sering dipakai daripada `while`, padahal keduanya bisa melakukan hal yang sama?

**F2.** Kalau kamu melihat kode orang lain punya `for (;;)` tanpa `break` di dalamnya, apa yang kamu simpulkan?

**F3.** Sebuah loop berjalan 1.000.000 kali dan butuh 2 detik. Apa yang akan kamu periksa dulu sebelum menyimpulkan "JavaScript lambat"?

**F4.** Kenapa `do...while` jarang dipakai, padahal ia menyelesaikan masalah nyata (input minimal sekali)?

---

# Cara penilaian

| Kelompok | Yang diuji            | Level  |
|----------|-----------------------|--------|
| A        | prediksi output       | EASY   |
| B        | menemukan bug         | MEDIUM |
| C        | menilai kualitas kode | MEDIUM |
| D        | melacak alur          | HARD   |
| E        | menulis dari nol      | WRITE  |
| F        | penalaran             | HARD   |

Gerbang Day 4: **semua kelompok minimal satu soal benar**, dan Kelompok E harus dikerjakan tanpa melihat contoh.
