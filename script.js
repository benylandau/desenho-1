document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("percursos-container");
  percursos.forEach(p => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <a href="${p.link}">
        <span class="label">${p.nome}</span>
        <img src="${p.imagem}" alt="${p.nome}" class="thumb">
      </a>`;
    container.appendChild(div);
  });
});

// Exemplo de uso de legenda ao abrir uma imagem (pode ser adaptado ao viewer)
function showImageWithLegenda(imageName) {
  const viewer = document.querySelector(".viewer");
  const img = viewer.querySelector("img");
  const text = viewer.querySelector("p");
  const link = viewer.querySelector("a");

  img.src = imageName;
  if (hotspotLegendas[imageName]) {
    text.textContent = hotspotLegendas[imageName].texto;
    link.href = hotspotLegendas[imageName].link;
    link.style.display = "block";
  } else {
    text.textContent = "";
    link.style.display = "none";
  }
  viewer.classList.add("show");
}