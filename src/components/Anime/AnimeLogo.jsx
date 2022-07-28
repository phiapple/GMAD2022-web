import Image from 'next/image';
import styles from './AnimeLogo.module.css';

export default function AnimeLogo() {
	return (
		<Image
			src="/images/logo/gmad-spiral-white.svg"
			alt="GMAD logo"
			height={500}
			width={450}
			objectFit="contain"
			objectPosition="center"
			className={styles.rotation}
		/>
	);
}
