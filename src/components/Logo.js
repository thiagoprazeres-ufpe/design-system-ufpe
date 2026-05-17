import { effect } from '@preact/signals-core';

// Renderiza a marca UFPE usando o kit oficial em /brasoes/.
// props:
//   variant: 'principal' (sigla) | 'secundaria' (extenso)
//   color:   'rgb' (padrão) | 'preto' | 'branco'
//   size:    signal<number> | number — largura em px
//   bg:      cor de fundo do wrapper
export function Logo(parent, { variant = 'principal', color = 'rgb', size, bg = 'transparent' } = {}) {
  const folder = variant === 'principal' ? 'sigla' : 'extenso';
  // SVG só existe para colorida (RGB). Para preto/branco usamos PNG do kit.
  const file = color === 'rgb'
    ? `/brasoes/${folder}/${folder}-rgb.svg`
    : `/brasoes/${folder}/${folder}-${color}.png`;

  const wrap = document.createElement('div');
  wrap.style.display = 'inline-block';
  wrap.style.padding = '12px';
  wrap.style.background = bg;
  wrap.style.transition = 'background .15s';
  parent.appendChild(wrap);

  const img = document.createElement('img');
  img.alt = variant === 'principal'
    ? 'Marca UFPE — sigla'
    : 'Universidade Federal de Pernambuco';
  img.src = file;
  img.style.display = 'block';
  img.style.height = 'auto';
  wrap.appendChild(img);

  effect(() => {
    const x = typeof size === 'object' && size?.value ? size.value : (size || 200);
    img.style.width = `${x}px`;
  });

  return wrap;
}
