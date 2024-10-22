const translations = {
    en: {
        loginTitle: "Log In",
        usernamePlaceholder: "Username",
        passwordPlaceholder: "Password",
        loginBtn: "Login",
        forgotLink: "Forgot Username/Password?"
    },
    fr: {
        loginTitle: "Connectez Vous",
        usernamePlaceholder: "Identifiant",
        passwordPlaceholder: "Mot de passe",
        loginBtn: "Connexion",
        forgotLink: "Identifiants oubliés?"
    },
    ar: {
        loginTitle: "تسجيل الدخول",
        usernamePlaceholder: "اسم المستخدم",
        passwordPlaceholder: "كلمة المرور",
        loginBtn: "تسجيل الدخول",
        forgotLink: "نسيت معرفاتك؟"
    }
};

function setLanguage(lang) {
    document.getElementById('login-title').textContent = translations[lang].loginTitle;
    document.getElementById('username').placeholder = translations[lang].usernamePlaceholder;
    document.getElementById('password').placeholder = translations[lang].passwordPlaceholder;
    document.getElementById('login-btn').textContent = translations[lang].loginBtn;
    document.getElementById('forgot-link').textContent = translations[lang].forgotLink;
}

// Set default language to French
setLanguage('fr');
