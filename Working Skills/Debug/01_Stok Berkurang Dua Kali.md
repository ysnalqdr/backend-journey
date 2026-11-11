# Debug 01 — Stok Berkurang Dua Kali

**Level:** 1
**Aturan:** README #32 (bug report) dan #34 (debugging 4 langkah)

---

## Situasi

Laporan dari user, ditulis apa adanya:

> "Aku klik tombol bayar, kagetnya stok tiket langsung berkurang dua, padahal aku cuma beli satu. Uangku kepotong sekali sih."

Kamu diminta menangani.

---

## Langkah 1 — Tulis bug report

Salin `Templates/BugReport.md`. Isi **tanpa membaca kode**.

Bagian yang harus kamu isi:

- **Judul** — satu kalimat spesifik
- **Langkah reproduksi** — kamu harus **mengarang** dari laporan di atas. Laporan user hampir selalu tidak lengkap.
- **Harapan**
- **Kenyataan**
- **Dugaan penyebab** — tandai jelas ini dugaan

---

## Langkah 2 — Baca kode

Baru setelah laporan selesai, buka `debug_01.js`.

---

## Langkah 3 — Telusuri

Jawab berurutan. **Jangan lompat ke perbaikan.**

### 3a. Reproduce

Ubah `sudahLapor` jadi `true`, jalankan. Apa yang tercetak?

>

Apakah perilaku di laporan user muncul?

>

### 3b. Locate

Baris mana yang mengurangi stok?

>

Baris mana yang membuatnya berkurang **dua kali**?

>

### 3c. Root cause

Bukan "karena ada dua pengurangan". Itu **gejala**, bukan akar.

Akar masalahnya: **apa yang seharusnya mencegah pengurangan kedua terjadi?**

>

Petunjuk: perhatikan urutan — validasi, pengurangan, penyimpanan, notifikasi, lalu apa?

>

### 3d. Verifikasi

Kalau dugaanmu benar, apa yang berubah kalau baris pengurangan kedua dihapus? Coba, lalu jelaskan.

>

---

## Langkah 4 — Perbaiki

Tulis perbaikannya. **Satu perubahan saja.** Jangan sekalian merapikan yang lain.

>

---

## Langkah 5 — Cegah terulang

Kalau bug ini muncul lagi besok dalam bentuk berbeda, apa yang akan menangkapnya?

>

---

## Setelah selesai

Bandingkan dengan `Kunci/Debug 01.md`.

---

## Yang diuji

| Kemampuan | Langkah |
|---|---|
| menulis laporan dari informasi tidak lengkap | 1 |
| memisahkan gejala dari akar masalah | 3c |
| membuktikan dugaan, bukan menebak | 3d |
| memperbaiki minimal, bukan melebar | 4 |
| berpikir tentang pencegahan | 5 |

---

## Catatan dari kerja nyata

Langkah 1 dan 3c adalah yang paling sering dilewati. Akibatnya: perbaikan menutupi gejala, bug kembali dua minggu kemudian dengan bentuk berbeda.
