import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./webviews/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: colors.indigo[500]
        }
      },
    },
    plugins: [],
  };