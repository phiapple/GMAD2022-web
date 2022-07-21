import React from 'react'
// import {Transition} from '@headlessui/react'
import {Link} from 'react-scroll'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

const navigation = [
    { name: 'Homed', href: '#', current: true },
    { name: 'Events', href: '#', current: false },
    { name: 'Registration', href: '#', current: false },
    { name: 'ContactUs', href: '#', current: false },
  ]

function Navbar() {
  return (
    <div>
        {/* container */}
        <nav className="shadow-sm fixed w-ful z-10">
            <div className="w-full">
                <div className="flex item-center h-20 w-full">
                    <div className="flex items items-center mx-20 justify-between w-full">
                        <div className="flex justify-center items-center flex-shrink-0">
                            <h1 className="font-bold text-xl cursor-pointer">
                                GMAD <span className="text-orange-500">2022</span>
                            </h1>
                        </div>
                    </div>
                        
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar