// Re-check 2026-11-17
// Item 1: jumlah baris = jumlah putaran
// Item 2: alasan yang bisa dipertahankan
// Hanya memakai materi yang sudah diajarkan: for, while, if, %, +=

console.log("=== SOAL 1: jumlah baris ===");
console.log("");
console.log("// Kode ini menjumlahkan angka genap 1 sampai 8.");
console.log("let total = 0;");
console.log("for (let i = 1; i <= 8; i++) {");
console.log("    if (i % 2 !== 0) continue;");
console.log("    total += i;");
console.log("}");
console.log("");
console.log("Tulis tabel: i, i % 2, yang terjadi, total.");
console.log("Lalu jawab: total = ?");
console.log("");
console.log("Jumlah baris tabel yang 'jalan' harus sama dengan jumlah penjumlahan.");
console.log("");

console.log("=== SOAL 2: alasan yang bisa dipertahankan ===");
console.log("");
console.log("// Kode ini ditulis untuk menjumlahkan 1 sampai 5.");
console.log("let total = 0;");
console.log("for (let i = 1; i <= 5; i++) {");
console.log("    i++;");
console.log("    total += i;");
console.log("}");
console.log("");
console.log("Tulis komentar review MAKSIMAL 3 KALIMAT. Wajib menyebut:");
console.log("  1. apa yang rusak");
console.log("  2. kapan rusak");
console.log("  3. bagaimana memperbaiki");
console.log("");
console.log("Uji: bisakah orang lain memperbaiki kode ini HANYA dari komentarmu?");
