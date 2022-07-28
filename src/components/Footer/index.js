import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<>
			<section className="h-[60vh] px-36 bg-gradient-to-b from-green-light to-green-dark">
				<div className="relative w-full h-full rounded-[85px] bg-contactUs bg-cover bg-no-repeat">
					<div className="absolute w-full h-full rounded-[85px] bg-c-yellow/70"></div>
					<div className="absolute z-10 w-full h-full">
						<h1 className="text-center outlineText text-white font-chromate">
							Contact Us
						</h1>
						<div className="grid grid-cols-2 gap-10 font-bold text-shadow">
							<div className="flex flex-col items-center justify-center gap-4">
								<h3 className="text-green-dark">Sponsorship</h3>
								<h3 className="p-2 rounded-lg text-white bg-green-dark">
									089943568795
								</h3>
								<h4 className="text-green-light">Ines</h4>
							</div>
							<div className="flex flex-col items-center justify-center gap-4">
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
				<div className="absolute z-10 h-full w-full px-36 pt-36">
					<h1 className="text-center outlineText text-c-yellow font-chromate">
						Our Past Partner
					</h1>
					<div className="flex items-center justify-center text-white">
						<div className="flex-1 flex flex-col items-center justify-center">
							<h3>Sponsor:</h3>
						</div>
						<div className="flex-1 flex flex-col items-center justify-center">
							<h3>Media Partner:</h3>
						</div>
					</div>
				</div>
			</section>

			<footer className="h-24 px-10 flex justify-between items-center bg-black">
				<div className="relative h-full w-40">
					<Image
						src="/images/logo/Logo GMAD Putih.png"
						layout="fill"
						objectFit="contain"
						alt="logo gmad"
					/>
				</div>
				<div className="grid grid-cols-4 gap-4 text-white">
					<FaInstagram className="h-12 w-12 bg-c-blue-logo p-3 rounded-full" />
					<FaFacebook className="h-12 w-12 bg-c-blue-logo p-3 rounded-full" />
					<FaTwitter className="h-12 w-12 bg-c-blue-logo p-3 rounded-full" />
					<FaLinkedin className="h-12 w-12 bg-c-blue-logo p-3 rounded-full" />
				</div>
			</footer>
		</>
	);
}
