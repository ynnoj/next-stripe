import { INextRequest, INextResponse, IOptions } from './src/types/types'
import { NextStripeHandler } from './src/server'

export default function NextStripe(
  ...args: [INextRequest, INextResponse, IOptions] | [IOptions]
) {
  if (args.length === 1) {
    return (req: INextRequest, res: INextResponse) =>
      NextStripeHandler(req, res, args[0])
  }

  return NextStripeHandler(...args)
}
