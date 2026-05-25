import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';
import { CodeBlock } from '../components/CodeBlock.js';

export const overview = {
  label: 'Overview',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'UFPE Design System',
        title: 'Bem-vindo',
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
        CodeBlock({ language: 'bash', code: 'pnpm add @ru/tokens' }),
        h('h3', {}, 'CSS direto'),
        CodeBlock({ language: 'css', code: "@import '@ru/tokens/css';\n\n.botao-ru {\n  background: var(--ru-color-primary);\n  color: var(--ru-color-primary-content);\n  font-family: var(--ru-font-family-ui);\n  padding: var(--ru-space-3) var(--ru-space-6);\n  border-radius: var(--ru-radius-md);\n}\n\n.cardapio-segunda { border-left: 4px solid var(--ru-color-day-segunda); }" }),
        h('h3', {}, 'JavaScript / ESM'),
        CodeBlock({ language: 'js', code: "import { tokens } from '@ru/tokens';\n\ntokens.ru.color.brand.amarelo;       // '#EEAB1E'\ntokens.ru.color.day.segunda;         // → amarelo\ntokens.ru.font.family.ui;            // 'Geist Variable, ...'" }),
      ),
      h('section', {},
        h('h2', {}, 'Stack'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Camada'), h('th', {}, 'Tecnologia'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, 'Implementação visual'), h('td', {}, h('a', { href: 'https://design.penpot.app', target: '_blank' }, 'Penpot'), ' (libraries + variants + design tokens nativos)')),
            h('tr', {}, h('td', {}, 'Tokens canônicos'),     h('td', {}, 'W3C Design Tokens Community Group (DTCG)')),
            h('tr', {}, h('td', {}, 'Build de tokens'),       h('td', {}, 'Script vanilla (', h('code', {}, 'packages/tokens/build.js'), ') — gera CSS / JS / TS / Penpot JSON')),
            h('tr', {}, h('td', {}, 'Sincronização'),         h('td', {}, h('code', {}, '@ru/penpot-plugin'), ' — push/pull bidirecional')),
            h('tr', {}, h('td', {}, 'Portal de docs'),        h('td', {}, 'Vite + ', h('code', {}, '@preact/signals-core'))),
            h('tr', {}, h('td', {}, 'CI / Releases'),         h('td', {}, 'GitHub Actions + Cloudflare Pages (plugin host)')),
          ),
        ),
      ),
    );
  },
};
