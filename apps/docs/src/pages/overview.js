import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';
import { CodeBlock } from '../components/CodeBlock.js';

export const overview = {
  label: 'Overview',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'UFPE Design System',
        title: 'Bem-vinde',
        lede: 'Design system da Universidade Federal de Pernambuco. Implementação no Penpot, tokens W3C DTCG versionados em Git, portal de docs vivo.',
      }),
      h('section', {},
        h('h2', {}, 'Princípios'),
        h('ol', {},
          h('li', { html: '<strong>Penpot é a implementação.</strong> Components, variants e styles são autorados no Penpot e consumidos via Shared Library.' }),
          h('li', { html: '<strong>Tokens vivem em Git.</strong> JSON DTCG é a fonte canônica; sincronizado com Penpot via plugin.' }),
          h('li', { html: '<strong>Fidelidade ao Manual de Identidade Visual</strong> da UFPE — tipografia, padrão cromático, proporções.' }),
          h('li', { html: '<strong>Uso exclusivo</strong> a membros da Universidade.' }),
        ),
      ),
      h('section', {},
        h('h2', {}, 'Instalação'),
        h('h3', {}, 'No Penpot'),
        h('p', {}, 'No seu arquivo Penpot, abra ',
          h('code', {}, 'Assets'), ' → ', h('code', {}, 'Libraries'),
          ' → ', h('code', {}, '+'), ' e adicione a biblioteca ',
          h('strong', {}, 'UFPE / Foundations'), ' (e demais por escopo).'
        ),
        h('h3', {}, 'Tokens via npm'),
        CodeBlock({ language: 'bash', code: 'pnpm add @ufpe/tokens' }),
        h('h3', {}, 'CSS direto'),
        CodeBlock({ language: 'css', code: "@import '@ufpe/tokens/css';\n\n.botao {\n  background: var(--color-brand-primary);\n  color: var(--color-brand-contrast);\n  padding: var(--space-2) var(--space-3);\n  font-family: var(--font-family-sans);\n}" }),
        h('h3', {}, 'JavaScript / ESM'),
        CodeBlock({ language: 'js', code: "import { tokens } from '@ufpe/tokens';\n\ntokens.color.brand.primary; // '#990000'\ntokens.mark.ratio.height;   // 1.5" }),
      ),
      h('section', {},
        h('h2', {}, 'Stack'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Camada'), h('th', {}, 'Tecnologia'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, 'Implementação visual'), h('td', {}, h('a', { href: 'https://design.penpot.app', target: '_blank' }, 'Penpot'), ' (libraries + variants + design tokens nativos)')),
            h('tr', {}, h('td', {}, 'Tokens canônicos'),     h('td', {}, 'W3C Design Tokens Community Group (DTCG)')),
            h('tr', {}, h('td', {}, 'Build de tokens'),       h('td', {}, 'Script vanilla (', h('code', {}, 'packages/tokens/build.js'), ') — gera CSS / JS / TS / Penpot JSON')),
            h('tr', {}, h('td', {}, 'Sincronização'),         h('td', {}, h('code', {}, '@ufpe/penpot-plugin'), ' — push/pull bidirecional')),
            h('tr', {}, h('td', {}, 'Portal de docs'),        h('td', {}, 'Vite + ', h('code', {}, '@preact/signals-core'))),
            h('tr', {}, h('td', {}, 'CI / Releases'),         h('td', {}, 'GitHub Actions + Cloudflare Pages (plugin host)')),
          ),
        ),
      ),
    );
  },
};
