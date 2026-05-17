import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';

export const changelog = {
  label: 'Changelog',
  render(root) {
    root.append(
      PageHeader({ eyebrow: 'Resources', title: 'Changelog' }),
      h('section', {},
        h('h2', {}, 'v0.5.0 — Portal de docs'),
        h('ul', {},
          h('li', {}, 'Monorepo pnpm (', h('code', {}, 'packages/'), ', ', h('code', {}, 'apps/'), ').'),
          h('li', {}, 'Portal de docs zeroheight-style substitui o showcase.'),
          h('li', {}, 'Componentes: ', h('code', {}, 'CodeBlock'), ', ', h('code', {}, 'TokenTable'), ', ', h('code', {}, 'PenpotEmbed'), ', ', h('code', {}, 'DocsLogoPreview'), '.'),
        ),
        h('h2', {}, 'v0.4.0 — Tokens DTCG'),
        h('ul', {},
          h('li', {}, h('code', {}, 'packages/tokens'), ' canônico em W3C DTCG.'),
          h('li', {}, 'Build próprio gera CSS / JS / TS / Penpot JSON.'),
          h('li', {}, 'Semânticos: brand, surface, text, border.'),
        ),
        h('h2', {}, 'v0.3.0 — Kit oficial UFPE'),
        h('ul', {},
          h('li', {}, 'Brasões oficiais em ', h('code', {}, 'public/brasoes/'), ' (sigla + extenso × rgb/preto/branco).'),
          h('li', {}, 'Build automático SVG via ', h('code', {}, 'pdftocairo'), '.'),
        ),
      ),
    );
  },
};
