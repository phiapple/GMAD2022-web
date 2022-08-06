import Image from 'next/image';
import { useRouter } from 'next/router';
import OutlineButton from '../Button/OutlineButton';

export default function MainEventCard({
	imageUrl,
	imageAlt = '',
	title,
	subtitle,
	body,
	noButton = false,
	buttonText,
	buttonPushTo = '/'
}) {
	const router = useRouter();
	return (
		<div
			className={`p-6 border-2 stroke-gradient-1 rounded-[40px] text-white flex flex-col space-y-2 glassmo ${
				!noButton && 'hover:-translate-y-1 transition-all duration-200'
			}`}
			role={!noButton && 'button'}
			onClick={
				!noButton &&
				function () {
					router.push(buttonPushTo);
				}
			}
		>
			<div className="w-[220px] mx-auto relative">
				<Image
					src={imageUrl}
					alt={imageAlt}
					width={640}
					height={360}
					objectFit="contain"
					objectPosition="center"
					// className="h-full"
				/>
			</div>
			<h3 className="font-bold lg:text-2xl drop-shadow-lg">{title}</h3>
			<h4 className="font-bold lg:text-xl drop-shadow-lg !-mt-1">{subtitle}</h4>
			<p className="text-sm lg:text-md">{body}</p>
			{/* {!noButton && (
				<>
					<div className="grow h-2"></div>
					<div className="flex flex-row justify-end">
						<OutlineButton
							onClick={() => router.push(buttonPushTo)}
							text={buttonText}
						/>
					</div>
				</>
			)} */}
		</div>
	);
}
