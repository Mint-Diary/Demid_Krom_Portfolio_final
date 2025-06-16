// i18n/index.jsx
import { createContext, useContext, useState, useEffect } from "react";

// Import locale files
import en from "../locales/en/en.jsx";
import de from "../locales/de/de.jsx";
import fr from "../locales/fr/fr.jsx";
import ja from "../locales/ja/ja.jsx";
import ru from "../locales/ru/ru.jsx";

// Combine all translations
const translations = {
  en,
  de,
  fr,
  ja,
  ru,
};

// Language Context
const LanguageContext = createContext();

// Language Provider Component
export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem("preferred-language");
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    // Try to detect from browser
    const browserLanguage = navigator.language.split("-")[0];
    if (translations[browserLanguage]) {
      return browserLanguage;
    }

    // Default to English
    return "en";
  });

  // Save language preference
  useEffect(() => {
    localStorage.setItem("preferred-language", currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }

    return value || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: Object.keys(translations),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use translation
export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

// Language Switcher Component
export function LanguageSwitcher({ className = "" }) {
  const { currentLanguage, changeLanguage, availableLanguages } =
    useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languageNames = {
    en: "🇺🇸 EN",
    de: "🇩🇪 DE",
    fr: "🇫🇷 FR",
    ja: "🇯🇵 JA",
    ru: "🇷🇺 RU",
  };

  return (
    <div className={`relative ${className} animate-build-lang-switcher`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 border-2 border-gray-600 bg-gray-700 px-3 py-2 font-mono text-sm leading-5 font-bold text-white transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-600"
      >
        {languageNames[currentLanguage]}
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* backdrop for closing dropdown via click or key */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Close language menu"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => (e.key === "Escape" ? setIsOpen(false) : null)}
          />
          <div
            className="absolute top-full right-0 z-20 mt-1 min-w-[120px] border-2 border-gray-600 bg-gray-800 shadow-lg"
            style={{ pointerEvents: "auto" }}
          >
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left font-mono text-sm font-bold transition-colors hover:bg-gray-700 ${
                  currentLanguage === lang
                    ? "bg-gray-700 text-green-400"
                    : "text-gray-300"
                }`}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import ThemeToggle from "../components/ThemeToggle.jsx";

// Re-export ThemeToggle for convenience
export { ThemeToggle };
