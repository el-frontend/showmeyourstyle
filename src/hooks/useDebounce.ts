import { useCallback, useEffect, useRef } from 'react'

const useDebounce = (func: (...args: unknown[]) => void, wait: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFunction = useCallback(
    (...args: unknown[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        func(...args)
      }, wait)
    },
    [func, wait]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [wait])

  return debouncedFunction
}

export default useDebounce
