import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { DocsLogoPreview } from '../../components/DocsLogoPreview.js';
import { PenpotEmbed } from '../../components/PenpotEmbed.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const PENPOT_URL = null; // preenchido em v0.7+

export const logoPage = {
  label: 'Logo',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Logo',
        lede: 'Marca UFPE — brasão histórico com leão do norte, três chamas (pesquisa, ensino, extensão) e listel com lema VIRTUS IMPAVIDA.',
        status: 'beta',
        penpotUrl: PENPOT_URL,
      }),

      h('section', {},
        h('h2', {}, 'Preview'),
        PenpotEmbed({ url: PENPOT_URL, label: 'Abrir Logo no Penpot' }),
      ),

      h('section', {},
        h('h2', {}, 'Variants'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Prop'), h('th', {}, 'Valores'), h('th', {}, 'Descrição'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, h('code', {}, 'variant')), h('td', {}, h('code', {}, 'sigla'), ' | ', h('code', {}, 'extenso')), h('td', {}, 'Versão principal (sigla UFPE) ou secundária (nome por extenso).')),
            h('tr', {}, h('td', {}, h('code', {}, 'color')),   h('td', {}, h('code', {}, 'rgb'), ' | ', h('code', {}, 'preto'), ' | ', h('code', {}, 'branco')), h('td', {}, 'Cores institucionais (bordô+preto), monocromático preto, ou negativo branco.')),
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Combinações'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 'var(--space-2)' } },
          ['sigla', 'extenso'].flatMap(v => ['rgb', 'preto', 'branco'].map(c =>
            h('div', {},
              DocsLogoPreview({ variant: v, color: c, size: 120, bg: c === 'branco' ? 'var(--color-surface-inverse)' : undefined }),
              h('div', { style: { fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '4px' } }, `${v} · ${c}`),
            )
          ))
        ),
      ),

      h('section', {},
        h('h2', {}, 'Uso direto (assets)'),
        CodeBlock({ language: 'html', code: '<img src="/brasoes/sigla/sigla-rgb.svg" alt="UFPE" />\n<img src="/brasoes/extenso/extenso-rgb.svg" alt="Universidade Federal de Pernambuco" />' }),
      ),

      h('section', {},
        h('h2', {}, 'Formatos disponíveis'),
        h('table', {},
          h('thead', {}, h('tr', {}, h('th', {}, 'Formato'), h('th', {}, 'Uso'))),
          h('tbody', {},
            h('tr', {}, h('td', {}, h('code', {}, '.svg')), h('td', {}, 'Web (vetorial, gerado de PDF via pdftocairo)')),
            h('tr', {}, h('td', {}, h('code', {}, '.pdf')), h('td', {}, 'Distribuição multiplataforma')),
            h('tr', {}, h('td', {}, h('code', {}, '.ai')),  h('td', {}, 'Adobe Illustrator (edição)')),
            h('tr', {}, h('td', {}, h('code', {}, '.eps')), h('td', {}, 'Impressão profissional')),
            h('tr', {}, h('td', {}, h('code', {}, '.png/.jpg')), h('td', {}, 'Raster colorido')),
            h('tr', {}, h('td', {}, h('code', {}, '*-preto.png / *-branco.png')), h('td', {}, 'Monocromático (positivo/negativo)')),
          ),
        ),
        h('p', {}, 'Veja ', h('a', { href: '#resources' }, 'Resources'), ' para downloads.'),
      ),
    );
  },
};
