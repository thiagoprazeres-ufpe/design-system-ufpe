# UFPE Design Systems

**Penpot é a implementação.** Este monorepo hospeda o design system UFPE raiz e suas submarcas:

- **UFPE raiz** (`apps/ufpe-docs/`) com tokens `@ufpe/tokens` e plugin `@ufpe/penpot-plugin`.
- **STI UFPE** (`apps/sti-ufpe-docs/`) com tokens `@sti-ufpe/tokens` e plugin `@sti-ufpe/penpot-plugin`.
- **RU Portal3** (`apps/ru-portal3-docs/`) com tokens `@ru/tokens` e plugin `@ru/penpot-plugin`.
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
| CI / Releases | GitHub Actions + GitHub Pages |

## Estrutura (monorepo pnpm)

```
ufpe-design-system/
├── packages/
│   ├── tokens/                     # UFPE raiz
│   ├── tokens-sti-ufpe/            # STI UFPE
│   ├── tokens-ru-portal3/          # RU Portal3
│   ├── penpot-plugin/
│   ├── penpot-plugin-sti-ufpe/
│   └── penpot-plugin-ru-portal3/
├── apps/
│   ├── ufpe-docs/
│   ├── sti-ufpe-docs/
│   └── ru-portal3-docs/
├── penpot/
│   ├── files/           # snapshots .penpot (CI nightly)
│   ├── library.config.json
│   ├── rpc.js
│   └── scripts/         # export-snapshot, publish-library, verify-drift
├── scripts/build-pages.sh
├── .github/workflows/   # tokens-build, penpot-sync, penpot-snapshot, release, docs-deploy
└── ROADMAP.md
```

## Início rápido

```bash
# Setup
corepack enable && corepack prepare pnpm@9 --activate
pnpm install

# Tokens
pnpm tokens:build                    # gera CSS/JS/TS/Penpot JSON dos três sistemas
cat packages/tokens/src/tokens.css

# Docs
pnpm dev:ufpe                        # localhost:5173
pnpm dev:sti                         # localhost:5175
pnpm dev:ru                          # localhost:5176

# Build Pages completo
pnpm build

# Plugin Penpot
pnpm dev:plugin                      # localhost:5174
# instale no Penpot: Menu → Plugins → Add → http://localhost:5174/manifest.json

# Penpot CI (requer PENPOT_TOKEN)
pnpm penpot:snapshot                 # exporta .penpot dos files configurados
pnpm penpot:publish                  # marca shared + link-file-to-library
pnpm penpot:verify                   # checa drift entre git e Penpot
```

## Brasão

Kit oficial em `apps/ufpe-docs/public/brasoes/`:

```
apps/ufpe-docs/public/brasoes/
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
- **Merge em master** → CI deploya docs + plugin para GitHub Pages.
- **Designer edita no Penpot** → plugin "Pull" → PR no GitHub (v0.9).
- **Tag `v*`** → release Penpot library publish + `tokens.penpot.json` artifact.

## Produção

| Recurso | URL |
|---|---|
| Portal de docs | https://thiagoprazeres-ufpe.github.io/design-system-ufpe |
| STI UFPE | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/sti-ufpe/ |
| RU Portal3 | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/ru-portal3/ |
| Plugin Penpot (manifest) | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/plugin/manifest.json |
| Plugin Penpot STI | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/sti-ufpe/plugin/manifest.json |
| Plugin Penpot RU | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/submarcas/ru-portal3/plugin/manifest.json |
| Tokens DTCG UFPE | https://thiagoprazeres-ufpe.github.io/design-system-ufpe/tokens/tokens.penpot.json |
| Repo | https://github.com/thiagoprazeres-ufpe/design-system-ufpe |

### Deploy

GitHub Actions (`.github/workflows/deploy-pages.yml`) roda `pnpm build:pages` e publica o artifact `apps/ufpe-docs/dist` em GitHub Pages a cada push em `master`. Sem secrets necessários — usa o token automático `GITHUB_TOKEN`.

### Git LFS


PDFs e arquivos `.penpot` são versionados via Git LFS (configurado em `.gitattributes`). Clone com:

```bash
git lfs install
git clone https://github.com/thiagoprazeres-ufpe/design-system-ufpe.git
```

## Penpot — caveats

- A REST API (`/api/rpc/command/*`) é marcada como **internal**. Para uso institucional, planeje self-host (v3.0) com versão pinned.
- Component/variant authoring é **only-editor** — não há autoria headless.
- Plugin roda em iframe sandboxed dentro do editor; CI não exercita o plugin.

## Licença

Uso restrito a membros da Universidade Federal de Pernambuco, conforme determinado pelo Manual de Identidade Visual da UFPE.

## Contribuir

Veja [ROADMAP.md](./ROADMAP.md). Mudanças que afetam tokens ou componentes da marca requerem aprovação da Diretoria de Comunicação.
