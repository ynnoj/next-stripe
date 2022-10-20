import Stripe from 'stripe'
import fetcher from '../lib/fetcher'

export async function confirmPaymentIntent(
  id: string,
  body: Stripe.PaymentIntentConfirmParams
): Promise<Stripe.PaymentIntent> {
  return await fetcher({
    body: { id, body },
    method: 'POST',
    url: `/api/stripe/confirm/payment-intent`
  })
}

export async function createBillingPortalSession(
  body: Stripe.BillingPortal.SessionCreateParams
): Promise<Stripe.BillingPortal.Session> {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/billing-portal-session`
  })
}

export async function createCheckoutSession(
  body: Stripe.Checkout.SessionCreateParams
): Promise<Stripe.Checkout.Session> {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/checkout-session`
  })
}

export async function createPaymentIntent(
  body: Stripe.PaymentIntentCreateParams
): Promise<Stripe.PaymentIntent> {
  return await fetcher({
    body,
    method: 'POST',
    url: `/api/stripe/create/payment-intent`
  })
}

export async function retrievePaymentIntent(
  id: string
): Promise<Stripe.PaymentIntent> {
  return await fetcher({
    body: { id },
    method: 'GET',
    url: `/api/stripe/retrieve/payment-intent`
  })
}

export async function updatePaymentIntent(
  id: string,
  body: Stripe.PaymentIntentUpdateParams
): Promise<Stripe.PaymentIntent> {
  return await fetcher({
    body: { id, body },
    method: 'POST',
    url: `/api/stripe/update/payment-intent`
  })
}

export default {
  confirmPaymentIntent,
  createBillingPortalSession,
  createCheckoutSession,
  createPaymentIntent,
  retrievePaymentIntent,
  updatePaymentIntent
}
