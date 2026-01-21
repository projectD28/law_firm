const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('menuBackdrop');
const body = document.body;

function openMenu() {
  burger.classList.add('active');
  mobileMenu.classList.add('active');
  backdrop.classList.add('active');
  body.classList.add('menu-open');
}

function closeMenu() {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
  backdrop.classList.remove('active');
  body.classList.remove('menu-open');
}

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('active');
  isOpen ? closeMenu() : openMenu();
});

// klik backdrop → close
backdrop.addEventListener('click', closeMenu);

// klik menu → close (UX premium)
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ESC key → close (desktop & tablet)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});s