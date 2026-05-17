# @ufpe/design-system

> Design system da **Universidade Federal de Pernambuco**, derivado fielmente do [Manual de Identidade Visual da UFPE](./manual_identidade.pdf).

Stack: **Vite + Vanilla JS + [@preact/signals-core](https://github.com/preactjs/signals)**.

> O uso da identidade visual da UFPE é exclusivo para membros da instituição.

## Início rápido

```bash
npm install
npm run dev          # showcase em http://localhost:5173
npm run build        # bundle estático em dist/
npm run penpot:export # gera bundle Penpot em dist/penpot/
```

## Estrutura

```
.
├── docs/manual.md              # PDF → Markdown
├── public/                     # SVGs (logos, assinaturas, submarcas, raw/)
├── packages/tokens/            # colors, typography, spacing (ESM)
├── src/
│   ├── components/             # Logo, ColorSwatch, TypeSpecimen, ConstructionGrid, ProtectionArea, DontDo
│   ├── pages/                  # showcase por seção do manual
│   ├── styles/base.css         # variáveis CSS dos tokens
│   ├── signals.js              # estado global reativo
│   └── main.js                 # entrada Vite
├── penpot/                     # handoff invertido (library.json, export script)
├── ROADMAP.md                  # 0.1 → 1.0
└── manual_identidade.pdf       # documento canônico
```

## Tokens (ESM)

```js
import { colors, fontFamily, markRatios } from '@ufpe/design-system/tokens';

colors.bordo.hex;   // '#990000'  (Pantone 201C, CMYK C0 M100 Y63 K29)
colors.preto.hex;   // '#000000'
fontFamily;         // '"Trebuchet MS", "Lucida Grande", Tahoma, sans-serif'
markRatios.height;  // 1.5  (altura do brasão em unidades x)
```

CSS custom properties expostas em `src/styles/base.css` (prefixo `--ufpe-`).

## Fonte tipográfica

A fonte oficial é **Trebuchet MS** (Vincent Connare, Microsoft, 1996). Como não há webfont oficial open-source, usamos a stack do sistema:

```css
font-family: "Trebuchet MS", "Lucida Grande", Tahoma, sans-serif;
```

A renderização pode variar entre sistemas operacionais. Para fidelidade máxima em peças impressas, use o aplicativo original com a fonte instalada.

## Brasão

Kit oficial UFPE em `public/brasoes/`, com duas variantes (`sigla/` e `extenso/`) e os formatos:

| Formato | Uso |
|---|---|
| `*-rgb.svg` | Web (gerado de `*-rgb.pdf` via `pdftocairo`) |
| `*-rgb.pdf` | Distribuição vetorial multiplataforma |
| `*-rgb.ai`  | Edição (Adobe Illustrator) |
| `*-rgb.eps` | Impressão profissional |
| `*-rgb.png` / `*-rgb.jpg` | Raster colorido |
| `*-preto.png` / `*-branco.png` | Monocromático (positivo/negativo) |

Os SVGs são regenerados automaticamente pelo `predev`/`prebuild` (script `scripts/build-svgs.sh`, requer `pdftocairo` do poppler: `brew install poppler`).

## Handoff invertido — Penpot

Veja [penpot/README.md](./penpot/README.md). O código é a fonte da verdade; o Penpot consome.

## Licença

Uso restrito a membros da Universidade Federal de Pernambuco, conforme determinado pelo Manual de Identidade Visual.

## Contribuir

Issues e PRs alinhados ao [ROADMAP.md](./ROADMAP.md). Mudanças que afetem tokens ou marca requerem aprovação da Diretoria de Comunicação.
