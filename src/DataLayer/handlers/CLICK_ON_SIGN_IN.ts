import { ActionEventType } from 'yourails_common'
import { getDetectedEnv } from 'yourails_common'
import { AWS_COGNITO_URL, AWS_COGNITO_CLIENT_ID } from 'yourails_common'
import { getRedirected } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'

export const CLICK_ON_SIGN_IN: ActionEventType = (event, data) => {
  if (window.location.pathname !== '/')
    getLocalStorageSetObjTo({ redirectAuthFrom: decodeURIComponent(window.location.pathname) })
  const environment = getDetectedEnv()
  const redirect_url: string = location.origin
  const linkSignIn = `${AWS_COGNITO_URL}/login?client_id=${AWS_COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${redirect_url}&scope=email+openid+profile`
  getRedirected(linkSignIn)
}
