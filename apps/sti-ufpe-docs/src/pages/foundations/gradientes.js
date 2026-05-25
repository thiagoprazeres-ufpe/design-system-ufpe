import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@sti-ufpe/tokens';

const C = tokens.color;

// Gradientes oficiais (compostos da paleta STI).
const GRADIENTS = [
  {
    name: 'marca',
    title: 'Marca — bordô → laranja',
    desc: 'Gradiente da identidade STI (cores do lockup: S/T em bordô, "i" em laranja). Use em CTAs e hero sections institucionais.',
    css: `linear-gradient(135deg, ${C.bordo} 0%, ${C.laranja} 100%)`,
    code: 'linear-gradient(135deg, var(--color-bordo) 0%, var(--color-laranja) 100%)',
    onColor: '#fff',
  },
  {
    name: 'fogo',
    title: 'Fogo — vermelho → laranja',
    desc: 'Tons quentes — alertas, eventos, energia.',
    css: `linear-gradient(135deg, ${C.vermelho} 0%, ${C.laranja} 100%)`,
    code: 'linear-gradient(135deg, var(--color-vermelho) 0%, var(--color-laranja) 100%)',
    onColor: '#fff',
  },
  {
    name: 'crepusculo',
    title: 'Crepúsculo — berinjela → roxo',
    desc: 'Magenta para violeta — destaques sutis, hover states.',
    css: `linear-gradient(135deg, ${C.berinjela} 0%, ${C.roxo} 100%)`,
    code: 'linear-gradient(135deg, var(--color-berinjela) 0%, var(--color-roxo) 100%)',
    onColor: '#fff',
  },
  {
    name: 'oceano',
    title: 'Oceano — azul → verde',
    desc: 'Frescor e clareza — backgrounds de dashboards, ambientes amigáveis.',
    css: `linear-gradient(135deg, ${C.azul} 0%, ${C.verde} 100%)`,
    code: 'linear-gradient(135deg, var(--color-azul) 0%, var(--color-verde) 100%)',
    onColor: '#fff',
  },
  {
    name: 'aurora',
    title: 'Aurora — roxo → azul',
    desc: 'Suave e premium — overlays, splash screens.',
    css: `linear-gradient(135deg, ${C.roxo} 0%, ${C.azul} 100%)`,
    code: 'linear-gradient(135deg, var(--color-roxo) 0%, var(--color-azul) 100%)',
    onColor: '#fff',
  },
  {
    name: 'espectro',
    title: 'Espectro — paleta completa',
    desc: 'Todas as 7 cores cromáticas em arco — uso pontual em comunicações institucionais coloridas.',
    css: `linear-gradient(90deg, ${C.berinjela}, ${C.roxo}, ${C.azul}, ${C.verde}, ${C.laranja}, ${C.vermelho}, ${C.bordo})`,
    code: 'linear-gradient(90deg, var(--color-berinjela), var(--color-roxo), var(--color-azul), var(--color-verde), var(--color-laranja), var(--color-vermelho), var(--color-bordo))',
    onColor: '#fff',
  },
  {
    name: 'noite',
    title: 'Noite — bordô → preto',
    desc: 'Escurecimento dramático — footers, overlays escuros, modo noturno.',
    css: `linear-gradient(180deg, ${C.bordo} 0%, ${C.preto} 100%)`,
    code: 'linear-gradient(180deg, var(--color-bordo) 0%, var(--color-preto) 100%)',
    onColor: '#fff',
  },
  {
    name: 'sutil',
    title: 'Sutil — cinza → cinza-claro',
    desc: 'Background neutro com profundidade — cards, painéis. Contraste suave mas visível.',
    css: `linear-gradient(180deg, ${C.cinza.k30} 0%, ${C.cinza.k10} 100%)`,
    code: 'linear-gradient(180deg, var(--color-cinza-k30) 0%, var(--color-cinza-k10) 100%)',
    onColor: '#000',
  },
  // Inspirado no Portal Interno NTI (linear gradients vibrantes 3-stop).
  {
    name: 'nti-classico',
    title: 'NTI clássico — magenta → roxo → azul',
    desc: 'Gradiente herdado do Portal Interno (era NTI, hoje STI). Magenta vibrante atravessando o roxo até azul institucional. Headers institucionais.',
    css: `linear-gradient(90deg, ${C.berinjela} 0%, ${C.roxo} 50%, ${C.azul} 100%)`,
    code: 'linear-gradient(90deg, var(--color-berinjela) 0%, var(--color-roxo) 50%, var(--color-azul) 100%)',
    onColor: '#fff',
  },
  {
    name: 'nti-extenso',
    title: 'NTI extenso — 5 stops',
    desc: 'Variação multi-stop do gradiente NTI — transição mais suave com 5 paradas de magenta a azul.',
    css: `linear-gradient(45deg, ${C.berinjela} 0%, ${C.berinjela} 23%, ${C.roxo} 41%, ${C.roxo} 74%, ${C.azul} 100%)`,
    code: 'linear-gradient(45deg, var(--color-berinjela) 0%, var(--color-berinjela) 23%, var(--color-roxo) 41%, var(--color-roxo) 74%, var(--color-azul) 100%)',
    onColor: '#fff',
  },
];

const RADIAL = [
  {
    title: 'Radial — destaque azul',
    css: `radial-gradient(circle at 30% 30%, ${C.azul} 0%, ${C.roxo} 60%, transparent 100%)`,
    code: 'radial-gradient(circle at 30% 30%, var(--color-azul) 0%, var(--color-roxo) 60%, transparent 100%)',
  },
  {
    title: 'Radial — destaque laranja',
    css: `radial-gradient(circle at 70% 30%, ${C.laranja} 0%, ${C.vermelho} 60%, transparent 100%)`,
    code: 'radial-gradient(circle at 70% 30%, var(--color-laranja) 0%, var(--color-vermelho) 60%, transparent 100%)',
  },
];

function gradientCard(g, height = '160px') {
  return h('div', { style: { borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--color-border-strong)', boxShadow: '0 1px 3px rgba(0,0,0,.08)' } },
    h('div', { style: { background: g.css, height, padding: 'var(--space-3)', display: 'flex', alignItems: 'flex-end', color: g.onColor || '#fff' } },
      h('strong', { style: { fontSize: 'var(--font-size-md)', textShadow: g.onColor === '#000' ? 'none' : '0 1px 2px rgba(0,0,0,.25)' } }, g.title)),
    h('div', { style: { padding: 'var(--space-2)', fontSize: 'var(--font-size-xs)', background: 'var(--color-surface-default)' } },
      g.desc ? h('p', { style: { margin: '0 0 var(--space-2)', color: 'var(--color-text-muted)' } }, g.desc) : null,
      h('code', { style: { display: 'block', wordBreak: 'break-all', whiteSpace: 'normal' } }, g.code),
    ),
  );
}

export const gradientesPage = {
  label: 'Gradientes',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Foundations', title: 'Gradientes',
        lede: 'Combinações de cores oficiais da paleta STI. Use os tokens CSS — nunca hardcode hex.',
        status: 'beta',
      }),

      h('section', {},
        h('h2', {}, 'Lineares'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'var(--space-3)' } },
          ...GRADIENTS.map(g => gradientCard(g)),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Radiais'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'var(--space-3)' } },
          ...RADIAL.map(g => gradientCard(g, '180px')),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Hero de exemplo'),
        h('div', { style: { background: GRADIENTS[0].css, padding: 'var(--space-8)', borderRadius: '8px', color: '#fff', textAlign: 'center' } },
          h('div', { style: { fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', marginBottom: '8px' } }, 'STI · UFPE'),
          h('div', { style: { fontSize: 'var(--font-size-md)', opacity: 0.9 } }, 'Superintendência de Tecnologia da Informação'),
        ),
        CodeBlock({ language: 'css', code: '.hero-sti {\n  background: ' + GRADIENTS[0].code + ';\n  color: var(--color-brand-contrast);\n  padding: var(--space-8);\n}' }),
      ),

      h('section', {},
        h('h2', {}, 'Diretrizes de uso'),
        h('ul', {},
          h('li', {}, 'Prefira sempre os ', h('strong', {}, 'tokens CSS'), ' (', h('code', {}, 'var(--color-bordo)'), ') aos hex literais — garante consistência se tokens evoluírem.'),
          h('li', {}, 'O gradiente ', h('strong', {}, 'Marca (bordô → laranja)'), ' é o canônico — use para hero institucionais e CTAs primárias.'),
          h('li', {}, 'Contraste de texto: gradientes escuros usam texto branco; o "Sutil" exige texto preto.'),
          h('li', {}, 'Evite mais de ', h('strong', {}, '3 cores'), ' por gradiente — exceção: "Espectro" para usos pontuais.'),
          h('li', {}, 'Não use gradientes no logo STI — o lockup mantém cores sólidas oficiais.'),
        ),
      ),
    );
  },
};
