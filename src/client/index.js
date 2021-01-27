import fetcher from '../lib/fetcher'

async function createCheckoutSession(body) {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/checkout-session`
  })
}

async function createPaymentIntent(body) {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/payment-intent`
  })
}

async function updatePaymentIntent(id, body) {
  return await fetcher({
    body: { id, body },
    method: 'PUT',
    url: `/api/stripe/update/payment-intent`
  })
}

export default {
  createCheckoutSession,
  createPaymentIntent,
  updatePaymentIntent
}
