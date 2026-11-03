// Bagian 1: konversi ke angka
console.log(Number("123"));
console.log(Number("12.5"));
console.log(Number("123abc"));
console.log(parseInt("123abc"));
console.log(parseFloat("12.5kg"));

// Bagian 2: yang menjebak
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");

// Bagian 3: perbandingan
console.log(5 == "5");
console.log(5 === "5");

// Bagian 4: NaN
const gagal = Number("abc");
console.log(gagal);
console.log(Number.isNaN(gagal));
