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

// 1. Definimos la información de tus carpetas y archivos
const projectData = [
  {
    "name": "Casos de Prueba en Gherkin",
    "path": "docs/Casos de Prueba en Gherkin/Caso de Prueba en Gherkin.pdf",
    "type": "pdf",
    "desc": "Escenarios de prueba detallados con sintaxis BDD."
  },
  {
    "name": "Jira - Gestión de Transferencia",
    "path": "docs/Jira/Plan de Prueba para Jira-y-Reportes de Bug/Modulo-Gestión de Transferencia",
    "type": "folder",
    "desc": "Documentación de pruebas y gestión de bugs en Jira."
  },
  {
    "name": "MySQL - Consultas Avanzadas",
    "path": "MySql/Advanced",
    "type": "folder",
    "desc": "Scripts de SQL con Joins y validación de datos."
  }
];

// 2. Lógica para crear las tarjetas en la página
const container = document.getElementById("projects-container");

if (container) {
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
}