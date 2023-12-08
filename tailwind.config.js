module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-green': '#02343F',
        'theme-cream': '#F0EDCC',
        pink: '#F7C5CC',
        'theme-pop': '#ed6f63',
        'theme-pop-highlight': '#fd7f73',
      },
      fontSize: {
        xxs: '0.5rem',
        xxxs: '0.38rem',
      },
    },
  },
  plugins: [],
};
