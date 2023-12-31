/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme:{
    extend:{},
  },
  variants:{
    extend:{},
  },
  plugins: [require("@tailwindcss/forms"), require('tailwind-scrollbar')],
};
