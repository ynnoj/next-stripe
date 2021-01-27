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

Create a `[...nextstripe].js` catch-all route in your project's `pages/api/stripe` directory.

```js
import NextStripe from 'next-stripe'

const options = {
  secret_key: process.env.STRIPE_SECRET_KEY
}

export default (req, res) => NextStripe(req, res, options)
```

## Usage

`next-stripe/client` exports a selection helper functions to call the Next.js API routes.

### Checkout Sessions

#### Create

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

### PaymentIntents

#### Create

```js
import { createPaymentIntent } from 'next-stripe/client'

const session = await createPaymentIntent({
  amount: 1000,
  currency: 'usd'
})
```

#### Update

```js
import { updatePaymentIntent } from 'next-stripe/client'

const paymentIntent = await updatePaymentIntent('pi_id', {
  amount: 1000,
  currency: 'usd'
})
```

## Acknowledgements

- A lot of the patterns in this library were inspred by [NextAuth](https://github.com/nextauthjs/next-auth).
- Thanks to [Jamie Barton](https://github.com/notrab/next-stripe) for the initial idea.
