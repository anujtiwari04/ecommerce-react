/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2d3436',
        secondary: '#0984e3',
        accent: '#00b894',
        'light-gray': '#dfe6e9',
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '42px',
        'heading-2': '32px',
        'heading-3': '24px',
        body: '16px',
      },
      lineHeight: {
        relaxed: '1.6',
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0,0,0,0.1)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #6c5ce7, #a363d9)',
        'login-gradient': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      },
    },
  },
  plugins: [],
};