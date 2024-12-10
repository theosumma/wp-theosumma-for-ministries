/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/**/*.html',  // if you use HTML files outside src
  ],
  theme: {
    extend: {
      colors: {
        tsMain: '#FFBB5C',
        primary: '#0078D4',  // Soft blue for primary action elements
        secondary: '#F3F4F6',  // Light gray background
        success: '#198754',  // green for success messages
        danger: '#E3342F',  // red for error messages
        secondaryLight: '#E5E7EB',  // Lighter gray for backgrounds
        secondaryDark: '#1F2937',  // Dark gray for text and dark mode backgrounds
        accent: '#34D399',  // Green for active states or success messages
        secondaryAccent: '#60A5FA',  // Lighter blue for highlights
        dark: '#111827',  // Dark gray for text
        gray: {
          900: '#1F2937',  // Dark gray for text
          800: '#374151',  // Slightly lighter dark gray
          700: '#4B5563',  // Medium gray for text
          600: '#6B7280',  // Medium-light gray for secondary text
          500: '#9CA3AF',  // Light gray for borders and placeholders
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'boxes-gradient': 'linear-gradient(to right, #0078D4, #60A5FA)',  // Gradient for visual accents
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwind-scrollbar')
  ]
}
