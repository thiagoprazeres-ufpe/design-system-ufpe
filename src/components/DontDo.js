const RULES = [
  'Não utilizar a marca sem a sigla ou sem o texto por extenso',
  'Não distorcer a altura',
  'Não distorcer a largura',
  'Não inclinar',
  'Não alterar o tamanho do texto',
  'Não alterar o tamanho do Brasão',
  'Não utilizar tipografia diferente da institucional',
  'Não alterar as cores dos elementos nem da tipografia',
  'Não espelhar os elementos',
  'Não alterar a posição dos elementos',
  'Não utilizar efeito de marca d’água',
  'Não utilizar o texto sem o Brasão',
  'Não utilizar elementos da marca separados',
];

export function DontDo(parent) {
  const grid = document.createElement('div');
  grid.className = 'dont-grid';
  RULES.forEach((rule, i) => {
    const card = document.createElement('div');
    card.className = 'dont-card';
    card.innerHTML = `
      <div style="position:relative;text-align:center">
        <img src="/brasoes/sigla/sigla-rgb.svg" alt="" style="width:100%;max-width:120px;opacity:.5"/>
        <svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%">
          <line x1="10" y1="10" x2="90" y2="90" stroke="#999" stroke-width="3"/>
          <line x1="90" y1="10" x2="10" y2="90" stroke="#999" stroke-width="3"/>
        </svg>
      </div>
      <div class="label">${i+1}. ${rule}</div>`;
    grid.appendChild(card);
  });
  parent.appendChild(grid);
  return grid;
}
