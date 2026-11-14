// reading_02.js
// Latihan membaca kode. Level 2. Memakai loop.
//
// JANGAN dijalankan sebelum menjawab 5 pertanyaan di
// "02_Simulasi Stok.md".
//
// Kalau dijalankan sebelum menjawab, kamu akan melihat output,
// bukan memprediksinya.

const sudahMenjawab = false;   // ubah jadi true SETELAH menjawab

if (!sudahMenjawab) {
    console.log("STOP.");
    console.log("Jawab dulu 5 pertanyaan di 02_Simulasi Stok.md.");
    console.log("Baru ubah sudahMenjawab jadi true.");
} else {

    // kode yang harus dibaca

    const stokAwal = 10;
    const permintaanHarian = [3, 4, 2, 5, 1];
    const batasKritis = 3;

    let stok = stokAwal;
    let hariKehabisan = 0;
    let totalTerlayani = 0;

    for (let i = 0; i < permintaanHarian.length; i++) {
        const minta = permintaanHarian[i];

        if (stok <= 0) {
            break;
        }

        if (minta > stok) {
            totalTerlayani += stok;
            stok = 0;
            hariKehabisan = i + 1;
            continue;
        }

        stok -= minta;
        totalTerlayani += minta;

        if (stok < batasKritis) {
            console.log(`hari ${i + 1}: stok menipis, sisa ${stok}`);
        }
    }

    console.log(`stok akhir    : ${stok}`);
    console.log(`total terlayani: ${totalTerlayani}`);
    console.log(`hari kehabisan : ${hariKehabisan}`);
}
