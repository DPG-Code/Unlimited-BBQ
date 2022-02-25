module.exports = {
  content: [
    './public/index.html',
    './src/*.{html,css,js}',
  ],
  theme: {
    extend: {
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      colors: {
        'primal-color': '#F0C000',
      },
      height: {
        '100': '45rem',
      },
      maxHeight: {
        'movil': '850px',
        'pc': '1000px',
      }
    },
    minHeight: {
      'movil': '600px',
      'pc': '700px',
    }
  },
  plugins: [],
}
