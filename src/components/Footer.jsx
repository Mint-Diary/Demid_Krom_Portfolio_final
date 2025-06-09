import React from "react";
import { useTranslation } from "../i18n/index.jsx";

export default function Footer({ onScrollToTop }) {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: t('nav.tech'), id: 'tech' },
    { name: t('nav.timeline'), id: 'timeline' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#101828] py-12 lg:py-20">
      <div className="container relative z-10 mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={onScrollToTop}
              className="group inline-flex items-center gap-3 text-lg font-bold tracking-wider text-green-400 hover:text-green-300 font-mono"
            >
              <div className="w-6 h-6 bg-green-400 relative [image-rendering:pixelated]">
                <div className="absolute top-1 left-1 w-2 h-2 bg-black" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-black" />
              </div>
              <span>{t('nav.logo')}</span>
            </button>
            <p className="text-sm leading-relaxed text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-100">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-green-400 transition duration-100"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-100">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-100">
                  {t('footer.servicesList.webDev')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-100">
                  {t('footer.servicesList.mobileApp')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-100">
                  {t('footer.servicesList.uiux')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition duration-100">
                  {t('footer.servicesList.consulting')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-100">Funfacts</h3>
            <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>Lieblingsmanga: Death Note</li>
              <li>Eat. Sleep. Code. Repeat.</li>
              <li>TypeScript? Immer.</li>
            </ul>
          </div>


        </div>
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-gray-700/75 pt-8 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-400">
            {t('footer.rights')} © {new Date().getFullYear()}
          </div>
          <div className="text-sm font-medium text-gray-500">
            {t('footer.madeWith')} {' '}
            <a href="#" className="text-green-400 hover:text-green-300">
              {t('common.fullName')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
