// Cores institucionais — Manual de Identidade Visual UFPE (pág. 07)
// Nota: o manual lista RGB R162 G37 B56 e Hex #990000. Há divergência:
// R162 G37 B56 ≈ #A23738. Adotamos #990000 (hex oficial impresso).

export const colors = {
  bordo: {
    name: 'Bordô',
    hex: '#990000',
    rgb: { r: 162, g: 37, b: 56 },
    cmyk: { c: 0, m: 100, y: 63, k: 29 },
    pantone: '201C',
  },
  preto: {
    name: 'Preto',
    hex: '#000000',
    rgb: { r: 0, g: 0, b: 0 },
    cmyk: { c: 0, m: 0, y: 0, k: 100 },
    pantone: 'Black',
  },
  branco: {
    name: 'Branco',
    hex: '#ffffff',
    rgb: { r: 255, g: 255, b: 255 },
    cmyk: { c: 0, m: 0, y: 0, k: 0 },
  },
};

export const bordo = colors.bordo.hex;
export const preto = colors.preto.hex;
export const branco = colors.branco.hex;
