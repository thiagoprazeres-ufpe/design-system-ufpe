import { h } from './h.js';

export function CodeBlock({ language = 'text', code }) {
  const wrap = h('div', { class: 'codeblock-wrap' });
  const btn = h('button', { class: 'copy', onClick: () => copy(code, btn) }, 'copiar');
  const pre = h('pre', { 'data-language': language });
  const codeEl = h('code', {}, code);
  pre.append(codeEl);
  wrap.append(btn, pre);
  return wrap;
}

function copy(text, btn) {
  navigator.clipboard?.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ copiado';
    setTimeout(() => (btn.textContent = orig), 1200);
  });
}
