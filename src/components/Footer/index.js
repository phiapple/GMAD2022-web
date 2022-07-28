import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<>
			<section className="h-[60vh] lg:h-[70vh] px-10 lg:px-36 bg-gradient-to-b from-green-light to-green-dark">
				<div className="relative w-full h-full rounded-3xl lg:rounded-[85px] bg-contactUs bg-cover bg-no-repeat">
					<div className="absolute w-full h-full rounded-3xl lg:rounded-[85px] bg-c-yellow/70"></div>
					<div className="absolute z-10 py-10 lg:py-4 w-full h-full flex flex-col">
						<h1 className="text-center outlineText text-white font-chromate">
							Contact Us
						</h1>
						<div className="flex-grow grid grid-cols-1 lg:grid-cols-2 lg:gap-10 font-bold text-shadow">
							<div className="flex flex-col items-center justify-center gap-1 lg:gap-4">
								<h3 className="text-green-dark">Sponsorship</h3>
								<h3 className="p-2 rounded-lg text-white bg-green-dark">
									089943568795
								</h3>
								<h4 className="text-green-light">Ines</h4>
							</div>
							<div className="flex flex-col items-center justify-center gap-1 lg:gap-4">
								<h3 className="text-green-dark">Media Partnership</h3>
								<h3 className="p-2 rounded-lg text-white bg-green-dark">
									089943568795
								</h3>
								<h4 className="text-green-light">Anggi</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="relative h-[100vh] bg-pastPartner bg-cover bg-no-repeat">
				<div className="absolute h-full w-full bg-gradient-to-b from-green-dark via-green-dark/80 to-green-dark/70"></div>
				<div className="absolute z-10 h-full w-full px-4 lg:px-36 pt-36">
					<h1 className="text-center outlineText text-c-yellow font-chromate">
						Our Past Partner
					</h1>
					<div className="h-full flex flex-col lg:flex-row gap-10 lg:gap-2 items-center justify-center text-white">
						<div className="flex-1 flex flex-col items-center justify-center">
							<h3>Sponsor:</h3>
						</div>
						<div className="flex-1 flex flex-col items-center justify-center">
							<h3>Media Partner:</h3>
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
				<div className="grid grid-cols-4 gap-2 lg:gap-4 text-white">
					<a href="https://instagram.com/" target="_blank" rel="noreferrer">
						<FaInstagram className="h-10 w-10 lg:h-12 lg:w-12 p-2 lg:p-3 rounded-full bg-c-blue-logo  cursor-pointer hover:scale-105" />
					</a>
					<a href="https://facebook.com/" target="_blank" rel="noreferrer">
						<FaFacebook className="h-10 w-10 lg:h-12 lg:w-12 p-2 lg:p-3 rounded-full bg-c-blue-logo  cursor-pointer hover:scale-105" />
					</a>
					<a href="https://twitter.com/" target="_blank" rel="noreferrer">
						<FaTwitter className="h-10 w-10 lg:h-12 lg:w-12 p-2 lg:p-3 rounded-full bg-c-blue-logo  cursor-pointer hover:scale-105" />
					</a>
					<a href="https://linkedin.com/" target="_blank" rel="noreferrer">
						<FaLinkedin className="h-10 w-10 lg:h-12 lg:w-12 p-2 lg:p-3 rounded-full bg-c-blue-logo  cursor-pointer hover:scale-105" />
					</a>
				</div>
			</footer>
		</>
	);
}
