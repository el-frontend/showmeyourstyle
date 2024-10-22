'use client'

import SignInUserButton from '@/sections/components/SignInUserButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo_white.svg"
            alt="SHOWME your style Logo"
            width={130}
            height={50}
          />
        </div>
        <nav
          className="hidden md:flex flex-auto justify-center items-center
        "
        >
          <ul className="flex space-x-6 text-base font-semibold text-white ">
            <li>
              <a href="#hero" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#stylize_you" className="hover:text-gray-200">
                Stylize you
              </a>
            </li>
            <li>
              <a href="#showcase" className="hover:text-gray-200">
                Showcase
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex-0">
          <SignInUserButton />
        </div>
      </div>
    </header>
  )
}

export default Header
