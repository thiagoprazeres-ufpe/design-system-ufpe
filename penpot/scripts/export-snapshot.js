#!/usr/bin/env node
// nightly: exporta cada file Penpot da config para penpot/files/<id>.penpot
// Uso: PENPOT_TOKEN=... node penpot/scripts/export-snapshot.js
//
// IDs reais dos files devem estar em penpot/file-ids.json (gerado em setup inicial).
// Quando o file-ids.json não existir, lista os files do projeto e grava.

import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rpc, exportBinfile } from '../rpc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

async function main() {
  const cfg = JSON.parse(await readFile(resolve(ROOT, 'library.config.json'), 'utf8'));
  const idsPath = resolve(ROOT, 'file-ids.json');

  let ids;
  try {
    await access(idsPath);
    ids = JSON.parse(await readFile(idsPath, 'utf8'));
  } catch {
    console.log('file-ids.json não existe — listando projetos do team UFPE…');
    const teams = await rpc('get-teams');
    const team = teams.find((t) => t.name === cfg.team);
    if (!team) throw new Error(`Team "${cfg.team}" não encontrado.`);
    const projects = await rpc('get-projects', { 'team-id': team.id });
    const project = projects.find((p) => p.name === cfg.project);
    if (!project) throw new Error(`Project "${cfg.project}" não encontrado.`);
    const files = await rpc('get-project-files', { 'project-id': project.id });
    ids = {};
    for (const key of Object.keys(cfg.files)) {
      const expectedName = cfg.files[key].name;
      const f = files.find((x) => x.name === expectedName);
      if (f) ids[key] = f.id;
      else console.warn(`File "${expectedName}" não encontrado — pulando.`);
    }
    await writeFile(idsPath, JSON.stringify(ids, null, 2));
    console.log(`✓ ${idsPath} criado.`);
  }

  await mkdir(resolve(ROOT, 'files'), { recursive: true });
  for (const [key, fileId] of Object.entries(ids)) {
    const out = resolve(ROOT, 'files', `${key}.penpot`);
    process.stdout.write(`exporting ${key}…`);
    await exportBinfile(fileId, out);
    console.log(' ✓');
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
