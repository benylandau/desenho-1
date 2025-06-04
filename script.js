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