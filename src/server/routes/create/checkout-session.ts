import Stripe from 'stripe'
import { INextRequest, INextResponse, IOptions } from '../../../types/types'

export default async function createCheckoutSession(
  req: INextRequest,
  res: INextResponse,
  options: IOptions
): Promise<void> {
  try {
    const stripe = new Stripe(options.stripe_key, { apiVersion: '2020-08-27' }) // PROVIDE DYNAMIC OBJECT FROM USER

    const session = await stripe.checkout.sessions.create(req.body)

    res.status(201).json(session)
  } catch ({ statusCode, raw: { message } }) {
    res.status(statusCode).json({ message, status: statusCode })
  }
}
