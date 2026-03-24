const container = document.getElementById("projects-container");

projectData.forEach(project => {

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.desc}</p>
    <a href="${project.path}" target="_blank">
      ${project.type === "pdf" ? "📄 Ver documento" : "📁 Abrir carpeta"}
    </a>
  `;

  container.appendChild(card);
});