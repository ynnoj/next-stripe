import Stripe from 'stripe'

export default async function retrieveCustomer(req, res, options) {
  try {
    const stripe = new Stripe(options.secret_key)

    const customer = await stripe.customers.retrieve(req.body.id)

    res.status(200).json(customer)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
