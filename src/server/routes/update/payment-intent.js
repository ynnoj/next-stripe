import Stripe from 'stripe'

export default async function updatePaymentIntent(req, res, options) {
  try {
    const stripe = new Stripe(options.stripe_key)

    const { id, body } = req.body

    const paymentIntent = await stripe.paymentIntents.update(id, body)

    res.status(200).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
