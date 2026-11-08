// Soal 1. User punya saldo 150000, harga tiket 250000. Bisa bayar?
// Jawab: tidak, karena 150000 >= 250000 itu false.

const saldo = 150000;
const hargaTiket = 250000;

if (saldo >= hargaTiket) {
  console.log("Pembayaran berhasil");
} else {
  console.log("Saldo tidak cukup");
}

// Soal 2. Nilai 95, tentukan hurufnya.
// Jawab: A, karena 95 >= 90 true dan langsung berhenti di situ.

const nilai = 95;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// Soal 3. Nilai 85, tentukan hurufnya.
// Jawab: B, karena 85 >= 90 false, lalu 85 >= 80 true.

const nilai2 = 85;

if (nilai2 >= 90) {
  console.log("A");
} else if (nilai2 >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Soal 4. Stok 0, tentukan labelnya pakai ternary.
// Jawab: "Habis", karena 0 > 0 itu false.

const stok = 0;
const labelStok = stok > 0 ? "Tersedia" : "Habis";
console.log(labelStok);

// Soal 5. Stok -5, tentukan labelnya pakai ternary.
// Jawab: tetap "Habis", karena -5 > 0 itu false walaupun -5 truthy.

const stokMinus = -5;
const labelStokMinus = stokMinus > 0 ? "Tersedia" : "Habis";
console.log(labelStokMinus);

// Soal 6. Role "user", tentukan aksesnya pakai switch.
// Jawab: "Akses terbatas", karena case "user" cocok.

const role = "user";

switch (role) {
  case "admin":
    console.log("Akses penuh");
    break;
  case "user":
    console.log("Akses terbatas");
    break;
  default:
    console.log("Akses tamu");
}

// Soal 7. Level 2, tentukan aksesnya pakai switch.
// Jawab: "menengah", karena case 2 cocok. case 1 dilewati.

const level = 2;
let akses = "";

switch (level) {
  case 1:
    akses = "pemula";
    break;
  case 2:
    akses = "menengah";
    break;
  case 3:
    akses = "lanjut";
    break;
}

console.log(akses);

// Soal 8. Ada bug di mana, dan untuk input apa bug ini muncul?
// Jawab: case "platinum" tidak punya break, jadi benefit ditimpa jadi
// "fitur premium". Bug ini hanya muncul kalau tier = "platinum", tidak
// muncul kalau tier = "gold".

const tier = "platinum";
let benefit = "";

switch (tier) {
  case "platinum":
    benefit = "semua fitur";
  case "gold":
    benefit = "fitur premium";
    break;
  default:
    benefit = "tidak ada";
}

console.log(benefit);

// versi yang sudah diperbaiki
const tier2 = "platinum";
let benefit2 = "";

switch (tier2) {
  case "platinum":
    benefit2 = "semua fitur";
    break;
  case "gold":
    benefit2 = "fitur premium";
    break;
  default:
    benefit2 = "tidak ada";
}

console.log(benefit2);

// Soal 9. Tulis switch dari nol. Status "member" dapat potongan 10,
// "vip" dapat 25, "guest" dapat 0. Cetak potongannya.
// Jawab:

const status = "member";
let potongan = 0;

switch (status) {
  case "vip":
    potongan = 25;
    break;
  case "member":
    potongan = 10;
    break;
  case "guest":
    potongan = 0;
    break;
}

console.log(potongan);

// Soal 10. Ada bug di mana?
// Jawab: case "admin" tidak punya break, jadi "penuh" dan "terbatas"
// dua-duanya tercetak.

const role2 = "admin";

switch (role2) {
  case "admin":
    console.log("penuh");
  case "user":
    console.log("terbatas");
    break;
}

//operator logika && || !