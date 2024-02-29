/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: '#CCD3D9',
        petal: '#FED5D9',
        blossom: '#7E212C',
        bark: '#321e17',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        merri: ['Merriweather', 'serif'],
      },
    },    
  },
  plugins: [],
}