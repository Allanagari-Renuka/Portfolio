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
          DEFAULT: 'var(--bg-cream, #F7F7F2)',
          50: '#FDFBF7',
          100: '#FAF8F4',
          200: '#F4F0E7',
          300: '#EAE5D8',
          subtle: '#FAF9F5',
        },
        coral: {
          DEFAULT: 'var(--accent-coral, #F15A35)',
          hover: '#DF4B26',
          active: '#C83A16',
          light: '#FDF0EC',
          tint: '#FFEBE5',
          dark: '#C83A16',
        },
        charcoal: {
          DEFAULT: 'var(--text-charcoal, #222222)',
          muted: '#5F5E5A', // Refined for WCAG AA (>= 4.5:1 on #F7F7F2)
          light: '#7E7D78',
          subtle: '#9A9891',
        },
        pale: {
          DEFAULT: 'var(--border-pale, #EAE6DC)',
          light: '#F2EFE8',
          dark: '#D8D4C8',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Plus Jakarta Sans',
          'Outfit',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        handwriting: [
          'var(--font-handwriting)',
          'Caveat',
          'Patrick Hand',
          'Kalam',
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
      borderRadius: {
        'card': '1.5rem', // 24px - unified card radius
        'card-sm': '1rem', // 16px
        'badge': '0.75rem', // 12px
      },
      boxShadow: {
        'soft-xs': '0 1px 2px rgba(34, 34, 34, 0.04)',
        'soft-sm': '0 2px 8px -2px rgba(34, 34, 34, 0.05), 0 1px 3px -1px rgba(34, 34, 34, 0.03)',
        'soft': '0 8px 24px -4px rgba(34, 34, 34, 0.07), 0 2px 6px -2px rgba(34, 34, 34, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(34, 34, 34, 0.09), 0 4px 12px -2px rgba(34, 34, 34, 0.05)',
        'coral': '0 10px 25px -5px rgba(241, 90, 53, 0.32)',
        'coral-lg': '0 14px 32px -4px rgba(241, 90, 53, 0.42)',
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose-narrow': '65ch',
        'prose-standard': '72ch',
      },
    },
  },
  plugins: [],
};
