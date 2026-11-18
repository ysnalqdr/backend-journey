# Hasil Pattern Drill 03

**Tanggal:** 2026-11-18
**Blok:** `pattern-01` (ulangan kedua)
**Skor:** 15 dari 20
**Kategori:** belum lulus — ulangi besok

---

## Perbandingan tiga seri

|         | Drill 01 | Drill 02 | Drill 03  |
|---------|----------|----------|-----------|
| Skor    | 16/19    | 17/20    | **15/20** |
| Jenis 5 | 1/3      | 2/3      | **3/3**   |
| Jenis 7 | 1/3      | 3/3      | **3/3**   |
| Jenis 4 | 1/2      | 2/2      | **2/2**   |
| Jenis 1 | 0/1      | 1/1      | **0/2**   |

Jenis 5 dan 7 sudah stabil. Jenis 1 masih kosong.

---

## Skor per soal

| #   | Jawaban | Kunci | Hasil                    |
|-----|---------|-------|--------------------------|
| 1   | 5       | 5     | benar                    |
| 2   | 0       | 1     | salah                    |
| 3   | 2       | 2     | benar                    |
| 4   | 3       | 3     | benar                    |
| 5   | 4       | 4     | benar                    |
| 6   | 6       | 6     | benar                    |
| 7   | 7       | 7     | benar                    |
| 8   | 0       | 0     | benar                    |
| 9   | 5       | 5     | benar                    |
| 10  | 0       | 1     | salah                    |
| 11  | 7       | 7     | benar                    |
| 12  | 4       | 4     | benar                    |
| 13  | 0       | 3     | soal ambigu saat dijawab |
| 14  | 0       | 0     | benar                    |
| 15  | 0       | 6     | soal ambigu saat dijawab |
| 16  | 5       | 5     | benar                    |
| 17  | 2       | 2     | benar                    |
| 18  | 0       | 0     | benar                    |
| 19  | 2       | 0     | salah                    |
| 20  | 7       | 7     | benar                    |

---

## Diagnosis

### Jenis 1 masih kosong (nomor 2 dan 10)

Kedua soal ini **jalan tanpa error**. Tidak ada `undefined`, tidak ada `NaN`.

Yang membedakan hanya satu: **hasil tidak sesuai maksud**.

| Soal | Maksud | Hasil                      |
|------|--------|----------------------------|
| 2    | `1..5` | `1,2,3,4` — `5` hilang     |
| 10   | `1..6` | `[1,2,3,4,5]` — `6` hilang |

Kebiasaan yang terbentuk: memeriksa **"apakah ada yang rusak"**. Untuk jenis 1, pertanyaannya
harus **"apakah hasilnya sesuai maksud"**.

### Nomor 19

```javascript
let hitung = 0;
for (let i = 0; i < 10; i += 4) {
    hitung++;
}
```

Dijawab `2` (shadowing). Tidak ada `let` di dalam loop. `hitung` menghitung putaran, dan
namanya juga `hitung`. **Benar, jawaban 0.**

---

## Pelanggaran aturan #24c — keempat kalinya

Nomor 13 dan 15 tidak menyebut **maksud kode** saat dijawab. Tanpa maksud, keduanya punya
dua jawaban sah:

| Soal | Tanpa maksud                 | Dengan maksud |
|------|------------------------------|---------------|
| 13   | `0` atau `3`, dua-duanya sah | hanya `3`     |
| 15   | `0` atau `6`, dua-duanya sah | hanya `6`     |

Ini kesalahan yang sama empat kali:

| #   | Kejadian                                                   |
|-----|------------------------------------------------------------|
| 1   | drill 01 nomor 9 — infinite loop tidak ada di tujuh daftar |
| 2   | drill 02 nomor 15 — tidak menyebut maksud                  |
| 3   | drill 02 nomor 13 — tidak menyebut maksud                  |
| 4   | drill 03 nomor 13 dan 15 — tidak menyebut maksud           |

**Tindakan:** soal bertipe 1, 3, dan 6 **wajib** menyebut maksud, karena ketiganya dinilai
dengan membandingkan hasil terhadap maksud. Tanpa maksud, soal tidak sah.

---

## Yang perlu dilatih

| #   | Yang dilatih          | Cara                                                      |
|-----|-----------------------|-----------------------------------------------------------|
| 1   | jenis 1 vs 0          | baca maksud dulu, hitung hasil, bandingkan                |
| 2   | jenis 1 vs 5          | tanya: ada `[i]`? ada `undefined`? atau cuma kurang satu? |
| 3   | membaca nama variabel | `hitung` = putaran, `total` = nilai                       |

---

## Rencana

Ulangi **2026-11-19** dengan seri 04. Target 20 dari 20.

Fokus seri 04: **jenis 1 saja**, dicampur dengan jenis 5 sebagai pembanding.
