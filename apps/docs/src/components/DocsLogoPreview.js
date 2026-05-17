import { h } from './h.js';

// Preview do brasão usando o kit oficial em /brasoes/.
// Não é o componente "Logo" canônico — esse vive no Penpot.
export function DocsLogoPreview({ variant = 'sigla', color = 'rgb', size = 200, bg }) {
  const file = color === 'rgb'
    ? `/brasoes/${variant}/${variant}-rgb.svg`
    : `/brasoes/${variant}/${variant}-${color}.png`;
  const wrap = h('div', {
    class: 'preview-box',
    style: { background: bg || 'var(--color-surface-default)' }
  });
  wrap.append(h('img', {
    src: file,
    alt: variant === 'sigla' ? 'Marca UFPE — sigla' : 'Universidade Federal de Pernambuco',
    style: { width: `${size}px`, height: 'auto' }
  }));
  return wrap;
}
