import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { tokens } from '@sti-ufpe/tokens';
import { publicAsset } from '../../utils/publicAsset.js';

const DIRETORIAS = [
  { sigla: 'Berinjela', cor: tokens.color.diretoria.berinjela, hex: '#872367' },
  { sigla: 'Roxo',      cor: tokens.color.diretoria.roxo,      hex: '#662d91' },
  { sigla: 'Azul',      cor: tokens.color.diretoria.azul,      hex: '#0e76bb' },
  { sigla: 'Verde',     cor: tokens.color.diretoria.verde,     hex: '#13b198' },
  { sigla: 'Laranja',   cor: tokens.color.diretoria.laranja,   hex: '#f7941d' },
  { sigla: 'Bordô',     cor: tokens.color.diretoria.bordo,     hex: '#b30638' },
  { sigla: 'Preto',     cor: tokens.color.diretoria.preto,     hex: '#242020' },
];

function avatarSVG(cor, includeWedge = false) {
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="${cor}"/>
      ${includeWedge ? `<path d="M50 50 L50 100 A50 50 0 0 1 0 50 Z" fill="#f7941d" opacity="0.85"/>` : ''}
      <image href="${publicAsset('marca/logo-sti-branco.svg')}" x="22" y="28" width="56" height="44" preserveAspectRatio="xMidYMid meet"/>
    </svg>`;
}

export const avataresPage = {
  label: 'Avatares & Bottoms',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Avatares circulares',
        lede: 'Aplicações em redes sociais e bottoms. Cada diretoria tem sua cor; coordenações usam a cor da diretoria + cunha em laranja.',
        status: 'beta',
      }),

      h('section', {},
        h('h2', {}, 'Diretorias'),
        h('p', {}, 'Avatar redondo, fundo da cor da diretoria, "STi" + badge "UFPE" branco.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 'var(--space-2)' } },
          ...DIRETORIAS.map(d => h('div', { style: { textAlign: 'center' } },
            h('div', { style: { width: '90px', height: '90px', margin: '0 auto' }, html: avatarSVG(d.cor, false) }),
            h('div', { style: { fontSize: 'var(--font-size-xs)', marginTop: '6px' } }, d.sigla),
            h('code', { style: { fontSize: '10px', color: 'var(--color-text-muted)' } }, d.hex),
          ))
        ),
      ),

      h('section', {},
        h('h2', {}, 'Coordenações'),
        h('p', {}, 'Variante das diretorias com cunha laranja no canto inferior — indica subunidade subordinada à diretoria.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: 'var(--space-2)' } },
          ...DIRETORIAS.map(d => h('div', { style: { textAlign: 'center' } },
            h('div', { style: { width: '90px', height: '90px', margin: '0 auto' }, html: avatarSVG(d.cor, true) }),
            h('div', { style: { fontSize: 'var(--font-size-xs)', marginTop: '6px' } }, d.sigla),
          ))
        ),
      ),

      h('section', {},
        h('h2', {}, 'Versão impressa (Manual)'),
        h('img', { src: 'marca/sti-avatares.png', alt: 'Avatares STI — versão Manual', style: { maxWidth: '100%' } }),
      ),
    );
  },
};
