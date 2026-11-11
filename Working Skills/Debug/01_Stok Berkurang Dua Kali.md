# Debug 01 — Stok Berkurang Dua Kali

**Tanggal dibuat:** 2026-11-08
**Aturan:** README #32, #34

---

## Situasi

Laporan dari user, ditulis apa adanya:

> "Aku klik tombol bayar, kagetnya stok tiket langsung berkurang dua, padahal aku cuma beli satu. Uangku kepotong sekali sih."

Kamu diminta menangani. **Sebelum** menyentuh kode, tulis bug report-nya.

---

## Langkah 1 — Tulis bug report

Salin `Templates/BugReport.md`, isi bagian ini saja dulu:

- Judul
- Langkah reproduksi (kamu harus **mengarang** langkahnya dari laporan di atas — laporan user hampir selalu tidak lengkap)
- Harapan
- Kenyataan
- Dugaan penyebab (tandai sebagai dugaan)

Jangan baca kode dulu. Ini latihan menulis laporan dari informasi yang tidak lengkap — persis seperti kerja nyata.

---

## Langkah 2 — Baca kode

Setelah laporan selesai, baru buka:

```
debug_01.js
```

---

## Langkah 3 — Telusuri

Jawab berurutan. Jangan lompat ke perbaikan.

### 3a. Reproduce

Jalankan `node debug_01.js`. Apa yang tercetak?

>

Apakah perilaku di laporan user muncul?

>

### 3b. Locate

Baris mana yang menyebabkan stok berkurang?

>

Baris mana yang menyebabkan stok berkurang **dua kali**?

>

### 3c. Root cause

Bukan "karena ada dua pengurangan". Itu gejala, bukan akar.

Akar masalahnya: **apa yang seharusnya mencegah pengurangan kedua terjadi?**

>

### 3d. Verifikasi

Kalau dugaanmu benar, apa yang akan berubah kalau satu baris tertentu dihapus? Coba, lalu jelaskan.

>

---

## Langkah 4 — Perbaiki

Tulis perbaikannya. **Satu perubahan saja.** Jangan sekalian merapikan yang lain.

>

---

## Langkah 5 — Cegah terulang

Kalau bug ini muncul lagi besok dalam bentuk lain, apa yang akan menangkapnya?

>

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

## Catatan

Di kerja nyata, langkah 1 dan 3c adalah yang paling sering dilewati junior. Akibatnya: perbaikan menutupi gejala, bug kembali dua minggu kemudian dengan bentuk berbeda.
