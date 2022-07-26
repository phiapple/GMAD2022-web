import Navbar from 'components/Navbar/Navbar';
import Head from 'next/head';

export default function DefaultLayout({ title = 'GMAD 2022', children }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
