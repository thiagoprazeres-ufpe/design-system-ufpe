import { effect } from '@preact/signals-core';
import { currentPage } from './signals.js';
import { pages } from './pages/index.js';

const app = document.getElementById('app');
app.className = 'app';

// Sidebar
const sidebar = document.createElement('aside');
sidebar.className = 'sidebar';
sidebar.innerHTML = `<h1>Design System<br>UFPE</h1>`;
const nav = document.createElement('nav');
sidebar.appendChild(nav);

const groups = {};
Object.entries(pages).forEach(([id, page]) => {
  groups[page.group] ??= [];
  groups[page.group].push([id, page]);
});

Object.entries(groups).forEach(([groupName, items]) => {
  const g = document.createElement('div');
  g.className = 'group';
  g.textContent = groupName;
  nav.appendChild(g);
  items.forEach(([id, page]) => {
    const btn = document.createElement('button');
    btn.textContent = page.label;
    btn.dataset.id = id;
    btn.addEventListener('click', () => { currentPage.value = id; });
    nav.appendChild(btn);
  });
});

// Default selection
if (!pages[currentPage.value]) currentPage.value = 'introducao';

const main = document.createElement('main');
main.className = 'main';
app.append(sidebar, main);

effect(() => {
  const id = currentPage.value;
  // mark active
  nav.querySelectorAll('button').forEach(b => {
    b.setAttribute('aria-current', b.dataset.id === id ? 'true' : 'false');
  });
  main.innerHTML = '';
  const page = pages[id];
  if (page) page.render(main);
});
