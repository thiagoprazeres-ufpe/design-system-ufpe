import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';
import buildInfo from '../build-info.js';

// Entradas mais novas no topo. Quando taggear v*, adicione aqui.
const ENTRIES = [
  {
    version: '1.0.0',
    date: '2026-05-17',
    badge: 'release',
    notes: [
      ['feat', 'Submarca STI publicada (SVG colorida + monocromática + PDF de aplicações).'],
      ['feat', 'Footer do menu com versão + SHA + link para GitLab (commit/tag).'],
      ['feat', 'Plugin Penpot UFPE no ar — push tokens DTCG via UI nativa do Penpot.'],
      ['feat', 'Deploy contínuo Cloudflare Pages para docs + plugin.'],
      ['feat', 'Pipeline GitLab CI (build / deploy / release).'],
      ['fix',  'Brasão branco no header (contraste WCAG AA sobre fundo bordô).'],
      ['fix',  '"Bem-vinde" → "Bem-vindo" (Decreto 11.469/2023).'],
      ['chore','PDF do Manual removido do repo (era 19MB); Git LFS retido só p/ *.penpot.'],
    ],
  },
  {
    version: '0.5.0',
    date: '2026-05-17',
    notes: [
      ['feat', 'Portal de docs estilo zeroheight — overview, foundations, components, guidelines, resources.'],
      ['feat', 'Componentes <CodeBlock>, <TokenTable>, <PenpotEmbed>, <DocsLogoPreview>.'],
      ['feat', 'Showcase legacy substituído por monorepo pnpm (packages/ + apps/).'],
    ],
  },
  {
    version: '0.4.0',
    date: '2026-05-17',
    notes: [
      ['feat', 'packages/tokens canônico em W3C DTCG (52 tokens).'],
      ['feat', 'Build vanilla → CSS / JS / TS / Penpot JSON.'],
      ['feat', 'Aliases semânticos: brand, surface, text, border.'],
    ],
  },
  {
    version: '0.3.0',
    date: '2026-05-17',
    notes: [
      ['feat', 'Kit oficial UFPE em public/brasoes/ (sigla + extenso × rgb/preto/branco).'],
      ['feat', 'Build automático SVG via pdftocairo.'],
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
