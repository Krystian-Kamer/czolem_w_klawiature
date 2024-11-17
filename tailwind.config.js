export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ph: "390px",
        tb: "850px",
      },
      fontFamily: {
        protest: ['"Protest Strike", sans-serif'],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInPointerNone: {
          "0%": { opacity: "0", pointerEvents: "none" },
          "100%": { opacity: "1", pointerEvents: "auto" },
        },
      },
      animation: {
        "bounce-slow": "bounceSlow 2s linear infinite",
        "bounce-slower": "bounceSlow 4s linear infinite",
        fadeIn: "fadeIn 0.3s linear forwards",
        fadeInPointerNone: "fadeInPointerNone 0.3s linear forwards",
      },
      backgroundImage: {
        "ball-shape": "radial-gradient(circle at 10px 40px, #FFD369, #393E46)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#222831",
          secondary: "#393E46",
          accent: "#FFD369",
          neutral: "#FAF7F0",
          "base-100": "#EEEEEE",
          info: "#7dd3fc",
          success: "#86efac",
          warning: "#fef08a",
          error: "#ef4444",
        },
      },
    ],
  },
};
