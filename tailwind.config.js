/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#7AFF6F',
        'green2': '#79E6AE',
        'grey' : '#D8D7D7'
    },
    borderRadius: {
      'lg': '40px',
    },
  },
},
  plugins: [require("daisyui")],
}

