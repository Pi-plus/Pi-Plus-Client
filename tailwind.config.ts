import type { Config } from 'tailwindcss';

import { colors, fontSize, fontWeight, lineHeight } from './style/theme';

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
    },
  },
  plugins: [],
};
export default config;
