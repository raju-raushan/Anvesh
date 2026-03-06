/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ieeeBlue: '#00629B',
        ieeeBright: '#26b8ff',
        ieeeDark: '#07132c',
      },
      boxShadow: {
        glow: '0 0 45px rgba(38, 184, 255, 0.32)',
        neon: '0 0 25px rgba(38, 184, 255, 0.45)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(0,98,155,0.28), transparent 58%)',
        grid: 'linear-gradient(rgba(38,184,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(38,184,255,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(38,184,255,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(38,184,255,0.45)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
