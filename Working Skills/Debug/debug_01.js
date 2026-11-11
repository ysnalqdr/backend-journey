// debug_01.js
// Latihan debugging. Level 1.
//
// JANGAN dijalankan sebelum menulis bug report di
// "01_Stok Berkurang Dua Kali.md".

const sudahLapor = false;       // ubah jadi true SETELAH menulis bug report

if (!sudahLapor) {
    console.log("STOP.");
    console.log("Tulis bug report dulu di 01_Stok Berkurang Dua Kali.md.");
    console.log("Baru ubah sudahLapor jadi true.");
} else {

    const stokAwal = 10;
    let stok = stokAwal;

    const jumlahBeli = 1;

    if (stok >= jumlahBeli) {
        stok = stok - jumlahBeli;
        console.log("pesanan dibuat, stok sekarang:", stok);

        console.log("notifikasi terkirim");

        stok = stok - jumlahBeli;
    }

    console.log("stok akhir:", stok);
    console.log("stok seharusnya:", stokAwal - jumlahBeli);
}
