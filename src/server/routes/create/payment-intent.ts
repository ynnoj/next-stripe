import Stripe from 'stripe'
import { INextRequest, INextResponse, IOptions } from '../../../types/types'

export default async function createPaymentIntent(
  req: INextRequest,
  res: INextResponse,
  options: IOptions
) {
  try {
    const stripe = new Stripe(options.stripe_key, { apiVersion: '2020-08-27' }) // PROVIDE DYNAMIC OBJECT FROM USER

    const paymentIntent = await stripe.paymentIntents.create(req.body)

    res.status(201).json(paymentIntent)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
