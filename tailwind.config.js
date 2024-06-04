/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        emerald: {
          500: '#10B981',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          800: '#272727',
          900: '#171717',
          950: '#0F0F0F',
        },
        zinc: {
          100: '#F3F4F6',
          500: '#71717A',
          800: '#27272A',
          900: '#18181B',
        },
        stone: {
          50: '#FAFAF9',
          300: '#D6D3D1',
          900: '#1C1B19',
        },
        gray: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          800: '#1F2937',
        },
        slate: {
          400: '#94A3B8',
          500: '#64748B',
          800: '#1E293B',
        },
        violet: {
          200: '#E9D5FF',
          400: '#C084FC',
          600: '#7C3AED',
        },
        indigo: {
          50: '#EEF2FF',
          400: '#6366F1',
        },
        green: {
          200: '#A7F3D0',
        },
        amber: {
          200: '#FDE68A',
          400: '#F59E0B',
        },
        rose: {
          200: '#FBCFE8',
          400: '#FB7185',
        },
        yellow: {
          50: '#FEFCE8',
        },
        white: '#FFFFFF',
      },    
    },
  },
  plugins: [],
}