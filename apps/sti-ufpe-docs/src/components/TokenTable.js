import { h } from './h.js';

// rows: [{ name, value, css, dtcg, description }]
export function TokenTable({ rows, showSwatch = false }) {
  const table = h('table', { class: 'token-table' });
  const thead = h('thead', {}, h('tr', {},
    showSwatch ? h('th', {}, '') : null,
    h('th', {}, 'Token'),
    h('th', {}, 'Valor'),
    h('th', {}, 'CSS var'),
    h('th', {}, 'DTCG path'),
  ));
  const tbody = h('tbody');
  rows.forEach(r => {
    tbody.append(h('tr', {},
      showSwatch ? h('td', {}, h('span', {
        style: {
          display: 'inline-block', width: '28px', height: '28px',
          background: r.value, border: '1px solid var(--color-border-default)', borderRadius: '4px'
        }
      })) : null,
      h('td', {}, h('strong', {}, r.name), r.description ? h('div', { style: { fontSize: '12px', color: 'var(--color-text-muted)' } }, r.description) : null),
      h('td', {}, h('code', {}, String(r.value))),
      h('td', {}, h('code', {}, r.css)),
      h('td', {}, h('code', {}, r.dtcg)),
    ));
  });
  table.append(thead, tbody);
  return table;
}
