import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useCreateQueryString = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const addSearchParams = (queries: { name: string; value: string }[]) => {
    const params = new URLSearchParams(searchParams)
    queries.forEach(query => {
      params.set(query.name, query.value)
    })
    return params.toString()
  }

  const createQueryAndNavigate = (
    queries: { name: string; value: string }[]
  ) => {
    const newSearchParams = addSearchParams(queries)
    replace(`${pathname}?${newSearchParams}`)
  }

  return { addSearchParams, createQueryAndNavigate }
}

export default useCreateQueryString
