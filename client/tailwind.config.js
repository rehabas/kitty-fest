/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  darkMode: 'class',
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
        'very-dark-gray': '#222',
        'medium-gray': '#444',
        'dark-gray': '#555',
        'light-gray': '#D3D3D3',
        purple: '#938eef',
        'dark-blue': '#00008B',
        'light-navy': '#5217ff',
        'fire-opal': '#f0544f',
        'lime-green': '#00ff00',
        'white-smoke': '#f5f5f5',
        'soft-white': '#f6f3f3',
        'dark-charcoal': '#333',
      },
      boxShadow: {
        item: '0px 0px 15px 1px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
};
