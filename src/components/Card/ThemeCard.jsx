import React from 'react'

const ThemeCard = ({title,ytext,wtext,anime}) => {
  console.log(title)


  return (
    
    <div className="inline-flex px-2 justify-center lg:mx-8 mx-2  pt-2 md:pt-10 pb-2 md:pb-19" data-aos={anime}>
      <div className="relative max-w-sm mx-auto md:max-w-sm mt-6  min-w-0 break-words  mb-6 pb-6 shadow-lg rounded-xl profile-card">
        <div className="px-6 py-10 ">
          
          <div className="flex flex-wrap justify-center pb-10">
            <div className="rounded-3xl bg-c-yellow w-[378]">
              
                <h1 className="mx-8 font-gogh font-bold uppercase my-2 text-md md:text-2xl text-green-dark">{title}</h1>
                
            </div>
          </div>
          <div className="text-center transform  mx-2 ">
            <div className="text-md md:text-2xl text-c-yellow font-bold leading-normal ">
              {ytext}
            </div>
            <div className="text-md md:text-2xl  text-white font-bold ">
              
              {wtext}
            </div>
          </div>
          
        </div>
      </div>
      </div>
  )
}

export default ThemeCard