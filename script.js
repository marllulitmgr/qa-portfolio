// 1. Definición de la data de tus proyectos
const projectData = [
  {
    "name": "Casos de Prueba en Gherkin",
    "path": "docs/Casos de Prueba en Gherkin/Caso de Prueba en Gherkin.pdf",
    "type": "pdf",
    "desc": "Escenarios detallados con sintaxis BDD para procesos bancarios."
  },
  {
    "name": "Jira - Gestión de Transferencia",
    "path": "docs/Jira/Plan de Prueba para Jira-y-Reportes de Bug/Modulo-Gestión de Transferencia",
    "type": "folder",
    "desc": "Plan de pruebas y reportes de defectos documentados en Jira."
  },
  {
    "name": "Home Banking Web Application",
    "path": "docs/PLan de Prueba - Home Banking Web Application",
    "type": "folder",
    "desc": "Estrategia integral de pruebas para plataforma de banca en línea."
  },
  {
    "name": "MySQL - Consultas Avanzadas",
    "path": "MySql/Advanced",
    "type": "folder",
    "desc": "Scripts SQL para validación de datos complejos y Joins."
  }
];

// 2. Lógica para crear las tarjetas en el HTML
const container = document.getElementById("projects-container");

if (container) {
  projectData.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-icon">${project.type === "pdf" ? "📄" : "📂"}</div>
      <h3>${project.name}</h3>
      <p>${project.desc}</p>
      <a href="${project.path}" target="_blank" class="btn-link">
        ${project.type === "pdf" ? "Ver PDF" : "Explorar Carpeta"}
      </a>
    `;
    container.appendChild(card);
  });
}