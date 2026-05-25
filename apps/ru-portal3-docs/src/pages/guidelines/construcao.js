import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const construcao = {
  label: 'Construção',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Construção da marca RU',
        lede: 'O lockup oficial mantém proporção fixa entre brasão UFPE, símbolo "STi" e descrição textual.',
      }),
      h('section', {},
        h('h2', {}, 'Versão principal'),
        h('div', { style: { padding: 'var(--space-4)', background: 'var(--color-surface-muted)', borderRadius: '8px', textAlign: 'center' } },
          h('img', { src: 'marca/brand-dark.svg', alt: 'Construção RU', style: { maxWidth: '480px' } })),
        h('ul', {},
          h('li', {}, 'Brasão UFPE à esquerda — proporção e cores conforme Manual UFPE.'),
          h('li', {}, 'Símbolo "STi" estilizado à direita do brasão — S e T outline em bordô (#b30638); "i" em laranja (#f7941d).'),
          h('li', {}, 'Texto "SUPERINTENDÊNCIA DE TECNOLOGIA DA INFORMAÇÃO" ao lado do símbolo, alinhamento à esquerda.'),
          h('li', {}, 'Avatar/badge: variante compacta "STi" + retângulo "UFPE" abaixo.'),
        ),
      ),
    );
  },
};
