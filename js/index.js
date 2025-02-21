const translations = {
    "es": {
      "title": "Full Stack Developer Junior",
      "welcome": "¡Bienvenido al portfolio de Pablo Oliva Muñoz!",
      "description": "Soy Pablo Oliva Muñoz, desarrollador de aplicaciones web con formación en DAW y una fuerte pasión por crear soluciones eficientes y fáciles de usar. Me especializo en el desarrollo Full Stack, combinando tecnologías frontend y backend para construir aplicaciones funcionales y escalables.",
      "program-language": "Habilidades Clave:<br>✅ Frontend: HTML, CSS (SASS), JavaScript (Angular).<br>✅ Backend: PHP (Laravel), Node.js, Java.<br>✅ Bases de datos: MySQL, PostgreSQL, MongoDB.<br>✅ Despliegue: Apache, Docker, AWS.<br>✅ Versionado: Git/GitHub.<br><br>",
      "abilities": "¿Qué me distingue?<br>🔹 Aprendizaje rápido y adaptación a nuevas tecnologías.<br>🔹 Trabajo en equipo, comunicación efectiva y resolución de problemas.<br>🔹 Proactividad y capacidad de investigar soluciones por cuenta propia.<br>🔹 Enfoque en la experiencia del usuario para desarrollar aplicaciones intuitivas.<br>🔹 Mentalidad analítica y resolutiva, con atención al detalle.<br><br>Actualmente, busco oportunidades donde pueda aportar valor, seguir aprendiendo y crecer profesionalmente en el mundo del desarrollo web.",
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
      "description": "I am Pablo Oliva Muñoz, a web application developer with training in DAW and a strong passion for creating efficient and user-friendly solutions. I specialize in Full Stack development, combining frontend and backend technologies to build functional and scalable applications.",
      "program-language": "Key Skills:<br>✅ Frontend: HTML, CSS (SASS), JavaScript (Angular).<br>✅ Backend: PHP (Laravel), Node.js, Java.<br>✅ Databases: MySQL, PostgreSQL, MongoDB.<br>✅ Deployment: Apache, Docker, AWS.<br>✅ Version Control: Git/GitHub.<br><br>",
      "abilities": "What sets me apart?<br>🔹 Fast learning and adaptability to new technologies.<br>🔹 Teamwork, effective communication, and problem-solving skills.<br>🔹 Proactive and able to research solutions independently.<br>🔹 Focus on user experience to develop intuitive applications.<br>🔹 Analytical and solution-oriented mindset, with attention to detail.<br><br>Currently, I am looking for opportunities where I can add value, keep learning, and grow professionally in the web development world.",
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
        element.innerHTML = translation;
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

