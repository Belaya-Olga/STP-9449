import './mob-menu';

const menu = document.getElementById('mobile-menu');
const headings = document.querySelectorAll('h1, h2');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const header = document.querySelector('.header-container');
      const headerHeight = header.offsetHeight;

      const elementTop =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementTop - headerHeight;

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }

    if (menu.getAttribute('data-open') === 'true') {
      const closeBtn = document.getElementById('menu-close');
      closeBtn.click();
    }
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.dataset.animated = 'true';
      } else {
        el.removeAttribute('data-animated');
      }
    });
  },
  { threshold: 0.5 }
);

headings.forEach(h => observer.observe(h));
