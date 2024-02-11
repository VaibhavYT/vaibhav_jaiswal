import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        
      },
      colors:{
        // "primary": "#8CD867",
        // primary: "#758BFD",
        primary: "#0aff9d",
        "secondary": "#111111",
        "secondaryVarient": "#232323",
        "bl" :"#080808",
        "lbl":"#111111;",
        "gr":"#0aff9d",
        "ge":"#232323",
        "eb":"#ebecf3",
        
      },
      width: {
        '60': '60px',
        '1': '1px',
        '402': '402px',  
        '341':'341px'
      },
      height: {
        '226': '226px', 
        '217':'217px',
      },
    },
  },
  plugins: [],  
  darkMode: "class",
}
export default config
