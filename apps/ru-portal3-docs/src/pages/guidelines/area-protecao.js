import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const areaProtecao = {
  label: 'Área de proteção',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Área de proteção',
        lede: 'Espaço livre ao redor do lockup RU — mantém legibilidade e impede interferência visual.',
      }),
      h('section', {},
        h('div', { style: { display: 'inline-block', border: '1px dashed var(--color-text-brand)', padding: '40px', background: 'var(--color-surface-default)' } },
          h('img', { src: 'marca/brand-dark.svg', alt: 'RU UFPE com área de proteção', style: { maxWidth: '280px' } })
        ),
        h('p', {}, 'Mínimo: altura da chama do brasão UFPE ao redor de todo o lockup.'),
      ),
    );
  },
};
