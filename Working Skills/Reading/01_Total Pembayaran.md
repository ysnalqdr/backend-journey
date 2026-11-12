# Reading 01 — Total Pembayaran

**Level:** 1
**Materi:** Day 1–3 (variabel, konversi tipe, `Number.isNaN`, `if`/`else if`, ternary, `!`)
**Aturan:** README #29

---

## Cara pakai

1. Baca kode di `reading_01.js` **tanpa menjalankan**.
2. Jawab 5 pertanyaan di bawah. Tulis di `Trace.md`.
3. Baru ubah `sudahMenjawab` jadi `true` di file JS, lalu jalankan.
4. Bandingkan dugaanmu dengan kenyataan.

File JS punya penjaga: kalau `sudahMenjawab` masih `false`, ia hanya mencetak STOP.

---

## Konteks

Data pesanan datang dari form web. Semua nilai dari form berupa **teks**, bukan angka. Kode ini menghitung total yang harus dibayar, lalu memberi label.

---

## Kode

```javascript
const hargaTiket = "250000";
const jumlahBeli = "2";
const kodePromo = "HEMAT";
const statusMember = false;

const harga = Number(hargaTiket);
const jumlah = parseInt(jumlahBeli);

const valid = !Number.isNaN(harga) && !Number.isNaN(jumlah) && jumlah > 0;

let diskon = 0;

if (kodePromo === "HEMAT") {
    diskon = 10;
} else if (kodePromo === "MEMBER") {
    diskon = 15;
}

if (statusMember) {
    diskon = 20;
}

const subtotal = harga * jumlah;
const potongan = subtotal * diskon / 100;
const total = subtotal - potongan;

const label = total > 500000 ? "pembelian besar" : "pembelian biasa";

console.log(`harga    : ${harga}`);
console.log(`jumlah   : ${jumlah}`);
console.log(`valid    : ${valid}`);
console.log(`diskon   : ${diskon}`);
console.log(`subtotal : ${subtotal}`);
console.log(`potongan : ${potongan}`);
console.log(`total    : ${total}`);
console.log(`label    : ${label}`);
```

---

## Lima pertanyaan

### 1. Apa yang masuk ke kode ini?

> Empat variabel di atas. Sebutkan **tipe** masing-masing, dan dari mana asalnya (disebut di Konteks).

### 2. Apa yang keluar?

> Delapan baris. Sebutkan isinya persis, termasuk angka dan tipe teks/angka.

### 3. Apa yang terjadi kalau inputnya salah?

Pilih **satu** dan jelaskan hasilnya:

- (a) `jumlahBeli` diubah jadi `"abc"`
- (b) `jumlahBeli` diubah jadi `"0"`
- (c) `statusMember` diubah jadi `true` **dan** `kodePromo` tetap `"HEMAT"`

### 4. Baris mana yang paling rapuh kalau syarat berubah?

> Ada satu baris yang membuat kode ini **diam-diam salah** kalau daftar promo bertambah, tanpa error apa pun. Baris mana, dan kenapa?

### 5. Apa yang akan kamu ganti namanya, dan kenapa?

> Ada dua nama variabel yang menjelaskan **tipe** dan **asal**, bukan **maksud**. Sebutkan, dan usulkan nama penggantinya.

---

## Setelah menjawab

1. Ubah `const sudahMenjawab = false;` → `true`
2. `node reading_01.js`
3. Isi tabel "dugaanku vs kenyataan" di `Trace.md`

---

## Yang diuji

| Kemampuan                               | Pertanyaan |
|-----------------------------------------|------------|
| membaca tipe data dari konteks          | 1          |
| melacak `Number` vs `parseInt` vs `NaN` | 2          |
| memikirkan input tidak normal           | 3          |
| melihat logika yang saling menimpa      | 4          |
| menilai kualitas nama                   | 5          |
