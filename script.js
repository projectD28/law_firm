const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

const dataJSON = {
  Konsultasi: {
    title: "Konsultasi & Advisory Hukum",
    description: `
      <p>
        Memberikan layanan terhadap pemberian nasihat hukum, analisis yuridis, dan pendampingan preventif untuk 
        kepentingan litigasi dan non-litigasi, membantu klien untuk memahami posisi hukumnya, meminimalkan risiko, 
        serta mengambil keputusan hukum secara tepat dan sesuai dengan ketentuan peraturan perUndang-Undangan.
      </p>
      <ul>
        <li>Pemberian pendapat hukum (legal advice) atas permasalahan hukum klien</li>
        <li>Analisis terhadap posisi hukum klien (legal standing & legal position)</li>
        <li>Penjelasan hak dan kewajiban klien berdasarkan peraturan perUndang-Undangan</li>
        <li>Konsultasi baik secara lisan maupun tertulis</li>
      </ul>
    `,
  },

  Hukum_Kriminal: {
    title: "Hukum Kriminal (Pidana)",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan pembelaan hukum bagi klien yang berhadapan dengan proses pidana, 
        baik sebagai tersangka, terdakwa, saksi maupun korban, sejak dalam tahap penyelidikan hingga persidangan dan upaya 
        hukum lanjutan (preventive). Layanan ini memastikan terhadap hak-hak klien terlindungi secara optimal melalui analisis 
        hukum secara profesional, strategi pembelaan yang tepat, serta menjunjung tinggi terhadap asas praduga tak bersalah (presumption of innocence) dan kerahasiaan terhadap data klien.
      </p>
      <ul>
        <li>Pendampingan hukum sejak tahap penyelidikan dan penyidikan</li>
        <li>Pembelaan dan representasi di tingkat kepolisian, kejaksaan, dan pengadilan</li>
        <li>Pendampingan korban dan saksi</li>
        <li>Tindak pidana umum dan tindak pidana khusus</li>
      </ul>
    `,
  },

  Hukum_Perusahaan: {
    title: "Hukum Perusahaan dan Bisnis",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan advisory hukum bagi perusahaan dan pelaku usaha dalam menjalankan, 
        mengelola, dan mengembangkan kegiatan bisnisnya. Layanan ini mencakup terhadap konsultasi korporasi, kepatuhan 
        terhadap hukum, perjanjian bisnis, serta mitigasi risiko hukum, untuk memastikan kegiatan usaha berjalan sesuai 
        dengan peraturan perUndang-Undangan dan kepentingan terhadap bisnis klien secara aman dan berkelanjutan.
      </p>
      <ul>
        <li>Pendirian dan restrukturisasi badan usaha</li>
        <li>Tata kelola perusahaan dan kepatuhan hukum</li>
        <li>Legal due diligence</li>
        <li>Merger, akuisisi, dan kerja sama bisnis</li>
      </ul>
    `,
  },

  Hukum_Imigrasi: {
    title: "Hukum Imigrasi dan Hukum Internasional",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan konsultasi hukum terkait keimigrasian serta hukum antar lintas negara, 
        meliputi terhadap izin tinggal dan kerja orang asing, visa, kewarganegaraan, serta kepatuhan terhadap peraturan internasional 
        yang berlaku. Layanan ini bertujuan untuk memastikan kelancaran aktivitas terhadap klien yang berada di Indonesia maupun luar 
        negeri secara sah, tertib dan sesuai dengan ketentuan hukum nasional Indonesia dan hukum internasional.
      </p>
      <ul>
        <li>Pendampingan izin tinggal dan keimigrasian</li>
        <li>Visa dan izin kerja bagi tenaga kerja asing</li>
        <li>Kepatuhan keimigrasian bagi individu dan perusahaan</li>
        <li>Penyelesaian permasalahan keimigrasian</li>
      </ul>
    `,
  },

  Hukum_Perkawinan_Perceraian: {
    title: "Hukum Perkawinan dan Perceraian",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan konsultasi hukum bagi klien dalam perkara hukum keluarga, meliputi perkawinan, perceraian, 
        hak asuh anak, pembagian harta bersama, serta perlindungan hak dan kewajiban para pihak. Layanan ini akan diberikan secara profesional, 
        berimbang dan beretika untuk memastikan kepastian hukum serta penyelesaian yang adil sesuai dengan ketentuan peraturan dan perUndang-undangan yang berlaku.
      </p>
      <ul>
        <li>Konsultasi hukum perkawinan dan keluarga</li>
        <li>Pendampingan perkara perceraian</li>
        <li>Sengketa hak asuh anak dan pembagian harta bersama</li>
      </ul>
    `,
  },

  Ketenagakerjaan: {
    title: "Ketenagakerjaan dan Hubungan Industrial",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan konsultasi hukum bagi perusahaan maupun pekerja terkait dengan hubungan pekerja, meliputi 
        perjanjian kerja, kebijakan ketenagakerjaan, pemutusan hubungan kerja, serta penyelesaian perselisihan hubungan industrial. Layanan ini 
        bertujuan untuk memastikan kepatuhan terhadap hukum, perlindungan hak dan kewajiban para pihak, serta terciptanya hubungan kerja yang harmonis dan berkeadilan.
      </p>
      <ul>
        <li>Kepatuhan hukum ketenagakerjaan</li>
        <li>Konsultasi hukum HR dan perusahaan</li>
        <li>Penyelesaian perselisihan hubungan industrial (bipartit, mediasi, PHI)</li>
      </ul>
    `,
  },

  Penyusunan: {
    title: "Penyusunan dan Review Kontrak",
    description: `
      <p>
        Memberikan layanan terhadap perancangan, penelaahan, dan memastikan perjanjian dan/atau kontrak disusun secara sah, jelas dan seimbang. 
        Layanan ini bertujuan untuk melindungi kepentingan hukum klien dalam meminimalkan risiko terhadap sengketa, serta memastikan setiap 
        klausul sesuai dengan ketentuan peraturan perUndang-Undangan dan tujuan bisnis dari para pihak.
      </p>
      <ul>
        <li>Perjanjian komersial</li>
        <li>Perjanjian kerja dan kebijakan ketenagakerjaan</li>
        <li>Perjanjian investasi dan kerja sama</li>
        <li>Syarat & ketentuan (Terms & Conditions)</li>
      </ul>
    `,
  },

  Litigasi: {
    title: "Litigasi dan Penyelesaian Sengketa",
    description: `
      <p>
        Memberikan layanan terhadap pendampingan dan perwakilan hukum bagi klien dalam menghadapi sengketa hukum, 
        baik melalui jalur pengadilan maupun di luar pengadilan. Layanan ini mencakup terhadap penyusunan strategi hukum, 
        pembelaan kepentingan klien dalam proses litigasi, serta penyelesaian sengketa melalui negosiasi, mediasi, dan/atau 
        alternatif penyelesaian sengketa lainnya secara efektif dan profesional.
      </p>
      <ul>
        <li>Sengketa perdata dan komersial</li>
        <li>Sengketa hubungan industrial</li>
        <li>Alternatif penyelesaian sengketa (negosiasi dan mediasi)</li>
      </ul>
    `,
  },

  Opini: {
    title: "Opini Hukum dan Analisis Risiko",
    description: `
      <p>
        Memberikan layanan terhadap pemberian pendapat hukum tertulis dan kajian yuridis atas suatu permasalahan atau 
        tindakan hukum sesuai dengan kondisi klien, disertai dengan identifikasi serta pemetaan risiko hukum yang mungkin timbul. 
        Layanan ini bertujuan untuk memberikan dasar pertimbangan hukum yang jelas, akurat dan strategis bagi klien dalam pengambilan 
        keputusan secara aman dan bertanggung jawab.
      </p>
      <ul>
        <li>Identifikasi dan perumusan isu hukum yang dihadapi klien</li>
        <li>Pengumpulan dan penelaahan fakta serta dokumen pendukung</li>
        <li>Kajian analisis peraturan perUndang-Undangan yang relevan</li>
        <li>Penilaian posisi dan risiko hukum</li>
        <li>Penyusunan opini hukum secara tertulis</li>
        <li>Rekomendasi langkah dan mitigasi risiko</li>
        <li>Menjaga profesionalitas dan kerahasiaan klien</li>
      </ul>
    `,
  },
};

function showModal(type) {
  const payload = dataJSON[type];

  if (!payload) {
    console.error("Modal data not found:", type);
    return;
  }

  modalTitle.textContent = payload.title;
  modalContent.innerHTML = payload.description;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

// klik area gelap = close
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ESC = close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
