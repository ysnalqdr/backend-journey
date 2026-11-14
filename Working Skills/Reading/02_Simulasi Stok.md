# Reading 02 — Simulasi Stok

**Level:** 2
**Materi:** Day 1–4 (variabel, `if`, `continue`, `break`, `for`, akumulasi)
**Aturan:** README #29

---

## Cara pakai

1. Baca kode di `reading_02.js` **tanpa menjalankan**.
2. Jawab 5 pertanyaan di bawah. Tulis di `Trace.md`.
3. Baru ubah `sudahMenjawab` jadi `true`, lalu jalankan.
4. Bandingkan dugaanmu dengan kenyataan.

File JS punya penjaga: kalau `sudahMenjawab` masih `false`, ia hanya mencetak STOP.

---

## Konteks

Gudang punya stok 10. Setiap hari ada permintaan yang berbeda. Kalau stok tidak cukup,
yang dilayani hanya sebisanya. Kode ini mencatat berapa total yang terlayani dan kapan
stok habis.

---

## Lima pertanyaan

### 1. Apa yang masuk ke kode ini?

> Sebutkan tipe tiap nilai: `stokAwal`, `permintaanHarian`, `batasKritis`.
> Mana yang berubah selama program jalan, mana yang tetap?

### 2. Apa yang keluar?

> Ada empat baris yang dicetak di akhir (tiga `console.log` terakhir, plus satu peringatan
> di tengah). Sebutkan isinya. Kalau kamu yakin hanya tiga baris, jelaskan kenapa.

### 3. Kalau `permintaanHarian` diubah jadi `[1, 1, 1, 1, 1]`, apa yang berubah?

> Sebutkan nilai `stok akhir`, `total terlayani`, dan `hari kehabisan`.

### 4. Baris mana yang paling rapuh kalau syarat berubah?

> Ada satu baris yang membuat program **berhenti memproses** sisa hari, dan satu baris lain
> yang membuat program **melewati** sisa proses di hari itu. Sebutkan keduanya, dan jelaskan
> bedanya menurut posisinya di kode.

### 5. Apa yang akan kamu ganti namanya, dan kenapa?

> Ada satu nama yang menjelaskan **satuan** tapi tidak menjelaskan **maksud**. Sebutkan,
> dan usulkan nama penggantinya.

---

## Setelah menjawab

1. Ubah `const sudahMenjawab = false;` → `true`
2. `node reading_02.js`
3. Isi tabel "dugaanku vs kenyataan" di `Trace.md`

---

## Yang diuji

| Kemampuan                                        | Pertanyaan |
|--------------------------------------------------|------------|
| membaca tipe dan peran variabel                  | 1          |
| melacak akumulasi dan pencetakan bersyarat       | 2          |
| memprediksi dampak perubahan data                | 3          |
| membedakan `break` dan `continue` dari posisinya | 4          |
| menilai kualitas nama                            | 5          |
