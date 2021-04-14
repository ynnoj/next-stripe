import { NextApiRequest, NextApiResponse } from 'next'

export type Obj = Record<string, never>

type NextStripeType =
  | 'payment-intent'
  | 'billing-portal-session'
  | 'checkout-session'
type NextStripeMethod = 'confirm' | 'create' | 'retrieve' | 'update'

export interface INextRequest extends NextApiRequest {
  query: {
    nextstripe: [NextStripeMethod, NextStripeType]
  }
}

export type INextResponse = NextApiResponse

export interface IOptions {
  stripe_key: string
}
