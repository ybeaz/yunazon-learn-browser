import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const sendAuthSignInConnector: Function = (
  emailAuth: string,
  passwordAuth: string
): any => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: any = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'FindDocument',
      variables: {
        email: 'test1',
        password: '123456',
      },
      query: `query AuthLoginPass($email:String, $password:String){authLoginPass(email:$email,password:$password){status, email, uid, userName, webToken, roles}}`,
    },
    options: { headers: { ...headers } },
    url: <string>`${SERVERS[envType]}/graphql`,
  }

  return obj
}
