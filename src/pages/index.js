import MainEventCard from 'components/Card/MainEventCard';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';

const EVENTS = [
	{
		title: 'NAO',
		subtitle: 'Lorem ipsum dolor',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste tenetur doloribus distinctio voluptatibus, corrupti illo, facere beatae error ad.',
		imageUrl: '/images/homepage/event-nao.png',
		imageAlt: 'NAO',
		buttonText: 'learn more',
		buttonPushTo: '/nao'
	},
	{
		title: 'Atalks',
		subtitle: 'Lorem ipsum dolor',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste tenetur doloribus distinctio voluptatibus, corrupti illo, facere beatae error ad.',
		imageUrl: '/images/homepage/event-atalks.png',
		imageAlt: 'Atalks',
		buttonText: 'learn more',
		buttonPushTo: '/atalks'
	}
];

const SOCIAL_MEDIAS = [
	{
		name: 'Instagram GMAD',
		imageUrl: '/images/homepage/sosmed-instagram.png'
	},
	{
		name: 'OA Line GMAD',
		imageUrl: '/images/homepage/sosmed-line.png'
	}
];

export default function Home() {
	return (
		<DefaultLayout title="GMAD 2022">
			{/* section 1: gmad */}
			<section className="grid place-content-center min-h-screen bg-green-dark text-p1">
				<div className="flex flex-col-reverse md:flex-row justify-center container w-full outline items-center md:space-y-0 md:space-x-8">
					<div className="md:w-[70%] lg:w-[60%] space-y-6">
						<h1 className="font-chromate text-c-yellow text-h3 lg:text-h1">
							Lorem Ipsum
						</h1>
						<div className=" text-white font-medium text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
							doloribus magni optio facere nemo consequatur, eaque inventore
							quos eveniet animi, perspiciatis itaque. Ratione rem facilis modi
							qui quas explicabo sapiente.
						</div>
					</div>
					<div className="max-w-[40vh] mb-8 md:mb-0">
						<Image
							src="/images/logo/gmad-white-vertical.svg"
							alt="GMAD logo"
							height={500}
							width={450}
							objectFit="contain"
							objectPosition="center"
						/>
					</div>
				</div>
				<div className="h-[90px]"></div>
			</section>

			{/* section 2: grand theme */}
			<section className="py-24 bg-green-light text-p1">
				<div className="container outline mx-auto">
					<h1 className="font-chromate text-c-yellow text-h3 lg:text-h1 text-center -my-6">
						Grand Theme
					</h1>
					<div className="mt-2 text-white font-medium text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<div className="border-[3px] border-yellow-500 mt-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-green-light p-8 relative">
						<div className="flex">
							<div className="w-0 lg:w-[45%]"></div>
							<div className="w-full lg:w-[55%]">
								<h2 className="text-h2 font-bold text-center">Heading 2</h2>
								<div className="text-h3 font-bold text-c-yellow text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</div>
						<div className="absolute outline bottom-0 lg:w-[450px] lg:h-[450px] hidden lg:block translate-y-[21.8%]">
							<Image
								src="/images/homepage/man-counting.png"
								alt=""
								width={550}
								height={550}
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* section 3: our main events */}
			<section className="py-24 bg-green-light text-p1">
				<div className="container outline mx-auto">
					<h1 className="font-chromate text-c-yellow text-h3 lg:text-h1 text-center -my-6">
						Our Main Events
					</h1>
					<div className="mt-2 text-white font-medium text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<div className="grid grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
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
			<section className="py-24 bg-green-light text-p1">
				<div className="container outline mx-auto">
					<h1 className="font-chromate text-c-yellow text-h3 lg:text-h1 text-center -my-6">
						Social Media
					</h1>
					<div className="mt-2 text-white font-medium text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<div className="grid grid-cols-2 gap-12 mt-16 max-w-3xl mx-auto">
						{SOCIAL_MEDIAS.map((sosmed, index) => (
							<div key={index} className="shadow-2xl">
								<Image
									src={sosmed.imageUrl}
									alt={sosmed.name}
									height={821}
									width={379}
									className="rounded-3xl"
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
