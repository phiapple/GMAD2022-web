export default function SolidButton({ text = 'button', onClick }) {
	return (
		<div
			role="button"
			onClick={onClick}
			className="px-6 py-2 border-2 border-c-yellow text-lg hover:text-c-yellow bg-c-yellow hover:bg-green-light text-green-light font-bold rounded-full transition-all duration-200 w-fit"
		>
			{text}
		</div>
	);
}
