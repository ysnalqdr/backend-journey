# PLAN.md — Backend Journey

Master plan. Kalau ada aturan yang bentrok dengan README, file ini yang menang.

**Target:** magang backend semester 7 (Oktober 2027). Portfolio siap **20 Juni 2027**.
**Mulai:** 9 November 2026. **Durasi:** 48 minggu.
**Waktu:** 2–3 jam/hari, 5 hari/minggu (10–15 jam/minggu).
**Senjata utama:** Java + Spring Boot. **Kedua:** Go. **JS:** jalan masuk, bukan senjata.

---

## 1. Keputusan yang sudah dikunci

**Java jadi senjata utama, bukan sejajar dengan JS dan Go**
- Alasan: Perbankan/fintech Indonesia hampir seluruhnya Java. Java juga mengajarkan OOP, DI, transaction boundary — kosakata yang ditanya saat interview

**Go setelah Java**
- Alasan: Java → Go itu turun tangga (3–4 minggu). Go → Java naik tangga (2–3 bulan)

**JS bukan senjata, tapi jalan masuk**
- Alasan: Minggu 6–12 (HTTP, Express, SQL) transfer ~90% ke Java dan Go

**Phase 3 = port Soundwave ke Spring, bukan aplikasi baru**
- Alasan: Kompleksitasnya sudah nyata: reservasi stok, webhook idempotency, promo. Aplikasi baru dari nol tidak akan punya itu dalam 8 minggu

**Materi tidak dipotong, tapi ada gerbang kelulusan**
- Alasan: Pemahaman di atas kecepatan. Hari boleh molor jadi 2 hari

**TypeScript, Python, frontend, AI engineering masuk daftar tunggu**
- Alasan: Anggaran waktu 720–960 jam sudah terpakai ±685 jam


---

## 2. Fase

**1–12**
- Tanggal: 9 Nov 26 – 31 Jan 27
- Isi: JS + HTTP + Node + Express + SQL
- Deliverable: 12 folder selesai, 12 trace, 12 bug log

**13–24**
- Tanggal: 1 Feb – 25 Apr 27
- Isi: Java + Spring + JPA + PostgreSQL + Docker + JUnit
- Deliverable: API latihan jalan di lokal + Docker

**25–32**
- Tanggal: 26 Apr – 20 Jun 27
- Isi: Port Soundwave ke Spring + deploy + docs
- Deliverable: **Portfolio siap 20 Juni**

**33–40**
- Tanggal: 21 Jun – 15 Agu 27
- Isi: Go (4 mgg) + DSA sprint + interview prep + CV
- Deliverable: 5 cerita STAR, 1 writeup teknis

**41–48**
- Tanggal: 16 Agu – 10 Okt 27
- Isi: Lamaran, mock interview, iterasi
- Deliverable: 15+ lamaran, 3 referral


---

## 3. Ritme harian

**A — Baca kode**
- Durasi: 20 mnt
- Isi: 1 file asing 20–30 baris, jawab dari membaca saja, baru jalankan
- README: #29

**B — Materi + latihan**
- Durasi: 60–90 mnt
- Isi: Materi hari itu. Tulis sendiri dulu, baru tanya

**C — Review kode**
- Durasi: 15 mnt
- Isi: Bergantian: review kode berisi bug, atau kode sendiri direview
- README: #30

**D — Gerbang**
- Durasi: 15 mnt
- Isi: 4 level (lihat bagian 4)

**E — Catat**
- Durasi: 5 mnt
- Isi: Bug report + What I learned
- README: #32


Kalau waktu cuma 60 menit: kerjakan A, B, D. Blok C dan E boleh dilewat sehari, tapi tidak boleh dua hari berturut.

**Rotasi mingguan** — supaya tidak ada yang terlupa:

| Hari   | Blok tambahan                                                   |
|--------|-----------------------------------------------------------------|
| Senin  | Baca kode (A) — file baru                                       |
| Selasa | Review kode orang lain (C)                                      |
| Rabu   | Baca dokumentasi sendiri (C) — tugas dari MDN, bukan dari tutor |
| Kamis  | Kode sendiri direview (C)                                       |
| Jumat  | Weekly review + isi `Trace.md`                                  |

**DSA** 20 mnt terpisah, mulai minggu 10. **Debugging** (README #34) tidak dijadwalkan — dipakai saat benar-benar macet.

---

## 4. Gerbang kelulusan (tidak bisa dilewati)

### Empat level per konsep — semua harus lulus

| Level      | Tes                      | Contoh                                           |
|------------|--------------------------|--------------------------------------------------|
| **EASY**   | prediksi output          | "kode ini mencetak apa, dan kenapa"              |
| **MEDIUM** | temukan bug              | "user gold seharusnya dapat 20, kenapa dapat 10" |
| **HARD**   | gabung konsep sebelumnya | switch + ternary dalam satu kode                 |
| **WRITE**  | tulis dari nol           | tanpa contoh, tanpa melihat materi               |

**Bukan 2 dari 4. Semua harus lulus.** Tidak ada batas percobaan selama konsep itu masih aktif (README 25b).

### Kualitas soal (README 24)

Setiap soal wajib memenuhi lima syarat:
1. Satu konsep saja
2. Tujuan soal dinyatakan jelas
3. Bukan jebakan — menguji pemahaman, bukan ketelitian
4. Konteks nyata, bukan kode abstrak
5. Jawabannya bisa dijelaskan alasannya

### Mastery rule di dalam setiap level

- **2 jawaban benar berturut-turut, tanpa bantuan, pada soal yang BERBEDA** (README 16)
- Jawaban benar dengan alasan salah = **GAGAL** (README 18)
- Alasan harus menyebut mekanisme, bukan hasil (README 18b)
- Salah → siklus remediasi penuh: diagnosa → ajar ulang dengan analogi **berbeda** → cek kecil → soal baru (README 17)

### Aturan urutan

- **Satu konsep dalam proses** (README 25). Tidak ada materi baru selama masih ada konsep di `## Deferred`
- Kalau sesi habis, sesi berikutnya **wajib** mulai dari konsep yang tertunda

Gerbang ini yang menggantikan "target jam". Kamu tidak dinilai dari berapa lama duduk, tapi dari apa yang bisa kamu jelaskan dan kerjakan sendiri.

---

## 5. Track membaca kode (Level 1–5)

1 file per minggu, naik level seiring fase. **Aturan #33 berlaku: baca untuk menjawab satu pertanyaan, bukan untuk "memahami seluruh file".**

**Fase 1, minggu 1–6**
- Yang dibaca: 20–30 baris, satu alur
- Pertanyaan yang harus dijawab: Input apa, output apa, ada `if` atau tidak, tipe datanya apa, baris mana yang paling rapuh

**Fase 1, minggu 7–12**
- Yang dibaca: 30–50 baris, satu file utuh
- Pertanyaan yang harus dijawab: Alur eksekusi, apa yang terjadi kalau input salah, di mana tipe tidak cocok

**Fase 2**
- Yang dibaca: File backend kecil (Express/Spring)
- Pertanyaan yang harus dijawab: Endpoint apa, validasi di mana, apa yang disimpan ke database

**Fase 3**
- Yang dibaca: Beberapa file sekaligus
- Pertanyaan yang harus dijawab: Dependency antar file, siapa memanggil siapa, error ditangani di mana

**Fase 3–4**
- Yang dibaca: Sistem (Soundwave penuh)
- Pertanyaan yang harus dijawab: Lapisan layer, di mana kebenaran data dipegang, titik risiko


**Lima pertanyaan tetap level 1** (README #29):
1. Apa yang masuk ke kode ini?
2. Apa yang keluar?
3. Apa yang terjadi kalau inputnya salah?
4. Baris mana yang paling rapuh kalau syarat berubah?
5. Apa yang akan kamu ganti namanya, dan kenapa?

**Aturan:** baca dulu 10 menit tanpa bantuan, **tanpa menjalankan**. Tulis jawaban. Baru jalankan untuk memeriksa. Kalau mentok, tulis pertanyaannya dulu — sering menulis pertanyaan sudah menyelesaikan masalahnya.

---

## 6. Trace mingguan

1 alur per minggu, dilacak manual, ditulis di `Trace.md` di folder minggu. Template ada di `Working Skills/Templates/CodeReading.md`.

Urutan alur Soundwave (dari mudah):

| Minggu | Alur                                    |
|--------|-----------------------------------------|
| 1      | Daftar event (read-only, tanpa auth)    |
| 2      | Login / register                        |
| 3      | Detail event + pilih kursi              |
| 4      | Terapkan kode promo                     |
| 5      | Checkout → payment hold 5 menit         |
| 6      | Webhook Midtrans → status tiket berubah |
| 7      | Riwayat pesanan user                    |
| 8      | Refund / pembatalan                     |

Sesudah minggu 8, ulangi dari awal tapi dengan pertanyaan yang lebih dalam (di mana transaksi dimulai, apa yang terjadi kalau dua user klik bersamaan).

---

## 7. Bug log

Minimal 1 entri per minggu, di `Catatan.md` bagian `## Bug log`. Template ada di `Working Skills/Templates/BugReport.md`.

Target: 20 entri dalam sebulan pertama. Setelah itu kamu akan mulai melihat pola bug yang berulang — itu tanda naik level.

---

## 8. Protokol AI

****Tutor****
- Boleh?: Bebas
- Contoh: "jelaskan kenapa di sini pakai async", "apa yang salah kalau pakai pendekatan X"

****Reviewer****
- Boleh?: Bebas, setelah tulis sendiri
- Contoh: "review kode saya, sebutkan yang salah dan alasannya. Jangan tulis ulang."

****Generator****
- Boleh?: Dibatasi
- Contoh: hanya config, boilerplate, setup — bukan logika yang sedang dipelajari


**Aturan keras:**

1. Tidak commit kode yang tidak bisa dijelaskan alurnya
2. Tulis ulang dari nol solusi AI dengan tab AI ditutup
3. 10 baris kode AI = minimal 1 verifikasi manual atau 1 test
4. Stuck minimal 15–20 menit dulu sebelum bertanya
5. Selalu tanya "apa yang akan gagal dari solusi ini"

---

## 9. DSA

Mulai **minggu 10**, 1 soal/hari, 20 menit. Pakai JS dulu.

| Periode      | Fokus                                               |
|--------------|-----------------------------------------------------|
| Minggu 10–20 | Array, string, hash map, two pointer                |
| Minggu 21–32 | Stack, queue, linked list, binary search, sorting   |
| Minggu 33–40 | Tree, graph, dynamic programming dasar, 2 soal/hari |

Kalau suatu hari tidak sanggup, minimal **baca 1 soal dan solusinya** — jangan lewat tanpa melihat sama sekali.

---

## 10. Phase 3 — aturan port Soundwave

Empat aturan supaya port tidak jadi salin-tempel:

1. **Tulis `API-CONTRACT.md` sekali saja.** Buka kode Node, catat semua endpoint + request + response. Setelah itu **tutup folder Node** dan jangan dibuka selama menulis Spring.
2. **Tulis test dari perilaku, bukan dari kode.** Untuk tiap endpoint: "kalau X maka Y" sebagai test, baru implementasi sampai hijau.
3. **Jangan port 1:1.** Node versinya transaction-script monolith. Di Spring pakai yang seharusnya: service layer, repository, `@Transactional`, Bean Validation, exception handler global. Kalau hasilnya identik dengan Node, kamu tidak belajar apa-apa.
4. **Tambah satu hal yang belum ada.** Rate limiting, atau endpoint admin, atau OpenAPI docs.

Hasilnya bukan "Soundwave versi Java" tapi **"Soundwave v2"** — cerita interview yang jauh lebih kuat.

---

## 11. Daftar tunggu (dengan pemicu, bukan tanggal)

| Yang ditunda         | Pemicu untuk mulai                                              |
|----------------------|-----------------------------------------------------------------|
| TypeScript           | Ada proyek nyata yang butuh TS (biasanya setelah kerja pertama) |
| Python               | Setelah punya pekerjaan pertama, atau target berubah ke AI/ML   |
| Frontend web (React) | Butuh dashboard web untuk Soundwave atau proyek lain            |
| AI engineering       | 6–12 bulan setelah bekerja sebagai backend                      |
| Go lanjutan          | Dapat tawaran di perusahaan ber-stack Go                        |

---

## 12. Checkpoint

**Akhir Jan 2027**
- Yang harus sudah ada: Fase 1 selesai, 12 trace, bisa baca 1 file JS tanpa bantuan
- Kalau meleset: Potong minggu 4 (object destructuring) jadi 3 hari, jangan potong SQL

**Akhir Apr 2027**
- Yang harus sudah ada: API Spring jalan lokal + Docker, paham DI dan transaction
- Kalau meleset: Potong Docker Compose, jangan potong JPA/transaction

****20 Jun 2027****
- Yang harus sudah ada: Portfolio siap: Soundwave v2 deploy + README + writeup
- Kalau meleset: Kalau molor 2 minggu, deploy tanpa fitur tambahan. Jangan geser tanggal

**Akhir Agu 2027**
- Yang harus sudah ada: CV, 5 cerita STAR, 1 writeup, DSA 150 soal
- Kalau meleset: Kurangi Go jadi 2 minggu

**Sep–Okt 2027**
- Yang harus sudah ada: 15+ lamaran terkirim, 3 referral diminta
- Kalau meleset: Lamar dengan apa yang ada. Jangan tunggu sempurna


**Aturan meleset:** kalau satu minggu meleset, jangan kejar semua. Pilih satu — trace berikutnya, atau gerbang hari itu. Dua hal itu yang paling berdampak.

---

## 13. Yang tidak boleh dilakukan

1. Menambah bahasa baru sebelum fase 3 selesai
2. Menunda gerbang karena "biar cepat selesai"
3. Commit kode yang tidak bisa dijelaskan
4. Copy-paste tanpa mengetik ulang
5. Mulai proyek baru sebelum Soundwave v2 deploy
6. Menunggu "paham semua" baru melamar
7. Menghitung kemajuan dari jumlah jam, bukan dari gerbang yang lulus
