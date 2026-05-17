import { fontFamily, variants } from '@tokens/typography.js';

export function TypeSpecimen(parent) {
  const el = document.createElement('div');
  el.style.fontFamily = fontFamily;
  el.innerHTML = `
    <p><strong>Família:</strong> <code>${fontFamily}</code></p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:16px">
      <div>
        <h4 style="color:#000">Normal</h4>
        <p style="font-weight:400;font-style:normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>1234567890!@#$%&amp;¨*()_+-={}[]&lt;&gt;;:</p>
      </div>
      <div>
        <h4 style="color:#000">Negrito</h4>
        <p style="font-weight:700"><strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>1234567890!@#$%&amp;¨*()_+-={}[]&lt;&gt;;:</strong></p>
      </div>
      <div>
        <h4 style="color:#000">Itálico</h4>
        <p style="font-style:italic">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz</p>
      </div>
      <div>
        <h4 style="color:#000">Negrito e Itálico</h4>
        <p style="font-style:italic;font-weight:700"><strong>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz</strong></p>
      </div>
    </div>
    <h4 style="margin-top:24px;color:#000">Versalete (usado em assinaturas institucionais)</h4>
    <p class="versalete" style="font-size:1.6rem;font-weight:700">Universidade Federal de Pernambuco</p>
    <p style="font-size:.85rem;color:#666">Versalete: letras minúsculas são representadas pelo mesmo desenho dos caracteres maiúsculos, variando apenas em altura.</p>
  `;
  parent.appendChild(el);
  return el;
}
