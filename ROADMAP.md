# Roadmap — UFPE Design System

| Versão | Escopo | Status |
|---|---|---|
| **0.1–0.3** | Tokens raw + showcase manual + kit oficial UFPE (sigla/extenso × rgb/preto/branco) | ✅ |
| **0.4.0** | Monorepo pnpm + `packages/tokens` em W3C DTCG + build próprio (CSS/JS/TS/Penpot JSON) | ✅ |
| **0.5.0** | `apps/docs` (portal zeroheight-style) — substitui o showcase | ✅ |
| **0.6.0** | Workspace Penpot criado + library `UFPE / Foundations` publicada (color/typo/spacing) | 📅 |
| **0.7.0** | Library `UFPE / Marca` — Logo com variants `sigla` / `extenso` × `rgb` / `preto` / `branco` | 📅 |
| **0.8.0** | `@ufpe/penpot-plugin` v1 — push DTCG → Penpot (cores) | ✅ scaffold |
| **0.9.0** | Plugin v2 — pull tokens (PR automático via Octokit) + validador WCAG AA | 📅 |
| **1.0.0** | Library `UFPE / Assinaturas Institucionais` (Pró-reitorias, Centros, Superintendências, Departamentos) + RPC scripts (publish-library, export-snapshot) em produção + docs publicado em ufpe-design-system.pages.dev | 📅 |
| **1.1.0** | Library `UFPE / Submarcas` | 📅 |
| **1.2.0** | Library `UFPE / Aplicações & Papelaria` (ofício, envelope, cartão, certificado, avatar) usando Flexible Layouts | 📅 |
| **2.0.0** | Validador de marca completo (área de proteção, redução mínima, usos incorretos) + tema escuro | 📅 |
| **2.1.0** | Contribution flow (RFC template, design review process) | 📅 |
| **3.0.0** | Self-host Penpot UFPE + SSO institucional + governança formal | 📅 |

## Critérios para 1.0

- [ ] Workspace Penpot oficial UFPE criado e team configurado.
- [ ] Foundations + Marca + Assinaturas publicadas como Shared Libraries.
- [ ] Plugin Penpot publicado em Cloudflare Pages, URL estável.
- [ ] Docs portal publicado em `https://ufpe-design-system.pages.dev`.
- [ ] CI: tokens-build, penpot-snapshot (nightly), release (tag v*), docs-deploy.
- [ ] Approval formal da Diretoria de Comunicação UFPE.

## Fora do escopo até 1.0

- Componentes de UI genéricos (botões, forms, modais) — escopo 2.x.
- Self-hosting Penpot — escopo 3.0.
- Integrações Figma/Sketch — não previstas.

---

## Backlog (pendências abertas)

Issues no GitLab: https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues

### Infra (alta prioridade)

| # | Issue | Bloqueia |
|---|---|---|
| [#1](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/1) | Transferir repo para grupo `stilabs` | CI rodar (#2) |
| [#2](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/2) | Cloudflare: criar API token permanente | Deploy via CI |

### Plugin Penpot (média prioridade)

| # | Issue |
|---|---|
| [#3](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/3) | SDK API incorreta no push de tokens (toast vermelho) |
| [#4](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/4) | Pull com MR via GitLab API |
| [#5](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/5) | Validador de marca (contraste, área de proteção, redução) |

### Penpot infra / scripts

| # | Issue |
|---|---|
| [#6](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/6) | `export-snapshot` exige PENPOT_PASSWORD (asset URL não aceita PAT) |
| [#8](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/8) | Penpot self-hosted UFPE (v3.0) |

### Roadmap longo prazo

| # | Issue |
|---|---|
| [#7](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/7) | Cloudflare custom domain `ds.ufpe.br` (purge instantâneo) |
| [#9](https://gitlab.ufpe.br/thiago.prazeres/design-system-ufpe/-/issues/9) | Vetorização real do brasão (paths nomeados) |
