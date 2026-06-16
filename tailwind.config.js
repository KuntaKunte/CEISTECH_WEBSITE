import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: '#0F172A',
        electric: '#2563EB',
        cyan: '#06B6D4',
        text: '#1E293B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
