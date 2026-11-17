# Review 02 — Menulis Komentar Review untuk `while`

**Blok Working Skills:** `review-02` — bagian EXPLAIN
**Materi:** `while`, `continue`, infinite loop
**Aturan:** README #45 (level EXPLAIN)

---

## Kenapa latihan ini ada

Riset **"Competencies for Code Review"** (CSCW 2023) mensurvei 105 reviewer dan menemukan
27 kompetensi. Hasilnya:

> Reviewer merasa **kurang percaya diri** dalam berkomunikasi jelas dan memberi umpan balik
> yang membangun — padahal mereka menganggapnya sama pentingnya dengan kemampuan teknis.

Jadi kemampuan teknis bukan bottleneck. **Menyampaikan** yang bottleneck.

Dan buktinya sudah ada di sesi ini. Saat Reading 01 pertanyaan 4, jawabannya
*"bisa bikin berantakan"*. Nalurinya benar. Tapi kalimat itu tidak bisa dipakai siapa pun
untuk memperbaiki kode.

---

## Aturan komentar review

Tiga hal wajib, dalam tiga kalimat maksimal:

| #   | Yang wajib ada                               |
|-----|----------------------------------------------|
| 1   | **Apa** yang rusak                           |
| 2   | **Kapan** rusak — kondisi apa yang memicunya |
| 3   | **Bagaimana** memperbaikinya                 |

Yang **tidak** boleh:

- "kodenya salah" tanpa menyebut apa
- "sebaiknya diperbaiki" tanpa menyebut bagaimana
- lebih dari 3 kalimat
- menyebut baris yang salah tanpa menyebut akibatnya

---

## Uji: apakah komentarmu berguna?

Bayangkan kamu memberi komentarmu ke orang yang **belum pernah melihat kode ini**. Lalu:

> Bisakah dia memperbaiki kode itu **hanya** dari komentarmu, tanpa bertanya?

Kalau tidak bisa, komentarnya belum lulus.

---

# Soal E1

```javascript
let total = 0;
let i = 1;

while (i <= 10) {
    if (i === 5) continue;
    total += i;
    i++;
}
```

Tulis komentar review-mu di bawah ini. Maksimal 3 kalimat.

## Komentarku

>

---

## Setelah menulis

Jangan jalankan kodenya dulu. Cek sendiri tiga pertanyaan ini:

| #   | Pertanyaan                                      | Sudah? |
|-----|-------------------------------------------------|--------|
| 1   | Apakah aku menyebut **apa** yang rusak?         |        |
| 2   | Apakah aku menyebut **kondisi** yang memicunya? |        |
| 3   | Apakah aku menyebut **perbaikan** yang konkret? |        |

Kalau ada yang "belum", perbaiki dulu. Baru minta dinilai.

---

## Kunci

Dibuka setelah kamu menulis.

<details>
<summary>Buka kunci</summary>

### Jawaban yang lulus

> Loop ini akan berhenti tidak pernah saat `i` mencapai `5`, karena `continue` melompat
> ke pemeriksaan kondisi sebelum `i++` dijalankan, sehingga `i` tetap `5` dan
> `5 <= 10` selalu benar. Pindahkan `i++` ke atas `continue`, atau ubah `if (i === 5)`
> menjadi blok yang menaikkan `i` sebelum `continue`.

**Kenapa lulus:**

| Syarat                | Dipenuhi                           |
|-----------------------|------------------------------------|
| Apa yang rusak        | loop tidak pernah berhenti         |
| Kapan rusak           | saat `i` mencapai `5`              |
| Bagaimana memperbaiki | pindahkan `i++` sebelum `continue` |

### Jawaban yang TIDAK lulus

> Ada bug di `continue`, seharusnya pakai `break`.

Kenapa gagal: menyebut perbaikan yang **salah**. `break` akan menghentikan loop di `i = 5`,
bukan melewatinya. Komentar yang salah lebih berbahaya daripada tidak ada komentar.

> Kodenya infinite loop.

Kenapa gagal: menyebut **apa**, tapi tidak menyebut **kapan** dan **bagaimana**.
Orang lain tetap tidak tahu harus memperbaiki apa.

</details>

---

## Yang dinilai

| Level | Arti                                                   |
|-------|--------------------------------------------------------|
| 0     | tidak menulis apa pun                                  |
| 1     | menyebut "ada bug" tanpa detail                        |
| 2     | menyebut apa, tapi bukan kapan atau bagaimana          |
| 3     | tiga hal lengkap, tapi kalimatnya membingungkan        |
| 4     | tiga hal lengkap, orang lain bisa langsung memperbaiki |

Target: **3 ke atas**. Untuk lulus blok, minimal 3.
