/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FBF5F5',
          100: '#F6E9E9',
          200: '#EFD5D5',
          300: '#E3B9B9',
        },
        sage: {
          50: '#F5F8F2',
          100: '#E5EBDD',
          200: '#D0DBC3',
          300: '#B5C5A4',
          600: '#4F6443',
        },
        lavender: {
          50: '#F6F7FC',
          100: '#E8EAF5',
          200: '#D5D9EE',
          300: '#BCC1E0',
          600: '#4B4F76',
        },
        cream: {
          50: '#FDF9F3',
          100: '#F5EBD9',
          200: '#EADBC0',
          300: '#DCC7A4',
          700: '#7A5C2E',
        },
        cocoa: {
          50: '#F8F7F8',
          100: '#ECEAEC',
          200: '#D6D2D6',
          300: '#B8B2B8',
          400: '#8F888F',
          500: '#625B61',
          600: '#534D53',
          700: '#433E44',
          800: '#343035',
          900: '#2A262B',
        },
        success: '#4F6443',
        warning: '#7A5C2E',
        error: '#9A4449',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(98, 91, 97, 0.18)',
        lift: '0 12px 32px -12px rgba(98, 91, 97, 0.28)',
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'grow-up': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-up': 'slide-up 280ms ease-out',
        'grow-up': 'grow-up 600ms ease-out both',
      },
    },
  },
  plugins: [],
};
