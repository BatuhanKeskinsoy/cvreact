/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'system': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'open': ['Open Sans', 'sans-serif', 'system-ui'],
      'gemunu': ['Gemunu Libre', 'sans-serif', 'system-ui'],
     },
    extend: {
      backgroundColor: {
        black: {
          100: '#999999',
          200: '#888888',
          300: '#777777',
          400: '#666666',
          500: '#555555',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        customPrimary: {
          100: '#0b2d67',
          200: '#0b2b61',
          300: '#0a2656',
          400: '#081f46',
          500: '#071a3b',
          600: '#061632',
          700: '#05142d',
          800: '#030c1c',
          900: '#010409',
        },
        customSecondary: {
          100: '#53667c',
          200: '#4b5c70',
          300: '#425163',
          400: '#394656',
          500: '#303b48',
          600: '#27303b',
          700: '#1e252d',
          800: '#1b2129',
          900: '#161b22',
        },
      },
      colors: {
        customPrimary: {
          100: '#0b2d67',
          200: '#0b2b61',
          300: '#0a2656',
          400: '#081f46',
          500: '#071a3b',
          600: '#061632',
          700: '#05142d',
          800: '#030c1c',
          900: '#010409',
        },
        customSecondary: {
          100: '#53667c',
          200: '#4b5c70',
          300: '#425163',
          400: '#394656',
          500: '#303b48',
          600: '#27303b',
          700: '#1e252d',
          800: '#1b2129',
          900: '#161b22',
        },
      },
      invert: {
        'custom-dark': '100%',
      },
      boxShadow: {
        'customSm': '0 0 15px -5px rgba(0, 0, 0, 0.3)',
        'customMd': '0 0 18px -5px rgba(0, 0, 0, 0.3)',
        'customLg': '0 0 20px -3px rgba(0, 0, 0, 0.3)',
        'customXl': '0 0 25px -3px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'sun': 'url("../images/theme/Sun.svg")',
        'moon': 'url("../images/theme/Moon.svg")',
      },
    },
  },
  plugins: [],
}
