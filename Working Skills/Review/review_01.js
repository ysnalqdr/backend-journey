// review_01.js
// Kode untuk direview. Baca dulu, jangan langsung jalankan.

const pesanan = {
    total: 300000,
    kodePromo: "HEMAT",
    member: false
};

let d = 0;
let x = pesanan.total;

if (pesanan.kodePromo === "HEMAT") {
    d = 10;
}

if (pesanan.member) {
    d = 20;
}

let akhir = x - (x * d / 100);

if (akhir < 0) {
    akhir = 0;
}

if (akhir == 0) {
    console.log("gratis");
} else {
    console.log("bayar", akhir);
}

let diskonRupiah = x * d / 100;
let totalAkhir = x - diskonRupiah;
