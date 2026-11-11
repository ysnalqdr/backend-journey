// debug_01.js
// Latihan debugging. Baca laporannya dulu di 01_Stok Berkurang Dua Kali.md

const stokAwal = 10;
let stok = stokAwal;

// simulasi: user memilih 1 tiket
const jumlahBeli = 1;

// validasi: stok cukup?
if (stok >= jumlahBeli) {
    // kurangi stok
    stok = stok - jumlahBeli;

    // simpan pesanan
    console.log("pesanan dibuat, stok sekarang:", stok);

    // kirim notifikasi
    console.log("notifikasi terkirim");

    // kurangi stok (untuk cadangan)
    stok = stok - jumlahBeli;
}

console.log("stok akhir:", stok);
console.log("stok seharusnya:", stokAwal - jumlahBeli);
