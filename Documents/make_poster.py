"""Minimalist B&W workflow poster, English. A3 landscape 150 DPI."""
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
draw.text((45, 88), "Yasin Al Qadri  /  48 weeks  /  Nov 2026 - Oct 2027  /  Target: backend internship, semester 7", font=f_sub, fill=GRY)
draw.line([(45, 125), (W - 45, 125)], fill=BLK, width=3)

draw.rectangle([45, 145, W - 45, 185], outline=BLK, width=2)
text_c(45, 152, W - 90, "RULE:  no week without a commit on GitHub", f_rule, BLK)

# Columns
cw = 540
gap = 48
sx = 48
sy = 210
ch = 990

phases = [
    {
        "num": "01", "title": "PHASE 1 FOUNDATION", "period": "Nov'26 - Jan'27  /  weeks 1-12",
        "secs": [
            ("1 WEEK  /  JS IN DEPTH", [
                "01  variables, types, conditions, loops",
                "02  functions, scope, closure",
                "03  arrays: map, filter, reduce",
                "04  objects, destructuring, spread",
            ]),
            ("2 WEEK  /  ASYNC + NODE", [
                "05  callbacks, promises, async/await",
                "06  HTTP: methods, status, headers",
                "07  node.js: modules, fs, path",
                "08  express: first CRUD API",
            ]),
            ("3 WEEK  /  SQL + DATABASES", [
                "09  CRUD, WHERE, ORDER, LIMIT",
                "10  aggregates, LIKE, BETWEEN",
                "11  JOIN, GROUP BY, HAVING",
                "12  indexes, foreign keys, normalization",
            ]),
        ],
        "out": "4-endpoint API + 3-table SQL JOIN",
    },
    {
        "num": "02", "title": "PHASE 2 SECOND LANGUAGE", "period": "Feb - Apr'27  /  weeks 13-24",
        "secs": [
            ("1 WEEK  /  JAVA BASICS", [
                "13  syntax, types, loops, methods",
                "14  parameters, return, overloading",
                "15  classes, objects, constructors",
                "16  inheritance, interfaces",
            ]),
            ("2 WEEK  /  SPRING BOOT", [
                "17  List, Map, Set, generics",
                "18  exceptions, file I/O",
                "19  @RestController, @GetMapping",
                "20  full CRUD API",
            ]),
            ("3 WEEK  /  DOCKER + TESTING", [
                "21  Spring Data JPA + PostgreSQL",
                "22  Dockerfile, images, containers",
                "23  docker-compose: app + db",
                "24  JUnit, Mockito, 10+ tests",
            ]),
        ],
        "out": "Spring Boot + PostgreSQL + Docker + tests",
    },
    {
        "num": "03", "title": "PHASE 3 PROJECT", "period": "May - Jul'27  /  weeks 25-36",
        "secs": [
            ("1 WEEK  /  PROJECT FOUNDATION", [
                "25  setup, database design, 6-table ERD",
                "26  bcrypt, JWT, middleware",
                "27  event CRUD",
                "28  validation, pagination, filters",
            ]),
            ("2 WEEK  /  CORE FEATURES", [
                "29  ticket purchase, stock, race conditions",
                "30  promo codes, discounts, pricing",
                "31  sandbox payment + webhook",
                "32  Swagger documentation",
            ]),
            ("3 WEEK  /  PRODUCTION", [
                "33  GitHub Actions: build, test, lint",
                "34  deploy to Railway / Render",
                "35  error handling, logging",
                "36  portfolio README",
            ]),
        ],
        "out": "live project + README + test suite",
    },
    {
        "num": "04", "title": "PHASE 4 PREPARATION", "period": "Aug - Oct'27  /  weeks 37-48",
        "secs": [
            ("1 WEEK  /  LINUX + DESIGN", [
                "37  Ubuntu on ThinkPad T480, CLI",
                "38  SSH, permissions, deploy to VPS",
                "39  load balancing, caching, scaling",
                "40  queues, consistency, monolith",
            ]),
            ("2 WEEK  /  INTERVIEW PRACTICE", [
                "41  explain the project in 5 minutes",
                "42  explain the architecture on a board",
                "43  LeetCode 5 problems per week",
                "44  advanced LeetCode, Medium",
            ]),
            ("3 WEEK  /  APPLICATIONS", [
                "45  polish repos, remove dead code",
                "46  GitHub profile, pinned repos",
                "47  one-page CV, apply to 5-10",
                "48  interview preparation",
            ]),
        ],
        "out": "3 repos + 80 LeetCode + CV ready",
    },
]

for i, ph in enumerate(phases):
    x = sx + i * (cw + gap)
    y = sy
    box(x, y, cw, ch, 2)

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
draw.text((68, by + 8), "TIME", font=f_phase, fill=BLK)
dashed(68, 48 + bw - 20, by + 40)
rows = [("per day", "2-3 hours  (min 30 min)"), ("per week", "15-20 hours  (5-6 days)"),
        ("per month", "60-80 hours"), ("48 weeks", "720-960 hours")]
ty = by + 48
for a, b in rows:
    draw.text((68, ty), a, font=f_body, fill=GRY)
    draw.text((215, ty), b, font=f_body, fill=BLK)
    ty += 28

draw.text((68, ty + 8), "METHOD", font=f_sec, fill=BLK)
draw.text((160, ty + 9), "20% reading  +  80% typing", font=f_body, fill=GRY)

box(48 + bw + 28, by, bw, bh)
bx = 48 + bw + 48
draw.text((bx, by + 8), "INTERNSHIP TARGETS", font=f_phase, fill=BLK)
dashed(bx, 48 + bw * 2 + 8, by + 40)
tg = [("tiket.com", "Software Engineer I", "0-2 yrs"),
      ("Sea Labs", "Back End Engineer", "1-3 yrs"),
      ("Startup", "Backend Node.js", "entry"),
      ("Digital bank", "Backend intern", "internship")]
ty = by + 48
for co, pos, exp in tg:
    draw.text((bx, ty), co, font=f_body, fill=BLK)
    draw.text((bx + 185, ty), pos, font=f_body, fill=GRY)
    draw.text((bx + 480, ty), exp, font=f_small, fill=LGRY)
    ty += 28

draw.text((bx, ty + 8), "ALREADY HAVE", font=f_sec, fill=BLK)
draw.text((bx, ty + 32), "JS / Node / Express / Firebase / REST / Git / Midtrans", font=f_small, fill=GRY)

qx = 48 + bw * 2 + 56
qw = W - 48 - qx
box(qx, by, qw, bh)
draw.text((qx + 24, by + 26), '"The hardship I face now",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 54), '"was caused by who I was",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 82), '"before. This time, I am",', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 110), '"the one who changes it."', font=f_quote, fill=BLK)
draw.text((qx + 24, by + 158), "- Yasin, 31 October 2026", font=f_small, fill=LGRY)

out = os.path.join("Documents", "Poster Roadmap.png")
os.makedirs("Documents", exist_ok=True)
img.save(out, "PNG", dpi=(150, 150))
print("Saved:", out)
print("Size:", os.path.getsize(out) // 1024, "KB")
