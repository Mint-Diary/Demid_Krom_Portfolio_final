"use client";

import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
  useTranslation,
  LanguageSwitcher,
  ThemeToggle,
} from "../i18n/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainHeadersSimple() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [buildingComplete, setBuildingComplete] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Complete building animation after 4 seconds
    const timer = setTimeout(() => setBuildingComplete(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Navigates to a specific section. If we are not on the homepage, first navigate
   * back to it and pass the desired scroll target through location state.
   * The actual scrolling is handled in `App.jsx` once the homepage has mounted.
   */
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: sectionId } });
      setMobileNavOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  // Navigate to homepage top when clicking the logo
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: null } });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  // Menu items array to populate both desktop and mobile links
  const menuItems = [
    {
      name: t("nav.timeline"),
      id: "timeline",
    },
    {
      name: t("nav.projects"),
      id: "projects",
    },
    {
      name: t("nav.tech"),
      id: "tech",
    },
    {
      name: t("nav.blog"),
      id: "blog",
    },
    {
      name: t("nav.download"),
      id: "downloads",
    },
  ];

  return (
    <>
      {/* Main Header Section: Building Pixel Art */}
      <div className="relative h-21 bg-[#101828] text-white">
        {/* Main Header */}
        <header
          className={`building-navbar relative flex flex-none items-center bg-[#101828] pt-5 pb-4 ${
            buildingComplete ? "completion-flash" : ""
          } ${buildingComplete ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {/* Background building animation */}
          <div className="animate-build-background absolute inset-0 bg-[#101828]" />

          {/* Pixel borders */}
          <div
            className="animate-build-border-top absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 bg-[length:12px_4px] bg-repeat-x"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #374151 0px, #374151 8px, transparent 8px, transparent 12px)",
            }}
          />
          <div
            className="animate-build-border-bottom absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-gray-600 via-gray-600 to-gray-600 bg-[length:12px_4px] bg-repeat-x"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #374151 0px, #374151 8px, transparent 8px, transparent 12px)",
            }}
          />

          {/* Main Header Content */}
          <div className="relative z-10 container mx-auto flex items-center justify-between px-4 lg:px-8 xl:max-w-7xl">
            {/* Left Section */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="relative overflow-hidden">
                <button
                  onClick={handleLogoClick}
                  className="logo-build group animate-build-logo inline-flex items-center gap-3 font-mono text-lg font-bold tracking-wider text-green-400 hover:text-green-300"
                >
                  <div className="pixel-logo animate-build-pixel-logo relative h-6 w-6 bg-green-400 [image-rendering:pixelated]">
                    <div className="animate-build-pixel-detail-1 absolute top-1 left-1 h-2 w-2 bg-black" />
                    <div className="animate-build-pixel-detail-2 absolute top-1 right-1 h-2 w-2 bg-black" />
                  </div>
                  <div className="text-build relative overflow-hidden">
                    <span className="text-xl">{t("nav.logo")}</span>
                    <div className="animate-reveal-text absolute inset-0 bg-gray-800" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Theme + Language */}
              <div className="animate-language-dropdown flex items-center gap-2">
                <LanguageSwitcher className="hidden lg:block" />
                <ThemeToggle className="hidden lg:block" />
              </div>

              {/* Navigation */}
              <nav className="relative z-10 hidden space-x-2 lg:block">
                {menuItems.map((item, index) => (
                  <div key={item.id} className="inline-block overflow-hidden">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`inline-block border-2 border-gray-600 px-4 py-2 font-mono text-sm font-bold text-gray-300 transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:cursor-pointer animate-build-menu-${index + 1}`}
                    >
                      <span>{item.name}</span>
                    </button>
                  </div>
                ))}
              </nav>

              {/* Open Mobile Navigation */}
              <div className="relative z-10 overflow-hidden lg:hidden">
                <button
                  onClick={() => setMobileNavOpen(true)}
                  type="button"
                  className="mobile-button animate-build-mobile-button inline-flex items-center justify-center gap-2 border-2 border-gray-600 bg-gray-700 px-3 py-2 text-sm leading-5 font-bold text-white transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-600"
                  aria-controls="tkMobileNav"
                  aria-label={t("common.menu")}
                >
                  <div className="flex h-5 w-5 flex-col justify-center space-y-1">
                    <div className="h-1 w-full bg-white"></div>
                    <div className="h-1 w-full bg-white"></div>
                    <div className="h-1 w-full bg-white"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - REDUZIERTER Z-INDEX */}
          <Transition show={mobileNavOpen}>
            <div className="lg:hidden">
              <Transition.Child
                enter="transition ease-out duration-200"
                enterFrom="opacity-50 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-50 translate-x-full"
              >
                <nav
                  id="tkMobileNav"
                  className="fixed top-0 right-0 bottom-0 z-[9998] w-72 overflow-auto border-l-4 border-gray-600 bg-gray-800 shadow-lg"
                  tabIndex={-1}
                  aria-labelledby="tkMobileNavLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="flex items-center justify-between border-b-2 border-gray-700 p-6">
                    {/* Logo */}
                    <button
                      id="tkMobileNavLabel"
                      onClick={() => {
                        handleLogoClick();
                      }}
                      className="group inline-flex items-center gap-3 font-mono text-lg font-bold tracking-wider text-green-400 hover:text-green-300"
                    >
                      <div className="relative h-6 w-6 bg-green-400 [image-rendering:pixelated]">
                        <div className="absolute top-1 left-1 h-2 w-2 bg-black" />
                        <div className="absolute top-1 right-1 h-2 w-2 bg-black" />
                      </div>
                      <span>{t("nav.logo")}</span>
                    </button>

                    {/* Close Mobile Navigation */}
                    <button
                      onClick={() => setMobileNavOpen(false)}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 bg-gray-700 px-3 py-2 text-sm leading-5 font-bold text-white transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-600"
                      aria-label={t("common.close")}
                    >
                      <div className="relative h-5 w-5">
                        <div className="absolute inset-0 top-2 h-1 w-full rotate-45 transform bg-white"></div>
                        <div className="absolute inset-0 top-2 h-1 w-full -rotate-45 transform bg-white"></div>
                      </div>
                    </button>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="border-b-2 border-gray-700 px-6 py-3">
                    <LanguageSwitcher />
                  </div>

                  <nav className="flex flex-col gap-1 px-6 py-5">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="border-2 border-gray-600 px-4 py-3 font-mono text-sm font-bold text-gray-300 transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                      >
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </nav>
                </nav>
              </Transition.Child>

              {/* Mobile Navigation Backdrop */}
              <Transition.Child
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  onClick={() => setMobileNavOpen(false)}
                  className="fixed inset-0 z-[9997] bg-black/50 backdrop-blur-sm"
                />
              </Transition.Child>
            </div>
          </Transition>
        </header>
      </div>
    </>
  );
}
