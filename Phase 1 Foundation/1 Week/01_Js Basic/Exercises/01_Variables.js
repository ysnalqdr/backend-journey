//Variables
const namaKonser = "Soundwave";
const hargaTiket = 250000;
const tersedia = true;
let sisaTiket = 150;

//Output
console.log(`Konser: ${namaKonser}`);
console.log(`Harga: ${hargaTiket}`);
console.log(`Tersedia: ${tersedia}`);
console.log(`Sisa Tiket: ${sisaTiket}`);

//Type Variables
console.log(typeof namaKonser);
console.log(typeof hargaTiket);
console.log(typeof tersedia);
console.log(typeof sisaTiket);

const jumlahBeli = 3;
const total = hargaTiket * jumlahBeli;
console.log(`Total ${jumlahBeli} tiket: Rp. ${total}`);