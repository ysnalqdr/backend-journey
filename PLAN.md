# PLAN.md — Backend Journey

Master plan. Kalau ada aturan yang bentrok dengan README, file ini yang menang.

**Target:** magang backend semester 7 (Oktober 2027). Portfolio siap **20 Juni 2027**.
**Mulai:** 9 November 2026. **Durasi:** 48 minggu.
**Waktu:** 2–3 jam/hari, 5 hari/minggu (10–15 jam/minggu).
**Senjata utama:** Java + Spring Boot. **Kedua:** Go. **JS:** jalan masuk, bukan senjata.

---

## 1. Keputusan yang sudah dikunci

| No | Keputusan | Alasan |
|---|---|---|
| 1 | Java jadi senjata utama, bukan sejajar dengan JS dan Go | Perbankan/fintech Indonesia hampir seluruhnya Java. Java juga mengajarkan OOP, DI, transaction boundary — kosakata yang ditanya saat interview |
| 2 | Go setelah Java | Java → Go itu turun tangga (3–4 minggu). Go → Java naik tangga (2–3 bulan) |
| 3 | JS bukan senjata, tapi jalan masuk | Minggu 6–12 (HTTP, Express, SQL) transfer ~90% ke Java dan Go |
| 4 | Phase 3 = port Soundwave ke Spring, bukan aplikasi baru | Kompleksitasnya sudah nyata: reservasi stok, webhook idempotency, promo. Aplikasi baru dari nol tidak akan punya itu dalam 8 minggu |
| 5 | Materi tidak dipotong, tapi ada gerbang kelulusan | Pemahaman di atas kecepatan. Hari boleh molor jadi 2 hari |
| 6 | TypeScript, Python, frontend, AI engineering masuk daftar tunggu | Anggaran waktu 720–960 jam sudah terpakai ±685 jam |

---

## 2. Fase

| Fase | Minggu | Tanggal | Isi | Deliverable |
|---|---|---|---|---|
| 1 | 1–12 | 9 Nov 26 – 31 Jan 27 | JS + HTTP + Node + Express + SQL | 12 folder selesai, 12 trace, 12 bug log |
| 2 | 13–24 | 1 Feb – 25 Apr 27 | Java + Spring + JPA + PostgreSQL + Docker + JUnit | API latihan jalan di lokal + Docker |
| 3 | 25–32 | 26 Apr – 20 Jun 27 | Port Soundwave ke Spring + deploy + docs | **Portfolio siap 20 Juni** |
| 4 | 33–40 | 21 Jun – 15 Agu 27 | Go (4 mgg) + DSA sprint + interview prep + CV | 5 cerita STAR, 1 writeup teknis |
| 5 | 41–48 | 16 Agu – 10 Okt 27 | Lamaran, mock interview, iterasi | 15+ lamaran, 3 referral |

---

## 3. Ritme harian

| Blok | Durasi | Isi |
|---|---|---|
| A — Baca kode | 20 mnt | Trace atau code reading sesuai level. Tanpa AI |
| B — Materi + latihan | 60–90 mnt | Materi hari itu. Tulis sendiri dulu, baru tanya |
| C — DSA | 20 mnt | 1 soal. Mulai minggu 10. Pakai JS dulu, ulang di Java nanti |
| D — Gerbang | 15 mnt | 3 tes (lihat bagian 4) |
| E — Catat | 5 mnt | Bug log + What I learned |

Kalau waktu cuma 60 menit: kerjakan A, B, D. Blok C dan E boleh dilewat sehari, tapi tidak boleh dua hari berturut.

---

## 4. Gerbang kelulusan (tidak bisa dilewati)

Setiap akhir hari, 4 tes:

1. **Explain back** — tulis 5 baris penjelasan pakai bahasa sendiri, tanpa buka materi atau catatan
2. **Predict output** — 3 potongan kode, tebak hasilnya sebelum dijalankan
3. **Write from zero** — 1 soal kecil, tanpa melihat contoh
4. **Modify** — kode yang sengaja dirusak, perbaiki tanpa melihat versi aslinya

**Lulus 3 dari 4 → maju. Gagal → ulangi hari yang sama besok.** Tidak ada pengecualian.

### Mastery rule — berlaku di dalam setiap tes

Satu jawaban benar tidak cukup. Berlaku aturan:

- **2 jawaban benar berturut-turut, tanpa bantuan, pada soal yang BERBEDA**
- Jawaban benar dengan alasan salah = **GAGAL**
- Salah → jalankan siklus remediasi penuh (lihat README aturan 17), tidak boleh lanjut

Kalau gagal 2 hari berturut di topik yang sama, tulis di `Catatan.md` bagian "What confused me" dan minta materi dijelaskan ulang dengan **pendekatan berbeda**, bukan diulang dengan kata yang sama.

Gerbang ini yang menggantikan "target jam". Kamu tidak dinilai dari berapa lama duduk, tapi dari apa yang bisa kamu jelaskan dan kerjakan sendiri.

---

## 5. Track membaca kode (Level 1–5)

1 file per minggu, naik level seiring fase.

| Level | Kapan | Yang dibaca | Yang harus bisa dijawab |
|---|---|---|---|
| 1 | Fase 1, minggu 1–6 | 10–20 baris JS, satu fungsi | Input apa, output apa, ada `if` atau tidak, tipe datanya apa |
| 2 | Fase 1, minggu 7–12 | 30–50 baris, satu file utuh | Alur eksekusi, apa yang terjadi kalau input salah, di mana tipe tidak cocok |
| 3 | Fase 2 | File backend kecil (Express/Spring) | Endpoint apa, validasi di mana, apa yang disimpan ke database |
| 4 | Fase 3 | Beberapa file sekaligus | Dependency antar file, siapa memanggil siapa, error ditangani di mana |
| 5 | Fase 3–4 | Sistem (Soundwave penuh) | Lapisan layer, di mana kebenaran data dipegang, titik risiko |

**Aturan:** baca dulu 10 menit tanpa bantuan. Kalau mentok, tulis pertanyaannya dulu — sering menulis pertanyaan sudah menyelesaikan masalahnya. Baru tanya AI, dan minta **penjelasan**, bukan kode.

---

## 6. Trace mingguan

1 alur per minggu, dilacak manual, ditulis di `Trace.md`. Template ada di `_templates/Trace.md`.

Urutan alur Soundwave (dari mudah):

| Minggu | Alur |
|---|---|
| 1 | Daftar event (read-only, tanpa auth) |
| 2 | Login / register |
| 3 | Detail event + pilih kursi |
| 4 | Terapkan kode promo |
| 5 | Checkout → payment hold 5 menit |
| 6 | Webhook Midtrans → status tiket berubah |
| 7 | Riwayat pesanan user |
| 8 | Refund / pembatalan |

Sesudah minggu 8, ulangi dari awal tapi dengan pertanyaan yang lebih dalam (di mana transaksi dimulai, apa yang terjadi kalau dua user klik bersamaan).

---

## 7. Bug log

Minimal 1 entri per minggu, di `Catatan.md` bagian `## Bug log`. Template ada di `_templates/BugLog.md`.

Target: 20 entri dalam sebulan pertama. Setelah itu kamu akan mulai melihat pola bug yang berulang — itu tanda naik level.

---

## 8. Protokol AI

| Mode | Boleh? | Contoh |
|---|---|---|
| **Tutor** | Bebas | "jelaskan kenapa di sini pakai async", "apa yang salah kalau pakai pendekatan X" |
| **Reviewer** | Bebas, setelah tulis sendiri | "review kode saya, sebutkan yang salah dan alasannya. Jangan tulis ulang." |
| **Generator** | Dibatasi | hanya config, boilerplate, setup — bukan logika yang sedang dipelajari |

**Aturan keras:**

1. Tidak commit kode yang tidak bisa dijelaskan alurnya
2. Tulis ulang dari nol solusi AI dengan tab AI ditutup
3. 10 baris kode AI = minimal 1 verifikasi manual atau 1 test
4. Stuck minimal 15–20 menit dulu sebelum bertanya
5. Selalu tanya "apa yang akan gagal dari solusi ini"

---

## 9. DSA

Mulai **minggu 10**, 1 soal/hari, 20 menit. Pakai JS dulu.

| Periode | Fokus |
|---|---|
| Minggu 10–20 | Array, string, hash map, two pointer |
| Minggu 21–32 | Stack, queue, linked list, binary search, sorting |
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

| Yang ditunda | Pemicu untuk mulai |
|---|---|
| TypeScript | Ada proyek nyata yang butuh TS (biasanya setelah kerja pertama) |
| Python | Setelah punya pekerjaan pertama, atau target berubah ke AI/ML |
| Frontend web (React) | Butuh dashboard web untuk Soundwave atau proyek lain |
| AI engineering | 6–12 bulan setelah bekerja sebagai backend |
| Go lanjutan | Dapat tawaran di perusahaan ber-stack Go |

---

## 12. Checkpoint

| Kapan | Yang harus sudah ada | Kalau meleset |
|---|---|---|
| Akhir Jan 2027 | Fase 1 selesai, 12 trace, bisa baca 1 file JS tanpa bantuan | Potong minggu 4 (object destructuring) jadi 3 hari, jangan potong SQL |
| Akhir Apr 2027 | API Spring jalan lokal + Docker, paham DI dan transaction | Potong Docker Compose, jangan potong JPA/transaction |
| **20 Jun 2027** | Portfolio siap: Soundwave v2 deploy + README + writeup | Kalau molor 2 minggu, deploy tanpa fitur tambahan. Jangan geser tanggal |
| Akhir Agu 2027 | CV, 5 cerita STAR, 1 writeup, DSA 150 soal | Kurangi Go jadi 2 minggu |
| Sep–Okt 2027 | 15+ lamaran terkirim, 3 referral diminta | Lamar dengan apa yang ada. Jangan tunggu sempurna |

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
