import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const LOGOS = [
  ['Horizontal (escuro)',      '/marca/brand-dark.svg'],
  ['Horizontal (claro)',       '/marca/brand-light.svg'],
  ['Vertical',                  '/marca/logo-ru-vertical.svg'],
  ['Institucional UFPE+RU',    '/marca/ru-ufpe.svg'],
  ['Mono horizontal (claro)',   '/marca/logo-monochrome-horizontal-light.svg'],
  ['Mono vertical (claro)',     '/marca/logo-monochrome-vertical-light.svg'],
];

const ILLUSTRATIONS = [
  ['Frutas',              '/illustrations/frutas.svg'],
  ['Sobremesas',          '/illustrations/desserts.svg'],
  ['Talheres e pratos',   '/illustrations/cutlery-plates.svg'],
];

const PATTERNS = [
  ['Mosaico canônico',    '/patterns/mosaic.svg'],
  ['Faixa de marca',      '/patterns/ru-brand-strip.svg'],
];

export const resourcesIndex = {
  label: 'Downloads',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Resources', title: 'Downloads e integrações',
        lede: 'Marca RU em SVG, ilustrações geométricas, padrões mosaico e tokens DTCG canônicos.',
      }),

      h('section', {},
        h('h2', {}, 'Logo RU'),
        h('table', {}, h('thead', {}, h('tr', {}, h('th', {}, 'Variante'), h('th', {}, 'SVG'))),
          h('tbody', {}, ...LOGOS.map(([n, p]) =>
            h('tr', {}, h('td', {}, n), h('td', {}, h('a', { href: p, download: true }, h('code', {}, p))))))),
      ),

      h('section', {},
        h('h2', {}, 'Ilustrações'),
        h('table', {}, h('thead', {}, h('tr', {}, h('th', {}, 'Tema'), h('th', {}, 'SVG'))),
          h('tbody', {}, ...ILLUSTRATIONS.map(([n, p]) =>
            h('tr', {}, h('td', {}, n), h('td', {}, h('a', { href: p, download: true }, h('code', {}, p))))))),
      ),

      h('section', {},
        h('h2', {}, 'Padrões'),
        h('table', {}, h('thead', {}, h('tr', {}, h('th', {}, 'Tipo'), h('th', {}, 'SVG'))),
          h('tbody', {}, ...PATTERNS.map(([n, p]) =>
            h('tr', {}, h('td', {}, n), h('td', {}, h('a', { href: p, download: true }, h('code', {}, p))))))),
      ),

      h('section', {},
        h('h2', {}, 'Design Tokens (W3C DTCG)'),
        h('p', {}, 'Pacote npm com tokens canônicos:'),
        CodeBlock({ language: 'bash', code: 'pnpm add @ru/tokens' }),
        h('p', {}, 'Ou via fonte canonical do tema:'),
        CodeBlock({ language: 'text', code: 'wp-content/themes/ru-ufpe-theme/design-system/tokens/ru.tokens.json' }),
      ),

      h('section', {},
        h('h2', {}, 'Plugin Penpot'),
        h('p', {}, h('code', {}, '@ru/penpot-plugin'), ' — sincroniza tokens DTCG entre Git e Penpot.'),
        h('p', {}, 'Instalação no Penpot: ', h('code', {}, 'Menu → Plugins → Add plugin'), ' e cole:'),
        CodeBlock({ language: 'text', code: 'https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/ru-portal3/plugin/manifest.json' }),
      ),

      h('section', {},
        h('h2', {}, 'Portal RU3 (produção)'),
        h('p', {}, 'O tema WordPress que consome este design system: ',
          h('a', { href: 'https://ru.ufpe.br', target: '_blank' }, 'ru.ufpe.br ↗')),
      ),

      h('section', {},
        h('h2', {}, 'Marca-mãe UFPE'),
        h('p', {}, 'O design system institucional da UFPE está em ',
          h('a', { href: 'https://thiagoprazeres-ufpe.github.io/design-system-ufpe', target: '_blank' }, 'thiagoprazeres-ufpe.github.io/design-system-ufpe'),
          '.'),
      ),
    );
  },
};
