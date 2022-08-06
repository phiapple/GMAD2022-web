import SolidButton from 'components/Button/SolidButton';
import MainEventCard from 'components/Card/MainEventCard';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';

const EVENTS = [
	{
		title: 'NAO',
		subtitle: 'National Accounting Olympiad',
		body: 'National Accounting Olympiad (NAO) is one of the largest and most prestigious Accounting Olympiads in Indonesia. As part of the Gadjah Mada Accounting Days (GMAD) 2022, NAO is here to prove that an olympiad can provide solutions for current accounting issues, packed in the form of a case study and executed with a great deal of fun yet also challenging.',
		imageUrl: '/images/homepage/event-nao.png',
		imageAlt: 'NAO',
		buttonText: 'learn more',
		buttonPushTo: '/nao'
	},
	{
		title: 'Atalk',
		subtitle: 'Accounting Talk',
		body: 'Accounting Talk (A-Talk) is the biggest accounting seminar intended for students, business, people, civil servants, and the general public. In an era full of uncertainty, A-Talk advances to discuss optimization and the application of digitalization to the business in the future.',
		imageUrl: '/images/homepage/event-atalks.png',
		imageAlt: 'Atalk',
		buttonText: 'learn more',
		buttonPushTo: '/atalks'
	}
];

const register = () => {
	return (
		<DefaultLayout title="Register - GMAD 2022">
			{/* Our Events */}
			<section className="py-24 text-p1 bg-[url('/images/bg/bg-homepage-3.png')] bg-cover bg-center">
				<div className="container mx-auto">
					<h1
						className="font-chromate text-c-yellow text-center outlineText2"
						data-aos="zoom-out-up"
					>
						Main Events
					</h1>
					<div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto"
						data-aos="zoom-out-down"
						data-aos-delay="500"
					>
						{EVENTS.map((event, index) => (
							<MainEventCard
								key={index}
								title={event.title}
								subtitle={event.subtitle}
								body={event.body}
								imageUrl={event.imageUrl}
								imageAlt={event.imageAlt}
								noButton={true}
							/>
						))}
					</div>
				</div>
			</section>

			{/* register now */}
			<section className="py-24 text-p1 bg-green-light bg-cover bg-center text-white text-center">
				<div className="container grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-16 md:gap-8">
					{/* atalk */}
					<div className="flex flex-col items-center" data-aos="fade-right">
						<div className="relative w-[300px] h-[200px] rounded-3xl p-6 glassmo outline-gradient">
							<Image
								src="/images/homepage/mini-event-atalks-test.png"
								alt="A-Talk"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-2xl"
							/>
						</div>
						<div className="h-4"></div>
						<div>
							<h4 className="font-bold">Acounting Talk (A-Talk)</h4>
							<div className="h-2"></div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Perspiciatis quis
							</p>
							<div className="h-4"></div>
							<div className="grid place-items-center">
								<SolidButton text="Coming Soon" center disabled />
							</div>
						</div>
					</div>

					{/* nao */}
					<div
						className="flex flex-col md:flex-col-reverse items-center"
						data-aos="fade-left"
						data-aos-delay="500"
					>
						<div className="relative w-[300px] h-[200px] rounded-3xl p-6 glassmo outline-gradient">
							<Image
								src="/images/homepage/mini-event-nao-test.png"
								alt="NAO"
								layout="fill"
								objectFit="cover"
								objectPosition="center"
								className="rounded-2xl"
							/>
						</div>
						<div className="h-4"></div>
						<div>
							<h4 className="font-bold">National Accounting Olympiad (NAO)</h4>
							<div className="h-2"></div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Perspiciatis quis
							</p>
							<div className="h-4"></div>
							<a
								className="grid place-items-center"
								href="https://docs.google.com/forms/d/e/1FAIpQLSfqNe4Xj2pRO0gA_yngVBUeCzLg9Ntk9H2KGJFFcxWhUZ0vyA/viewform?usp=sf_link*"
								target="_blank"
								rel="noreferrer"
							>
								<SolidButton text="Register NAO" center />
							</a>
						</div>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
};

export default register;
