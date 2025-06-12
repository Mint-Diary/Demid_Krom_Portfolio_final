"use client";

import { LanguageProvider } from "./i18n/index.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Tech from "./components/Tech";
import Hero from "./components/Hero.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
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

function App() {
  const [shouldResetNavbar, setShouldResetNavbar] = useState(false);

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

  return (
    <Router>
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
                <Route path="/blog/:slug" element={<BlogPostPage />} />
              </Routes>
            </main>
            <Footer onScrollToTop={handleScrollToTop} />
          </div>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;