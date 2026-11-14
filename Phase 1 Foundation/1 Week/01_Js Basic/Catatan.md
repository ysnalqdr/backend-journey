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

Dikerjakan 2026-11-12, tanpa buka materi.

1. **Kapan pakai if/else, kapan pakai ternary.** Sewaktu sebuah nilai memiliki kondisi yang
   ingin ditentukan, dan ternary bisa diimplementasikan di dalam if untuk menentukan hasil
   yang diharapkan developer.

2. **Kenapa `switch` butuh `break`.** Untuk menghindari fallthrough.

3. **Apa yang sebenarnya dikembalikan `&&` dan `||`.** Bukan boolean, tapi nilai. Yang
   dikembalikan ialah nilai dari sisi yang dipilih.

4. **Kapan pakai `??` dan kenapa bukan `||`.** Saat sebuah nilai berisi `null` atau
   `undefined`. Bukan `||`, karena `null` dan `undefined` sudah dicadangkan langsung oleh
   nullish coalescing.

5. **Satu hal yang tadinya salah paham.** `&&` (logical AND). Hasilnya selalu kupakai dengan
   cara yang salah. Sekarang paham cara membacanya, dan paham juga membaca kode secara
   keseluruhan.

### Koreksi setelah diperiksa

Diperiksa 2026-11-12. Nomor 2 dan 3 benar. Nomor 1 dan 4 diperbaiki di bawah, jawaban lama
tidak dihapus.

**Nomor 1, arahnya terbalik.** Bukan ternary yang masuk ke if, tapi sebaliknya: if tidak bisa
masuk ke mana-mana karena if itu pernyataan, bukan nilai. Ternary itu ekspresi, jadi dia yang
bisa masuk ke variabel, argumen fungsi, dan template literal.

```javascript
const label = nilai >= 70 ? "lulus" : "gagal";   // boleh
const salah = if (nilai >= 70) { "lulus" };      // SyntaxError
```

**Nomor 4, alasannya belum kena.** Saat nilainya `null` atau `undefined`, `??` dan `||`
hasilnya sama. Yang membedakan justru `0`, `""`, dan `false`:

| Nilai   | `??`    | `\|\|`  |
|---------|---------|---------|
| `0`     | `0`     | diganti |
| `""`    | `""`    | diganti |
| `false` | `false` | diganti |
| `null`  | diganti | diganti |

Jadi `??` dipakai bukan karena nilainya `null`, tapi karena `0`, `""`, dan `false` adalah nilai
sah yang tidak boleh diganti. Stok `0` artinya habis, bukan kosong. Kalau pakai `||`, stok `0`
berubah jadi `10` dan gudang dikira masih penuh.

## Bug log

Satu entri per bug. Format lengkap ada di `Working Skills/Templates/BugReport.md`.


**Aturan:**
- **Dugaan penyebab** ditandai dugaan, bukan fakta
- **Akar masalah** diisi setelah diperbaiki — boleh beda dari dugaan
- **Status:** `terbuka` / `diperbaiki` / `tidak bisa direproduksi`
- Minimal 1 entri per minggu (README #7)

## Gate Log

Setiap soal yang ditanyakan, jawaban yang diberikan, dan putusannya. Tanpa ini, gerbang tidak punya bukti.

**Aturan pencatatan:** catat **semua FAIL**. Catat PASS hanya kalau MEDIUM atau HARD. PASS di level EASY tidak memberi informasi.

**#1** · EASY · ternary · FAIL · CONCEPT · 20s
- Soal: `tiket=0`, `tiket > 0 ? "Tersedia" : "Habis"`
- Jawab: "Habis", alasan: tiket falsy
- Catatan: alasan salah sasaran — yang diperiksa `tiket > 0`, bukan `tiket`

**#2** · EASY · ternary · PASS · 15s
- Soal: `stok=-3`, `stok ? "Ada" : "Tidak ada"`
- Jawab: "Ada", alasan: -3 truthy
- Catatan: mekanisme benar; istilah "output true" dikoreksi

**#3** · MEDIUM · if/else if · PASS · 40s
- Soal: `nilai=90`, `if (nilai > 90)` A / `else if (nilai >= 80)` B
- Jawab: B, alasan: 90 > 90 false → cek >= 80 true
- Catatan: urutan kondisi + beda `>` vs `>=` benar

**#4** · EASY · ternary · PASS · 30s
- Soal: `stok=5, beli=3`, `stok - beli >= 2 ? "cukup" : "kurang"`
- Jawab: "cukup", 2 >= 2 true
- Catatan: langkah 1 dan 2 digabung, tapi hasil & alasan benar

**#5** · EASY · ternary · FAIL · READING · 25s
- Soal: `saldo=50000`, `saldo >= 100000 ? 1 : 0`
- Jawab: "1", number
- Catatan: tidak mengevaluasi kondisi; lalu salah baca `!` yang tidak ada

**#6** · MEDIUM · ternary · PASS · 45s
- Soal: cari bug: `umur >= 17 ? "dewasa" : "anak" : "remaja"`
- Jawab: SyntaxError, dua titik dua
- Catatan: tidak terjebak menghitung output

**#7** · EASY · ternary · PASS · 90s
- Soal: tulis dari nol: `stok=0` → ternary `status`
- Jawab: kode benar, output "habis"
- Catatan: ditulis tanpa melihat contoh

**#8** · EASY · switch · FAIL · CONCEPT · 35s
- Soal: `kode="B"`, tiga case + break
- Jawab: "dua"
- Catatan: tidak menyebut `break` sebagai penyebab berhenti

**#9** · EASY · switch · FAIL · CONCEPT · 40s
- Soal: `warna="merah"`, tanpa break di case pertama
- Jawab: "berhenti", "lanjut"
- Catatan: mengira switch melakukan looping

**#10** · EASY · switch · PASS · 50s
- Soal: `hewan="kucing"`, fallthrough sampai default
- Jawab: "meong","moo","petok"
- Catatan: melacak fallthrough sampai `default` dengan benar

**#11** · MEDIUM · switch · FAIL · CONCEPT · 60s
- Soal: cari bug: `level="gold"`, `diskon = 20` tanpa break
- Jawab: "20 dan 10"
- Catatan: benar temukan bug & fix, tapi salah hitung output — assignment disangka print

**#12** · EASY · assignment · PASS · 35s
- Soal: `saldo` ditimpa 3×, lalu 2× console.log
- Jawab: 2 baris, 200000, tidak mencetak
- Catatan: paham assignment menimpa nilai lama

**#13** · EASY · switch · FAIL · CONCEPT · 55s
- Soal: `level=2` angka, fallthrough case 2 → case 3
- Jawab: "menengah dan lanjut"
- Catatan: ULANG kesalahan #11: assignment disangka print. Juga salah: `case 2` vs `case "2"`

**#14** · EASY · switch · FAIL · CONCEPT · 45s
- Soal: `role="user"`, dua case + break
- Jawab: "terbatas"
- Catatan: output benar, tapi mekanisme tidak disebut — "switch hanya mencari user"

**#15** · EASY · switch · PASS · 40s
- Soal: `warna="hijau"`, jelaskan proses di `case "merah"`
- Jawab: diperiksa, tidak cocok, dilewati, lanjut
- Catatan: mekanisme lengkap: urutan, perbandingan, lewati

**#16** · EASY · switch · PASS · 30s
- Soal: `level=2` angka, telusuri `case 1`
- Jawab: "menengah", `2 === 1` false
- Catatan: PASS kedua berturut-turut

**#17** · MEDIUM · switch · FAIL · CONCEPT · 70s
- Soal: cari bug: `tipe="vip"`, `harga * 0.8` tanpa break
- Jawab: "reguler"
- Catatan: bug & fix benar, tapi output dijawab nama case bukan angka (72000)

**#18** · MEDIUM · switch · PASS · 65s
- Soal: cari bug laten: `tier="silver"`, `case "platinum"` tanpa break
- Jawab: "fitur dasar" + temukan bug laten
- Catatan: menemukan bug yang tidak muncul untuk input saat ini

**#19** · HARD · switch + ternary · PASS · 80s
- Soal: `tier="gold"` → switch, lalu label pakai ternary
- Jawab: "Diskon 20%", lacak nilai diskon
- Catatan: pelacakan lengkap switch → ternary

**#20** · WRITE · switch · PASS · 150s
- Soal: tulis dari nol: `status="member"` → switch 3 case + break
- Jawab: kode benar, output potongan = 10
- Catatan: semua syarat terpenuhi, bonus pakai template literal

**#21** · MEDIUM · `&&` · FAIL · CONCEPT
- Soal: `email` truthy + `password=""`, sisi mana yang menentukan
- Jawab: "sisi kanan, password" + "&& kembalikan kiri sebagai false"
- Catatan: arah benar, mekanisme salah: `&&` mengembalikan nilai asli, bukan `false`

**#22** · MEDIUM · `&&` · FAIL · CONCEPT
- Soal: `password="123"`, apa yang berubah
- Jawab: "3 === 3 true, jadi Masuk"
- Catatan: output benar, alasan salah (rule 18). Tidak ada `===` di kode itu

**#23** · MEDIUM · `&&` `||` · FAIL · CONCEPT
- Soal: `kupon="HEMAT50"`, dua baris
- Jawab: baris 1 "HEMAT50", baris 2 "HEMAT50"
- Catatan: pakai aturan `||` di tempat `&&`. `&&` kiri truthy → ambil kanan

**#24** · MEDIUM · `||` · PASS
- Soal: `stok=0`, baris mana yang menyesatkan
- Jawab: "baris 2 benar, baris 1 menyesatkan"
- Catatan: paham kenapa `||` berbahaya untuk angka

**#25** · MEDIUM · short-circuit · FAIL · CONCEPT
- Soal: `user=null`, apakah `user.nama` dieksekusi
- Jawab: "tidak, karena bikin error"
- Catatan: "tidak dieksekusi" benar, alasan terbalik: `&&` yang mencegah error

**#26** · MEDIUM · short-circuit · FAIL · CONCEPT
- Soal: hapus `user &&`, apa yang terjadi
- Jawab: "mencetak belum login"
- Catatan: error bukan `false`. TypeError menghentikan program, `else` tidak jalan

**#27** · MEDIUM · `&&` · FAIL · CONCEPT
- Soal: `user={nama:""}`, bagian mana yang menentukan
- Jawab: "user truthy karena object terisi"
- Catatan: tidak menyebut `user.nama` sebagai penentu hasil akhir

**#28** · MEDIUM · `&&` · FAIL · CONCEPT
- Soal: `user.nama="Yasin"`, apa yang berubah
- Jawab: "&& menghasilkan true"
- Catatan: output benar, mekanisme salah. `&&` menghasilkan `"Yasin"`, bukan `true`

**#29** · EASY · `&&` · FAIL · CONCEPT
- Soal: `user={nama:"Yasin"}`, `tampilan = user && user.nama`
- Jawab: "user"
- Catatan: ambil sisi kiri, padahal kiri truthy → ambil kanan. Hasilnya `"Yasin"`

**#30** · MEDIUM · `&&` `||` · FAIL · CONCEPT
- Soal: tambah `|| "Tamu"`
- Jawab: "error, mencetak user"
- Catatan: tidak ada error. Hasilnya tetap `"Yasin"`, `"Tamu"` tidak dipakai

**#31** · MEDIUM · `??` · PASS
- Soal: `nama=""`, `||` vs `??`
- Jawab: "`||`→Tamu, `??`→`""`" + pilih `??` untuk nama
- Catatan: dua nilai benar. Pilihan `??` masuk akal untuk role, tapi untuk nama tampilan `||` lebih tepat

**#32** · MEDIUM · `!` · VOID
- Soal: soal diberikan sebelum materi ditulis
- Jawab: —
- Catatan: soal tidak sah: materi `!` belum pernah diberikan. Dibuang dari penilaian

**#33** · EASY · `&&` · FAIL · CONCEPT
- Soal: `jumlah=2`, `nama=""`, dua baris `&&`
- Jawab: "lanjut", `""`, alasan: "kiri true dan kanan false, js hanya baca yang true"
- Catatan: nilai benar, mekanisme kebalik: JS WAJIB periksa kanan kalau kiri truthy

**#34** · MEDIUM · short-circuit · FAIL · CONCEPT
- Soal: `pesanan.user=null`, cari bug
- Jawab: "ganti `.nama` jadi string"
- Catatan: memperbaiki data, bukan kode. Perbaikan benar: tambah guard `pesanan.user &&`

**#35** · MEDIUM · short-circuit · FAIL · CONCEPT
- Soal: guard `user` ditaruh di KANAN `if (user.nama.length > 0 && user)`
- Jawab: "crash, karena `.nama` berisi null"
- Catatan: sebabnya bukan isi `.nama`, tapi posisi guard. `&&` baca kiri dulu

**#36** · MEDIUM · short-circuit · PASS
- Soal: tulis ulang guard 2 tingkat: `produk.kategori.nama`
- Jawab: `produk && produk.kategori && produk.kategori.nama === "konser"`
- Catatan: kode benar, diuji 4 kasus (null, kategori null, cocok, tidak cocok) — semua aman

**#37** · HARD · `&&` + switch · FAIL · CONCEPT
- Soal: `sudahLogin=false`, `role="admin"`, ada `default: akses="tamu"`
- Jawab: "tamu"
- Catatan: `if` gagal → `switch` tidak jalan → `default` tidak jalan → `akses` tetap `""`

**#38** · HARD · `&&` + switch · FAIL · READING
- Soal: harapan developer: user belum login dapat "tamu"
- Jawab: "belum tercapai, karena if berisi teks kosong `""`"
- Catatan: `sudahLogin` itu `false` (boolean), bukan `""`. Lalu perbaikan diusulkan dengan membalik urutan — tidak menolong

**#39** · EASY · if/else · FAIL · READING
- Soal: `nilai=45`, `if (nilai >= 70)` + `else`
- Jawab: "tidak tercetak apapun"
- Catatan: kode punya `else`. `if` gagal → `else` jalan → "tidak lulus"

**#40** · EASY · if/else · PASS
- Soal: drill ulang 1: `stok=0`, `if (stok > 0)` + else
- Jawab: false → "Stok habis"
- Catatan: Q2 ragu karena kata "if jalan" ambigu (salahku)

**#41** · EASY · if/else · PASS
- Soal: drill 2: `umur=15`, `if (umur >= 17)` + else
- Jawab: false, blok if tidak jalan, else jalan
- Catatan: 3/3, menyebut "else" secara eksplisit

**#42** · EASY · else if · PASS
- Soal: drill 3: `nilai=75`, 3 kondisi berurutan
- Jawab: false, false, true → "C"
- Catatan: 4/4, telusur berurutan benar

**#43** · EASY · else if · PASS
- Soal: drill 4: `nilai=50`, tidak ada yang cocok
- Jawab: semua false → else → "D"
- Catatan: paham `else` jalan saat tidak ada yang cocok

**#44** · EASY · if tanpa else · PASS
- Soal: drill 5: `stok=0`, `if` tanpa `else`
- Jawab: false, blok dilewati, tercetak "Selesai"
- Catatan: **kunci**: if gagal → program TETAP lanjut

**#45** · EASY · switch + default · PASS
- Soal: `role="guest"`, tidak ada case cocok
- Jawab: "default dijalankan", "Akses tamu"
- Catatan: 3/3

**#46** · HARD · `&&` + if + switch · PASS
- Soal: `sudahLogin=false`, `role="admin"`, `default: akses="tamu"`
- Jawab: false, blok if tidak jalan, switch tidak jalan, `akses: ""`
- Catatan: **soal yang sama dengan #37** — sekarang benar semua. Pemulihan penuh

**#47** · HARD · `&&` + if + switch + else · PASS
- Soal: versi diperbaiki, ada `else` di luar switch
- Jawab: false → else → "tamu"
- Catatan: paham beda `default` (di dalam switch) vs `else` (di luar)

**#48** · WRITE · `&&` guard chain · PASS
- Soal: tulis dari nol: guard 3 tingkat `pesanan.user.nama`
- Jawab: `pesanan && pesanan.user && pesanan.user.nama`
- Catatan: diuji 5 kasus (lengkap, null, user null, nama kosong, tanpa user) — semua benar, tidak crash. Kurang `;` di satu baris

**#49** · EASY · `!` · PASS
- Soal: `belumDibaca=3`, `!x` dan `!!x`
- Jawab: false, true, "kembali ke awal karena 2 `!`"
- Catatan: 3/3. Belum sadar `!!3` menghasilkan `true`, bukan `3`

**#50** · EASY · `!` + `.length` · VOID
- Soal: `keranjang=[]`, `!keranjang.length`
- Jawab: "teks kosong", "false"
- Catatan: soal dicabut: `.length` materi minggu 3, belum diajarkan

**#51** · EASY · `!` · FAIL · CONCEPT
- Soal: `stok=0`, `!stok` dan `if (!stok)`
- Jawab: true, "if cari tahu stok ada", "stok=5 tetap tercetak"
- Catatan: `!0` benar, tapi `if (!stok)` disangka bertanya keberadaan variabel; `!stok` dengan `stok=5` disangka tetap `true`

**#52** · EASY · `!` · PASS
- Soal: `sudahLogin=true`, `!sudahLogin`
- Jawab: false → else → "Selamat datang"
- Catatan: 3/3

**#53** · MEDIUM · `!` · FAIL · CONCEPT
- Soal: bug: `if (nama)` padahal ingin peringatan saat nama kosong
- Jawab: "program error", "sesuai keinginan", fix `if (!nama)`
- Catatan: fix benar, tapi kondisi falsy disangka error dan logika terbalik tidak terlihat

**#54** · EASY · `!` · PASS
- Soal: `nama=""`, `if (nama)` + else
- Jawab: tidak error, false, "B"
- Catatan: 3/3 — **falsy bukan error** akhirnya masuk

**#55** · MEDIUM · `!` · PASS
- Soal: bug: `if (!stok)` padahal ingin kirim email saat stok TERSEDIA
- Jawab: "if dilewati, tidak sesuai", fix `if (!!stok)`
- Catatan: fix jalan tapi `!!` berlebihan di dalam `if`. Belum sebut stok=0 sebagai pemicu

**#56** · MEDIUM · `!` · PASS
- Soal: `adaPesanan = !jumlah`, `jumlah=5`
- Jawab: false, boolean, "Belum ada pesanan", 2 versi fix
- Catatan: 3/3. Dua fix benar; versi `!!jumlah` lebih bersih karena tipe variabel cocok dengan namanya

**#57** · HARD · `!` + `&&` · PASS
- Soal: `sudahLogin && !punyaTiket`
- Jawab: true, boolean, else if tidak diperiksa, "Silakan beli tiket"
- Catatan: 3/3, mekanisme `!` di dalam `&&` tepat

**#58** · HARD · `!` precedence · PASS
- Soal: `!a && b` vs `!(a && b)`
- Jawab: false, true, alasan prioritas benar
- Catatan: 3/3, paham `!` mengikat lebih kuat dari `&&`

**#59** · WRITE · `!` guard clause · PASS
- Soal: tulis 3 cabang: belum login / nama kosong / sambut
- Jawab: `user && user.nama` / `user && !user.nama` / else
- Catatan: diuji 3 kasus, semua benar. Percobaan pertama gagal karena soal meminta menulis objek (materi minggu 4) — soal diperbaiki

**#60** · EASY · `??` · PASS
- Soal: `diskonA=0`, `diskonB=null`, empat baris `||` vs `??`
- Jawab: 10, 0, lalu "sama karena null falsy dan nullish"
- Catatan: 4/4, memakai kata "nullish" dan "falsy" di tempat yang tepat

**#61** · MEDIUM · `??` · PASS
- Soal: bug: `nama=""`, `nama ?? "Tamu"` untuk nama tampilan
- Jawab: `""`, tidak sesuai keinginan, seharusnya `||`
- Catatan: 3/3, paham `??` tidak mengganti `""`

**#62** · HARD · `??` + ternary · PASS
- Soal: `limitDariClient=0`, `limit = x ?? 10`, lalu ternary
- Jawab: 0, false, "0" dan "limit tidak valid"; kalau null → 10 dan "pakai limit 10"
- Catatan: 4/4

**#63** · HARD · `??` + `||` · PASS
- Soal: `jumlahNotif=0`, `pengaturan=null`, rantai `??` lalu `||`
- Jawab: a=0, b="default", c="default"
- Catatan: 4/4, paham `0` sah untuk `??` tapi falsy untuk `||`

**#64** · WRITE · `??` · FAIL · SYNTAX + CONCEPT
- Soal: tulis resolver: `limit` null→10, `diskon` 0 harus tetap 0
- Jawab: typo `limidaridb`/`limitdaridb` + `!diskon || 0` → `true`
- Catatan: dua kesalahan: nama variabel tidak konsisten, dan `!` dipakai untuk nilai cadangan padahal `!` menghancurkan nilai asli

**#65** · WRITE · `??` · PASS
- Soal: tulis ulang resolver dengan operator yang tepat
- Jawab: `limitDariDb ?? 10`, `diskonDariDb ?? 0`
- Catatan: diuji 4 nilai (null, 0, 25, undefined) untuk dua variabel — semua benar

**#66** · EASY · `for` mundur · VOID
- Soal: `for (let i = 3; i > 0; i--)`, berapa baris dan apa isi terakhir
- Alasan VOID: `i--` belum pernah diberi contoh di materi, hanya disebut sebagai "arah yang salah".
  Melanggar aturan materi-sebelum-soal. Dicabut, materi `i--` dan `i -= 2` ditulis dulu.

**#67** · EASY · `for` mundur `i -= 2` · PASS
- Soal: `for (let i = 10; i > 0; i -= 2)`, berapa baris dan isi terakhir
- Jawab: 5 baris, terakhir `2`. Benar.
- Catatan: sempat tidak paham "tanda perbandingan harus dibalik kalau mundur", dijelaskan dengan
  tiga kasus (`i < 0` vs `i > 0` vs `i < 3`), lalu paham

**#68** · EASY · `for` dengan `data.length` · PASS
- Soal: pagination `i < data.length` dengan langkah 3, apa yang berubah kalau jadi `<=`
- Jawab: 4 baris (`0,3,6,9`), terakhir `9`, `<=` tidak mengubah apa pun. Benar.
- Catatan: alasan awal "karena langkahnya 3" belum lengkap; ditambahkan bahwa `<` dan `<=` hanya
  berbeda kalau `i` mendarat tepat di batas. Diuji tiga kasus pembanding.

**#69** · MEDIUM · `for` off-by-one · PASS (percobaan kedua)
- Soal: `i <= jumlahPelanggan` membuat `terkirim` jadi 6 padahal pelanggan 5
- Percobaan 1 FAIL: menjawab output sebagai daftar `0,1,2,3,4,5`, menunjuk `terkirim++` sebagai
  masalah, dan mengusulkan empat bagian di `for`
- Percobaan 2 PASS: `5` dan `6`, masalah di `<=`, perbaikan `i < jumlahPelanggan`
- Catatan: sebelum percobaan kedua, materi `+=` dan `++` diulang karena akumulasi belum dipahami

**#70** · MEDIUM · `let` ganda di dalam loop · FAIL
- Soal: `let totalJam = 0` di dalam loop menutupi variabel luar, hasil `0` bukan `20`
- Jawab: `8`, masalah ditunjuk di baris `console.log`, perbaikan `jumlah hari`
- Catatan: tidak melihat `let` kedua sebagai penyebab. Pola sama dengan #69: membaca isi loop,
  tidak membaca deklarasi di atasnya

**#71** · DRILL · akumulasi `-=` dengan perkalian · PASS setelah 4 percobaan
- Soal: `saldo -= i * 2` dari `50`, lalu `n -= i * 2` dari `10`
- Percobaan 1: hanya menghitung `i * 2`, tidak mengurangi
- Percobaan 2: mengurangi, tapi tidak melihat `let saldo = 50` di atas loop
- Percobaan 3: mengurangi 1 tiap putaran, bukan `i`; urutan tulis `1 - 20` terbalik
- Percobaan 4: PASS, `-2`, dan bisa menjelaskan urutan berpikirnya sendiri
- Catatan: yang akhirnya bekerja adalah tabel dengan kolom "nilai sebelum" diisi dari hasil baris
  sebelumnya, bukan dari angka awal. Ini teknik yang harus dipakai untuk semua soal akumulasi.

**#72** · DRILL · akumulasi, 5 soal · PASS 5/5
- Soal: `total += i`, `total += 5`, `sisa -= i`, `total += i * i`, `tabungan += i * 1000`
- Jawab: `6`, `15`, `7`, `14`, `10000` — kelima benar
- Catatan: nomor 2 sempat dijawab `16` (salah tekan), nomor 4 di-trace sendiri dengan benar
  (`1+4=5`, lalu `5+9=14`) — menumpuk, bukan dari awal
- Bukti penumpukan sudah otomatis: nomor 5 dijawab langsung tanpa tabel
- Cara menjawab masih mengganti isi kode dengan angka (`console.log(10000)`), perlu diingatkan
  agar menulis jawaban terpisah dan membiarkan kode utuh

**#73** · MEDIUM batch · `for` variatif, 6 soal · FAIL 1/6
- Soal: M1 `i *= 2`, M2 `i += 5` sampai 25, M3 kondisi tidak pernah true, M4 mundur kuadrat,
  M5 `i * 100`, M6 langkah 2
- Jawab: `342`, `65`, `0`, `15`, `11000`, `4`
- Benar: `4`, `75`, `0`, `14`, `1000`, `5` — hanya M3 yang tepat
- Catatan: semua bagian `for` dibaca benar (berlipat, turun, naik dua, kuadrat). Yang meleset
  penjumlahan di akhir, dikerjakan di kepala. Sesi dihentikan karena kualitas turun, bukan karena
  konsep tidak dipahami
- Tindakan: masuk `Deferred`, sesi berikutnya maksimal 3 soal per batch dan wajib trace tertulis

**#74** · VOID · batch pertama
- Alasan: soal berisi nested loop, `break`, dan `continue` yang belum diajarkan
- Dicabut atas permintaan learner, diganti batch murni `for`

**#75** · MEDIUM · `for` per konsep, 10 soal · PASS 10/10
- Konsep A bentuk perubahan (A1-A3): `4`, `5`, `4` — ketiga benar, deret ditulis
- Konsep B batas dan putaran (B1-B4): `75`, `5`, `0`, `3` — keempat benar, angka gagal ditulis
- Konsep C akumulasi (C1-C3): `14`, `1000`, `200` — ketiga benar, tabel empat kolom ditulis
- Catatan: A3 deret kehilangan angka awal (`10`), tapi hitungannya benar. B3 alasan masih
  menyisakan anggapan `i++` jalan dulu, dikoreksi
- Bukti perubahan cara kerja: dari 1/6 (batch #73) jadi 10/10 dengan aturan trace tertulis
- Tindakan: `Deferred` akumulasi dicabut, siap naik ke HARD

**#76** · MEDIUM · `break`, `continue`, `%` · PASS 6/7
- S1 `break` di `i===4`: `6` — percobaan pertama salah (`3`), lalu benar
- S2 `continue` di `i===3`: `12` — benar
- S3 `% 2` ganjil saja: `[1,3,5]` — benar
- S4 `break` dengan `% 3`: `3` — **FAIL**, dijawab `19`
- S5 `continue` dengan `% 2 === 1`: `20` — benar
- S6 dua `if` (`continue` lalu `break`): `[1,3,4]` — benar setelah satu kali ulang
- S7 soal pendek setelah koreksi: `[1,2,4,5]` — benar
- Catatan S4: dua kekeliruan sekaligus — `i % 3` disangka "ganjil", dan `break` disangka
  `continue`. Perlu diulang
- Catatan umum: `%` belum pernah diajarkan, dan `===` sempat dibaca sebagai pengurangan.
  Keduanya butuh drill terpisah

**#77** · MEDIUM · nested loop · belum diuji
- Materi sudah diberikan dan diverifikasi (N1 `12`, N2 enam pasangan, N3 `18`)
- Soal N1-N3 belum dijawab, dicatat sebagai utang


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

| Concept                   | Question that broke it | Date       |
|---------------------------|------------------------|------------|
| ~~Akumulasi dalam `for`~~ | Batch M1-M6            | 2026-11-12 |

**Status: dicabut 2026-11-12.** Diuji ulang dengan 10 soal per konsep (Gate Log #75), hasil 10/10.
Penyebab kegagalan sebelumnya bukan pemahaman, tapi menghitung di kepala. Aturan trace tertulis
sudah terbukti bekerja dan tetap dipakai.

**Isi Deferred:**

Enam soal MEDIUM dikerjakan 2026-11-12, hasil 1 benar dari 6. Yang gagal bukan pembacaan
`for` — `i *= 2`, `i--`, `i += 2`, `i * i` semuanya dibaca benar. Yang gagal adalah
**penjumlahan di akhir**, karena dikerjakan di kepala tanpa menulis baris per baris.

Satu soal sebelumnya (drill #72) lulus 5 dari 5. Jadi kemampuan dasarnya ada, tapi belum stabil
saat lelah.

**Rencana sesi berikutnya, urut:**

1. Satu soal akumulasi sebagai pemanasan, wajib dengan tiga baris trace tertulis
2. Ulang M1, M2, M4, M5, M6 satu per satu — bukan sebagai batch
3. Aturan sementara: **tulis tiga baris trace sebelum menjawab, tidak boleh di kepala**
4. Baru lanjut HARD setelah minimal 4 dari 5 benar berturut-turut

**Catatan pengajar:** batch 6 soal sekaligus terlalu banyak untuk sesi yang sudah panjang.
Lain kali maksimal 3 soal per batch, dan berhenti kalau dua berturut-turut salah.

**Kosong sebelumnya.** Konsep `&&` HARD yang sempat ditunda (#37) sudah pulih pada 2026-11-08 lewat drill terpisah `if`/`else` (Gate Log #40-#47). Soal yang sama (#46) kini dijawab benar tanpa bantuan.

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
