const fs = require("fs");
const p = "Working Skills/Pattern Drill/pattern_drill_01.js";
let s = fs.readFileSync(p, "utf8");

const lama = [
    "    // 15",
    "    `let total = 0;",
    "for (let i = 1; i <= 3; i++) {",
    "    total += 10;",
    "}",
    "console.log(total);`,",
].join("\n");

const baru = [
    "    // 15",
    "    `// maksudnya: jumlahkan 1 sampai 4",
    "let total = 0;",
    "for (let i = 1; i <= 4; i++) {",
    "    total += 1;",
    "}`,",
].join("\n");

if (!s.includes(lama)) {
    console.log("TIDAK KETEMU");
    process.exit(1);
}
s = s.replace(lama, baru);
s = s.replace("    0,  // 15 BENAR", "    6,  // 15 total += 1, seharusnya total += i");

fs.writeFileSync(p, s);
console.log("ok");
