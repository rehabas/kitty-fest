/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-card': `
          linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
          url('assets/login.jpeg')`,
        'register-card': `
          linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
          url('assets/register.jpeg')`,
      },
      minHeight: {
        600: '600px',
      },
      colors: {
        'rebecca-purple': '#663399',
        'dark-gray': '#555',
        'light-gray': '#D3D3D3',
        purple: '#938eef',
        'dark-blue': '#00008B',
        'light-navy': '#5217ff',
        'fire-opal': '#f0544f',
        'lime-green': '#00ff00',
      },
      flexGrow: {
        1: '1',
        2: '2',
        3: '3',
        6: '6',
      },
      boxShadow: {
        item: '0px 0px 15px 1px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
};
