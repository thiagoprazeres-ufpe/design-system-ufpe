#!/usr/bin/env bash
# Normaliza o kit oficial UFPE para nomes kebab-case ASCII (idempotente).
# Estrutura esperada de entrada: public/brasoes/{Brasão extenso,Brasão sigla}/RGB/*
# Estrutura de saída:           public/brasoes/{extenso,sigla}/*

set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="public/brasoes"

rename_variant() {
  local src_dir="$1"   # "Brasão extenso"
  local dst_dir="$2"   # "extenso"
  local prefix="$3"    # "Extenso"
  local kebab="$4"     # "extenso"

  local src="$ROOT/$src_dir/RGB"
  local dst="$ROOT/$dst_dir"

  [[ -d "$src" ]] || { echo "skip $src (já normalizado?)"; return 0; }

  mkdir -p "$dst"

  for ext in ai eps pdf; do
    [[ -f "$src/Brasão $prefix - RGB.$ext" ]] && \
      mv -n "$src/Brasão $prefix - RGB.$ext" "$dst/$kebab-rgb.$ext"
  done
  [[ -f "$src/Brasão-$prefix---JPEG---RGB.jpg" ]] && \
    mv -n "$src/Brasão-$prefix---JPEG---RGB.jpg" "$dst/$kebab-rgb.jpg"
  [[ -f "$src/Brasão-$prefix---PNG---RGB.png" ]] && \
    mv -n "$src/Brasão-$prefix---PNG---RGB.png" "$dst/$kebab-rgb.png"
  [[ -f "$src/Brasão-$prefix---PNG-Branco---RGB.png" ]] && \
    mv -n "$src/Brasão-$prefix---PNG-Branco---RGB.png" "$dst/$kebab-branco.png"
  [[ -f "$src/Brasão-$prefix---PNG-Preto---RGB.png" ]] && \
    mv -n "$src/Brasão-$prefix---PNG-Preto---RGB.png" "$dst/$kebab-preto.png"

  rmdir "$src" 2>/dev/null || true
  rmdir "$ROOT/$src_dir" 2>/dev/null || true
}

rename_variant "Brasão extenso" "extenso" "Extenso" "extenso"
rename_variant "Brasão sigla"   "sigla"   "Sigla"   "sigla"

echo "✓ Normalizado:"
ls -1 "$ROOT/sigla" "$ROOT/extenso" 2>/dev/null || true
