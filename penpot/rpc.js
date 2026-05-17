// Cliente RPC mínimo do Penpot (/api/rpc/command/<name>).
// Auth: PENPOT_TOKEN (Personal Access Token).
// Base: PENPOT_API (default https://design.penpot.app).
//
// A API é marcada como "internal" pela equipe Penpot — pin a versão do servidor
// (especialmente self-hosted) para evitar quebras silenciosas.

import { readFile, writeFile } from 'node:fs/promises';

const BASE = process.env.PENPOT_API || 'https://design.penpot.app';
const TOKEN = process.env.PENPOT_TOKEN;

if (!TOKEN && !process.env.PENPOT_RPC_NO_TOKEN_OK) {
  console.warn('[penpot/rpc] PENPOT_TOKEN não definido — chamadas autenticadas vão falhar.');
}

export async function rpc(command, params = {}) {
  const res = await fetch(`${BASE}/api/rpc/command/${command}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(TOKEN ? { authorization: `Token ${TOKEN}` } : {}),
    },
    body: JSON.stringify(params),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`RPC ${command} → ${res.status}: ${text}`);
  }
  return res.json();
}

// .penpot binary export/import (multipart-ish endpoints).
export async function exportBinfile(fileId, outPath) {
  const res = await fetch(`${BASE}/api/rpc/command/export-binfile`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Token ${TOKEN}`,
    },
    body: JSON.stringify({ 'file-id': fileId, 'embed-assets': true, 'include-libraries': true }),
  });
  if (!res.ok) throw new Error(`export-binfile → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  return outPath;
}

export async function importBinfile(filePath, projectId) {
  const data = await readFile(filePath);
  const form = new FormData();
  form.append('project-id', projectId);
  form.append('file', new Blob([data]), filePath.split('/').pop());
  const res = await fetch(`${BASE}/api/rpc/command/import-binfile`, {
    method: 'POST',
    headers: { authorization: `Token ${TOKEN}` },
    body: form,
  });
  if (!res.ok) throw new Error(`import-binfile → ${res.status}`);
  return res.json();
}
