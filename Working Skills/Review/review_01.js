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

    const pesanan = {
        total: 300000,
        kodePromo: "HEMAT",
        member: false
    };

    let diskonPersen = 0;

    if (pesanan.kodePromo === "HEMAT") {
        diskonPersen = 10;
    }

    if (pesanan.member) {
        diskonPersen = 20;
    }

    const potongan = pesanan.total * diskonPersen / 100;
    const hargaAkhir = pesanan.total - potongan;

    if (hargaAkhir < 0) {
        console.log("gratis");
    } else {
        console.log("bayar", hargaAkhir);
    }
}
