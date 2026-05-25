import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { tokens } from '@ru/tokens';

const space = Object.entries(tokens.ru.space).map(([k, v]) => ({
  name: `ru.space.${k}`, value: v, css: `--ru-space-${k}`, dtcg: `ru.space.${k}`,
}));
const radius = Object.entries(tokens.ru.radius).map(([k, v]) => ({
  name: `ru.radius.${k}`, value: v, css: `--ru-radius-${k}`, dtcg: `ru.radius.${k}`,
}));
const shadow = Object.entries(tokens.ru.shadow || {}).map(([k, v]) => ({
  name: `ru.shadow.${k}`, value: v, css: `--ru-shadow-${k}`, dtcg: `ru.shadow.${k}`,
}));

export const spacingPage = {
  label: 'Espaçamento',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Espaçamento, raio e sombras',
        lede: 'Escala 4px-based. Raios e sombras compõem a hierarquia visual de cards e superfícies elevadas.',
        status: 'stable',
      }),
      h('section', {}, h('h2', {}, 'Escala (4px-base)'), TokenTable({ rows: space })),
      h('section', {},
        h('h2', {}, 'Visualização'),
        h('div', { style: { display: 'flex', gap: 'var(--ru-space-2)', alignItems: 'flex-end' } },
          ...Object.entries(tokens.ru.space).filter(([k]) => !isNaN(+k) && +k > 0).map(([k, v]) =>
            h('div', { style: { textAlign: 'center', fontSize: 'var(--ru-font-size-xs)' } },
              h('div', { style: { background: 'var(--ru-color-primary)', width: '32px', height: v } }),
              h('div', {}, k),
              h('div', { style: { color: 'var(--ru-color-text-muted)' } }, v),
            )
          )
        )
      ),
      h('section', {}, h('h2', {}, 'Raio'), TokenTable({ rows: radius })),
      shadow.length ? h('section', {}, h('h2', {}, 'Sombras'), TokenTable({ rows: shadow })) : null,
    );
  },
};
