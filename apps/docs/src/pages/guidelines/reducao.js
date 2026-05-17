import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const reducao = {
  label: 'Redução mínima',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Redução mínima',
        lede: 'Tamanhos mínimos para preservar legibilidade em impressos.',
      }),
      h('section', {},
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Versão'), h('th', {}, 'Largura mínima'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, 'Sigla UFPE'),  h('td', {}, h('strong', {}, '2 cm'))),
            h('tr', {}, h('td', {}, 'Por extenso'), h('td', {}, h('strong', {}, '2,5 cm'))),
          ),
        )
      ),
    );
  },
};
