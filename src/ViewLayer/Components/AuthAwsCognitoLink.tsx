import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { IUserAwsCognitoAuth } from '../../Interfaces/IUserAwsCognitoAuth'
import { IconReact } from '../Components/IconReact'
import { IRootStore } from '../../Interfaces/IRootStore'

interface IGetLinkAuthUserProps {
  (userAwsCognitoAuth: IUserAwsCognitoAuth): {
    icon: string
    classAdded: string
  }
}

interface AuthAwsCognitoLinkArgs {}

export const AuthAwsCognitoLink: React.FunctionComponent<
  AuthAwsCognitoLinkArgs
> = (props: AuthAwsCognitoLinkArgs) => {
  const store = useSelector((store2: IRootStore) => store2)
  const {
    forms: {
      user: { userAwsCognitoAuth },
    },
  } = store

  const history = useHistory()

  useEffect(() => {
    const query = getParsedUrlQuery()

    if (query && query.code) {
      handleEvents(
        {},
        { typeEvent: 'GET_COGNITO_TOKENS', data: { code: query.code } }
      )
      history.replace({
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

  let redirectUri = 'https://d231htngxxargq.cloudfront.net/'
  try {
    redirectUri =
      process && process?.env?.ENV_APP === 'development'
        ? 'http://localhost:3560/'
        : 'https://d231htngxxargq.cloudfront.net/'
  } catch (error) {
    console.info('EventsScheduledScreen [39]', error?.message)
  }

  const propsOut = {
    linkAuthUserProps: {
      className: '_linkAuthUser',
      to: `https://sns-sms-001.auth.us-east-1.amazoncognito.com/login?client_id=4om9l0e26fdba7berph9pgv651&response_type=code&scope=email+openid&redirect_uri=${redirectUri}`,
      urlDev: 'http://localhost:3560/',
      urlProd: 'https://d231htngxxargq.cloudfront.net/',
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
