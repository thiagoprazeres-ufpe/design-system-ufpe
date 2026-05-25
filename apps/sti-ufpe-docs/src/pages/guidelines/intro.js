import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';

export const guidelinesIntro = {
  label: 'Princípios',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Guidelines', title: 'Princípios de uso',
        lede: 'A marca UFPE não pode ser alterada ou redesenhada. Estes guidelines orientam aplicações corretas conforme Manual de Identidade Visual.',
      }),
      h('section', {},
        h('h2', {}, 'Fundamentos'),
        h('ul', {},
          h('li', {}, 'Use sempre as cores institucionais (bordô + preto) quando viável.'),
          h('li', {}, 'Em monocromia, preto é a única substituição aceitável.'),
          h('li', {}, 'Mantenha área de proteção e redução mínima.'),
          h('li', {}, 'Não distorça, espelhe, recolora ou separe elementos.'),
        ),
      ),
      h('section', {},
        h('h2', {}, 'Próximas páginas'),
        h('ol', {},
          h('li', {}, h('a', { href: '#guidelines/construcao' }, 'Construção da marca')),
          h('li', {}, h('a', { href: '#guidelines/area-protecao' }, 'Área de proteção')),
          h('li', {}, h('a', { href: '#guidelines/reducao' }, 'Redução mínima')),
          h('li', {}, h('a', { href: '#guidelines/usos-incorretos' }, 'Usos incorretos')),
        ),
      ),
    );
  },
};
