import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { publicAsset } from '../../utils/publicAsset.js';

const RULES = [
  'Não utilizar a marca sem a sigla ou sem o texto por extenso',
  'Não distorcer a altura',
  'Não distorcer a largura',
  'Não inclinar',
  'Não alterar o tamanho do texto',
  'Não alterar o tamanho do Brasão',
  'Não utilizar tipografia diferente da institucional',
  'Não alterar as cores dos elementos nem da tipografia',
  'Não espelhar os elementos',
  'Não alterar a posição dos elementos',
  'Não utilizar efeito de marca d’água',
  'Não utilizar o texto sem o Brasão',
  'Não utilizar elementos da marca separados',
];

export const usosIncorretos = {
  label: 'Usos incorretos',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Usos incorretos',
        lede: 'A marca não pode ser alterada ou redesenhada para se adequar a uma aplicação. Não são permitidas modificações em cores, tamanho, elementos ou linhas.',
      }),
      h('div', { class: 'dont-grid' },
        ...RULES.map((rule, i) => h('div', { class: 'dont-card' },
          h('div', { style: { position: 'relative', textAlign: 'center' } },
            h('img', { src: publicAsset('brasoes/sigla/sigla-rgb.svg'), style: { width: '100%', maxWidth: '120px', opacity: 0.5 } }),
            h('div', { html: `
              <svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%">
                <line x1="10" y1="10" x2="90" y2="90" stroke="#999" stroke-width="3"/>
                <line x1="90" y1="10" x2="10" y2="90" stroke="#999" stroke-width="3"/>
              </svg>` })
          ),
          h('div', { class: 'label' }, `${i + 1}. ${rule}`),
        ))
      ),
    );
  },
};
