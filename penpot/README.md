# Handoff invertido — Penpot

Este diretório implementa o **fluxo inverso** de handoff: em vez do designer entregar specs para o desenvolvedor, o código é a fonte da verdade e o Penpot consome os assets gerados.

## Estratégia em 3 camadas

### Camada 1 — Drag-and-drop manual (v0.8) ✅ atual
- `library.json` descreve cores, tipografia e componentes.
- `../public/` contém SVGs prontos para importação.
- **Fluxo**: abra um arquivo Penpot → arraste SVGs → marque-os como Componentes → publique como *Shared Library*.

### Camada 2 — Script de empacotamento (v0.9) 🚧
- `npm run penpot:export` → gera `dist/penpot/` com `library.json`, `tokens.json` (W3C Design Tokens) e SVGs.
- Próximo passo: empacotar como arquivo `.penpot` (ZIP com manifest).

### Camada 3 — API/CI (v1.0) 📅
- Upload automatizado via Penpot REST API a cada release semântico do design system.
- Pipeline GitHub Actions: tag `v*` → build → upload.

## Como usar agora

```bash
npm run penpot:export
# saída em dist/penpot/
```

Importe `dist/penpot/assets/brasoes/` no seu projeto Penpot e use `library.json` como referência para tokens.

## Por que "handoff invertido"?

O design system é versionado, testado e tipado em código. O design tool deve refletir esse estado canônico — nunca o contrário. Isso elimina drift entre Figma/Penpot e produção.
