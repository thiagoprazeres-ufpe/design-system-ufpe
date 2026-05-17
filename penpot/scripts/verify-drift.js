#!/usr/bin/env node
// Compara packages/tokens/dtcg/ (canônico) com o estado dos design tokens
// no file UFPE / Foundations. Exit code != 0 se há drift.

import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rpc } from '../rpc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

async function main() {
  const canon = JSON.parse(await readFile(
    resolve(ROOT, '../packages/tokens/src/tokens.penpot.json'),
    'utf8',
  ));
  const ids = JSON.parse(await readFile(resolve(ROOT, 'file-ids.json'), 'utf8'));
  const file = await rpc('get-file', { id: ids['00-foundations'] });

  const remote = file.data?.tokens || {};
  const drift = diff(canon, remote);

  if (drift.length === 0) {
    console.log('✓ sem drift.');
    return;
  }
  console.error('✗ drift detectado:');
  drift.forEach((d) => console.error(`  ${d}`));
  process.exit(1);
}

function diff(a, b, path = '') {
  const out = [];
  for (const k of Object.keys(a)) {
    if (k.startsWith('$')) continue;
    const p = path ? `${path}.${k}` : k;
    if (a[k] && typeof a[k] === 'object' && '$value' in a[k]) {
      if (!b?.[k] || b[k]?.$value !== a[k].$value) {
        out.push(`${p}: git=${JSON.stringify(a[k].$value)} penpot=${JSON.stringify(b?.[k]?.$value)}`);
      }
    } else if (a[k] && typeof a[k] === 'object') {
      out.push(...diff(a[k], b?.[k] || {}, p));
    }
  }
  return out;
}

main().catch((err) => { console.error(err); process.exit(1); });
