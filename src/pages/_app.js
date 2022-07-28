// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1000
		});
	}, []);

	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
