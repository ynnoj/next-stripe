import Stripe from 'stripe'
import { INextRequest, INextResponse, IOptions } from '../../../types/types'

export default async function createBillingPortalSession(
  req: INextRequest,
  res: INextResponse,
  options: IOptions
) {
  try {
    const stripe = new Stripe(options.stripe_key, { apiVersion: '2020-08-27' }) // PROVIDE DYNAMIC OBJECT FROM USER

    const session = await stripe.billingPortal.sessions.create(req.body)

    res.status(201).json(session)
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError)
      return res
        .status(error.statusCode!)
        .json({ message: error.statusCode, status: error.statusCode })

    res
      .status(500)
      .json({ message: 'There was a problem with your request', status: 500 })
  }
}
