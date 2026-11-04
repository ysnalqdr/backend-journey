//Konversi Angka
console.log(Number("123"));
console.log(Number("12.5"));
console.log(Number("123abc"));
console.log(parseInt("123abc"));
console.log(parseFloat("12.5kg"));

//Black Hole/Trap
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");

//Perbandingan
console.log(5 == "5");
console.log(5 === "5");

//NaN
const gagal = Number("abc");
console.log(gagal);
console.log(Number.isNaN(gagal));
