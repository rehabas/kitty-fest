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
      },
      flexGrow: {
        1: '1',
        2: '2',
        3: '3',
        6: '6',
      }
    },
  },
  plugins: [],
};
