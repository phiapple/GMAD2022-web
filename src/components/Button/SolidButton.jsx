export default function SolidButton({
	text = 'button',
	onClick,
	disabled = false
}) {
	return (
		<div
			role={disabled ? 'none' : 'button'}
			onClick={onClick}
			className={`px-6 py-2 border-2 text-lg  font-bold rounded-full transition-all duration-200 w-fit ${
				disabled
					? 'border-gray-300 bg-gray-300 text-green-light cursor-default'
					: 'border-c-yellow hover:text-c-yellow bg-c-yellow hover:bg-green-light text-green-light'
			}`}
		>
			{text}
		</div>
	);
}
