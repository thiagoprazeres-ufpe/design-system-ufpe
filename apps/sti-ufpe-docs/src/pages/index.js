import { overview } from './overview.js';
import { colorsPage } from './foundations/colors.js';
import { typographyPage } from './foundations/typography.js';
import { spacingPage } from './foundations/spacing.js';
import { gradientesPage } from './foundations/gradientes.js';
import { logoPage } from './components/logo.js';
import { avataresPage } from './components/avatares.js';
import { diretoriasPage } from './components/diretorias.js';
import { guidelinesIntro } from './guidelines/intro.js';
import { construcao } from './guidelines/construcao.js';
import { areaProtecao } from './guidelines/area-protecao.js';
import { reducao } from './guidelines/reducao.js';
import { usosIncorretos } from './guidelines/usos-incorretos.js';
import { resourcesIndex } from './resources/index.js';
import { changelog } from './changelog.js';

export const pages = {
  overview,
  'foundations/colors': colorsPage,
  'foundations/typography': typographyPage,
  'foundations/spacing': spacingPage,
  'foundations/gradientes': gradientesPage,
  'components/logo': logoPage,
  'components/avatares': avataresPage,
  'components/diretorias': diretoriasPage,
  'guidelines/intro': guidelinesIntro,
  'guidelines/construcao': construcao,
  'guidelines/area-protecao': areaProtecao,
  'guidelines/reducao': reducao,
  'guidelines/usos-incorretos': usosIncorretos,
  'resources': resourcesIndex,
  'changelog': changelog,
};

export const groups = [
  { name: 'Get started', pageIds: ['overview'] },
  { name: 'Foundations', pageIds: ['foundations/colors', 'foundations/typography', 'foundations/spacing', 'foundations/gradientes'] },
  { name: 'Components',  pageIds: ['components/logo', 'components/avatares', 'components/diretorias'] },
  { name: 'Guidelines',  pageIds: ['guidelines/intro', 'guidelines/construcao', 'guidelines/area-protecao', 'guidelines/reducao', 'guidelines/usos-incorretos'] },
  { name: 'Resources',   pageIds: ['resources', 'changelog'] },
];
