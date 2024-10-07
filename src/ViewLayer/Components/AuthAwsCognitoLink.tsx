import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AWS_COGNITO_URL, AWS_COGNITO_CLIENT_ID } from '../../Constants/aws.const'
import { CLIENTS_URI } from '../../Constants/clientsUri.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS } from '../../Constants/servers.const'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { UserAwsCognitoAuthType } from '../../Interfaces/UserAwsCognitoAuthType'
import { IconYrl, withStoreStateSelectedYrl } from 'yourails_view_layer_web'

interface GetLinkAuthUserPropsType {
  (userAwsCognitoAuth: UserAwsCognitoAuthType): {
    icon: string
    classAdded: string
  }
}

type AuthAwsCognitoLinkArgs = {
  storeStateSlice: {
    userAwsCognitoAuth: UserAwsCognitoAuthType
  }
}

/**
 * @status DEPRECIATED, WORKING, at least is not used, replaced by programmatic redirect
 * @description Component to implement Auth Cognito redirect onClick
 */
export const AuthAwsCognitoLinkComponent: React.FunctionComponent<AuthAwsCognitoLinkArgs> = (
  props: AuthAwsCognitoLinkArgs
) => {
  const {
    storeStateSlice: { userAwsCognitoAuth },
  } = props

  const navigate = useNavigate()

  useEffect(() => {
    const query = getParsedUrlQuery()

    if (query && query.code) {
      handleEvents({}, { typeEvent: 'GET_COGNITO_TOKENS', data: { code: query.code } })
      navigate({
        search: '',
      })
    }
  }, [])

  const getLinkAuthUserProps: GetLinkAuthUserPropsType = userAwsCognitoAuth2 => {
    let output = {
      icon: 'FaUserCircle',
      classAdded: 'IconYrl_authUserHeader',
    }

    if (userAwsCognitoAuth2?.expires_in > 0) {
      output = {
        icon: 'FaUserCircle',
        classAdded: 'IconYrl_authUserHeaderActive',
      }
    }

    return output
  }

  let redirectUri = SERVERS.remote

  try {
    redirectUri =
      process && process?.env?.ENV_APP === 'development' ? SERVERS.localWebpack : SERVERS.remote
  } catch (error: any) {
    console.info('EventsScheduledScreen [39]', error?.message)
  }

  const environment = getDetectedEnv()
  const redirect_url: CLIENTS_URI = CLIENTS_URI[environment]
  const linkSignIn = `${AWS_COGNITO_URL}/login?client_id=${AWS_COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${redirect_url}&&scope=email+openid+profile`

  const propsOut = {
    linkAuthUserProps: {
      className: '_linkAuthUser',
      to: linkSignIn,
    },
    iconReactAuthUserProps: getLinkAuthUserProps(userAwsCognitoAuth),
  }

  return (
    <div className='AuthAwsCognitoLink'>
      <a className='_linkAuthUser' href={propsOut.linkAuthUserProps.to}>
        <IconYrl {...propsOut.iconReactAuthUserProps} />
      </a>
    </div>
  )
}

const storeStateSliceProps: string[] = ['userAwsCognitoAuth']
export const AuthAwsCognitoLink: React.FunctionComponent = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AuthAwsCognitoLinkComponent)
)
