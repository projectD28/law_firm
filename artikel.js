const articles = [
  {
    id: 1,
    title:
      "HUKUM IMIGRASI DI INDONESIA & DAMPAKNYA TERHADAP WARGA NEGARA ASING",
    excerpt: `Indonesia memiliki kerangka hukum imigrasi yang komprehensif yang mengatur masuk-keluar,
izin tinggal, serta hak dan kewajiban orang asing di wilayahnya. Melalui Undang-Undang
Nomor 6 Tahun 2011 tentang Keimigrasian dan sejumlah perubahan terbaru, negara berupaya
menyeimbangkan pengawasan kedaulatan dengan kebutuhan global seperti pariwisata, investasi,
dan tenaga kerja asing.`,
  },
];

const container = document.getElementById("articleList");
articles.forEach((article) => {
  const item = document.createElement("div");
  item.className = "article-item";
  item.style.cursor = "pointer";
  item.addEventListener("click", () => {
    window.location.href = "content.html?id=" + article.id;
  });
  const content = document.createElement("div");
  content.className = "article-content";
  const title = document.createElement("h2");
  title.textContent = article.title;
  const excerpt = document.createElement("p");
  excerpt.textContent = article.excerpt;
  content.appendChild(title);
  content.appendChild(excerpt);
  item.appendChild(content);
  container.appendChild(item);
});
