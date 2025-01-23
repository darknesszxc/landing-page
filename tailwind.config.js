


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}',
            
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': '60px', // Web / Tablet H1
        'h2': '32px', // Web / Tablet H2
        'h3': '24px', // Web / Tablet H3
        'subtitle': '20px', // Web / Tablet Subtitle
        'subtitle2': '16px', // Web / Tablet Subtitle 2
        'body': '20px', // Web / Tablet Body text
        'body2': '16px', // Web / Tablet Body text 2

        'mobile-h1': '24px', // Mobile H1
        'mobile-subtitle': '20px', // Mobile Subtitle
        'mobile-subtitle2': '14px', // Mobile Subtitle 2
        'mobile-body': '14px', // Mobile Body text
      },
      screens: {
        mobile: '320px',  // для мобильных устройств, от 320px
        'mobile-max': { max: '791px' },  // до 791px
        tablet: '792px',  // для планшетов, от 792px
        'tablet-max': { max: '1279px' },  // до 1279px
        desktop: '1280px',  // для десктопов, от 1280px
      },
      colors:{  
        black: '#27272A',
        'grey-dark': '#696969',
        'grey-light': '#E5E7EB',
        white: '#FCFBFA',
        lavender: '#7E3AF2',
        'lavender-red': '#E02424',
      },
      spacing: {
        '85': '85px',  // margin для web
        '39': '39px',  // margin для tablet
        '15': '15px',  // margin для mobile
        '30': '30px',  // gutter для всех
      },
      backgroundImage: {
       
        
      },
    },
  },
  plugins: [],
  css: {
    postcss: 'postcss.config.js',
  }
}

