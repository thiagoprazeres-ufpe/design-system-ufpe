import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { TokenTable } from '../../components/TokenTable.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@sti-ufpe/tokens';

const sizes = Object.entries(tokens.font.size).map(([k, v]) => ({
  name: `font.size.${k}`, value: v, css: `--font-size-${k}`, dtcg: `font.size.${k}`,
}));
const weights = Object.entries(tokens.font.weight).map(([k, v]) => ({
  name: `font.weight.${k}`, value: v, css: `--font-weight-${k}`, dtcg: `font.weight.${k}`,
}));

export const typographyPage = {
  label: 'Tipografia',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Tipografia',
        lede: 'Trebuchet MS (Vincent Connare, Microsoft, 1996) é a fonte oficial. Versalete é usado em assinaturas institucionais por extenso.',
        status: 'stable',
      }),

      h('section', {},
        h('h2', {}, 'Família'),
        h('p', {}, 'Stack do sistema: ', h('code', {}, tokens.font.family.sans)),
        h('div', { style: { fontFamily: tokens.font.family.sans, fontSize: '48px', lineHeight: 1.1, color: 'var(--color-text-default)' } },
          'Aa Bb Cc — UFPE'),
      ),

      h('section', {},
        h('h2', {}, 'Variantes'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' } },
          h('div', {}, h('h3', {}, 'Normal'), h('p', {}, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789')),
          h('div', {}, h('h3', {}, 'Negrito'), h('p', { style: { fontWeight: 700 } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz')),
          h('div', {}, h('h3', {}, 'Itálico'), h('p', { style: { fontStyle: 'italic' } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz')),
          h('div', {}, h('h3', {}, 'Negrito + itálico'), h('p', { style: { fontWeight: 700, fontStyle: 'italic' } }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz')),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Versalete'),
        h('p', {}, 'Letras minúsculas representadas pelo desenho das maiúsculas em tamanho reduzido. Usado no nome ',
          h('em', {}, 'Universidade Federal de Pernambuco'), ' nas assinaturas institucionais.'),
        h('p', { class: 'versalete', style: { fontSize: '32px', fontWeight: 700 } },
          'Universidade Federal de Pernambuco'),
      ),

      h('section', {}, h('h2', {}, 'Tamanhos'), TokenTable({ rows: sizes })),
      h('section', {}, h('h2', {}, 'Pesos'),    TokenTable({ rows: weights })),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.titulo {\n  font-family: var(--font-family-sans);\n  font-weight: var(--font-weight-bold);\n  font-size: var(--font-size-xl);\n}\n\n.nome-instituicao {\n  font-variant-caps: small-caps;\n  text-transform: lowercase;\n  letter-spacing: 0.04em;\n}' }),
      ),

      h('section', {},
        h('h2', {}, 'Limitação cross-OS'),
        h('div', { class: 'callout' },
          h('p', {}, 'Trebuchet MS está presente em macOS e Windows mas pode não estar instalada em Linux. O fallback garante render consistente, com perda de fidelidade visual.'),
          h('p', {}, 'Para impressos oficiais, use o aplicativo de origem com a fonte instalada.')),
      ),
    );
  },
};
