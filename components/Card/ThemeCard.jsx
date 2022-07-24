import React from 'react'

const ThemeCard = () => {
  return (
    <div className="inline-flex px-2 justify-center mx-4 pt-10">
      <div className="relative max-w-sm mx-auto md:max-w-md mt-6 min-w-0 break-words bg-green-light w-full mb-6 shadow-lg rounded-xl profile-card">
        <div className="px-6 py-10">
          <div className="flex flex-wrap justify-center pb-10">
            <div className="rounded bg-yellow w-[378]">
                <h1 className="mx-8">Webinar</h1>
                
            </div>
          </div>
          <div className="text-center transform  mx-2">
            <div className="text-lg text-yellow font-bold leading-normal ">
              Hasan Chamdany Mc.D, Kf.C
            </div>
            <div className="text-lg  text-white font-bold ">
              
              Software Engineer at <br></br> Phiapple Indonesia
            </div>
          </div>
          {/* <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  An artist of considerable range, Mike is the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                  and records all of his own music, giving it a warm.
                </p>
                <a
                  href="javascript:;"
                  className="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      </div>
  )
}

export default ThemeCard