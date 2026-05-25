import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const ILLUSTRATIONS = [
  { id: 'frutas',         label: 'Frutas',         src: 'illustrations/frutas.svg' },
  { id: 'desserts',       label: 'Sobremesas',     src: 'illustrations/desserts.svg' },
  { id: 'cutlery-plates', label: 'Talheres e pratos', src: 'illustrations/cutlery-plates.svg' },
];

export const ilustracoesPage = {
  label: 'Ilustrações',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Ilustrações',
        lede: 'Ilustrações geométricas derivadas do mesmo vocabulário modular da marca. Usadas em cardápios, sinalização e categorias de refeição.',
        status: 'stable',
      }),

      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 'var(--ru-space-3)' } },
        ...ILLUSTRATIONS.map(i => h('div', {},
          h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)', padding: 'var(--ru-space-4)' } },
            h('img', { src: i.src, alt: i.label, style: { maxWidth: '180px', width: '100%' } })
          ),
          h('div', { style: { fontWeight: 'var(--ru-font-weight-semibold)', marginTop: 'var(--ru-space-1)' } }, i.label),
          h('code', { style: { fontSize: 'var(--ru-font-size-xs)', color: 'var(--ru-color-text-muted)' } }, i.src),
        ))
      ),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'html', code: '<img src="/illustrations/frutas.svg" alt="Frutas" class="categoria-icon" />\n<img src="/illustrations/desserts.svg" alt="Sobremesas" class="categoria-icon" />\n<img src="/illustrations/cutlery-plates.svg" alt="Almoço" class="categoria-icon" />' }),
      ),
    );
  },
};
