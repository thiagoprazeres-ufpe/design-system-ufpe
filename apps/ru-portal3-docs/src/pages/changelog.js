import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';
import buildInfo from '../build-info.js';

const ENTRIES = [
  {
    version: '1.0.1',
    date: '2026-05-18',
    notes: [
      ['fix',  'Página Logo agora usa SVGs oficiais RU (brand-*.svg) em vez de logo-sti-* leftover.'],
      ['fix',  'Guidelines (construção, área de proteção, usos incorretos): referências sti-rgb.svg → brand-dark.svg.'],
      ['fix',  'Resources: tabela de downloads reescrita para a marca RU (logo + ilustrações + padrões).'],
      ['fix',  'Foundations (colors/typography/spacing): consumindo tokens.ru.* corretamente (tela em branco resolvida).'],
    ],
  },
  {
    version: '1.0.0',
    date: '2026-05-17',
    badge: 'release',
    notes: [
      ['feat', 'Marca RU publicada — 6 variantes SVG (horizontal escuro/claro, vertical, institucional UFPE+RU, mono horizontal/vertical).'],
      ['feat', 'Tokens DTCG (88 tokens): 5 famílias × 3 tons + laranja accent + semânticos + cores por dia da semana.'],
      ['feat', 'Ilustrações modulares: frutas, sobremesas, talheres e pratos.'],
      ['feat', 'Padrões: mosaico canônico + faixa de marca.'],
      ['feat', 'Portal de docs zeroheight-style (overview, foundations, components, guidelines, resources, changelog).'],
      ['feat', 'Plugin Penpot @ru/penpot-plugin (push tokens DTCG).'],
      ['feat', 'Deploy Cloudflare Pages: docs + plugin.'],
      ['feat', 'GitHub Actions (build → deploy → release on tag).'],
      ['feat', 'Footer com versão + SHA + link clicável para commit/tag no GitHub.'],
    ],
  },
];

const TYPE_COLORS = {
  feat:  '#2da44e',
  fix:   '#bf3989',
  chore: '#6e7781',
  docs:  '#0969da',
};

export const changelog = {
  label: 'Changelog',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Resources', title: 'Changelog',
        lede: 'Histórico de mudanças por release. Build atual: ' +
              (buildInfo.tag || `v${buildInfo.version}`) + ` (${buildInfo.sha}).`,
      }),
      ...ENTRIES.map(e => h('section', {},
        h('h2', { style: { display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap' } },
          h('span', {}, `v${e.version}`),
          h('span', { style: { fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', fontWeight: 'normal' } }, e.date),
          e.badge ? h('span', { class: 'tag stable' }, e.badge) : null,
        ),
        h('ul', { style: { listStyle: 'none', padding: 0 } },
          ...e.notes.map(([type, text]) => h('li', { style: { display: 'flex', gap: '12px', alignItems: 'baseline', padding: '4px 0' } },
            h('span', {
              style: {
                background: TYPE_COLORS[type] || '#6e7781', color: '#fff',
                padding: '1px 8px', borderRadius: '999px',
                fontSize: 'var(--font-size-xs)', fontWeight: 'bold',
                minWidth: '48px', textAlign: 'center', flexShrink: 0,
              }
            }, type),
            h('span', {}, text),
          ))
        )
      )),
      h('div', { class: 'callout' },
        h('p', {}, 'Compare commits no GitHub: ',
          h('a', { href: `${buildInfo.repo}/commits/master`, target: '_blank', rel: 'noopener' }, 'github.com ↗'))),
    );
  },
};
