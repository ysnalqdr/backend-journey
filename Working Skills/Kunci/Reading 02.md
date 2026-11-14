# Kunci — Reading 02

Dibuka **setelah** menjawab kelima pertanyaan.

---

## 1. Apa yang masuk

| Nama               | Nilai           | Tipe            | Berubah?        |
|--------------------|-----------------|-----------------|-----------------|
| `stokAwal`         | `10`            | number          | tidak (`const`) |
| `permintaanHarian` | `[3,4,2,5,1]`   | array of number | tidak (`const`) |
| `batasKritis`      | `3`             | number          | tidak (`const`) |
| `stok`             | `10` lalu turun | number          | **ya** (`let`)  |
| `hariKehabisan`    | `0` lalu `4`    | number          | **ya** (`let`)  |
| `totalTerlayani`   | `0` lalu `10`   | number          | **ya** (`let`)  |

Yang berubah hanya tiga `let`. Semua `const` tetap.

---

## 2. Apa yang keluar

**Empat baris**, bukan tiga:

```
hari 3: stok menipis, sisa 1
stok akhir    : 0
total terlayani: 10
hari kehabisan : 4
```

Baris pertama berasal dari `if (stok < batasKritis)` **di dalam** loop. Tiga baris berikutnya
dari luar loop.

Kalau kamu menjawab tiga, berarti kamu melewatkan `console.log` yang ada di dalam loop.

---

## 3. Kalau permintaan jadi `[1,1,1,1,1]`

| Nilai             | Hasil |
|-------------------|-------|
| `stok akhir`      | `5`   |
| `total terlayani` | `5`   |
| `hari kehabisan`  | `0`   |

`hariKehabisan` tetap `0` karena stok tidak pernah habis. Stok berakhir `10 - 5 = 5`.
Tidak ada peringatan "menipis" karena stok tidak pernah di bawah `3`.

---

## 4. Dua baris yang rapuh

| Baris      | Efek                                                             |
|------------|------------------------------------------------------------------|
| `break`    | menghentikan **seluruh loop**, sisa hari tidak diproses          |
| `continue` | melewati **sisa badan** di hari itu, hari berikutnya tetap jalan |

Bedanya menurut posisi:

```javascript
if (minta > stok) {
    totalTerlayani += stok;
    stok = 0;
    hariKehabisan = i + 1;
    continue;          // ← setelah stok dihabiskan, hari itu selesai
}
```

`continue` di situ dipakai karena **kerja hari itu sudah selesai** — stok sudah dihabiskan.
Yang tersisa hanya `stok -= minta`, dan itu tidak boleh dijalankan karena `stok` sudah `0`.

Kalau `continue` diganti `break`, hasilnya sama untuk data ini, tapi beda untuk data lain:
`break` akan menghentikan loop padahal hari berikutnya mungkin masih bisa dilayani
kalau ada penambahan stok.

---

## 5. Nama yang perlu diganti

| Nama lama        | Masalah               | Usulan          |
|------------------|-----------------------|-----------------|
| `hariKehabisan`  | kejadian, bukan nilai | `hariStokHabis` |
| `minta`          | satuan tidak jelas    | `jumlahDiminta` |
| `totalTerlayani` | sudah cukup baik      | —               |

Jawaban paling kuat menyebut `hariKehabisan` karena namanya bisa dibaca sebagai boolean
("apakah kehabisan?") padahal isinya angka hari.

---

## Yang diuji dan bobotnya

| Kemampuan                                     | Pertanyaan | Bobot |
|-----------------------------------------------|------------|-------|
| membaca tipe dan peran variabel               | 1          | 20%   |
| melacak akumulasi dan cetakan bersyarat       | 2          | 25%   |
| memprediksi dampak perubahan data             | 3          | 25%   |
| membedakan `break` dan `continue` dari posisi | 4          | 20%   |
| menilai kualitas nama                         | 5          | 10%   |

**Lulus kalau ≥ 70%** dan tidak ada satu pun pertanyaan yang dijawab kosong.
