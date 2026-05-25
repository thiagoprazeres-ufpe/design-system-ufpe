import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { publicAsset } from '../../utils/publicAsset.js';

const SUBMARCAS = [
  {
    nome: 'STI UFPE',
    eyebrow: 'Superintendência de Tecnologia da Informação',
    href: 'submarcas/sti-ufpe/',
    resourcesHref: 'submarcas/sti-ufpe/#resources',
    preview: 'submarcas/sti-ufpe/marca/logo-sti-colorido-horizontal-extenso.svg',
    bg: 'var(--color-surface-default)',
    descricao: 'Design system da STI UFPE, com marca, diretorias, avatares, tokens DTCG e plugin Penpot próprios.',
  },
  {
    nome: 'RU Portal3',
    eyebrow: 'Restaurante Universitário UFPE',
    href: 'submarcas/ru-portal3/',
    resourcesHref: 'submarcas/ru-portal3/#resources',
    preview: 'submarcas/ru-portal3/marca/brand-dark.svg',
    bg: '#f8f5ee',
    descricao: 'Design system do Portal RU3, com marca RU, ilustrações, mosaicos, padrões, tokens e plugin Penpot.',
  },
];

export const submarcasPage = {
  label: 'Submarcas',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Submarcas',
        lede: 'Identidades visuais derivadas para programas, eventos ou projetos da Universidade — vinculadas à marca-mãe.',
        status: 'stable',
      }),

      h('section', {},
        h('div', { class: 'subbrand-grid' },
          ...SUBMARCAS.map(sm => h('article', { class: 'subbrand-card' },
            h('a', { href: publicAsset(sm.href), class: 'subbrand-preview', style: { background: sm.bg } },
              h('img', { src: publicAsset(sm.preview), alt: sm.nome })
            ),
            h('div', { class: 'subbrand-meta' },
              h('div', { class: 'subbrand-eyebrow' }, sm.eyebrow),
              h('h2', {}, sm.nome),
              h('p', {}, sm.descricao),
              h('div', { class: 'subbrand-actions' },
                h('a', { href: publicAsset(sm.href) }, 'Abrir design system'),
                h('a', { href: publicAsset(sm.resourcesHref) }, 'Downloads'),
              )
            )
          ))
        ),
      ),

      h('div', { class: 'callout' },
        h('p', {}, 'Novas submarcas devem ser aprovadas pela Diretoria de Comunicação. Solicite inclusão neste catálogo via PR no ',
          h('a', { href: 'https://github.com/thiagoprazeres-ufpe/design-system-ufpe', target: '_blank' }, 'GitHub'),
          '.')),
    );
  },
};
