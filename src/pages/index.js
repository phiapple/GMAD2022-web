import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';

export default function Home() {
	return (
		<DefaultLayout title="GMAD 2022">
			<div className="h-[70px]"></div>
			<section className="grid place-content-center min-h-screen bg-green-light">
				<div className="flex flex-col-reverse md:flex-row justify-center container w-full outline items-center md:space-y-0 md:space-x-8">
					<div className="md:w-[70%] lg:w-60% space-y-6">
						<h1 className="font-chromate text-c-yellow text-4xl md:text-5xl lg:text-6xl">
							Lorem Ipsum
						</h1>
						<div className="text-lg text-white font-medium text-justify">
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
		</DefaultLayout>
	);
}
