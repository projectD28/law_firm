const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const articles = [
  {
    id: 1,
    title:
      "HUKUM IMIGRASI DI INDONESIA & DAMPAKNYA TERHADAP WARGA NEGARA ASING",
    date: "25 Januari 2026",
    image: "img/figma.jpg",
    content: ` <p>Indonesia memiliki kerangka hukum imigrasi yang komprehensif yang mengatur masuk-keluar,
izin tinggal, serta hak dan kewajiban orang asing di wilayahnya. Melalui Undang-Undang
Nomor 6 Tahun 2011 tentang Keimigrasian dan sejumlah perubahan terbaru, negara berupaya
menyeimbangkan pengawasan kedaulatan dengan kebutuhan global seperti pariwisata, investasi,
dan tenaga kerja asing.
Pemahaman terhadap hukum imigrasi dan dampaknya sangat penting bagi warga negara asing
yang ingin tinggal, bekerja, belajar, atau berbisnis di Indonesia — baik untuk mematuhi hukum
maupun menghindari sanksi administratif atau pidana.</p> 

<h2>Dasar Hukum Imigrasi di Indonesia</h2>

 <p>Dasar hukum utama yang mengatur imigrasi di Indonesia adalah Undang-Undang Nomor 6
Tahun 2011 tentang Keimigrasian, yang telah mengalami beberapa kali perubahan termasuk
melalui Undang-Undang Nomor 63 Tahun 2024 yang merupakan perubahan ketiga terhadap
UU tersebut. UU ini menetapkan prinsip pengawasan terhadap masuk-keluar orang serta
dokumen perjalanan sebagai bagian dari kedaulatan negara.
Selain UU, beberapa peraturan pelaksanaan seperti Peraturan Pemerintah nomor 31 Tahun 2013
dan sejumlah peraturan menteri juga berperan penting dalam operasionalisasi aturan imigrasi di
Indonesia.</p>

<h2>Ketentuan Dasar dalam UU Keimigrasian</h2>
<ol>
<li><h3>Masuk dan Keluar Wilayah Indonesia</h3>
<p>Setiap orang yang ingin masuk atau keluar wilayah Indonesia wajib memiliki dokumen perjalanan yang sah, seperti paspor dan visa yang berlaku, serta melalui pemeriksaan oleh pejabat imigrasi di pintu masuk.</p>
<p>Tanpa dokumen yang lengkap, pemeriksaan tersebut dapat berujung pada penolakan masuk atau larangan keluar wilayah Indonesia.</p>
</li>
<li><h3>Izin Tinggal dan Visa</h3>
<p>Orang asing yang ingin tinggal atau bekerja di Indonesia wajib memiliki visa yang sesuai dengan tujuan kunjungan dan izin tinggal yang sah, misalnya visa kunjungan, izin tinggal sementara (ITAS), atau izin tinggal tetap (ITAP).</p>
<p>Regulasi terbaru juga mencakup pembagian jenis visa dan izin tinggal yang lebih jelas untuk mendukung investasi, tenaga ahli, dan kegiatan profesional tertentu.</p>
</li>
<li><h3>Pengawasan dan Tindakan Administratif</h3>
<p>Undang-Undang menetapkan berbagai tindakan administratif imigrasi yang dapat
dikenakan terhadap orang asing, seperti:
a. Pembatasan, perubahan, atau pembatalan izin tinggal
b. Larangan berada di tempat tertentu
c. Deportasi dari wilayah Indonesia
d. Pencantuman dalam daftar pencegahan atau penangkalan</p>
</ol>

`,
  },
];
const article = articles.find((a) => a.id == id);
document.getElementById("title").textContent = article.title;
document.getElementById("date").textContent = article.date;
document.getElementById("image").src = article.image;
document.getElementById("content").innerHTML = article.content;
