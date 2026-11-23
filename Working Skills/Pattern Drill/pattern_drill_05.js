// pattern_drill_05.js — Posisi baris: di dalam atau di luar kurung
//
// Dibuat 2026-11-22 setelah dua kesalahan yang sama muncul di hari berbeda:
//   - nested loop: `total += i` dikira jalan sekali per putaran luar
//   - reading-02: `catatan++` di dalam `if` dikira jalan tiap putaran
//   - reading-02: `const` dikira bisa berubah
//
// Cara pakai: baca setiap potongan, tulis jawabanmu, baru isi kunci.
// Jangan jalankan sebelum mengisi.

const sudahMenjawab = true;

const potongan = [
    {
        nama: "P1",
        kode: `let x = 0;
for (let i = 1; i <= 3; i++) {
    x++;
}
// maksudnya: hitung berapa kali loop jalan
// x = ?`,
        kunci: 3
    },
    {
        nama: "P2",
        kode: `let x = 0;
for (let i = 1; i <= 3; i++) {
    if (i === 2) {
        x++;
    }
}
// maksudnya: hitung berapa kali syaratnya terpenuhi
// x = ?`,
        kunci: 1
    },
    {
        nama: "P3",
        kode: `let x = 0;
for (let i = 1; i <= 3; i++) {
    x++;
    if (i === 2) {
        x++;
    }
}
// maksudnya: satu tambahan tanpa syarat, satu lagi dengan syarat
// x = ?`,
        kunci: 4
    },
    {
        nama: "P4",
        kode: `const batas = 5;
let nilai = 10;
for (let i = 1; i <= 2; i++) {
    nilai -= 3;
    if (nilai < batas) {
        nilai = 0;
    }
}
// maksudnya: nilai turun 3 tiap putaran; kalau di bawah batas, dijadikan 0
// nilai = ?`,
        kunci: 0
    },
    {
        nama: "P5",
        kode: `const batas = 5;
let catat = 0;
let nilai = 10;
for (let i = 1; i <= 3; i++) {
    nilai -= 3;
    if (nilai < batas) {
        catat++;
    }
}
// maksudnya: berapa kali syarat terpenuhi
// catat = ?`,
        kunci: 2
    },
    {
        nama: "P6",
        kode: `let total = 0;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        total++;
    }
}
// maksudnya: berapa kali total++ jalan
// total = ?`,
        kunci: 6
    },
    {
        nama: "P7",
        kode: `let total = 0;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        // kosong
    }
    total++;
}
// maksudnya: total++ di luar loop dalam
// total = ?`,
        kunci: 3
    },
    {
        nama: "P8",
        kode: `let hitung = 0;
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
        continue;
    }
    hitung++;
}
// maksudnya: berapa kali hitung++ jalan (i ganjil)
// hitung = ?`,
        kunci: 2
    },
    {
        nama: "P9",
        kode: `let x = 0;
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    x++;
}
// maksudnya: berapa kali x++ jalan sebelum break
// x = ?`,
        kunci: 2
    },
    {
        nama: "P10",
        kode: `let x = 0;
for (let i = 1; i <= 3; i++) {
    let x = i;
}
// maksudnya: ada let di dalam loop, x luar tersentuh tidak
// x = ?`,
        kunci: 0
    },
    {
        nama: "P11",
        kode: `let total = 0;
for (let i = 1; i <= 3; i++) {
    total += 2;
}
// maksudnya: berapa kali += 2 jalan
// total = ?`,
        kunci: 6
    },
    {
        nama: "P12",
        kode: `let total = 0;
for (let i = 1; i <= 3; i++) {
    if (i !== 1) {
        total += 2;
    }
}
// maksudnya: += 2 hanya kalau i bukan 1
// total = ?`,
        kunci: 4
    },
    {
        nama: "P13",
        kode: `let x = 0;
let i = 1;
while (i <= 4) {
    x++;
    i++;
}
// maksudnya: berapa putaran while
// x = ?`,
        kunci: 4
    },
    {
        nama: "P14",
        kode: `let x = 0;
let i = 1;
while (i <= 4) {
    if (i === 2) {
        i++;
        continue;
    }
    x++;
    i++;
}
// maksudnya: satu putaran dilewati
// x = ?`,
        kunci: 3
    },
    {
        nama: "P15",
        kode: `const n = 3;
let x = 0;
for (let i = 1; i <= n; i++) {
    x += i;
}
// maksudnya: n const dipakai sebagai batas, x yang berubah
// x = ?`,
        kunci: 6
    }
];

if (!sudahMenjawab) {
    console.log("STOP.");
    console.log("Jawab dulu " + potongan.length + " potongan di bawah.");
    console.log("Lalu isi array jawaban dan ubah sudahMenjawab jadi true.");
    potongan.forEach((p) => {
        console.log("");
        console.log("--- " + p.nama + " ---");
        console.log(p.kode);
    });
    process.exit(1);
}

// isi jawabanmu di sini, berurutan P1..P15
// dikerjakan 2026-11-23: 14 dari 15. Yang meleset P12 (jawab 2, kunci 4)
// karena `i !== 1` dibaca sebagai "i sama dengan 2", padahal artinya "bukan 1".
const jawaban = [
    3, 1, 4, 0, 2,
    6, 3, 2, 2, 0,
    6, 2, 4, 3, 6
];

let benar = 0;
let kosong = 0;
const salah = [];

potongan.forEach((p, i) => {
    if (jawaban[i] === null) {
        kosong++;
        return;
    }
    if (jawaban[i] === p.kunci) {
        benar++;
    } else {
        salah.push(p.nama + ": jawabanmu " + jawaban[i] + ", kunci " + p.kunci);
    }
});

console.log("benar : " + benar + " dari " + (potongan.length - kosong));
if (kosong) console.log("kosong: " + kosong);
if (salah.length) {
    console.log("");
    salah.forEach((s) => console.log("  " + s));
}
