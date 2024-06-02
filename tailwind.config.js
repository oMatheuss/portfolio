/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-100': 'oklch(var(--b1) / <alpha-value>)',
        'base-200': 'oklch(var(--b2) / <alpha-value>)',
        'base-300': 'oklch(var(--b3) / <alpha-value>)',
        'base-content': 'oklch(var(--bc) / <alpha-value>)',

        primary: 'oklch(var(--p) / <alpha-value>)',
        'primary-content': 'oklch(var(--pc) / <alpha-value>)',
        secondary: 'oklch(var(--s) / <alpha-value>)',
        'secondary-content': 'oklch(var(--sc) / <alpha-value>)',
        accent: 'oklch(var(--a) / <alpha-value>)',
        'accent-content': 'oklch(var(--ac) / <alpha-value>)',
        neutral: 'oklch(var(--n) / <alpha-value>)',
        'neutral-content': 'oklch(var(--nc) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
