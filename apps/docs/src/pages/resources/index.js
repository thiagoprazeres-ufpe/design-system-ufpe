import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const DOWNLOADS = [
  ['Sigla — SVG (web)',     '/brasoes/sigla/sigla-rgb.svg',     'image/svg+xml'],
  ['Sigla — PDF',           '/brasoes/sigla/sigla-rgb.pdf',     'application/pdf'],
  ['Sigla — AI',            '/brasoes/sigla/sigla-rgb.ai',      'application/postscript'],
  ['Sigla — EPS',           '/brasoes/sigla/sigla-rgb.eps',     'application/postscript'],
  ['Sigla — PNG (colorida)', '/brasoes/sigla/sigla-rgb.png',     'image/png'],
  ['Sigla — PNG (preto)',   '/brasoes/sigla/sigla-preto.png',   'image/png'],
  ['Sigla — PNG (branco)',  '/brasoes/sigla/sigla-branco.png',  'image/png'],
  ['Extenso — SVG',         '/brasoes/extenso/extenso-rgb.svg', 'image/svg+xml'],
  ['Extenso — PDF',         '/brasoes/extenso/extenso-rgb.pdf', 'application/pdf'],
  ['Extenso — AI',          '/brasoes/extenso/extenso-rgb.ai',  'application/postscript'],
  ['Extenso — EPS',         '/brasoes/extenso/extenso-rgb.eps', 'application/postscript'],
  ['Extenso — PNG',         '/brasoes/extenso/extenso-rgb.png', 'image/png'],
  ['Extenso — PNG (preto)',  '/brasoes/extenso/extenso-preto.png', 'image/png'],
  ['Extenso — PNG (branco)', '/brasoes/extenso/extenso-branco.png', 'image/png'],
];

export const resourcesIndex = {
  label: 'Downloads',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Resources', title: 'Downloads e integrações',
        lede: 'Kit oficial UFPE, tokens DTCG, biblioteca Penpot e plugin de sincronização.',
      }),

      h('section', {},
        h('h2', {}, 'Kit oficial — brasões'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Arquivo'), h('th', {}, 'Caminho'))),
          h('tbody', {}, ...DOWNLOADS.map(([name, href]) =>
            h('tr', {}, h('td', {}, name), h('td', {}, h('a', { href, download: true }, h('code', {}, href))))
          )),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Design Tokens (W3C DTCG)'),
        h('p', {}, 'JSON canônico para importar no Penpot ou em qualquer ferramenta compatível com DTCG.'),
        h('p', {}, h('a', { href: '/tokens/tokens.penpot.json', download: true }, 'Baixar tokens.penpot.json ↗')),
        CodeBlock({ language: 'bash', code: 'pnpm add @ufpe/tokens\n# ou:\ncurl -O https://ufpe.github.io/design-system/tokens.penpot.json' }),
      ),

      h('section', {},
        h('h2', {}, 'Biblioteca Penpot'),
        h('p', {}, 'A library ', h('strong', {}, 'UFPE / Foundations'), ' é publicada em ',
          h('a', { href: 'https://design.penpot.app', target: '_blank' }, 'design.penpot.app'),
          ' (workspace UFPE) — disponível via ', h('code', {}, 'Assets → Libraries → +'), '.'),
        h('p', {}, 'Snapshot .penpot por release:'),
        h('ul', {},
          h('li', {}, h('a', { href: 'https://github.com/ufpe/design-system/releases', target: '_blank' }, 'GitHub Releases ↗')),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Plugin Penpot'),
        h('p', {}, h('code', {}, '@ufpe/penpot-plugin'), ' — sincroniza tokens DTCG entre Git e Penpot e oferece validações de uso da marca.'),
        h('p', {}, 'Instalação: no Penpot, ', h('code', {}, 'Menu → Plugins → Add plugin'), ' e cole:'),
        CodeBlock({ language: 'text', code: 'https://ufpe-design-system-plugin.pages.dev/manifest.json' }),
      ),

      h('section', {},
        h('h2', {}, 'Manual de Identidade Visual'),
        h('p', {}, 'O Manual de Identidade Visual da UFPE (58 páginas, PDF) é a fonte canônica. Solicite à Diretoria de Comunicação.'),
      ),
    );
  },
};
