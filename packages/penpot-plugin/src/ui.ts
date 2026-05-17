// UI do plugin — roda em iframe sandboxed.
// Comunica com plugin.ts via parent.postMessage().

const ui = document.getElementById('ui')!;
const DEFAULT_TOKENS_URL = 'https://raw.githubusercontent.com/ufpe/design-system/main/packages/tokens/src/tokens.penpot.json';

ui.innerHTML = `
  <h1>UFPE Design System</h1>

  <h2>Tokens</h2>
  <div class="field">
    <label>URL do tokens.penpot.json</label>
    <input id="tokens-url" value="${DEFAULT_TOKENS_URL}" />
  </div>
  <div class="row">
    <button id="push">↓ Push para Penpot</button>
    <button id="pull" data-secondary>↑ Pull do Penpot</button>
  </div>

  <h2>Validações</h2>
  <div class="row">
    <button data-secondary data-rule="contrast">Contraste</button>
    <button data-secondary data-rule="protection">Área de proteção</button>
    <button data-secondary data-rule="min-size">Redução mínima</button>
  </div>

  <div id="log" class="log"></div>
`;

const log = (msg: string, kind: 'ok' | 'err' | 'info' = 'info') => {
  const el = document.getElementById('log')!;
  const line = document.createElement('div');
  line.className = kind;
  line.textContent = `${new Date().toLocaleTimeString()}  ${msg}`;
  el.prepend(line);
};

const send = (msg: any) => parent.postMessage(msg, '*');

document.getElementById('push')!.addEventListener('click', async () => {
  const url = (document.getElementById('tokens-url') as HTMLInputElement).value.trim();
  log(`Buscando ${url}…`);
  try {
    const tokens = await (await fetch(url)).json();
    send({ type: 'push-tokens', tokens });
    log(`Push enviado.`, 'ok');
  } catch (err: any) {
    log(`Erro: ${err.message}`, 'err');
  }
});

document.getElementById('pull')!.addEventListener('click', () => {
  send({ type: 'pull-tokens' });
  log('Pull solicitado…');
});

document.querySelectorAll<HTMLButtonElement>('button[data-rule]').forEach(b => {
  b.addEventListener('click', () => {
    const rule = b.dataset.rule as any;
    send({ type: 'validate', rule });
    log(`Validando: ${rule}…`);
  });
});

window.addEventListener('message', (e) => {
  const msg = e.data;
  if (!msg?.type) return;
  if (msg.type === 'push-done') log(`✓ ${msg.count} cores sincronizadas.`, 'ok');
  if (msg.type === 'pull-result') log(`✓ Tokens lidos: ${JSON.stringify(msg.tokens).length} bytes (TODO: abrir PR).`, 'ok');
  if (msg.type === 'validate-result') log(`${msg.rule}: ${msg.status} — ${msg.message}`, msg.status === 'ok' ? 'ok' : 'info');
});
