/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav_bg: "rgb(40, 40, 40)",
        button_bg: "rgb(243, 255, 52)",
      },
      width: {
        sidebar_width: "400px",
        sidebar_width_phone: "89vw"
      }

    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-nav-bg': theme('colors.nav_bg'),
          '--color-bullet': "#e5e7eb"
        },
      });
    },
  ],
}

