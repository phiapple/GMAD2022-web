/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			chromate: ['Chromate', 'serif'],
			Gogh: ['Gogh', 'sans-serif']
		},
		extend: {
			colors: {
				current: 'currentColor',
				green: {
					light: '#157067',
					dark: '#0E473E'
				},
				'c-yellow': '#FCEB8F'
			}
		}
	},
	plugins: []
};
