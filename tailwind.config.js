module.exports = {
  content: [
    './public/index.html',
    './src/*.{html,css,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primal-color': '#F0C000',
      },
      height: {
        '100': '45rem',
      }
    },
  },
  plugins: [],
}
