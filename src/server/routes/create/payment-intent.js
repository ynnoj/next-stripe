import Stripe from 'stripe'

export default async function createPaymentIntent(req, res, options) {
  try {
    const stripe = new Stripe(options.secret_key)

    const paymentIntent = await stripe.paymentIntents.create(req.body)

    res.status(201).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
