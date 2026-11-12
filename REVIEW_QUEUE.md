# Review Queue

Konsep berstatus 3 wajib diuji ulang **2 hari kemudian**. Tanpa tanggal, re-check tidak akan pernah terjadi.

---

## Cara pakai

1. Setiap kali konsep lulus gerbang, tambahkan satu baris
2. Isi `Re-check due` = tanggal lulus + 2 hari
3. Saat tanggalnya tiba, uji **1 soal MEDIUM** tanpa buka materi
4. Isi kolom `Result` dan `Status after`

Kalau gagal: status turun ke 2, masuk antrean lagi 2 hari kemudian.

---

## Antrean

Format: **konsep** · lulus → jatuh tempo · hasil · status

**Ternary** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: `>=` yang menentukan, `0 >= 0` true → ambil kiri, `-5` → ambil kanan

**`switch` + `break`** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: 2 baris (admin + user), fallthrough karena tidak ada `break`, guest 1 baris

**`&&` `\|\|` short-circuit** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 2/3: berhenti di `user.alamat` alasan falsy benar; sempat sebut "ada error", pulih di cek kecil

**`!` logical not** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 2/3: `!false` → `true` benar; salah sebut tipe hasil `\|\|` sebagai string, pulih di cek kecil

**`??` vs `\|\|`** · 2026-11-08 → 2026-11-10 · **PASS 2026-11-12** · status 3
- 3/3: `a`=0 karena nullish, `b`="tanpa nama", `c`=100 karena `\|\|` ganti falsy

**Kosong.** Semua item sudah direview 2026-11-12.

### Masuk antrean baru

Dua kesalahan ditemukan saat memeriksa explain back Day 3. Keduanya belum stabil, jadi
dijadwalkan ulang 2026-11-14, bukan langsung dianggap lulus.

**`??` alasan pemakaian** · muncul 2026-11-12 → jatuh tempo 2026-11-14 · status 2
- Yang diuji: kenapa `??` dipakai padahal untuk `null` hasilnya sama dengan `\|\|`
- Salah kemarin: dijelaskan sebagai pengganti `null` dan `undefined`

**pernyataan vs ekspresi** · muncul 2026-11-12 → jatuh tempo 2026-11-14 · status 2
- Yang diuji: mana yang bisa jadi nilai, `if` atau ternary
- Salah kemarin: arahnya dibalik, dikira ternary masuk ke dalam `if`

---

## Sudah direview

- **Ternary** · 2026-11-12 · PASS · status 3
- **`switch` + `break`** · 2026-11-12 · PASS · status 3
- **`&&` `\|\|` short-circuit** · 2026-11-12 · PASS · status 3
- **`!` logical not** · 2026-11-12 · PASS · status 3
- **`??` vs `\|\|`** · 2026-11-12 · PASS · status 3

**Jatuh tempo berikutnya:** 2026-11-14.

---

## Aturan

1. **Jangan hapus baris.** Kalau gagal, pindahkan ke tabel bawah dan tambahkan baris baru.
2. Re-check pakai soal **MEDIUM** — bukan soal yang sama waktu lulus.
3. Kalau lupa 3 hari, tetap diuji. Lebih baik terlambat daripada tidak.
4. Sebelum interview atau sebelum melamar, seluruh antrean harus kosong.
