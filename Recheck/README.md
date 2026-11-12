# Re-check

Semua soal re-check disimpan di sini. Satu folder untuk satu alasan: **bukti belajar harus ada di repo, bukan di percakapan.**

---

## Isi

```
Recheck/
  2026-11-12.md            ← ringkasan + koreksi
  2026-11-12_recheck.js    ← soal, jawaban, dan kode verifikasi
```

Penamaan: `YYYY-MM-DD` mengikuti tanggal pengerjaan, bukan tanggal jatuh tempo.

---

## Aturan

1. **Soal dan jawaban selalu disimpan.** Termasuk yang salah.
2. **Jawaban salah tidak dihapus.** Dikomentari di bawahnya dengan koreksi — sama seperti README #10.
3. **File `.js` pakai penjaga.** `sudahMenjawab = false` di baris atas. Kode tidak jalan sampai diubah jadi `true`.
4. **Ringkasan ditulis setelah selesai**, bukan sebelum.
5. **Jatuh tempo berikutnya dicatat** di akhir file ringkasan.

---

## Kenapa jawaban salah tetap disimpan

Kalau yang disimpan hanya jawaban benar, file ini jadi pajangan — bukan catatan belajar.

Yang berguna nanti:

- Melihat pola kesalahan yang berulang (`falsy` disangka `error` muncul 4×)
- Tahu konsep mana yang **sempat** salah dan sudah pulih
- Bukti bahwa pemahaman dibangun, bukan langsung jadi

Jawaban salah yang dihapus = kehilangan bukti bahwa kamu pernah melewatinya.

---

## Hubungan dengan file lain

| File                    | Isi                           |
|-------------------------|-------------------------------|
| `REVIEW_QUEUE.md`       | jadwal: kapan harus re-check  |
| `Recheck/`              | isi: soal, jawaban, koreksi   |
| `KESALAHAN.md`          | pola: kesalahan yang berulang |
| `Catatan.md` → Gate Log | gerbang harian (materi baru)  |

`REVIEW_QUEUE` bilang **kapan**. Folder ini bilang **apa**.
