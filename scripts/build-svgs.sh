#!/usr/bin/env bash
# Converte os PDFs vetoriais do kit oficial em SVG via pdftocairo (poppler).
# Idempotente: pula se SVG já existe e é mais novo que o PDF.

set -euo pipefail

cd "$(dirname "$0")/.."

command -v pdftocairo >/dev/null || {
  echo "✗ pdftocairo não encontrado (instale poppler: 'brew install poppler')." >&2
  exit 1
}

convert() {
  local pdf="$1"
  local svg="${pdf%.pdf}.svg"
  if [[ -f "$svg" && "$svg" -nt "$pdf" ]]; then
    echo "↷ $svg (atualizado)"
    return 0
  fi
  pdftocairo -svg "$pdf" "$svg"
  echo "✓ $svg"
}

for pdf in apps/ufpe-docs/public/brasoes/sigla/sigla-rgb.pdf apps/ufpe-docs/public/brasoes/extenso/extenso-rgb.pdf; do
  [[ -f "$pdf" ]] && convert "$pdf" || echo "skip $pdf (ausente)"
done
