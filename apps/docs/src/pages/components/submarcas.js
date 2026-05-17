import { h } from '../../components/h.js';
import { PageHeader } from '../../components/PageHeader.js';
import { PenpotEmbed } from '../../components/PenpotEmbed.js';

export const submarcasPage = {
  label: 'Submarcas',
  render(root) {
    root.append(
      PageHeader({
        eyebrow: 'Components', title: 'Submarcas',
        lede: 'Identidades visuais derivadas para programas, eventos ou projetos da Universidade — vinculadas à marca-mãe sem competir com ela.',
        status: 'beta',
      }),
      h('section', {}, PenpotEmbed({ url: null })),
      h('div', { class: 'callout' },
        h('p', {}, 'Catálogo de submarcas será publicado na library ', h('code', {}, 'UFPE / Submarcas'), ' (v1.1).')),
    );
  },
};
