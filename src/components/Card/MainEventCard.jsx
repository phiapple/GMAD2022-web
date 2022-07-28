import Image from 'next/image';
import { useRouter } from 'next/router';
import OutlineButton from './OutlineButton';

export default function MainEventCard({
	imageUrl,
	imageAlt = '',
	title,
	subtitle,
	body,
	buttonText,
	buttonPushTo = '/'
}) {
	const router = useRouter();
	return (
		<div className="p-6 border-2 border-c-yellow rounded-[40px] text-white flex flex-col space-y-2">
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
			<div className="text-h3">{title}</div>
			<div className="text-h4">{subtitle}</div>
			<div className="">{body}</div>
			<div className="flex flex-row justify-end">
				<OutlineButton
					onClick={() => router.push(buttonPushTo)}
					text={buttonText}
				/>
			</div>
		</div>
	);
}
