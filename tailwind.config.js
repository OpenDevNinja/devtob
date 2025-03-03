// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",     // Bleu technologique
        secondary: "#00D4FF",   // Vert Cyan innovant
        dark: "#1E1E1E",        // Noir Charbon élégant
        light: "#F5F5F5",       // Gris Clair pour contraste
        accent: "#FBA83C",      // Orange pour éléments clés
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.65rem',
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 123, 255, 0.2)',
        'hover': '0 8px 30px rgba(0, 123, 255, 0.3)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #007BFF 0%, #00D4FF 100%)',
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}