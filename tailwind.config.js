const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens: values swap between light and dark mode (see index.css)
        white: token('white'),
        canvas: token('canvas'),
        ink: token('ink'),
        deep: token('deep'),
        emerald: token('emerald'),
        // Fixed brand tokens
        teal: '#00BFA6',
        bright: '#12D4C0',
        night: '#101C28',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
