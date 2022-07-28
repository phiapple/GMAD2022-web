export default function OutlineButton({ text = 'button', onClick }) {
	return (
		<div
			role="button"
			onClick={onClick}
			className="px-6 py-2 border-2 border-c-yellow text-lg text-c-yellow hover:bg-c-yellow hover:text-green-light font-bold rounded-full transition-all duration-200"
		>
			{text}
		</div>
	);
}
