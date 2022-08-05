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
				h1: ['61.04px', '68px'],
				h2: ['48.84px', '53px'],
				h3: ['39.06px', '42px'],
				h4: ['31.25px', '35px'],
				p1: ['20px', '30px'],
				'mobile-h1': ['32px', '35px'],
				'mobile-h2': ['28px', '31px'],
				'mobile-h3': ['24px', '26px'],
				'mobile-h4': ['20px', '22px'],
				'mobile-p1': ['16px', '24px']
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
