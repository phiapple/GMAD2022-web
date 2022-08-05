import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar/Navbar';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const timelines = [
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	},
	{
		date: '07',
		month: 'July',
		eventName: 'Registration',
		imgSrc: '',
		link: ''
	}
];

function Nao() {
	const [swiper, setSwiper] = useState();

	const NextAction = e => {
		if (swiper.activeIndex !== 2) return swiper.slideTo(2);

		return primaryProps.onClick(e);
	};

	return (
		<DefaultLayout title="GMAD 2022">
			<div className="relative h-screen w-full flex items-center justify-center bg-nao1 ">
				<div className="absolute w-full h-full bg-green-dark/90"></div>
				<div className="absolute w-full h-full z-10 flex items-center justify-center">
					<div className="text-center w-[60vw]">
						<h1 className="font-chromate text-c-yellow outlineText">
							National Accounting Olympiad (NAO)
						</h1>
						<div className="text-white font-medium">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
							consequat vel ligula ac maximus. Aliquam quis erat quam. Mauris
							vel hendrerit elit. Nam sagittis varius ultricies. Nam hendrerit
							eget urna in imperdiet.
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-full pl-20 py-36 gap-10 flex items-center justify-center bg-green-light max-w-full overflow-hidden">
				<div className="flex-[1] flex flex-col gap-10">
					<h2 className="text-green-dark font-bold">2022</h2>
					<h1 className="font-chromate text-c-yellow">
						Timeline & Information
					</h1>
					<div className="flex gap-5">
						<IoChevronBack
							className="p-2 w-10 h-10 rounded-full text-c-yellow border border-c-yellow hover:bg-c-yellow hover:text-green-dark cursor-pointer transition-all"
							onClick={() => swiper.slidePrev()}
						/>
						<IoChevronForward
							className="p-2 w-10 h-10 rounded-full text-c-yellow border border-c-yellow hover:bg-c-yellow hover:text-green-dark cursor-pointer transition-all"
							onClick={() => swiper.slideNext()}
						/>
					</div>
				</div>
				<div className="flex-[3] w-full h-full">
					<style>
						{`
							.swiper-slide{
								opacity: 0.5
							}
							.swiper-slide-active{
								opacity: 1
							}
						`}
					</style>
					<Swiper
						loop
						slidesPerView={3}
						spaceBetween={10}
						pagination={{
							clickable: true
						}}
						modules={[Pagination]}
						className="w-[60vw] h-[75vh]"
						onSwiper={swiper => setSwiper(swiper)}
					>
						{timelines.map((val, index) => {
							return (
								<SwiperSlide className="h-full" key={index}>
									<div className="h-[65vh] w-[17.5vw] p-4 flex flex-col gap-4 rounded-2xl break-words profile-card outline-gradient">
										<h1 className="font-bold leading-1 text-c-yellow text-shadow">
											{val.date}
										</h1>
										<h4 className="font-bold leading-1 text-c-yellow text-shadow">
											{val.month}
										</h4>
										<h4 className="font-bold text-white text-shadow">
											{val.eventName}
										</h4>
										<div className="h-[20%] w-full bg-slate-200 rounded-lg"></div>
										<button className="p-2 rounded-full border-2 font-medium text-c-yellow border-c-yellow bg-transparent hover:!bg-c-yellow hover:text-green-light cursor-pointer">
											learn more
										</button>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
			<div className="relative h-[180vh] w-full bg-nao2 bg-cover bg-no-repeat">
				<div className="absolute w-full h-full bg-gradient-to-b from-green-dark/90 to-green-light/90"></div>
				<div className="absolute z-10 w-full h-full p-36 flex flex-col gap-60 items-center justify-center ">
					<div className="flex flex-col items-center justify-center gap-10">
						<h1 className="font-chromate text-c-yellow outlineText">
							Booklet & Guideline
						</h1>
						<div className="text-white w-[40vw]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
							consequat vel ligula ac maximus. Aliquam quis erat quam. Mauris
							vel hendrerit elit.
						</div>
						<button className="w-fit px-4 py-2 bg-transparent border-2 border-c-yellow rounded-full text-c-yellow font-medium hover:!bg-c-yellow hover:text-green-dark cursor-pointer">
							Learn more
						</button>
					</div>

					<div className="relative flex flex-col items-center justify-center gap-10 w-full">
						<div className="absolute w-full h-full bg-register bg-no-repeat bg-contain"></div>
						<div className="p-4 h-[35vw] w-[35vw] flex items-center justify-center glassmo rounded-full text-c-yellow outline-gradient">
							<h1 className="font-chromate text-center outlineText">
								Register Now!
							</h1>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default Nao;
