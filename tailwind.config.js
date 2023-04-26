/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        "nevy-blue": "#25273c",
        "sky-blue": "#24a0ed",
      },
      backgroundImage: {
        'desktop-dark-bg': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'desktop-light-bg': "url('/src/assets/images/bg-desktop-light.jpg')",
        'mobile-dark-bg': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobile-light-bg': "url('/src/assets/images/bg-mobile-light.jpg')",
      }
    },
  },
  plugins: [],
}

