import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '1200px'
      }
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#F4F7FB',
          100: '#E6EDF5',
          200: '#C2D1E3',
          300: '#9BB3CE',
          400: '#5C7FA3',
          500: '#2E5680',
          600: '#1B3F66',
          700: '#0F2E50',
          800: '#0A2540',
          900: '#061A30'
        },
        teal: {
          DEFAULT: '#00D4AA',
          50: '#E6FBF5',
          100: '#C2F4E5',
          200: '#85E9CC',
          300: '#48DDB2',
          400: '#0FD2A0',
          500: '#00D4AA',
          600: '#00A98A',
          700: '#007F68',
          800: '#005447',
          900: '#002A24'
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 37, 64, 0.04), 0 4px 12px rgba(10, 37, 64, 0.06)',
        soft: '0 1px 2px rgba(10, 37, 64, 0.05)'
      },
      maxWidth: {
        prose: '70ch'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
