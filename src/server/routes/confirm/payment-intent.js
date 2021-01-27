import Stripe from 'stripe'

export default async function confirmPaymentIntent(req, res, options) {
  try {
    const stripe = new Stripe(options.secret_key)

    const { id, body } = req.body

    const paymentIntent = await stripe.paymentIntents.confirm(id, body)

    res.status(201).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
