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

// Session cookie obtido por login-with-password — necessário para baixar binfile
// asset (PAT só vale para /api/rpc; /assets/by-id requer cookie).
let _cookie = null;
async function getSessionCookie() {
  if (_cookie) return _cookie;
  const email = process.env.PENPOT_EMAIL;
  const password = process.env.PENPOT_PASSWORD;
  if (!email || !password) {
    throw new Error('PENPOT_EMAIL e PENPOT_PASSWORD são necessários para export-snapshot (asset URL exige cookie).');
  }
  const res = await fetch(`${BASE}/api/rpc/command/login-with-password`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(`login-with-password → ${res.status}`);
  const sc = res.headers.get('set-cookie') || '';
  const m = sc.match(/auth-token=([^;]+)/);
  if (!m) throw new Error('login: no auth-token in Set-Cookie');
  _cookie = `auth-token=${m[1]}`;
  return _cookie;
}

// .penpot binary export — endpoint streams SSE com eventos de progresso;
// evento final "end" carrega URI para o ZIP. Asset URL requer cookie de sessão.
export async function exportBinfile(fileId, outPath) {
  const res = await fetch(`${BASE}/api/rpc/command/export-binfile`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Token ${TOKEN}`,
    },
    body: JSON.stringify({ 'file-id': fileId, 'embed-assets': true, 'include-libraries': false }),
  });
  if (!res.ok) throw new Error(`export-binfile → ${res.status}`);

  const text = await res.text();
  const endMatch = text.match(/event: end\s*\n\s*data: (.+)/);
  if (!endMatch) throw new Error(`export-binfile: no end event\n${text.slice(0, 400)}`);
  const endData = JSON.parse(endMatch[1]);
  const uri = endData['~#uri'] || endData.uri;
  if (!uri) throw new Error(`export-binfile: no uri in end event: ${JSON.stringify(endData)}`);

  const cookie = await getSessionCookie();
  const fileRes = await fetch(uri, { headers: { cookie } });
  if (!fileRes.ok) throw new Error(`download binfile → ${fileRes.status}`);
  const buf = Buffer.from(await fileRes.arrayBuffer());
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
