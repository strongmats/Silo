/** @type {import('tailwindcss').Config} */

/*
 * ══════════════════════════════════════════════════════════════
 *  MATTHEW STRONG — TAILWIND THEME CONFIG
 *  Fonts: Ovo (display/headings) + Mulish (body/UI)
 *  Palette: Alabaster Grey · Air Force Blue · Burgundy · Carbon Black · Snow
 *
 *  SETUP:
 *    1. npm install -D tailwindcss
 *    2. Drop this file as tailwind.config.js in your project root
 *    3. Add Google Fonts to your HTML <head> or CSS:
 *       @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ovo&display=swap');
 * ══════════════════════════════════════════════════════════════
 */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── Core Palette ── */
        alabaster:  '#D3D4D9',
        airforce:   {
          DEFAULT: '#4B88A2',
          hover:   '#3d7490',
          light:   '#4b88a233',
        },
        burgundy:   {
          DEFAULT: '#801928',
          hover:   '#6b1522',
          light:   '#80192833',
        },
        carbon:     '#252627',
        snow:       '#FFF9FB',

        /* ── Semantic Aliases ── */
        primary:    '#4B88A2',
        accent:     '#801928',
        surface:    '#FFF9FB',
        foreground: '#252627',

        /* ── Extended Neutrals ── */
        gray: {
          50:  '#FFF9FB',
          100: '#f3f3f5',
          200: '#e8e8eb',
          300: '#D3D4D9',
          400: '#a8a9ad',
          500: '#8a8b8e',
          600: '#67686b',
          700: '#505153',
          800: '#3a3b3d',
          900: '#252627',
        },
      },

      fontFamily: {
        display: ["'Ovo'", 'Georgia', "'Times New Roman'", 'serif'],
        body:    ["'Mulish'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },

      fontSize: {
        'xs':   ['0.64rem',  { lineHeight: '1.5' }],
        'sm':   ['0.8rem',   { lineHeight: '1.5' }],
        'base': ['1rem',     { lineHeight: '1.5' }],
        'lg':   ['1.25rem',  { lineHeight: '1.4' }],
        'xl':   ['1.563rem', { lineHeight: '1.3' }],
        '2xl':  ['1.953rem', { lineHeight: '1.2' }],
        '3xl':  ['2.441rem', { lineHeight: '1.2' }],
        '4xl':  ['3.052rem', { lineHeight: '1.1' }],
      },

      borderRadius: {
        sm:   '0.25rem',
        md:   '0.5rem',
        lg:   '0.75rem',
        xl:   '1rem',
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 2px rgba(37, 38, 39, 0.06)',
        md: '0 4px 6px -1px rgba(37, 38, 39, 0.08), 0 2px 4px -2px rgba(37, 38, 39, 0.06)',
        lg: '0 10px 15px -3px rgba(37, 38, 39, 0.1), 0 4px 6px -4px rgba(37, 38, 39, 0.06)',
        xl: '0 20px 25px -5px rgba(37, 38, 39, 0.12), 0 8px 10px -6px rgba(37, 38, 39, 0.06)',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
