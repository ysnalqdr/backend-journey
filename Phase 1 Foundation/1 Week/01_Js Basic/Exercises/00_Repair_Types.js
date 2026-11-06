// A Perbandingan angka vs teks
console.log("90" < "100");      // false  ← WRONG PREDICTION: I guessed true
// WHY: both are strings. JS compares the first character only: "9" (57) > "1" (49)
console.log("90" < 100);        // true   ← WRONG PREDICTION: I guessed false
// WHY: one side is a number, so the string is converted to a number first
console.log("9" < "60");        // false  ← WRONG PREDICTION: I guessed true
// WHY: "9" (57) > "6" (54)
console.log("2" > "10");        // true   ← WRONG PREDICTION: I guessed false
// WHY: "2" (50) > "1" (49)


// B Hasil output
console.log(90);
console.log("90");
console.log(typeof 90); //hasilnya interger/number
console.log(typeof "90"); //hasilnya string

// C Konversi teks ke angka
console.log("90" * 1); // 90 dalam bentuk angka di hitung
console.log("90" + 0); // 900 dalam bentuk string yang akhirnya di gabungkan
console.log("90" - 0); // 90 dalam bentuk angka di hitung

//tes lulus lubang 1


//Lubang 2
// A persamaan yang di anggap
console.log(0 == "");
console.log(0 === "");
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);
console.log("5" == 5);
console.log("5" === 5);

// B yang gak pernah sama bahkan dengan ==
console.log(NaN == NaN);
console.log(Number.isNaN(NaN));
