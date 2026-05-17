#!/usr/bin/env node
// Handoff invertido — empacota tokens + SVGs em formato consumível pelo Penpot.
//
// Camadas:
//   1. (atual) Emite dist/penpot/ com library.json + assets/ para drag-and-drop.
//   2. (v0.9) Gera arquivo .penpot (ZIP) com manifest.
//   3. (v1.0) Upload automatizado via Penpot REST API.

import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const outDir = resolve(root, 'dist/penpot');

async function main() {
  await mkdir(outDir, { recursive: true });

  // 1. Library spec
  const lib = JSON.parse(await readFile(resolve(__dirname, 'library.json'), 'utf8'));
  await writeFile(resolve(outDir, 'library.json'), JSON.stringify(lib, null, 2));

  // 2. SVG assets
  await cp(resolve(root, 'public'), resolve(outDir, 'assets'), { recursive: true });

  // 3. Penpot-friendly tokens (Design Tokens W3C draft format)
  const tokens = {
    color: Object.fromEntries(lib.colors.map(c => [
      c.name.toLowerCase().replace(/\s+/g, '-'),
      { $value: c.value, $type: 'color', $description: c.ref || '' }
    ])),
    spacing: Object.fromEntries(lib.tokens.spacing.scale.map((v,i) => [
      `s${i+1}`, { $value: `${v}px`, $type: 'dimension' }
    ])),
    typography: {
      sans: {
        $value: { fontFamily: lib.typography[0].fontFamily, fontWeight: 400, fontSize: '16px' },
        $type: 'typography'
      }
    }
  };
  await writeFile(resolve(outDir, 'tokens.json'), JSON.stringify(tokens, null, 2));

  console.log(`✓ Penpot bundle: ${outDir}`);
  console.log('  → Para importar: arraste os SVGs de assets/ para uma Penpot library.');
  console.log('  → tokens.json segue o W3C Design Tokens format.');
}

main().catch(err => { console.error(err); process.exit(1); });
