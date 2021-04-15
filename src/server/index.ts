import { INextRequest, INextResponse, IOptions } from '../types/types'
import * as routes from './routes'

export async function NextStripeHandler(
  req: INextRequest,
  res: INextResponse,
  options: IOptions
) {
  if (!req.query.nextstripe)
    return res
      .status(500)
      .end(`Error: Cannot find [...nextstripe].js in pages/api/stripe`)

  const [method, type] = req.query.nextstripe

  if (method === 'confirm') {
    switch (type) {
      case 'payment-intent':
        return routes.confirmPaymentIntent(req, res, options)
    }
  } else if (method === 'create') {
    switch (type) {
      case 'billing-portal-session':
        return routes.createBillingPortalSession(req, res, options)
      case 'checkout-session':
        return routes.createCheckoutSession(req, res, options)
      case 'payment-intent':
        return routes.createPaymentIntent(req, res, options)
    }
  } else if (method === 'retrieve') {
    switch (type) {
      case 'payment-intent':
        return routes.retrievePaymentIntent(req, res, options)
    }
  } else if (method === 'update') {
    switch (type) {
      case 'payment-intent':
        return routes.updatePaymentIntent(req, res, options)
    }
  }
}
