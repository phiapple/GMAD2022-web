import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
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
	);
}
