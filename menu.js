const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('menuBackdrop');
const body = document.body;
const modal = document.getElementById('panelModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalContent = modal.querySelector('.modal-content');

  const modalData = {
    konsultasi: {
      title: 'Konsultasi dan Advisory Hukum',
      content: `
        Layanan konsultasi hukum meliputi:
        <ul>
          <li>Legal opinion tertulis</li>
          <li>Pendampingan preventif</li>
          <li>Analisis risiko hukum</li>
          <li>Advisory berkelanjutan</li>
        </ul>
      `
    },

    pidana: {
      title: 'Hukum Kriminal (Pidana)',
      content: `
        Pendampingan hukum pidana profesional sejak:
        <ul>
          <li>Penyelidikan</li>
          <li>Penyidikan</li>
          <li>Penuntutan</li>
          <li>Persidangan</li>
        </ul>
      `
    }
  };

function showModal(key) {
    const data = modalData[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalContent.innerHTML = data.content;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

 function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

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
});