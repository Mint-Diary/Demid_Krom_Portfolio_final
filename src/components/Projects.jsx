import { useState } from "react";
import { useTranslation } from "../i18n/index.jsx";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const projects = [
  {
    title: "Vuetris",
    description: "A Tetris game built with Vue.js",
    image: "/vuetris.png",
    github: "https://github.com/Mint-Diary/vuetris",
    live: "https://vuetris.com",
  },
  {
    title: "Guessing Game",
    description: "a game where you have to guess the aspect ratio of an iphone",
    image: "/iphoneProject.png",
    github: "https://github.com/Mint-Diary/guessTheRatio",
    live: "https://v0-guess-i-phone-aspect-ratio-alpha.vercel.app/",
  },
  // Add more projects as needed
];

export default function Projects() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="projects"
      className="section-wrapper bg-slate-100 dark:bg-slate-900"
    >
      <header className="section-heading">
        <h2 className="section-title">{t("projects.title")}</h2>
        {t("projects.subtitle") && (
          <p className="section-subtitle">{t("projects.subtitle")}</p>
        )}
      </header>

      <div className="relative mx-auto w-full max-w-7xl px-4">
        {/* Project Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-800">
          <div className="relative h-[500px]">
            <div className="absolute inset-0">
              <img
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder-project.jpg";
                }}
              />
            </div>

            {/* Project Info Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10">
              <div className="text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  {projects[currentIndex].title}
                </h3>
                <p className="mb-6 text-gray-200">
                  {projects[currentIndex].description}
                </p>
                <div className="flex space-x-4">
                  {projects[currentIndex].github && (
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-slate-800/80 px-4 py-2 text-white transition-colors hover:bg-slate-700/80"
                    >
                      <FiGithub className="mr-2" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {projects[currentIndex].live && (
                    <a
                      href={projects[currentIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                      <FiExternalLink className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Inside the card */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-8 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-all hover:scale-110 hover:bg-black/70"
          aria-label="Previous project"
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-8 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-all hover:scale-110 hover:bg-black/70"
          aria-label="Next project"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-teal-500"
                  : "bg-slate-400/50 hover:bg-teal-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
