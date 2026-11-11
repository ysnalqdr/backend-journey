# Reading 01 — Hitung Total Pesanan

**Level:** 1
**Tanggal dibuat:** 2026-11-08
**Aturan:** README #29

---

## Cara pakai

1. Baca kode di bawah **tanpa menjalankan**.
2. Salin `Templates/CodeReading.md` ke `Trace.md` di folder minggu.
3. Jawab 5 pertanyaan dari membaca saja. 10 menit.
4. Baru jalankan `node reading_01.js` untuk memeriksa.
5. Isi tabel "dugaanku vs kenyataan".

Kalau dijalankan dulu, latihan ini tidak ada gunanya.

---

## Konteks

Fungsi ini dipakai di halaman riwayat pesanan. Tugasnya menghitung total yang harus dibayar user dari daftar tiket yang pernah dibeli, lalu memberi label.

---

## Kode

```javascript
const daftarTiket = [
    { harga: 250000, jumlah: 2 },
    { harga: 150000, jumlah: 0 },
    { harga: 500000, jumlah: 1 }
];

let total = 0;
let jumlahTiket = 0;

for (let i = 0; i < 3; i++) {
    const tiket = daftarTiket[i];

    if (!tiket.jumlah) {
        continue;
    }

    total += tiket.harga * tiket.jumlah;
    jumlahTiket += tiket.jumlah;
}

const label = total > 500000 ? "pembelian besar" : "pembelian biasa";

console.log("total:", total);
console.log("jumlah tiket:", jumlahTiket);
console.log("label:", label);
```

---

## Lima pertanyaan

### 1. Apa yang masuk ke kode ini?

> Petunjuk: bukan "array". Sebutkan bentuk datanya dan apa arti tiap bagian.

### 2. Apa yang keluar?

> Petunjuk: tiga baris. Sebutkan isinya persis, termasuk angkanya.

### 3. Apa yang terjadi kalau inputnya salah?

Pilih salah satu dari tiga ini, lalu jelaskan:

- (a) `daftarTiket` berisi 4 item, bukan 3
- (b) `jumlah` bernilai `-1`
- (c) `harga` bernilai `"250000"` (teks, bukan angka)

### 4. Baris mana yang paling rapuh kalau syarat berubah?

> Petunjuk: ada satu angka di kode itu yang, kalau daftarnya bertambah, membuat hasilnya salah tanpa error apa pun.

### 5. Apa yang akan kamu ganti namanya, dan kenapa?

> Petunjuk: ada satu nama yang menjelaskan tipe, bukan maksud.

---

## Setelah menjawab

Jalankan:

```
node reading_01.js
```

Bandingkan dengan dugaanmu. Isi tabel di `Trace.md`.

---

## Yang diuji

| Kemampuan | Di mana |
|---|---|
| membaca struktur data | pertanyaan 1 |
| melacak loop dengan `continue` | pertanyaan 2 |
| memikirkan input tidak normal | pertanyaan 3 |
| menemukan nilai yang di-hardcode | pertanyaan 4 |
| menilai kualitas nama | pertanyaan 5 |
