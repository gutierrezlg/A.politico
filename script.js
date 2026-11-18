// Añade aquí los PDF que subas a la carpeta documentos.
// La ruta debe coincidir exactamente con el nombre y la ubicación del archivo.
const DOCUMENTS = {
  economia: [
    // { title: "Informe económico", file: "documentos/economia/informe-economico.pdf" }
  ],
  cultura: [
    // { title: "Publicación cultural", file: "documentos/cultura/publicacion-cultural.pdf" }
  ],
  asamblea: [
    // { title: "Acta de la Asamblea", file: "documentos/asamblea/acta.pdf" }
  ],
  "medio-ambiente": [
    // { title: "Informe ambiental", file: "documentos/medio-ambiente/informe-ambiental.pdf" }
  ]
};

const $ = (selector) => document.querySelector(selector);
$("#year").textContent = new Date().getFullYear();

const menuButton = $(".menu-toggle");
const nav = $("#nav-links");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

function renderDocuments() {
  document.querySelectorAll(".document-list").forEach(list => {
    const category = list.dataset.category;
    const items = DOCUMENTS[category] || [];
    if (!items.length) {
      list.innerHTML = '<p class="empty-message">Todavía no hay documentos en esta sección.</p>';
      return;
    }
    list.innerHTML = items.map((doc, index) => `
      <article class="document-card">
        <div class="pdf-icon" aria-hidden="true">PDF</div>
        <div class="doc-info"><h3>${escapeHtml(doc.title)}</h3><p>Documento PDF</p></div>
        <div class="doc-actions">
          <button class="view-btn" type="button" data-category="${category}" data-index="${index}">Leer aquí</button>
          <a class="download-btn" href="${encodeURI(doc.file)}" download>Descargar</a>
        </div>
      </article>`).join("");
  });
  document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
      const doc = DOCUMENTS[button.dataset.category][Number(button.dataset.index)];
      openDocument(doc);
    });
  });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}
function openDocument(doc) {
  const reader = $("#lector");
  const url = encodeURI(doc.file);
  $("#reader-title").textContent = doc.title;
  $("#pdf-viewer").src = url + "#toolbar=1&navpanes=0";
  $("#open-pdf-new").href = url;
  $("#download-pdf").href = url;
  reader.hidden = false;
  reader.scrollIntoView({behavior:"smooth", block:"start"});
}
$("#close-reader").addEventListener("click", () => {
  $("#lector").hidden = true;
  $("#pdf-viewer").src = "about:blank";
});
renderDocuments();
