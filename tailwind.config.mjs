
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
import tailwindcss from "@astrojs/tailwind";


export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors:{
                main: '#111827',

            }
        },
        fontFamily:{
            sans: ["DM Sans", "sans-serif"],
        }
    },
    darkMode: 'selector',
    plugins: [
        require('@tailwindcss/typography'),
        // inline code and area code should be styled differently
        plugin(function ({addVariant}) {
            addVariant(
                'prose-ic',
                '&.special-class-for-inline-code :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
            );
        }),
        plugin(function ({ addVariant }) {
            addVariant('prose-iframe', '& iframe');
        })
    ],
}