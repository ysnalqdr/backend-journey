"""Minimalist B&W workflow poster. A3 landscape 150 DPI."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 2480, 1754
img = Image.new("RGB", (W, H), "#FFFFFF")
draw = ImageDraw.Draw(img)

def font(size, bold=False):
    try:
        return ImageFont.truetype("arialbd.ttf" if bold else "arial.ttf", size)
    except Exception:
        return ImageFont.load_default()

f_title = font(46, True)
f_sub = font(21)
f_phase = font(26, True)
f_sec = font(19, True)
f_body = font(16)
f_small = font(14)
f_rule = font(23, True)
f_quote = font(17)
f_big = font(56, True)

BLK = "#000000"
GRY = "#555555"
LGRY = "#999999"
WHT = "#FFFFFF"

def box(x, y, w, h, lw=2):
    draw.rectangle([x, y, x + w, y + h], outline=BLK, width=lw)

def dashed(x1, x2, y, gap=7):
    cx = x1
    while cx < x2:
        draw.line([(cx, y), (min(cx + gap, x2), y)], fill=LGRY, width=1)
        cx += gap * 2

def text_c(x, y, w, txt, f, fill=BLK):
    bb = draw.textbbox((0, 0), txt, font=f)
    draw.text((x + (w - (bb[2] - bb[0])) // 2, y), txt, font=f, fill=fill)

# Header
draw.text((45, 28), "BACKEND JOURNEY", font=f_title, fill=BLK)
draw.text((45, 88), "Yasin Al Qadri  /  48 minggu  /  Nov 2026 - Okt 2027  /  Target: magang backend semester 7", font=f_sub, fill=GRY)
draw.line([(45, 125), (W - 45, 125)], fill=BLK, width=3)

draw.rectangle([45, 145, W - 45, 185], outline=BLK, width=2)
text_c(45, 152, W - 90, "ATURAN:  tidak ada minggu tanpa commit di GitHub", f_rule, BLK)

# Columns
cw = 540
gap = 48
sx = 48
sy = 210
ch = 990

phases = [
    {
        "num": "01", "title": "FASE 1 FONDASI", "period": "Nov'26 - Jan'27  /  minggu 1-12",
        "secs": [
            ("1 WEEK  /  JS MENDALAM", [
                "01  variabel, tipe, kondisi, loop",
                "02  fungsi, scope, closure",
                "03  array: map, filter, reduce",
                "04  object, destructuring, spread",
            ]),
            ("2 WEEK  /  ASYNC + NODE", [
                "05  callback, promise, async/await",
                "06  HTTP: method, status, header",
                "07  node.js: module, fs, path",
                "08  express: CRUD API pertama",
            ]),
            ("3 WEEK  /  SQL + DATABASE", [
                "09  CRUD, WHERE, ORDER, LIMIT",
                "10  aggregate, LIKE, BETWEEN",
                "11  JOIN, GROUP BY, HAVING",
                "12  index, foreign key, normalisasi",
            ]),
        ],
        "out": "API 4 endpoint + SQL JOIN 3 tabel",
    },
    {
        "num": "02", "title": "FASE 2 BAHASA KEDUA", "period": "Feb - Apr'27  /  minggu 13-24",
        "secs": [
            ("1 WEEK  /  JAVA DASAR", [
                "13  syntax, tipe, loop, method",
                "14  parameter, return, overloading",
                "15  class, object, constructor",
                "16  inheritance, interface",
            ]),
            ("2 WEEK  /  SPRING BOOT", [
                "17  List, Map, Set, generics",
                "18  exception, file I/O",
                "19  @RestController, @GetMapping",
                "20  CRUD API lengkap",
            ]),
            ("3 WEEK  /  DOCKER + TEST", [
                "21  Spring Data JPA + PostgreSQL",
                "22  Dockerfile, image, container",
                "23  docker-compose: app + db",
                "24  JUnit, Mockito, 10+ test",
            ]),
        ],
        "out": "Spring Boot + PostgreSQL + Docker + test",
    },
    {
        "num": "03", "title": "FASE 3 PROYEK", "period": "Mei - Jul'27  /  minggu 25-36",
        "secs": [
            ("1 WEEK  /  FONDASI PROYEK", [
                "25  setup, desain db, ERD 6 tabel",
                "26  bcrypt, JWT, middleware",
                "27  CRUD events",
                "28  validasi, pagination, filter",
            ]),
            ("2 WEEK  /  FITUR INTI", [
                "29  beli tiket, stok, race condition",
                "30  promo, diskon, kalkulasi harga",
                "31  payment sandbox + webhook",
                "32  dokumentasi Swagger",
            ]),
            ("3 WEEK  /  PRODUKSI", [
                "33  GitHub Actions: build, test, lint",
                "34  deploy ke Railway / Render",
                "35  error handling, logging",
                "36  README portofolio",
            ]),
        ],
        "out": "proyek live + README + test suite",
    },
    {
        "num": "04", "title": "FASE 4 PERSIAPAN", "period": "Ags - Okt'27  /  minggu 37-48",
        "secs": [
            ("1 WEEK  /  LINUX + DESIGN", [
                "37  Ubuntu di ThinkPad T480, CLI",
                "38  SSH, permission, deploy VPS",
                "39  load balancer, caching, scaling",
                "40  queue, konsistensi, monolith",
            ]),
            ("2 WEEK  /  LATIHAN INTERVIEW", [
                "41  jelaskan proyek 5 menit",
                "42  jelaskan arsitektur di papan",
                "43  LeetCode 5 soal/minggu",
                "44  LeetCode lanjutan, Medium",
            ]),
            ("3 WEEK  /  LAMARAN", [
                "45  polish repo, hapus kode mati",
                "46  GitHub profile, pinned repo",
                "47  CV 1 halaman, apply 5-10",
                "48  persiapan wawancara",
            ]),
        ],
        "out": "3 repo + 80 LeetCode + CV siap",
    },
]

for i, ph in enumerate(phases):
    x = sx + i * (cw + gap)
    y = sy
    box(x, y, cw, ch, 2)

    # header band
    draw.rectangle([x, y, x + cw, y + 72], fill=BLK)
    draw.text((x + 12, y + 6), ph["num"], font=f_big, fill=WHT)
    draw.text((x + 92, y + 12), ph["title"], font=f_phase, fill=WHT)
    draw.text((x + 92, y + 44), ph["period"], font=f_small, fill=LGRY)

    iy = y + 88
    for si, (sec, bullets) in enumerate(ph["secs"]):
        draw.text((x + 14, iy), sec, font=f_sec, fill=BLK)
        iy += 26
        dashed(x + 14, x + cw - 14, iy)
        iy += 9
        for b in bullets:
            draw.text((x + 24, iy), b, font=f_body, fill=GRY)
            iy += 24
        iy += 14
        if si < 2:
            draw.line([(x + cw // 2, iy - 12), (x + cw // 2, iy + 2)], fill=BLK, width=2)
            draw.polygon([(x + cw // 2 - 5, iy + 2), (x + cw // 2, iy + 10), (x + cw // 2 + 5, iy + 2)], fill=BLK)
            iy += 16

    oy = y + ch - 56
    draw.rectangle([x + 10, oy, x + cw - 10, oy + 44], outline=BLK, width=2)
    text_c(x + 10, oy + 12, cw - 20, ph["out"], f_small, BLK)

    if i < 3:
        ax = x + cw + 3
        ay = y + ch // 2
        draw.line([(ax, ay), (ax + gap - 18, ay)], fill=BLK, width=2)
        draw.polygon([(ax + gap - 18, ay - 6), (ax + gap - 6, ay), (ax + gap - 18, ay + 6)], fill=BLK)

# Bottom
by = sy + ch + 28
bw = 745
bh = 210

box(48, by, bw, bh)
draw.text((68, by + 8), "WAKTU", font=f_phase, fill=BLK)
dashed(68, 48 + bw - 20, by + 40)
rows = [("per hari", "2-3 jam  (min 30 menit)"), ("per minggu", "15-20 jam  (5-6 hari)"),
        ("per bulan", "60-80 jam"), ("48 minggu", "720-960 jam")]
ty = by + 48
for a, b in rows:
    draw.text((68, ty), a, font=f_body, fill=GRY)
    draw.text((215, ty), b, font=f_body, fill=BLK)
    ty += 28

draw.text((68, ty + 8), "METODE", font=f_sec, fill=BLK)
draw.text((160, ty + 9), "20% baca  +  80% ketik sendiri", font=f_body, fill=GRY)

box(48 + bw + 28, by, bw, bh)
bx = 48 + bw + 48
draw.text((bx, by + 8), "TARGET MAGANG", font=f_phase, fill=BLK)
dashed(bx, 48 + bw * 2 + 8, by + 40)
tg = [("tiket.com", "Software Engineer I", "0-2 thn"),
      ("Sea Labs", "Back End Engineer", "1-3 thn"),
      ("Startup", "Backend Node.js", "entry"),
      ("Bank digital", "Backend intern", "magang")]
ty = by + 48
for co, pos, exp in tg:
    draw.text((bx, ty), co, font=f_body, fill=BLK)
    draw.text((bx + 185, ty), pos, font=f_body, fill=GRY)
    draw.text((bx + 480, ty), exp, font=f_small, fill=LGRY)
    ty += 28

draw.text((bx, ty + 8), "SUDAH PUNYA", font=f_sec, fill=BLK)
draw.text((bx, ty + 32), "JS / Node / Express / Firebase / REST / Git / Midtrans", font=f_small, fill=GRY)

qx = 48 + bw * 2 + 56
qw = W - 48 - qx
box(qx, by, qw, bh)
draw.text((qx + 24, by + 26), '"Kesusahanku sekarang",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 54), '"diakibatkan oleh diriku",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 82), '"yang dulu. Kali ini aku",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 110), '"yang akan mengubahnya."', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 158), "- Yasin, 31 Oktober 2026", font=f_small, fill=LGRY)

out = os.path.join("Dokumen", "Poster Roadmap.png")
os.makedirs("Dokumen", exist_ok=True)
img.save(out, "PNG", dpi=(150, 150))
print("Saved:", out)
print("Size:", os.path.getsize(out) // 1024, "KB")
