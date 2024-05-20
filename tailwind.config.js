const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      darkblue: '#00008B',
      verydarkblue: '#00004B',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};