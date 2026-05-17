import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const construcao = {
  label: 'Construção',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Construção da marca',
        lede: 'A largura do brasão (x) é a unidade base. Todas as proporções derivam dela.',
      }),
      h('section', {},
        h('h2', {}, 'Proporções'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Versão'), h('th', {}, 'Altura'), h('th', {}, 'Largura texto'), h('th', {}, 'Gap'), h('th', {}, 'Régua'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, 'Sigla UFPE'), h('td', {}, '1.5x'), h('td', {}, '0.7x'), h('td', {}, '0.23x'), h('td', {}, 'x/10')),
            h('tr', {}, h('td', {}, 'Por extenso'), h('td', {}, '1.5x'), h('td', {}, '1.2x'), h('td', {}, '0.53x'), h('td', {}, 'x/12')),
          ),
        ),
      ),
      h('section', {},
        h('h2', {}, 'Visualização'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' } },
          h('div', {},
            h('h3', {}, 'Sigla'),
            h('img', { src: '/brasoes/sigla/sigla-rgb.svg', alt: 'Construção sigla', style: { maxWidth: '240px' } })
          ),
          h('div', {},
            h('h3', {}, 'Extenso'),
            h('img', { src: '/brasoes/extenso/extenso-rgb.svg', alt: 'Construção extenso', style: { maxWidth: '240px' } })
          ),
        )
      ),
      h('div', { class: 'callout' },
        h('p', {}, 'O brasão deve estar sempre centralizado em relação ao texto.')),
    );
  },
};
