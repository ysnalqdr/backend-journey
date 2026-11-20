// review_01.js
// Kode untuk direview. Level 1.
//
// JANGAN dijalankan sebelum menulis komentar review di "01_Kode Review.md".
// Jalankan hanya untuk MEMBUKTIKAN temuan, bukan untuk mencari temuan.

const sudahReview = false;      // ubah jadi true SETELAH menulis komentar

if (!sudahReview) {
    console.log("STOP.");
    console.log("Tulis komentar review dulu di 01_Kode Review.md.");
    console.log("Baru ubah sudahReview jadi true.");
} else {

    const totalPesanan = 300000;
    const kodePromo = "HEMAT";
    const member = false;

    let diskonPersen = 0;

    if (kodePromo === "HEMAT") {
        diskonPersen = 10;
    }

    if (member) {
        diskonPersen = 20;
    }

    const potongan = totalPesanan * diskonPersen / 100;
    const hargaAkhir = totalPesanan - potongan;

    if (hargaAkhir < 0) {
        console.log("gratis");
    } else {
        console.log("bayar", hargaAkhir);
    }
}
