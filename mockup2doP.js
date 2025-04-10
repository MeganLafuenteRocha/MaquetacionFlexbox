const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.querySelector(".close-modal");
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceTitle =
      this.closest(".service-item").querySelector(".service-title").textContent;
    modalTitle.textContent = serviceTitle + " Servicio";

    switch (serviceTitle) {
      case "Branding":
        modalContent.innerHTML = `
                            <p>Nuestros servicios de branding te ayudan a establecer una identidad fuerte y reconocible en el mercado.</p>
                            <p>Creamos estrategias de marca integrales, identidades visuales y directrices que resuenan con tu público objetivo.</p>
                            <ul>
                                <li>Diseño de Logotipo</li>
                                <li>Estrategia de Marca</li>
                                <li>Identidad Visual</li>
                                <li>Guías de Marca</li>
                            </ul>
                        `;
        break;
      case "Redes Sociales":
        modalContent.innerHTML = `
                            <p>Nuestros servicios de redes sociales te ayudan a conectar con tu audiencia y construir una fuerte presencia online.</p>
                            <p>Desarrollamos estrategias, creamos contenido y gestionamos tus cuentas de redes sociales para impulsar el engagement y el crecimiento.</p>
                            <ul>
                                <li>Creación de Contenido</li>
                                <li>Gestión de Comunidad</li>
                                <li>Estrategia de Redes Sociales</li>
                                <li>Análisis e Informes</li>
                            </ul>
                        `;
        break;
      case "SEO":
        modalContent.innerHTML = `
                            <p>Nuestros servicios de SEO te ayudan a aumentar la visibilidad y dirigir tráfico específico a tu sitio web.</p>
                            <p>Optimizamos tu presencia online para mejorar los rankings y maximizar el ROI de tu inversión en publicidad.</p>
                            <ul>
                                <li>Investigación de Palabras Clave</li>
                                <li>Optimización On-page</li>
                                <li>Gestión de Campañas</li>
                                <li>Seguimiento de Rendimiento</li>
                            </ul>
                        `;
        break;
      case "Ilustración":
        modalContent.innerHTML = `
                            <p>Nuestros servicios de ilustración dan vida a tus ideas con obras de arte únicas y personalizadas.</p>
                            <p>Creamos ilustraciones para diversos fines, desde materiales de marketing hasta diseños de productos.</p>
                            <ul>
                                <li>Ilustración Digital</li>
                                <li>Diseño de Personajes</li>
                                <li>Ilustración Editorial</li>
                                <li>Ilustración de Productos</li>
                            </ul>
                        `;
        break;
      default:
        modalContent.innerHTML = `
                            <p>Esta es una descripción detallada de nuestro servicio. Ofrecemos soluciones de primera calidad adaptadas a tus necesidades específicas.</p>
                            <p>Nuestro equipo de expertos trabajará estrechamente contigo para garantizar los mejores resultados para tu negocio.</p>
                        `;
    }

    modal.style.display = "flex";
    modal.classList.add("fade-in");
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  modal.classList.remove("fade-in");
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("fade-in");
  }
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
