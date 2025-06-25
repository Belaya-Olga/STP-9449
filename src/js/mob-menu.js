const toggleBtn = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-backdrop-header]');
const overlay = document.querySelector('[data-overlay]');

if (toggleBtn && menu && overlay) {
  const openMenu = () => {
    menu.setAttribute('data-open', 'true');
    overlay.setAttribute('data-visible', 'true');
    document.body.setAttribute('data-menu-open', 'true');
  };

  const closeMenu = () => {
    menu.setAttribute('data-open', 'false');
    overlay.setAttribute('data-visible', 'false');
    document.body.removeAttribute('data-menu-open');
  };

  toggleBtn.addEventListener('click', () => {
    const isOpen = document.body.getAttribute('data-menu-open') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  const menuLinks = menu.querySelectorAll('a[href^="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}
