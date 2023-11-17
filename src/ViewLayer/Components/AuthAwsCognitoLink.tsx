import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  AWS_COGNITO_URL,
  AWS_COGNITO_CLIENT_ID,
} from '../../Constants/aws.const'
import { CLIENTS } from '../../Constants/clients.const'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { SERVERS } from '../../Constants/servers.const'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { UserAwsCognitoAuthType } from '../../Interfaces/UserAwsCognitoAuthType'
import { IconReact } from '../ComponentsLibrary/IconReact'
import { RootStoreType } from '../../Interfaces/RootStoreType'

interface IGetLinkAuthUserProps {
  (userAwsCognitoAuth: UserAwsCognitoAuthType): {
    icon: string
    classAdded: string
  }
}

interface AuthAwsCognitoLinkArgs {}

export const AuthAwsCognitoLink: React.FunctionComponent<
  AuthAwsCognitoLinkArgs
> = (props: AuthAwsCognitoLinkArgs) => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    forms: {
      user: { userAwsCognitoAuth },
    },
  } = store

  const navigate = useNavigate()

  useEffect(() => {
    const query = getParsedUrlQuery()

    if (query && query.code) {
      handleEvents(
        {},
        { typeEvent: 'GET_COGNITO_TOKENS', data: { code: query.code } }
      )
      navigate({
        search: '',
      })
    }
  }, [])

  const getLinkAuthUserProps: IGetLinkAuthUserProps = userAwsCognitoAuth2 => {
    let output = {
      icon: 'FaUserCircle',
      classAdded: 'IconReact_authUserHeader',
    }

    if (userAwsCognitoAuth2?.expires_in > 0) {
      output = {
        icon: 'FaUserCircle',
        classAdded: 'IconReact_authUserHeaderActive',
      }
    }

    return output
  }

  let redirectUri = SERVERS.remote

  try {
    redirectUri =
      process && process?.env?.ENV_APP === 'development'
        ? SERVERS.localWebpack
        : SERVERS.remote
  } catch (error: any) {
    console.info('EventsScheduledScreen [39]', error?.message)
  }

  const environment = getDetectedEnv()
  const redirect_url: CLIENTS = CLIENTS[environment]
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
        <IconReact {...propsOut.iconReactAuthUserProps} />
      </a>
    </div>
  )
}
