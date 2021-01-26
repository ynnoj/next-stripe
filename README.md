<h3 align="center">
  next-stripe
</h3>

<p align="center">
  A convenience library for server side Stripe workflows with Next.js
</p>

## Getting Started

```
yarn add next-stripe@beta
```

### Add the API route

Create a `[...nextstripe.js]` catch-all route in your project's `pages/api/stripe` directory.

```js
import NextStripe from 'next-stripe'

const options = {
  secret_key: process.env.STRIPE_SECRET_KEY
}

export default (req, res) => NextStripe(req, res, options)
```

## Usage

`next-stripe/client` exports a selection helper functions to call the Next.js API routes.

### Checkout

```js
import { createCheckoutSession } from 'next-stripe/client'

const session = await createCheckoutSession({
  success_url: window.location.href,
  cancel_url: window.location.href,
  line_items: [{ price: 'price_id', quantity: 1 }],
  payment_method_types: ['card'],
  mode: 'payment'
})
```
