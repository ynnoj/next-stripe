import { INextRequest, INextResponse } from './src/types/types'
import { NextStripeHandler } from './src/server'

export default function NextStripe(...args: any) {
  if (args.length === 1) {
    return (req: INextRequest, res: INextResponse) =>
      NextStripeHandler(req, res, args[0])
  }

  // @ts-ignore
  return NextStripeHandler(...args)
}
