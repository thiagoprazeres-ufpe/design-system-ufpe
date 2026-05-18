import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const areaProtecao = {
  label: 'Área de proteção',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Área de proteção',
        lede: 'Espaço livre ao redor da marca baseado na altura da chama do brasão. Mantenha em todos os momentos.',
      }),
      h('section', {},
        h('div', { style: { display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' } },
          ['sigla', 'extenso'].map(v =>
            h('div', { style: { textAlign: 'center' } },
              h('div', { style: { border: '1px dashed var(--color-text-brand)', padding: '30px', display: 'inline-block' } },
                h('img', { src: `brasoes/${v}/${v}-rgb.svg`, alt: '', style: { width: '160px' } })
              ),
              h('div', { style: { fontSize: 'var(--font-size-xs)', marginTop: '8px' } }, v)
            )
          )
        ),
      ),
    );
  },
};
