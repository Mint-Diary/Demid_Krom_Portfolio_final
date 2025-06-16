/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "build-background": "buildBackground 2s ease-in-out forwards",
        "build-border-top": "buildBorderTop 1s ease-in-out forwards",
        "build-border-bottom": "buildBorderBottom 1s ease-in-out forwards",
        "build-pixel-logo": "buildPixelLogo 0.5s ease-in-out forwards",
        "build-pixel-detail-1":
          "buildPixelDetail 0.3s ease-in-out forwards 0.5s",
        "build-pixel-detail-2":
          "buildPixelDetail 0.3s ease-in-out forwards 0.7s",
        "reveal-text": "revealText 0.5s ease-in-out forwards 1s",
        "build-menu-1": "buildMenuItem 0.3s ease-in-out forwards 1.2s",
        "build-menu-2": "buildMenuItem 0.3s ease-in-out forwards 1.4s",
        "build-menu-3": "buildMenuItem 0.3s ease-in-out forwards 1.6s",
        "build-menu-4": "buildMenuItem 0.3s ease-in-out forwards 1.8s",
        "build-lang-switcher": "buildMenuItem 0.3s ease-in-out forwards 2s",
        "build-mobile-button": "buildMenuItem 0.3s ease-in-out forwards 2.2s",
      },
      keyframes: {
        buildBackground: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        buildBorderTop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        buildBorderBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        buildPixelLogo: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        buildPixelDetail: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        revealText: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        buildMenuItem: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
