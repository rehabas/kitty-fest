/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-card': `
          linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
          url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      },
      minHeight: {
        600: '600px',
      },
      colors: {
        'rebecca-purple': '#663399',
        'dark-gray': '#555',
        'light-gray': '#D3D3D3',
        purple: '#938eef',
      },
    },
  },
  plugins: [],
};
