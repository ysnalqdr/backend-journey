// ============================================================
// DAY 2.5 - REPAIR: TYPES AND COMPARISON
// File ini log belajar, bukan cuma kode.
// Format tiap soal: GUESS -> REALITY -> ERROR -> FIX
// Aturan: dugaan yang salah TIDAK dihapus (README rule 10)
// ============================================================


// ============================================================
// LUBANG 1 - Tipe data menentukan perilaku, bukan isi yang terlihat
// ============================================================

// --- Bagian A: perbandingan angka vs teks ---

console.log(90 < 100);          // GUESS: true   | REALITY: true   | OK
console.log("90" < "100");      // GUESS: true   | REALITY: false  | WRONG
// ERROR: I read "90" as the number 90.
// FIX:   Both sides are strings, so JS compares character by character.
//        First char: "9" (57) > "1" (49) -> stops there -> false.

console.log("90" < 100);        // GUESS: false  | REALITY: true   | WRONG
// ERROR: I thought the string side still compared as text.
// FIX:   One side is a number, so the string is converted to a number first. 90 < 100 -> true.

console.log("9" < "60");        // GUESS: true   | REALITY: false  | WRONG
// ERROR: I compared 9 and 60 as numbers.
// FIX:   Both strings. First char "9" (57) > "6" (54) -> false.

console.log("2" > "10");        // GUESS: false  | REALITY: true   | WRONG
// ERROR: I thought 2 < 10 so the answer must be false.
// FIX:   Both strings. First char "2" (50) > "1" (49) -> true.

// --- Bagian B: apa yang terlihat saat dicetak ---

console.log(90);                // 90
console.log("90");              // 90   (looks identical, but it is text)
console.log(typeof 90);         // number
console.log(typeof "90");       // string

// --- Bagian C: kapan teks berubah jadi angka ---

console.log("90" * 1);          // 90     -> number (the * operator only does math)
console.log("90" + 0);          // "900"  -> STRING (the + operator joins text)
// ERROR: I wrote "900 in number form". It is text, not a number.
// FIX:   typeof ("90" + 0) is "string". The + operator joins when either side is a string.
console.log("90" - 0);          // 90     -> number

// --- Gate Lubang 1 (passed 2/2) ---
// Q1: Why is "90" < "100" false even though 90 is smaller than 100?
// A1: Both are strings, so JS compares character by character from the left.
//     First character: "9" > "1", so the comparison stops there and returns false.
//     Length and numeric value are never considered.
// Q2: If form data is always text, what must I do before comparing it?
// A2: Convert it to a number first with Number(), then check Number.isNaN()
//     before comparing. Conversion alone is not enough because Number("abc") is NaN,
//     and NaN never matches any comparison.


// ============================================================
// LUBANG 2 - == mengubah tipe, === tidak
// ============================================================

// --- Bagian A: pasangan yang dianggap sama oleh == ---

console.log(0 == "");           // GUESS: true   | REALITY: true   | OK
console.log(0 === "");          // GUESS: false  | REALITY: false  | OK
console.log(false == 0);        // GUESS: true   | REALITY: true   | OK
console.log(false === 0);       // GUESS: false  | REALITY: false  | OK
console.log(null == undefined); // GUESS: true   | REALITY: true   | OK
console.log(null === undefined);// GUESS: false  | REALITY: false  | OK
console.log("5" == 5);          // GUESS: true   | REALITY: true   | OK
console.log("5" === 5);         // GUESS: false  | REALITY: false  | OK

// --- Bagian B: yang tidak pernah sama, bahkan dengan == ---

console.log(NaN == NaN);        // GUESS: false  | REALITY: false  | OK, but wrong reason
// ERROR: I wrote "because string equals string". NaN is a number, not a string.
// FIX:   NaN is never equal to anything, including itself. Both sides are the same type,
//        so == compares them directly, and that comparison is always false.
//        NaN represents a failed numeric operation, so two failures are not "the same".

console.log(Number.isNaN(NaN)); // true
// Use Number.isNaN(x), never x === NaN, because NaN === NaN is always false.

// --- Gate Lubang 2 (passed 2/2) ---
// Q1: Name 2 pairs where == is true but === is false, and explain why == says true.
// A1: Pair 1 - "5" and 5
//       ==  -> true, step 3 of the algorithm: number vs string, the string becomes a number.
//       === -> false, only one step: types differ, so it stops immediately.
//     Pair 2 - 0 and ""
//       ==  -> true, step 3: number vs string, "" becomes Number("") = 0.
//       === -> false, types differ (number vs string).
// Q2: Why is NaN == NaN false, and how do you check for NaN correctly?
// A2: NaN never equals anything, including itself, because NaN means a failed numeric
//     operation. Check with Number.isNaN(value), which inspects the value instead of comparing.


// ============================================================
// LUBANG 3 - Untuk angka, jangan pakai truthy/falsy
// ============================================================

// --- Bagian A: 0 diperlakukan sebagai "tidak ada" ---

const stok = 0;
console.log(Boolean(stok));     // GUESS: ?   | REALITY: ?
if (stok) {
  console.log("Tiket tersedia"); // GUESS: ?   | REALITY: ?
} else {
  console.log("Tiket habis");    // GUESS: ?   | REALITY: ?
}

// --- Bagian B: masalah sebenarnya, 0 dan undefined tidak bisa dibedakan ---

const saldoA = 0;               // saldo nol rupiah (data sah)
const saldoB = undefined;       // saldo belum pernah diisi (data tidak ada)

if (!saldoA) console.log("A dianggap kosong");   // GUESS: ?
if (!saldoB) console.log("B dianggap kosong");   // GUESS: ?
// Dua-duanya masuk ke cabang yang sama, padahal artinya beda

// --- Bagian C: cara yang benar ---

if (stok > 0) console.log("C: tersedia");
if (stok === 0) console.log("C: habis");
if (saldoA !== undefined) console.log("C: saldo diketahui");

// --- Gate Lubang 3: tulis ulang tiga kondisi ini dengan benar, tanpa melihat contoh ---

// 1. kalau stok habis, cetak "Habis"
// YOUR ANSWER:


// 2. kalau saldo nol, cetak "Saldo kosong"
// YOUR ANSWER:


// 3. kalau diskon 0 persen, cetak "Tanpa diskon"
// YOUR ANSWER:
