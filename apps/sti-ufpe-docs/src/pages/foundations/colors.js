import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@sti-ufpe/tokens';

const core = [
  { name: 'color.bordo',     value: tokens.color.bordo,     css: '--color-bordo',     dtcg: 'color.bordo',     description: 'C0 M100 Y30 K10 · primária STI' },
  { name: 'color.laranja',   value: tokens.color.laranja,   css: '--color-laranja',   dtcg: 'color.laranja',   description: 'C0 M50 Y100 K0 · accent (T do lockup STI)' },
  { name: 'color.vermelho',  value: tokens.color.vermelho,  css: '--color-vermelho',  dtcg: 'color.vermelho',  description: 'C0 M80 Y95 K0 · laranja-vermelho' },
  { name: 'color.berinjela', value: tokens.color.berinjela, css: '--color-berinjela', dtcg: 'color.berinjela', description: 'C50 M100 Y30 K10' },
  { name: 'color.roxo',      value: tokens.color.roxo,      css: '--color-roxo',      dtcg: 'color.roxo',      description: 'C75 M100 Y0 K0' },
  { name: 'color.azul',      value: tokens.color.azul,      css: '--color-azul',      dtcg: 'color.azul',      description: 'C80 M50 Y0 K0' },
  { name: 'color.verde',     value: tokens.color.verde,     css: '--color-verde',     dtcg: 'color.verde',     description: 'C73 M0 Y49 K5 · verde-água' },
  { name: 'color.preto',     value: tokens.color.preto,     css: '--color-preto',     dtcg: 'color.preto',     description: 'C0 M11 Y11 K86 · não 100% K' },
  { name: 'color.branco',    value: tokens.color.branco,    css: '--color-branco',    dtcg: 'color.branco' },
];

const cinzaRows = Object.entries(tokens.color.cinza).map(([k, v]) => ({
  name: `color.cinza.${k}`, value: v, css: `--color-cinza-${k}`, dtcg: `color.cinza.${k}`,
}));

const semantic = [
  { name: 'color.brand.primary',   value: tokens.color.brand.primary,   css: '--color-brand-primary',   dtcg: '→ color.bordo' },
  { name: 'color.brand.accent',    value: tokens.color.brand.accent,    css: '--color-brand-accent',    dtcg: '→ color.laranja' },
  { name: 'color.brand.contrast',  value: tokens.color.brand.contrast,  css: '--color-brand-contrast',  dtcg: '→ color.branco' },
  { name: 'color.brand.ink',       value: tokens.color.brand.ink,       css: '--color-brand-ink',       dtcg: '→ color.preto' },
  { name: 'color.surface.default', value: tokens.color.surface.default, css: '--color-surface-default', dtcg: '→ color.branco' },
  { name: 'color.surface.muted',   value: tokens.color.surface.muted,   css: '--color-surface-muted',   dtcg: '→ color.cinza.k10' },
  { name: 'color.surface.inverse', value: tokens.color.surface.inverse, css: '--color-surface-inverse', dtcg: '→ color.preto' },
  { name: 'color.text.default',    value: tokens.color.text.default,    css: '--color-text-default',    dtcg: '→ color.preto' },
  { name: 'color.text.muted',      value: tokens.color.text.muted,      css: '--color-text-muted',      dtcg: '→ color.cinza.k50' },
  { name: 'color.text.brand',      value: tokens.color.text.brand,      css: '--color-text-brand',      dtcg: '→ color.bordo' },
  { name: 'color.border.default',  value: tokens.color.border.default,  css: '--color-border-default',  dtcg: '→ color.cinza.k10' },
  { name: 'color.border.strong',   value: tokens.color.border.strong,   css: '--color-border-strong',   dtcg: '→ color.cinza.k30' },
];

const diretoria = Object.entries(tokens.color.diretoria).map(([k, v]) => ({
  name: `color.diretoria.${k}`, value: v, css: `--color-diretoria-${k}`, dtcg: `color.diretoria.${k}`,
}));

export const colorsPage = {
  label: 'Cores',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Cores',
        lede: 'Paleta oficial STI UFPE com 8 cores cromáticas. Bordô é a cor primária; laranja é o destaque do lockup; as demais identificam as diretorias.',
        status: 'stable',
      }),
      h('section', {}, h('h2', {}, 'Paleta principal'), TokenTable({ rows: core, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Diretorias'),
        h('p', {}, 'Cada diretoria STI possui uma cor identificadora — usada em avatares circulares de redes sociais e materiais segmentados.'),
        TokenTable({ rows: diretoria, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Escala de cinza'), TokenTable({ rows: cinzaRows, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Semânticos (aliases)'), TokenTable({ rows: semantic, showSwatch: true })),
      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.card-sti {\n  background: var(--color-surface-default);\n  border-top: 4px solid var(--color-brand-primary);\n}\n.card-sti .badge {\n  background: var(--color-brand-accent);\n  color: var(--color-brand-ink);\n}' }),
      ),
      h('section', {},
        h('h2', {}, 'No Penpot'),
        h('p', {}, 'Os tokens são sincronizados via plugin para a library ', h('code', {}, 'STI UFPE / Foundations'), ', visíveis no painel ', h('code', {}, 'Design tokens'), '.'),
      ),
    );
  },
};
