import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useCreateQueryString = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const addSearchParams = (queries: { name: string; value: string }[]) => {
    const params = new URLSearchParams(searchParams)
    queries.forEach(query => {
      if (query.value === '') {
        params.delete(query.name)
        return
      } else {
        params.set(query.name, query.value)
      }
    })
    return params.toString()
  }

  const createQueryAndNavigate = (
    queries: { name: string; value: string }[],
    options?: { scroll?: boolean }
  ) => {
    const newSearchParams = addSearchParams(queries)
    replace(`${pathname}?${newSearchParams}`, options)
  }

  return { addSearchParams, createQueryAndNavigate }
}

export default useCreateQueryString
