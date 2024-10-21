'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
}

const AnimatedItem: React.FC<Props> = ({ children, delay = 0 }) => {
  const controls = useAnimation() // Animation control hook
  const randomX = Math.random() * 100 // Random X position (0-100%)
  const randomY = Math.random() * 100 // Random Y position (0-100%)
  const randomDuration = 20 + Math.random() * 40 // Random duration (20-60s)

  useEffect(() => {
    controls.start({
      x: randomX,
      y: randomY,
      transition: {
        duration: randomDuration,
      },
    })
  }, [])

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    // Get the bounding rectangle to determine current position
    const rect = event.currentTarget.getBoundingClientRect()
    console.log(rect)
    // Set initial position based on current x and y

    // Trigger the movement relative to the current position
    controls.start({
      x: rect.x + (Math.random() > 0.5 ? 40 : -40), // Move 200px from current x
      y: rect.y + (Math.random() > 0.5 ? 40 : -40), // Move 200px from current y
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        duration: 0.5,
      },
    })
  }

  const handleMouseLeave = () => {
    // Reset to the initial position when the mouse leaves
    controls.start({
      x: randomX,
      y: randomY,
      transition: {
        duration: randomDuration,
      },
    })
  }

  return (
    <motion.div
      className={`z-[1000]`}
      style={{
        position: 'absolute',
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={controls}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: delay,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedItem
