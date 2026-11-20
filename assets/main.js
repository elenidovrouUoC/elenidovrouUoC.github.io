// No frameworks or external services required. Edit directly in GitHub.
const menu = document.getElementById('menu-button');
const nav = document.getElementById('site-nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}
const year = document.getElementById('copyright-year');
if (year) year.textContent = new Date().getFullYear();
