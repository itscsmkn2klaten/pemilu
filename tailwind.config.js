/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Pixel Bright Theme — referensi gambar Fanta pixel art
        pixel: {
          sky:     '#38BAFF',   // bright sky blue (bg utama)
          skyDeep: '#1A8FD1',   // darker blue
          orange:  '#FF8C1A',   // bright orange (aksen utama)
          orangeLight: '#FFB347',
          purple:  '#9B59EF',   // pixel purple
          purpleDark: '#6C3FC4',
          yellow:  '#FFE033',   // pixel yellow highlight
          green:   '#4FC955',   // pixel green
          navy:    '#1A1A4E',   // dark navy text
          white:   '#FFFFFF',
          cream:   '#FFF8E8',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        sans:  ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        // Pixel art shadow — chunky multi-pixel offset
        'pixel-sm':  '4px 4px 0px 0px #1A1A4E',
        'pixel-md':  '6px 6px 0px 0px #1A1A4E',
        'pixel-lg':  '8px 8px 0px 0px #1A1A4E',
        'pixel-orange': '6px 6px 0px 0px #C45A00',
        'pixel-blue':   '6px 6px 0px 0px #0B6BA3',
        'pixel-white':  '6px 6px 0px 0px rgba(255,255,255,0.4)',
        'pixel-inset': 'inset 4px 4px 0px 0px rgba(0,0,0,0.25)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      backgroundImage: {
        // Pixel dot pattern overlay
        'pixel-dots': "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        // Pixel grid lines
        'pixel-grid': "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'pixel-sm': '12px 12px',
        'pixel-md': '24px 24px',
      },
      animation: {
        'pixel-bounce': 'pixelBounce 0.6s steps(4) infinite alternate',
        'pixel-float':  'pixelFloat 3s steps(6) infinite alternate',
        'pixel-blink':  'pixelBlink 1s steps(1) infinite',
        'scanline':     'scanline 4s linear infinite',
      },
      keyframes: {
        pixelBounce: {
          '0%':   { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        pixelFloat: {
          '0%':   { transform: 'translateY(0px) rotate(0deg)' },
          '50%':  { transform: 'translateY(-6px) rotate(2deg)' },
          '100%': { transform: 'translateY(-12px) rotate(-2deg)' },
        },
        pixelBlink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}

