import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ProfileCard from '../components/Card/ProfileCard';
import ThemeCard from '../components/Card/ThemeCard';
import ComingSoon from '../components/Section/ComingSoon';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';
import Image from 'next/image';
//swiper slide
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const theme1 = {
	title: 'webinar',
	ytext: "Accountings's Role:",
	wtext: 'Providing Relevant and Timely Information for Corporate Investment'
};

const theme2 = {
	title: 'talkshow',
	ytext: 'Small Business Survival:',
	wtext: 'Maximizing Financial Growth From Accounting Perspective'
};

function Atalks() {
	return (
		<DefaultLayout title="A-Talk - GMAD 2022">
			<div className="relative h-screen w-full flex items-center justify-center atalks-bgImg-1 ">
				<div className="absolute w-full h-full bg-green-dark/90"></div>
				<div className="absolute w-full h-full z-10 flex items-center justify-center">
					<div className="text-center w-[75vw] lg:w-[60vw]">
						<div
							className="relative w-full h-[200px] max-w-[500px] lg:h-[320px] mx-auto -mt-20"
							data-aos="fade-up"
						>
							<Image
								src="/images/homepage/event-atalks.png"
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
							Accounting Talk (A-Talk)
						</h1>
						<div
							className="text-white font-medium"
							data-aos="fade-up"
							data-aos-delay="1500"
						>
							Accounting Talk (A-Talk) is the biggest accounting seminar
							intended for students, business, people, civil servants, and the
							general public. In an era full of uncertainty, A-Talk advances to
							discuss optimization and the application of digitalization to the
							business in the future.
						</div>
					</div>
				</div>
			</div>
			{/* section landing page */}
			{/* <section className="  h-screen atalks-bgImg-1 bg-cover">
				<div className="  h-full items-center justify-center mx-auto block md:max-w-screen  atalks-bg-1">
					<div className=" block text-center items-center mx-10 md:mx-80">
						<div className="pt-60  ">
							<h1 className="max-w-3xl text-4xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto">
								Accounting Talks (A-Talks)
							</h1>
						</div>
						<div className="pt-2 ">
							<p className="text-lg sm:text-2xl text-white font-gogh font-medium">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Praesent consequat vel ligula ac maximus. Aliquam quis erat
								quam. Mauris vel hendrerit elit. Nam sagittis varius ultricies.
								Nam hendrerit eget urna in imperdiet.
							</p>
						</div>
					</div>
				</div>
			</section> */}
			{/* end section landing page */}

			{/* section coming soon */}
			{/* <ComingSoon /> */}
			{/* end section coming soon */}

			{/* section subtheme */}
			<section className="h-screen atalks-bgImg-2">
				<div className="atalks-bg-2 h-full">
					<div className="  h-full items-center justify-center mx-auto block md:max-w-screen ">
						<div className=" block text-center items-center mx-10 lg:mx-80">
							<div className=" pt-8 md:pt-28 pb-8 md:pb-10  test-2">
								<h1
									className="max-w-3xl text-3xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto"
									data-aos="fade-up"
								>
									Subtheme
								</h1>
							</div>

							<div className="pb-12">
								<ThemeCard
									title={theme1.title}
									ytext={theme1.ytext}
									wtext={theme1.wtext}
									anime="fade-right"
								/>
								<ThemeCard
									title={theme2.title}
									ytext={theme2.ytext}
									wtext={theme2.wtext}
									anime="fade-left"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end section subtheme */}
			<section className="h-[1878px] speaker-bgImg ">
				<div className="h-full speaker-bg text-center items-center">
					<div className=" pt-8 md:pt-28 pb-8 md:pb-10  test-2">
						<h1
							className="max-w-3xl text-3xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto"
							data-aos="fade-up"
						>
							Our Speaker
						</h1>
					</div>

					<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
						<SwiperSlide>
							<h3
								className="text-center text-white font-Gogh font-medium text-xl md:text-3xl "
								data-aos="fade-up"
							>
								WEBINAR ACCOUNTING TALK
							</h3>
							<div className=" lg:flex justify-center pt-10">
								<ProfileCard
									anime="zoom-out"
									photo="/images/photo/card.png"
									name="COMING SOON"
									title="---------------------------------"
								/>
								<ProfileCard
								anime="zoom-out"
									photo="/images/photo/card.png"
									name="COMING SOON"
									title="---------------------------------"
								/>
							</div>
							<div className=" pt-8 md:pt-28 pb-8 md:pb-10  test-2">
								<h1
									className="max-w-3xl text-3xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto"
									data-aos="fade-up"
								>
									Moderator
								</h1>
							</div>
							<div className=" lg:flex justify-center pt-10">
								<ProfileCard
								anime="zoom-out"
									photo="/images/photo/card.png"
									name="Moderator"
									title="-------------------------------------------------"
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<h3
								className="text-center text-white font-Gogh font-medium text-xl md:text-3xl "
								data-aos="fade-up"
							>
								TALKSHOW ACCOUNTING TALK
							</h3>
							<div className=" lg:flex justify-center pt-10">
								<ProfileCard
								anime="zoom-out"
									photo="/images/photo/card.png"
									name="COMING SOON"
									title="----------------------------"
								/>
								<ProfileCard
								anime="zoom-out"
									photo="/images/photo/card.png"
									name="COMING SOON"
									title="----------------------------"
								/>
							</div>
							<div className=" pt-8 md:pt-28 pb-8 md:pb-10  test-2">
								<h1
									className="max-w-3xl text-3xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto"
									data-aos="fade-up"
								>
									Moderator
								</h1>
							</div>
							<div className=" lg:flex justify-center pt-10">
								<ProfileCard
								anime="zoom-out"
									photo="/images/photo/card.png"
									name="Moderator"
									title="-------------------------------------------------"
								/>
							</div>
						</SwiperSlide>
					</Swiper>

					{/* <div className=" lg:flex justify-center ">
						<ProfileCard
							name="Hasan Chamdany Mc.D, Kf.C"
							title="Software Engineer at Phiapple Indonesia"
						/>
						<ProfileCard
							name="Hasan Chamdany Mc.D, Kf.C"
							title="backend Engineer at Phiapple Indonesia"
						/>
					</div> */}
				</div>
			</section>
			{/* end of speaker seciton */}

			{/* register seciton */}
			<div className="relative flex flex-col items-center justify-center gap-10 w-screen h-screen register-bg">
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
			{/* end of register seciton */}
			{/* <div className="relative py-20 flex flex-col items-center justify-center gap-10 w-full bg-gradient-to-b from-green-dark to-green-light">
				<div className="absolute w-full h-full bg-register bg-no-repeat bg-contain"></div>
				<div className="p-4 h-[35vw] w-[35vw] flex items-center justify-center glassmo rounded-full text-c-yellow outline-gradient">
					<h1 className="font-chromate text-center outlineText">
						Register Now!
					</h1>
				</div>
			</div> */}
		</DefaultLayout>
	);
}

Atalks.getInitialProps = async ctx => {
	return {};
};

export default Atalks;
