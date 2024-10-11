import { useEffect, useState } from 'react'

export const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState({
    isLg: false,
    isMd: false,
    isSm: false,
  })

  useEffect(() => {
    const handleResize = () => {
      setBreakpoints({
        isLg: window.innerWidth >= 1024,
        isMd: window.innerWidth >= 768,
        isSm: window.innerWidth < 768,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoints
}
