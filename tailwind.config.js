module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
    enabled: process.env.NODE_ENV === 'production', // Włącz tylko w produkcji
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '15px', // to zastosuje 15px padding na osi X dla wszystkich kontenerów
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      boxShadow: {
        'header': '0 10px 15px 0 rgba(25, 25, 25, 0.1)',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};