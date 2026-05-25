import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@ru/tokens';

const C = tokens.ru.color;

const brand = Object.entries(C.brand).map(([k, v]) => ({
  name: `ru.color.brand.${k}`, value: v,
  css: `--ru-color-brand-${k}`, dtcg: `ru.color.brand.${k}`,
}));

const surface = Object.entries(C.surface).map(([k, v]) => ({
  name: `ru.color.surface.${k}`, value: v,
  css: `--ru-color-surface-${k}`, dtcg: `ru.color.surface.${k}`,
}));

const text = Object.entries(C.text).map(([k, v]) => ({
  name: `ru.color.text.${k}`, value: v,
  css: `--ru-color-text-${k}`, dtcg: `ru.color.text.${k}`,
}));

const semantic = [
  ['primary', C.primary], ['secondary', C.secondary], ['accent', C.accent], ['neutral', C.neutral],
  ['success', C.success], ['warning', C.warning], ['error', C.error], ['info', C.info],
].map(([k, v]) => ({ name: `ru.color.${k}`, value: v, css: `--ru-color-${k}`, dtcg: `ru.color.${k}` }));

const dias = Object.entries(C.day).map(([k, v]) => ({
  name: `ru.color.day.${k}`, value: v,
  css: `--ru-color-day-${k}`, dtcg: `ru.color.day.${k}`,
}));

export const colorsPage = {
  label: 'Cores',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Cores',
        lede: '5 famílias cromáticas (amarelo, verde, azul, vermelho, cinza) × 3 tons + laranja de destaque. Cada cor carrega significado semântico ligado a refeições e ambientes.',
        status: 'stable',
      }),

      h('section', {}, h('h2', {}, 'Marca — paleta principal'), TokenTable({ rows: brand, showSwatch: true })),
      h('section', {},
        h('h2', {}, 'Aliases semânticos'),
        h('p', {}, 'Aliases para UI: ', h('code', {}, 'primary'), ', ', h('code', {}, 'secondary'), ', ', h('code', {}, 'accent'), ', estados (', h('code', {}, 'success/warning/error/info'), ').'),
        TokenTable({ rows: semantic, showSwatch: true }),
      ),
      h('section', {},
        h('h2', {}, 'Dias da semana'),
        h('p', {}, 'Cardápio é codificado por cor — uma por dia.'),
        TokenTable({ rows: dias, showSwatch: true }),
      ),
      h('section', {}, h('h2', {}, 'Superfícies'), TokenTable({ rows: surface, showSwatch: true })),
      h('section', {}, h('h2', {}, 'Texto'),       TokenTable({ rows: text, showSwatch: true })),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.botao-primary {\n  background: var(--ru-color-primary);\n  color: var(--ru-color-primary-content);\n}\n\n.dia-segunda { border-color: var(--ru-color-day-segunda); }\n.dia-terca   { border-color: var(--ru-color-day-terca); }' }),
      ),
    );
  },
};
