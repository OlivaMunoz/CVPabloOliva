// Objeto de traducciones
const translations = {
  en: {
      "page-title": "My Resume",
      "link-home": "Home",
      "link-about": "About Me",
      "link-contact": "Contact",
      "link-download": "Download my CV in spanish",
      "profile-header": "Professional Profile",
      "profile-description": "I am a motivated professional with a strong background in programming. Although I am new to this field, I am passionate about the world of software development...",
      "education-header": "Formal Education",
      "courses-header": "Courses and Certifications",
      "tech-header": "Technologies and Languages",
      "experience-header": "Work Experience",
      "other-header": "Other Relevant Information",
      "education-list-1": "2024 – Present: Higher Level Cycle in Web Application Development (2nd year).",
      "education-list-2": "2010-2011: Intermediate Degree in Scuba Diving (Medium Depth).",
      "education-list-3": "2008-2009: Intermediate Degree in Consumer Electronic Equipment.",
      "courses-list-1": "2024: Java Fundamentals.",
      "courses-list-2": "2024: Database Fundamentals.",
      "courses-list-3": "2024: Angular Framework.",
      "tech-list-1": "XML, HTML, PHP, CSS, JavaScript, TypeScript, RSS, SQL, MySQL, PHP, Java.",
      "tech-list-2": "Windows 10, Windows Server, Linux.",
      "tech-list-3": "Apache, Angular, Visual Studio, JUnit, StarUML, Apache NetBeans.",
      "other-list-1": "Driving license type B.",
      "other-list-2": "Own vehicle."
  },
  es: {
      "page-title": "Mi Curriculum",
      "link-home": "Inicio",
      "link-about": "Sobre mí",
      "link-contact": "Contacto",
      "link-download": "Descargar mi CV",
      "profile-header": "Perfil Profesional",
      "profile-description": "Soy un profesional motivado y con una sólida formación en el sector de la programación. Aunque soy nuevo en este campo, me apasiona el mundo del desarrollo de software...",
      "education-header": "Formación Académica Reglada",
      "courses-header": "Cursos y Certificaciones",
      "tech-header": "Tecnologías y Lenguajes",
      "experience-header": "Experiencia Laboral",
      "other-header": "Otros Datos de Interés",
      "education-list-1": "2024 – Actualidad: Ciclo de Grado Superior en Desarrollo de Aplicaciones Web (2º año).",
      "education-list-2": "2010-2011: Grado Medio en Buceo Media Profundidad.",
      "education-list-3": "2008-2009: Grado Medio en Equipos Electrónicos de Consumo.",
      "courses-list-1": "2024: Fundamentos de Java.",
      "courses-list-2": "2024: Fundamentos de Bases de Datos.",
      "courses-list-3": "2024: Framework Angular.",
      "tech-list-1": "XML, HTML, PHP, CSS, JavaScript, TypeScript, RSS, SQL, MySQL, PHP, Java.",
      "tech-list-2": "Windows 10, Windows Server, Linux.",
      "tech-list-3": "Apache, Angular, Visual Studio, JUnit, StarUML, Apache NetBeans.",
      "other-list-1": "Carnet de conducir tipo B.",
      "other-list-2": "Vehículo propio."
  }
};

// Función para aplicar la traducción
function applyTranslation(language) {
  const elementsToTranslate = Object.keys(translations[language]);

  elementsToTranslate.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
          element.textContent = translations[language][id];
      }
  });

  // También cambiamos el título de la página
  document.title = translations[language]["page-title"];
}

// Leer el idioma almacenado en LocalStorage o establecer uno por defecto
window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "es"; // Por defecto, español

  // Aplica la traducción del idioma guardado
  applyTranslation(savedLanguage);

  // Configurar el selector de idioma al idioma actual
  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
      languageSelect.value = savedLanguage;
  }

  // Event listener para cambiar el idioma
  languageSelect.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      // Almacenamos el idioma seleccionado en LocalStorage
      localStorage.setItem("language", selectedLanguage);
      applyTranslation(selectedLanguage);
  });
});
