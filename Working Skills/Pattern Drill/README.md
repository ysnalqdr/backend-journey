# Pattern Drill 01 — Mengenali Pola Bug

**Blok Working Skills:** `pattern-01`
**Waktu:** 5 menit
**File soal:** `pattern_drill_01.js`

---

## Kenapa latihan ini beda dari gerbang

|                  | Gerbang harian         | Pattern drill     |
|------------------|------------------------|-------------------|
| Waktu            | 15–30 menit            | 5 menit           |
| Jumlah soal      | 3–6                    | 20                |
| Yang ditanya     | berapa hasilnya        | **jenis bug apa** |
| Menghitung       | wajib                  | **tidak**         |
| Menjalankan kode | boleh setelah menjawab | tidak perlu       |

Gerbang mengajarkan **menghitung**. Pattern drill mengajarkan **mengenali**.

---

## Kenapa mengenali dilatih terpisah

Dari riset *"On the Nature of Programmer Expertise"*:

> Mata programmer expert bergerak mencari titik penting — signature fungsi, alur data antar
> elemen. Mereka bisa menemukan off-by-one **dengan sangat cepat**, yang menunjukkan mereka
> sudah **mengabstraksi proses pemahaman**.

Expert tidak menghitung ulang setiap kali. Dia **mengenali bentuk**.

Dan bentuk dikenali dari **melihat banyak contoh**, bukan dari mengerjakan banyak soal.
Gerbang hanya memberi 3–6 contoh per sesi. Drill memberi 20 contoh dalam 5 menit.

---

## Tujuh jenis bug

Dari `BUG_TAXONOMY.md`:

| Nomor | Jenis                       | Ciri cepat                                                |
|-------|-----------------------------|-----------------------------------------------------------|
| 1     | off-by-one                  | `<` vs `<=`, atau mulai dari 0 vs 1                       |
| 2     | shadowing                   | ada `let`/`const` di dalam loop untuk nama yang sudah ada |
| 3     | reset di dalam loop         | variabel penampung diisi ulang tiap putaran               |
| 4     | guard salah posisi          | sisi kiri `&&` membaca sesuatu yang mungkin kosong        |
| 5     | batas tidak diperiksa       | `.length` dipasangkan dengan `<=`                         |
| 6     | nilai salah ditambahkan     | yang ditambahkan bukan nilai yang dimaksud                |
| 7     | nilai dihitung lalu dibuang | nama variabel hanya muncul di baris pembuatannya          |

Dan satu nomor lagi: **`0`** kalau tidak ada bug.

---

## Cara mengerjakan

1. Baca 20 potongan kode. **Jangan dijalankan.**
2. Untuk masing-masing, putuskan satu nomor.
3. Tulis nomor di array `jawab`, ganti `null`.
4. Jalankan `node pattern_drill_01.js`.
5. Lihat skor.

**Satu potongan hanya punya satu jenis bug.** Kalau kamu melihat dua, pilih yang lebih dulu
menyebabkan hasil salah.

---

## Penilaian

| Skor        | Arti   | Tindakan                                   |
|-------------|--------|--------------------------------------------|
| 20          | lulus  | ulangi besok dengan waktu 3 menit          |
| 16–19       | hampir | ulangi besok, jangan hari ini              |
| di bawah 16 | belum  | baca ulang `BUG_TAXONOMY.md`, ulangi besok |

Jangan ulangi di hari yang sama. Mengulang langsung hanya melatih ingatan jangka pendek,
bukan pengenalan pola.

---

## Yang dicatat setelah selesai

Bukan skornya. Yang dicatat:

| Yang dicatat                     | Contoh                          |
|----------------------------------|---------------------------------|
| jenis yang paling sering salah   | "aku selalu melewatkan nomor 7" |
| jenis yang paling cepat dikenali | "nomor 5 langsung kelihatan"    |
| waktu yang dipakai               | "5 menit 20 detik"              |

Kalau satu jenis salah 3× berturut-turut, itu masuk `KESALAHAN.md` dan butuh pendekatan
berbeda — bukan diulang.

---

## Sumber

| Sumber                            | Yang diambil                 |
|-----------------------------------|------------------------------|
| Parnin dkk., programmer expertise | expert mengenali pola        |
| Ericsson, deliberate practice     | umpan balik langsung         |
| Riset overlearning                | pengulangan berlebih sia-sia |
