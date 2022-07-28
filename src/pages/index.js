import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';

export default function Home() {
	return (
		<DefaultLayout title="GMAD 2022">
			{/* navbar height */}
			<div className="h-[70px]"></div>

			{/* section 1 */}
			<section className="grid place-content-center min-h-screen bg-green-dark">
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

			{/* section 2 */}
			<section className="py-24 bg-green-light">
				<div className="container outline mx-auto">
					<h1 className="font-chromate text-c-yellow text-4xl md:text-5xl lg:text-6xl text-center">
						Grand Theme
					</h1>
					<div className="mt-2 text-lg text-white font-medium text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<div className="stroke-gradient-1 mt-8 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-green-light p-8">
						halo
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}