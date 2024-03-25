import { ActionEventType } from '../../Interfaces/ActionEventType'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { AWS_COGNITO_URL, AWS_COGNITO_CLIENT_ID } from '../../Constants/aws.const'
import { getRedirected } from '../../Shared/getRedirected'
import { getLocalStorageSetObjTo } from '../../Shared/getLocalStorageSetObjTo'

export const CLICK_ON_SIGN_IN: ActionEventType = (event, data) => {
  if (window.location.pathname !== '/')
    getLocalStorageSetObjTo({ redirectAuthFrom: decodeURIComponent(window.location.pathname) })
  const environment = getDetectedEnv()
  const redirect_url: CLIENTS_URI = CLIENTS_URI[environment]
  const linkSignIn = `${AWS_COGNITO_URL}/login?client_id=${AWS_COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${redirect_url}&&scope=email+openid+profile`
  getRedirected(linkSignIn)
}
