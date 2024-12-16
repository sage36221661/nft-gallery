/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['PixelFont', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0A1A2A',
        secondary: '#2A3A4A',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
};
