import classNames from 'classnames';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MedPart, Sponsor, Sosmed } from './source';

export default function Footer() {
	return (
		<>
			<section className="px-10 lg:px-36 bg-gradient-to-b from-green-light to-green-dark">
				<div className="h-[70px]"></div>
				<div
					className="copntainer max-w-3xl mx-auto w-full h-full py-10 rounded-3xl bg-c-yellow bg-cover bg-no-repeat"
					data-aos="fade-down"
				>
					<h3 className="text-center outlineTextMiniDark text-white font-chromate leading-1">
						Contact Us
					</h3>
					<div className="lg:px-10 pt-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 text-center font-bold">
						<div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
							<p className="text-green-dark text-shadow-light">Sponsorship</p>
							<a href="https://wa.me/6287739291110">
								<p className="pt-2 pb-1 px-4 lg:px-10 shadow-2xl rounded-full text-white bg-green-dark border-2 border-green-dark hover:bg-transparent hover:text-green-dark transition-all duration-200">
									+62-877-3929-1110
								</p>
							</a>
							<p className="text-green-light">Divanti Ayu Wulandari</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-1 lg:gap-3">
							<p className="text-green-dark text-shadow-light">
								Media Partnership
							</p>
							<a href="https://wa.me/62895366111531">
								<p className="pt-2 pb-1 px-4 lg:px-10 shadow-2xl rounded-full text-white bg-green-dark border-2 border-green-dark hover:bg-transparent hover:text-green-dark transition-all duration-200">
									+62-8953-6611-1531
								</p>
							</a>
							<p className="text-green-light">Inas Farrosi Hanandiya</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative h-[200vh] lg:h-[130vh] bg-pastPartner bg-cover bg-no-repeat">
				<div className="absolute h-full w-full bg-gradient-to-b from-green-dark via-green-dark/80 to-green-dark/80"></div>
				<div className="absolute z-10 h-full w-full px-4 lg:px-36 pt-36">
					<h1
						className="text-center outlineText text-c-yellow font-chromate mb-8 lg:-mb-4"
						data-aos="fade-up"
					>
						Our Past Partner
					</h1>
					<div className="h-full px-4 pb-20 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center text-white">
						<div
							className="flex-1 flex flex-col items-center justify-center gap-4"
							data-aos="fade-right"
							data-aos-delay="500"
						>
							<h3 className="font-bold">Sponsor:</h3>
							<div className="grid justify-items-center grid-cols-12 gap-x-4 lg:gap-x-4 gap-y-2">
								{Sponsor.map((val, index) => {
									return (
										<div
											className={classNames(
												'relative h-20 w-20 col-span-4',
												0 <= index && index <= 3 && 'lg:col-span-3',
												4 <= index && index <= 6 && 'lg:col-span-4',
												7 <= index && index <= 10 && 'lg:col-span-3',
												11 <= index && index <= 13 && 'lg:col-span-4',
												14 <= index && index <= 17 && 'lg:col-span-3'
											)}
											key={index}
										>
											<Image
												src={`/images/pastSponsor/${val}`}
												alt="Past Media Parnter"
												width="100%"
												height="100%"
												layout="responsive"
												objectFit="contain"
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div
							className="flex-1 flex flex-col items-center justify-center gap-4"
							data-aos="fade-left"
							data-aos-delay="1000"
						>
							<h3 className="font-bold">Media Partner:</h3>
							<div className="grid justify-items-center grid-cols-12 gap-x-4 gap-y-2">
								{MedPart.map((val, index) => {
									return (
										<div
											className={classNames(
												'relative h-20 w-20 col-span-4',
												0 <= index && index <= 3 && 'lg:col-span-3',
												4 <= index && index <= 6 && 'lg:col-span-4',
												7 <= index && index <= 10 && 'lg:col-span-3',
												11 <= index && index <= 13 && 'lg:col-span-4',
												14 <= index && index <= 17 && 'lg:col-span-3'
											)}
											key={index}
										>
											<Image
												src={`/images/pastMediaPartner/${val}`}
												alt="Past Media Parnter"
												width="100%"
												height="100%"
												layout="responsive"
												objectFit="contain"
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="h-32 lg:h-24 px-4 lg:px-10 py-4 lg:py-0 flex flex-col-reverse lg:flex-row justify-between gap-2 items-center bg-black">
				<div className="relative h-full w-24 lg:w-40">
					<Image
						src="/images/logo/Logo GMAD Putih.png"
						layout="fill"
						objectFit="contain"
						alt="logo gmad"
					/>
				</div>
				<div className="z-50 grid grid-cols-4 gap-2 lg:gap-4 text-white">
					{Sosmed.map(sosmed => (
						<a
							key={sosmed.name}
							href={sosmed.redirectUrl}
							target="_blank"
							rel="noreferrer"
							role="button"
						>
							<sosmed.imageFa className="block h-10 w-10 lg:h-12 lg:w-12 p-2 lg:p-3 rounded-full bg-c-blue-logo  cursor-pointer hover:scale-105" />
						</a>
					))}
				</div>
			</footer>
		</>
	);
}
