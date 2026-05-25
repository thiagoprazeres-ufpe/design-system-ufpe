import { h } from './h.js';

export function PageHeader({ eyebrow, title, lede, status, penpotUrl }) {
  return h('header', { style: { marginBottom: 'var(--space-4)' } },
    eyebrow ? h('div', { style: { fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--color-text-muted)', marginBottom: '4px' } }, eyebrow) : null,
    h('h1', {}, title),
    status ? h('span', { class: `tag ${status}` }, status) : null,
    lede ? h('p', { class: 'lede' }, lede) : null,
    penpotUrl ? h('p', {}, h('a', { href: penpotUrl, target: '_blank', rel: 'noopener' }, 'Abrir no Penpot ↗')) : null,
  );
}
