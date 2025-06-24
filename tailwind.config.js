/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- to bardzo ważne!
  ],
  safelist: [
    'fab',
    'fa-instagram',
    'fa-linkedin-in',
    'fa-facebook-f',
    'fas',
    'fa-globe',
    'fa-youtube',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
