import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // add default font
      fontFamily: {
        gaegu: ['var(--font-gaegu)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
