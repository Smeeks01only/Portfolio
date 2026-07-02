/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#FFFFFF',
                'bg-light': '#F8F9FA',
                'bg-shadow': '#F1F3F5',
                'primary-color': '#2563EB',
                'secondary-color': '#E8EDFB',
                'text-light': '#111827',
                'text-dim': '#6B7280',
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
