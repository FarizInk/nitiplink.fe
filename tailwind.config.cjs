module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '400% 0',
          },
        },
      },
      animation: {
        'move-bg': 'move-bg 8s infinite linear',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
