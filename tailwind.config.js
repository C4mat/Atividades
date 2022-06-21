module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      objectPosition: {
        'center-bottom': 'center bottom',
      },

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
