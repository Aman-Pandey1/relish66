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
					DEFAULT: '#1E3A8A',
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					300: '#93C5FD',
					400: '#60A5FA',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					900: '#1E3A8A',
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
