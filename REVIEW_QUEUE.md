# Utang

Satu tempat untuk semua utang. Bagian atas dibaca **setiap sesi**, sebelum belajar hal baru.

Aturan #57: utang wajib di-commit saat dibuka atau ditutup. Utang yang tidak terlihat akan
terlupakan, dan utang yang terlupakan jadi utang baru.

---

## Terbuka

| Item                                       | Jenis   | Muncul     | Jatuh tempo    | Status   |
|--------------------------------------------|---------|------------|----------------|----------|
| alasan yang bisa dipertahankan             | konsep  | 2026-11-15 | **2026-11-19** | 1        |
| posisi vs isi                              | konsep  | 2026-11-15 | menunggu array | 1        |
| memisahkan jenis bug 1 dan 5               | pola    | 2026-11-17 | **2026-11-18** | 1        |
| menemukan dead store di kode panjang       | pola    | 2026-11-17 | **2026-11-18** | 1        |
| pattern drill 20 dari 20                   | blok    | 2026-11-17 | 2026-11-18     | sedang   |
| `do...while` gerbang enam level            | gerbang | 2026-11-17 | 2026-11-18     | 0 dari 6 |
| nested loop gerbang enam level             | gerbang | 2026-11-17 | 2026-11-19     | 0 dari 6 |
| empat file EXPLAIN masih kosong            | level   | 2026-11-17 | 2026-11-19     | 0 dari 4 |
| array dasar belum diajarkan                | materi  | 2026-11-17 | minggu 3       | belum    |
| hook pre-commit menolak blok belum selesai | sistem  | 2026-11-17 | 2026-11-20     | belum    |

**Yang paling mendesak:** dua item jatuh tempo 18 Nov, dan `do...while` belum digerbang.

---

## Selesai

| Item                             | Hasil | Tanggal |
|----------------------------------|-------|---------|
| jumlah baris = jumlah putaran    | PASS  | 17 Nov  |
| angka yang ditambahkan pada `+=` | PASS  | 15 Nov  |
| `??` alasan pemakaian            | PASS  | 12 Nov  |
| pernyataan vs ekspresi           | PASS  | 12 Nov  |
| Ternary                          | PASS  | 12 Nov  |
| `switch` + `break`               | PASS  | 12 Nov  |
| `&&` `\|\|` short-circuit        | PASS  | 12 Nov  |
| `!` logical NOT                  | PASS  | 12 Nov  |
| `%` selain 2                     | PASS  | 12 Nov  |
| nested loop                      | PASS  | 12 Nov  |
| akumulasi di dalam `for`         | PASS  | 12 Nov  |

---

## Cara pakai

1. Setiap kali konsep lulus gerbang, tambahkan satu baris di **Terbuka**
2. Isi jatuh tempo = tanggal lulus + 2 hari
3. Saat tanggalnya tiba, uji **1 soal MEDIUM** tanpa buka materi
4. Kalau lulus, pindahkan ke **Selesai**. Kalau gagal, tetap di Terbuka dan tanggal dimundurkan

Kalau gagal: status turun ke 2, masuk antrean lagi 2 hari kemudian.

---

## Rincian

### Antrean

Format: **konsep** · lulus → jatuh tempo · hasil · status

**Ternary** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: `>=` yang menentukan, `0 >= 0` true → ambil kiri, `-5` → ambil kanan

**`switch` + `break`** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: 2 baris (admin + user), fallthrough karena tidak ada `break`, guest 1 baris

**`&&` `\|\|` short-circuit** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 2/3: berhenti di `user.alamat` alasan falsy benar; sempat sebut "ada error", pulih di cek kecil

**`!` logical not** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 2/3: `!false` → `true` benar; salah sebut tipe hasil `\|\|` sebagai string, pulih di cek kecil

**`??` vs `\|\|`** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: `a`=0 karena nullish, `b`="tanpa nama", `c`=100 karena `\|\|` ganti falsy

**Kosong.** Semua item sudah direview 2026-11-12.

### Masuk antrean baru

Dua kesalahan ditemukan saat memeriksa explain back Day 3. Keduanya sudah diuji ulang
2026-11-12 dan lulus, tapi cara lulusnya berbeda, jadi jadwalnya dibedakan.

**akumulasi di dalam `for`** · muncul 2026-11-12 → **PASS 2026-11-12** · status 3
- Diuji ulang dengan 10 soal per konsep (Gate Log #75): 10 dari 10 benar
- Bagian A (bentuk perubahan), B (batas dan putaran), C (akumulasi) semuanya lulus
- Aturan yang membuat lulus: tulis deret sampai angka gagal, tabel empat kolom untuk akumulasi
- Jatuh tempo berikutnya: 2026-11-14

**`%` dengan angka selain 2** · muncul 2026-11-12 → **PASS 2026-11-12** · status 3
- Gate Log #78: S4 (`% 3` dengan `break`) `3` benar, S8 (`% 5`) `10` benar
- S9 (`% 3` dengan `continue`) gagal karena angka yang ditambahkan, bukan karena `%`
- Jatuh tempo berikutnya: 2026-11-16

**angka yang ditambahkan pada `+=`** · muncul 2026-11-12 → **PASS 2026-11-15** · status 2
- Uji ulang dengan soal tanpa array: menjawab `harga`, bukan `i` — tepat
- Nilai akhir dijawab `750000` (seharusnya `500000`), tapi itu pola lain, bukan `+=`
- Diuji lagi 2026-11-17 bersama item lain

**jumlah baris tidak cocok dengan jumlah putaran** · muncul 2026-11-15 → **PASS 2026-11-17** · status 2
- Diuji: `for` 1..8 dengan `if (i % 2 !== 0) continue`
- Jawab `20`, tabel 8 baris, 4 skip dan 4 penjumlahan. Cocok
- Pola yang salah 5 kali tidak muncul lagi
- Re-check berikutnya 2026-11-21 (status 2, interval 4 hari)
- S9 dijawab `9`, seharusnya `37`. Menambahkan `1` dan `2` bergantian, bukan nilai `i`
- Cek cepat setelahnya (`total += i * 2`) benar `30`
- Aturan yang harus dipakai: lihat huruf setelah `+=`, itu yang ditambahkan

**nested loop** · muncul 2026-11-12 → **PASS 2026-11-12** · status 3
- Gate Log #77: 3 dari 3 benar
- Q1 `12` (sempat `4`), Q2 array enam elemen, Q3 `10` (sempat `45`)
- Struktur dipahami sebelum hitungannya benar. Teknik: tulis jumlah baris dulu
- Jatuh tempo berikutnya: 2026-11-16

**memisahkan jenis bug 1 dan 5** · muncul 2026-11-17 → jatuh tempo 2026-11-18 · status 1
- Salah di nomor 13 dan 19: tidak bisa memisahkan off-by-one dari batas tidak diperiksa
- Kunci: tanya "ada `[i]`?" — ada berarti 5, tidak ada berarti 1
- Diuji dengan: 5 potongan campuran jenis 1 dan 5

**menemukan dead store di kode panjang** · muncul 2026-11-17 → jatuh tempo 2026-11-18 · status 1
- Nomor 6 (4 baris) benar, nomor 18 (8 baris) salah. Jenis sama
- Kunci: cari nama variabel dua kali, satu per satu
- Diuji dengan: potongan 8+ baris dengan satu variabel terbuang

**alasan yang bisa dipertahankan** · muncul 2026-11-15 → diuji 2026-11-17 · **GAGAL** · status 1
- Diuji: tulis komentar review untuk `for` dengan `i++` di dalam loop
- Menyebut baris yang salah (benar) dan perbaikan (benar), tapi **tidak menyebut akibat**
- "Kapan rusak" masih kabur: tidak ada angka, tidak ada kondisi
- Nilai tertulis: 2 dari 4. Syarat lulus 3
- **Setelah ditanya ulang, penjelasannya benar:** "i++ menambah lagi jadi 2x nambah,
  putaran pertama yang tadinya 1 jadi 2"
- Diagnosis: **paham mekanismenya, belum bisa menuliskannya langsung.** Bukan gagal konsep
- Yang kurang: **angka**. Versi kunci punya `12` vs `15`, versinya tidak
- Aturan yang dibutuhkan: komentar wajib menyebut **akibat**, bukan cuma letak
- Diulang 2026-11-19

**posisi vs isi** · muncul 2026-11-15 → **DITUNDA** sampai array diajarkan · status 1
- `i` itu posisi, `penjualan[i]` itu isi
- Array materi minggu 3. Tidak bisa diuji sekarang
- Bukan terlewat, tapi menunggu prasyarat

**`??` alasan pemakaian** · muncul 2026-11-12 → jatuh tempo 2026-11-14 · PASS 2026-11-12 · status 3
- 3/3: `minimum`=5 karena `\|\|` ganti `0`, `toko`="Tanpa Nama", dengan `??` jadi 0, "", 0
- Catatan: sempat menawarkan solusi tanpa cadangan, yang hanya aman kalau kolom wajib isi

**pernyataan vs ekspresi** · muncul 2026-11-12 → jatuh tempo 2026-11-14 · **PASS 2026-11-12** · status 3
- Nomor 1 tepat tanpa dipersempit: `if` itu pernyataan, bukan ekspresi
- Nomor 3 keliru: mengira `=` penyebabnya, padahal `=` ada di kedua versi
- Nomor 4 arah benar, tapi menyebut "versi 1" yang justru versi error
- Lulus karena inti konsep dijawab tepat tanpa bantuan

---

## Sudah direview

- **Ternary** · 2026-11-12 · PASS · status 3
- **`switch` + `break`** · 2026-11-12 · PASS · status 3
- **`&&` `\|\|` short-circuit** · 2026-11-12 · PASS · status 3
- **`!` logical not** · 2026-11-12 · PASS · status 3
- **`??` vs `\|\|`** · 2026-11-12 · PASS · status 3

**Jatuh tempo berikutnya:** 2026-11-16 (`+=` tanpa array), lalu 2026-11-17 (alasan).

---

## Aturan

1. **Jangan hapus baris.** Kalau gagal, pindahkan ke tabel bawah dan tambahkan baris baru.
2. Re-check pakai soal **MEDIUM** — bukan soal yang sama waktu lulus.
3. Kalau lupa 3 hari, tetap diuji. Lebih baik terlambat daripada tidak.
4. Sebelum interview atau sebelum melamar, seluruh antrean harus kosong.
