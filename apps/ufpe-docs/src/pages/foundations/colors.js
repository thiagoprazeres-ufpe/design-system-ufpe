import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@ufpe/tokens';

const cinzaRows = Object.entries(tokens.color.cinza).map(([k, v]) => ({
  name: `color.cinza.${k}`, value: v, css: `--color-cinza-${k}`, dtcg: `color.cinza.${k}`,
}));

const core = [
  { name: 'color.bordo',  value: tokens.color.bordo,  css: '--color-bordo',  dtcg: 'color.bordo',  description: 'Pantone 201C · CMYK 0/100/63/29' },
  { name: 'color.preto',  value: tokens.color.preto,  css: '--color-preto',  dtcg: 'color.preto',  description: 'Pantone Black' },
  { name: 'color.branco', value: tokens.color.branco, css: '--color-branco', dtcg: 'color.branco' },
];

const semantic = [
  { name: 'color.brand.primary',   value: tokens.color.brand.primary,   css: '--color-brand-primary',   dtcg: '→ color.bordo' },
  { name: 'color.brand.contrast',  value: tokens.color.brand.contrast,  css: '--color-brand-contrast',  dtcg: '→ color.branco' },
  { name: 'color.brand.ink',       value: tokens.color.brand.ink,       css: '--color-brand-ink',       dtcg: '→ color.preto' },
  { name: 'color.surface.default', value: tokens.color.surface.default, css: '--color-surface-default', dtcg: '→ color.branco' },
  { name: 'color.surface.muted',   value: tokens.color.surface.muted,   css: '--color-surface-muted',   dtcg: '→ color.cinza.k10' },
  { name: 'color.surface.inverse', value: tokens.color.surface.inverse, css: '--color-surface-inverse', dtcg: '→ color.preto' },
  { name: 'color.text.default',    value: tokens.color.text.default,    css: '--color-text-default',    dtcg: '→ color.preto' },
  { name: 'color.text.muted',      value: tokens.color.text.muted,      css: '--color-text-muted',      dtcg: '→ color.cinza.k60' },
  { name: 'color.text.brand',      value: tokens.color.text.brand,      css: '--color-text-brand',      dtcg: '→ color.bordo' },
  { name: 'color.border.default',  value: tokens.color.border.default,  css: '--color-border-default',  dtcg: '→ color.cinza.k10' },
  { name: 'color.border.strong',   value: tokens.color.border.strong,   css: '--color-border-strong',   dtcg: '→ color.cinza.k30' },
];

export const colorsPage = {
  label: 'Cores',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Cores',
        lede: 'Padrão cromático da UFPE — bordô e preto como cores institucionais, com escala de cinza derivada e aliases semânticos.',
        status: 'stable',
      }),
      h('section', {}, h('h2', {}, 'Core'), TokenTable({ rows: core, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Escala de cinza'), TokenTable({ rows: cinzaRows, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Semânticos (aliases)'), TokenTable({ rows: semantic, showSwatch: true })),
      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.card {\n  background: var(--color-surface-default);\n  color: var(--color-text-default);\n  border: 1px solid var(--color-border-default);\n}\n\n.card .title { color: var(--color-text-brand); }' }),
      ),
      h('section', {},
        h('h2', {}, 'No Penpot'),
        h('p', {}, 'Os tokens são sincronizados via plugin para a library ', h('code', {}, 'UFPE / Foundations'), ', visíveis no painel ', h('code', {}, 'Design tokens'), '.'),
      ),
    );
  },
};
