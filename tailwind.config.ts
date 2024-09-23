import type { Config } from 'tailwindcss';

import { boxShadow, colors, fontSize, fontWeight, lineHeight } from './style/theme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors,
      lineHeight,
      fontWeight,
      fontSize,
      boxShadow,
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }
      md: '960px',
      // => @media (min-width: 960px) { ... }
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
