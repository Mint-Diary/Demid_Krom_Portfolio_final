import { useState } from 'react';
import { useTranslation } from "../i18n/index.jsx";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "Vuetris",
    description: "A Tetris game built with Vue.js",
    image: "/vuetris.png",
    github: "https://github.com/Mint-Diary/vuetris",
    live: "https://vuetris.com"
  },
  {
    title: "Portfolio Site",
    description: "Personal portfolio website",
    image: "/project2.jpg",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com"
  },
  // Add more projects as needed
];

export default function Projects() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="section-wrapper bg-slate-100 dark:bg-slate-900/40">
      <header className="section-heading">
        <h2 className="section-title">{t('projects.title')}</h2>
        {t('projects.subtitle') && <p className="section-subtitle">{t('projects.subtitle')}</p>}
      </header>
      
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Project Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-slate-800">
          <div className="relative h-[500px]">
            <div className="absolute inset-0">
              <img 
                src={projects[currentIndex].image} 
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder-project.jpg';
                }}
              />
            </div>
            
            {/* Project Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                <p className="text-gray-200 mb-6">{projects[currentIndex].description}</p>
                <div className="flex space-x-4">
                  {projects[currentIndex].github && (
                    <a 
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-lg transition-colors"
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
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all transform hover:scale-110"
          aria-label="Previous project"
        >
          <FiChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all transform hover:scale-110"
          aria-label="Next project"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-slate-400/50 hover:bg-slate-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
