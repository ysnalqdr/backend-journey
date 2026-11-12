// 2026-11-12_recheck.js
// Spaced re-check, 5 konsep Day 3.
// Dijalankan 2026-11-12, jatuh tempo 2026-11-10 (terlambat 2 hari).
//
// Tiap soal: Soal, Jawabanku, Koreksi kalau salah.
// Jawaban salah tidak dihapus.

const sudahMenjawab = false;    // ubah jadi true setelah membaca semua jawaban

if (!sudahMenjawab) {
    console.log("Baca dulu semua soal dan jawaban di file ini.");
    console.log("Baru ubah sudahMenjawab jadi true untuk menjalankan verifikasi.");
} else {

    // 1. Ternary
    //
    // Soal: stok = 0, stok >= 0 ? "Tersedia" : "Habis".
    // Apa yang tercetak, bagian mana yang menentukan, dan kalau stok = -5?
    //
    // Jawabanku:
    //   1. "Tersedia"
    //   2. Pembanding >= yang menentukan. 0 >= 0 true, ternary ambil kiri.
    //   3. stok = -5 -> -5 >= 0 false -> "Habis"
    //
    // Hasil: benar 3/3.

    const stok = 0;
    console.log("1a:", stok >= 0 ? "Tersedia" : "Habis");

    const stokMinus = -5;
    console.log("1b:", stokMinus >= 0 ? "Tersedia" : "Habis");

    // 2. switch dan break
    //
    // Soal: role = "admin", case "admin" tanpa break, lalu case "user" + break.
    // Berapa baris tercetak? Kenapa? Kalau role = "guest"?
    //
    // Jawabanku:
    //   1. 2 baris: "tercatat: admin" dan "tercatat: user"
    //   2. Karena tidak ada break -> fallthrough
    //   3. guest -> 1 baris: "tercatat: guest"
    //
    // Hasil: benar 3/3.

    const role = "admin";

    switch (role) {
        case "admin":
            console.log("2a: tercatat: admin");
        case "user":
            console.log("2b: tercatat: user");
            break;
        case "guest":
            console.log("2c: tercatat: guest");
            break;
    }

    const roleGuest = "guest";

    switch (roleGuest) {
        case "admin":
            console.log("2d: tercatat: admin");
        case "user":
            console.log("2e: tercatat: user");
            break;
        case "guest":
            console.log("2f: tercatat: guest");
            break;
    }

    // 3. short-circuit &&
    //
    // Soal: user = { alamat: null }, if (user && user.alamat && user.alamat.kota)
    // Apa yang tercetak? Ada error? Di mata rantai mana berhenti?
    //
    // Jawabanku:
    //   1. "alamat tidak lengkap", tapi aku bilang ada error. Salah.
    //   2. Berhenti di user.alamat, karena null falsy. Benar.
    //   3. Kalau alamat diisi kota Bandung, tercetak "kirim ke Bandung". Benar.
    //
    // Koreksi: tidak ada error. Kondisi false bukan error.
    // && berhenti sebelum menyentuh user.alamat.kota, jadi tidak ada
    // properti yang dibaca dari null. Justru && yang mencegah error.
    //
    // 2/3, pulih di cek kecil.

    const user = { alamat: null };

    if (user && user.alamat && user.alamat.kota) {
        console.log("3a: kirim ke " + user.alamat.kota);
    } else {
        console.log("3b: alamat tidak lengkap");
    }

    const userLengkap = { alamat: { kota: "Bandung" } };

    if (userLengkap && userLengkap.alamat && userLengkap.alamat.kota) {
        console.log("3c: kirim ke " + userLengkap.alamat.kota);
    } else {
        console.log("3d: alamat tidak lengkap");
    }

    // Cek kecil setelah koreksi: data = null, apakah error?
    // Jawabanku: tidak ada error, tercetak "tidak ada". Benar.

    const data = null;

    if (data && data.nama) {
        console.log("3e: ada");
    } else {
        console.log("3f: tidak ada");
    }

    // 4. logical not
    //
    // Soal: punyaTiket = false, punyaUndangan = false.
    // bolehMasuk = a || b, ditolak = !bolehMasuk. Apa isi dan tipenya?
    //
    // Jawabanku:
    //   1. bolehMasuk isinya string. Salah, isinya false, tipenya boolean.
    //   2. ditolak boolean. Benar tipenya, belum sebut nilainya true.
    //   3. punyaTiket = true jadi bolehMasuk true, ditolak false. Benar.
    //
    // Koreksi: || mengembalikan sisi yang dipilih apa adanya.
    // Dua sisinya boolean, jadi hasilnya boolean. Tidak mungkin string
    // kalau tidak ada string di kedua sisinya.
    //
    // 2/3, pulih di cek kecil.

    const punyaTiket = false;
    const punyaUndangan = false;

    const bolehMasuk = punyaTiket || punyaUndangan;
    const ditolak = !bolehMasuk;

    console.log("4a:", bolehMasuk, "| tipe:", typeof bolehMasuk);
    console.log("4b:", ditolak, "| tipe:", typeof ditolak);

    // Cek kecil: a = "halo", b = 0. Apa hasil a || b?
    // Jawabanku: "halo", string. Benar.

    const a = "halo";
    const b = 0;

    console.log("4c:", a || b, "| tipe:", typeof (a || b));

    // 5. nullish coalescing vs or
    //
    // Soal: konfig = { batas: 0, nama: null }.
    // a = batas ?? 100, b = nama ?? "tanpa nama", c = batas || 100.
    //
    // Jawabanku:
    //   1. a = 0, karena ?? hanya mencadangkan null atau undefined. Benar.
    //   2. b = "tanpa nama", karena null. Benar.
    //   3. c = 100, karena || mengganti semua falsy. Benar.
    //
    // Benar 3/3.

    const konfig = { batas: 0, nama: null };

    const nilaiA = konfig.batas ?? 100;
    const nilaiB = konfig.nama ?? "tanpa nama";
    const nilaiC = konfig.batas || 100;

    console.log("5a:", nilaiA, "| tipe:", typeof nilaiA);
    console.log("5b:", nilaiB);
    console.log("5c:", nilaiC);
}
