/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
          dark: 'var(--brand-dark)',
          deep: 'var(--brand-deep)',
          cream: 'var(--brand-cream)',
          muted: 'var(--brand-muted)',
          border: 'var(--brand-border)',
          card: 'var(--brand-card)',
          gold: 'var(--brand-gold)',
          sea: 'var(--brand-sea)',
          coral: 'var(--brand-coral)',
          sand: 'var(--brand-sand)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        num: ['"DM Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,28,52,0.06), 0 8px 24px rgba(15,28,52,0.06)',
        lift: '0 4px 14px rgba(15,28,52,0.08), 0 24px 48px rgba(15,28,52,0.10)',
        card: '0 1px 1px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(15,28,52,0.16)',
      },
      backgroundImage: {
        'wave-pattern':
          'radial-gradient(circle at 20% 0%, rgba(206,228,243,0.6) 0px, transparent 40%), radial-gradient(circle at 100% 100%, rgba(238,224,196,0.55) 0px, transparent 50%)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-300px 0' },
          '100%': { backgroundPosition: '300px 0' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};
