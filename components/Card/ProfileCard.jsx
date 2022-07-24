import React from "react";
import Foto from "../../assets/img/test.jpeg";
import Image from "next/image";

function ProfileCard() {
  return (
    <>
    <div className="inline-flex px-2 justify-center mx-4 pt-10">
      <div className="relative max-w-sm mx-auto md:max-w-md mt-6 min-w-0 break-words bg-green-light w-full mb-6 shadow-lg rounded-xl profile-card">
        <div className="px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative transform -translate-y-20">
                <Image
                  src={Foto}
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[100px]"
                  width="150"
                  height="150"
                  layout="fixed"
                  alt="profile"
                />
              </div>
            </div>
            {/* <div className="w-full text-center ">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    3,360
                  </span>
                  <span className="text-sm text-slate-400">Photos</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    2,454
                  </span>
                  <span className="text-sm text-slate-400">Followers</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    564
                  </span>
                  <span className="text-sm text-slate-400">Following</span>
                </div>
              </div>
            </div> */}
          </div>
          <div className="text-center transform -translate-y-14 mx-2">
            <h3 className="text-2xl text-yellow font-bold leading-normal mb-1">
              Hasan Chamdany Mc.D, Kf.C
            </h3>
            <div className="text-lg mt-0  text-white font-bold ">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
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
    </>
  );
}

export default ProfileCard;
