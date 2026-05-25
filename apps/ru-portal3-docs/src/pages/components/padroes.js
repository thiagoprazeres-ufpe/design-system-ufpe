import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

export const padroesPage = {
  label: 'Padrões / Mosaicos',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Padrões e mosaicos',
        lede: 'Mosaicos geométricos que compõem fundos, headers, sinalização interna e elementos decorativos.',
        status: 'stable',
      }),

      h('section', {},
        h('h2', {}, 'Mosaico canônico'),
        h('div', { class: 'preview-box', style: { padding: 0, background: 'transparent', overflow: 'hidden' } },
          h('img', { src: 'patterns/mosaic.svg', alt: 'Mosaico RU', style: { maxWidth: '100%', width: '100%' } })
        ),
        h('p', {}, 'Composição original da identidade visual — base para todas as variações de fundos e ilustrações.'),
      ),

      h('section', {},
        h('h2', {}, 'Faixa de marca'),
        h('div', { class: 'preview-box', style: { padding: 0, background: 'transparent', overflow: 'hidden' } },
          h('img', { src: 'patterns/ru-brand-strip.svg', alt: 'Faixa RU', style: { maxWidth: '100%', width: '100%' } })
        ),
        h('p', {}, 'Faixa horizontal — ideal para headers e elementos lineares (sinalização externa, footers).'),
      ),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'css', code: '.header-ru {\n  background: url("patterns/ru-brand-strip.svg") repeat-x bottom / auto 8px,\n              var(--ru-color-surface-raised);\n}\n\n.hero-decorativo {\n  background: url("patterns/mosaic.svg") center / cover;\n}' }),
      ),

      h('div', { class: 'callout' },
        h('p', {}, 'Mosaicos podem ser monocromatizados em uma única família cromática para criar variações (ex: ',
          h('code', {}, 'all colors → vermelho-claro/escuro'),
          ') — útil para categorizações como dias da semana.')),
    );
  },
};
