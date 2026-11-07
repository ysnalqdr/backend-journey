const saldo = 50000;
const hargaTiket = 250000;

if (saldo >= hargaTiket) {
    console.log("Pembayaran berhasil"); 
} else {
    console.log("Saldo tidak cukup"); // hasil outputnya false/saldo tidak cukup karna saldo dari case ini tidak cukup untuk membeli harga dari sebuah tiket
}

const nilai = 85;

if(nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("D");
}
// yang tercetak ialah B
// 2x memeriksa kondisi
// yang tercetak A
//switch branch

// NEXT SESSION - Day 3 continued
// TODO 1  ternary operator  ? :
// TODO 2  switch + break
// TODO 3  logical operators  && || !
// TODO 4  nullish coalescing  ?? vs ||
