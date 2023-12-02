/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: { 'max': '480px' },
      md: { 'max': '768px' },
      lg: { 'max': '976px' },
      xl: { 'max': '1440px' },
    },
    colors: {
      'background': 'var(--background)',
      'foreground': 'var(--foreground)',
      'card': 'var(--card)',
      'card-transparent': 'var(--card-transparent)',
      'card-foreground': 'var(--card-foreground)',
      'gray': 'var(--gray)',
      'gray-foreground': 'var(--gray-foreground)',
      'primary': 'var(--primary)',
      'primary-light': 'var(--primary-light)',
      'primary-foreground': 'var(--primary-foreground)',
      'secondary': 'var(--secondary)',
      'secondary-foreground': 'var(--secondary-foreground)',
      'error': 'var(--error)',
    },
    fontFamily: {
      sans: ['Urban', 'sans-serif'],
      handwriting: ["Playpen Sans", "sans-serif"]
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
