// reading_01.js
// Latihan membaca kode. Level 1.
//
// JANGAN dijalankan sebelum menjawab 5 pertanyaan di
// "01_Total Pembayaran.md".
//
// Kalau dijalankan sebelum menjawab, latihan ini tidak ada gunanya:
// kamu akan melihat output, bukan memprediksinya.

const sudahMenjawab = false;    // ubah jadi true SETELAH menjawab

if (!sudahMenjawab) {
    console.log("STOP.");
    console.log("Jawab dulu 5 pertanyaan di 01_Total Pembayaran.md.");
    console.log("Baru ubah sudahMenjawab jadi true.");
} else {

    // kode yang harus dibaca

    const hargaTiket = "250000";
    const jumlahBeli = "2";
    const kodePromo = "HEMAT";
    const statusMember = false;

    const harga = Number(hargaTiket);
    const jumlah = parseInt(jumlahBeli);

    const valid = !Number.isNaN(harga) && !Number.isNaN(jumlah) && jumlah > 0;

    let diskon = 0;

    if (kodePromo === "HEMAT") {
        diskon = 10;
    } else if (kodePromo === "MEMBER") {
        diskon = 15;
    }

    if (statusMember) {
        diskon = 20;
    }

    const subtotal = harga * jumlah;
    const potongan = subtotal * diskon / 100;
    const total = subtotal - potongan;

    const label = total > 500000 ? "pembelian besar" : "pembelian biasa";

    console.log(`harga    : ${harga}`);
    console.log(`jumlah   : ${jumlah}`);
    console.log(`valid    : ${valid}`);
    console.log(`diskon   : ${diskon}`);
    console.log(`subtotal : ${subtotal}`);
    console.log(`potongan : ${potongan}`);
    console.log(`total    : ${total}`);
    console.log(`label    : ${label}`);
}
