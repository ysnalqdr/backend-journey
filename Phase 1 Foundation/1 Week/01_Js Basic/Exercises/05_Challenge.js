// Soal 1: konversi harga
const stokString = "250000";
const stokNumber = Number(stokString);

console.log(typeof stokString);
console.log(typeof stokNumber);

console.log(stokNumber + 150);
console.log(stokString + 150);

// Soal 2: hitung total
const hargaTiket = "250000";
const jumlahBeli = 3;
const hargaNumber = Number(hargaTiket);
const subtotal = hargaNumber * jumlahBeli;
const pajakPersen = 10;
const pajak = subtotal * (pajakPersen / 100);
const total = subtotal + pajak;
console.log(`Total Harga Tiket: Rp. ${total}`);

// Soal 3: beda Number dan parseInt
// NaN: Number is strict, the whole string must be a valid number
console.log(Number("250000abc"));
// 250000: parseInt reads from the left and stops at the first non-digit
console.log(parseInt("250000abc"));

// Soal 4: cek NaN
const gagal = Number("BukanAngka");
console.log(gagal);
console.log(Number.isNaN(gagal));
console.log(typeof gagal);
// typeof is "number" because NaN is a special numeric value meaning "invalid number"

// Soal 5: falsy
console.log("0         :", Boolean(0));
console.log('""        :', Boolean(""));
console.log('" "       :', Boolean(" "));
console.log("[]        :", Boolean([]));
console.log("{}        :", Boolean({}));
console.log('"false"   :', Boolean("false"));
console.log("null      :", Boolean(null));
console.log("undefined :", Boolean(undefined));
// [] and {} are true because objects are always truthy, even when empty

// Soal 6: jebakan +
const a = "5";
const b = 3;
// 53: a is a string, so + chooses string concatenation
console.log(a + b);
// 8: Number(a) converts a to a number, so + chooses arithmetic
console.log(Number(a) + b);
