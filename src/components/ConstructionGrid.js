import { markRatios } from '@tokens/spacing.js';

// SVG paramétrico exibindo a malha construtiva e as cotas (x, 1.5x, 0.7x...).
export function ConstructionGrid(parent, { variant = 'principal' } = {}) {
  const x = 80;
  const cfg = variant === 'principal' ? markRatios.sigla : markRatios.extenso;
  const ratio = variant === 'principal' ? 1.5 : 1.5;
  const w = x * (variant === 'principal' ? 1.4 : 1.8);
  const h = x * 2.6;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:340px;width:100%;border:1px solid #e9e9e9">
    <defs>
      <pattern id="grid" width="${x/5}" height="${x/5}" patternUnits="userSpaceOnUse">
        <path d="M ${x/5} 0 L 0 0 0 ${x/5}" fill="none" stroke="#cfe2ff" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <image href="/brasoes/${variant === 'principal' ? 'sigla/sigla-rgb.svg' : 'extenso/extenso-rgb.svg'}"
           x="${(w-x)/2}" y="10" width="${x}" height="${x*ratio}"/>
    <!-- cota largura x -->
    <g stroke="#990000" stroke-width="1" fill="#990000" font-family="Trebuchet MS" font-size="10">
      <line x1="${(w-x)/2}" y1="4" x2="${(w+x)/2}" y2="4"/>
      <text x="${w/2}" y="0" text-anchor="middle" dy="-1">x</text>
      <line x1="${(w-x)/2 - 8}" y1="10" x2="${(w-x)/2 - 8}" y2="${10 + x*ratio}"/>
      <text x="${(w-x)/2 - 12}" y="${10 + x*ratio/2}" text-anchor="end">${ratio}x</text>
      <line x1="${(w - x*cfg.width)/2}" y1="${h - 8}" x2="${(w + x*cfg.width)/2}" y2="${h - 8}"/>
      <text x="${w/2}" y="${h - 12}" text-anchor="middle">${cfg.width}x</text>
    </g>
  </svg>`;
  const wrap = document.createElement('div');
  wrap.innerHTML = svg;
  parent.appendChild(wrap);
  return wrap;
}
