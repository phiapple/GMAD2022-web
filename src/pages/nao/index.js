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
		date: '07 - 31',
		month: 'August',
		eventName: 'Early Bird Registration',
		imgSrc: '/images/timeline/1.jpg',
		link: ''
	},
	{
		date: '01 - 28',
		month: 'September',
		eventName: 'Regular Registration',
		imgSrc: '/images/timeline/2.jpg',
		link: ''
	},
	{
		date: '01',
		month: 'October',
		eventName: 'Online Preliminary',
		imgSrc: '/images/timeline/3.jpg',
		link: ''
	},
	{
		date: '03',
		month: 'October',
		eventName: 'Top 25 Announcement',
		imgSrc: '/images/timeline/4.jpg',
		link: ''
	},
	{
		date: '04 - 13',
		month: 'October',
		eventName: 'Main Event Registration',
		imgSrc: '/images/timeline/5.jpg',
		link: ''
	},
	{
		date: '14',
		month: 'October',
		eventName: 'Technical Meeting Quarter dan Semifinal',
		imgSrc: '/images/timeline/6.jpg',
		link: ''
	},
	{
		date: '15 - 16',
		month: 'October',
		eventName: 'Main Event : Quarter dan Semifinal	',
		imgSrc: '/images/timeline/7.jpg',
		link: ''
	},
	{
		date: '21',
		month: 'October',
		eventName: 'Technical Meeting Final',
		imgSrc: '/images/timeline/8.jpg',
		link: ''
	},
	{
		date: '22',
		month: 'October',
		eventName: 'Main Event : Final',
		imgSrc: '/images/timeline/9.jpg',
		link: ''
	},
	{
		date: '29',
		month: 'October',
		eventName: 'Awarding Day',
		imgSrc: '/images/timeline/10.jpg',
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
		<DefaultLayout title="NAO - GMAD 2022">
			<div className="relative h-screen w-full flex items-center justify-center bg-nao1 ">
				<div className="absolute w-full h-full bg-green-dark/90"></div>
				<div className="absolute w-full h-full z-10 flex items-center justify-center">
					<div className="text-center w-[75vw] lg:w-[60vw]">
						<div
							className="relative w-full h-[200px] max-w-[500px] lg:h-[320px] mx-auto -mt-20"
							data-aos="fade-up"
						>
							<Image
								src="/images/homepage/event-nao.png"
								alt="NAO"
								layout="fill"
								objectFit="contain"
								objectPosition="center"
							/>
						</div>
						<h1
							className="py-4 font-chromate text-c-yellow outlineText -mt-8"
							data-aos="fade-up"
							data-aos-delay="1000"
						>
							National Accounting Olympiad (NAO)
						</h1>
						<div
							className="text-white font-medium"
							data-aos="fade-up"
							data-aos-delay="1500"
						>
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
									<div className="h-[45vh] lg:h-[55vh] w-[40vw] lg:w-[17.5vw] p-4 pt-8 flex flex-col gap-4 rounded-2xl break-words profile-card outline-gradient">
										<h2 className="font-bold leading-1 text-c-yellow text-shadow">
											{val.date}
										</h2>
										<p className="font-bold leading-1 text-c-yellow text-shadow">
											{val.month}
										</p>
										<p className="flex-grow font-bold text-white text-shadow">
											{val.eventName}
										</p>
										<div className="relative h-[40%] w-full rounded-lg">
											<Image
												className="rounded-lg"
												src={val.imgSrc ?? '/images/bg/placeholder.png'}
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
				<div className="absolute z-20 -translate-y-1/2 w-full flex justify-center">
					<div
						className="w-3/4 h-full px-6 py-2 lg:py-6 bg-c-yellow rounded-2xl flex flex-col lg:flex-row"
						data-aos="fade-up"
					>
						<div className="flex-1 py-4 lg:py-0 px-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-green-dark">
							<h4 className="font-bold text-shadow-b">Total Prize</h4>
							<h3 className="font-bold text-green-light text-shadow-b">
								IDR 17.000.000
							</h3>
						</div>
						<div className="flex-1 py-4 lg:py-0 px-10 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-l border-green-dark">
							<p className="font-medium">Registration fee</p>
							<p className="font-medium text-green-dark">
								Early Bird : IDR 30.000
							</p>
							<p className="font-medium text-green-dark">
								Regular : IDR 60.000
							</p>
						</div>
					</div>
				</div>
				<div className="absolute w-full h-full bg-gradient-to-b from-green-dark/90 to-green-light/90"></div>
				<div className="absolute z-10 w-full h-full pt-52 pb-20 p-10 lg:p-36 flex flex-col gap-4 lg:gap-60 items-center justify-center ">
					<div className="flex flex-col lg:flex-row items-center justify-center w-full h-screen gap-20 lg:gap-10 px-4 lg:px-20">
						<div className="flex-1 text-white leading-7" data-aos="fade-right">
							<h4 className="font-bold py-4">Terms and Conditions</h4>

							<ol className="pl-5 list-decimal list-outside">
								<li>
									Participants who are currently pursuing an accounting
									undergraduate degree outside of Universitas Gadjah Mada.
								</li>
								<li>
									Participants have to form a team consisting of three (3)
									members.
								</li>
								<li>One person is only allowed to participate in one team.</li>
								<li>
									Participants must participate in all NAO’s series of events.
								</li>
							</ol>

							<div className="mt-4">
								<div className="font-bold text-base">Contact Person</div>
								<div className="flex">
									<div className="mt-2 flex-1 border-r border-white">
										<p className="text-base">Teky Lisdawati</p>
										<p className="text-sm">
											LINE: <span className="font-bold">@tekyy_</span>
										</p>
										<p className="text-sm">
											WhatsApp:{' '}
											<a
												className="font-bold hover:underline"
												href="https://wa.me/085212303723"
												target="_blank"
												rel="noreferrer"
											>
												085212303723
											</a>
										</p>
									</div>
									<div className="pl-4 pt-2 flex-1 border-white">
										<p className="text-base">Naila Fatina</p>
										<p className="text-sm">
											LINE: <span className="font-bold">nailafatina</span>
										</p>
										<p className="text-sm">
											WhatsApp:{' '}
											<a
												className="font-bold hover:underline"
												href="https://wa.me/081288728811"
												target="_blank"
												rel="noreferrer"
											>
												081288728811
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="flex-1 flex flex-col items-center justify-center gap-10"
							data-aos="fade-left"
							data-aos-delay="500"
						>
							<h1 className="font-chromate text-center text-c-yellow outlineText">
								Booklet
							</h1>
							{/* <div className="text-white text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent consequat vel ligula ac maximus. Aliquam quis erat
								quam. Mauris vel hendrerit elit.
							</div> */}
							<a
								href="https://drive.google.com/file/u/6/d/14_ohWWbA7bxQIRAaLt4p60PekGlQKgU6/view?usp=sharing"
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
						<a
							className="p-4 h-[60vmin] lg:h-[50vmin] w-[60vmin] lg:w-[50vmin] flex items-center justify-center glassmo rounded-full text-c-yellow outline-gradient cursor-pointer hover:bg-white/20 transition-all hover:scale-110"
							data-aos="zoom-in"
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
		</DefaultLayout>
	);
}

export default Nao;
