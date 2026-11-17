// SENGAJA-ERROR
// File ini memang error saat dijalankan. Itu tujuannya: menunjukkan
// TypeError: Assignment to constant variable.
// Jangan diperbaiki. Dikecualikan dari pemeriksaan "semua file jalan".

const PI = 3.14;
console.log(`Sebelum error: ${PI}`);
PI = 3.15;
console.log(typeof PI);
console.log("Baris ini tidak akan dijalankan");