import { useEffect, useState } from "react";

/**
 * Simple dark/light mode toggle that stores the preference in localStorage.
 * Tailwind is configured with `darkMode: "class"`, so we toggle the `dark` class
 * on the <html> element to switch themes.
 */
export default function ThemeToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setIsDark((d) => !d)}
      className={`border-2 border-gray-600 bg-gray-700 px-3 py-2 text-sm font-bold text-white transition-all duration-100 ease-linear [image-rendering:pixelated] hover:translate-x-px hover:translate-y-px hover:border-gray-500 hover:bg-gray-600 ${className}`}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
