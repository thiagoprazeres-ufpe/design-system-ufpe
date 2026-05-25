import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@ru/tokens';

const f = tokens.ru.font;
const sizes = Object.entries(f.size).map(([k, v]) => ({
  name: `ru.font.size.${k}`, value: v, css: `--ru-font-size-${k}`, dtcg: `ru.font.size.${k}`,
}));
const weights = Object.entries(f.weight).map(([k, v]) => ({
  name: `ru.font.weight.${k}`, value: v, css: `--ru-font-weight-${k}`, dtcg: `ru.font.weight.${k}`,
}));

export const typographyPage = {
  label: 'Tipografia',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Tipografia',
        lede: 'UI digital usa Geist Variable. Trebuchet MS é mantida apenas como referência para arte RU legada (peças impressas históricas).',
        status: 'stable',
      }),

      h('section', {},
        h('h2', {}, 'Família UI — Geist Variable'),
        h('p', {}, h('code', {}, f.family.ui)),
        h('div', { style: { fontFamily: f.family.ui, fontSize: '48px', lineHeight: 1.1, fontWeight: 600 } },
          'RU UFPE · Aa Bb Cc 123'),
      ),

      h('section', {},
        h('h2', {}, 'Arte legada — Trebuchet MS'),
        h('div', { class: 'callout' },
          h('p', { html: '<code>--ru-font-family-legacy-artwork</code> existe apenas para documentar peças impressas RU antigas. A UI digital nunca deve usar essa família.' })),
        h('div', { style: { fontFamily: f.family.legacyArtwork, fontSize: '32px', color: 'var(--ru-color-text-muted)' } },
          'Trebuchet MS — Aa Bb Cc'),
      ),

      h('section', {}, h('h2', {}, 'Tamanhos'), TokenTable({ rows: sizes })),
      h('section', {}, h('h2', {}, 'Pesos'),    TokenTable({ rows: weights })),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.titulo {\n  font-family: var(--ru-font-family-ui);\n  font-weight: var(--ru-font-weight-semibold);\n  font-size: var(--ru-font-size-3xl);\n  line-height: var(--ru-line-height-tight);\n}' }),
      ),
    );
  },
};
