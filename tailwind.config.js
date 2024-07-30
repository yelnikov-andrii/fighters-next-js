module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    colors: {
      'black': '#2e2e2e',
      'silver': '#777',
      'red': 'rgb(174 0 0)',
      'white': '#fff',
      'green': '#02e69b',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#e6e6e6',
      'gray-light': '#f5f5f5',
      'border-color': 'rgba(0, 0, 0, 0.15)',
      'input-border': 'rgba(0, 0, 0, 0.2)'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.375rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      sans: ['var(--font-sans)'],
      osvald: ['var(--font-osvald)'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'calc-50-4': 'calc((100% - 8px) / 2)',
        'calc-50-8': 'calc((100% - 16px) / 2)',
        'calc-50-16': 'calc((100% - 32px) / 2)',
        'calc-33-16': 'calc((100% - 32px) / 3)',
        'calc-25-16': 'calc((100% - 32px) / 4)', 
        'calc-66-16': 'calc(((100% - 32px) / 3) * 2)',
        'calc-75-16': 'calc(((100% - 32px) / 4) * 3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      flexGrow: {
        1: '1',
        4: '4',
        6: '6'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    }
  },
  
  plugins: [],
}

