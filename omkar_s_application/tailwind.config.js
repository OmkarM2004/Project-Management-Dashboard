module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          background5: "var(--global-bg-5)",
          background6: "var(--global-bg-6)",
          background7: "var(--global-bg-7)",
          background8: "var(--global-bg-8)",
          background9: "var(--global-bg-9)",
          background10: "var(--global-bg-10)",
          background11: "var(--global-bg-11)",
          background12: "var(--global-bg-12)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
          text3: "var(--global-text-3)",
          text4: "var(--global-text-4)",
          text5: "var(--global-text-5)",
          text6: "var(--global-text-6)",
          text7: "var(--global-text-7)",
          text8: "var(--global-text-8)",
          text9: "var(--global-text-9)",
          text10: "var(--global-text-10)",
          text11: "var(--global-text-11)"
        },
        header: {
          background1: "var(--header-bg-1)",
          text1: "var(--header-text-1)"
        },
        button: {
          background1: "var(--button-bg-1)",
          background2: "var(--button-bg-2)",
          background3: "var(--button-bg-3)",
          background4: "var(--button-bg-4)",
          text1: "var(--button-text-1)",
          text2: "var(--button-text-2)",
          text3: "var(--button-text-3)",
          text4: "var(--button-text-4)",
          text5: "var(--button-text-5)",
          text6: "var(--button-text-6)",
          text7: "var(--button-text-7)",
          text8: "var(--button-text-8)"
        }
      }
    }
  },
  plugins: []
};