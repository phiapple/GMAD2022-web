import React from 'react'

const ContactUs = () => {
  return (
    <>
			<section className=" h-[520]  ">
				<div className=" h-3xl md:h-[520] items-center justify-center mx-auto block md:max-w-screen contactUs-bg">
					<div className=" block text-center items-center mx-auto">
						<div className=" mx-auto items-center ">
              <div className="mx-auto contactUsBox-bgImg min-h-[520]  rounded-3xl bg-cover">
							<div className=" mx-auto py-8 rounded-3xl  h-[520] contactUsBox-bg bg-cover">
								<h1 className="max-w-xl md:max-w-3xl text-4xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl font-chromate pt-8 outlineText mx-auto">
									Contact Us
								</h1>
                <div className="">
                  <div className="block md:inline-block py-16 mx-6 ">
                    <h2 className="text-3xl md:text-4xl font-bold pb-6 text-green-dark">
                      Sponsorship
                    </h2>
                    <div className="sm:mx-24 md:mx-48 py-2 my-4 px-6 rounded-full bg-green-dark">
                      <h2 className="text-white text-3xl md:text-4xl font-bold ">
                        089943568795
                      </h2>
                    </div>
                    <h2 className="text-green-dark text-3xl md:text-4xl font-bold pt-0">Ines</h2>
                  </div>
                  <div className="block md:inline-block py-16 mx-6 ">
                    <h2 className="text-3xl md:text-4xl font-bold pb-6 text-green-dark">
                      Media Partnership
                    </h2>
                    <div className="sm:mx-24 md:mx-48 py-2 my-4 px-6 rounded-full   bg-green-dark">
                      <h2 className="text-white text-3xl md:text-4xl font-bold ">
                        089943568795
                      </h2>
                    </div>
                    <h2 className="text-green-dark text-3xl md:text-4xl font-bold pt-0">Anggi</h2>
                  </div>
                  </div>
							</div>
              </div>
						</div>
					</div>
				</div>
			</section>

      <section className="h-[766] pastPartner-bgImg bg-cover ">
      <div className=" h-3xl md:h-[766] items-center justify-center mx-auto block md:max-w-screen pastPartner-bg">
					<div className=" block text-center items-center mx-auto">
						<div className=" mx-auto items-center ">
              <div className="mx-auto  min-h-[766] max-w-10/12 rounded-3xl bg-cover">
							<div className=" mx-auto py-8 rounded-3xl max-w-10/12 h-[520] ">
								<h1 className="max-w-xl md:max-w-3xl text-4xl sm:text-5xl capitalize tracking-widest text-c-yellow lg:text-7xl font-chromate pt-8 outlineText mx-auto">
									Our Past Partner
								</h1>
                <div className="">
                  <div className="block md:inline-block py-16 pb-80 px-0 md:px-36 mx-24 h-[618]  ">
                    <h2 className="text-3xl md:text-4xl font-bold pb-6 text-white md:mx-24">
                      Sponsor
                    </h2>
                    
                    {/* <div className="sm:mx-24 md:mx-48 py-2 my-4 px-6 rounded-full bg-green-dark"> */}
                      {/* <h2 className="text-white text-4xl font-bold ">
                        089943568795
                      </h2> */}
                    {/* </div> */}
                    {/* <h2 className="text-green-dark text-4xl font-bold pt-4">Ines</h2> */}
                  </div>
                  <div className="block md:inline-block py-16 pb-80 md:px-36 mx-24 h-[618]  ">
                    <h2 className="text-3xl md:text-4xl font-bold pb-6 text-white">
                      Media Partnership
                    </h2>
                    {/* <div className="sm:mx-24 md:mx-48 py-2 my-4 px-6 rounded-full   bg-green-dark"> */}
                      {/* <h2 className="text-white text-4xl font-bold ">
                        089943568795
                      </h2> */}
                    {/* </div> */}
                    {/* <h2 className="text-green-dark text-4xl font-bold pt-4">Anggi</h2> */}
                  </div>
                  </div>
							</div>
              </div>
						</div>
					</div>
				</div>
      </section>
		</>
  )
}

export default ContactUs