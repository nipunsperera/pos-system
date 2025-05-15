/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',              // entry HTML
    './src/**/*.{js,ts,jsx,tsx}' // all files in src with these extensions
  ],
  theme: {
    extend: {
      colors: {
        'thisara-start' : "#1d2552",
        'thisara-end' : "#525d9c",
      }
    },
  },
  plugins: [],
}