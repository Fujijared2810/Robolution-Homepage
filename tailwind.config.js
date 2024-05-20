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
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};