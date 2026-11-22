# Kunci — Reading 02

Dibuka **setelah** menjawab kelima pertanyaan.

---

## 1. Apa yang masuk

| Nama             | Nilai           | Tipe   | Berubah?                             |
|------------------|-----------------|--------|--------------------------------------|
| `stokAwal`       | `10`            | number | tidak (`const`)                      |
| `batasKritis`    | `4`             | number | tidak (`const`)                      |
| `stok`           | `10` lalu turun | number | **ya** (`let`)                       |
| `hariKehabisan`  | `0` lalu `3`    | number | **ya** (`let`)                       |
| `totalTerlayani` | `0` lalu `10`   | number | **ya** (`let`)                       |
| `minta`          | `3,4,5,6,7`     | number | tidak (`const`, dibuat tiap putaran) |
| `i`              | `1..5`          | number | **ya** (`let` di `for`)              |

Yang berubah hanya variabel `let`. Semua `const` tetap.

`minta` menarik: dia `const`, tapi **dibuat ulang** setiap putaran dengan nilai baru.
Jadi nilainya berubah, tapi variabelnya tidak pernah ditugaskan ulang.

---

## 2. Apa yang keluar

**Empat baris**, bukan tiga:

```
hari 2: stok menipis, sisa 3
stok akhir     : 0
total terlayani: 10
hari kehabisan : 3
```

Baris pertama berasal dari `if (stok < batasKritis)` **di dalam** loop.
Tiga baris berikutnya dari luar loop.

Kalau kamu menjawab tiga, berarti melewatkan `console.log` yang ada di dalam loop.

### Telusurannya

| Hari | `minta` | `stok` sebelum | cukup? | `stok` sesudah | peringatan?     |
|------|---------|----------------|--------|----------------|-----------------|
| 1    | 3       | 10             | ya     | 7              | tidak           |
| 2    | 4       | 7              | ya     | 3              | **ya**, `3 < 4` |
| 3    | 5       | 3              | tidak  | 0              | — (`continue`)  |
| 4    | 6       | 0              | —      | —              | `break`         |

---

## 3. Kalau `batasKritis` jadi `2`

| Nilai                | Hasil                  |
|----------------------|------------------------|
| `stok akhir`         | `0` (tidak berubah)    |
| `total terlayani`    | `10` (tidak berubah)   |
| `hari kehabisan`     | `3` (tidak berubah)    |
| peringatan "menipis" | **hilang sama sekali** |

**Kenapa:** `batasKritis` hanya dipakai di satu tempat — syarat `if (stok < batasKritis)`.
Dia **tidak** mempengaruhi perhitungan stok maupun kapan habis.

Dan `stok` tidak pernah bernilai `2` atau `1`: dari `3` langsung jadi `0` di hari 3.
Jadi `stok < 2` tidak pernah benar.

**Pelajaran:** tidak semua perubahan nilai mengubah hasil. Yang berubah hanya
**satu-satunya baris yang memakainya**.

---

## 4. Dua baris yang rapuh

| Baris      | Efek                                                             |
|------------|------------------------------------------------------------------|
| `break`    | menghentikan **seluruh loop**, sisa hari tidak diproses          |
| `continue` | melewati **sisa badan** di hari itu, hari berikutnya tetap jalan |

Bedanya menurut posisi:

```javascript
if (stok <= 0) {
    break;              // <- sebelum kerja hari itu
}

if (minta > stok) {
    totalTerlayani += stok;
    stok = 0;
    hariKehabisan = i;
    continue;           // <- setelah kerja hari itu selesai
}
```

`break` dipakai kalau **tidak ada gunanya melanjutkan** — stok sudah `0`, hari
berikutnya pasti gagal juga.

`continue` dipakai kalau **kerja hari itu sudah selesai** — stok sudah dihabiskan.
Yang tersisa hanya `stok -= minta`, dan itu tidak boleh jalan karena `stok` sudah `0`.

---

## 5. Nama yang perlu diganti

| Nama lama        | Masalah                                        | Usulan          |
|------------------|------------------------------------------------|-----------------|
| `minta`          | kata kerja, bukan benda; satuannya tidak jelas | `jumlahDiminta` |
| `hariKehabisan`  | bisa dibaca sebagai boolean                    | `hariStokHabis` |
| `totalTerlayani` | sudah cukup baik                               | —               |

Jawaban paling kuat menyebut **`minta`**: namanya kata kerja, padahal isinya
**angka jumlah barang**. Membaca `const minta = i + 2` menimbulkan pertanyaan:
minta apa? siapa yang minta?

---

## Yang diuji dan bobotnya

| Kemampuan                                     | Pertanyaan | Bobot |
|-----------------------------------------------|------------|-------|
| membaca tipe dan peran variabel               | 1          | 20%   |
| melacak akumulasi dan cetakan bersyarat       | 2          | 25%   |
| memprediksi dampak perubahan nilai            | 3          | 25%   |
| membedakan `break` dan `continue` dari posisi | 4          | 20%   |
| menilai kualitas nama                         | 5          | 10%   |

**Lulus kalau ≥ 70%** dan tidak ada satu pun pertanyaan yang dijawab kosong.
