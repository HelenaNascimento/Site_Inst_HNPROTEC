import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        panel: '#0d1220',
        line: 'rgba(148, 163, 184, 0.18)',
        electric: '#32d3ff',
        violet: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(50, 211, 255, 0.18)',
      },
    },
  },
  plugins: [],
} satisfies Config;
