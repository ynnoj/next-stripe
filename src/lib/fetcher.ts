import { Obj } from '../types/types'

interface IFetcher {
  body: any
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  url: string
}

interface CustomError extends Error {
  info: Obj
  status: number
}

async function fetcher<T>(props: IFetcher): Promise<T> {
  const { body, method, url } = props

  const res = await fetch(url, {
    method,
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ...(body && { body: JSON.stringify(body) })
  })

  if (!res.ok) {
    const error = new Error(
      'An error occurred while performing this request.'
    ) as CustomError

    error.info = await res.json()
    error.status = res.status

    throw error
  }

  return res.json()
}

export default fetcher
