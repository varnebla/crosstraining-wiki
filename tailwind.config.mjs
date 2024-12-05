/** @type {import('tailwindcss').Config} */
const accent = {
	10: '',
	20: '',
	30: '',
	40: '',
	50: 'hsl(87 100% 82%)',
	60: '',
	70: '',
	80: '',
	90: '',
	95: '',
}

const secondary = {
	10: '',
	20: '',
	30: '',
	40: '',
	50: 'hsl(207 100% 82%)',
	60: '',
	70: '',
	80: '',
	90: '',
	95: '',
}

const tertiary = {
	10: '',
	20: '',
	30: '',
	40: '',
	50: 'hsl(327 100% 82%)',
	60: '',
	70: '',
	80: '',
	90: '',
	95: '',
}

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				accent,
				secondary,
				tertiary,
			},
			fontFamily: {
				satoshi: ['Satoshi-Variable', 'sans-serif'],
				inter: ['Inter Variable', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
