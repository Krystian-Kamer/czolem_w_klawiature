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
        moveToTopHand: {
          "0%": { marginBottom: "-600px" },
          "100%": { marginBottom: "0px" },
        },
        moveToBottomHand: {
          "0%": { marginBottom: "0px" },
          "100%": { marginBottom: "-600px" },
        },
        moveHeroFromLeft: {
          "0%": { translate: "-200px", opacity: "0" },
          "10%": { opacity: "0.5" },
          "30%": { opacity: "1" },
          "100%": { translate: "0px", opacity: "1" },
        },
        moveHumourToTop: {
          "0%": { transform: "translateY(-120px)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        levitateBall: {
          "0%": { transform: "translateY(-30%) translateX(-50%)" },
          "50%": { transform: "translateY(20%) translateX(-50%)" },
          "100%": { transform: "translateY(-30%) translateX(-50%)" },
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
        "bounce-slow": "bounceSlow 2s linear infinite",
        levitate: "levitateBall 4s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s linear forwards",
        fadeInPointerNone: "fadeInPointerNone 0.3s linear forwards",
        moveToTop: "moveToTopHand 2s ease-out forwards",
        moveToBottom: "moveToBottomHand 0.5s ease-out forwards",
        moveHeroFromLeft: "moveHeroFromLeft 1s ease-out forwards",
        moveHumourToTop: "moveHumourToTop 1s ease-out forwards",
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
