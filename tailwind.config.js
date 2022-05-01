module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#02343F',
        'primary-text': '#F0EDCC',
        pink: '#F7C5CC',
      },
      fontSize: {
        xxs: '0.5rem',
        xxxs: '0.38rem',
      }
    },
  },
  plugins: [],
}
