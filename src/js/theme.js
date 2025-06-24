const body = document.body;
const btnSun = document.getElementById('btn-sun');
const btnMoon = document.getElementById('btn-moon');

function updateButtons() {
  const lightTheme = body.hasAttribute('data-light');
  if (btnSun) btnSun.setAttribute('data-visible', !lightTheme ? 'true' : 'false');
  if (btnMoon) btnMoon.setAttribute('data-visible', lightTheme ? 'true' : 'false');
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.setAttribute('data-light', '');
  } else {
    body.removeAttribute('data-light');
  }
  updateButtons();
}

if (btnSun) {
  btnSun.addEventListener('click', () => {
    body.setAttribute('data-light', '');
    localStorage.setItem('theme', 'light');
    updateButtons();
  });
}

if (btnMoon) {
  btnMoon.addEventListener('click', () => {
    body.removeAttribute('data-light');
    localStorage.setItem('theme', 'dark');
    updateButtons();
  });
}

// Загрузка темы при открытии страницы
loadTheme();
