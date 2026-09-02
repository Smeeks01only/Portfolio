/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': 'var(--bg-dark)',
                'bg-light': 'var(--bg-light)',
                'bg-shadow': 'var(--bg-shadow)',
                'primary-color': 'var(--primary-color)',
                'secondary-color': 'var(--secondary-color)',
                'text-light': 'var(--text-light)',
                'text-dim': 'var(--text-dim)',
            },
            fontFamily: {
                sans: ['Inter', 'Calibre', 'San Francisco', '-apple-system', 'sans-serif'],
                mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                fadeIn: 'fadeIn 0.8s ease-out forwards',
            },
        },
    },
    plugins: [],
}
