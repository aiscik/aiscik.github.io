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

// Section-jump dropdowns under the About and Call for Papers nav items.
// Progressive enhancement: without JS the nav links still open each page.
const sectionMenus = {
  '/': [
    ['About the workshop', '#about'],
    ['Scope', '#scope'],
    ['Topics of Interest', '#topics'],
    ['FAQ', '#faq'],
    ['Important dates', '#dates'],
    ['Invited speakers & panelists', '#speakers'],
    ['Organizers', '#organizers'],
  ],
  '/call-for-papers/': [
    ['Call for papers', '#cfp'],
    ['Important dates', '#dates'],
    ['Tracks', '#tracks'],
    ['Submission guidelines', '#submission'],
    ['Policies', '#policies'],
    ['Review process', '#review-process'],
  ],
};

Object.entries(sectionMenus).forEach(([path, sections]) => {
  const link = document.querySelector('.nav-menu > li > a[href="' + path + '"]');
  if (!link) return;
  const li = link.parentElement;
  li.classList.add('nav-has-menu');
  const submenu = document.createElement('ul');
  submenu.className = 'nav-submenu';
  sections.forEach(([label, hash]) => {
    const item = document.createElement('li');
    const a = document.createElement('a');
    a.href = path + hash;
    a.textContent = label;
    item.appendChild(a);
    submenu.appendChild(item);
  });
  li.appendChild(submenu);
});
