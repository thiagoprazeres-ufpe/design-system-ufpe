import { h } from './h.js';
import { publicAsset } from '../utils/publicAsset.js';

// Preview do brasão usando o kit oficial publicado pelo Vite.
// Não é o componente "Logo" canônico — esse vive no Penpot.
export function DocsLogoPreview({ variant = 'sigla', color = 'rgb', size = 200, bg }) {
  const file = color === 'rgb'
    ? publicAsset(`brasoes/${variant}/${variant}-rgb.svg`)
    : publicAsset(`brasoes/${variant}/${variant}-${color}.png`);
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
