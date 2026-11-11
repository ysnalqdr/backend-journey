// reading_01.js
// Latihan membaca kode. JANGAN dijalankan sebelum menjawab 5 pertanyaan
// di 01_Hitung Total Pesanan.md

const daftarTiket = [
    { harga: 250000, jumlah: 2 },
    { harga: 150000, jumlah: 0 },
    { harga: 500000, jumlah: 1 }
];

let total = 0;
let jumlahTiket = 0;

for (let i = 0; i < 3; i++) {
    const tiket = daftarTiket[i];

    if (!tiket.jumlah) {
        continue;
    }

    total += tiket.harga * tiket.jumlah;
    jumlahTiket += tiket.jumlah;
}

const label = total > 500000 ? "pembelian besar" : "pembelian biasa";

console.log("total:", total);
console.log("jumlah tiket:", jumlahTiket);
console.log("label:", label);
