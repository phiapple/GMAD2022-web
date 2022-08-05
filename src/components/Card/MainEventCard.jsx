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
		<div className="p-6 border-2 stroke-gradient-1 rounded-[40px] text-white flex flex-col space-y-2 glassmo">
			<div className="">
				<Image
					src={imageUrl}
					alt={imageAlt}
					width={640}
					height={360}
					objectFit="cover"
					objectPosition="center"
					className="rounded-[32px]"
				/>
			</div>
			<h3 className="font-bold drop-shadow-lg">{title}</h3>
			<h4 className="font-bold drop-shadow-lg">{subtitle}</h4>
			<p className="">{body}</p>
			{!noButton && (
				<>
					<div className="grow h-2"></div>
					<div className="flex flex-row justify-end">
						<OutlineButton
							onClick={() => router.push(buttonPushTo)}
							text={buttonText}
						/>
					</div>
				</>
			)}
		</div>
	);
}
