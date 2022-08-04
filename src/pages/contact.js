import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';

const SOSMED = [
	{
		name: 'instagram',
		imageUrl: '/images/logo/instagram-green.svg',
		redirectUrl: 'https://instagram.com/gmad.ugm'
	},
	{
		name: 'line',
		imageUrl: '/images/logo/line-green.svg',
		redirectUrl: 'https://line.me/R/ti/p/@aju6891t?from=page'
	},
	{
		name: 'linkedin',
		imageUrl: '/images/logo/linkedin-green.svg',
		redirectUrl: 'https://www.linkedin.com/company/gmad.ugm'
	}
];

const contact = () => {
	return (
		<DefaultLayout title="Contact Us - GMAD 2022">
			<section className="bg-[url('/images/bg/bg-homepage-1.png')] bg-cover bg-center">
				<div className="container mx-auto max-w-3xl text-center py-20 flex flex-col items-center">
					<h1 className="font-chromate text-c-yellow outlineText pb-16">
						Contact Us
					</h1>
					<a href="mailto:pr.gmad@ugm.ac.id">
						<h4
							role="button"
							className="text-white border-b-2 border-c-yellow w-fit px-6 hover:text-c-yellow font-bold transition-all duration-150"
						>
							pr.gmad@ugm.ac.id
						</h4>
					</a>
					<div className="flex flex-row items-center mt-8 space-x-4 md:space-x-12">
						{SOSMED.map((sosmed, index) => (
							<a
								href={sosmed.redirectUrl}
								target="_blank"
								rel="noreferrer"
								key={index}
							>
								<div className="w-[60px] h-[60px] p-3 md:w-[100px] md:h-[100px] md:p-6 rounded-xl md:rounded-3xl outline-gradient bg-gradient-to-br hover:bg-gradient-to-tl from-[#1ea396] to-green-light transition-all duration-200">
									<Image
										src={sosmed.imageUrl}
										alt={sosmed.name}
										height={300}
										width={300}
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
};

export default contact;
