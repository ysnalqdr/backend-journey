# Working Skills

Latihan untuk kemampuan yang dipakai di kerja, bukan di ujian.

Bedanya:

| Gate harian | Working Skills |
|---|---|
| tulis dari nol | ubah kode yang sudah ada |
| satu konsep | banyak hal bercampur |
| ada jawaban benar | ada jawaban yang bisa diterima |
| materi disiapkan | cari sendiri |
| tidak ada reviewer | ada komentar review |

Sumber tiap aturan ada di README #29–#34.

---

## Isi folder

| Folder | Untuk | Aturan |
|---|---|---|
| `Templates/` | format kosong, disalin setiap sesi | — |
| `Reading/` | file kode asing + pertanyaan | #29 |
| `Review/` | kode berisi bug untuk direview | #30 |
| `Docs/` | tugas mencari jawaban di dokumentasi resmi | #31 |
| `Debug/` | bug report dan telusur | #32, #34 |

---

## Rotasi mingguan

| Hari | Blok | Folder |
|---|---|---|
| Senin | Baca kode | `Reading/` |
| Selasa | Review kode orang lain | `Review/` |
| Rabu | Baca dokumentasi sendiri | `Docs/` |
| Kamis | Kode sendiri direview | `Review/` |
| Jumat | Weekly review + `Trace.md` | — |

---

## Aturan yang tidak boleh dilanggar

1. **Jangan jalankan kode sebelum membaca.** Blok `Reading/` menguji prediksi. Kalau dijalankan dulu, latihannya tidak ada gunanya.
2. **Komentar review wajib beralasan.** "Ini salah" tidak diterima. "Ini salah karena X, akibatnya Y" diterima.
3. **Label `[blocking]` dan `[nit]` wajib dipakai.** Tanpa label, penulis kode tidak tahu mana yang harus dikerjakan dulu.
4. **Dokumentasi sebelum tutor.** Kalau macet, tulis dulu apa yang kamu cari. "Tidak ketemu" itu jawaban yang sah.
5. **Bug report sebelum perbaikan.** Pisahkan "apa yang terjadi" dari "kenapa".

---

## Kenapa ini penting

Data dari riset:

| Sumber | Temuan |
|---|---|
| Microsoft, 5.971 developer | menulis kode cuma 9–61% hari kerja |
| LaToza & Venolia | 49% waktu untuk bug, 36% fitur baru |
| Clean Code | rasio baca:tulis > 10:1 |
| Google eng-practices | review: Design dulu, Style terakhir |

Artinya: yang dinilai di kerja bukan kecepatan menulis, tapi kecepatan **mengerti**.
