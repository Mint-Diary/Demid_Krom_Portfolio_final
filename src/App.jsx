"use client";

import { LanguageProvider } from "./i18n/index.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Hero from "./components/Hero.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx"; // Import BlogListPage
import CVDownload from "./components/Downloads.jsx"
import CTABlog from "./components/Blog/CTABlog.jsx";

function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section>
        <Projects />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section>
        <CTABlog />
      </section>
      <section id="downloads">
        <CVDownload />
      </section>
    </>
  );
}

function AppRoutes() {
  const [shouldResetNavbar, setShouldResetNavbar] = useState(false);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShouldResetNavbar(true);
  };

  useEffect(() => {
    if (shouldResetNavbar) {
      // Reset the state after animation is triggered
      const timer = setTimeout(() => setShouldResetNavbar(false), 100);
      return () => clearTimeout(timer);
    }
  }, [shouldResetNavbar]);

  // Scroll to target section when coming from other pages
  useEffect(() => {
    if (location.state?.scrollTarget) {
      const sectionId = location.state.scrollTarget;
      const section = document.getElementById(sectionId);
      if (section) {
        // Slight delay to allow components to mount
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        {/* Navbar mit höchstem z-index */}
        <div className="relative z-[10000]">
          {shouldResetNavbar ? null : <Navbar />}
          {shouldResetNavbar && <Navbar key="reset" />}
        </div>

        {/* Main content */}
        <div className="relative z-0">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Blog list page */}
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer onScrollToTop={handleScrollToTop} />
        </div>
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;