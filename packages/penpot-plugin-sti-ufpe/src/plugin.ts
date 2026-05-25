// Plugin runtime — executa dentro do editor Penpot.
// Carrega a UI em iframe e atua como ponte para a API penpot.*

penpot.ui.open('STI UFPE Design System', '/', { width: 360, height: 540 });

type Msg =
  | { type: 'push-tokens'; tokens: any }
  | { type: 'pull-tokens' }
  | { type: 'validate'; rule: 'contrast' | 'protection' | 'min-size' };

penpot.ui.onMessage<Msg>((msg) => {
  switch (msg.type) {
    case 'push-tokens':
      pushTokens(msg.tokens);
      break;
    case 'pull-tokens':
      pullTokens();
      break;
    case 'validate':
      runValidation(msg.rule);
      break;
  }
});

// Aplica tokens DTCG na library do arquivo atual.
async function pushTokens(dtcg: any) {
  const lib = penpot.library.local;
  const colorTokens = flattenColors(dtcg.color);
  for (const [name, value] of colorTokens) {
    const existing = lib.colors.find((c) => c.name === name);
    if (existing) existing.color = value;
    else lib.colors.create({ name, color: value });
  }
  penpot.ui.sendMessage({ type: 'push-done', count: colorTokens.length });
}

function flattenColors(obj: any, prefix = 'color'): [string, string][] {
  const out: [string, string][] = [];
  for (const [k, v] of Object.entries(obj || {})) {
    const name = `${prefix}.${k}`;
    if (typeof v === 'string') out.push([name, v]);
    else if (v && typeof v === 'object') out.push(...flattenColors(v, name));
  }
  return out;
}

async function pullTokens() {
  const lib = penpot.library.local;
  const color: any = {};
  for (const c of lib.colors) {
    setDeep(color, c.name.replace(/^color\./, '').split('.'), c.color);
  }
  penpot.ui.sendMessage({ type: 'pull-result', tokens: { color } });
}

function setDeep(obj: any, path: string[], value: any) {
  let cur = obj;
  for (let i = 0; i < path.length - 1; i++) {
    cur[path[i]] ??= {};
    cur = cur[path[i]];
  }
  cur[path[path.length - 1]] = value;
}

// Stubs — implementados em v0.9 (validações de marca)
async function runValidation(rule: string) {
  penpot.ui.sendMessage({ type: 'validate-result', rule, status: 'todo', message: 'Validação a ser implementada em v0.9.' });
}
