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
				'c-blue': {
					logo: '#006970'
				},
				green: {
					light: '#157067',
					dark: '#0E473E'
				},
				'c-yellow': '#FCEB8F'
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem'
				}
			},
			fontSize: {
				h1: ['91px', 'auto'],
				h2: ['70px', 'auto'],
				h3: ['55px', 'auto'],
				h4: ['40px', 'auto'],
				p1: ['34px', '44px']
			},
			backgroundImage: {
				register: `url('/images/bg/bg-register.png')`,
				nao1: `url('/images/bg/bg-nao-1.png')`,
				nao2: `url('/images/bg/bg-nao-2.png')`
			}
		}
	},
	plugins: []
};
