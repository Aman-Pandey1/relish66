/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: '#001F3F',
					50: '#F0F4F8',
					100: '#D9E2EC',
					200: '#BCCCDC',
					300: '#9FB3C8',
					400: '#829AB1',
					500: '#627D98',
					600: '#486581',
					700: '#334E68',
					800: '#243B53',
					900: '#001F3F',
				},
				navy: {
					DEFAULT: '#001F3F',
					50: '#F0F4F8',
					100: '#D9E2EC',
					200: '#BCCCDC',
					300: '#9FB3C8',
					400: '#829AB1',
					500: '#627D98',
					600: '#486581',
					700: '#334E68',
					800: '#243B53',
					900: '#001F3F',
				},
				red: {
					DEFAULT: '#B91C1C',
				},
			},
			fontFamily: {
				serif: ['"Merriweather"', 'serif'],
				sans: ['"Inter"', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
