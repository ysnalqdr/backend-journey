# Sesi Belajar Mandiri — Fungsi JavaScript

Untuk dipakai malam 2026-11-21. Tiga topik, tiga pertanyaan per topik.

---

## Cara pakai

1. Baca dulu sumbernya (MDN atau video), **jangan langsung ke ChatGPT**.
2. Jawab ketiga pertanyaan **sendiri dulu**, tulis di kertas atau file.
3. Baru tempel prompt di bawah ke ChatGPT, **beserta jawabanmu**.
4. ChatGPT menilai jawabanmu, bukan memberi jawaban.

Kalau kamu bertanya ke ChatGPT sebelum menjawab, yang terlatih adalah kemampuan
membaca jawaban orang lain — bukan kemampuan berpikirmu.

---

## Prompt untuk ChatGPT

Tempel ini di awal sesi:

```
Kamu adalah tutor yang tugasnya MENILAI jawabanku, bukan memberiku jawaban.

Aturan yang wajib kamu pegang:

1. Jangan pernah memberi jawaban benar sebelum aku mengirim jawabanku.
2. Kalau jawabanku salah, jangan langsung koreksi. Tanya dulu: "coba cek bagian X,
   menurutmu apa yang terjadi di sana?" Beri aku satu kesempatan memperbaiki sendiri.
3. Kalau setelah satu kesempatan aku masih salah, baru jelaskan — dan jelaskan
   LANGKAHNYA, bukan hasil akhirnya.
4. Setiap kali aku menjawab, nilai dengan format:
   - BENAR / SEBAGIAN / SALAH
   - apa yang tepat dari jawabanku
   - apa yang meleset, dan kenapa
   - satu pertanyaan lanjutan untuk menguji apakah aku benar-benar paham
5. Jangan memuji berlebihan. Kalau jawabanku benar, cukup bilang benar dan sebut
   bagian mana yang membuatnya benar.
6. Kalau aku bertanya "apakah jawabanku benar?" tanpa mengirim jawaban, tolak dan
   minta jawabannya dulu.
7. Jangan pernah memakai konsep yang belum aku sebut. Aku baru belajar: variabel,
   tipe data, if, for, while, do-while, nested loop. Aku BELUM belajar array,
   object, arrow function, closure, class.

Topik malam ini: fungsi (function), parameter, argumen, return, dan scope.

Mulai dengan menanyakan pertanyaan nomor 1 kepadaku. Jangan jelaskan materinya dulu.
```

---

## Topik 1 — Kenapa fungsi ada, dan bentuk dasarnya

**Sumber:** MDN, bagian pembuka sampai "Defining functions".

### Pertanyaan 1.1

Kalau kamu punya tiga tempat di kode yang sama-sama menghitung luas persegi panjang,
dan rumusnya harus diubah dari `panjang * lebar` menjadi `panjang * lebar * 2`,
berapa tempat yang harus kamu ubah — dan apa yang terjadi kalau kamu melewatkan satu?

### Pertanyaan 1.2

Perhatikan dua kode ini. Apa bedanya, dan mana yang bisa dipakai berulang kali?

```
let luas1 = 5 * 3;
let luas2 = 10 * 4;
```

```
function luas(p, l) {
    return p * l;
}

let luas1 = luas(5, 3);
let luas2 = luas(10, 4);
```

### Pertanyaan 1.3

Dalam `function luas(p, l)`, apa yang terjadi kalau kamu memanggil `luas(5)` —
hanya satu argumen, padahal parameternya dua?

Jawab dulu dugaanmu, baru cek.

---

## Topik 2 — `return` vs `console.log`

Ini yang paling sering salah, dan yang paling mahal akibatnya.

**Sumber:** MDN, bagian "Return values".

### Pertanyaan 2.1

Perhatikan dua fungsi ini:

```
function a(x) {
    console.log(x * 2);
}

function b(x) {
    return x * 2;
}
```

Kalau kamu menulis `let hasil = a(5);` — apa isi `hasil`?

Kalau kamu menulis `let hasil = b(5);` — apa isi `hasil`?

### Pertanyaan 2.2

Fungsi ini menghitung sesuatu, tapi ada yang hilang:

```
function totalHarga(harga, jumlah) {
    let total = harga * jumlah;
}

let bayar = totalHarga(3000, 4);
console.log(bayar);
```

Apa yang tercetak? Dan kenapa — bukan "karena salah", tapi apa yang **tidak terjadi**.

### Pertanyaan 2.3

Dalam fungsi ini, berapa yang dikembalikan, dan baris mana yang **tidak pernah** jalan?

```
function cek(n) {
    if (n > 10) {
        return "besar";
    }
    return "kecil";
    console.log("selesai");
}
```

---

## Topik 3 — Scope

**Sumber:** MDN, bagian "Function scope" (kalau ada) atau video.

### Pertanyaan 3.1

```
let total = 100;

function ubah() {
    let total = 5;
    return total;
}

console.log(ubah());
console.log(total);
```

Dua angka apa yang tercetak? Dan kenapa berbeda?

### Pertanyaan 3.2

```
function hitung() {
    let rahasia = 42;
}

hitung();
console.log(rahasia);
```

Apa yang terjadi? Bukan "error" saja — error jenis apa, dan kenapa.

### Pertanyaan 3.3

Ini yang paling penting, dan berhubungan langsung dengan bug yang kamu temukan di
`review-01`:

```
let diskon = 0;

function pasangDiskon() {
    let diskon = 20;
}

pasangDiskon();
console.log(diskon);
```

Berapa yang tercetak? Dan kalau kamu jadi developer yang ingin `diskon` luar berubah
jadi 20, apa yang harus dihapus dari fungsi itu?

---

## Setelah selesai

Tulis di kertas:

1. Tiga hal yang tadinya kamu kira benar, ternyata salah.
2. Satu pertanyaan yang masih belum terjawab.
3. Satu konsep yang kamu rasa paling rapuh.

Bawa tiga hal itu besok. Kita mulai Day 5 dengan itu.