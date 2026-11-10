// Soal 1. User punya saldo 150000, harga tiket 250000. Bisa bayar?
// Jawab: tidak, karena 150000 >= 250000 itu false.

const saldo = 150000;
const hargaTiket = 250000;

if (saldo >= hargaTiket) {
  console.log("Pembayaran berhasil");
} else {
  console.log("Saldo tidak cukup");
}

// Soal 2. Nilai 95, tentukan hurufnya.
// Jawab: A, karena 95 >= 90 true dan langsung berhenti di situ.

const nilai = 95;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// Soal 3. Nilai 85, tentukan hurufnya.
// Jawab: B, karena 85 >= 90 false, lalu 85 >= 80 true.

const nilai2 = 85;

if (nilai2 >= 90) {
  console.log("A");
} else if (nilai2 >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Soal 4. Stok 0, tentukan labelnya pakai ternary.
// Jawab: "Habis", karena 0 > 0 itu false.

const stok = 0;
const labelStok = stok > 0 ? "Tersedia" : "Habis";
console.log(labelStok);

// Soal 5. Stok -5, tentukan labelnya pakai ternary.
// Jawab: tetap "Habis", karena -5 > 0 itu false walaupun -5 truthy.

const stokMinus = -5;
const labelStokMinus = stokMinus > 0 ? "Tersedia" : "Habis";
console.log(labelStokMinus);

// Soal 6. Role "user", tentukan aksesnya pakai switch.
// Jawab: "Akses terbatas", karena case "user" cocok.

const role = "user";

switch (role) {
  case "admin":
    console.log("Akses penuh");
    break;
  case "user":
    console.log("Akses terbatas");
    break;
  default:
    console.log("Akses tamu");
}

// Soal 7. Level 2, tentukan aksesnya pakai switch.
// Jawab: "menengah", karena case 2 cocok. case 1 dilewati.

const level = 2;
let akses = "";

switch (level) {
  case 1:
    akses = "pemula";
    break;
  case 2:
    akses = "menengah";
    break;
  case 3:
    akses = "lanjut";
    break;
}

console.log(akses);

// Soal 8. Ada bug di mana, dan untuk input apa bug ini muncul?
// Jawab: case "platinum" tidak punya break, jadi benefit ditimpa jadi
// "fitur premium". Bug ini hanya muncul kalau tier = "platinum", tidak
// muncul kalau tier = "gold".

const tier = "platinum";
let benefit = "";

switch (tier) {
  case "platinum":
    benefit = "semua fitur";
  case "gold":
    benefit = "fitur premium";
    break;
  default:
    benefit = "tidak ada";
}

console.log(benefit);

// versi yang sudah diperbaiki
const tier2 = "platinum";
let benefit2 = "";

switch (tier2) {
  case "platinum":
    benefit2 = "semua fitur";
    break;
  case "gold":
    benefit2 = "fitur premium";
    break;
  default:
    benefit2 = "tidak ada";
}

console.log(benefit2);

// Soal 9. Tulis switch dari nol. Status "member" dapat potongan 10,
// "vip" dapat 25, "guest" dapat 0. Cetak potongannya.
// Jawab:

const status = "member";
let potongan = 0;

switch (status) {
  case "vip":
    potongan = 25;
    break;
  case "member":
    potongan = 10;
    break;
  case "guest":
    potongan = 0;
    break;
}

console.log(potongan);

// Soal 10. Ada bug di mana?
// Jawab: case "admin" tidak punya break, jadi "penuh" dan "terbatas"
// dua-duanya tercetak.

const role2 = "admin";

switch (role2) {
  case "admin":
    console.log("penuh");
  case "user":
    console.log("terbatas");
    break;
}

// Soal 11. Halaman login. email berisi teks, password berisi "".
// Apa yang tercetak?
// Jawab: lengkapi dulu. Karena password itu falsy, jadi && gagal.
// Benar.

const email = "yasin@mail.com";
const password = "";

if (email && password) {
  console.log("Masuk");
} else {
  console.log("Lengkapi dulu");
}

// Soal 12. Dari kode di atas, sisi mana yang menentukan hasilnya, dan kenapa?
// Jawab: sisi kanan, yaitu password.
// Koreksi: bagian "sisi kanan" benar, tapi mekanismenya masih keliru.
// Aku bilang && mengembalikan sisi kiri sebagai false. Itu salah.
// && mengembalikan nilai aslinya, bukan diubah jadi false.
// Di sini hasilnya "" (teks kosong), bukan false.
// Yang penting: hasil "" itu falsy, jadi if menganggapnya gagal.

// Soal 13. Kalau password diisi "123", apa yang berubah?
// Jawab: hasilnya 3 === 3 true, jadi mencetak Masuk.
// Koreksi: kesimpulannya benar, alasannya salah.
// Tidak ada 3 === 3 di kode ini. Yang terjadi: "123" itu truthy,
// jadi email && password menghasilkan "123", dan "123" truthy,
// jadi if jalan dan mencetak Masuk.

const email2 = "yasin@mail.com";
const password2 = "123";

if (email2 && password2) {
  console.log("Masuk");
} else {
  console.log("Lengkapi dulu");
}

// Soal 14. kupon berisi "". Baris pertama mencetak apa?
// Jawab: teks kosong "".
// Benar. Hasilnya memang "" bukan false, karena && mengembalikan nilai asli.

const kupon = "";

console.log(kupon && "kupon dipakai");

// Soal 15. Baris kedua mencetak apa?
// Jawab: tanpa kupon.
// Benar. Kiri falsy, jadi || ambil kanan.

console.log(kupon || "tanpa kupon");

// Soal 16. Kalau kupon diisi "HEMAT50", apa yang berubah di kedua baris?
// Jawab: baris pertama HEMAT50, baris kedua HEMAT50.
// Setengah benar. Baris kedua benar, baris pertama salah.
// kupon && "kupon dipakai" dengan kiri truthy menghasilkan sisi KANAN,
// jadi hasilnya "kupon dipakai", bukan "HEMAT50".
// Aturannya: && ambil kanan kalau kiri truthy. || ambil kiri kalau kiri truthy.

const kupon2 = "HEMAT50";

console.log(kupon2 && "kupon dipakai");
console.log(kupon2 || "tanpa kupon");

// Soal 17. stok berisi 0. Baris pertama mencetak apa?
// Jawab: 0 / false.
// Benar. 0 itu falsy, jadi && mengambil sisi kiri apa adanya: 0.

const stokToko = 0;

console.log(stokToko && "stok ada");

// Soal 18. Baris kedua mencetak apa?
// Jawab: stok habis.
// Benar. Kiri falsy, jadi || mengambil kanan.

console.log(stokToko || "stok habis");

// Soal 19. Mana yang benar dan mana yang menyesatkan?
// Jawab: baris kedua benar, baris pertama menyesatkan.
// Benar. Baris pertama mencetak 0, yang terlihat seperti "tidak ada nilai".
// Padahal 0 adalah informasi yang sah: stoknya nol, bukan stoknya tidak diketahui.
// Ini alasan || tidak boleh dipakai untuk angka. Pakai ?? yang hanya
// mengganti null atau undefined.

const stokGudang = 0;

console.log(stokGudang || 100);
console.log(stokGudang ?? 100);

// Soal 20. user bernilai null. Berapa baris tercetak, isinya apa?
// Jawab: mulai, belum login, selesai.
// Benar. user falsy, jadi && berhenti di kiri, if gagal, masuk else.

const userA = null;

console.log("mulai");

if (userA && userA.nama === "Yasin") {
  console.log("selamat datang");
} else {
  console.log("belum login");
}

console.log("selesai");

// Soal 21. Apakah user.nama === "Yasin" pernah dieksekusi?
// Jawab: tidak, karena user.nama tidak ada dan itu membuat JS error.
// Setengah benar. Bagian "tidak pernah dieksekusi" benar.
// Tapi alasannya bukan error. Justru && yang MENCEGAH error.
// Alurnya: user itu null, null falsy, jadi && berhenti di sisi kiri
// dan mengembalikan null. Sisi kanan tidak pernah disentuh.
// Kalau sisi kanan disentuh, baru error.

// Soal 22. Kalau user && dihapus, apa yang terjadi?
// Jawab: hasilnya mencetak belum login.
// Salah. Yang terjadi adalah program berhenti karena error.
// user.nama pada null melempar TypeError, dan error menghentikan
// seluruh sisa file. Jadi "belum login" tidak tercetak,
// dan "selesai" juga tidak tercetak.

const userB = null;

console.log("mulai");

try {
  if (userB.nama === "Yasin") {
    console.log("selamat datang");
  } else {
    console.log("belum login");
  }
  console.log("selesai");
} catch (e) {
  console.log("ERROR:", e.message);
}

// Dibungkus try/catch supaya sisa file tetap jalan.
// Tanpa try/catch, satu error menghentikan seluruh file dari baris itu ke bawah.

// Soal 23. user berisi { nama: "" }. Berapa baris tercetak?
// Jawab: mulai, nama belum diisi, selesai.
// Benar.

const userC = { nama: "" };

console.log("mulai");

if (userC && userC.nama) {
  console.log("selamat datang");
} else {
  console.log("nama belum diisi");
}

console.log("selesai");

// Soal 24. user truthy, tapi kenapa masuk else? Bagian mana yang menentukan?
// Jawab: user truthy karena object terisi walaupun isinya teks kosong.
// Setengah benar. Bagian "user truthy" benar.
// Yang belum disebut: yang menentukan hasil akhir adalah SISI KANAN,
// yaitu user.nama yang berisi "". && baru selesai setelah memeriksa kanan,
// dan hasil akhirnya "" yang falsy. Jadi yang menggagalkan if bukan user,
// tapi user.nama.

// Soal 25. Kalau user.nama diisi "Yasin", apa yang berubah?
// Jawab: user truthy, jadi && menghasilkan true, lalu mencetak
// mulai, selamat datang, selesai.
// Outputnya benar, tapi "menghasilkan true" masih keliru.
// && tidak menghasilkan true. Hasilnya "Yasin", teks aslinya.
// Terbukti: console.log(user && user.nama) mencetak "Yasin", bukan true.

const userD = { nama: "Yasin" };

console.log("mulai");

if (userD && userD.nama) {
  console.log("selamat datang");
} else {
  console.log("nama belum diisi");
}

console.log("selesai");

// nilai asli yang dikembalikan &&, bukan boolean
console.log(userD && userD.nama);
console.log(typeof (userD && userD.nama));

// Soal 26. user truthy, nama "Yasin". tampilan = user && user.nama.
// console.log(tampilan) mencetak apa?
// Jawab: user.
// Salah. && mengambil sisi KANAN kalau kiri truthy, bukan kiri.
// user truthy, jadi && lanjut ke kanan dan mengembalikan user.nama.
// Hasilnya "Yasin", bukan objek user.

const userE = { nama: "Yasin" };

const tampilanE = userE && userE.nama;
console.log(tampilanE);

// Soal 27. typeof tampilan menghasilkan apa?
// Jawab: string.
// Benar. Isinya "Yasin", jadi tipenya string.

console.log(typeof tampilanE);

// Soal 28. Kalau ditambah || "Tamu", apa yang berubah?
// Jawab: akan error setelah membaca || "Tamu" dan mencetak user.
// Salah dua-duanya. Tidak ada error, dan hasilnya bukan user.
// user && user.nama menghasilkan "Yasin". Karena "Yasin" truthy,
// || langsung mengambil kiri dan "Tamu" tidak dipakai.
// Hasil akhirnya tetap "Yasin".
// Aturan && dibaca dulu sebelum ||.

const tampilanF = userE && userE.nama || "Tamu";
console.log(tampilanF);

// bukti sisi mana yang diambil && dan ||
console.log(userE && "KANAN");
console.log("KIRI" && userE.nama);
console.log(0 && "KANAN");

// Drill 4 soal. a = "apel", b = "", c = 0.
// 1. a && "jeruk"  -> jawab: jeruk. Benar.
// 2. b && "jeruk"  -> jawab: "". Benar.
// 3. a || "jeruk"  -> jawab: apel. Benar.
// 4. c || "jeruk"  -> jawab: jeruk. Benar.
// Empat dari empat. Aturan && dan || sudah masuk.

const a = "apel";
const b = "";
const c = 0;

console.log(a && "jeruk");
console.log(b && "jeruk");
console.log(a || "jeruk");
console.log(c || "jeruk");

// Soal 29. nama berisi "". tampil1 = nama || "Tamu". Isinya apa?
// Jawab: Tamu.
// Benar. "" falsy, jadi || ambil kanan.

const namaKosong = "";

const tampil1 = namaKosong || "Tamu";
console.log(tampil1);

// Soal 30. tampil2 = nama ?? "Tamu". Isinya apa?
// Jawab: "".
// Benar. ?? hanya mengganti null atau undefined. "" bukan keduanya,
// jadi nilainya dibiarkan apa adanya.

const tampil2 = namaKosong ?? "Tamu";
console.log(tampil2);

// Soal 31. Mana yang lebih tepat untuk kasus ini?
// Jawab: nama kosong dianggap sah, karena di auth biasanya ada role guest
// tanpa mengisi informasi user.
// Ini pilihan desain, bukan benar atau salah mutlak.
// Yang perlu diingat: || mengubah "" jadi "Tamu", ?? membiarkannya "".
// Kalau tampilan harus selalu ada teks, pakai ||. Kalau "" itu data yang
// sah dan tidak boleh ditimpa, pakai ??.
// Untuk nama tampilan, || biasanya lebih tepat karena "" bukan nama.

const namaNull = null;
console.log(namaNull || "Tamu");
console.log(namaNull ?? "Tamu");

// kasus angka: di sini ?? wajib
const umur = 0;
console.log(umur || 18);
console.log(umur ?? 18);

// Soal 32. Tulis dari nol. Guard 3 tingkat: pesanan bisa null,
// pesanan.user bisa null, pesanan.user.nama bisa "". Aman -> diproses.
// Jawab: pesanan && pesanan.user && pesanan.user.nama

const pesanan = { user: { nama: "Yasin" } };

if (pesanan && pesanan.user && pesanan.user.nama) {
  console.log("diproses");
} else {
  console.log("ditolak");
}

// diuji dengan 5 isi berbeda, semua aman
const kasus = [
  { user: { nama: "Yasin" } },
  null,
  { user: null },
  { user: { nama: "" } },
  {}
];

for (const p of kasus) {
  const hasil = p && p.user && p.user.nama ? "diproses" : "ditolak";
  console.log(hasil);
}

//nullish coalescing ?? vs ||