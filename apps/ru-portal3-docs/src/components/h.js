// Tiny hyperscript helper for vanilla DOM building.
import { publicAsset } from '../utils/publicAsset.js';

const PUBLIC_ROOTS = ['marca/', 'illustrations/', 'patterns/'];

function attrValue(k, v) {
  if ((k === 'src' || k === 'href') && typeof v === 'string') {
    const clean = v.replace(/^\/+/, '');
    if (PUBLIC_ROOTS.some(root => clean.startsWith(root))) return publicAsset(clean);
  }

  return v;
}

export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== false && v != null) el.setAttribute(k, attrValue(k, v));
  }
  for (const c of children.flat()) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}
