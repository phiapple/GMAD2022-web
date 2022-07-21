import React from "react";
// import {Transition} from '@headlessui/react'
import { Link } from "react-scroll";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Image from "next/image";
import Logo from "../../assets/logo/GMADoren.png";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Events", href: "#", current: false },
  { name: "Registration", href: "#", current: false },
  { name: "ContactUs", href: "#", current: false },
];

function Navbar() {
  return (
    <div>
      {/* container */}
      <nav className="shadow-sm fixed w-full z-10 p-0 mx-auto">
        <div className="w-full p-0 mx-auto bg-green-dark">
          <div className="flex item-center h-center w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                
                  <Image
                    // loader={myLoader}
                    src={Logo}
                    alt="GMAD2022"
                    width={256}
                    height={91}
                  />
                
              </div>
              <div className="hidden md:block">
                  <div className=" ml-10 flex items-baseline space-x-4 origin-top-right">
                    <Link
                      activeClass="Home"
                      to="home"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Home
                    </Link>
                    <Link
                      activeClass="Events"
                      to="Events"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Events
                    </Link>
                    <Link
                      activeClass="Registration"
                      to="Registration"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Registration
                    </Link>
                    <Link
                      activeClass="ContacUs"
                      to="ContacUs"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer text-white font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
