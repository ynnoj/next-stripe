async function fetcher({ body, method = 'GET', url }) {
  const res = await fetch(url, {
    method,
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ...(body && { body: JSON.stringify(body) })
  })

  if (!res.ok) {
    const error = new Error('An error occurred while performing this request.')

    error.info = await res.json()
    error.status = res.status

    throw error
  }

  return res.json()
}

export default fetcher
