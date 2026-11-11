# SKILLS.md

Peta semua konsep yang akan dipelajari sepanjang 48 minggu. Fungsinya **membuat lubang terlihat** — tanpa peta, kamu akan merasa "sudah paham JS" padahal separuh konsepnya masih status 1.

Update **setiap akhir minggu**. Jujur. Status yang terlalu tinggi merugikan diri sendiri.

---

## Skala status

| Status | Arti | Tesnya |
|---|---|---|
| **0** | belum pernah dengar | — |
| **1** | pernah dengar, tidak bisa pakai | tidak bisa jelaskan tanpa buka materi |
| **2** | bisa pakai kalau ada contoh | bisa ikuti contoh, gagal kalau contohnya dihapus |
| **3** | bisa tulis dari nol | bisa tulis tanpa melihat contoh |
| **4** | bisa jelaskan & mengoreksi orang lain | bisa menemukan kesalahan orang lain dan menjelaskan kenapa |

**Aturan bukti:** status **3 ke atas wajib punya bukti** di kolom Bukti. Tanpa bukti, status maksimal 2.

Format bukti yang diterima:

| Bukti | Contoh isi |
|---|---|
| E1 Implementasi mandiri | `06_Conditions.js, ditulis tanpa AI` |
| E2 Tested | `gate 4/4, predict output semua benar` |
| E3 Debug mandiri | `memperbaiki >+ jadi >= tanpa bantuan` |
| E4 Penjelasan | `bisa jelaskan algoritma == tanpa buka catatan` |
| E5 Latihan | `00_Repair_Types.js, 8/8 dugaan benar` |

**Aturan re-check:** konsep status 3 diuji ulang **2 hari kemudian**. Gagal → status turun ke 2, remediasi berlaku lagi.

Target sebelum melamar: **tidak ada konsep inti di bawah status 3**.

---

## Fase 1 — JS Foundation (minggu 1–12)

### Bahasa dasar

| Konsep | Status | Bukti | Minggu | Catatan |
|---|---|---|---|---|
| `let` / `const` / `var`, scope | 3 | `01_Variables.js`, `02_Challenge.js` ditulis tanpa AI | 1 | |
| Tipe data & `typeof` | 3 | `01_Variables.js`, `04_TypeConversion.js` | 1 | |
| Template literal | 3 | `01_Variables.js`; bug kutip ditemukan & diperbaiki sendiri | 1 | |
| Konversi tipe (`Number`, `parseInt`) | 3 | `04_TypeConversion.js`, gate Day 2.5 | 2 | |
| `==` vs `===` | 3 | gate Lubang 2, 2/2 | 2 | |
| `NaN` & `Number.isNaN` | 3 | gate Lubang 2, alasan dikoreksi | 2 | |
| Truthy / falsy | 3 | gate Day 2.5, 3/3 | 2 | |
| Operator aritmatika & jebakan `+` | 3 | `04_TypeConversion.js`, `05_Challenge.js` | 2 | |
| `if` / `else if` / `else`, urutan kondisi | 3 | Gate Log #3 (MEDIUM), 90 vs `>` vs `>=` | 3 | |
| Ternary | 3 | Gate Log #2,#4,#6,#7 — 2 PASS + MEDIUM + tulis dari nol | 3 | |
| `switch` & `break` | 3 | Gate Log #15-#20: EASY, MEDIUM, HARD, WRITE semua PASS. Bug laten ditemukan sendiri (#18) | 3 | |
| `&&` `\|\|` `!` & short-circuit | 3 | Gate Log #40-#48 (`&&` `\|\|`), #49-#59 (`!`). Semua 4 level PASS | 3 | |
| `??` vs `\|\|` | | | 3 | belum |
| `for`, `while`, `do...while` | | | 4 | belum |
| `break`, `continue`, nested loop | | | 4 | belum |
| Fungsi, parameter, return | | | 2 | belum |
| Scope & closure | | | 2 | belum |
| Array & method (`map`, `filter`, `reduce`) | | | 3 | belum |
| Object, destructuring, spread | | | 4 | belum |
| Reference vs value (mutability) | | | 4 | belum |

**Tambahan di luar daftar:** assignment vs output (`=` menugaskan, `console.log` mencetak) — status **2**, lulus 1 soal (#12) lalu gagal lagi (#13).

### Backend fundamental

| Konsep | Status | Bukti | Minggu | Catatan |
|---|---|---|---|---|
| HTTP method & status code | | | 6 | |
| Header, body, query param | | | 6 | |
| Request–response lifecycle | | | 6 | |
| Node.js: `fs`, `process`, module | | | 7 | |
| Express: routing, middleware | | | 8 | |
| Error handling middleware | | | 8 | |
| Async / await, Promise | | | 5 | |
| Callback vs Promise vs async | | | 5 | |
| SQL: SELECT / INSERT / UPDATE / DELETE | | | 9 | |
| SQL: WHERE, ORDER BY, LIMIT | | | 10 | |
| SQL: JOIN | | | 11 | |
| Normalisasi & desain tabel | | | 12 | |
| Index & kenapa query lambat | | | 12 | |
| Transaksi & kenapa perlu | | | 12 | |

---

## Fase 2 — Java & Spring (minggu 13–24)

| Konsep | Status | Minggu |
|---|---|---|
| Sintaks Java, tipe statis, `main` | | 13 |
| Method, overloading, parameter | | 14 |
| Class, object, constructor | | 15 |
| Inheritance, interface, polymorphism | | 15 |
| Abstract class vs interface | | 16 |
| Encapsulation, access modifier | | 16 |
| Collection (`List`, `Map`, `Set`) | | 17 |
| Exception, checked vs unchecked | | 18 |
| I/O dasar | | 18 |
| Spring Boot: struktur project | | 19 |
| `@RestController`, `@GetMapping` | | 19 |
| `@PostMapping`, `@RequestBody` | | 20 |
| Service layer & DI (`@Service`, `@Autowired`) | | 20 |
| JPA: entity, repository | | 21 |
| `@Transactional` & transaction boundary | | 21 |
| Bean Validation (`@Valid`, `@NotNull`) | | 21 |
| PostgreSQL: koneksi, migration | | 21 |
| Docker: image, container, Dockerfile | | 22 |
| Docker Compose | | 23 |
| JUnit & Mockito | | 24 |
| Global exception handler | | 24 |

---

## Fase 3 — Port Soundwave (minggu 25–32)

| Konsep | Status | Minggu |
|---|---|---|
| Baca kode Node, tulis API contract | | 25 |
| Auth: JWT, filter chain | | 26 |
| Role & authorization | | 26 |
| CRUD + pagination + sorting | | 27 |
| Validasi request & pesan error | | 27 |
| Reservasi stok & race condition | | 29 |
| `@Transactional` + locking | | 29 |
| Promo & perhitungan harga | | 30 |
| Integrasi payment & webhook | | 31 |
| **Idempotency** | | 31 |
| OpenAPI / Swagger | | 32 |
| Deploy & environment config | | 32 |
| Logging & observability dasar | | 32 |

---

## Fase 4 — Go, DSA, Interview (minggu 33–40)

| Konsep | Status | Minggu |
|---|---|---|
| Sintaks Go, struct, interface | | 33 |
| Goroutine & channel | | 34 |
| `error` handling (tanpa exception) | | 34 |
| Gin / Echo, middleware | | 35 |
| Go + PostgreSQL | | 35 |
| DSA: array, string, hash map, two pointer | | 10–20 |
| DSA: stack, queue, linked list, binary search | | 21–32 |
| DSA: tree, graph, DP dasar | | 33–40 |
| System design dasar (cache, queue, scaling) | | 37–40 |
| Menjelaskan project sendiri 2/5/15 menit | | 38 |
| Cerita STAR (5 buah) | | 39 |

---

## Cara pakai

1. **Awal minggu:** lihat konsep minggu ini, isi status awal (biasanya 0 atau 1)
2. **Akhir minggu:** update status. Naik 2 tingkat dalam seminggu itu normal di awal, melambat di level 3→4
3. **Sebelum interview:** filter status ≤ 2, itu daftar latihanmu
4. **Sebelum gerbang:** kalau status masih 2, jangan lulus gerbang. Status 2 artinya masih butuh contoh

---

## Ringkasan

| Fase | Konsep | Status 3+ | Status ≤2 |
|---|---|---|---|
| 1 — JS | 34 | | |
| 2 — Java | 21 | | |
| 3 — Port | 13 | | |
| 4 — Go & DSA | 11 | | |
| **Total** | **79** | | |
