const projectData = [
  {
    name: "Casos de Prueba Gherkin",
    path: "docs/Casos-de-Prueba-en-Gherkin/Caso-de-Prueba-en-Gherkin.pdf",
    type: "pdf",
    desc: "Escenarios detallados con sintaxis BDD para procesos bancarios."
  },
  {
    name: "Plan de Prueba Home Banking",
    path: "docs/PLan-de-Prueba-Home-Banking-Web-Application/Reporte-Final-del-Plan-de-Prueba-Home-Banking.pdf",
    type: "pdf",
    desc: "Estrategia integral de pruebas y reporte final para banca web."
  },
  {
    name: "Gestión de Calidad Jira",
    path: "docs/Jira/Informe-Final/Informe-de-Gestión-de-Calidad-Home-Banking-v3.pdf",
    type: "pdf",
    desc: "Informe de gestión y trazabilidad de bugs documentados en Jira."
  },
  {
    name: "Scripts SQL Avanzados",
    path: "https://github.com/marllulitmgr/qa-portfolio/tree/main/MySql",
    type: "folder",
    desc: "Repositorio de consultas SQL: Joins, Triggers y Procedimientos."
  }
];

const container = document.getElementById("projects-container");

if (container) {
  projectData.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-icon">${project.type === "pdf" ? "📄" : "📁"}</div>
      <h3>${project.name}</h3>
      <p>${project.desc}</p>
      <a href="${project.path}" target="_blank" class="btn">Ver Proyecto</a>
    `;
    container.appendChild(card);
  });
}