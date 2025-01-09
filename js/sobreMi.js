// Diccionario de traducciones
const translations = {
    es: {
        "about-header": "Sobre Mí",
        "about-paragraph-1": 
            "Me llamo <strong>Pablo Oliva Muñoz</strong>, soy español y he vivido en Asia durante los últimos 15 años. Durante este tiempo, me he dedicado al mundo del buceo profesional y recreacional, gestionando mis propias empresas en este ámbito.",
        "about-paragraph-2": 
            "Sin embargo, desde hace años he tenido un fuerte interés en el desarrollo de aplicaciones web, y actualmente estoy finalizando mis estudios de <strong>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</strong>. Estoy buscando una oportunidad para realizar mis prácticas como becario de desarrollador en una empresa que me permita continuar mi transición profesional. Estoy abierto a trabajar en cualquier sector dentro del desarrollo, ya que mi motivación y pasión por este campo son enormes. Después de varios años de preparación, considero que este es el momento perfecto para realizar este cambio en mi carrera.",
        "about-paragraph-3": 
            "A lo largo de mi trayectoria profesional, he demostrado ser una persona <strong>muy trabajadora</strong>, <strong>detallista</strong> y capaz de <strong>trabajar eficazmente en equipo</strong>. Gestiono a más de 30 empleados en mis tres empresas, lo que me ha brindado una gran experiencia en liderazgo y trabajo colaborativo. Además, <strong>aprendo rápido</strong> y estoy acostumbrado a adaptarme constantemente a nuevas situaciones, habilidades que considero fundamentales en el mundo del desarrollo.",
        "about-paragraph-4": 
            "Hablo tanto castellano (nativo) como inglés a un nivel muy avanzado, gracias a mi experiencia viviendo en Asia. Estoy dispuesto a trabajar en cualquier parte del mundo, aunque en algún momento me encantaría poder trabajar de manera remota.",
        "about-paragraph-5": 
            "Estoy a su disposición para cualquier entrevista o consulta que necesiten. Agradezco de antemano su atención y espero tener la oportunidad de contribuir a su equipo.",
        "link-home": "Inicio",
        "link-cv": "Currículum",
        "link-contact": "Contacto"
    },
    en: {
        "about-header": "About Me",
        "about-paragraph-1": 
            "My name is <strong>Pablo Oliva Muñoz</strong>, I am Spanish and have been living in Asia for the past 15 years. During this time, I have worked in the professional and recreational diving world, managing my own companies in this field.",
        "about-paragraph-2": 
            "However, I have had a strong interest in web application development for years, and I am currently finishing my studies as a <strong>Higher Technician in Web Application Development (DAW)</strong>. I am looking for an opportunity to do an internship as a developer trainee in a company that allows me to continue my professional transition. I am open to working in any sector within development as my motivation and passion for this field are enormous. After several years of preparation, I consider this the perfect time to make this career change.",
        "about-paragraph-3": 
            "Throughout my professional career, I have proven to be a <strong>hard-working</strong>, <strong>detail-oriented</strong> person capable of <strong>working effectively in a team</strong>. I manage over 30 employees in my three companies, which has given me great experience in leadership and collaborative work. In addition, I am a <strong>fast learner</strong> and accustomed to constantly adapting to new situations, skills I consider essential in the development world.",
        "about-paragraph-4": 
            "I speak both Spanish (native) and English at a very advanced level, thanks to my experience living in Asia. I am willing to work anywhere in the world, although at some point I would love to work remotely.",
        "about-paragraph-5": 
            "I am available for any interview or inquiry you may need. I sincerely appreciate your attention and look forward to the opportunity to contribute to your team.",
        "link-home": "Home",
        "link-cv": "Curriculum",
        "link-contact": "Contact"
    }
};

// Referencias a elementos del DOM
const languageSelect = document.getElementById("language-select");
const elementsToTranslate = {
    "about-header": document.querySelector("h1"),
    "about-paragraph-1": document.querySelectorAll("p")[0],
    "about-paragraph-2": document.querySelectorAll("p")[1],
    "about-paragraph-3": document.querySelectorAll("p")[2],
    "about-paragraph-4": document.querySelectorAll("p")[3],
    "about-paragraph-5": document.querySelectorAll("p")[4],
    "link-home": document.querySelector('a[href="index.html"]'),
    "link-cv": document.querySelector('a[href="curriculum.html"]'),
    "link-contact": document.querySelector('a[href="contacto.html"]')
};

// Función para actualizar las traducciones
const updateTranslations = (lang) => {
    for (const [key, element] of Object.entries(elementsToTranslate)) {
        if (element) {
            if (element instanceof NodeList) {
                element.forEach((el) => (el.innerHTML = translations[lang][key]));
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    }
};

// Leer el idioma desde localStorage o establecer uno por defecto
const savedLanguage = localStorage.getItem('language') || 'es';

// Inicializar las traducciones con el idioma guardado
updateTranslations(savedLanguage);

// Establecer el valor del selector de idioma
languageSelect.value = savedLanguage;

// Escuchar cambios en el selector de idioma
languageSelect.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem('language', selectedLanguage);
    updateTranslations(selectedLanguage);
});
