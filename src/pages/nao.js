import DefaultLayout from 'components/DefaultLayout/DefaultLayout';

function nao() {
	return (
		<DefaultLayout>
			<div>haloo ini nao</div>
			<div>haloo ini nao</div>
			<div>haloo ini nao</div>
			<div>haloo ini nao</div>
		</DefaultLayout>
	);
}

nao.getInitialProps = async ctx => {
	return {};
};

export default nao;
