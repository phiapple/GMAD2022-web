import React, { useState, useEffect } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Image from "next/image";
import Logo from "../../assets/logo/GMADoren.png";
import Register from "../../pages/register";
import nao from "../../pages/nao";
import atalks from "../../pages/Atalks";

const navigation = [
  { name: "Home", href: "../../pages/index.js", current: true },
  { name: "Events", href: "#", current: false },
  { name: "Registration", href: "../../pages/_register.js", current: false },
  { name: "ContactUs", href: "../../pages/_contactUs.js", current: false },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  // const [actived, setActived] = useState('text-gray-700')

  // useEffect(() =>setActived('bg-gray-100 text-gray-900'), [])
  return (
    <div>
      {/* container */}
      <nav className="shadow-sm fixed w-full z-10 p-0 mx-auto block">
        <div className="w-full p-0 mx-auto bg-green-dark">
          <div className="flex item-center h-center w-full">
            <div className="flex items items-center mx-20 justify-between w-full font-gogh">
              <div className="flex justify-center items-center flex-shrink-0 w-[196] h-[78]">
                <Image src={Logo} alt="GMAD2022" width={196} height={70} />
              </div>
              <div className="hidden md:block">
                <div className=" ml-10 flex items-baseline space-x-4 origin-top-right">
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="cursor-pointer text-white font-medium px-3 py-2 text-md hover:bg-green-light rounded"
                  >
                    Home
                  </button>

                  <Menu
                    as="div"
                    className="relative inline-block text-left cursor-pointer text-white font-medium px-3 py-2 text-md hover:bg-green-light rounded"
                  >
                    <Menu.Button classname="inline-flex w-full justify-center rounded-md">
                      Events <span><ChevronDownIcon
                        className=" inline ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      /></span>
                      
                      
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-yellow divide-y divide-gray-100 focus:outline-none">
                        <div className="">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                // href="/nao"
                                type="button"
                                onClick={() => router.push("/nao")}
                                className={classNames(
                                  active
                                    ? "bg-green-dark text-yellow"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm w-full"
                                )}
                              >
                                NAO
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                // href="/Atalks"
                                type="button"
                                onClick={() => router.push("/Atalks")}
                                className={classNames(
                                  active
                                    ? "bg-green-dark text-yellow"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm w-full"
                                )}
                              >
                                A Talk
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    onClick={() => router.push("/register")}
                    className="cursor-pointer text-white font-medium px-3 py-2 text-md hover:bg-green-light rounded"
                  >
                    Registration
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push("/contactUs")}
                    className="cursor-pointer text-white font-medium px-3 py-2 text-md hover:bg-green-light rounded"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-green-dark inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-light focus: outline-none focus:ring-offset-2 focus:ring-offset-green-dark focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open Main Menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                ref={ref}
              >
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="cursor-pointer hover:bg-green-dark hover:text-white text-green-dark block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </button>
                <Menu
                  as="div"
                  className="relative text-left cursor-pointer hover:bg-green-dark hover:text-white text-green-dark block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Menu.Button>Events <span><ChevronDownIcon
                        className=" inline ml-2 -mr-1 h-5 w-5 text-green-dark hover:text-violet-100"
                        aria-hidden="true"
                      /></span></Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-left relative left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none hover:bg-green-light">
                      <div className="">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              // href="/nao"
                              type="button"
                              onClick={() => router.push("/nao")}
                              className={classNames(
                                active
                                  ? "bg-green-light text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm text-green-dark w-full"
                              )}
                            >
                              NAO
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              // href="/Atalks"
                              type="button"
                              onClick={() => router.push("/Atalks")}
                              className={classNames(
                                active
                                  ? "bg-green-light text-white"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm w-full"
                              )}
                            >
                              A Talk
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  onClick={() => router.push("/register")}
                  className="cursor-pointer hover:bg-green-dark hover:text-white text-green-dark block px-3 py-2 rounded-md text-base font-medium"
                >
                  Registration
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/contactUs")}
                  // href="../../pages/_contactUs.js"
                  className="cursor-pointer hover:bg-green-dark hover:text-white text-green-dark block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
