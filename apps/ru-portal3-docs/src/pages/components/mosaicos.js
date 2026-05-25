import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';
import { tokens } from '@ru/tokens';

const C = tokens.ru.color.brand;

const FAMILIES = [
  { label: 'Original — multicor', tint: null },
  { label: 'Monocromático amarelo',  tint: C.amarelo,   colorVar: 'amarelo' },
  { label: 'Monocromático verde',    tint: C.verde,     colorVar: 'verde' },
  { label: 'Monocromático azul',     tint: C.azul,      colorVar: 'azul' },
  { label: 'Monocromático vermelho', tint: C.vermelho,  colorVar: 'vermelho' },
  { label: 'Monocromático cinza',    tint: C.cinzaEscuro, colorVar: 'cinzaEscuro' },
];

// CSS filter para tingir SVG inteiro com uma cor (hue-rotate aproximado).
function tintFilter(hex) {
  if (!hex) return 'none';
  return `grayscale(1) brightness(0.6) sepia(1) hue-rotate(0deg) saturate(8)`;
}

export const mosaicosPage = {
  label: 'Mosaicos',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Mosaicos',
        lede: 'Composições geométricas que representam o RU — derivadas dos mesmos módulos da marca. Decorativos, sinalização interna, headers e identidade ambiental.',
        status: 'stable',
      }),

      h('section', {},
        h('h2', {}, 'Mosaico canônico'),
        h('p', {}, 'A composição principal — base de todas as variações. Use em fundos amplos, hero sections e painéis decorativos.'),
        h('div', { class: 'preview-box', style: { padding: 0, background: 'transparent', overflow: 'hidden', minHeight: '0' } },
          h('img', { src: 'patterns/mosaic.svg', alt: 'Mosaico canônico', style: { width: '100%' } })
        ),
        CodeBlock({ language: 'html', code: '<div class="hero-ru" style="background:url(patterns/mosaic.svg) center/cover">…</div>' }),
      ),

      h('section', {},
        h('h2', {}, 'Faixa de marca'),
        h('p', {}, 'Versão horizontal — para headers, footers e elementos lineares de sinalização externa.'),
        h('div', { class: 'preview-box', style: { padding: 0, background: 'transparent', overflow: 'hidden', minHeight: '0' } },
          h('img', { src: 'patterns/ru-brand-strip.svg', alt: 'Faixa RU', style: { width: '100%' } })
        ),
        CodeBlock({ language: 'css', code: '.header-ru {\n  background: url("patterns/ru-brand-strip.svg") repeat-x bottom / auto 64px,\n              var(--ru-color-surface-raised);\n}' }),
      ),

      h('section', {},
        h('h2', {}, 'Mosaicos por categoria'),
        h('p', {}, 'Mosaicos especializados representando categorias de refeição — derivam do mesmo vocabulário modular.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'var(--ru-space-3)' } },
          h('div', {},
            h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-raised)', padding: 'var(--ru-space-4)' } },
              h('img', { src: 'illustrations/frutas.svg', alt: 'Frutas', style: { maxWidth: '200px' } })
            ),
            h('div', { style: { fontWeight: 'var(--ru-font-weight-semibold)', marginTop: 'var(--ru-space-1)' } }, 'Frutas'),
            h('code', { style: { fontSize: 'var(--ru-font-size-xs)' } }, '/illustrations/frutas.svg'),
          ),
          h('div', {},
            h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-raised)', padding: 'var(--ru-space-4)' } },
              h('img', { src: 'illustrations/desserts.svg', alt: 'Sobremesas', style: { maxWidth: '200px' } })
            ),
            h('div', { style: { fontWeight: 'var(--ru-font-weight-semibold)', marginTop: 'var(--ru-space-1)' } }, 'Sobremesas'),
            h('code', { style: { fontSize: 'var(--ru-font-size-xs)' } }, '/illustrations/desserts.svg'),
          ),
          h('div', {},
            h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-raised)', padding: 'var(--ru-space-4)' } },
              h('img', { src: 'illustrations/cutlery-plates.svg', alt: 'Talheres e pratos', style: { maxWidth: '200px' } })
            ),
            h('div', { style: { fontWeight: 'var(--ru-font-weight-semibold)', marginTop: 'var(--ru-space-1)' } }, 'Talheres e pratos'),
            h('code', { style: { fontSize: 'var(--ru-font-size-xs)' } }, '/illustrations/cutlery-plates.svg'),
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Mosaicos por dia da semana'),
        h('p', {}, 'Use as cores ', h('code', {}, '--ru-color-day-*'), ' para criar mosaicos categorizados por dia. Útil em cardápios e sinalização rotativa.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 'var(--ru-space-2)' } },
          ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'].map(dia => {
            const cor = tokens.ru.color.day[dia];
            return h('div', { style: { textAlign: 'center' } },
              h('div', { style: { aspectRatio: '1', background: cor, borderRadius: 'var(--ru-radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 'var(--ru-font-size-xs)', textTransform: 'uppercase', letterSpacing: '.05em' } }, dia.slice(0, 3)),
              h('div', { style: { fontSize: 'var(--ru-font-size-xs)', marginTop: '4px', textTransform: 'capitalize' } }, dia),
              h('code', { style: { fontSize: '10px', color: 'var(--ru-color-text-muted)' } }, cor),
            );
          })
        ),
      ),

      h('section', {},
        h('h2', {}, 'Aplicações no mundo real'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ru-space-3)' } },
          h('div', {},
            h('div', { style: { background: `linear-gradient(135deg, ${C.amarelo}, ${C.laranja})`, padding: 'var(--ru-space-6)', borderRadius: 'var(--ru-radius-lg)', color: '#1A0E00' } },
              h('div', { style: { fontWeight: 700, fontSize: 'var(--ru-font-size-2xl)' } }, 'CARDÁPIO'),
              h('div', { style: { fontSize: 'var(--ru-font-size-md)', opacity: .8 } }, 'Segunda · 11h-14h'),
            ),
            h('div', { style: { fontSize: 'var(--ru-font-size-xs)', color: 'var(--ru-color-text-muted)', marginTop: '4px' } }, 'Header de cardápio'),
          ),
          h('div', {},
            h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: '120px', borderRadius: 'var(--ru-radius-lg)', overflow: 'hidden' } },
              h('div', { style: { background: C.azul } }),
              h('div', { style: { background: C.vermelho } }),
              h('div', { style: { background: C.amarelo } }),
              h('div', { style: { background: C.verde } }),
              h('div', { style: { background: C.azulClaro } }),
              h('div', { style: { background: C.vermelhoClaro } }),
              h('div', { style: { background: C.amareloClaro } }),
              h('div', { style: { background: C.verdeClaro } }),
            ),
            h('div', { style: { fontSize: 'var(--ru-font-size-xs)', color: 'var(--ru-color-text-muted)', marginTop: '4px' } }, 'Grid colorido — sinalização externa'),
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Como compor um mosaico próprio'),
        h('ol', {},
          h('li', {}, 'Comece com grid 4×4 ou 6×6 de módulos quadrados.'),
          h('li', {}, 'Distribua as ', h('strong', {}, '5 cores'), ' (amarelo, verde, azul, vermelho, cinza) + branco em proporções balanceadas.'),
          h('li', {}, 'Insira ', h('strong', {}, 'formas geométricas simples'), ': círculos, semicírculos, triângulos e diagonais cruzando os módulos.'),
          h('li', {}, 'Use sobreposições com ', h('code', {}, 'opacity: 0.7'), ' para criar profundidade.'),
          h('li', {}, 'Evite simetria perfeita — o mosaico deve sentir-se vivo e dinâmico.'),
        ),
        h('div', { class: 'callout' },
          h('p', {}, 'Mosaicos canônicos estão em ', h('code', {}, 'public/patterns/'), '. Para novos mosaicos, abra PR no ',
            h('a', { href: 'https://github.com/thiagoprazeres-ufpe/design-system-ufpe', target: '_blank' }, 'GitHub'), '.')),
      ),
    );
  },
};
