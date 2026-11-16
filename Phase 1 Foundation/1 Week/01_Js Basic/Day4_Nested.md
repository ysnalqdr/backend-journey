# Day 4 — Nested Loop

Bahan bacaan. Lanjutan `Day4_While.md`.

Baca sampai habis sebelum soal. Jangan melompat ke gerbang.

---

# Bagian 1 — apa itu nested loop

Loop di dalam loop. Nama lengkapnya **nested loop**, atau loop bersarang.

```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=1 j=2
i=1 j=3
i=2 j=1
i=2 j=2
i=2 j=3
```

Aturannya satu kalimat:

> **Loop luar jalan satu kali, loop dalam jalan sampai habis.**

Loop dalam tidak "berhenti di tengah". Dia selalu diselesaikan penuh sebelum loop luar naik.

---

# Bagian 2 — cara membaca, dari luar ke dalam

Jangan baca dua loop sekaligus. Baca berlapis.

## Langkah 1 — berapa putaran loop luar?

```javascript
for (let i = 1; i <= 2; i++)
```

| periksa | `i` | kondisi        | jalan? |
|---------|-----|----------------|--------|
| 1       | 1   | `1 <= 2` ya    | ya     |
| 2       | 2   | `2 <= 2` ya    | ya     |
| 3       | 3   | `3 <= 2` tidak | tidak  |

2 putaran.

## Langkah 2 — untuk **satu** putaran luar, berapa putaran dalam?

```javascript
for (let j = 1; j <= 3; j++)
```

3 putaran.

## Langkah 3 — kalikan

`2 × 3 = 6` putaran total.

Ini cara cepat. Untuk jawaban yang butuh isi, pakai tabel.

---

# Bagian 3 — tabel dua kolom

Untuk nested, tabel pemeriksaan dari `Day4_While.md` diperluas: satu kolom per variabel.

| `i` | `j` | tercetak  |
|-----|-----|-----------|
| 1   | 1   | `i=1 j=1` |
| 1   | 2   | `i=1 j=2` |
| 1   | 3   | `i=1 j=3` |
| 2   | 1   | `i=2 j=1` |
| 2   | 2   | `i=2 j=2` |
| 2   | 3   | `i=2 j=3` |

Jumlah baris = jumlah putaran. Sama seperti sebelumnya — **jumlah baris tabel = jumlah putaran**, tanpa perlu dihitung terpisah.

## Yang paling sering salah

Perhatikan kolom `j`: setelah `i` naik dari `1` ke `2`, `j` **kembali ke 1**.

Kenapa? Karena `let j = 1` ditulis **di dalam** loop luar. Setiap kali loop luar jalan, baris itu dijalankan ulang, jadi `j` dibuat baru mulai dari 1.

Kalau `let j = 1` ditulis di luar, hasilnya berbeda total — dan itu bug.

---

# Bagian 4 — batas loop dalam boleh memakai `i`

Ini yang membuat nested berguna.

```javascript
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log("");
}
```

Output:

```
1
1 2
1 2 3
1 2 3 4
```

Batasnya `j <= i`, bukan `j <= 4`. Jadi loop dalam makin panjang setiap putaran luar.

| `i` | batas `j` | `j` yang jalan |
|-----|-----------|----------------|
| 1   | `j <= 1`  | 1              |
| 2   | `j <= 2`  | 1, 2           |
| 3   | `j <= 3`  | 1, 2, 3        |
| 4   | `j <= 4`  | 1, 2, 3, 4     |

Total: `1 + 2 + 3 + 4 = 10` putaran. Bukan `4 × 4 = 16`.

**Kenapa ini penting:** kalau batas loop dalam bergantung pada `i`, kamu **tidak bisa** mengalikan. Harus dijumlahkan per putaran.

---

# Bagian 5 — `break` di nested hanya keluar dari loop dalam

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=2 j=1
i=3 j=1
```

`break` menghentikan **loop dalam saja**. Loop luar tetap jalan sampai selesai.

Ini sering disalahpahami. Kalau kamu ingin berhenti total, `break` tidak cukup.

## Keluar dari dua loop sekaligus — label

Label adalah nama diikuti titik dua, ditulis sebelum loop.

```javascript
luar: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break luar;
        }
        console.log("i=" + i + " j=" + j);
    }
}
```

Output:

```
i=1 j=1
i=1 j=2
i=1 j=3
i=2 j=1
```

Setelah `i=2 j=1`, kondisi terpenuhi dan `break luar` menghentikan **keduanya**.

Label jarang dipakai. Kalau kamu merasa butuh, biasanya ada cara lebih sederhana — misalnya memindahkan loop ke fungsi dan memakai `return`. Fungsi masuk minggu 2, jadi untuk sekarang cukup tahu label itu ada.

---

# Bagian 6 — `continue` di nested

```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 4; j++) {
        if (j % 2 === 0) continue;
        console.log(i + ":" + j);
    }
}
```

Output:

```
1:1
1:3
2:1
2:3
```

`continue` melewati **satu putaran loop dalam saja**. Loop luar tidak terpengaruh.

Bedanya dengan `break`: `break` menghentikan loop dalam seluruhnya, `continue` hanya melewati satu putaran.

---

# Bagian 7 — nested dengan `while`

Boleh dicampur. Yang penting: variabel loop dalam harus **dibuat ulang** setiap kali loop luar jalan.

```javascript
let i = 1;

while (i <= 2) {
    let j = 1;          // WAJIB di dalam loop luar

    while (j <= 3) {
        console.log(i + "-" + j);
        j++;
    }

    i++;
}
```

Output:

```
1-1
1-2
1-3
2-1
2-2
2-3
```

**Bug paling umum di sini:** `let j = 1` ditulis di luar loop luar.

```javascript
let i = 1;
let j = 1;              // SALAH — di luar

while (i <= 2) {
    while (j <= 3) {
        console.log(i + "-" + j);
        j++;
    }
    i++;
}
```

Hasilnya hanya `1-1`, `1-2`, `1-3`. Karena setelah loop dalam selesai, `j` sudah `4` dan tidak pernah direset. Loop dalam tidak jalan lagi di putaran kedua.

---

# Bagian 8 — tiga lapis

Boleh, tapi jarang perlu.

```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        for (let k = 1; k <= 2; k++) {
            // jalan 8 kali
        }
    }
}
```

`2 × 2 × 2 = 8`.

Kalau kamu butuh tiga lapis, biasanya ada cara lebih baik. Tiga lapis berarti pekerjaannya `n³` — untuk 100 data itu satu juta langkah.

---

# Bagian 9 — akumulasi di nested

```javascript
let total = 0;

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        total += i * j;
    }
}
```

Tabelnya:

| `i` | `j` | `i * j` | `total` setelah |
|-----|-----|---------|-----------------|
| 1   | 1   | 1       | `0 + 1 = 1`     |
| 1   | 2   | 2       | `1 + 2 = 3`     |
| 2   | 1   | 2       | `3 + 2 = 5`     |
| 2   | 2   | 4       | `5 + 4 = 9`     |
| 3   | 1   | 3       | `9 + 3 = 12`    |
| 3   | 2   | 6       | `12 + 6 = 18`   |

6 baris, 6 penjumlahan. Cocok. Hasil `18`.

Aturan lama tetap berlaku: **jumlah baris = jumlah putaran.**

---

# Bagian 10 — checklist nested

Dipakai sebelum menjawab soal atau membaca kode orang.

| #   | Periksa                               | Kenapa                            |
|-----|---------------------------------------|-----------------------------------|
| 1   | Berapa putaran loop luar?             | tabel luar dulu                   |
| 2   | Batas loop dalam tetap atau ikut `i`? | kalau ikut `i`, tidak bisa dikali |
| 3   | Variabel loop dalam dibuat di dalam?  | kalau di luar, tidak reset        |
| 4   | Ada `break`? Keluar dari loop mana?   | hanya loop dalam                  |
| 5   | Ada `continue`? Melewati apa?         | satu putaran dalam                |
| 6   | Jumlah baris tabel = jumlah putaran?  | cek terakhir                      |

---

# Ringkas

| Istilah     | Arti                                    |
|-------------|-----------------------------------------|
| nested loop | loop di dalam loop                      |
| loop luar   | yang jalan lebih lambat                 |
| loop dalam  | yang jalan penuh setiap putaran luar    |
| label       | nama untuk `break` keluar dari dua loop |

Rumus yang berguna:

| Kondisi              | Cara hitung putaran        |
|----------------------|----------------------------|
| batas dalam tetap    | `luar × dalam`             |
| batas dalam ikut `i` | jumlahkan per putaran luar |

Sudah? Lanjut ke gerbang EASY.
