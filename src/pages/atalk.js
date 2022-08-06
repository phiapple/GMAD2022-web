import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import ProfileCard from '../components/Card/ProfileCard';
import ThemeCard from '../components/Card/ThemeCard';
import ComingSoon from '../components/Section/ComingSoon';
import DefaultLayout from 'components/DefaultLayout/DefaultLayout';

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
			<ComingSoon />
			{/* end section coming soon */}

			{/* section subtheme */}
			{/* <section className="h-screen atalks-bgImg-2">
          <div className="atalks-bg-2 h-full">
          <div className="  h-full items-center justify-center mx-auto block md:max-w-screen ">
          <div className=" block text-center items-center mx-10 md:mx-80">


            <div className=" pt-8 md:pt-28 pb-8 md:pb-10  test-2">
              <h1 className="max-w-3xl text-3xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate leading-relaxed outlineText mx-auto">
                Subtheme
              </h1>
            </div>

            <div className="container">
                <ThemeCard title={theme1.title} ytext={theme1.ytext} wtext={theme1.wtext}/>
                <ThemeCard title={theme2.title} ytext={theme2.ytext} wtext={theme2.wtext}/>
            </div>
            
          </div>
        </div>
          </div>
        </section> */}
			{/* end section subtheme */}

			{/* <div className=" flex justify-center ">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div> */}
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
