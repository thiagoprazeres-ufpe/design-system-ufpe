import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { CodeBlock } from '../../components/CodeBlock.js';

const PENPOT_URL = null;

export const logoPage = {
  label: 'Logo',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Logo STI',
        lede: 'Marca STI oficial em três layouts: símbolo isolado, horizontal (com brasão UFPE) e horizontal com nome por extenso.',
        status: 'stable',
        penpotUrl: PENPOT_URL,
      }),

      h('section', {},
        h('h2', {}, 'Símbolo'),
        h('p', {}, 'Versão compacta — uso institucional em avatares, badges, ícones.'),
        h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 'var(--space-2)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: 'marca/logo-sti-colorido.svg', alt: 'STi colorido', style: { maxHeight: '120px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: 'marca/logo-sti-preto.svg', alt: 'STi preto', style: { maxHeight: '120px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-inverse)' } },
            h('img', { src: 'marca/logo-sti-branco.svg', alt: 'STi branco', style: { maxHeight: '120px' } })
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Horizontal — com brasão UFPE'),
        h('p', {}, 'Versão padrão para a maioria das aplicações: brasão UFPE + símbolo STI lado a lado.'),
        h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
          h('img', { src: 'marca/logo-sti-colorido-horizontal.svg', alt: 'STI horizontal colorido', style: { maxWidth: '420px' } })
        ),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-2)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: 'marca/logo-sti-preto-horizontal.svg', alt: 'horizontal preto', style: { maxWidth: '260px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-inverse)' } },
            h('img', { src: 'marca/logo-sti-branco-horizontal.svg', alt: 'horizontal branco', style: { maxWidth: '260px' } })
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Horizontal por extenso'),
        h('p', {}, 'Aplicações institucionais formais — inclui o nome ', h('em', {}, 'Superintendência de Tecnologia da Informação'), '.'),
        h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
          h('img', { src: 'marca/logo-sti-colorido-horizontal-extenso.svg', alt: 'STI extenso colorido', style: { maxWidth: '540px' } })
        ),
        h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)', marginTop: 'var(--space-2)' } },
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-default)' } },
            h('img', { src: 'marca/logo-sti-preto-horizontal-extenso.svg', alt: 'extenso preto', style: { maxWidth: '320px' } })
          ),
          h('div', { class: 'preview-box', style: { background: 'var(--color-surface-inverse)' } },
            h('img', { src: 'marca/logo-sti-branco-horizontal-extenso.svg', alt: 'extenso branco', style: { maxWidth: '320px' } })
          ),
        ),
      ),

      h('section', {},
        h('h2', {}, 'Uso'),
        CodeBlock({ language: 'html', code: '<!-- só símbolo -->\n<img src="marca/logo-sti-colorido.svg" alt="STI" />\n\n<!-- com brasão UFPE (padrão) -->\n<img src="marca/logo-sti-colorido-horizontal.svg" alt="STI · UFPE" />\n\n<!-- por extenso (formal) -->\n<img src="marca/logo-sti-colorido-horizontal-extenso.svg" alt="STI · Superintendência de Tecnologia da Informação · UFPE" />\n\n<!-- fundos escuros -->\n<img src="marca/logo-sti-branco-horizontal.svg" alt="STI · UFPE" />' }),
      ),

      h('section', {},
        h('h2', {}, 'Regras'),
        h('ul', {},
          h('li', {}, 'Cor primária do símbolo: bordô ', h('code', {}, '#b30638'), '; "T" e "i" em laranja ', h('code', {}, '#f7941d'), '.'),
          h('li', {}, 'Em aplicações institucionais, prefira a versão ', h('strong', {}, 'horizontal'), ' (com brasão UFPE).'),
          h('li', {}, 'Símbolo isolado: apenas em contextos onde a relação STI–UFPE já está estabelecida (avatares, favicons, marcas d\'água).'),
          h('li', {}, 'Em fundos coloridos escuros: usar versão branca.'),
        ),
      ),
    );
  },
};
