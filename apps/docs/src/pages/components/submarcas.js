import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const SUBMARCAS = [
  {
    id: 'sti',
    nome: 'STI · Superintendência de Tecnologia da Informação',
    sigla: 'STI',
    rgb: '/submarcas/sti/sti-rgb.svg',
    preto: '/submarcas/sti/sti-preto.svg',
    pdf: '/submarcas/sti/sti-aplicacoes.pdf',
    descricao: 'Marca da Superintendência de Tecnologia da Informação da UFPE. Composta pelo brasão UFPE + lockup STI (S em bordô, T em bordô, "i" em laranja).',
  },
];

export const submarcasPage = {
  label: 'Submarcas',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Submarcas',
        lede: 'Identidades visuais derivadas para programas, eventos ou projetos da Universidade — vinculadas à marca-mãe sem competir com ela.',
        status: 'beta',
      }),

      ...SUBMARCAS.map(sm => h('section', {},
        h('h2', {}, sm.nome),
        h('p', {}, sm.descricao),

        h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
          h('img', { src: sm.rgb, alt: sm.nome, style: { maxWidth: '480px', width: '100%', height: 'auto' } })
        ),

        h('h3', {}, 'Variantes'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 'var(--space-2)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: sm.rgb, alt: `${sm.sigla} colorida`, style: { maxWidth: '160px', height: 'auto' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-inverse)' } },
            h('img', { src: sm.preto, alt: `${sm.sigla} negativa`, style: { maxWidth: '160px', height: 'auto', filter: 'invert(1)' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: sm.preto, alt: `${sm.sigla} preto`, style: { maxWidth: '160px', height: 'auto' } })
          ),
        ),

        h('h3', {}, 'Downloads'),
        h('ul', {},
          h('li', {}, h('a', { href: sm.rgb,   download: true }, 'SVG colorida ↓')),
          h('li', {}, h('a', { href: sm.preto, download: true }, 'SVG monocromática ↓')),
          h('li', {}, h('a', { href: sm.pdf,   download: true }, 'PDF de aplicações ↓')),
        ),

        h('h3', {}, 'Uso'),
        CodeBlock({ language: 'html', code: `<img src="${sm.rgb}" alt="${sm.nome}" />` }),
      )),

      h('div', { class: 'callout' },
        h('p', {}, 'Novas submarcas devem ser aprovadas pela Diretoria de Comunicação. Solicite inclusão neste catálogo via MR no ',
          h('a', { href: 'https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe', target: '_blank' }, 'GitLab'),
          '.')),
    );
  },
};
