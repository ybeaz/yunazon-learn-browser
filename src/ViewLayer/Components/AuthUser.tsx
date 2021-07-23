import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getInitializedGoogleOAuth } from '../Hooks/getInitializedGoogleOAuth'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Button } from './Button'
import { Input } from './Input'

export const AuthUser: React.FunctionComponent<any> = (
  props: any = {
    scenario: { branch: '', step: '' },
  }
): JSX.Element => {
  const {
    scenario: { branch, step },
  } = props

  getInitializedGoogleOAuth()

  const {
    componentsState: { modalFrames },
    language,
    user,
  } = useSelector((store: IRootStore) => store)

  const SCENARIO = {
    signOut: {
      title: DICTIONARY.SignOut[language],
      scenarioTypeEvent: 'AUTH_SIGNOUT',
    },
    signIn: {
      title: DICTIONARY.loginSocialMediaEmail[language],
      scenarioTypeEvent: 'SEND_AUTH_SIGNIN',
    },
    signUp: {
      title: DICTIONARY.SignUp[language],
      scenarioTypeEvent: 'SEND_AUTH_SIGNUP',
    },
    forgetPassword: {
      title: DICTIONARY.InputYourEmailToResetPassword[language],
      scenarioTypeEvent: 'SEND_AUTH_FORGET_PASSWORD',
    },
  }

  const { title, scenarioTypeEvent } = SCENARIO[branch]

  const buttonAuthFacebook = {
    icon: 'FaFacebookF',
    captureRight: DICTIONARY.loginWithFacebook[language],
    classAdded: 'Button_AuthFacebook',
    action: {
      typeEvent: 'CLICK_AUTH_FACEBOOK',
      data: {},
    },
  }

  const buttonAuthTwitter = {
    icon: 'FaTwitter',
    captureRight: DICTIONARY.loginWithTwitter[language],
    classAdded: 'Button_AuthTwitter',
    action: {
      typeEvent: 'CLICK_AUTH_TWITTER',
      data: {},
    },
  }

  const buttonAuthGoogle = {
    icon: 'FaGooglePlusG',
    captureRight: DICTIONARY.loginWithGoogle[language],
    classAdded: 'Button_AuthGoogle',
    action: {
      typeEvent: 'CLICK_AUTH_GOOGLE',
      data: {},
    },
  }

  const inputUserNameAuthProps = {
    classAdded: 'Input_usernameAuth',
    type: 'text',
    placeholder: DICTIONARY.Name[language],
    typeEvent: 'ONCHANGE_USER_NAME_AUTH',
    storeFormProp: 'userNameAuth',
  }

  const inputEmailAuthProps = {
    classAdded: 'Input_usernameAuth',
    type: 'text',
    placeholder: DICTIONARY.Email[language],
    typeEvent: 'ONCHANGE_EMAIL_AUTH',
    storeFormProp: 'emailAuth',
  }

  const inputPasswordAuthProps = {
    classAdded: 'Input_passwordAuth',
    type: 'text',
    placeholder: DICTIONARY.Password[language],
    typeEvent: 'ONCHANGE_PASSWORD_AUTH',
    storeFormProp: 'passwordAuth',
  }

  const inputPasswordAuth2Props = {
    classAdded: 'Input_passwordAuth',
    type: 'text',
    placeholder: DICTIONARY.RepeatPassword[language],
    typeEvent: 'ONCHANGE_PASSWORD_AUTH_2',
    storeFormProp: 'passwordAuth2',
  }

  const buttonAuthSignInUpOut = {
    icon: '',
    captureLeft: DICTIONARY.Next[language],
    classAdded: 'Button_AuthSignInUp',
    action: {
      typeEvent: scenarioTypeEvent,
      data: {},
    },
  }

  const buttonSignUp = {
    icon: '',
    captureLeft: DICTIONARY.SignUp[language],
    classAdded: 'Button_SignUp',
    action: {
      typeEvent: 'CLICK_SIGNUP',
    },
  }

  const buttonForgetPassword = {
    icon: '',
    captureLeft: DICTIONARY.ForgetPassword[language],
    classAdded: 'Button_ForgetPassword',
    action: {
      typeEvent: 'CLICK_FORGET_PASSWORD',
      data: {},
    },
  }

  const buttonAuthBack = {
    icon: '',
    captureLeft: DICTIONARY.Back[language],
    classAdded: 'Button_AuthSignInUpBack',
    action: {
      typeEvent: 'CLICK_AUTH_SIGN_IN_UP_BACK',
      data: {},
    },
  }

  console.info('AuthUser [136]', { user, branch })

  return (
    <div className='AuthUser'>
      <div className='container'>
        <form className='form'>
          <div className='row'>
            <h2 className='header2'>{title}</h2>
          </div>
          <div className='row'>
            {branch === 'signIn' && (
              <>
                <div className='col'>
                  <Button {...buttonAuthFacebook} />
                  <Button {...buttonAuthTwitter} />
                  <Button {...buttonAuthGoogle} />
                </div>

                <div className='vl'>
                  <span className='vl-innertext'>
                    {DICTIONARY.or[language]}
                  </span>
                </div>
              </>
            )}
            <div className='col'>
              <div className='hide-md-lg'>
                <p>{DICTIONARY.orSignInManually[language]}</p>
              </div>

              {branch === 'signUp' && <Input {...inputUserNameAuthProps} />}
              {branch !== 'signOut' && <Input {...inputEmailAuthProps} />}
              {(branch === 'signIn' || branch === 'signUp') && (
                <Input {...inputPasswordAuthProps} />
              )}
              {branch === 'signUp' && <Input {...inputPasswordAuth2Props} />}

              <div className='_signInUpWrapper'>
                {(branch === 'signUp' || branch === 'forgetPassword') && (
                  <Button {...buttonAuthBack} />
                )}
                <Button {...buttonAuthSignInUpOut} />
              </div>
            </div>
          </div>
        </form>
      </div>

      {branch === 'signIn' && (
        <>
          <div className='bottomContainer'>
            <div className='row'>
              <div className='col'>
                <Button {...buttonSignUp} />
              </div>
              <div className='col'>
                <Button {...buttonForgetPassword} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
