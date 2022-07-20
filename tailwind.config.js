/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{jsx, js, ts, tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

    theme: {
      extend:{
        colors: {
          current: 'currentColor',
          green: {
            light: '#157067',
            dark: '#0E473E',
          },
          yellow: {
            DEFAULT: "#FCEB8F",
          }
        }
      },
    },
  plugins: [],
}
