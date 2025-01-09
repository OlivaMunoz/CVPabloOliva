document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    "es": {
      "title": "Full Stack Developer Junior",
      "welcome": "¡Bienvenido al portfolio de Pablo Oliva Muñoz!",
      "description": "Soy un desarrollador web junior apasionado por la tecnología y el aprendizaje constante.",
      "link-about": "Sobre mi",
      "link-cv": "Currículum",
      "link-contact": "Contacto",
      "profile-header": "Perfil Profesional",
      "profile-description": "Soy un profesional motivado y con una sólida formación en el sector de la programación. Aunque soy nuevo en este campo, me apasiona el mundo del desarrollo de software...",
      "education-header": "Formación Académica Reglada",
      "courses-header": "Cursos y Certificaciones",
      "tech-header": "Tecnologías y Lenguajes",
      "experience-header": "Experiencia Laboral",
      "other-header": "Otros Datos de Interés",
      "link-home": "Inicio",
      "link-about": "Sobre mí",
      "link-contact": "Contacto",
      "link-download": "Descargar mi CV"
    },
    "en": {
      "title": "Junior Full Stack Developer",
      "welcome": "Welcome to Pablo Oliva Muñoz's portfolio!",
      "description": "I am a junior web developer passionate about technology and continuous learning.",
      "link-about": "About me",
      "link-cv": "Resume",
      "link-contact": "Contact",
      "profile-header": "Professional Profile",
      "profile-description": "I am a motivated professional with a solid background in programming. Although new to the field, I am passionate about software development...",
      "education-header": "Academic Background",
      "courses-header": "Courses and Certifications",
      "tech-header": "Technologies and Languages",
      "experience-header": "Work Experience",
      "other-header": "Other Information",
      "link-home": "Home",
      "link-about": "About me",
      "link-contact": "Contact",
      "link-download": "Download my Resume"
    }
  };

  // Función para aplicar traducciones a los elementos
  function applyTranslation(language) {
    const elements = document.querySelectorAll("[id]");
    elements.forEach(element => {
      const id = element.id;
      const translation = translations[language][id];
      if (translation) {
        element.textContent = translation;
      }
    });
  }

  // Verificar el idioma guardado en localStorage
  const savedLanguage = localStorage.getItem('language') || 'es'; // Por defecto en español

  // Establecer el idioma al cargar la página
  applyTranslation(savedLanguage);

  // Cambiar el idioma cuando el usuario lo seleccione
  const languageSelect = document.getElementById('language-select');
  languageSelect.value = savedLanguage; // Establecer la opción seleccionada en el selector
  languageSelect.addEventListener('change', function(event) {
    const selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage); // Guardar idioma en localStorage
    applyTranslation(selectedLanguage); // Aplicar traducción
  });
});
