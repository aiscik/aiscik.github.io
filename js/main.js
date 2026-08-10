// Progressive enhancement only — the site works fully without JS.

// Mobile nav toggle. The current page is marked statically in each page's
// HTML with aria-current="page", so there is nothing to compute here.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Close the menu after choosing a page
  menu.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
