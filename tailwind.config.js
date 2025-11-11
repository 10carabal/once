/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      accent: 'var(--accent-color)',
      background: 'var(--background-color)',
      text: 'var(--text-color)',
    },
    extend: {},
  },
  plugins: [],
}
