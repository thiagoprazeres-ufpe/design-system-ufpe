export function ColorSwatch(parent, { token }) {
  const el = document.createElement('div');
  el.className = 'swatch';
  el.innerHTML = `
    <div class="chip" style="background:${token.hex}"></div>
    <div class="meta">
      <strong>${token.name}</strong>
      ${token.pantone ? `Pantone <code>${token.pantone}</code><br>` : ''}
      ${token.cmyk ? `CMYK <code>C${token.cmyk.c} M${token.cmyk.m} Y${token.cmyk.y} K${token.cmyk.k}</code><br>` : ''}
      ${token.rgb ? `RGB <code>R${token.rgb.r} G${token.rgb.g} B${token.rgb.b}</code><br>` : ''}
      Hex <code>${token.hex}</code>
    </div>`;
  el.querySelector('.chip').addEventListener('click', () => {
    navigator.clipboard?.writeText(token.hex);
  });
  el.title = 'Clique no chip para copiar o hex';
  parent.appendChild(el);
  return el;
}
