// 08_Loops.js
// Hari 4 - loop

// for

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// variasi: <= menambah satu putaran
for (let i = 0; i < 3; i++) {
    console.log("kurang dari:", i);
}

for (let i = 0; i <= 3; i++) {
    console.log("kurang atau sama:", i);
}

// variasi: mundur
for (let i = 3; i > 0; i--) {
    console.log("mundur:", i);
}

// variasi: langkah 2
for (let i = 0; i < 6; i += 2) {
    console.log("langkah 2:", i);
}

// while

let a = 0;

while (a < 3) {
    console.log("while:", a);
    a++;
}

// variasi: kondisi tidak pernah true, loop 0 putaran
let b = 10;

while (b < 5) {
    console.log("tidak pernah jalan");
}

// variasi: kondisi pakai truthy, bukan perbandingan
let c = 3;

while (c) {
    console.log("truthy:", c);
    c--;
}

// do while

let d = 0;

do {
    console.log("do:", d);
    d++;
} while (d < 3);

// variasi: kondisi false, tapi badan tetap jalan sekali
let e = 10;

do {
    console.log("do tetap jalan sekali");
} while (e < 5);

// break dan continue

for (let i = 0; i < 6; i++) {
    if (i === 3) {
        break;
    }
    console.log("break:", i);
}

for (let i = 0; i < 6; i++) {
    if (i === 3) {
        continue;
    }
    console.log("continue:", i);
}

// variasi: continue di while, perubahan harus sebelum continue
let f = 0;

while (f < 5) {
    f++;
    if (f === 3) {
        continue;
    }
    console.log("while continue:", f);
}

// nested loop

for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("nested:", i + "-" + j);
    }
}

// variasi: break di loop dalam, loop luar tetap jalan
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break;
        }
        console.log("break dalam:", i + "-" + j);
    }
}

// variasi: label, keluar dari dua loop sekaligus
luar: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break luar;
        }
        console.log("label:", i + "-" + j);
    }
}

// penampung, jumlahkan isi loop

let total = 0;

for (let i = 1; i <= 5; i++) {
    total += i;
}

console.log("total 1 sampai 5:", total);

// hitung berapa kali loop jalan

let hitung = 0;

for (let i = 0; i < 4; i++) {
    hitung++;
}

console.log("jumlah putaran:", hitung);
