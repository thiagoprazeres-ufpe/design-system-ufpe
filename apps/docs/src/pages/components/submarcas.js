import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const SUBMARCAS = [
  {
    id: 'sti',
    nome: 'STI · Superintendência de Tecnologia da Informação',
    sigla: 'STI',
    site: 'https://sti-ufpe-design-system.pages.dev',
    base: '/submarcas/sti',
    layouts: [
      { id: 'colorido-horizontal-extenso', label: 'Horizontal · extenso · colorido', max: 480, bg: 'default' },
      { id: 'preto-horizontal-extenso',    label: 'Horizontal · extenso · preto',    max: 480, bg: 'default' },
      { id: 'branco-horizontal-extenso',   label: 'Horizontal · extenso · branco',   max: 480, bg: 'inverse' },
      { id: 'colorido-horizontal',         label: 'Horizontal · colorido',           max: 320, bg: 'default' },
      { id: 'preto-horizontal',            label: 'Horizontal · preto',              max: 320, bg: 'default' },
      { id: 'branco-horizontal',           label: 'Horizontal · branco',             max: 320, bg: 'inverse' },
      { id: 'colorido',                    label: 'Símbolo · colorido',              max: 120, bg: 'default' },
      { id: 'preto',                       label: 'Símbolo · preto',                 max: 120, bg: 'default' },
      { id: 'branco',                      label: 'Símbolo · branco',                max: 120, bg: 'inverse' },
    ],
    descricao: 'Marca da Superintendência de Tecnologia da Informação. Lockup oficial: brasão UFPE + símbolo "STi" (S e T em bordô #b30638, "i" em laranja #f7941d). Sempre acompanhada do brasão UFPE em aplicações institucionais.',
  },
];

const bgFor = (k) => k === 'inverse' ? 'var(--color-surface-inverse)' : 'var(--color-surface-default)';

export const submarcasPage = {
  label: 'Submarcas',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Submarcas',
        lede: 'Identidades visuais derivadas para programas, eventos ou projetos da Universidade — vinculadas à marca-mãe.',
        status: 'stable',
      }),

      ...SUBMARCAS.map(sm => h('section', {},
        h('h2', {}, sm.nome),
        h('p', {}, sm.descricao),
        h('p', {}, h('strong', {}, 'Design system completo: '),
          h('a', { href: sm.site, target: '_blank' }, sm.site, ' ↗')),

        h('h3', {}, 'Layouts e variantes'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'var(--space-2)' } },
          ...sm.layouts.map(l => h('div', {},
            h('div', { class: 'preview-box', style: { background: bgFor(l.bg) } },
              h('img', { src: `${sm.base}/logo-${sm.id}-${l.id}.svg`, alt: l.label, style: { maxWidth: `${l.max}px`, width: '100%', height: 'auto' } })
            ),
            h('div', { style: { fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '4px' } }, l.label),
          ))
        ),

        h('h3', {}, 'Uso'),
        CodeBlock({ language: 'html', code: `<!-- símbolo isolado -->\n<img src="${sm.base}/logo-${sm.id}-colorido.svg" alt="${sm.sigla}" />\n\n<!-- com brasão UFPE (padrão) -->\n<img src="${sm.base}/logo-${sm.id}-colorido-horizontal.svg" alt="${sm.sigla} · UFPE" />\n\n<!-- com nome por extenso (formal) -->\n<img src="${sm.base}/logo-${sm.id}-colorido-horizontal-extenso.svg" alt="${sm.nome}" />` }),

        h('h3', {}, 'Downloads'),
        h('p', {}, 'Todos os layouts × variantes em SVG e PNG no portal STI: ',
          h('a', { href: `${sm.site}/#resources`, target: '_blank' }, 'Resources ↗')),
      )),

      h('div', { class: 'callout' },
        h('p', {}, 'Novas submarcas devem ser aprovadas pela Diretoria de Comunicação. Solicite inclusão neste catálogo via MR no ',
          h('a', { href: 'https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe', target: '_blank' }, 'GitLab'),
          '.')),
    );
  },
};
