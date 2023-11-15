import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AWS_COGNITO_API, SERVERS } from '../../Constants/servers.const'
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

  const propsOut = {
    linkAuthUserProps: {
      className: '_linkAuthUser',
      to: `${AWS_COGNITO_API.callbackUrlPart}${redirectUri}`,
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
