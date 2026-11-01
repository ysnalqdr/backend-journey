# Roadmap Lengkap — Backend Engineer

**Nama:** Muhammad Yasin Al Qadri
**Durasi:** 48 minggu (November 2026 s.d. Oktober 2027)
**Target:** Magang backend semester 7
**Aturan #1:** Tidak ada minggu tanpa commit

---

## Alokasi Waktu

| Satuan | Target |
|---|---|
| Per hari | 2-3 jam (minimum 30 menit) |
| Per minggu | 15-20 jam (5-6 hari aktif) |
| Per bulan | 60-80 jam |
| Total 48 minggu | 720-960 jam |

## Metode 20/80

```
20% baca atau nonton (maksimal 30 menit per sesi)
80% ketik sendiri (jangan copy-paste)

Alur:
1. Baca konsep
2. Ketik ulang contoh
3. Rusak kodenya — ubah satu hal, lihat error
4. Bikin variasi sendiri
5. Tulis Catatan.md
6. Push ke GitHub
```

Jangan pakai AI saat belajar fundamental. AI boleh untuk proyek kerja, bukan untuk latihan.

---

# Fase 1 Fondasi

**Periode:** November 2026 s.d. Januari 2027
**Target:** Paham JavaScript mendalam, HTTP, Node.js, SQL

## 1 Week — JavaScript Mendalam

### Sumber
- javascript.info bagian 1
- Fireship — JavaScript in 100 Seconds
- Traversy Media — JavaScript Crash Course

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 01 | Js Basic | Variabel, tipe data, operator, kondisi, loop | Konversi suhu |
| 02 | Fungsi Scope | Function declaration, expression, arrow, closure | Kalkulator CLI |
| 03 | Array Methods | map, filter, reduce, find, some, every | Filter daftar konser |
| 04 | Object Destructuring | Object, this, destructuring, spread, rest | Inventory sederhana |

**Checkpoint:** Bisa tulis program 50-100 baris tanpa lihat referensi.

## 2 Week — Async dan Node.js

### Sumber
- javascript.info bab 11
- The Net Ninja — Node.js Crash Course
- ByteByteGo — What happens when you type a URL
- Hussein Nasser — HTTP Crash Course
- MDN Web Docs — HTTP Overview

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 05 | Async Await | Callback, promise, async/await, try-catch | Fetch API publik |
| 06 | Http Fundamental | Request flow, method, status code, header | Diagram request flow |
| 07 | Nodejs Dasar | Module, fs, path, process | Baca tulis file JSON |
| 08 | Express Api | Route, middleware, req/res | CRUD to-do list |

**Checkpoint:** Bisa bikin REST API 4 endpoint tanpa lihat tutorial.

## 3 Week — SQL dan Database

### Sumber
- SQLBolt (18 lesson interaktif)
- PostgreSQL Tutorial
- freeCodeCamp — SQL Tutorial Full Course
- Fireship — SQL in 100 Seconds
- DB Fiddle untuk latihan browser

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 09 | Sql Crud | CREATE, INSERT, SELECT, UPDATE, DELETE | 10 file .sql |
| 10 | Sql Query | WHERE, ORDER BY, LIMIT, LIKE, aggregate | Dataset konser dan tiket |
| 11 | Sql Join | INNER, LEFT, RIGHT JOIN, GROUP BY, HAVING | 5 query kompleks |
| 12 | Database Design | Primary key, foreign key, index, normalisasi | Skema SoundWave versi SQL |

**LeetCode mulai minggu 11:** 2 soal Easy per minggu.

**Checkpoint:** Bisa tulis JOIN 3 tabel tanpa Google.

---

# Fase 2 Bahasa Kedua

**Periode:** Februari s.d. April 2027
**Target:** Java dasar, Spring Boot, Docker, Testing

## 1 Week — Java Fundamentals

### Sumber
- MOOC.fi (java-programming.mooc.fi) bagian 1
- Bro Code — Java Full Course
- IntelliJ IDEA Community

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 13 | Java Syntax | Variabel, tipe, input output, kondisi, loop | 7 file .java |
| 14 | Java Method | Parameter, return value, overloading | Kalkulator dan konversi suhu |
| 15 | Java Oop Dasar | Class, object, constructor, getter setter | Model User, Event, Ticket |
| 16 | Java Oop Lanjut | Inheritance, interface, polymorphism | Sistem pembayaran |

**Checkpoint:** Bisa bikin program OOP 200+ baris di Java.

## 2 Week — Java Lanjut dan Spring Boot

### Sumber
- MOOC.fi bagian 2
- Spring.io Guides
- Baeldung
- Amigoscode — Spring Boot Tutorial
- Java Brains — Spring Boot playlist

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 17 | Java Collection | List, Map, Set, generics | Phonebook CLI |
| 18 | Java Exception Io | Try-catch, custom exception, baca CSV | Program olah data CSV |
| 19 | Spring Boot Get | Setup project, RestController, GetMapping | API GET /hello dan /users |
| 20 | Spring Boot Crud | PostMapping, RequestBody, ResponseEntity | CRUD lengkap |

**Checkpoint:** Punya Spring Boot API jalan dengan 4 endpoint CRUD.

## 3 Week — Database, Docker, Testing

### Sumber
- TechWorld with Nana — Docker Tutorial for Beginners
- Docker docs Get Started
- Amigoscode — Spring Boot Testing

| Minggu | Topik | Latihan | Output |
|---|---|---|---|
| 21 | Spring Jpa Postgres | Entity, repository, koneksi PostgreSQL | CRUD dengan database nyata |
| 22 | Docker Dasar | Dockerfile, image, container | API ter-dockerize |
| 23 | Docker Compose | Spring Boot plus PostgreSQL satu perintah | docker-compose.yml |
| 24 | Testing Junit | JUnit, Mockito, test endpoint | Minimal 10 unit test |

**LeetCode:** 3 soal per minggu, mulai coba Medium.

**Checkpoint:** Spring Boot + PostgreSQL + Docker + 10 test, semua di GitHub.

---

# Fase 3 Proyek

**Periode:** Mei s.d. Juli 2027
**Proyek:** SoundWave Backend v2 (repo terpisah)
**Stack:** Java, Spring Boot, PostgreSQL, Docker, JWT

## 1 Week — Fondasi Proyek

| Minggu | Target | Output |
|---|---|---|
| 25 | Setup project, desain database, ERD 6 tabel | Repo baru, README, ERD |
| 26 | Registrasi user, bcrypt, login JWT, middleware | Auth bekerja |
| 27 | CRUD events: create, read, update, delete | Endpoint events |
| 28 | Validasi input, pagination, search filter | Endpoint tervalidasi |

## 2 Week — Fitur Inti

| Minggu | Target | Output |
|---|---|---|
| 29 | Beli tiket, kurangi stok, handle race condition | Logika transaksi |
| 30 | Promo, diskon, kalkulasi harga bertingkat | Perhitungan harga |
| 31 | Payment integration sandbox, webhook handler | Pembayaran jalan |
| 32 | Dokumentasi API dengan Swagger | Swagger UI |

## 3 Week — Produksi

| Minggu | Target | Output |
|---|---|---|
| 33 | GitHub Actions: build, test, lint otomatis | CI hijau |
| 34 | Deploy ke Railway atau Render | App live di internet |
| 35 | Error handling, logging, security header | Sistem stabil |
| 36 | Polish README portofolio, screenshot, arsitektur | Repo siap ditunjukkan |

**Checkpoint:** Proyek live, README profesional, test suite lengkap.

---

# Fase 4 Persiapan

**Periode:** Agustus s.d. Oktober 2027
**Target:** Siap interview dan mulai lamar

## 1 Week — Linux dan System Design

### Sumber
- ByteByteGo — system design basics
- Ubuntu documentation

| Minggu | Target | Output |
|---|---|---|
| 37 | Install Ubuntu di ThinkPad T480, command line dasar | Catatan Linux |
| 38 | SSH, permission, file system, deploy ke VPS | Server bisa diakses |
| 39 | Load balancer, caching, horizontal vs vertical scaling | Diagram dan catatan |
| 40 | Message queue, konsistensi, monolith vs microservices | Diagram dan catatan |

## 2 Week — Latihan Interview

| Minggu | Target | Output |
|---|---|---|
| 41 | Jelaskan proyek SoundWave v2 dalam 5 menit | Rekaman diri |
| 42 | Jelaskan arsitektur di papan tulis | Rekaman diri |
| 43 | LeetCode sprint: 5 soal per minggu | 20 solusi |
| 44 | LeetCode sprint lanjutan, fokus Medium | 40 solusi total |

## 3 Week — Lamaran

| Minggu | Target | Output |
|---|---|---|
| 45 | Polish semua repo: README, komentar, hapus kode mati | 3 repo profesional |
| 46 | GitHub profile: bio, pinned repo, foto | Profil siap dilihat |
| 47 | CV satu halaman, LinkedIn, apply 5-10 posisi | Lamaran terkirim |
| 48 | Persiapan wawancara: behavioral dan teknis | Siap interview |

**Checkpoint:** 3 repo profesional, 80+ LeetCode, CV siap, lamaran terkirim.

---

# Target Magang

| Perusahaan | Posisi | Syarat Pengalaman |
|---|---|---|
| tiket.com | Software Engineer I | 0-2 tahun |
| Sea Labs | Back End Engineer (Enterprise) | 1-3 tahun |
| Startup menengah | Backend Engineer (Node.js) | Entry level |
| Bank digital | Backend intern atau junior | Magang |

---

# Skill yang Sudah Ada

JavaScript, Node.js, Express, Firebase, REST API, Git, Midtrans, proyek nyata SoundWave.

Bukan nol. Sudah mulai.

---

# Sumber Utama

## Website

| Sumber | Alamat | Untuk |
|---|---|---|
| javascript.info | javascript.info | JS mendalam |
| MOOC.fi | java-programming.mooc.fi | Java terstruktur |
| SQLBolt | sqlbolt.com | SQL interaktif |
| Baeldung | baeldung.com | Spring Boot |
| NeetCode | neetcode.io | LeetCode |
| roadmap.sh | roadmap.sh/backend | Peta skill |
| MDN | developer.mozilla.org | HTTP dan JS |
| freeCodeCamp | freecodecamp.org | JS algoritma |
| Docker docs | docs.docker.com | Docker |
| Spring | spring.io/guides | Spring Boot |

## YouTube

| Channel | Konten |
|---|---|
| Fireship | Konsep cepat |
| ByteByteGo | System design |
| Hussein Nasser | Backend mendalam |
| Traversy Media | Crash course |
| The Net Ninja | Node.js dan JS |
| Amigoscode | Java dan Spring Boot |
| TechWorld with Nana | Docker dan DevOps |
| Java Brains | Spring Boot |
| Bro Code | Java full course |
| NeetCode | Strategi LeetCode |
| Programmer Zaman Now | Java dan Go (Indonesia) |

## Tools

| Tool | Untuk |
|---|---|
| VS Code | Editor JS dan Node.js |
| IntelliJ IDEA Community | IDE Java |
| Postman | Test API |
| DBeaver | GUI database |
| DB Fiddle | SQL di browser |
| Docker Desktop | Container |
| Git Bash | Terminal |

---

# Aturan Mingguan

```
Setiap minggu minimal 1 commit di GitHub.
Kalau sibuk atau sakit: push Catatan.md berisi apa yang dipelajari.
Streak putus berarti alarm. Jangan biarkan lebih dari 1 minggu kosong.
```
