import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { tokens } from '@sti-ufpe/tokens';

// Mapping oficial herdado do Portal Interno NTI (img/identidade-area/).
// Cada diretoria tem logo claro e logo escuro (negativo).
const DIRETORIAS = [
  {
    sigla: 'DG',
    nome: 'Diretoria-Geral',
    cor: tokens.color.diretoria.bordo,
    corNome: 'bordo',
    logo: '/diretorias/dg.png',
    logoEscuro: '/diretorias/dg-escuro.png',
  },
  {
    sigla: 'DRTD',
    nome: 'Diretoria de Redes e Telecomunicações',
    cor: tokens.color.diretoria.azul,
    corNome: 'azul',
    logo: '/diretorias/drtd.png',
    logoEscuro: '/diretorias/drtd-escuro.png',
  },
  {
    sigla: 'DSIC',
    nome: 'Diretoria de Sistemas de Informações Corporativas',
    cor: tokens.color.diretoria.roxo,
    corNome: 'roxo',
    logo: '/diretorias/dsic.png',
    logoEscuro: '/diretorias/dsic-escuro.png',
  },
  {
    sigla: 'DSIS',
    nome: 'Diretoria de Sistemas de Informações Sociais',
    cor: tokens.color.diretoria.verde,
    corNome: 'verde',
    logo: '/diretorias/dsis.png',
    logoEscuro: '/diretorias/dsis-escuro.png',
  },
];

const OUTRAS_CORES = [
  { nome: 'berinjela', cor: tokens.color.diretoria.berinjela },
  { nome: 'laranja',   cor: tokens.color.diretoria.laranja },
  { nome: 'preto',     cor: tokens.color.diretoria.preto },
];

export const diretoriasPage = {
  label: 'Diretorias',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Diretorias STI',
        lede: 'Cada diretoria da STI possui uma cor identificadora e logotipo próprio (versão clara e escura). Mapping herdado do Portal Interno NTI.',
        status: 'beta',
      }),

      h('section', {},
        h('h2', {}, 'Diretorias oficiais'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 'var(--space-3)' } },
          ...DIRETORIAS.map(d => h('div', {
            style: { border: '1px solid var(--color-border-strong)', borderRadius: '8px', overflow: 'hidden', background: 'var(--color-surface-default)', boxShadow: '0 1px 3px rgba(0,0,0,.08)' }
          },
            // Faixa colorida no topo + logo claro
            h('div', { style: { background: d.cor, padding: 'var(--space-3)', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
              h('img', { src: d.logoEscuro, alt: `${d.sigla} (negativo)`, style: { maxHeight: '80px', maxWidth: '70%' } }),
            ),
            h('div', { style: { padding: 'var(--space-3)' } },
              h('img', { src: d.logo, alt: d.sigla, style: { maxHeight: '60px', marginBottom: 'var(--space-2)' } }),
              h('strong', { style: { display: 'block', fontSize: 'var(--font-size-md)', color: 'var(--color-text-brand)' } }, d.sigla),
              h('div', { style: { fontSize: 'var(--font-size-sm)', color: 'var(--color-text-default)', marginBottom: 'var(--space-2)' } }, d.nome),
              h('code', { style: { fontSize: 'var(--font-size-xs)' } }, `color.diretoria.${d.corNome}`),
              h('div', { style: { fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', marginTop: '4px' } }, d.cor),
            )
          ))
        ),
      ),

      h('section', {},
        h('h2', {}, 'Cores adicionais (não atribuídas)'),
        h('p', {}, 'Cores da paleta de diretorias disponíveis para futuras unidades ou usos pontuais.'),
        h('div', { style: { display: 'flex', gap: 'var(--space-2)' } },
          ...OUTRAS_CORES.map(c => h('div', { style: { flex: 1 } },
            h('div', { style: { background: c.cor, height: '80px', borderRadius: '6px' } }),
            h('code', { style: { fontSize: 'var(--font-size-xs)' } }, `diretoria.${c.nome}`),
          ))
        ),
      ),

      h('div', { class: 'callout' },
        h('p', {}, 'Logos extraídos de ', h('code', {}, 'img/identidade-area/'), ' do tema ',
          h('code', {}, 'portalnti'), '. Versão histórica — a STI pode atualizar mapping a qualquer momento.')),
    );
  },
};
