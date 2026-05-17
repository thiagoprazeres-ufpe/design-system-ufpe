# UFPE Design System

**Penpot é a implementação.** Este repositório hospeda:

- **Tokens** canônicos em [W3C DTCG](https://design-tokens.github.io/community-group/format/) (`packages/tokens/dtcg/`).
- **Plugin Penpot** para sincronizar tokens bidirecionalmente (`packages/penpot-plugin/`).
- **Portal de docs** estilo zeroheight (`apps/docs/`) consumindo tokens e referenciando a library Penpot.
- **Scripts CI** para publicar libraries Penpot, snapshots `.penpot` e releases (`penpot/scripts/`).

> O uso da identidade visual da UFPE é exclusivo para membros da instituição.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Implementação visual | [Penpot](https://design.penpot.app) (Shared Libraries + Components + Variants + Design Tokens nativos) |
| Tokens canônicos | W3C DTCG (JSON) |
| Build de tokens | Script vanilla (`packages/tokens/build.js`) → CSS / JS / TS / Penpot JSON |
| Sincronização | `@ufpe/penpot-plugin` (push/pull) |
| Portal de docs | Vite + `@preact/signals-core` |
| CI / Releases | GitHub Actions + Cloudflare Pages |

## Estrutura (monorepo pnpm)

```
ufpe-design-system/
├── packages/
│   ├── tokens/          # W3C DTCG canônico + builds derivados
│   └── penpot-plugin/   # plugin de sincronização
├── apps/
│   └── docs/            # portal zeroheight-style
├── penpot/
│   ├── files/           # snapshots .penpot (CI nightly)
│   ├── library.config.json
│   ├── rpc.js
│   └── scripts/         # export-snapshot, publish-library, verify-drift
├── public/brasoes/      # kit oficial UFPE (sigla + extenso)
├── .github/workflows/   # tokens-build, penpot-sync, penpot-snapshot, release, docs-deploy
├── manual_identidade.pdf
└── ROADMAP.md
```

## Início rápido

```bash
# Setup
corepack enable && corepack prepare pnpm@9 --activate
pnpm install

# Tokens
pnpm tokens:build                    # gera CSS/JS/TS/Penpot JSON
cat packages/tokens/src/tokens.css

# Docs
pnpm dev                             # localhost:5173

# Plugin Penpot
pnpm dev:plugin                      # localhost:5174
# instale no Penpot: Menu → Plugins → Add → http://localhost:5174/manifest.json

# Penpot CI (requer PENPOT_TOKEN)
pnpm penpot:snapshot                 # exporta .penpot dos files configurados
pnpm penpot:publish                  # marca shared + link-file-to-library
pnpm penpot:verify                   # checa drift entre git e Penpot
```

## Brasão

Kit oficial em `public/brasoes/`:

```
public/brasoes/
├── sigla/   sigla-rgb.{svg,pdf,ai,eps,png,jpg} + sigla-{preto,branco}.png
└── extenso/ extenso-rgb.{svg,pdf,ai,eps,png,jpg} + extenso-{preto,branco}.png
```

SVG é gerado dos PDFs vetoriais via `pdftocairo` (script `scripts/build-svgs.sh`). Para baixar versões individuais, use o portal: `/#resources`.

## Tokens — consumo

### Via npm (workspace)

```js
import { tokens } from '@ufpe/tokens';
tokens.color.brand.primary;  // '#990000'
tokens.mark.ratio.height;    // 1.5
```

### Via CSS

```css
@import '@ufpe/tokens/css';

.botao {
  background: var(--color-brand-primary);
  color: var(--color-brand-contrast);
  font-family: var(--font-family-sans);
  padding: var(--space-2) var(--space-3);
}
```

### No Penpot

`Assets → Libraries → +` → adicionar `UFPE / Foundations`.
Tokens DTCG sincronizados aparecem em `Design tokens`.

## Sincronização bidirecional

```
packages/tokens/dtcg/  ── push ──▶  Penpot library
        ▲                                 │
        │                                 │
        └─────── pull (PR) ───────────────┘
              via @ufpe/penpot-plugin
```

Pipeline:
- **PR de tokens** (`packages/tokens/dtcg/**`) → CI valida + gera build.
- **Merge em main** → workflow chama `verify-drift.js`.
- **Designer edita no Penpot** → plugin "Pull" → PR no GitHub.
- **Nightly snapshot** → `.penpot` commitado em `penpot/files/`.
- **Tag `v*`** → release com `tokens.penpot.json` + `.penpot` files + bundle.

## Penpot — caveats

- A REST API (`/api/rpc/command/*`) é marcada como **internal**. Para uso institucional, planeje self-host (v3.0) com versão pinned.
- Component/variant authoring é **only-editor** — não há autoria headless.
- Plugin roda em iframe sandboxed dentro do editor; CI não exercita o plugin.

## Licença

Uso restrito a membros da Universidade Federal de Pernambuco, conforme determinado pelo Manual de Identidade Visual ([manual_identidade.pdf](./manual_identidade.pdf)).

## Contribuir

Veja [ROADMAP.md](./ROADMAP.md). Mudanças que afetam tokens ou componentes da marca requerem aprovação da Diretoria de Comunicação.
