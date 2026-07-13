"use client";
import { useEffect, useState } from "react";
import Hero from "./Hero.jsx";
import HeroLight from "./HeroLight.jsx";

/** Wrapper that renders dark or light hero based on <html> class "dark". */
export default function HeroDynamic() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark ? <Hero /> : <HeroLight />;
}
