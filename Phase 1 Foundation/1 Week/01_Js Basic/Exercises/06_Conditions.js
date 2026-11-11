// if / else

const saldo = 50000;
const hargaTiket = 250000;

if (saldo >= hargaTiket) {
    console.log("Pembayaran berhasil");
} else {
    console.log("Saldo tidak cukup");
}

// variasi saldo cukup
const saldoCukup = 300000;

if (saldoCukup >= hargaTiket) {
    console.log("Pembayaran berhasil");
} else {
    console.log("Saldo tidak cukup");
}

// else if - urutan dari ketat ke longgar

const nilai = 85;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("D");
}

// variasi nilai tepat di batas
const nilaiBatas = 90;

if (nilaiBatas >= 90) {
    console.log("A");
} else if (nilaiBatas >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// ternary

const stok = 0;
const labelStok = stok > 0 ? "Tersedia" : "Habis";
console.log(labelStok);

// variasi stok negatif, hasilnya tetap Habis karena -5 > 0 itu false
const stokMinus = -5;
const labelStokMinus = stokMinus > 0 ? "Tersedia" : "Habis";
console.log(labelStokMinus);

// ternary bisa mengembalikan angka
const saldoKecil = 50000;
const bonus = saldoKecil >= 100000 ? 1 : 0;
console.log(bonus, typeof bonus);

// switch

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

// variasi case pakai angka
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

// variasi tanpa break, hasilnya dua baris karena jatuh ke case bawah
const role = "admin";

switch (role) {
    case "admin":
        console.log("penuh");
    case "user":
        console.log("terbatas");
        break;
}

// && dan ||

const jumlah = 2;
const nama = "";

console.log(jumlah && "lanjut");
console.log(nama && "lanjut");

// variasi: kiri truthy, kanan diambil apa adanya
const stokAda = 5;
const stokKosong = 0;

console.log(stokAda && "tersedia");
console.log(stokKosong && "tersedia");

// variasi: || mengambil kiri kalau kiri truthy
console.log(stokAda || "habis");
console.log(stokKosong || "habis");

// ! dan !!

const belumDibaca = 3;

console.log(!belumDibaca);
console.log(!!belumDibaca);

// variasi: ! pada nilai falsy
console.log(!0);
console.log(!"");
console.log(!null);

// variasi: ! mengikat lebih kuat dari &&
const a = true;
const b = false;

console.log(!a && b);
console.log(!(a && b));

// ?? vs ||

const diskonA = 0;
const diskonB = null;

console.log(diskonA || 10);
console.log(diskonA ?? 10);
console.log(diskonB || 10);
console.log(diskonB ?? 10);

// variasi: "" dan false, dua-duanya falsy tapi bukan nullish
const teksKosong = "";
const nilaiFalse = false;

console.log(teksKosong || "cadangan");
console.log(teksKosong ?? "cadangan");
console.log(nilaiFalse || "cadangan");
console.log(nilaiFalse ?? "cadangan");

// variasi: NaN itu number, jadi ?? mempertahankannya
console.log(NaN || "cadangan");
console.log(NaN ?? "cadangan");

// variasi: gabung ?? dengan ternary
const limitDariClient = 0;
const limit = limitDariClient ?? 10;
const pesan = limit > 0 ? "pakai limit " + limit : "limit tidak valid";

console.log(limit);
console.log(pesan);
