// 16_Function.js — gerbang fungsi, enam level
// Dikerjakan 2026-11-25.
//
// Cara pakai: isi `jawab` untuk tiap soal, lalu jalankan.
// Jangan jalankan sebelum menjawab.

let benar = 0;
let salah = 0;
let kosong = 0;

function periksa(label, jawab, kunci, satuan) {
    if (jawab === null || jawab === undefined) {
        console.log(label + ": belum dijawab");
        kosong++;
        return;
    }
    const sama = JSON.stringify(jawab) === JSON.stringify(kunci);
    if (sama) {
        benar++;
        console.log(label + ": benar, " + JSON.stringify(jawab) + " " + (satuan || ""));
    } else {
        salah++;
        console.log(label + ": salah, jawabanmu " + JSON.stringify(jawab) +
            ", seharusnya " + JSON.stringify(kunci));
    }
}

console.log("=== EASY ===");
console.log("Dua argumen masuk, satu nilai keluar.");
console.log("");

// E1. Fungsi paling dasar.
{
    function kali(a, b) {
        return a * b;
    }

    const hasil = kali(6, 7);

    const jawab = 42;

    periksa("E1", jawab, hasil, "hasil");
}

// E2. Modulus di dalam fungsi.
{
    function sisa(bagi, pembagi) {
        return bagi % pembagi;
    }

    const x = sisa(17, 5);

    const jawab = 2;

    periksa("E2", jawab, x, "sisa");
}

// E3. Fungsi memanggil fungsi, dipanggil dua kali.
{
    function dua(x) {
        return x * 2;
    }

    function empat(x) {
        return dua(dua(x));
    }

    const y = empat(3);

    const jawab = 12;

    periksa("E3", jawab, y, "y");
}

console.log("");
console.log("=== MEDIUM ===");
console.log("Apa yang KELUAR dari fungsi, bukan apa yang dihitung.");
console.log("");

// M1. Fungsi tanpa return.
{
    function hitung(x) {
        const hasil = x * 3;
    }

    const a = hitung(4);

    const jawab = undefined;

    periksa("M1", jawab === undefined ? "undefined" : jawab,
        a === undefined ? "undefined" : a, "");
}

// M2. console.log di dalam fungsi.
{
    function tampil(x) {
        console.log(x + 10);
    }

    const b = tampil(5);

    const jawab = undefined;

    periksa("M2", jawab === undefined ? "undefined" : jawab,
        b === undefined ? "undefined" : b, "");
}

// M3. Parameter tidak diisi.
{
    function sapa(nama) {
        return "Halo, " + nama;
    }

    const c = sapa();

    const jawab = "Halo, undefined";

    periksa("M3", jawab, c, "c");
}

console.log("");
console.log("=== HARD ===");
console.log("return menghentikan fungsi, dan parameter itu lokal.");
console.log("");

// H1. return menghentikan fungsi.
{
    function cek(n) {
        if (n > 10) {
            return "besar";
        }
        return "kecil";
        console.log("selesai");
    }

    const a = cek(15);
    const b = cek(5);

    const jawabA = "besar";
    const jawabB = "kecil";

    periksa("H1a", jawabA, a, "");
    periksa("H1b", jawabB, b, "");
    console.log("H1c: 'selesai' tidak pernah tercetak, karena ada setelah return");
}

// H2. Parameter dikira variabel global.
{
    function tambahLima(x) {
        return x + 5;
    }

    const hasil = tambahLima(10);

    const jawab = 15;

    periksa("H2a", jawab, hasil, "hasil");
    console.log("H2b: console.log(x) di luar fungsi -> ReferenceError: x is not defined");
    console.log("     x hanya ada di dalam fungsi, bukan undefined");
}

console.log("");
console.log("=== WRITE ===");
console.log("Ditulis learner 2026-11-25, 3 dari 3 kasus lulus.");
console.log("");

{
    function hitungDiskon(harga, persen) {
        const potongan = harga * persen / 100;
        return harga - potongan;
    }

    const kasus = [
        [100000, 10, 90000],
        [50000, 20, 40000],
        [75000, 0, 75000],
    ];

    let lulus = 0;
    kasus.forEach(([h, p, harusnya]) => {
        const hasil = hitungDiskon(h, p);
        const ok = hasil === harusnya;
        if (ok) lulus++;
        console.log("W1 hitungDiskon(" + h + ", " + p + ") = " + hasil +
            (ok ? " benar" : " SALAH, harusnya " + harusnya));
    });
    console.log("W1: " + lulus + " dari " + kasus.length + " kasus lulus");
}

console.log("");
console.log("=== VERIFY ===");
console.log("Kode dari AI. Output benar, tapi kodenya salah.");
console.log("");

{
    function hitungDiskonSalah(harga, persen) {
        const potongan = harga * 20 / 100;
        return harga - potongan;
    }

    const hasil10 = hitungDiskonSalah(50000, 10);
    const hasil50 = hitungDiskonSalah(50000, 50);
    const hasil0 = hitungDiskonSalah(50000, 0);

    const jawab = 40000;

    periksa("V1", jawab, hasil10, "hasil");

    console.log("V1 hitungDiskonSalah(50000, 10) =", hasil10);
    console.log("V1 hitungDiskonSalah(50000, 50) =", hasil50);
    console.log("V1 hitungDiskonSalah(50000, 0)  =", hasil0);
    console.log("");
    console.log("Hasil sebenarnya: 40000 (AI benar soal output)");
    console.log("Tapi kodenya salah: 20 ditulis mati, parameter persen diabaikan.");
    console.log("Tiga pemanggilan berbeda menghasilkan angka yang sama.");
}

console.log("");
console.log("=== EXPLAIN ===");
console.log("Kode ini BENAR, tapi tetap harus dikomentari.");
console.log("");

// E1. Tulis komentar review untuk kode ini.
// Komentar learner 2026-11-25, disimpan di
// "Working Skills/Review/05_Komentar Fungsi.md"
//
//   function hitungRata(nilai1, nilai2, nilai3) {
//       const jumlah = nilai1 + nilai2 + nilai3;
//       const rata = jumlah / 3;
//       return rata;
//   }
//
// Yang ditanyakan:
//   1. Apa yang dilakukan fungsi ini
//   2. Berapa hasilnya untuk hitungRata(10, 20, 30)
//   3. Satu hal yang membuat fungsi ini rapuh kalau datanya berubah

{
    function hitungRata(nilai1, nilai2, nilai3) {
        const jumlah = nilai1 + nilai2 + nilai3;
        const rata = jumlah / 3;
        return rata;
    }

    console.log("E1 hitungRata(10, 20, 30) =", hitungRata(10, 20, 30));
    console.log("E1 rapuh di: const rata = jumlah / 3;");
    console.log("   angka 3 ditulis mati. Kalau nilai jadi 4, baris ini tetap membagi 3.");
}

console.log("");
console.log("=== RINGKASAN ===");
console.log("benar : " + benar);
console.log("salah : " + salah);
console.log("kosong: " + kosong);
