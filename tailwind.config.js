/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030610",
        surface: {
          DEFAULT: "#080D18",
          elevated: "#0D1424",
          card: "#090F1E",
          hover: "#111A30"
        },
        primary: {
          blue: "#3877FF",
          cyan: "#25D9FF",
          violet: "#985CFF",
          purple: "#6535FF"
        },
        text: {
          main: "#F6F8FF",
          secondary: "#99A4BB",
          muted: "#6B7790"
        },
        border: {
          subtle: "rgba(115, 140, 210, 0.15)",
          glow: "rgba(115, 140, 210, 0.28)",
          highlight: "rgba(56, 119, 255, 0.5)"
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'orbit': 'orbit 15s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(56, 119, 255, 0.35)',
        'glow-cyan': '0 0 25px rgba(37, 217, 255, 0.35)',
        'glow-violet': '0 0 25px rgba(152, 92, 255, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(2, 6, 23, 0.7), 0 0 1px 1px rgba(115, 140, 210, 0.15)',
        'glow-card-hover': '0 20px 40px -15px rgba(56, 119, 255, 0.25), 0 0 1px 1px rgba(56, 119, 255, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(56, 119, 255, 0.15), rgba(152, 92, 255, 0.08) 40%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13, 20, 36, 0.8) 0%, rgba(8, 13, 24, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
