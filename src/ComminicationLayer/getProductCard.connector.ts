import { servers as serversConst } from '../Constants/servers.const'
import { EcomAssetsAll } from './fragments'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getProductCardConnector: Function = ({
  server,
  variables = { brandID: '0', productID: '0' },
  user = { webToken: '' },
}): any => {
  // console.info('getSampleAssetCollectionConnector', { fragment, assets })
  const pathname = '/graphql'
  const operationName = 'GetEcomAssets'

  const obj = {
    operationName,
    testCapture: 'should return 200 code and data defined',
    pathname,
    method: 'post',
    payloadGql: {
      operationName,
      variables,
      query: `query GetEcomAssets($brandID: String, $productID: String){getEcomAssets(brandID: $brandID, productID: $productID){  ...EcomAssetsAll}} ${EcomAssetsAll}`,
    },
    options: { headers: { ...headers, webtoken: user.webToken } },
    url: `${serversConst[server]}${pathname}`,
  }

  return obj
}
