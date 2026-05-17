import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { PenpotEmbed } from '../../components/PenpotEmbed.js';

const PRO_REITORIAS = [
  ['PROAES',   'Pró-Reitoria para Assuntos Estudantis'],
  ['PROGEPE',  'Pró-Reitoria de Gestão de Pessoas e Qualidade de Vida'],
  ['PROGRAD',  'Pró-Reitoria de Graduação'],
  ['PROGEST',  'Pró-Reitoria de Gestão Administrativa'],
  ['PROEXC',   'Pró-Reitoria de Extensão e Cultura'],
  ['PROPESQI', 'Pró-Reitoria de Pesquisa e Inovação'],
  ['PROPLAN',  'Pró-Reitoria de Planejamento, Orçamento e Finanças'],
  ['PROPG',    'Pró-Reitoria de Pós-Graduação'],
];

export const assinaturasPage = {
  label: 'Assinaturas Institucionais',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Assinaturas Institucionais',
        lede: 'Pró-reitorias, centros, superintendências, departamentos e programas. Marca UFPE à esquerda + sigla bold + nome por extenso em versalete.',
        status: 'beta',
      }),

      h('section', {}, h('h2', {}, 'Preview'), PenpotEmbed({ url: null })),

      h('section', {},
        h('h2', {}, 'Pró-reitorias'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 'var(--space-3)' } },
          ...PRO_REITORIAS.map(([sigla, nome]) =>
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2)', border: '1px solid var(--color-border-default)', borderRadius: '6px' } },
              h('img', { src: '/brasoes/sigla/sigla-rgb.svg', alt: 'UFPE', style: { width: '64px', height: 'auto' } }),
              h('div', {},
                h('strong', { style: { color: 'var(--color-text-brand)', fontSize: 'var(--font-size-md)', display: 'block' } }, sigla),
                h('span', { class: 'versalete', style: { fontSize: 'var(--font-size-xs)', color: 'var(--color-text-default)' } }, nome),
              )
            )
          )
        ),
      ),

      h('section', {},
        h('h2', {}, 'Regras'),
        h('ul', {},
          h('li', {}, 'Marca da UFPE à esquerda; assinatura institucional à direita.'),
          h('li', {}, 'Espaço máximo horizontal: 5 chamas do brasão.'),
          h('li', {}, 'Siglas em letras maiúsculas, estilo bold.'),
          h('li', {}, 'Nome por extenso em versalete.'),
          h('li', {}, 'Nunca criar novas assinaturas independentes — sempre acopladas à marca UFPE.'),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Outras categorias'),
        h('p', {}, 'Centros, superintendências, departamentos, programas de pós-graduação e núcleos — todas seguem o mesmo padrão. Lista completa no Manual de Identidade Visual UFPE (pp. 23–40), disponível com a Diretoria de Comunicação.'),
      ),
    );
  },
};
