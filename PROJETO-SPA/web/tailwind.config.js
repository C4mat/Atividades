module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {

      colors: {
        brand: {
          500: '#850F1A'
        },

      },


    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),

  ],
}
