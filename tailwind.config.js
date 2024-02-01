import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'scissors-start': 'hsl(39, 89%, 49%)',
        'scissors-end': 'hsl(40, 84%, 53%)',
        'paper-start': 'hsl(230, 89%, 62%)',
        'paper-end': 'hsl(230, 89%, 65%)',
        'rock-start': 'hsl(349, 71%, 52%)',
        'rock-end': 'hsl(349, 70%, 56%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'bg-gradient':
          'radial-gradient(circle at top center, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 90%)',
      },
      screens: {
        xs: '400px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
