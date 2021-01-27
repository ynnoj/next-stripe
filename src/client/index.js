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

async function createPaymentIntent(body) {
  const res = await fetch(`/api/stripe/create/payment-intent`, {
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

async function updatePaymentIntent(id, body) {
  const res = await fetch(`/api/stripe/update/payment-intent`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, body })
  })

  if (!res.ok) {
    const error = new Error('An error occurred while performing this request.')

    error.info = await res.json()
    error.status = res.status

    throw error
  }

  return res.json()
}

export default {
  createCheckoutSession,
  createPaymentIntent,
  updatePaymentIntent
}
