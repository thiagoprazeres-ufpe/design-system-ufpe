import { signal } from '@preact/signals-core';

// Estado global do showcase
export const currentPage = signal('marca-visao-geral');
export const markSize = signal(200);          // px — tamanho do brasão no preview
export const markVariant = signal('principal'); // principal | secundaria | negativo | positivo
export const markBg = signal('#ffffff');
