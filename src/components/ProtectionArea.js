// Desenha a marca com retângulo de área de proteção (altura da chama).
export function ProtectionArea(parent, { variant = 'principal' } = {}) {
  const w = 240, h = 360;
  const pad = 30; // altura da chama (aprox)
  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:280px;border:1px solid #e9e9e9">
    <rect x="${pad/2}" y="${pad/2}" width="${w-pad}" height="${h-pad}" fill="none" stroke="#990000" stroke-dasharray="4 3"/>
    <image href="/brasoes/${variant === 'principal' ? 'sigla/sigla-rgb.svg' : 'extenso/extenso-rgb.svg'}"
           x="${pad}" y="${pad}" width="${w-2*pad}" height="${h-2*pad}"/>
  </svg>
  <p style="font-size:.8rem;color:#666;margin-top:8px">Área mínima: altura da chama do brasão.</p>`;
  parent.appendChild(wrap);
  return wrap;
}
