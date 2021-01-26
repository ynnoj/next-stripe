import Stripe from 'stripe'

export default async function createCheckoutSession(req, res, options) {
  try {
    const stripe = new Stripe(options.secret_key)

    const session = await stripe.checkout.sessions.create(req.body)

    res.status(201).json(session)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
