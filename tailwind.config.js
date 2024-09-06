/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#589BFF',
        light: '#f8f9fa',
        dark: '#212529',
        white: '#ffffff',
        black: '#000000',
        red: '#FF0000',
        green: '#2FBB69',
      },
    },
  },
}
