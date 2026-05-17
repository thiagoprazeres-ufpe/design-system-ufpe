import { effect } from '@preact/signals-core';
import { currentPage } from './signals.js';
import { pages, groups } from './pages/index.js';

const app = document.getElementById('app');
app.className = 'app';

// --- sidebar ---
const sidebar = document.createElement('aside');
sidebar.className = 'sidebar';
sidebar.innerHTML = `
  <div class="brand">
    <img src="/brasoes/sigla/sigla-branco.png" alt="UFPE" />
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

// --- main ---
const main = document.createElement('main');
main.className = 'main';
app.append(sidebar, main);

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
