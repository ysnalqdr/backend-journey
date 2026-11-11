#!/usr/bin/env python3
"""
check_system.py - periksa kesehatan repo Backend Journey.

Jalankan: python check_system.py
Atau:     node --version && python check_system.py

Keluar dengan kode 1 kalau ada masalah kritis.
"""

import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
errors = []
warnings = []
oks = []


def ok(msg):
    oks.append(msg)


def warn(msg):
    warnings.append(msg)


def err(msg):
    errors.append(msg)


def read(p):
    try:
        return Path(p).read_text(encoding="utf-8")
    except Exception:
        return ""


# ---------- 1. Semua file .js sintaks valid ----------
js_files = sorted(ROOT.rglob("*.js"))
js_files = [f for f in js_files if "node_modules" not in str(f)]
for f in js_files:
    r = subprocess.run(
        ["node", "--check", str(f)], capture_output=True, text=True
    )
    if r.returncode != 0:
        err(f"sintaks rusak: {f.relative_to(ROOT)}")
if not errors:
    ok(f"sintaks: {len(js_files)} file .js valid")

# ---------- 2. Penjaga anti-bocor ----------
guards = {
    "Working Skills/Reading/reading_01.js": "sudahMenjawab",
    "Working Skills/Review/review_01.js": "sudahReview",
    "Working Skills/Debug/debug_01.js": "sudahLapor",
    "Phase 1 Foundation/1 Week/01_Js Basic/Exercises/09_Challenge.js": "sudahMenjawab",
}
for rel, flag in guards.items():
    p = ROOT / rel
    if not p.exists():
        err(f"hilang: {rel}")
        continue
    src = read(p)
    if f"const {flag} = false;" not in src:
        err(f"penjaga hilang di {rel}")
    else:
        ok(f"penjaga aktif: {Path(rel).name}")

# ---------- 3. File latihan punya kunci ----------
latihan = [
    ("Working Skills/Reading/01_Total Pembayaran.md", "Working Skills/Kunci/Reading 01.md"),
    ("Working Skills/Review/01_Kode Review.md", "Working Skills/Kunci/Review 01.md"),
    ("Working Skills/Docs/01_Cari Sendiri di MDN.md", "Working Skills/Kunci/Docs 01.md"),
    ("Working Skills/Debug/01_Stok Berkurang Dua Kali.md", "Working Skills/Kunci/Debug 01.md"),
]
for soal, kunci in latihan:
    if not (ROOT / soal).exists():
        err(f"soal hilang: {soal}")
    elif not (ROOT / kunci).exists():
        err(f"kunci hilang untuk {soal}")
    else:
        ok(f"soal + kunci: {Path(soal).stem}")

# ---------- 4. Tidak ada referensi file yang hilang ----------
# File yang memang belum dibuat karena fase-nya belum tiba
FUTURE = {"API-CONTRACT.md", "ONBOARDING.md"}
docs = ["README.md", "PLAN.md", "SKILLS.md", "Working Skills/README.md"]
pattern = re.compile(r"`([A-Za-z0-9_/.\- ]+\.(?:md|js|png))`")
seen = set()
missing = []
for d in docs:
    p = ROOT / d
    if not p.exists():
        continue
    for m in pattern.finditer(read(p)):
        ref = m.group(1).strip()
        if ref in seen or ref.startswith("NN_") or Path(ref).name in FUTURE:
            continue
        seen.add(ref)
        if (ROOT / ref).exists():
            continue
        hits = list(ROOT.rglob(Path(ref).name))
        if not hits:
            missing.append(f"{ref} (dari {d})")
if missing:
    for m in missing:
        warn(f"referensi tidak ketemu: {m}")
else:
    ok(f"referensi dokumen: {len(seen)} file dirujuk, semua ada")

# ---------- 5. Template tidak duplikat ----------
old_tpl = ROOT / "_templates"
if old_tpl.exists():
    err("_templates/ masih ada — template sudah dipindah ke Working Skills/Templates/")
else:
    ok("template: satu lokasi saja")

# ---------- 6. SKILLS.md punya bagian Working Skills ----------
skills = read(ROOT / "SKILLS.md")
if "## Working Skills" not in skills:
    err("SKILLS.md tidak punya bagian Working Skills")
else:
    ok("SKILLS.md: bagian Working Skills ada")

# ---------- 7. README punya protokol sesi ----------
readme = read(ROOT / "README.md")
if "## Session Protocol" not in readme:
    err("README.md tidak punya Session Protocol")
else:
    ok("README.md: Session Protocol ada")

# ---------- 8. Bug log 5 kolom ----------
catatan = list((ROOT / "Phase 1 Foundation").rglob("Catatan.md"))
for c in catatan:
    src = read(c)
    if "## Bug log" in src:
        seg = src.split("## Bug log")[1].split("## Gate Log")[0]
        if "Dugaan penyebab" not in seg:
            err(f"bug log {c.parent.name}: tidak ada kolom 'Dugaan penyebab'")
        else:
            ok(f"bug log: {c.parent.name} format benar")

# ---------- 9. Explain back terisi ----------
for c in catatan:
    src = read(c)
    if "## Explain back" in src:
        seg = src.split("## Explain back")[1].split("##")[0].strip()
        if seg.startswith("<") or len(seg) < 20:
            warn(f"explain back kosong: {c.parent.name}")
        else:
            ok(f"explain back terisi: {c.parent.name}")

# ---------- 10. Review queue jatuh tempo ----------
import datetime
rq = read(ROOT / "REVIEW_QUEUE.md")
today = datetime.date.today()
overdue = []
pending = 0
for line in rq.splitlines():
    m = re.match(r"\|\s*(.+?)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|\s*\**(\d{4}-\d{2}-\d{2})\**\s*\|(.*)\|", line)
    if not m:
        continue
    konsep, _, due, rest = m.groups()
    if konsep.strip().lower() in ("concept", "---"):
        continue
    if "|" not in rest:
        continue
    hasil = rest.split("|")[0].strip()
    if hasil:
        continue
    pending += 1
    d = datetime.date.fromisoformat(due)
    if d < today:
        overdue.append(f"{konsep.strip()} (jatuh tempo {due})")

if overdue:
    for o in overdue:
        warn(f"re-check terlewat: {o}")
else:
    ok(f"review queue: {pending} item menunggu, tidak ada yang terlewat")

# ---------- 10b. Setiap file .js latihan punya .md pendamping ----------
ws = ROOT / "Working Skills"
if ws.exists():
    orphan = []
    for js in ws.rglob("*.js"):
        sibling = list(js.parent.glob("*.md"))
        if not sibling:
            orphan.append(str(js.relative_to(ROOT)))
    if orphan:
        for o in orphan:
            err(f"file .js tanpa .md pendamping: {o}")
    else:
        ok("working skills: setiap .js punya .md")

# ---------- 10c. Jumlah aturan README ----------
main_rules = len(re.findall(r"^\d+\. ", readme, re.M))
sub_rules = len(re.findall(r"^\d+[a-g]\. ", readme, re.M))
if main_rules < 30:
    warn(f"aturan README hanya {main_rules}, seharusnya ≥ 30")
else:
    ok(f"aturan README: {main_rules} utama + {sub_rules} sub = {main_rules + sub_rules}")

# ---------- 11. Gate log ada isinya ----------
for c in catatan:
    src = read(c)
    if "## Gate Log" in src:
        n = len(re.findall(r"^\|\s*\d+\s*\|", src, re.M))
        if n == 0:
            warn(f"gate log kosong: {c.parent.name}")
        else:
            ok(f"gate log: {n} entri")

# ---------- 12. Commit minggu ini ----------
r = subprocess.run(
    ["git", "log", "--oneline", "--since=7 days ago"],
    capture_output=True, text=True, cwd=str(ROOT)
)
n = len([l for l in r.stdout.splitlines() if l.strip()])
if n == 0:
    warn("tidak ada commit dalam 7 hari terakhir")
else:
    ok(f"commit 7 hari terakhir: {n}")

# ---------- 13. Working tree bersih ----------
r = subprocess.run(
    ["git", "status", "--porcelain"], capture_output=True, text=True, cwd=str(ROOT)
)
if r.stdout.strip():
    warn(f"working tree belum bersih ({len(r.stdout.strip().splitlines())} file)")
else:
    ok("working tree bersih")


# ---------- Laporan ----------
print("=" * 64)
print("  BACKEND JOURNEY — PEMERIKSAAN SISTEM")
print("=" * 64)

if oks:
    print(f"\nLULUS ({len(oks)})")
    for m in oks:
        print(f"  ok   {m}")

if warnings:
    print(f"\nPERHATIAN ({len(warnings)})")
    for m in warnings:
        print(f"  !    {m}")

if errors:
    print(f"\nGAGAL ({len(errors)})")
    for m in errors:
        print(f"  X    {m}")

print()
total = len(oks) + len(warnings) + len(errors)
score = (len(oks) / total * 100) if total else 0
print(f"Skor: {len(oks)}/{total} pemeriksaan lulus ({score:.0f}%)")
print()

sys.exit(1 if errors else 0)
