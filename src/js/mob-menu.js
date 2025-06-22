
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');

openBtn.addEventListener('click', () => {
  menu.setAttribute('data-open', 'true');
  overlay.setAttribute('data-visible', 'true');
  document.body.setAttribute('data-menu-open', 'true');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  menu.setAttribute('data-open', 'false');
  overlay.setAttribute('data-visible', 'false');
  document.body.removeAttribute('data-menu-open');
}
