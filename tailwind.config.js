module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    enabled: process.env.NODE_ENV === 'production', // Włącz tylko w produkcji
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};