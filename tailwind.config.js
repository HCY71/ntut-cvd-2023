/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff',
          100: '#D3D3D3',
          200: '#717071',
          700: '#595757',
          900: '#231815',
          925: '#171717',
          950: '#000',
        }
      },
      fontFamily: {
        'gothic': [ 'Dela Gothic One' ],
        'kozuka': [ 'kozuka-gothic-pr6n' ],
        'hanWang': [ 'Han Wang' ],
      },
      maxWidth: {
        '8xl': '1920px',
      },
    },
  },
}

