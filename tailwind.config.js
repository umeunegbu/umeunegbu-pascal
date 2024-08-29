/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1090px': {'max': '1090px'},
        '1012px': {'min': '1012px'},
        '1026px': {'min': '1026px'},
        '1042px': {'min': '1042px'},
        '1056px': {'min': '1056px'},
        '1068px': {'min': '1068px'},
        '1078px': {'min': '1078px'},
        '482px': {'max': '482px'}
      }
    },
  },
  plugins: [],
}


