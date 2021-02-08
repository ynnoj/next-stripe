import Stripe from 'stripe'

export default async function retrievePaymentIntent(req, res, options) {
  try {
    const stripe = new Stripe(options.stripe_key)

    const paymentIntent = await stripe.paymentIntents.retrieve(req.body.id)

    res.status(200).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
