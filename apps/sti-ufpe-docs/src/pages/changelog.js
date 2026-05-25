import { h } from '../components/h.js';
import { PageHeader } from '../components/PageHeader.js';
import buildInfo from '../build-info.js';

const ENTRIES = [
  {
    version: '1.0.0',
    date: '2026-05-17',
    badge: 'release',
    notes: [
      ['feat', 'Marca STI publicada — lockup oficial (brasão UFPE + "STi" + descrição) em SVG/PNG colorido, preto e branco.'],
      ['feat', 'Paleta DTCG completa (62 tokens): 8 cores cromáticas, 7 diretorias + escala de cinza + semânticos.'],
      ['feat', 'Componente Avatares — preview SVG para diretorias (com badge UFPE) e coordenações (com cunha laranja).'],
      ['feat', 'Página Diretorias — grid com cor + token DTCG por unidade.'],
      ['feat', 'Portal de docs zeroheight-style (overview, foundations, components, guidelines, resources, changelog).'],
      ['feat', 'Plugin Penpot @sti-ufpe/penpot-plugin (push tokens DTCG).'],
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
