const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');
const themeToggle = document.getElementById('theme-toggle');

let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navLinks.classList.toggle('show');
  menuToggle.textContent = menuOpen ? '✕' : '☰';
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) {
      navLinks.classList.remove('show');
      menuToggle.textContent = '☰';
      menuOpen = false;
    }
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
