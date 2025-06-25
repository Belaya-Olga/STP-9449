const toggleBtn = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-backdrop-header]');
const overlay = document.querySelector('[data-overlay]');
const header = document.querySelector('[data-header]');
const headings = document.querySelectorAll('h1, h2');

// open/close menu
const openMenu = () => {
  menu?.setAttribute('data-open', 'true');
  overlay?.setAttribute('data-visible', 'true');
  document.body.setAttribute('data-menu-open', 'true');
};

const closeMenu = () => {
  menu?.setAttribute('data-open', 'false');
  overlay?.setAttribute('data-visible', 'false');
  document.body.removeAttribute('data-menu-open');
};

if (toggleBtn && menu && overlay) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = document.body.getAttribute('data-menu-open') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);
}

// scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();

    const targetId = anchor.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement && header) {
      const headerHeight = header.offsetHeight;
      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollTo = elementTop - headerHeight;

      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }

    if (document.body.getAttribute('data-menu-open') === 'true') {
      closeMenu();
    }
  });
});

// anim
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-animated', 'true');
      } else {
        entry.target.removeAttribute('data-animated');
      }
    });
  },
  { threshold: 0.5 }
);

headings.forEach(h => observer.observe(h));
