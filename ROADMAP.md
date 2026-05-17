# Roadmap — Design System UFPE

Marcos até a versão **1.0.0**. Versionamento semântico (SemVer).

| Versão | Escopo | Status |
|---|---|---|
| **0.1.0** | Scaffold Vite + tokens (cores, tipografia, spacing) + brasão SVG inicial + showcase base | ✅ |
| **0.2.0** | Transcrição completa `docs/manual.md` (PDF → Markdown fiel) | ✅ |
| **0.3.0** | Componente `<Logo>` com kit oficial UFPE (SVG/PDF/AI/EPS/PNG) + área de proteção + malha construtiva interativa | ✅ |
| **0.4.0** | Assinaturas institucionais como SVGs paramétricos: Pró-reitorias, Centros, Superintendências, Departamentos | 📅 |
| **0.5.0** | Submarcas + papelaria (ofício, envelopes, cartão, certificado) | 📅 |
| **0.6.0** | DontDo / validadores (contraste WCAG AA, área de proteção, redução mínima) | 📅 |
| **0.7.0** | Exporters: CSS vars, JSON (W3C Design Tokens), TypeScript types | 📅 |
| **0.8.0** | Penpot handoff — camada 1 (library.json + drag-and-drop) | ✅ stub |
| **0.9.0** | Penpot handoff — camada 2 (.penpot ZIP) + testes visuais (Playwright screenshot-diff) + deploy docs (GH Pages) | 📅 |
| **1.0.0** | Cobertura 100% do manual, Penpot CLI/API em CI, CHANGELOG, licença formalizada | 📅 |

## Critérios de release 1.0.0

- [ ] Todas as 58 páginas do manual representadas no showcase.
- [ ] Brasão redesenhado a partir da malha construtiva (não placeholder).
- [ ] Cobertura de testes visuais > 90%.
- [ ] Documentação publicada (GH Pages) com URL canônica.
- [ ] Biblioteca Penpot publicada e importável por 1 clique.
- [ ] Aprovação formal da Diretoria de Comunicação da UFPE.

## Fora do escopo até 1.0

- Componentes de UI genéricos (botões, forms, modais) — escopo para 2.x.
- Tema escuro — escopo para 2.x.
- App mobile / React Native — escopo separado.
