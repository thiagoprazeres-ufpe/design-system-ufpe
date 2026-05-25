import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const ROWS = [
  ['Símbolo', 'colorido', 'logo-sti-colorido'],
  ['Símbolo', 'preto',    'logo-sti-preto'],
  ['Símbolo', 'branco',   'logo-sti-branco'],
  ['Horizontal (c/ brasão UFPE)', 'colorido', 'logo-sti-colorido-horizontal'],
  ['Horizontal (c/ brasão UFPE)', 'preto',    'logo-sti-preto-horizontal'],
  ['Horizontal (c/ brasão UFPE)', 'branco',   'logo-sti-branco-horizontal'],
  ['Horizontal por extenso',      'colorido', 'logo-sti-colorido-horizontal-extenso'],
  ['Horizontal por extenso',      'preto',    'logo-sti-preto-horizontal-extenso'],
  ['Horizontal por extenso',      'branco',   'logo-sti-branco-horizontal-extenso'],
];

export const resourcesIndex = {
  label: 'Downloads',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Resources', title: 'Downloads e integrações',
        lede: 'Marca STI oficial em SVG + PNG, tokens DTCG, biblioteca Penpot e plugin de sincronização.',
      }),

      h('section', {},
        h('h2', {}, 'Marca STI — kit oficial'),
        h('table', {},
          h('thead', {}, h('tr', {},
            h('th', {}, 'Layout'), h('th', {}, 'Variante'),
            h('th', {}, 'SVG'),    h('th', {}, 'PNG'))),
          h('tbody', {}, ...ROWS.map(([layout, variante, name]) =>
            h('tr', {},
              h('td', {}, layout),
              h('td', {}, variante),
              h('td', {}, h('a', { href: `marca/${name}.svg`, download: true }, h('code', {}, `${name}.svg`))),
              h('td', {}, h('a', { href: `marca/${name}.png`, download: true }, h('code', {}, `${name}.png`))),
            )
          )),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Manual STI'),
        h('p', {}, h('a', { href: 'marca/sti-aplicacoes.pdf', target: '_blank' }, 'sti-aplicacoes.pdf ↗'),
          ' — Aplicações da Marca STI (14 páginas, versão compactada).'),
      ),

      h('section', {},
        h('h2', {}, 'Design Tokens (W3C DTCG)'),
        CodeBlock({ language: 'bash', code: 'pnpm add @sti-ufpe/tokens' }),
      ),

      h('section', {},
        h('h2', {}, 'Plugin Penpot'),
        h('p', {}, h('code', {}, '@sti-ufpe/penpot-plugin'), ' — sincroniza tokens DTCG entre Git e Penpot.'),
        h('p', {}, 'Instalação no Penpot: ', h('code', {}, 'Menu → Plugins → Add plugin'), ' e cole:'),
        CodeBlock({ language: 'text', code: 'https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/sti-ufpe/plugin/manifest.json' }),
      ),

      h('section', {},
        h('h2', {}, 'Marca-mãe UFPE'),
        h('p', {}, 'O design system institucional da UFPE está em ',
          h('a', { href: 'https://thiagoprazeres-ufpe.github.io/design-system-ufpe', target: '_blank' }, 'thiagoprazeres-ufpe.github.io/design-system-ufpe'),
          '. Inclui o brasão UFPE oficial usado nos lockups STI.'),
      ),
    );
  },
};
