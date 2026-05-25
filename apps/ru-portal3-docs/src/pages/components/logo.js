import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const PENPOT_URL = null;

export const logoPage = {
  label: 'Logo',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Logo RU',
        lede: 'Marca RU em quatro layouts (horizontal claro/escuro, vertical, monocromático). RU = Restaurante Universitário, marca autônoma.',
        status: 'stable',
        penpotUrl: PENPOT_URL,
      }),

      h('section', {},
        h('h2', {}, 'Principal — horizontal'),
        h('p', {}, 'Use ', h('code', {}, 'brand-light.svg'), ' em fundos claros e ', h('code', {}, 'brand-dark.svg'), ' em fundos escuros — o sufixo indica o ', h('strong', {}, 'fundo de aplicação'), ', não a cor do logo.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ru-space-3)' } },
          h('div', {},
            h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)' } },
              h('img', { src: 'marca/brand-light.svg', alt: 'RU para fundos claros', style: { maxWidth: '360px' } })
            ),
            h('div', { style: { fontSize: 'var(--ru-font-size-xs)', color: 'var(--ru-color-text-muted)', marginTop: '4px' } }, 'brand-light.svg (fundos claros)'),
          ),
          h('div', {},
            h('div', { class: 'preview-box', style: { background: 'var(--ru-color-brand-cinzaEscuro)' } },
              h('img', { src: 'marca/brand-dark.svg', alt: 'RU para fundos escuros', style: { maxWidth: '360px' } })
            ),
            h('div', { style: { fontSize: 'var(--ru-font-size-xs)', color: 'var(--ru-color-text-muted)', marginTop: '4px' } }, 'brand-dark.svg (fundos escuros)'),
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Vertical'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ru-space-3)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)' } },
            h('img', { src: 'marca/logo-ru-vertical.svg', alt: 'RU vertical', style: { maxWidth: '200px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)' } },
            h('img', { src: 'marca/ru-ufpe.svg', alt: 'RU UFPE', style: { maxWidth: '200px' } })
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Monocromático'),
        h('p', {}, 'Versões em uma única cor escura — para fundos claros, impressão de baixo custo ou contextos onde a paleta colorida não pode ser usada.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--ru-space-3)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)' } },
            h('img', { src: 'marca/logo-monochrome-horizontal-light.svg', alt: 'Mono horizontal', style: { maxWidth: '320px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--ru-color-surface-base)' } },
            h('img', { src: 'marca/logo-monochrome-vertical-light.svg', alt: 'Mono vertical', style: { maxWidth: '160px' } })
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'html', code: '<!-- principal -->\n<img src="marca/brand-dark.svg" alt="RU · Restaurante Universitário" />\n\n<!-- fundos escuros -->\n<img src="marca/brand-light.svg" alt="RU · Restaurante Universitário" />\n\n<!-- monocromático para impressão / contextos restritos -->\n<img src="marca/logo-monochrome-horizontal-light.svg" alt="RU" />' }),
      ),

      h('section', {},
        h('h2', {}, 'Regras'),
        h('ul', {},
          h('li', {}, 'Marca RU é ', h('strong', {}, 'autônoma'), ' — opera independente do brasão UFPE no produto digital.'),
          h('li', {}, 'Variante institucional UFPE+RU (', h('code', {}, 'ru-ufpe.svg'), ') só em contextos onde a relação institucional precisa ser explícita (e-mails, certificados).'),
          h('li', {}, 'Mantenha área de proteção mínima de ', h('code', {}, 'var(--ru-space-3)'), ' ao redor do logo.'),
          h('li', {}, 'Não usar brasão UFPE isolado, selo ou assinatura institucional na superfície RU digital.'),
        ),
      ),
    );
  },
};
