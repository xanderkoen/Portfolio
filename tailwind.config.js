/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,php}',
            "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],

}