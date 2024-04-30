import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: 'teal',
          '.toaster-con': {
            'background-color': 'teal',
            color: '#222831',
          },
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: 'teal',
          '.toaster-con': {
            'background-color': '#222831',
            color: 'teal',
          },
        },
      },
    ],
  },
  darkMode: ['class', '["dark"]'],
  plugins: [require('daisyui')],
}
export default config
