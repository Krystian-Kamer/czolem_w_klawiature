import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        levitateBall: {
          "0%": { transform: "translateY(-30%) translateX(-50%)" },
          "50%": { transform: "translateY(20%) translateX(-50%)" },
          "100%": { transform: "translateY(-30%) translateX(-50%)" },
        },
        hideInvitation: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)", display: "none" },
        },
        bounceSlow: {
          "0%": {
            transform: "translateY(0) translateX(-50%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(30%) translateX(-50%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            transform: "translateY(0) translateX(-50%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
      animation: {
        bounceSlow: "bounceSlow 2s linear infinite",
        levitate: "levitateBall 4s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s linear forwards",
        fadeInPointerNone: "fadeInPointerNone 0.3s linear forwards",
        hideInvitation: "hideInvitation 1s linear forwards 1s",
      },
      backgroundImage: {
        "ball-shape": "radial-gradient(circle at 10px 40px, #FFD369, #393E46)",
      },
    },
  },
  plugins: [typography, daisyui],
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
