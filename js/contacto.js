document.addEventListener('DOMContentLoaded', function () {
    // Traducciones
    const translations = {
        es: {
            "contact-header": "Contacto",
            "contact-instructions": "Si quieres ponerte en contacto conmigo, por favor llena el formulario y te responderé lo antes posible.",
            "label-name": "Nombre:",
            "label-email": "Correo Electrónico:",
            "label-message": "Mensaje:",
            "submit-button": "Enviar Mensaje",
            "link-home": "Inicio",
            "link-about": "Sobre mí",
            "link-cv": "Currículum"
        },
        en: {
            "contact-header": "Contact",
            "contact-instructions": "If you want to get in touch with me, please fill out the form, and I will respond as soon as possible.",
            "label-name": "Name:",
            "label-email": "Email Address:",
            "label-message": "Message:",
            "submit-button": "Send Message",
            "link-home": "Home",
            "link-about": "About Me",
            "link-cv": "Resume"
        }
    };

    // Función para actualizar las traducciones
    const updateTranslations = (lang) => {
        for (const [key, value] of Object.entries(translations[lang])) {
            const element = document.getElementById(key);
            if (element) {
                element.innerText = value;
            }
        }
    };

    // Obtener el selector de idioma
    const languageSelect = document.getElementById('language-select');

    // Cambiar idioma al seleccionar una opción
    languageSelect.addEventListener('change', function (e) {
        const selectedLanguage = e.target.value;
        // Guardar idioma seleccionado en localStorage
        localStorage.setItem('language', selectedLanguage);
        updateTranslations(selectedLanguage);
    });

    // Inicializar el idioma de la página (español por defecto o el idioma guardado)
    const savedLanguage = localStorage.getItem('language') || 'es';
    updateTranslations(savedLanguage);
    // Establecer el valor del selector de idioma
    languageSelect.value = savedLanguage;
});
