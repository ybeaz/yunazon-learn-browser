import { servers as serversConst } from '../Constants/servers.const'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getContentInfoConnector: Function = (): any => {
  const server: string = 'remote'
  const pathname: string = '/filestorage/contentInfo.json'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    pathname,
    method: 'get',
    options: { headers: { ...headers } },
    url: <string>`${serversConst[server]}${pathname}`,
  }

  return obj
}
