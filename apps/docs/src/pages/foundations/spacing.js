import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { tokens } from '@ufpe/tokens';

const space = Object.entries(tokens.space).map(([k, v]) => ({
  name: `space.${k}`, value: v, css: `--space-${k}`, dtcg: `space.${k}`,
}));

const markRatios = [
  { name: 'mark.ratio.width',   value: tokens.mark.ratio.width,   css: '--mark-ratio-width',   dtcg: 'mark.ratio.width' },
  { name: 'mark.ratio.height',  value: tokens.mark.ratio.height,  css: '--mark-ratio-height',  dtcg: 'mark.ratio.height' },
  { name: 'mark.sigla.width',   value: tokens.mark.sigla.width,   css: '--mark-sigla-width',   dtcg: 'mark.sigla.width' },
  { name: 'mark.sigla.gap',     value: tokens.mark.sigla.gap,     css: '--mark-sigla-gap',     dtcg: 'mark.sigla.gap' },
  { name: 'mark.sigla.rule',    value: tokens.mark.sigla.rule,    css: '--mark-sigla-rule',    dtcg: 'mark.sigla.rule' },
  { name: 'mark.extenso.width', value: tokens.mark.extenso.width, css: '--mark-extenso-width', dtcg: 'mark.extenso.width' },
  { name: 'mark.extenso.gap',   value: tokens.mark.extenso.gap,   css: '--mark-extenso-gap',   dtcg: 'mark.extenso.gap' },
  { name: 'mark.extenso.rule',  value: tokens.mark.extenso.rule,  css: '--mark-extenso-rule',  dtcg: 'mark.extenso.rule' },
];

export const spacingPage = {
  label: 'Espaçamento',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Espaçamento',
        lede: 'Escala derivada da unidade x (largura do brasão, igual a 8px). Inclui as proporções da marca conforme Manual UFPE, pág. 08.',
        status: 'stable',
      }),
      h('section', {}, h('h2', {}, 'Escala'), TokenTable({ rows: space })),
      h('section', {},
        h('h2', {}, 'Visualização'),
        h('div', { style: { display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-end' } },
          ...Object.entries(tokens.space).filter(([k]) => !isNaN(+k)).map(([k, v]) =>
            h('div', { style: { textAlign: 'center', fontSize: 'var(--font-size-xs)' } },
              h('div', { style: { background: 'var(--color-brand-primary)', width: '40px', height: v } }),
              h('div', { style: { marginTop: '4px' } }, k),
              h('div', { style: { color: 'var(--color-text-muted)' } }, v),
            )
          )
        )
      ),
      h('section', {}, h('h2', {}, 'Proporções da marca'), TokenTable({ rows: markRatios })),
    );
  },
};
