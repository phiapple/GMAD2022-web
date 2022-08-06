import AnimeLogo from 'components/Anime/AnimeLogo';
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

const SOCIAL_MEDIAS = [
	{
		name: 'Instagram GMAD',
		imageUrl: '/images/homepage/sosmed-instagram.png',
		redirectUrl: 'https://instagram.com/gmad.ugm'
	},
	{
		name: 'OA Line GMAD',
		imageUrl: '/images/homepage/sosmed-line.png',
		redirectUrl: 'https://line.me/R/ti/p/@aju6891t?from=page'
	}
];

export default function Home() {
	return (
		<DefaultLayout title="GMAD 2022">
			{/* section 1: gmad */}
			<section className="grid place-content-center min-h-screen bg-[url('/images/bg/bg-homepage-1.png')] bg-cover bg-center">
				<div className="flex flex-col-reverse md:flex-row justify-center container w-full items-center md:space-y-0 md:space-x-8">
					<div
						className="md:w-[70%] lg:w-[60%] space-y-6"
						data-aos="fade-right"
						data-aos-delay="3000"
					>
						<h1 className="font-chromate text-c-yellow outlineText">
							Gadjah Mada Accounting Days 2022
						</h1>
						<p className=" text-white font-medium text-justify">
							The biggest annual events of the Department of Accounting, Faculty
							of Economics and Business, Universitas Gadjah Mada (FEB UGM),
							organized by Ikatan Mahasiswa Akuntansi Gadjah Mada (IMAGAMA).
						</p>
					</div>
					<div className="max-w-[40vh] mb-8 md:mb-0">
						<AnimeLogo />
						<div className="-mt-12" data-aos-delay="2800" data-aos="fade-left">
							<Image
								src="/images/logo/gmad-text-white.svg"
								alt="GMAD logo"
								height={200}
								width={450}
								objectFit="contain"
								objectPosition="center"
							/>
						</div>
					</div>
				</div>
				<div className="h-[90px]"></div>
			</section>

			{/* section 2: grand theme */}
			<section className="py-24 text-p1 bg-green-dark shadow-2xl">
				<div className="container mx-auto">
					<h1
						className="font-chromate text-c-yellow text-center pb-8 outlineText"
						data-aos="zoom-out"
					>
						Grand Theme
					</h1>
					<div
						className="border-[3px] outline-gradient mt-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-green-dark relative"
						data-aos="zoom-in"
					>
						<div className="grid grid-cols-1 lg:grid-cols-2 p-12 gap-4">
							<div className="w-full aspect-video mx-auto rounded-3xl overflow-hidden">
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/SbCl6n6kQQA?start=1"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<div className="grid place-content-center row-start-1 lg:row-start-auto">
								<h2 className="text-xl lg:text-3xl font-bold text-center text-white">
									Advancement of Business Environment :
								</h2>
								<div className="h-4"></div>
								<div className="text-2xl lg:text-4xl font-bold text-c-yellow text-center">
									&ldquo;Facing off Uncertainty <br />
									in Digitized Era&rdquo;
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* section 3: our main events */}
			<section className="py-24 text-p1 bg-[url('/images/bg/bg-homepage-3.png')] bg-cover bg-center">
				<div className="container mx-auto">
					<h1
						className="font-chromate text-c-yellow text-center outlineText2"
						data-aos="zoom-out"
					>
						Our Main Events
					</h1>
					<div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto"
						data-aos="zoom-in-left"
					>
						{EVENTS.map((event, index) => (
							<MainEventCard
								key={index}
								title={event.title}
								subtitle={event.subtitle}
								body={event.body}
								imageUrl={event.imageUrl}
								imageAlt={event.imageAlt}
								buttonText={event.buttonText}
								buttonPushTo={event.buttonPushTo}
							/>
						))}
					</div>
				</div>
			</section>

			{/* seciton 4: social media */}
			<section className="py-24 text-p1 bg-[url('/images/bg/bg-homepage-4.png')] bg-cover bg-center">
				<div className="container mx-auto">
					<h1
						className="font-chromate text-c-yellow text-center outlineText2"
						data-aos="zoom-out"
					>
						Social Media
					</h1>
					<div
						className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-3xl mx-auto w-full place-items-center"
						data-aos="zoom-in-right"
					>
						{SOCIAL_MEDIAS.map((sosmed, index) => (
							<a
								href={sosmed.redirectUrl}
								target="_blank"
								rel="noreferrer"
								key={index}
								className="hover:-translate-y-1 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-200"
							>
								<div className="">
									<Image
										src={sosmed.imageUrl}
										alt={sosmed.name}
										height={821}
										width={379}
										className="rounded-3xl"
									/>
								</div>
							</a>
						))}
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
