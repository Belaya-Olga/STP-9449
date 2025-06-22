// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });

const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');

openBtn.addEventListener('click', () => {
  menu.classList.add('is-open');
  overlay.classList.add('is-visible');
  document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
  menu.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  document.body.classList.remove('menu-open');
}
