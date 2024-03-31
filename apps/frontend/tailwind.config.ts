import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#00000',
      white: '#FFFFFF',
      floralWhite: '#FBFBF2',
      platinum: '#E5E6E4',
      taupeGrey: '#847577',
      timberwolf: '#CFD2CD',
      darkCyan: '#21897E',
      red: '#E12C2C',
      green: '#3CAC44',
    },
    extend: {},
  },
  plugins: [],
});
export default config;
