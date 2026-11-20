#!/bin/sh
# install_hooks.sh — memasang git hook dari folder hooks/ ke .git/hooks/
#
# Kenapa perlu: folder .git/ tidak pernah ikut git. Kalau repo di-clone di mesin
# lain, hook-nya hilang tanpa ada yang tahu. Skrip ini membuat hook bisa dipasang
# ulang di mana saja.
#
# Pakai:  sh install_hooks.sh
#
# Aturan #59: setelah clone baru, jalankan skrip ini.

set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if [ ! -d ".git" ]; then
    echo "Bukan folder git: $ROOT"
    exit 1
fi

if [ ! -d "hooks" ]; then
    echo "Folder hooks/ tidak ada."
    exit 1
fi

jumlah=0
for berkas in hooks/*; do
    [ -f "$berkas" ] || continue
    nama="$(basename "$berkas")"
    cp "$berkas" ".git/hooks/$nama"
    chmod +x ".git/hooks/$nama"
    echo "dipasang: $nama"
    jumlah=$((jumlah + 1))
done

echo ""
echo "$jumlah hook dipasang ke .git/hooks/"
echo "Uji dengan: git commit (tanpa --no-verify)"
