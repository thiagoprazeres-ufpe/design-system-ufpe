#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

pnpm --filter @ufpe/tokens build
pnpm --filter @sti-ufpe/tokens build
pnpm --filter @ru/tokens build

pnpm --filter @ufpe/penpot-plugin build
pnpm --filter @sti-ufpe/penpot-plugin build
pnpm --filter @ru/penpot-plugin build

pnpm --filter @ufpe/docs build
pnpm --filter @sti-ufpe/docs build
pnpm --filter @ru/docs build

mkdir -p apps/ufpe-docs/dist/tokens
cp packages/tokens/src/tokens.penpot.json apps/ufpe-docs/dist/tokens/tokens.penpot.json

mkdir -p apps/sti-ufpe-docs/dist/tokens
cp packages/tokens-sti-ufpe/src/tokens.penpot.json apps/sti-ufpe-docs/dist/tokens/tokens.penpot.json

mkdir -p apps/ru-portal3-docs/dist/tokens
cp packages/tokens-ru-portal3/src/tokens.penpot.json apps/ru-portal3-docs/dist/tokens/tokens.penpot.json

rm -rf apps/ufpe-docs/dist/plugin
cp -R packages/penpot-plugin/dist apps/ufpe-docs/dist/plugin

rm -rf apps/sti-ufpe-docs/dist/plugin
cp -R packages/penpot-plugin-sti-ufpe/dist apps/sti-ufpe-docs/dist/plugin

rm -rf apps/ru-portal3-docs/dist/plugin
cp -R packages/penpot-plugin-ru-portal3/dist apps/ru-portal3-docs/dist/plugin

rm -rf apps/ufpe-docs/dist/submarcas
mkdir -p apps/ufpe-docs/dist/submarcas
cp -R apps/sti-ufpe-docs/dist apps/ufpe-docs/dist/submarcas/sti-ufpe
cp -R apps/ru-portal3-docs/dist apps/ufpe-docs/dist/submarcas/ru-portal3
