/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        body: ['17px', { lineHeight: '1.55' }],
        h1: ['28px', { lineHeight: '1.55' }],
        label: ['9px', { lineHeight: '1' }],
      },
      maxWidth: {
        page: '640px',
      },
    },
  },
  plugins: [],
}
