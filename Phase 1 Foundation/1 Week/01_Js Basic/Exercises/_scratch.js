// _scratch.js
// Semua simbol JavaScript: nama, cara pakai, dan fungsinya
// Jalankan dengan: node _scratch.js
// File ini untuk latihan, bukan latihan Day 3


// 1. ARITMATIKA

const a = 10;
const b = 3;

console.log(a + b);                         // +    plus          tambah
console.log(a - b);                         // -    minus         kurang
console.log(a * b);                         // *    times         kali
console.log(a / b);                         // /    divided by    bagi
console.log(a % b);                         // %    modulo        sisa bagi
console.log(a ** b);                        // **   exponent      pangkat

// jebakan: + punya dua tugas
console.log("5" + 3);                       // +    gabung teks   hasil 53, bukan 8
console.log("5" - 3);                       // -    hitung        hasil 2, karena - cuma satu tugas

// 2. ASSIGNMENT (penugasan)

let x = 10;

console.log(x);                             // =    equals        isi nilai, BUKAN sama dengan
x += 5;
console.log(x);                             // +=   plus equals   sama dengan x = x + 5
x -= 3;
console.log(x);                             // -=   minus equals  sama dengan x = x - 3
x *= 2;
console.log(x);                             // *=   times equals  sama dengan x = x * 2
x /= 4;
console.log(x);                             // /=   divide equals sama dengan x = x / 4
x %= 4;
console.log(x);                             // %=   modulo equals sama dengan x = x % 4
x++;
console.log(x);                             // ++   increment     tambah satu
x--;
console.log(x);                             // --   decrement     kurang satu


// 3. PERBANDINGAN

console.log(5 === 5);                       // ===  triple equals      sama nilai DAN tipe
console.log(5 !== 5);                       // !==  strictly not equal beda nilai atau tipe
console.log(5 == "5");                      // ==   double equals      sama setelah konversi tipe
console.log(5 != "5");                      // !=   not equal          beda setelah konversi tipe
console.log(10 > 5);                        // >    greater than       lebih besar
console.log(5 < 10);                        // <    less than          lebih kecil
console.log(5 >= 5);                        // >=   greater or equal   lebih besar atau sama
console.log(5 <= 5);                        // <=   less or equal      lebih kecil atau sama

// aturan: pakai === dan !==. jangan == dan !=


// 4. LOGIKA

console.log(true && true);                  // &&   AND / dan    benar kalau dua-duanya benar
console.log(true && false);                 // &&   AND          salah kalau salah satu salah
console.log(true || false);                 // ||   OR / atau    benar kalau salah satu benar
console.log(false || false);                // ||   OR           salah kalau dua-duanya salah
console.log(!true);                         // !    NOT / bukan  membalik nilai
console.log(!false);                        // !    NOT          false jadi true
console.log(!0);                            // !    NOT          true, karena 0 itu falsy
console.log(!"halo");                       // !    NOT          false, karena teks berisi itu truthy

// short circuit: kalau sudah tahu jawabannya, sisi kanan tidak diperiksa
const user = null;
console.log(user && user.nama);             // &&  aman, tidak error walau user null

// 5. NULLISH COALESCING

const stok = 0;
console.log(stok ?? 100);                   // ??   nullish   pakai kanan HANYA kalau kiri null/undefined
console.log(stok || 100);                   // ||   OR        beda! 0 itu falsy jadi diganti 100
const kosong = null;
console.log(kosong ?? 100);                 // ??   nullish   null diganti 100

// aturan: untuk angka pakai ??, jangan ||


// 6. TERNARY

const umur = 20;
console.log(umur >= 17 ? "dewasa" : "anak");// ? :  ternary  kalau true kiri, kalau false kanan

// dibaca: kalau umur >= 17 maka dewasa, kalau tidak maka anak


// 7. STRUKTUR

const hasil = (2 + 3) * 4;                  // ()  parentheses   kurung biasa, untuk prioritas
console.log(hasil);                         //                  tanpa kurung hasilnya 14, bukan 20

const user2 = { nama: "Yasin", umur: 21 };
console.log(user2.nama);                    // {}  braces        kurung kurawal, untuk object
console.log(user2.umur);                    // .   dot           titik, akses properti

const daftar = [10, 20, 30];
console.log(daftar[1]);                     // []  brackets      kurung siku, untuk array
console.log(daftar[0]);                     // []  index         ambil elemen, mulai dari 0


// 8. TANDA KUTIP

const nama = "Yasin";
console.log('halo');                        // ''  single quotes  teks, ${} TIDAK bekerja
console.log("halo");                        // ""  double quotes  teks, ${} TIDAK bekerja
console.log(`halo ${nama}`);                // ``  backticks      template literal, ${} BEKERJA

// jebakan: kutip biasa tidak error, cuma mencetak teks apa adanya
console.log('halo ${nama}');                // SALAH  mencetak halo ${nama} apa adanya


// 9. KOMENTAR

// ini komentar satu baris, tidak dijalankan
/*
   ini komentar
   beberapa baris
*/


// 10. OPERATOR LAIN YANG AKAN DATANG

// =>   arrow function       minggu 2
// ...  spread / rest        minggu 4
// ?.   optional chaining    minggu 4
// ??=  nullish assignment   minggu 4
