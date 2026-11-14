# HARD_SKILL.md

Hard skill: kemampuan teknis yang dinilai **benar atau salah**, bukan dari alasan.

Bedanya dengan soft skill di `Working Skills/`: soft skill dinilai dari pertimbangan yang bisa
dipertahankan, hard skill punya jawaban tunggal.

Setiap hard skill punya minggu mulai. Sebelum minggu itu, soalnya belum dibuat — dan itu
disengaja, karena prasyaratnya belum ada.

---

## Tingkat 1 — bisa mulai sekarang

### 1. Membaca stack trace

**Mulai:** minggu 1
**Kenapa sekarang:** error sudah muncul di latihan sendiri sejak hari pertama. Tidak butuh
materi baru.

**Yang dilatih:**

| Bagian        | Yang dibaca                                               |
|---------------|-----------------------------------------------------------|
| baris pertama | jenis error: `TypeError`, `SyntaxError`, `ReferenceError` |
| pesan         | apa yang gagal: "Cannot read properties of null"          |
| `at` pertama  | baris kode penyebab, bukan baris yang memanggil           |
| sisa `at`     | rantai pemanggilan, dibaca dari bawah ke atas             |

**Soal yang akan dibuat:** diberi error asli dari latihan sendiri, lalu ditanya: jenis error-nya
apa, baris mana penyebabnya, nilai apa yang bermasalah, dan apa perbaikannya.

**Cara menilai:** benar atau salah. Tidak ada "hampir benar".

---

### 2. Menulis test kecil

**Mulai:** minggu 2
**Kenapa minggu 2:** butuh fungsi sebagai bahan uji, dan fungsi masuk minggu 2.

**Yang dilatih:**

| Langkah | Isi                                                            |
|---------|----------------------------------------------------------------|
| 1       | tentukan satu perilaku yang diuji                              |
| 2       | tentukan input dan hasil yang diharapkan                       |
| 3       | tulis pemeriksaan: `if (hasil !== harap) console.log("gagal")` |
| 4       | tambahkan kasus batas: kosong, nol, negatif                    |

**Soal yang akan dibuat:** diberi fungsi yang sudah jadi, tulis 3 kasus uji yang berbeda.
Dinilai dari apakah kasusnya benar-benar menguji hal berbeda, atau mengulang kasus yang sama.

**Cara menilai:** kasus uji benar atau salah. Kasus yang tidak menguji apa pun dihitung salah.

---

### 3. Trace jadi rumus

**Mulai:** minggu 3
**Kenapa minggu 3:** butuh loop dan array.

**Kenapa ini dilatih terpisah:** riset (ACM 2021) menemukan mahasiswa bisa **menelusuri** kode
dengan benar tapi gagal mengubah hasil telusur menjadi bentuk umum. Langkah itu yang tersulit,
bukan menghafal O(n).

**Yang dilatih:**

```javascript
for (let i = 0; i < n; i++) { }          // n putaran
for (let i = 1; i <= n; i += 2) { }      // n/2 putaran
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { }      // n x n
}
```

**Soal yang akan dibuat:** diberi kode, hitung putarannya untuk `n = 4` dan `n = 10`, lalu
tulis bentuk umumnya dalam `n`.

**Cara menilai:** bentuk umumnya benar atau salah. Jawaban "banyak" dihitung salah.

---

## Tingkat 2 — setelah materinya ada

### 4. Membaca dokumentasi API

**Mulai:** minggu 6. Butuh HTTP dulu.

Berbeda dari mencari di MDN. Yang dibaca: endpoint, parameter, tipe data, kode status,
dan contoh respons. Yang dinilai: bisa menemukan parameter wajib tanpa membaca seluruh halaman.

### 5. Merancang endpoint dan status code

**Mulai:** minggu 8. Butuh Express.

Yang dinilai: endpoint untuk satu fitur, dengan method, path, status code, dan bentuk respons.
Salah status code dihitung salah.

### 6. Functional dependency

**Mulai:** minggu 11. **Wajib sebelum normalisasi.**

Riset pada pemula normalisasi database (ACM 2024) menemukan siswa gagal karena pengetahuan
rapuh pada konsep paling awal: mereka tidak paham dependency, jadi proses normalisasi tidak
bisa dipelajari. Urutannya tidak bisa dibalik.

Yang dinilai: diberi tabel, tentukan atribut mana yang bergantung pada atribut mana.

### 7. Merancang skema data

**Mulai:** minggu 12. Setelah dependency.

Yang dinilai: dari deskripsi kebutuhan, hasilkan tabel dengan kolom, tipe, primary key,
foreign key. Salah tipe atau salah relasi dihitung salah.

### 8. Performa query dan index

**Mulai:** minggu 12 dasar, minggu 25+ dalam.

Yang dinilai: kenapa query ini lambat, index apa yang dibutuhkan, dan kenapa index tidak
selalu mempercepat.

---

## Tingkat 3 — setelah proyek nyata

### 9. Failure mode dan system design

**Mulai:** minggu 39.

Yang dinilai: diberi satu skenario, sebutkan apa yang gagal kalau satu komponen mati, dan
bagaimana mencegahnya.

---

## Ringkasan jadwal

| Minggu | Hard skill baru                            |
|--------|--------------------------------------------|
| 1      | Membaca stack trace                        |
| 2      | Menulis test kecil                         |
| 3      | Trace jadi rumus                           |
| 6      | Membaca dokumentasi API                    |
| 8      | Merancang endpoint dan status code         |
| 11     | Functional dependency                      |
| 12     | Merancang skema data, performa query dasar |
| 25     | Performa query dalam                       |
| 39     | Failure mode dan system design             |

---

## Aturan

1. **Jangan buat soal sebelum minggu mulainya.** Prasyaratnya belum ada, dan riset menunjukkan
   mengajarkan konsep lanjut tanpa dasar menghasilkan pengetahuan rapuh.
2. **Satu hard skill per sesi**, bukan semua sekaligus.
3. **Dinilai benar atau salah.** Tidak ada nilai sebagian.
4. **Kalau gagal, ulangi dengan soal berbeda**, bukan soal yang sama.

---

## Sumber

| Sumber                     | Yang diambil                               |
|----------------------------|--------------------------------------------|
| SWEBOK V4 bab 5            | testing sebagai area tersendiri            |
| SWEBOK V4 bab 12, 13       | kualitas dan keamanan                      |
| Riset pasar backend 2026   | debugging, performa database, failure mode |
| ACM 2021, runtime analysis | langkah trace jadi rumus paling sulit      |
| ACM 2024, normalisation    | dependency wajib sebelum normalisasi       |
