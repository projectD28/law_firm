/* ===============================
   ELEMENTS
================================ */
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("menuBackdrop");
const body = document.body;
const modal = document.getElementById("panelModal");
const nav = document.querySelector('.navbar-nav');

let modalTitle = null;
let modalContent = null;

if (modal) {
  modalTitle = modal.querySelector(".modal-title");
  modalContent = modal.querySelector(".modal-content");
}

/* ===============================
   SCROLL LOCK (ANTI BENTROK)
================================ */
let scrollLockCount = 0;

function lockScroll() {
  scrollLockCount++;
  body.style.overflow = "hidden";
}

function unlockScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1);
  if (scrollLockCount === 0) {
    body.style.overflow = "";
  }
}

/* ===============================
   MODAL DATA
================================ */
const modalData = {
  pidana: {
    title: "HUKUM PIDANA",
    content: `
      <P>
      Memberikan layanan terhadap pendampingan dan pembelaan hukum bagi klien 
      yang berhadapan dengan proses pidana, baik sebagai tersangka, terdakwa, 
      saksi maupun korban, sejak dalam tahap penyelidikan hingga persidangan 
      dan upaya hukum lanjutan (preventive). Layanan ini memastikan terhadap hak-hak 
      klien terlindungi secara optimal melalui analisis hukum secara profesional, 
      strategi pembelaan yang tepat, serta menjunjung tinggi terhadap asas praduga 
      tak bersalah (presumption of innocence) dan kerahasiaan terhadap data klien. <br>
      <br>
      <ul>
        <li>Pendampingan hukum sejak tahap penyelidikan dan penyidikan</li>
        <li>Pembelaan dan representasi di tingkat kepolisian, kejaksaan, dan pengadilan</li>
        <li>Pendampingan korban dan saksi</li>
        <li>Tindak pidana umum dan tindak pidana khusus</li>
      </ul>
      </P>
    `,
  },

  perusahaan: {
    title: "Hukum Perusahaan dan Bisnis",
    content: `
      <p>Memberikan layanan terhadap pendampingan dan advisory hukum bagi 
      perusahaan dan pelaku usaha dalam menjalankan, mengelola, dan mengembangkan 
      kegiatan bisnisnya. Layanan ini mencakup terhadap konsultasi korporasi, 
      kepatuhan terhadap hukum, perjanjian bisnis, serta mitigasi risiko hukum, 
      untuk memastikan kegiatan usaha berjalan sesuai dengan peraturan perUndang-Undangan 
      dan kepentingan terhadap bisnis klien secara aman dan berkelanjutan. <br> <br>
      <ul>
        <li>Pendirian dan restrukturisasi badan usaha</li>
        <li>Tata kelola perusahaan dan kepatuhan hukum</li>
        <li>Legal due diligence</li>
        <li>Merger, akuisisi, dan kerja sama bisnis</li>
      </ul>
      </P>
    `,
  },

  ketenagakerjaan: {
    title: "Hukum Ketenagakerjaan dan Hukum Industrial",
    content: `
      <p>
      Memberikan layanan terhadap pendampingan dan konsultasi hukum bagi 
      perusahaan maupun pekerja terkait dengan hubungan pekerja, meliputi 
      perjanjian kerja, kebijakan ketenagakerjaan, pemutusan hubungan kerja, 
      serta penyelesaian perselisihan hubungan industrial. Layanan ini bertujuan 
      untuk memastikan kepatuhan terhadap hukum, perlindungan hak dan kewajiban 
      para pihak, serta terciptanya hubungan kerja yang harmonis dan berkeadilan.
      <br>
      <br>
      <ul>
        <li>Kepatuhan hukum ketenagakerjaan</li>
        <li>Konsultasi hukum HR dan perusahaan</li>
        <li>Penyelesaian perselisihan hubungan industrial (bipartit, mediasi, PHI)</li>
      </ul>
      </p>
    `,
  },

  perceraian: {
    title: "Hukum Perceraian dan Keluarga",
    content: `
      <p>
      Memberikan layanan terhadap pendampingan dan konsultasi hukum bagi klien dalam perkara 
      hukum keluarga, meliputi perkawinan, perceraian, hak asuh anak, pembagian harta bersama, 
      serta perlindungan hak dan kewajiban para pihak. Layanan ini akan diberikan secara 
      profesional, berimbang dan beretika untuk memastikan kepastian hukum serta penyelesaian 
      yang adil sesuai dengan ketentuan peraturan dan perUndang-undangan yang berlaku.<br>
      <br>
      <ul>
        <li>Konsultasi hukum perkawinan dan keluarga</li>
        <li>Pendampingan perkara perceraian</li>
        <li>Sengketa hak asuh anak dan pembagian harta bersama</li>
        <li>Penyusunan perjanjian perkawinan</li>
      </ul>
      </p>
    `,
  },

  imigrasi: {
    title: "Hukum Imigrasi dan Internasional",
    content: `
      <p>
      Memberikan layanan terhadap pendampingan dan konsultasi hukum terkait keimigrasian 
      serta hukum antar lintas negara, meliputi terhadap izin tinggal dan kerja orang asing, 
      visa, kewarganegaraan, serta kepatuhan terhadap peraturan internasional yang berlaku. 
      Layanan ini bertujuan untuk memastikan kelancaran aktivitas terhadap klien yang berada 
      di Indonesia maupun luar negeri secara sah, tertib dan sesuai dengan ketentuan hukum 
      nasional Indonesia dan hukum internasional. <br>
      <br>
      <ul>
        <li>Pendampingan izin tinggal dan keimigrasian</li>
        <li>Visa dan izin kerja bagi tenaga kerja asing</li>
        <li>Kepatuhan keimigrasian bagi individu dan perusahaan</li>
        <li>Penyelesaian permasalahan keimigrasian</li>
      </ul>
      </p>
    `,
  },

  kontrak: {
    title: "Penyusunan dan Review Kontrak",
    content: `
      <p>
      Memberikan layanan terhadap perancangan, penelaahan, dan memastikan 
      perjanjian dan/atau kontrak disusun secara sah, jelas dan seimbang. 
      Layanan ini bertujuan untuk melindungi kepentingan hukum klien dalam 
      meminimalkan risiko terhadap sengketa, serta memastikan setiap klausul 
      sesuai dengan ketentuan peraturan perUndang-Undangan dan tujuan bisnis dari para pihak. <br>
      <br>
      <ul>
        <li>Perjanjian komersial</li>
        <li>Perjanjian kerja dan kebijakan ketenagakerjaan</li>
        <li>Perjanjian investasi dan kerja sama</li>
        <li>Syarat & ketentuan (Terms & Conditions)</li>
      </ul>
      </p>
    `,
  },

  litigasi: {
    title: "Litigasi dan Penyelesaian Sengketa",
    content: `
      <p>
      Memberikan layanan terhadap pendampingan dan perwakilan hukum bagi klien dalam menghadapi 
      sengketa hukum, baik melalui jalur pengadilan maupun di luar pengadilan. Layanan ini mencakup 
      terhadap penyusunan strategi hukum, pembelaan kepentingan klien dalam proses litigasi, 
      serta penyelesaian sengketa melalui negosiasi, mediasi, dan/atau alternatif penyelesaian 
      sengketa lainnya secara efektif dan profesional. <br>
      <br>
      <ul>
        <li>Sengketa perdata dan komersial</li>
        <li>Sengketa hubungan industrial</li>
        <li>Alternatif penyelesaian sengketa (negosiasi dan mediasi)</li>
      </ul>
      </p>
    `,
  },

  legal: {
    title: "Legal Opinion dan Analisis Risiko",
    content: `
      <p>
      Memberikan layanan terhadap pemberian pendapat hukum tertulis dan 
      kajian yuridis atas suatu permasalahan atau tindakan hukum sesuai 
      dengan kondisi klien, disertai dengan identifikasi serta pemetaan 
      risiko hukum yang mungkin timbul. Layanan ini bertujuan untuk memberikan 
      dasar pertimbangan hukum yang jelas, akurat dan strategis bagi klien 
      dalam pengambilan keputusan secara aman dan bertanggung jawab. <br>
      <br>
      <ul>
        <li>Identifikasi dan perumusan isu hukum yang dihadapi klien</li>
        <li>Pengumpulan dan penelaahan fakta serta dokumen pendukung</li>
        <li>Kajian analisis peraturan perUndang-Undangan yang relevan</li>
        <li>Penilaian posisi dan risiko hukum</li>
        <li>Penyusunan opini hukum secara tertulis</li>
        <li>Rekomendasi langkah dan mitigasi risiko</li>
        <li>Menjaga profesionalitas dan kerahasiaan klien</li>
      </ul>
      </p>
    `,
  },

  retainer: {
    title: "Retainer Service Hukum",
    content: `
      <p>
      Memberikan layanan Retainer Service sebagai bentuk kerja sama hukum 
      berkelanjutan bagi klien korporasi maupun individu yang membutuhkan 
      pendampingan hukum secara konsisten dan terintegrasi. Layanan ini 
      dirancang untuk memberikan kepastian hukum, efisiensi biaya, serta 
      respons cepat terhadap berbagai kebutuhan hukum klien dalam kegiatan operasional sehari-hari. <br>
      <br>
      <ul>
        <li>Konsultasi hukum rutin secara lisan maupun tertulis</li>
        <li>Pemberian legal opinion dan analisis risiko hukum</li>
        <li>Review dan penyusunan perjanjian serta dokumen hukum</li>
        <li>Pendampingan hukum non-litigasi dalam kegiatan usaha</li>
        <li>Kepatuhan hukum perusahaan (legal compliance)</li>
        <li>Pendampingan hubungan ketenagakerjaan dan HR legal</li>
        <li>Koordinasi dan pendampingan awal dalam potensi sengketa</li>
        <li>Pendampingan hukum strategis sesuai kebutuhan klien</li>
      </ul>
      </p>
    `,
  },  
};

/* ===============================
   MODAL FUNCTIONS
================================ */
function showModal(key) {
  if (!modal || !modalTitle || !modalContent) return;

  const data = modalData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalContent.textContent = "";
  modalContent.insertAdjacentHTML("beforeend", data.content);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  lockScroll();

  modal.querySelector(".modal-close")?.focus();
}

function closeModal() {
  if (!modal || !modal.classList.contains("active")) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  unlockScroll();
}

/* ===============================
   MOBILE MENU FUNCTIONS
================================ */
function openMenu() {
  if (!burger || !mobileMenu || !backdrop) return;

  burger.classList.add("active");
  mobileMenu.classList.add("active");
  backdrop.classList.add("active");
  burger.setAttribute("aria-expanded", "true");

  lockScroll();
}

function closeMenu() {
  if (!burger || !mobileMenu || !backdrop) return;

  burger.classList.remove("active");
  mobileMenu.classList.remove("active");
  backdrop.classList.remove("active");
  burger.setAttribute("aria-expanded", "false");

  unlockScroll();
}

/* ===============================
   EVENT BINDINGS
================================ */
if (burger && mobileMenu && backdrop) {
  burger.addEventListener("click", () => {
    burger.classList.contains("active") ? closeMenu() : openMenu();
  });
}

backdrop?.addEventListener("click", closeMenu);

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

/* ===============================
   MODAL CLICK HANDLERS
================================ */
if (modal) {
  modal.querySelector(".panel-modal-backdrop")
    ?.addEventListener("click", closeModal);
  
  modal.querySelector(".modal-close")
    ?.addEventListener("click", closeModal);
}

/* ===============================
   KEYBOARD HANDLING
================================ */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (modal?.classList.contains("active")) {
    closeModal();
  } else if (mobileMenu?.classList.contains("active")) {
    closeMenu();
  }
});

/* ===============================
   DESKTOP DROPDOWN (CINEMATIC)
================================ */
document.querySelectorAll(".nav-item.dropdown").forEach(dropdown => {
  let timeout;

  dropdown.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeout);
      dropdown.classList.add("show");
    }
  });

  dropdown.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      timeout = setTimeout(() => {
        dropdown.classList.remove("show");
      }, 120); // delay cinematic
    }
  });
});

/* ===============================
   MOBILE DROPDOWN (ACCORDION)
================================ */
document.querySelectorAll(".mobile-dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const parent = toggle.closest(".mobile-dropdown");
    parent.classList.toggle("open");
  });
});