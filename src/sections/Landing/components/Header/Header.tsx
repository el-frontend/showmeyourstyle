'use client'

import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

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
        <nav className='hidden md:flex flex-auto justify-center items-center
        '>
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
        <div className='flex-0'>
        <SignedOut>
          <SignInButton>
            <Button className="rounded-full" variant="outline">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="rounded-full text-background px-4 py-2  border-background border  hover:shadow-md"
            >
              Dashboard
            </Link>
            <UserButton />
          </div>
        </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default Header
