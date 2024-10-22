'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Ghost } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-800 flex flex-col items-center justify-center p-4 overflow-hidden relative"
      style={{
        backgroundImage: 'url("/images/404_bg.jpg")',
        backgroundSize: 'cover',
      }}
    >
      {/* Moon */}
      <motion.div
        className="absolute top-8 right-8 md:top-16 md:right-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" fill="#FDB813" />
          <circle cx="65" cy="40" r="10" fill="#FFF1C1" />
          <circle cx="40" cy="60" r="8" fill="#FFF1C1" />
          <circle cx="70" cy="65" r="5" fill="#FFF1C1" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 bg-black/70 p-16 rounded-lg"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-orange-500 mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-orange-400 font-semibold mb-8 text-shadow border-black"
        >
          Oops! The page you&#39;re looking for has vanished into the night.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="z-10"
        >
          <Link href="/" className="mt-4">
            <Button
              variant="outline"
              className="bg-orange-600 mt-4 text-white hover:bg-orange-700 border-orange-400"
            >
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Halloween Icons */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-10 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-orange-500 w-16 h-16 md:w-24 md:h-24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
            fill="currentColor"
          />
          <path
            d="M7 9.5C7 8.67 7.67 8 8.5 8S10 8.67 10 9.5 9.33 11 8.5 11 7 10.33 7 9.5zm7 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"
            fill="#000"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-10 z-10"
      >
        <Ghost className="text-gray-300 w-16 h-16 md:w-24 md:h-24" />
      </motion.div>

      

      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full w-1 h-1"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  )
}
