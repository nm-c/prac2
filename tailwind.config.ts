import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gaegu: ['var(--font-gaegu)', 'cursive'],
      },
      colors: {
        c1: '#0079FF',
        c2: '#00DFA2',
        c3: '#F6FA70',
        c4: '#FF0060',
      },
    },
  },
  plugins: [],
}
export default config
