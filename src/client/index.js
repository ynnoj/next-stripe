async function createCheckoutSession(body) {
  const res = await fetch(`/api/stripe/create/checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const error = new Error('An error occurred while performing this request.')

    error.info = await res.json()
    error.status = res.status

    throw error
  }

  return res.json()
}

export default { createCheckoutSession }
