/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF8F4',
          50: '#FDFBF7',
          100: '#FAF8F4',
          200: '#F4F0E7',
          300: '#EAE5D8',
        },
        coral: {
          DEFAULT: '#F15A35',
          hover: '#E04722',
          light: '#FFEBE5',
          dark: '#C83A16',
        },
        charcoal: {
          DEFAULT: '#222222',
          muted: '#6E6D69',
          light: '#8E8D89',
        },
        pale: {
          DEFAULT: '#EAE6DC',
          light: '#F2EFE8',
          dark: '#D8D4C8',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Outfit',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        handwriting: [
          'Caveat',
          'Patrick Hand',
          'Kalam',
          'Comic Sans MS',
          'cursive',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(34, 34, 34, 0.05), 0 1px 3px -1px rgba(34, 34, 34, 0.03)',
        'soft': '0 8px 24px -4px rgba(34, 34, 34, 0.07), 0 2px 6px -2px rgba(34, 34, 34, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(34, 34, 34, 0.09), 0 4px 12px -2px rgba(34, 34, 34, 0.05)',
        'coral': '0 10px 25px -5px rgba(241, 90, 53, 0.35)',
      },
    },
  },
  plugins: [],
};
