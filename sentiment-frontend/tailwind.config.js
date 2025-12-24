/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                indigo: {
                    600: '#4F46E5', // Primary
                },
                green: {
                    500: '#10B981', // Success
                },
                red: {
                    500: '#EF4444', // Error
                }
            }
        },
    },
    plugins: [],
}
