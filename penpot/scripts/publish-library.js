#!/usr/bin/env node
// Marca os files como shared e estabelece os links (link-file-to-library).
// Uso: PENPOT_TOKEN=... node penpot/scripts/publish-library.js
//
// Idempotente: re-executar não duplica links.

import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rpc } from '../rpc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

async function main() {
  const cfg = JSON.parse(await readFile(resolve(ROOT, 'library.config.json'), 'utf8'));
  const ids = JSON.parse(await readFile(resolve(ROOT, 'file-ids.json'), 'utf8'));

  for (const [key, fileCfg] of Object.entries(cfg.files)) {
    const fileId = ids[key];
    if (!fileId) { console.warn(`skip ${key} (sem fileId)`); continue; }
    if (fileCfg.shared) {
      await rpc('set-file-shared', { id: fileId, 'is-shared': true });
      console.log(`✓ ${key} publicado como shared library`);
    }
    for (const linked of fileCfg.linkedLibraries || []) {
      const libId = ids[linked];
      if (!libId) { console.warn(`  skip link ${key}→${linked} (sem id)`); continue; }
      try {
        await rpc('link-file-to-library', { 'file-id': fileId, 'library-id': libId });
        console.log(`  ↳ linkado: ${key} → ${linked}`);
      } catch (err) {
        if (err.message.includes('already')) console.log(`  ↳ já linkado: ${key} → ${linked}`);
        else throw err;
      }
    }
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
