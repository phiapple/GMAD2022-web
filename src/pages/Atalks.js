import DefaultLayout from 'components/DefaultLayout/DefaultLayout';

function Atalks() {
	return (
		<DefaultLayout title="ATalks - GMAD 2022">
			<div>haloo ini Atalks</div>
			<div>haloo ini Atalks</div>
			<div>haloo ini Atalks</div>
			<div>haloo ini Atalks</div>
		</DefaultLayout>
	);
}

Atalks.getInitialProps = async ctx => {
	return {};
};

export default Atalks;
