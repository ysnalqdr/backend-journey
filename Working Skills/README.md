# Working Skills

Latihan untuk kemampuan yang dipakai di kerja, bukan di ujian.

Bedanya:

| Gate harian        | Working Skills                 |
|--------------------|--------------------------------|
| tulis dari nol     | ubah kode yang sudah ada       |
| satu konsep        | banyak hal bercampur           |
| ada jawaban benar  | ada jawaban yang bisa diterima |
| materi disiapkan   | cari sendiri                   |
| tidak ada reviewer | ada komentar review            |

Sumber tiap aturan ada di README #29–#34.

---

## Isi folder

| Folder       | Untuk                                           | Aturan   |
|--------------|-------------------------------------------------|----------|
| `Templates/` | format kosong, disalin setiap sesi              | —        |
| `Kunci/`     | jawaban — **jangan dibuka sebelum mengerjakan** | —        |
| `Reading/`   | file kode asing + pertanyaan                    | #29      |
| `Review/`    | kode berisi bug untuk direview                  | #30      |
| `Docs/`      | tugas mencari jawaban di dokumentasi resmi      | #31      |
| `Debug/`     | bug report dan telusur                          | #32, #34 |

---

## Penjaga anti-bocor

Setiap file `.js` di folder ini punya saklar di baris atas:

```javascript
const sudahMenjawab = false;
```

Selama `false`, file hanya mencetak STOP. Kode aslinya tidak dijalankan, output tidak terlihat.

**Ubah jadi `true` hanya setelah** kamu menulis jawaban di `Trace.md`. Itu satu-satunya cara menjalankan latihan ini dengan benar.

Kalau dijalankan sebelum menjawab, latihan hangus — kamu melihat output, bukan memprediksinya.

---

## Alur satu latihan

```
1. Buka file .md, baca konteks dan pertanyaan
2. Baca file .js — TANPA menjalankan
3. Tulis jawaban di Trace.md
4. Ubah saklar jadi true, jalankan
5. Bandingkan dengan Kunci/
6. Isi kolom "yang meleset" di Trace.md
7. Update status di SKILLS.md bagian Working Skills
```

Kalau langkah 3 dilewati, latihan ini tidak mengukur apa pun.

---

## Blok yang ditagih

Rotasi berbasis hari sudah dihapus. Alasannya: kalau Senin terlewat, blok Reading hilang tanpa
ada yang menagihnya. Belajar tidak selalu jatuh di hari yang sama.

Gantinya, setiap blok punya status sendiri di `status.json`, dan ditagih setiap sesi.

```bash
node working_skills.js                  # apa yang harus dikerjakan sekarang
node working_skills.js --selesai <id>   # tandai satu blok selesai
```

Skrip itu memilih blok yang paling lama tidak disentuh, dan memperingatkan blok yang tertunda
lebih dari 7 hari. `check_system.js` ikut memeriksanya, jadi tidak bisa diabaikan.

Aturannya ada di README #41.

## Isi `status.json`

| Field       | Arti                                    |
|-------------|-----------------------------------------|
| `id`        | nama pendek untuk menandai selesai      |
| `nama`      | judul blok                              |
| `soal`      | file pertanyaan                         |
| `kunci`     | file jawaban                            |
| `kemampuan` | Working Skill yang dilatih              |
| `status`    | `belum`, `sedang`, atau `selesai`       |
| `terakhir`  | tanggal terakhir dikerjakan             |
| `catatan`   | hal yang perlu diingat saat mengerjakan |

## Urutan yang disarankan

Bukan wajib, tapi ini urutan yang paling masuk akal:

| Urutan | Blok         | Alasan                                |
|--------|--------------|---------------------------------------|
| 1      | `reading-01` | paling dasar, hanya membaca           |
| 2      | `reading-02` | membaca kode dengan loop, materi baru |
| 3      | `review-01`  | mulai menilai kode orang              |
| 4      | `review-02`  | menerima penilaian                    |
| 5      | `docs-01`    | mencari jawaban sendiri               |
| 6      | `debug-01`   | paling sulit, butuh semua di atas     |

---

## Aturan yang tidak boleh dilanggar

1. **Jangan jalankan kode sebelum membaca.** Blok `Reading/` menguji prediksi. Kalau dijalankan dulu, latihannya tidak ada gunanya.
2. **Komentar review wajib beralasan.** "Ini salah" tidak diterima. "Ini salah karena X, akibatnya Y" diterima.
3. **Label `[blocking]` dan `[nit]` wajib dipakai.** Tanpa label, penulis kode tidak tahu mana yang harus dikerjakan dulu.
4. **Dokumentasi sebelum tutor.** Kalau macet, tulis dulu apa yang kamu cari. "Tidak ketemu" itu jawaban yang sah.
5. **Bug report sebelum perbaikan.** Pisahkan "apa yang terjadi" dari "kenapa".
6. **`Kunci/` dibuka paling akhir**, setelah menjawab — bukan untuk mencari jawaban.

---

## Kenapa ini penting

Data dari riset:

| Sumber                     | Temuan                              |
|----------------------------|-------------------------------------|
| Microsoft, 5.971 developer | menulis kode cuma 9–61% hari kerja  |
| LaToza & Venolia           | 49% waktu untuk bug, 36% fitur baru |
| Clean Code                 | rasio baca:tulis > 10:1             |
| Google eng-practices       | review: Design dulu, Style terakhir |

Artinya: yang dinilai di kerja bukan kecepatan menulis, tapi kecepatan **mengerti**.
