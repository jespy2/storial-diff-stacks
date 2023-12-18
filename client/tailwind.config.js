module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    keyframes: {
      'slide-in': {
        '0%': {
          '-webkit-transform': 'translateX(400px)',
          transform: 'translateX(400px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(0px)',
          transform: 'translateX(0px)',
        },
      },
      'slide-out': {
        '0%': {
          '-webkit-transform': 'translateX(0px)',
          transform: 'translateX(0px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(-200px)',
          transform: 'translateX(-200px)',
        },
      },
    },
    animation: {
      'slide-in': 'slide-in 0.5s ease-out',
      'slide-out' : 'slide-out 0.5s ease-out',
    }
  }
}