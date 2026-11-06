# Trace Sheet

Copy this file to `Trace.md` at the repo root, or append a new section per week.
Fill it **before** reading code (prediction) and **after** (the chain).

---

## TRACE #__ — <nama alur>

**Tanggal:**
**Level:** (1 = 10-20 baris / 2 = satu file / 3 = file backend / 4 = beberapa file / 5 = sistem penuh)

### Aksi user

<apa yang dilakukan user, satu kalimat>

### Prediksi (isi SEBELUM baca kode)

- Alur kira-kira lewat mana:
- File yang mungkin terlibat:
- Yang saya tidak yakin:

### Rantai eksekusi (isi SETELAH baca kode)

| # | Tahap | Lokasi (file:baris) | Catatan |
|---|---|---|---|
| 1 | UI trigger | | |
| 2 | Fungsi / komponen | | |
| 3 | Panggilan API (method, path, body) | | |
| 4 | Auth / middleware | | |
| 5 | Handler | | |
| 6 | Validasi | | |
| 7 | Query DB (collection/tabel, filter) | | |
| 8 | Response (status, bentuk data) | | |
| 9 | Update state di UI | | |

### Selisih prediksi vs kenyataan

<apa yang saya tebak salah, dan kenapa>

### Yang tidak saya pahami

1.
2.
3.

### Pertanyaan untuk besok

1.
2.

### Bug yang ditemukan (kalau ada)

<kalau ada, pindahkan ke Bug log dengan nomor bug>
