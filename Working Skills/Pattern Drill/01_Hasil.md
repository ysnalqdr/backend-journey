# Hasil Pattern Drill 01

**Tanggal:** 2026-11-17
**Blok:** `pattern-01`
**Skor:** 16 dari 19 soal sah
**Kategori:** hampir — ulangi besok, jangan hari ini

---

## Skor per soal

| #   | Jawabanku | Kunci | Hasil                     |
|-----|-----------|-------|---------------------------|
| 1   | 5         | 5     | benar                     |
| 2   | 2         | 2     | benar                     |
| 3   | 3         | 3     | benar setelah dikoreksi   |
| 4   | 4         | 4     | benar setelah dikoreksi   |
| 5   | 6         | 6     | benar                     |
| 6   | 7         | 7     | benar                     |
| 7   | 0         | 0     | benar                     |
| 8   | 5         | 5     | benar setelah dikoreksi   |
| 9   | —         | 1     | soal cacat, sudah diganti |
| 10  | 0         | 0     | benar                     |
| 11  | 0         | 0     | benar setelah dikoreksi   |
| 12  | 6         | 6     | benar                     |
| 13  | 0         | **5** | salah                     |
| 14  | 3         | 3     | benar                     |
| 15  | 4         | 4     | benar                     |
| 16  | 0         | 0     | benar                     |
| 17  | 0         | 0     | benar                     |
| 18  | 0         | **7** | salah                     |
| 19  | 0         | **1** | salah                     |
| 20  | 0         | 0     | benar                     |

---

## Tiga yang salah, dan kenapa

### 13 — batas tidak diperiksa (jenis 5)

```javascript
const data = ["a", "b", "c"];
const keluar = [];
for (let i = 0; i <= data.length; i++) {
    keluar.push(data[i]);
}
```

Dijawab `0`. Seharusnya `5`.

`data[3]` tidak ada, dan `undefined` tetap di-push. Hasilnya
`["a","b","c",undefined]`.

Penyebab: array belum dipelajari. Batas indeks tidak kelihatan, dan `push` tidak
melempar error.

### 18 — nilai dihitung lalu dibuang (jenis 7)

```javascript
let total = 0;
for (let i = 1; i <= 3; i++) {
    total += i;
}
const rata = total / 3;
const cek = rata > 0;
console.log(rata);
```

Dijawab `0`. Seharusnya `7`.

`cek` dibuat di baris 7, lalu tidak pernah dibaca. Prosedurnya: cari nama variabelnya
sekali lagi. `cek` hanya muncul satu kali.

### 19 — off-by-one (jenis 1)

```javascript
const panjang = 5;
const arr = [];
for (let i = 1; i < panjang; i++) {
    arr.push(i);
}
```

Dijawab `0`. Seharusnya `1`.

Tidak ada `[i]`, jadi bukan jenis 5. Yang salah cuma jumlah putaran: `i < 5` dari `1`
menghasilkan `1,2,3,4`. Angka `5` tidak masuk.

---

## Pola yang ditemukan

| Soal salah | Panjang kode | Jenis |
|------------|--------------|-------|
| 13         | 5 baris      | 5     |
| 18         | 8 baris      | 7     |
| 19         | 5 baris      | 1     |

| Soal benar | Panjang kode | Jenis |
|------------|--------------|-------|
| 6          | 4 baris      | 7     |
| 8          | 5 baris      | 5     |

**Temuan:** jenis yang sama bisa dikenali di kode pendek, tapi terlewat di kode panjang.

Nomor 6 (jenis 7) benar, nomor 18 (jenis 7 juga) salah. Bedanya panjang kode.
Nomor 8 (jenis 5) benar, nomor 13 (jenis 5 juga) salah. Bedanya juga panjang kode.

Artinya masalahnya bukan pemahaman jenis. Masalahnya **perhatian habis sebelum sampai
ke baris yang bermasalah**.

**Solusi:** periksa satu jenis satu per satu, jangan sekaligus. Sama seperti tabel
pemeriksaan untuk menghitung putaran — mata bisa salah, prosedur tidak.

---

## Pelanggaran aturan yang tercatat

Drill ini memakai array di 6 dari 20 soal (`1`, `8`, `11`, `13`, `19`, dan sebagian `14`).

Array itu materi **minggu 3** menurut `SKILLS.md`. Drill ini dipakai di minggu 1.

Ini melanggar aturan #42. Tapi array sudah dipakai learner sejak 15 November di
`H2 while`, `W1 while`, dan nested `Q2` — jadi pelanggarannya sudah terjadi sebelum
drill ini dibuat.

**Keputusan learner 2026-11-17:** lanjutkan drill, array dikejar saat waktunya tiba.

**Yang harus dilakukan:** ajarkan array dasar sebelum `do...while` selesai, atau
sebelum drill 02 dibuat.

---

## Yang perlu dilatih berikutnya

| #   | Yang dilatih             | Cara                                       |
|-----|--------------------------|--------------------------------------------|
| 1   | memisahkan jenis 1 dan 5 | tanya: ada `[i]`?                          |
| 2   | memisahkan jenis 2 dan 3 | tanya: ada `let` di dalam loop?            |
| 3   | menemukan jenis 7        | cari nama variabel dua kali                |
| 4   | memeriksa kode panjang   | satu jenis satu per satu, jangan sekaligus |

---

## Rencana ulangan

Ulangi **besok, 2026-11-18**, dengan 20 potongan baru. Jangan ulangi hari ini — mengulang
langsung hanya melatih ingatan jangka pendek, bukan pengenalan pola.

Target: 20 dari 20.
