import React from "react";
import { useTranslation } from "../i18n/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Footer({ onScrollToTop }) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: sectionId } });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBrandClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: null } });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: t("nav.tech"), id: "tech" },
    { name: t("nav.timeline"), id: "timeline" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.blog"), id: "blog" },
    { name: t("nav.download"), id: "downloads" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-300 bg-gray-100 py-12 text-gray-800 lg:py-20 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
      <div className="relative z-10 container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={handleBrandClick}
              className="group inline-flex items-center gap-3 font-mono text-lg font-bold tracking-wider text-green-400 hover:text-green-300"
            >
              <div className="relative h-6 w-6 bg-green-400 [image-rendering:pixelated]">
                <div className="absolute top-1 left-1 h-2 w-2 bg-black" />
                <div className="absolute top-1 right-1 h-2 w-2 bg-black" />
              </div>
              <span>{t("nav.logo")}</span>
            </button>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 transition duration-100 hover:text-green-400"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Funfacts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {t("footer.funfacts.title")}
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
              <li>{t("footer.funfacts.item1")}</li>
              <li>{t("footer.funfacts.item2")}</li>
              <li>{t("footer.funfacts.item3")}</li>
              <li>{t("footer.funfacts.item4")}</li>
            </ul>
          </div>

          {/* Scroll-to-top Column */}
          <div className="flex items-center justify-center">
            <button
              onClick={onScrollToTop}
              aria-label="Scroll to top"
              className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full border-2 border-teal-600 bg-white/60 text-teal-600 backdrop-blur-lg transition-transform hover:-translate-y-1 hover:border-teal-500 hover:text-teal-500 dark:border-green-400 dark:bg-white/10 dark:text-green-400 dark:hover:border-green-300 dark:hover:text-green-300"
            >
              <ArrowUp size={32} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-gray-700/75 pt-8 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-400">
            {t("footer.rights")} &copy; {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
            <span>
              {t("footer.madeWith")}{" "}
              <a
                href="#"
                className="text-teal-600 hover:text-teal-500 dark:text-green-400 dark:hover:text-green-300"
              >
                {t("common.fullName")}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
