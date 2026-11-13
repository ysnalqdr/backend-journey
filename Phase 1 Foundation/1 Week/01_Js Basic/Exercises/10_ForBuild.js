// 10_ForBuild.js
// Hari 4 - membangun ulang dasar for loop.
// Isi jawabanmu di baris "const jawab = null", ganti null dengan angkamu.
// Lalu jalankan: node 10_ForBuild.js

console.log("=== Konsep A - bentuk perubahan ===");

{
    let hitung = 0;

    for (let i = 2; i < 20; i *= 2) {
        hitung++;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("A1: belum dijawab");
    } else if (jawab === hitung) {
        console.log("A1: benar, " + hitung + " putaran");
    } else {
        console.log("A1: salah, jawabanmu " + jawab + ", seharusnya " + hitung);
    }
}

{
    let hitung = 0;

    for (let i = 5; i < 100; i *= 2) {
        hitung++;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("A2: belum dijawab");
    } else if (jawab === hitung) {
        console.log("A2: benar, " + hitung + " putaran");
    } else {
        console.log("A2: salah, jawabanmu " + jawab + ", seharusnya " + hitung);
    }
}

{
    let hitung = 0;

    for (let i = 10; i > 0; i -= 3) {
        hitung++;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("A3: belum dijawab");
    } else if (jawab === hitung) {
        console.log("A3: benar, " + hitung + " putaran");
    } else {
        console.log("A3: salah, jawabanmu " + jawab + ", seharusnya " + hitung);
    }
}

console.log("");
console.log("=== Konsep B - batas dan jumlah putaran ===");

{
    let total = 0;

    for (let i = 5; i <= 25; i += 5) {
        total += i;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("B1: belum dijawab");
    } else if (jawab === total) {
        console.log("B1: benar, total " + total);
    } else {
        console.log("B1: salah, jawabanmu " + jawab + ", seharusnya " + total);
    }
}

{
    let hitung = 0;

    for (let i = 1; i <= 10; i += 2) {
        hitung++;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("B2: belum dijawab");
    } else if (jawab === hitung) {
        console.log("B2: benar, " + hitung + " putaran");
    } else {
        console.log("B2: salah, jawabanmu " + jawab + ", seharusnya " + hitung);
    }
}

{
    let total = 0;

    for (let i = 10; i < 5; i++) {
        total += i;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("B3: belum dijawab");
    } else if (jawab === total) {
        console.log("B3: benar, total " + total);
    } else {
        console.log("B3: salah, jawabanmu " + jawab + ", seharusnya " + total);
    }
}

{
    let hitung = 0;

    for (let i = 0; i <= 10; i += 5) {
        hitung++;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("B4: belum dijawab");
    } else if (jawab === hitung) {
        console.log("B4: benar, " + hitung + " putaran");
    } else {
        console.log("B4: salah, jawabanmu " + jawab + ", seharusnya " + hitung);
    }
}

console.log("");
console.log("=== Konsep C - akumulasi nilai ===");

{
    let total = 0;

    for (let i = 3; i >= 1; i--) {
        total += i * i;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("C1: belum dijawab");
    } else if (jawab === total) {
        console.log("C1: benar, total " + total);
    } else {
        console.log("C1: salah, jawabanmu " + jawab + ", seharusnya " + total);
    }
}

{
    let total = 0;

    for (let i = 1; i <= 4; i++) {
        total += i * 100;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("C2: belum dijawab");
    } else if (jawab === total) {
        console.log("C2: benar, total " + total);
    } else {
        console.log("C2: salah, jawabanmu " + jawab + ", seharusnya " + total);
    }
}

{
    let total = 0;

    for (let i = 2; i <= 8; i += 2) {
        total += i * 10;
    }

    const jawab = null;

    if (jawab === null) {
        console.log("C3: belum dijawab");
    } else if (jawab === total) {
        console.log("C3: benar, total " + total);
    } else {
        console.log("C3: salah, jawabanmu " + jawab + ", seharusnya " + total);
    }
}
