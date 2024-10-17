'use client'

import SignInUserButton from '@/sections/components/SignInUserButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="SHOWME your style Logo"
            width={117}
            height={50}
          />
        </div>
        <nav
          className="hidden md:flex flex-auto justify-center items-center
        "
        >
          <ul className="flex space-x-6 text-base font-medium text-gray-600 ">
            <li>
              <a href="#hero" className="hover:text-background">
                Home
              </a>
            </li>
            <li>
              <a href="#stylize_you" className="hover:text-background">
                Stylize you
              </a>
            </li>
            <li>
              <a href="#showcase" className="hover:text-background">
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
