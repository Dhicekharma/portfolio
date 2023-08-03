/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background:'#081b29',
        based:'#00abf0',
        second:'#EC4899'
      },
      spacing: {
        10:'10%',
        50:'50%',
        25:'25%',
        35:'35%',
        5:'5%',
        80:'80%',
        500:'500px'
      }
      
        
    },
  },
  plugins: [],
}
