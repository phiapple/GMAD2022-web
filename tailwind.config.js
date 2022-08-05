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
				h1: ['36px', 'auto'],
				h2: ['32px', 'auto'],
				h3: ['24px', 'auto'],
				h4: ['20px', 'auto'],
				p1: ['16px', '44px'],
				'mobile-h1': ['30px', 'auto'],
				'mobile-h2': ['28px', 'auto'],
				'mobile-h3': ['24px', 'auto'],
				'mobile-h4': ['20px', 'auto'],
				'mobile-p1': ['16px', 'auto']
			},
			backgroundImage: {
				register: `url('/images/bg/bg-register.png')`,
				'register-mobile': `url('/images/bg/bg-register-mobile.png')`,
				nao1: `url('/images/bg/bg-nao-1.png')`,
				nao2: `url('/images/bg/bg-nao-2.png')`,
				contactUs: `url('/images/bg/bg-ContactUsBox.jpg')`,
				pastPartner: `url('/images/bg/bg-PastPartner.webp')`
			}
		}
	},
	plugins: []
};
