// Spacing — derivado da unidade construtiva x da marca
// (Manual UFPE, pág. 08 — "construção da marca").

export const baseX = 8; // px — unidade base do sistema

export const spacing = {
  x: `${baseX}px`,
  1: `${baseX * 1}px`,
  2: `${baseX * 2}px`,
  3: `${baseX * 3}px`,
  4: `${baseX * 4}px`,
  6: `${baseX * 6}px`,
  8: `${baseX * 8}px`,
};

// Proporções da marca (manual, pág. 08)
export const markRatios = {
  width: 1,        // x
  height: 1.5,     // 1.5x
  sigla: {
    width: 0.7,    // 0.7x — largura da palavra "UFPE"
    gap: 0.23,     // 0.23x — distância entre brasão e sigla
    rule: 1 / 10,  // x/10 — espessura da régua
  },
  extenso: {
    width: 1.2,    // 1.2x — largura "Universidade Federal de Pernambuco"
    gap: 0.53,     // 0.53x
    rule: 1 / 12,  // x/12
  },
};
