import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<>
			<section className="px-10 lg:px-36 bg-gradient-to-b from-green-light to-green-dark">
				<div className=" w-full h-full py-10 rounded-3xl lg:rounded-[85px] bg-c-yellow bg-cover bg-no-repeat">
					<h1 className="text-center outlineTextMiniDark text-white font-chromate leading-1">
						Contact Us
					</h1>
					<div className="lg:px-10 pt-10 pb-4 flex-grow grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-4 text-center font-bold">
						<div className="flex flex-col items-center justify-center gap-1 lg:gap-5">
							<h3 className="text-green-dark text-shadow-light">Sponsorship</h3>
							<h3 className="p-2 px-4 lg:px-10 shadow-2xl rounded-full text-white bg-green-dark">
								+62-877-3929-1110
							</h3>
							<h4 className="text-green-light">Divanti Ayu Wulandari</h4>
						</div>
						<div className="flex flex-col items-center justify-center gap-1 lg:gap-5">
							<h3 className="text-green-dark text-shadow-light">
								Media Partnership
							</h3>
							<h3 className="p-2 px-4 lg:px-10 shadow-2xl rounded-full text-white bg-green-dark">
								+62-8953-6611-1531
							</h3>
							<h4 className="text-green-light">Inas Farrosi Hanandiya</h4>
						</div>
					</div>
				</div>
			</section>

			<section className="relative h-[100vh] bg-pastPartner bg-cover bg-no-repeat">
				<div className="absolute h-full w-full bg-gradient-to-b from-green-dark via-green-dark/80 to-green-dark/80"></div>
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
