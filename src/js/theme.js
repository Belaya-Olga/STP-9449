const body = document.body;
const btnToggle = document.querySelector('[data-theme-toggle]');

const toggleTheme = () => {
  const isLight = body.hasAttribute('data-light');
  if (isLight) {
    body.removeAttribute('data-light');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-light', '');
    localStorage.setItem('theme', 'light');
  }
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.setAttribute('data-light', '');
  } else {
    body.removeAttribute('data-light');
  }
};

btnToggle?.addEventListener('click', toggleTheme);

loadTheme();
