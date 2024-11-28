/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
      colors: 
      {
        'custom-dark': '#172A3A',
        'custom-orange':'#F17300',
        'custom-white':'#F7F5FB',
      },
    },
  },
  plugins: [],
}

