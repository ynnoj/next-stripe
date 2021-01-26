import * as routes from './routes'

async function NextStripeHandler(req, res, options) {
  if (!req.query.nextstripe)
    return res
      .status(500)
      .end(`Error: Cannot find [...nextstripe].js in pages/api/stripe`)

  const [method, type] = req.query.nextstripe

  if (method === 'create') {
    switch (type) {
      case 'checkout-session':
        return routes.createCheckoutSession(req, res, options)
    }
  }
}

function NextStripe(...args) {
  return NextStripeHandler(...args)
}

export default NextStripe
