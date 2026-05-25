import { h } from './h.js';

// Wrapper para Penpot view-only embed.
// Aceita: { url, frameId, height }
// Quando o link Penpot não está disponível, mostra fallback com link "abrir no Penpot".
export function PenpotEmbed({ url, frameId, height = 480, label = 'Visualizar no Penpot' }) {
  if (!url) {
    return h('div', { class: 'callout' },
      h('strong', {}, 'Preview Penpot pendente — '),
      'biblioteca ainda não publicada. Veja resources/penpot.');
  }
  const src = frameId ? `${url}?frame=${encodeURIComponent(frameId)}` : url;
  const wrap = h('div', { style: { border: '1px solid var(--color-border-default)', borderRadius: '6px', overflow: 'hidden' } },
    h('iframe', {
      src, loading: 'lazy', title: label,
      style: { width: '100%', height: `${height}px`, border: '0', display: 'block' },
      allow: 'clipboard-read; clipboard-write'
    })
  );
  wrap.append(h('div', { style: { padding: '8px 12px', borderTop: '1px solid var(--color-border-default)', fontSize: 'var(--font-size-xs)' } },
    h('a', { href: url, target: '_blank', rel: 'noopener' }, label, ' ↗')
  ));
  return wrap;
}
