# SKILLS.md

Peta semua konsep yang akan dipelajari sepanjang 48 minggu. Fungsinya **membuat lubang terlihat** — tanpa peta, kamu akan merasa "sudah paham JS" padahal separuh konsepnya masih status 1.

Update **setiap akhir minggu**. Jujur. Status yang terlalu tinggi merugikan diri sendiri.

---

## Skala status

| Status | Arti                                  | Tesnya                                                     |
|--------|---------------------------------------|------------------------------------------------------------|
| **0**  | belum pernah dengar                   | —                                                          |
| **1**  | pernah dengar, tidak bisa pakai       | tidak bisa jelaskan tanpa buka materi                      |
| **2**  | bisa pakai kalau ada contoh           | bisa ikuti contoh, gagal kalau contohnya dihapus           |
| **3**  | bisa tulis dari nol                   | bisa tulis tanpa melihat contoh                            |
| **4**  | bisa jelaskan & mengoreksi orang lain | bisa menemukan kesalahan orang lain dan menjelaskan kenapa |

**Aturan bukti:** status **3 ke atas wajib punya bukti** di kolom Bukti. Tanpa bukti, status maksimal 2.

Format bukti yang diterima:

| Bukti                   | Contoh isi                                      |
|-------------------------|-------------------------------------------------|
| E1 Implementasi mandiri | `06_Conditions.js, ditulis tanpa AI`            |
| E2 Tested               | `gate 4/4, predict output semua benar`          |
| E3 Debug mandiri        | `memperbaiki >+ jadi >= tanpa bantuan`          |
| E4 Penjelasan           | `bisa jelaskan algoritma == tanpa buka catatan` |
| E5 Latihan              | `00_Repair_Types.js, 8/8 dugaan benar`          |

**Aturan re-check:** konsep status 3 diuji ulang **2 hari kemudian**. Gagal → status turun ke 2, remediasi berlaku lagi.

Target sebelum melamar: **tidak ada konsep inti di bawah status 3**.

---

## Fase 1 — JS Foundation (minggu 1–12)

### Bahasa dasar

| Konsep                                     | Status | Minggu                |     |     |
|--------------------------------------------|--------|-----------------------|-----|-----|
| `let` / `const` / `var`, scope             | 3      | 1                     |     |     |
| Tipe data & `typeof`                       | 3      | 1                     |     |     |
| Template literal                           | 3      | 1                     |     |     |
| Konversi tipe (`Number`, `parseInt`)       | 3      | 2                     |     |     |
| `==` vs `===`                              | 3      | 2                     |     |     |
| `NaN` & `Number.isNaN`                     | 3      | 2                     |     |     |
| Truthy / falsy                             | 3      | 2                     |     |     |
| Operator aritmatika & jebakan `+`          | 3      | 2                     |     |     |
| `if` / `else if` / `else`, urutan kondisi  | 3      | 3                     |     |     |
| Ternary                                    | 3      | 3                     |     |     |
| `switch` & `break`                         | 3      | 3                     |     |     |
| `&&` `                                     |        | ` `!` & short-circuit | 3   | 3   |
| `??` vs `                                  |        | `                     | 3   | 3   |
| `for`, `while`, `do...while`               | -      | 4                     |     |     |
| `break`, `continue`, nested loop           | -      | 4                     |     |     |
| Fungsi, parameter, return                  | -      | 2                     |     |     |
| Scope & closure                            | -      | 2                     |     |     |
| Array & method (`map`, `filter`, `reduce`) | -      | 3                     |     |     |
| Object, destructuring, spread              | -      | 4                     |     |     |
| Reference vs value (mutability)            | -      | 4                     |     |     |

**Bukti:**

- **`let` / `const` / `var`, scope** — `01_Variables.js`, `02_Challenge.js` ditulis tanpa AI
- **Tipe data & `typeof`** — `01_Variables.js`, `04_TypeConversion.js`
- **Template literal** — `01_Variables.js`; bug kutip ditemukan & diperbaiki sendiri
- **Konversi tipe (`Number`, `parseInt`)** — `04_TypeConversion.js`, gate Day 2.5
- **`==` vs `===`** — gate Lubang 2, 2/2
- **`NaN` & `Number.isNaN`** — gate Lubang 2, alasan dikoreksi
- **Truthy / falsy** — gate Day 2.5, 3/3
- **Operator aritmatika & jebakan `+`** — `04_TypeConversion.js`, `05_Challenge.js`
- **`if` / `else if` / `else`, urutan kondisi** — Gate Log #3 (MEDIUM), 90 vs `>` vs `>=`
- **Ternary** — Gate Log #2,#4,#6,#7 — 2 PASS + MEDIUM + tulis dari nol
- **`switch` & `break`** — Gate Log #15-#20: EASY, MEDIUM, HARD, WRITE semua PASS. Bug laten ditemukan sendiri (#18)
- **`&&` `||` `!` & short-circuit** — Gate Log #40-#48 (`&&` `||`), #49-#59 (`!`). Semua 4 level PASS
- **`??` vs `||`** — Gate Log #60-#65: EASY, MEDIUM, HARD, WRITE semua PASS. Resolver `limit`/`diskon` diuji 4 nilai


**Tambahan di luar daftar:** assignment vs output (`=` menugaskan, `console.log` mencetak) — status **2**, lulus 1 soal (#12) lalu gagal lagi (#13).

### Backend fundamental

| Konsep                                 | Status | Minggu |
|----------------------------------------|--------|--------|
| HTTP method & status code              | -      | 6      |
| Header, body, query param              | -      | 6      |
| Request–response lifecycle             | -      | 6      |
| Node.js: `fs`, `process`, module       | -      | 7      |
| Express: routing, middleware           | -      | 8      |
| Error handling middleware              | -      | 8      |
| Async / await, Promise                 | -      | 5      |
| Callback vs Promise vs async           | -      | 5      |
| SQL: SELECT / INSERT / UPDATE / DELETE | -      | 9      |
| SQL: WHERE, ORDER BY, LIMIT            | -      | 10     |
| SQL: JOIN                              | -      | 11     |
| Normalisasi & desain tabel             | -      | 12     |
| Index & kenapa query lambat            | -      | 12     |
| Transaksi & kenapa perlu               | -      | 12     |


---

## Fase 2 — Java & Spring (minggu 13–24)

| Konsep                                        | Status | Minggu |
|-----------------------------------------------|--------|--------|
| Sintaks Java, tipe statis, `main`             |        | 13     |
| Method, overloading, parameter                |        | 14     |
| Class, object, constructor                    |        | 15     |
| Inheritance, interface, polymorphism          |        | 15     |
| Abstract class vs interface                   |        | 16     |
| Encapsulation, access modifier                |        | 16     |
| Collection (`List`, `Map`, `Set`)             |        | 17     |
| Exception, checked vs unchecked               |        | 18     |
| I/O dasar                                     |        | 18     |
| Spring Boot: struktur project                 |        | 19     |
| `@RestController`, `@GetMapping`              |        | 19     |
| `@PostMapping`, `@RequestBody`                |        | 20     |
| Service layer & DI (`@Service`, `@Autowired`) |        | 20     |
| JPA: entity, repository                       |        | 21     |
| `@Transactional` & transaction boundary       |        | 21     |
| Bean Validation (`@Valid`, `@NotNull`)        |        | 21     |
| PostgreSQL: koneksi, migration                |        | 21     |
| Docker: image, container, Dockerfile          |        | 22     |
| Docker Compose                                |        | 23     |
| JUnit & Mockito                               |        | 24     |
| Global exception handler                      |        | 24     |

---

## Fase 3 — Port Soundwave (minggu 25–32)

| Konsep                             | Status | Minggu |
|------------------------------------|--------|--------|
| Baca kode Node, tulis API contract |        | 25     |
| Auth: JWT, filter chain            |        | 26     |
| Role & authorization               |        | 26     |
| CRUD + pagination + sorting        |        | 27     |
| Validasi request & pesan error     |        | 27     |
| Reservasi stok & race condition    |        | 29     |
| `@Transactional` + locking         |        | 29     |
| Promo & perhitungan harga          |        | 30     |
| Integrasi payment & webhook        |        | 31     |
| **Idempotency**                    |        | 31     |
| OpenAPI / Swagger                  |        | 32     |
| Deploy & environment config        |        | 32     |
| Logging & observability dasar      |        | 32     |

---

## Fase 4 — Go, DSA, Interview (minggu 33–40)

| Konsep                                        | Status | Minggu |
|-----------------------------------------------|--------|--------|
| Sintaks Go, struct, interface                 |        | 33     |
| Goroutine & channel                           |        | 34     |
| `error` handling (tanpa exception)            |        | 34     |
| Gin / Echo, middleware                        |        | 35     |
| Go + PostgreSQL                               |        | 35     |
| DSA: array, string, hash map, two pointer     |        | 10–20  |
| DSA: stack, queue, linked list, binary search |        | 21–32  |
| DSA: tree, graph, DP dasar                    |        | 33–40  |
| System design dasar (cache, queue, scaling)   |        | 37–40  |
| Menjelaskan project sendiri 2/5/15 menit      |        | 38     |
| Cerita STAR (5 buah)                          |        | 39     |

---

## Working Skills — kemampuan kerja

Delapan konsep ini **tidak bisa** dinilai dengan "tulis dari nol". Tesnya berbeda, dan buktinya ada di `Working Skills/`.

| Konsep                                  | Status | Minggu |
|-----------------------------------------|--------|--------|
| Membaca kode asing                      | 0      |        |
| Menulis komentar review                 | 0      |        |
| Menerima review                         | 0      |        |
| Mencari di dokumentasi                  | 0      |        |
| Menulis bug report                      | 0      |        |
| Debugging sistematis                    | 0      |        |
| Membaca codebase dengan satu pertanyaan | 0      |        |
| Menilai desain, bukan cuma sintaks      | 0      |        |


**Skala untuk working skills** (beda dari skala konsep):

| Status | Arti                       | Tesnya                                                       |
|--------|----------------------------|--------------------------------------------------------------|
| **0**  | belum pernah               | —                                                            |
| **1**  | bisa kalau dibantu         | menjawab dengan tutor menuntun                               |
| **2**  | bisa sendiri, hasil kurang | jawaban ada tapi meleset di beberapa bagian                  |
| **3**  | bisa sendiri, hasil baik   | ≥ 70% benar dan tidak ada false positive                     |
| **4**  | bisa mengoreksi orang lain | menemukan kesalahan review orang lain dan menjelaskan kenapa |

**Aturan bukti:** status 3+ wajib menyebut file latihan dan tanggal. Tanpa itu, maksimal 2.

**Target sebelum melamar:** kelima working skills minimal status 3.

---

## Cara pakai

1. **Awal minggu:** lihat konsep minggu ini, isi status awal (biasanya 0 atau 1)
2. **Akhir minggu:** update status. Naik 2 tingkat dalam seminggu itu normal di awal, melambat di level 3→4
3. **Sebelum interview:** filter status ≤ 2, itu daftar latihanmu
4. **Sebelum gerbang:** kalau status masih 2, jangan lulus gerbang. Status 2 artinya masih butuh contoh

---

## Ringkasan

| Fase           | Konsep | Status 3+ | Status ≤2 |
|----------------|--------|-----------|-----------|
| 1 — JS         | 34     | 14        | 20        |
| 2 — Java       | 21     | 0         | 21        |
| 3 — Port       | 13     | 0         | 13        |
| 4 — Go & DSA   | 11     | 0         | 11        |
| Working Skills | 8      | 0         | 8         |
| **Total**      | **87** | **14**    | **73**    |
