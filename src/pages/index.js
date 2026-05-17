import { Logo } from '@components/Logo.js';
import { ColorSwatch } from '@components/ColorSwatch.js';
import { TypeSpecimen } from '@components/TypeSpecimen.js';
import { ConstructionGrid } from '@components/ConstructionGrid.js';
import { ProtectionArea } from '@components/ProtectionArea.js';
import { DontDo } from '@components/DontDo.js';
import { colors } from '@tokens/colors.js';
import { markSize } from '../signals.js';

const h = (tag, attrs = {}, html = '') => {
  const el = document.createElement(tag);
  Object.assign(el, attrs);
  if (html) el.innerHTML = html;
  return el;
};

export const pages = {
  'introducao': {
    label: 'Introdução',
    group: 'A Marca',
    render(root) {
      root.append(
        h('h1', {}, 'Design System UFPE'),
        h('p', {}, 'Implementação web fiel ao <strong>Manual de Identidade Visual da UFPE</strong>. Esta instância renderiza tokens, componentes e specimens vivos da marca.'),
        h('p', {}, 'O uso da identidade visual da UFPE é exclusivo para membros da instituição.'),
        h('h2', {}, 'Marca'),
      );
      Logo(root, { variant: 'principal', size: markSize });
      Logo(root, { variant: 'secundaria', size: markSize });
    },
  },
  'assinaturas': {
    label: 'Assinaturas',
    group: 'A Marca',
    render(root) {
      root.append(
        h('h2', {}, 'Assinaturas — principal e secundária'),
        h('p', {}, 'A marca da UFPE apresenta duas variações: <strong>principal</strong> (uso prioritário) e <strong>secundária</strong> (uso preferencial em materiais para fora do país).'),
        h('h3', {}, 'Principal'),
      );
      Logo(root, { variant: 'principal', size: markSize });
      root.append(h('h3', {}, 'Secundária'));
      Logo(root, { variant: 'secundaria', size: markSize });

      const slider = h('div', {}, '<label>Tamanho: <input type="range" min="80" max="400" value="200" id="size"/></label>');
      root.append(slider);
      slider.querySelector('#size').addEventListener('input', e => markSize.value = +e.target.value);
    },
  },
  'tipografia': {
    label: 'Padrão tipográfico',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Padrão tipográfico'));
      TypeSpecimen(root);
    },
  },
  'cromatico': {
    label: 'Padrão cromático',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Padrão cromático'));
      const row = h('div'); row.className = 'swatch-row';
      ColorSwatch(row, { token: colors.bordo });
      ColorSwatch(row, { token: colors.preto });
      root.append(row);
    },
  },
  'construcao': {
    label: 'Construção da marca',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Construção da marca'),
        h('p', {}, 'A largura do brasão (<code>x</code>) é a unidade base do sistema. Todas as proporções derivam dela.'));
      const grid = h('div', {}, '');
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = '1fr 1fr';
      grid.style.gap = '24px';
      const a = h('div', {}, '<h3>Sigla UFPE (1.5x · 0.7x · gap 0.23x · régua x/10)</h3>');
      const b = h('div', {}, '<h3>Por extenso (1.5x · 1.2x · gap 0.53x · régua x/12)</h3>');
      ConstructionGrid(a, { variant: 'principal' });
      ConstructionGrid(b, { variant: 'secundaria' });
      grid.append(a, b);
      root.append(grid);
    },
  },
  'protecao': {
    label: 'Área de proteção',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Área de proteção'),
        h('p', {}, 'Espaço livre ao redor da marca baseado na altura da chama do brasão.'));
      const grid = h('div'); grid.style.display = 'flex'; grid.style.gap = '24px';
      ProtectionArea(grid, { variant: 'principal' });
      ProtectionArea(grid, { variant: 'secundaria' });
      root.append(grid);
    },
  },
  'reducao': {
    label: 'Redução máxima',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Redução máxima'),
        h('p', {}, 'A largura mínima preserva a legibilidade.'),
        h('table', {}, `
          <thead><tr><th>Versão</th><th>Largura mínima</th></tr></thead>
          <tbody>
            <tr><td>Sigla UFPE</td><td><strong>2 cm</strong></td></tr>
            <tr><td>Por extenso</td><td><strong>2,5 cm</strong></td></tr>
          </tbody>`));
    },
  },
  'negativo-positivo': {
    label: 'Negativo e positivo',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Marca em negativo e positivo'));
      const grays = [0,10,20,30,40,50,60,70,80,90,100];
      const wrap = h('div'); wrap.style.display = 'grid'; wrap.style.gridTemplateColumns = 'repeat(auto-fill,minmax(140px,1fr))'; wrap.style.gap = '12px';
      grays.forEach(k => {
        const v = Math.round(255 * (1 - k/100));
        const bg = `rgb(${v},${v},${v})`;
        const color = k > 50 ? 'branco' : 'preto';
        const card = h('div'); card.style.background = bg; card.style.padding = '12px'; card.style.textAlign = 'center'; card.style.border = '1px solid #eee';
        Logo(card, { variant: 'principal', color, bg });
        card.append(h('div', {}, `<small style="color:${k>50?'#fff':'#000'}">K${k}</small>`));
        wrap.append(card);
      });
      root.append(wrap);
    },
  },
  'usos-incorretos': {
    label: 'Usos incorretos',
    group: 'A Marca',
    render(root) {
      root.append(h('h2', {}, 'Usos incorretos'),
        h('p', {}, '<strong>Não são permitidas</strong> modificações nas cores, tamanho, elementos ou linhas.'));
      DontDo(root);
    },
  },
  'pro-reitorias': {
    label: 'Pró-reitorias',
    group: 'Assinaturas Institucionais',
    render(root) {
      const list = [
        ['PROAES','Pró-Reitoria para Assuntos Estudantis'],
        ['PROGEPE','Pró-Reitoria de Gestão de Pessoas e Qualidade de Vida'],
        ['PROGRAD','Pró-Reitoria de Graduação'],
        ['PROGEST','Pró-Reitoria de Gestão Administrativa'],
        ['PROEXC','Pró-Reitoria de Extensão e Cultura'],
        ['PROPESQI','Pró-Reitoria de Pesquisa e Inovação'],
        ['PROPLAN','Pró-Reitoria de Planejamento, Orçamento e Finanças'],
        ['PROPG','Pró-Reitoria de Pós-Graduação'],
      ];
      root.append(h('h2', {}, 'Assinaturas institucionais — Pró-reitorias'));
      const grid = h('div'); grid.style.display = 'grid'; grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(280px,1fr))'; grid.style.gap = '24px';
      list.forEach(([sigla, nome]) => {
        const card = h('div'); card.style.display = 'flex'; card.style.alignItems = 'center'; card.style.gap = '12px';
        const logo = h('img', { src: '/brasoes/sigla/sigla-rgb.svg', alt: 'UFPE' });
        logo.style.width = '70px';
        const txt = h('div', {}, `<strong style="color:#990000;font-size:1.1rem;display:block">${sigla}</strong><span class="versalete" style="font-size:.8rem;color:#000">${nome}</span>`);
        card.append(logo, txt);
        grid.append(card);
      });
      root.append(grid);
    },
  },
  'submarcas': {
    label: 'Submarcas',
    group: 'Submarcas',
    render(root) {
      root.append(h('h2', {}, 'Submarcas'),
        h('p', {}, 'Identidades visuais derivadas para programas, eventos ou projetos da Universidade.'));
    },
  },
  'aplicacoes': {
    label: 'Papelaria & Aplicações',
    group: 'Aplicações',
    render(root) {
      root.append(h('h2', {}, 'Aplicações'),
        h('ul', {}, ['Ofício','Envelope pequeno','Envelope grande','Cartão de visita','Certificado','Avatar de redes sociais'].map(s => `<li>${s}</li>`).join('')));
    },
  },
  'tokens-export': {
    label: 'Tokens — exportação',
    group: 'Recursos',
    render(root) {
      root.append(h('h2', {}, 'Exportação de tokens'),
        h('p', {}, 'Disponíveis em: <code>packages/tokens/*.js</code> (ESM), variáveis CSS em <code>src/styles/base.css</code>, JSON em <code>penpot/library.json</code>.'),
        h('pre', {}, `import { colors, fontFamily, markRatios } from '@ufpe/design-system/tokens';\n\ncolors.bordo.hex   // '#990000'\nmarkRatios.height  // 1.5`));
    },
  },
  'penpot': {
    label: 'Handoff Penpot',
    group: 'Recursos',
    render(root) {
      root.append(h('h2', {}, 'Handoff invertido — Penpot'),
        h('p', {}, 'O código é a fonte da verdade. O Penpot consome.'),
        h('ol', {}, [
          'Camada 1 — <code>penpot/library.json</code> + SVGs em <code>assets/</code> (drag-and-drop manual).',
          'Camada 2 — <code>npm run penpot:export</code> gera arquivo .penpot.',
          'Camada 3 — integração via Penpot CLI/API em CI.',
        ].map(s => `<li>${s}</li>`).join('')));
    },
  },
};
