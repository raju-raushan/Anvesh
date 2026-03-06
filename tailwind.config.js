/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ieeeBlue: '#00629B',
        ieeeDark: '#0a1f44',
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 98, 155, 0.35)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(0,98,155,0.25), transparent 60%)',
      },
    },
  },
  plugins: [],
};
