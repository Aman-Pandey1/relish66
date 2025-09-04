/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				burnt: {
					DEFAULT: '#7A1E1E',
					50: '#F6EAEA',
					100: '#ECD5D5',
					200: '#D5A8A8',
					300: '#BE7B7B',
					400: '#A64E4E',
					500: '#7A1E1E',
					600: '#5E1717',
					700: '#421010',
					800: '#260909',
					900: '#140404',
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
