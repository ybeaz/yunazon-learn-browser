import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getInitializedVKontakteOAuth } from '../Hooks/getInitializedVKontakteOAuth'
import { getInitializedFacebookOAuth } from '../Hooks/getInitializedFacebookOAuth'
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

  getInitializedFacebookOAuth(branch)
  getInitializedVKontakteOAuth(branch)
  getInitializedGoogleOAuth()

  const {
    componentsState: {
      isOAuthGoogleScriptLoaded,
      isOAuthFacebookScriptLoaded,
      isOAuthVKontakteScriptLoaded,
    },
    language,
    user,
  } = useSelector((store: IRootStore) => store)

  const SCENARIO = {
    signOut: {
      title: DICTIONARY.SignOut[language],
      scenarioTypeEvent: 'AUTH_SIGN_OUT',
    },
    signInManually: {
      title: DICTIONARY.loginSocialMediaEmail[language],
      scenarioTypeEvent: 'GET_AUTH_SIGN_IN',
    },
    signUpManually: {
      title: DICTIONARY.SignUp[language],
      scenarioTypeEvent: 'GET_AUTH_SIGN_UP',
    },
    forgetPassword: {
      title: DICTIONARY.InputYourEmailToResetPassword[language],
      scenarioTypeEvent: 'SEND_AUTH_FORGET_PASSWORD',
    },
    signInWithFacebook: {
      title: '',
      scenarioTypeEvent: '',
    },
    signInWithVkontakte: {
      title: '',
      scenarioTypeEvent: '',
    },
    signInWithGoogle: {
      title: '',
      scenarioTypeEvent: '',
    },
  }

  const { title, scenarioTypeEvent } = SCENARIO[branch]

  const buttonAuthFacebook = {
    icon: 'FaFacebook',
    captureRight: DICTIONARY.loginWithFacebook[language],
    classAdded: 'Button_AuthFacebook',
    action: {
      typeEvent: 'CLICK_AUTH_FACEBOOK',
      data: {},
    },
  }

  const buttonAuthVkontakte = {
    icon: 'FaVk',
    captureRight: DICTIONARY.loginWithVkontakte[language],
    classAdded: 'Button_AuthVkontakte',
    action: {
      typeEvent: 'CLICK_AUTH_VKONTAKTE',
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
      typeEvent: 'CLICK_SIGN_UP',
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

  const facebookButtonShowUp = branch === 'signInWithFacebook' ? '' : '_hidden'
  const vkontakteButtonShowUp =
    branch === 'signInWithVkontakte' ? '' : '_hidden'
  const googleButtonShowUp = branch === 'signInWithGoogle' ? '' : '_hidden'

  return (
    <div className='AuthUser'>
      <div className='container'>
        <form className='form'>
          {(branch === 'signInManually' ||
            branch === 'signUpManually' ||
            branch === 'forgetPassword' ||
            branch === 'signOut') && (
            <div className='row'>
              <h2 className='header2'>{title}</h2>
            </div>
          )}
          <div className='row'>
            {branch === 'signInManually' && (
              <>
                <div className='col'>
                  <Button {...buttonAuthFacebook} />
                  <Button {...buttonAuthVkontakte} />
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

              {branch === 'signUpManually' && (
                <Input {...inputUserNameAuthProps} />
              )}
              {(branch == 'signInManually' ||
                branch === 'signUpManually' ||
                branch === 'forgetPassword') && (
                <Input {...inputEmailAuthProps} />
              )}
              {(branch === 'signInManually' || branch === 'signUpManually') && (
                <Input {...inputPasswordAuthProps} />
              )}
              {branch === 'signUpManually' && (
                <Input {...inputPasswordAuth2Props} />
              )}

              <div className='_signInUpWrapper'>
                {(branch === 'signUpManually' ||
                  branch === 'forgetPassword' ||
                  branch === 'signOut') && <Button {...buttonAuthBack} />}

                {(branch === 'signInManually' ||
                  branch === 'signUpManually' ||
                  branch === 'forgetPassword' ||
                  branch === 'signOut') && (
                  <Button {...buttonAuthSignInUpOut} />
                )}

                <div className={`_wrapperSignInWith ${facebookButtonShowUp}`}>
                  <div
                    className='fb-login-button'
                    data-width=''
                    data-size='large'
                    data-button-type='login_with'
                    data-layout='default'
                    data-auto-logout-link='false'
                    data-use-continue-as='false'
                  ></div>

                  <Button {...buttonAuthBack} />
                </div>

                <div className={`_wrapperSignInWith ${vkontakteButtonShowUp}`}>
                  {isOAuthVKontakteScriptLoaded && <div id='vk_auth'></div>}
                  <Button {...buttonAuthBack} />
                </div>

                <div className={`_wrapperSignInWith ${googleButtonShowUp}`}>
                  {isOAuthGoogleScriptLoaded &&
                    branch === 'signInWithGoogle' && (
                      <div id='g_id_onload' className='_signInWith'></div>
                    )}
                  <Button {...buttonAuthBack} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {branch === 'signInManually' && (
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
      )}
    </div>
  )
}
