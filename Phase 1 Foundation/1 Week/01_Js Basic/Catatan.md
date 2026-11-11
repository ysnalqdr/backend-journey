# JS Basics

**Status:** in progress
**Started:** 1 November 2026
**Finished:** -

## Goal

By the end of this week I can write a temperature converter (Celsius to Fahrenheit and back) and a grade calculator using only variables, conditions, and loops, without looking at any reference.

## Topics

### Day 1 - Variables and data types
- [x] `let` vs `const` vs `var`
- [x] Naming rules and camelCase
- [x] Data types: string, number, boolean, null, undefined, object, symbol, bigint
- [x] `typeof` operator
- [x] Template literals

### Day 2 - Type conversion and operators
- [x] String to number: `Number()`, `parseInt()`, `parseFloat()`
- [x] Number to string: `String()`, `.toString()`
- [x] Arithmetic: `+ - * / % **`
- [x] Assignment: `+= -= *= /=`
- [x] Comparison: `==` vs `===` (why `===` matters)
- [x] `NaN` and how to check with `Number.isNaN()`

### Day 3 - Conditions
- [x] `if` / `else if` / `else`
- [x] Ternary operator `? :`
- [x] `switch` statement
- [x] Logical operators `&&`, `||`, `!`
- [x] Nullish coalescing `??`
- [x] Truthy and falsy values

**Catatan status 2026-11-08:**
- `&&` `||`: **TUNTAS** 4 level (Gate Log #40-#48). Guard 3 tingkat ditulis dari nol, diuji 5 kasus.
- `!`: **TUNTAS** 4 level (Gate Log #49-#59). Guard clause 3 cabang ditulis dari nol, diuji 3 kasus.
- `??`: **TUNTAS** 4 level (Gate Log #60-#65). Resolver `limit`/`diskon` ditulis dari nol, diuji 4 nilai.
- **Day 3 SELESAI.** Semua 6 topik tuntas.

### Day 4 - Loops
- [ ] `for` loop
- [ ] `while` loop
- [ ] `do...while` loop
- [ ] `break` and `continue`
- [ ] Nested loops

### Day 5 - Build the project
- [ ] Temperature converter
- [ ] Grade calculator
- [ ] Number guessing game (optional)

## What I built

- `01_Variables.js` — variables, template literals, `typeof`, arithmetic
- `02_Challenge.js` — string concatenation, `typeof null`
- `03_Error.js` — reproduced a TypeError on purpose to learn how to read errors

## What I learned

- `const` cannot be reassigned, `let` can
- `${}` only works inside backticks, not single or double quotes
- `typeof null` returns `"object"` because of an old JavaScript bug
- When an error happens, JavaScript stops and the rest of the file never runs
- `node file.js` looks for the file in the current folder only, so I have to `cd` first

## What confused me

- Forgot that `${}` needs backticks, so the output printed the literal text instead of the value
- Still not sure when to use `let` vs `const` — I default to `const` now and change to `let` only when needed
- Folder names with spaces need quotes in the terminal

## Explain back

<5 baris penjelasan pakai bahasa sendiri, TANPA buka materi. Kalau tidak bisa, hari itu belum selesai.>

## Bug log

Satu entri per bug. Format lengkap ada di `Working Skills/Templates/BugReport.md`.

| # | Tanggal | Judul | Langkah reproduksi | Harapan | Kenyataan | Dugaan penyebab | Akar masalah | Status |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

**Aturan:**
- **Dugaan penyebab** ditandai dugaan, bukan fakta
- **Akar masalah** diisi setelah diperbaiki — boleh beda dari dugaan
- **Status:** `terbuka` / `diperbaiki` / `tidak bisa direproduksi`
- Minimal 1 entri per minggu (README #7)

## Gate Log

Setiap soal yang ditanyakan, jawaban yang diberikan, dan putusannya. Tanpa ini, gerbang tidak punya bukti.

**Aturan pencatatan:** catat **semua FAIL**. Catat PASS hanya kalau MEDIUM atau HARD. PASS di level EASY tidak memberi informasi.

| # | Level | Concept | Question | My answer | Verdict | Type | Time | Note |
|---|---|---|---|---|---|---|---|---|
| 1 | EASY | ternary | `tiket=0`, `tiket > 0 ? "Tersedia" : "Habis"` | "Habis", alasan: tiket falsy | FAIL | CONCEPT | 20s | alasan salah sasaran — yang diperiksa `tiket > 0`, bukan `tiket` |
| 2 | EASY | ternary | `stok=-3`, `stok ? "Ada" : "Tidak ada"` | "Ada", alasan: -3 truthy | PASS | — | 15s | mekanisme benar; istilah "output true" dikoreksi |
| 3 | MEDIUM | if/else if | `nilai=90`, `if (nilai > 90)` A / `else if (nilai >= 80)` B | B, alasan: 90 > 90 false → cek >= 80 true | PASS | — | 40s | urutan kondisi + beda `>` vs `>=` benar |
| 4 | EASY | ternary | `stok=5, beli=3`, `stok - beli >= 2 ? "cukup" : "kurang"` | "cukup", 2 >= 2 true | PASS | — | 30s | langkah 1 dan 2 digabung, tapi hasil & alasan benar |
| 5 | EASY | ternary | `saldo=50000`, `saldo >= 100000 ? 1 : 0` | "1", number | FAIL | READING | 25s | tidak mengevaluasi kondisi; lalu salah baca `!` yang tidak ada |
| 6 | MEDIUM | ternary | cari bug: `umur >= 17 ? "dewasa" : "anak" : "remaja"` | SyntaxError, dua titik dua | PASS | — | 45s | tidak terjebak menghitung output |
| 7 | EASY | ternary | tulis dari nol: `stok=0` → ternary `status` | kode benar, output "habis" | PASS | — | 90s | ditulis tanpa melihat contoh |
| 8 | EASY | switch | `kode="B"`, tiga case + break | "dua" | FAIL | CONCEPT | 35s | tidak menyebut `break` sebagai penyebab berhenti |
| 9 | EASY | switch | `warna="merah"`, tanpa break di case pertama | "berhenti", "lanjut" | FAIL | CONCEPT | 40s | mengira switch melakukan looping |
| 10 | EASY | switch | `hewan="kucing"`, fallthrough sampai default | "meong","moo","petok" | PASS | — | 50s | melacak fallthrough sampai `default` dengan benar |
| 11 | MEDIUM | switch | cari bug: `level="gold"`, `diskon = 20` tanpa break | "20 dan 10" | FAIL | CONCEPT | 60s | benar temukan bug & fix, tapi salah hitung output — assignment disangka print |
| 12 | EASY | assignment | `saldo` ditimpa 3×, lalu 2× console.log | 2 baris, 200000, tidak mencetak | PASS | — | 35s | paham assignment menimpa nilai lama |
| 13 | EASY | switch | `level=2` angka, fallthrough case 2 → case 3 | "menengah dan lanjut" | FAIL | CONCEPT | 55s | ULANG kesalahan #11: assignment disangka print. Juga salah: `case 2` vs `case "2"` |
| 14 | EASY | switch | `role="user"`, dua case + break | "terbatas" | FAIL | CONCEPT | 45s | output benar, tapi mekanisme tidak disebut — "switch hanya mencari user" |
| 15 | EASY | switch | `warna="hijau"`, jelaskan proses di `case "merah"` | diperiksa, tidak cocok, dilewati, lanjut | PASS | — | 40s | mekanisme lengkap: urutan, perbandingan, lewati |
| 16 | EASY | switch | `level=2` angka, telusuri `case 1` | "menengah", `2 === 1` false | PASS | — | 30s | PASS kedua berturut-turut |
| 17 | MEDIUM | switch | cari bug: `tipe="vip"`, `harga * 0.8` tanpa break | "reguler" | FAIL | CONCEPT | 70s | bug & fix benar, tapi output dijawab nama case bukan angka (72000) |
| 18 | MEDIUM | switch | cari bug laten: `tier="silver"`, `case "platinum"` tanpa break | "fitur dasar" + temukan bug laten | PASS | — | 65s | menemukan bug yang tidak muncul untuk input saat ini |
| 19 | HARD | switch + ternary | `tier="gold"` → switch, lalu label pakai ternary | "Diskon 20%", lacak nilai diskon | PASS | — | 80s | pelacakan lengkap switch → ternary |
| 20 | WRITE | switch | tulis dari nol: `status="member"` → switch 3 case + break | kode benar, output potongan = 10 | PASS | — | 150s | semua syarat terpenuhi, bonus pakai template literal |
| 21 | MEDIUM | `&&` | `email` truthy + `password=""`, sisi mana yang menentukan | "sisi kanan, password" + "&& kembalikan kiri sebagai false" | FAIL | CONCEPT | — | arah benar, mekanisme salah: `&&` mengembalikan nilai asli, bukan `false` |
| 22 | MEDIUM | `&&` | `password="123"`, apa yang berubah | "3 === 3 true, jadi Masuk" | FAIL | CONCEPT | — | output benar, alasan salah (rule 18). Tidak ada `===` di kode itu |
| 23 | MEDIUM | `&&` `\|\|` | `kupon="HEMAT50"`, dua baris | baris 1 "HEMAT50", baris 2 "HEMAT50" | FAIL | CONCEPT | — | pakai aturan `\|\|` di tempat `&&`. `&&` kiri truthy → ambil kanan |
| 24 | MEDIUM | `\|\|` | `stok=0`, baris mana yang menyesatkan | "baris 2 benar, baris 1 menyesatkan" | PASS | — | — | paham kenapa `\|\|` berbahaya untuk angka |
| 25 | MEDIUM | short-circuit | `user=null`, apakah `user.nama` dieksekusi | "tidak, karena bikin error" | FAIL | CONCEPT | — | "tidak dieksekusi" benar, alasan terbalik: `&&` yang mencegah error |
| 26 | MEDIUM | short-circuit | hapus `user &&`, apa yang terjadi | "mencetak belum login" | FAIL | CONCEPT | — | error bukan `false`. TypeError menghentikan program, `else` tidak jalan |
| 27 | MEDIUM | `&&` | `user={nama:""}`, bagian mana yang menentukan | "user truthy karena object terisi" | FAIL | CONCEPT | — | tidak menyebut `user.nama` sebagai penentu hasil akhir |
| 28 | MEDIUM | `&&` | `user.nama="Yasin"`, apa yang berubah | "&& menghasilkan true" | FAIL | CONCEPT | — | output benar, mekanisme salah. `&&` menghasilkan `"Yasin"`, bukan `true` |
| 29 | EASY | `&&` | `user={nama:"Yasin"}`, `tampilan = user && user.nama` | "user" | FAIL | CONCEPT | — | ambil sisi kiri, padahal kiri truthy → ambil kanan. Hasilnya `"Yasin"` |
| 30 | MEDIUM | `&&` `\|\|` | tambah `\|\| "Tamu"` | "error, mencetak user" | FAIL | CONCEPT | — | tidak ada error. Hasilnya tetap `"Yasin"`, `"Tamu"` tidak dipakai |
| 31 | MEDIUM | `??` | `nama=""`, `\|\|` vs `??` | "`\|\|`→Tamu, `??`→`""`" + pilih `??` untuk nama | PASS | — | — | dua nilai benar. Pilihan `??` masuk akal untuk role, tapi untuk nama tampilan `\|\|` lebih tepat |
| 32 | MEDIUM | `!` | soal diberikan sebelum materi ditulis | — | VOID | — | — | soal tidak sah: materi `!` belum pernah diberikan. Dibuang dari penilaian |
| 33 | EASY | `&&` | `jumlah=2`, `nama=""`, dua baris `&&` | "lanjut", `""`, alasan: "kiri true dan kanan false, js hanya baca yang true" | FAIL | CONCEPT | — | nilai benar, mekanisme kebalik: JS WAJIB periksa kanan kalau kiri truthy |
| 34 | MEDIUM | short-circuit | `pesanan.user=null`, cari bug | "ganti `.nama` jadi string" | FAIL | CONCEPT | — | memperbaiki data, bukan kode. Perbaikan benar: tambah guard `pesanan.user &&` |
| 35 | MEDIUM | short-circuit | guard `user` ditaruh di KANAN `if (user.nama.length > 0 && user)` | "crash, karena `.nama` berisi null" | FAIL | CONCEPT | — | sebabnya bukan isi `.nama`, tapi posisi guard. `&&` baca kiri dulu |
| 36 | MEDIUM | short-circuit | tulis ulang guard 2 tingkat: `produk.kategori.nama` | `produk && produk.kategori && produk.kategori.nama === "konser"` | PASS | — | — | kode benar, diuji 4 kasus (null, kategori null, cocok, tidak cocok) — semua aman |
| 37 | HARD | `&&` + switch | `sudahLogin=false`, `role="admin"`, ada `default: akses="tamu"` | "tamu" | FAIL | CONCEPT | — | `if` gagal → `switch` tidak jalan → `default` tidak jalan → `akses` tetap `""` |
| 38 | HARD | `&&` + switch | harapan developer: user belum login dapat "tamu" | "belum tercapai, karena if berisi teks kosong `""`" | FAIL | READING | — | `sudahLogin` itu `false` (boolean), bukan `""`. Lalu perbaikan diusulkan dengan membalik urutan — tidak menolong |
| 39 | EASY | if/else | `nilai=45`, `if (nilai >= 70)` + `else` | "tidak tercetak apapun" | FAIL | READING | — | kode punya `else`. `if` gagal → `else` jalan → "tidak lulus" |
| 40 | EASY | if/else | drill ulang 1: `stok=0`, `if (stok > 0)` + else | false → "Stok habis" | PASS | — | — | Q2 ragu karena kata "if jalan" ambigu (salahku) |
| 41 | EASY | if/else | drill 2: `umur=15`, `if (umur >= 17)` + else | false, blok if tidak jalan, else jalan | PASS | — | — | 3/3, menyebut "else" secara eksplisit |
| 42 | EASY | else if | drill 3: `nilai=75`, 3 kondisi berurutan | false, false, true → "C" | PASS | — | — | 4/4, telusur berurutan benar |
| 43 | EASY | else if | drill 4: `nilai=50`, tidak ada yang cocok | semua false → else → "D" | PASS | — | — | paham `else` jalan saat tidak ada yang cocok |
| 44 | EASY | if tanpa else | drill 5: `stok=0`, `if` tanpa `else` | false, blok dilewati, tercetak "Selesai" | PASS | — | — | **kunci**: if gagal → program TETAP lanjut |
| 45 | EASY | switch + default | `role="guest"`, tidak ada case cocok | "default dijalankan", "Akses tamu" | PASS | — | — | 3/3 |
| 46 | HARD | `&&` + if + switch | `sudahLogin=false`, `role="admin"`, `default: akses="tamu"` | false, blok if tidak jalan, switch tidak jalan, `akses: ""` | PASS | — | — | **soal yang sama dengan #37** — sekarang benar semua. Pemulihan penuh |
| 47 | HARD | `&&` + if + switch + else | versi diperbaiki, ada `else` di luar switch | false → else → "tamu" | PASS | — | — | paham beda `default` (di dalam switch) vs `else` (di luar) |
| 48 | WRITE | `&&` guard chain | tulis dari nol: guard 3 tingkat `pesanan.user.nama` | `pesanan && pesanan.user && pesanan.user.nama` | PASS | — | — | diuji 5 kasus (lengkap, null, user null, nama kosong, tanpa user) — semua benar, tidak crash. Kurang `;` di satu baris |
| 49 | EASY | `!` | `belumDibaca=3`, `!x` dan `!!x` | false, true, "kembali ke awal karena 2 `!`" | PASS | — | — | 3/3. Belum sadar `!!3` menghasilkan `true`, bukan `3` |
| 50 | EASY | `!` + `.length` | `keranjang=[]`, `!keranjang.length` | "teks kosong", "false" | VOID | — | — | soal dicabut: `.length` materi minggu 3, belum diajarkan |
| 51 | EASY | `!` | `stok=0`, `!stok` dan `if (!stok)` | true, "if cari tahu stok ada", "stok=5 tetap tercetak" | FAIL | CONCEPT | — | `!0` benar, tapi `if (!stok)` disangka bertanya keberadaan variabel; `!stok` dengan `stok=5` disangka tetap `true` |
| 52 | EASY | `!` | `sudahLogin=true`, `!sudahLogin` | false → else → "Selamat datang" | PASS | — | — | 3/3 |
| 53 | MEDIUM | `!` | bug: `if (nama)` padahal ingin peringatan saat nama kosong | "program error", "sesuai keinginan", fix `if (!nama)` | FAIL | CONCEPT | — | fix benar, tapi kondisi falsy disangka error dan logika terbalik tidak terlihat |
| 54 | EASY | `!` | `nama=""`, `if (nama)` + else | tidak error, false, "B" | PASS | — | — | 3/3 — **falsy bukan error** akhirnya masuk |
| 55 | MEDIUM | `!` | bug: `if (!stok)` padahal ingin kirim email saat stok TERSEDIA | "if dilewati, tidak sesuai", fix `if (!!stok)` | PASS | — | — | fix jalan tapi `!!` berlebihan di dalam `if`. Belum sebut stok=0 sebagai pemicu |
| 56 | MEDIUM | `!` | `adaPesanan = !jumlah`, `jumlah=5` | false, boolean, "Belum ada pesanan", 2 versi fix | PASS | — | — | 3/3. Dua fix benar; versi `!!jumlah` lebih bersih karena tipe variabel cocok dengan namanya |
| 57 | HARD | `!` + `&&` | `sudahLogin && !punyaTiket` | true, boolean, else if tidak diperiksa, "Silakan beli tiket" | PASS | — | — | 3/3, mekanisme `!` di dalam `&&` tepat |
| 58 | HARD | `!` precedence | `!a && b` vs `!(a && b)` | false, true, alasan prioritas benar | PASS | — | — | 3/3, paham `!` mengikat lebih kuat dari `&&` |
| 59 | WRITE | `!` guard clause | tulis 3 cabang: belum login / nama kosong / sambut | `user && user.nama` / `user && !user.nama` / else | PASS | — | — | diuji 3 kasus, semua benar. Percobaan pertama gagal karena soal meminta menulis objek (materi minggu 4) — soal diperbaiki |
| 60 | EASY | `??` | `diskonA=0`, `diskonB=null`, empat baris `\|\|` vs `??` | 10, 0, lalu "sama karena null falsy dan nullish" | PASS | — | — | 4/4, memakai kata "nullish" dan "falsy" di tempat yang tepat |
| 61 | MEDIUM | `??` | bug: `nama=""`, `nama ?? "Tamu"` untuk nama tampilan | `""`, tidak sesuai keinginan, seharusnya `\|\|` | PASS | — | — | 3/3, paham `??` tidak mengganti `""` |
| 62 | HARD | `??` + ternary | `limitDariClient=0`, `limit = x ?? 10`, lalu ternary | 0, false, "0" dan "limit tidak valid"; kalau null → 10 dan "pakai limit 10" | PASS | — | — | 4/4 |
| 63 | HARD | `??` + `\|\|` | `jumlahNotif=0`, `pengaturan=null`, rantai `??` lalu `\|\|` | a=0, b="default", c="default" | PASS | — | — | 4/4, paham `0` sah untuk `??` tapi falsy untuk `\|\|` |
| 64 | WRITE | `??` | tulis resolver: `limit` null→10, `diskon` 0 harus tetap 0 | typo `limidaridb`/`limitdaridb` + `!diskon \|\| 0` → `true` | FAIL | SYNTAX + CONCEPT | — | dua kesalahan: nama variabel tidak konsisten, dan `!` dipakai untuk nilai cadangan padahal `!` menghancurkan nilai asli |
| 65 | WRITE | `??` | tulis ulang resolver dengan operator yang tepat | `limitDariDb ?? 10`, `diskonDariDb ?? 0` | PASS | — | — | diuji 4 nilai (null, 0, 25, undefined) untuk dua variabel — semua benar |

**Catatan pemulihan `&&` `\|\|` (2026-11-08, sesi ketiga):**

- **Drill terpisah berhasil.** 5 drill `if`/`else` tanpa `switch` dan tanpa `&&` → semua lulus.
- **Konsep dipisah dulu, baru digabung.** Ini yang seharusnya dilakukan sejak awal, bukan dicampur.
- **HARD lulus** lewat 2 jawaban benar berturut-turut pada soal berbeda (#46, #47).
- #46 adalah soal yang sama persis dengan #37 yang gagal 3×. Sekarang benar tanpa bantuan.
- **Level gerbang:** EASY ✅ · MEDIUM ✅ · HARD ✅ · WRITE ✅ — **TUNTAS** (#48)

**Catatan gerbang `&&` `\|\|` (2026-11-08, sesi lanjutan):**

- EASY: **PASS** (#33 gagal alasan, lalu pulih lewat 2 jawaban benar berturut-turut)
- MEDIUM: **PASS** (#36, jalur tulis-ulang; jalur temukan-bug gagal 2×)
- HARD: **BELUM** (#37, #38 gagal)
- WRITE: **BELUM**
- Total 39 soal dalam sehari → melebihi batas #22b (20 soal). Cakupan terlalu lebar.
- **Dihentikan** sesuai #17b: kesalahan "`if` gagal disangka menjalankan `default`" muncul 3× (#37, #38, #39).
- Soal `switch (true)` (nilai=45) dicabut: bukan pola yang pernah diajarkan, melanggar #24.

**Pelajaran untuk pengajar (aku):**
- Mencampur soal `switch` dan `if/else` tanpa jeda membuat learner mencampur model mentalnya.
- Menanyakan "apa yang berubah" ketika output-nya identik = soal cacat (#24).
- Menjelaskan `&&` 3× dengan tabel yang sama melanggar #17c (analogi harus berbeda).

**Catatan sesi `&&` `\|\|` (2026-11-08):**

- 21 soal diberikan (#21–#31 di file `07_Challenge.js`, nomor gate berbeda).
- Hanya FAIL dan PASS level MEDIUM yang dicatat, sesuai README 22b.
- PASS level EASY tidak dicatat: #14, #15, #17, #18, #20, #23, #27, #29(kode), #30(kode).
- **Drill akhir 4/4** (`a && "jeruk"` → jeruk, `b && "jeruk"` → `""`, `a \|\| "jeruk"` → apel, `c \|\| "jeruk"` → jeruk). Ini bukti pemulihan setelah 3 kegagalan berurutan.
- **Pelanggaran prosedur:** gagal 3× berturut-turut (#28, #29, #30) seharusnya memicu STOP + Deferred (README 17b). Drill diberikan sebagai gantinya, dan berhasil. Keberhasilan tidak membatalkan pelanggaran.
- **Level gerbang:** EASY ⬜ · MEDIUM ⬜ · HARD ⬜ · WRITE ⬜ — belum ada satu pun yang formal.
- **Waktu tidak diukur** pada sesi ini (README 17g dilanggar).

**Level:** EASY / MEDIUM / HARD / WRITE / VOID
**Verdict:** PASS / FAIL / VOID
**Type:** CONCEPT / READING / SYNTAX / LOGIC / —
**Time target:** EASY 30s / MEDIUM 2m / HARD 5m

## Deferred

Konsep yang gagal 3× dan ditunda. Sertakan soal yang mematahkannya.

| Concept | Question that broke it | Date |
|---|---|---|
| | | |

**Kosong.** Konsep `&&` HARD yang sempat ditunda (#37) sudah pulih pada 2026-11-08 lewat drill terpisah `if`/`else` (Gate Log #40-#47). Soal yang sama (#46) kini dijawab benar tanpa bantuan.

**Cara pemulihannya:** konsep dipisah dulu — 5 drill `if`/`else` tanpa `switch` dan tanpa `&&`, lalu 1 drill `switch` tanpa `if`, baru digabung. Mencampur keduanya sejak awal adalah penyebab kegagalan.

**Sisa:** `&&` `\|\|` sudah tuntas 4 level (#48). Konsep berikutnya: `!` (materi sudah ditulis, belum dibaca) dan `??` (sebagian, belum digerbang).

## Questions to revisit

- Why does `var` still exist if it has bugs?
- What is the difference between `null` and `undefined` in practice?

## Resources used

- https://javascript.info/variables
- https://javascript.info/types
- https://javascript.info/type-conversions
- https://javascript.info/operators
- https://javascript.info/comparison
- https://javascript.info/ifelse
- https://javascript.info/logical-operators
- https://javascript.info/while-for
