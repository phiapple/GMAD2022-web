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
import Image from 'next/image';

const timelines = [
	{
		date: '05 - 31',
		month: 'August',
		eventName: 'Early Bird Registration',
		imgSrc: null,
		link: ''
	},
	{
		date: '01 - 16',
		month: 'September',
		eventName: 'Regular Registration',
		imgSrc: null,
		link: ''
	},
	{
		date: '01',
		month: 'October',
		eventName: 'Online Preliminary',
		imgSrc: null,
		link: ''
	},
	{
		date: '03',
		month: 'October',
		eventName: 'Top 25 Announcement',
		imgSrc: null,
		link: ''
	},
	{
		date: '04 - 13',
		month: 'October',
		eventName: 'Main Event Registration',
		imgSrc: null,
		link: ''
	},
	{
		date: '14',
		month: 'October',
		eventName: 'Technical Meeting Quarter dan Semifinal',
		imgSrc: null,
		link: ''
	},
	{
		date: '15 - 16',
		month: 'October',
		eventName: 'Main Event : Quarter dan Semifinal	',
		imgSrc: null,
		link: ''
	},
	{
		date: '21',
		month: 'October',
		eventName: 'Technical Meeting Final',
		imgSrc: null,
		link: ''
	},
	{
		date: '22',
		month: 'October',
		eventName: 'Main Event : Final',
		imgSrc: null,
		link: ''
	},
	{
		date: '23',
		month: 'October',
		eventName: 'Awarding Day',
		imgSrc: null,
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
					<div className="text-center w-[75vw] lg:w-[60vw]">
						<h1
							className="py-4 font-chromate text-c-yellow outlineTextMiniLight"
							data-aos="fade-up"
						>
							National Accounting Olympiad (NAO)
						</h1>
						<div className="text-white font-medium" data-aos="fade-up">
							National Accounting Olympiad (NAO) is one of the largest and most
							prestigious Accounting Olympiads in Indonesia. As part of the
							Gadjah Mada Accounting Days (GMAD) 2022, NAO is here to prove that
							an olympiad can provide solutions for current accounting issues,
							packed in the form of a case study and executed with a great deal
							of fun yet also challenging.
						</div>
					</div>
				</div>
			</div>
			<div className="h-[120vh] lg:h-screen w-full lg:pl-20 py-36 gap-10 flex flex-col lg:flex-row items-center justify-center bg-green-light max-w-full overflow-hidden">
				<div
					className="flex-[1] h-full px-10 lg:px-0 flex items-center"
					data-aos="fade-right"
				>
					<div className="flex flex-col items-center lg:items-start gap-10 text-center lg:text-start">
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
				</div>
				<div
					className="flex-[3] w-full h-screen lg:h-full px-5 lg:px-0"
					data-aos="fade-left"
				>
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
						centeredSlides
						slidesPerView="auto"
						spaceBetween={10}
						pagination={{
							clickable: true
						}}
						modules={[Pagination]}
						className="w-full lg:w-[60vw] h-[55vh] lg:h-[65vh]"
						onSwiper={swiper => setSwiper(swiper)}
						breakpoints={{
							100: {
								slidesPerView: 2,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 10
							}
						}}
					>
						{timelines.map((val, index) => {
							return (
								<SwiperSlide className="h-full" key={index}>
									<div className="h-[45vh] lg:h-[55vh] w-[40vw] lg:w-[17.5vw] p-4 flex flex-col gap-4 rounded-2xl break-words profile-card outline-gradient">
										<h2 className="font-bold leading-1 text-c-yellow text-shadow">
											{val.date}
										</h2>
										<p className="font-bold leading-1 text-c-yellow text-shadow">
											{val.month}
										</p>
										<p className="flex-grow font-bold text-white text-shadow">
											{val.eventName}
										</p>
										<div className="relative h-[35%] w-full rounded-lg">
											<Image
												className="rounded-lg"
												src={val.src ?? '/images/bg/placeholder.png'}
												alt="image preview"
												layout="fill"
												objectFit="cover"
											/>
										</div>
										{/* <button className="p-2 rounded-full border-2 font-medium text-c-yellow border-c-yellow bg-transparent hover:!bg-c-yellow hover:text-green-light cursor-pointer transition-all">
											learn more
										</button> */}
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
			<div className="relative h-[200vh] w-full bg-nao2 bg-cover bg-no-repeat">
				<div className="absolute z-20 -translate-y-1/2 w-full h-[25vh] lg:h-[20vh] flex justify-center">
					<div
						className="w-3/4 h-full px-6 py-2 lg:py-6 bg-c-yellow rounded-2xl flex flex-col lg:flex-row"
						data-aos="fade-up"
					>
						<div className="flex-1 py-4 lg:py-0 px-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-black">
							<h4 className="font-bold text-shadow-b">Total Prize</h4>
							<h3 className="font-bold text-green-light text-shadow-b">
								IDR 17.000.000
							</h3>
						</div>
						<div className="flex-1 py-4 lg:py-0 px-10 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-l border-black">
							<p className="font-medium">Registration fee</p>
							<p className="font-medium text-green-dark">
								Early Bird : IDR 45.000
							</p>
							<p className="font-medium text-green-dark">
								Regular : IDR 75.000
							</p>
						</div>
					</div>
				</div>
				<div className="absolute w-full h-full bg-gradient-to-b from-green-dark/90 to-green-light/90"></div>
				<div className="absolute z-10 w-full h-full pt-52 pb-20 p-10 lg:p-36 flex flex-col gap-4 lg:gap-60 items-center justify-center ">
					<div className="flex flex-col lg:flex-row items-center justify-center w-full h-screen gap-20 lg:gap-10 px-4 lg:px-20">
						<div className="flex-1 text-white leading-7" data-aos="fade-right">
							<h4 className="font-bold py-4">Terms and Conditions</h4>
							Participants who are currently pursuing an accounting
							undergraduate degree outside of Universitas Gadjah Mada.
							<ol className="pl-5 list-decimal list-outside">
								<li>
									Participants have to form a team consisting of three (3)
									members.
								</li>
								<li>One person is only allowed to participate in one team.</li>
								<li>
									Participants must participate in all NAO’s series of events.
								</li>
							</ol>
						</div>
						<div
							className="flex-1 flex flex-col items-center justify-center gap-10"
							data-aos="fade-left"
							data-aos-delay="500"
						>
							<h1 className="font-chromate text-center text-c-yellow outlineText">
								Booklet & Guideline
							</h1>
							{/* <div className="text-white text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent consequat vel ligula ac maximus. Aliquam quis erat
								quam. Mauris vel hendrerit elit.
							</div> */}
							<a
								href="https://drive.google.com/file/d/1L76jWsibp7fQsauDuHJ5lABh6scIZotX/view?usp=drivesdk"
								target="_blank"
								rel="noreferrer"
							>
								<button className="w-fit px-4 py-2 bg-transparent border-2 border-c-yellow rounded-full text-c-yellow font-medium hover:!bg-c-yellow hover:text-green-dark cursor-pointer">
									Download
								</button>
							</a>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center gap-10 w-screen h-screen">
						<div
							className="absolute top-1/2 md:top-0 -translate-y-1/4 md:translate-y-0 w-full h-screen lg:h-full bg-register-mobile sm:bg-register bg-no-repeat bg-contain"
							data-aos="zoom-out"
						></div>
						<div
							className="p-4 h-[60vmin] lg:h-[50vmin] w-[60vmin] lg:w-[50vmin] flex items-center justify-center glassmo rounded-full text-c-yellow outline-gradient cursor-pointer hover:bg-white/20 transition-all hover:scale-110"
							data-aos="zoom-in"
						>
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfqNe4Xj2pRO0gA_yngVBUeCzLg9Ntk9H2KGJFFcxWhUZ0vyA/viewform?usp=sf_link*"
								target="_blank"
								rel="noreferrer"
							>
								<h1 className="font-chromate text-center outlineText">
									Register Now!
								</h1>
							</a>
						</div>
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}

export default Nao;
