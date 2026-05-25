import { effect } from '@preact/signals-core';
import { currentPage } from './signals.js';
import { pages, groups } from './pages/index.js';
import buildInfo from './build-info.js';
import { publicAsset } from './utils/publicAsset.js';

const app = document.getElementById('app');
app.className = 'app';

// --- sidebar ---
const sidebar = document.createElement('aside');
sidebar.className = 'sidebar';
sidebar.innerHTML = `
  <div class="brand">
    <img src="${publicAsset('brasoes/sigla/sigla-branco.png')}" alt="UFPE" />
    <div>
      <strong>UFPE</strong>
      <small>Design System</small>
    </div>
  </div>`;

const nav = document.createElement('nav');
sidebar.appendChild(nav);

groups.forEach(({ name, pageIds }) => {
  const g = document.createElement('div');
  g.className = 'group';
  g.textContent = name;
  nav.appendChild(g);
  pageIds.forEach(id => {
    const page = pages[id];
    const btn = document.createElement('button');
    btn.textContent = page.label;
    btn.dataset.id = id;
    btn.addEventListener('click', () => {
      currentPage.value = id;
      location.hash = id;
    });
    nav.appendChild(btn);
  });
});

// Footer com versão + link GitHub
const footer = document.createElement('div');
footer.className = 'sidebar-footer';
const label = buildInfo.tag || `v${buildInfo.version}`;
const refUrl = buildInfo.tagUrl || buildInfo.commitUrl;
footer.innerHTML = `
  <a href="${refUrl}" target="_blank" rel="noopener" title="Ver no GitHub">
    <span class="ver">${label}</span>
    <span class="sha">${buildInfo.sha}${buildInfo.dirty ? '·dirty' : ''}</span>
  </a>`;
sidebar.appendChild(footer);

// --- main ---
const main = document.createElement('main');
main.className = 'main';
app.append(sidebar, main);

// --- mobile menu toggle ---
const toggle = document.createElement('button');
toggle.className = 'menu-toggle';
toggle.setAttribute('aria-label', 'Abrir menu');
toggle.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';
const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
const closeNav = () => document.body.classList.remove('nav-open');
toggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));
backdrop.addEventListener('click', closeNav);
nav.addEventListener('click', e => { if (e.target.matches('button[data-id]')) closeNav(); });
document.body.append(toggle, backdrop);

// Initial hash routing
const initial = location.hash.slice(1);
if (initial && pages[initial]) currentPage.value = initial;
else currentPage.value = 'overview';

window.addEventListener('hashchange', () => {
  const id = location.hash.slice(1);
  if (pages[id]) currentPage.value = id;
});

effect(() => {
  const id = currentPage.value;
  nav.querySelectorAll('button').forEach(b => {
    b.setAttribute('aria-current', b.dataset.id === id ? 'true' : 'false');
  });
  main.innerHTML = '';
  const page = pages[id];
  if (page) page.render(main);
  main.scrollTo?.(0, 0);
});
