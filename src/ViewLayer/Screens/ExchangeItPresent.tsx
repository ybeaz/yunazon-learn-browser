import React from 'react'

import { getEffectedRequests } from '../Hooks/getEffectedRequests'

export const ExchangeItPresent: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  getEffectedRequests(['GET_GLOBAL_VARS'])

  return <div className='ExchangeItPresent'>ExchangeItPresent</div>
}
