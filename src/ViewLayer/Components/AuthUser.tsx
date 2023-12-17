import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { useInitializedVKontakteOAuth } from '../Hooks/useInitializedVKontakteOAuth'
import { useInitializedFacebookOAuth } from '../Hooks/useInitializedFacebookOAuth'
import { useInitializedGoogleOAuth } from '../Hooks/useInitializedGoogleOAuth'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from '../../Constants/dictionary.const'
import {
  InputYrl,
  ButtonYrl,
  withStoreStateSelectedYrl,
} from '../ComponentsLibrary/'

export const AuthUser: React.FunctionComponent<any> = (
  props: any = {
    scenario: { branch: '', step: '' },
  }
): ReactElement => {
  const {
    scenario: { branch, step },
  } = props

  useInitializedFacebookOAuth(branch)
  useInitializedVKontakteOAuth(branch)
  useInitializedGoogleOAuth()

  const {
    componentsState: {
      isOAuthGoogleScriptLoaded,
      isOAuthVKontakteScriptLoaded,
    },
    language,
  } = useSelector((store2: RootStoreType) => store2)

  const SCENARIO = {
    signOut: {
      title: DICTIONARY.Logout[language],
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
    typeEvent: 'ONCHANGE_USER_NAME',
    storeFormGroup: 'user',
    storeFormProp: 'userName',
  }

  const inputEmailAuthProps = {
    classAdded: 'Input_usernameAuth',
    type: 'text',
    placeholder: DICTIONARY.Email[language],
    typeEvent: 'ONCHANGE_USER_EMAIL',
    storeFormGroup: 'user',
    storeFormProp: 'userEmail',
  }

  const inputPasswordAuthProps = {
    classAdded: 'Input_passwordAuth',
    type: 'text',
    placeholder: DICTIONARY.Password[language],
    typeEvent: 'ONCHANGE_USER_PASSWORD_AUTH',
    storeFormGroup: 'user',
    storeFormProp: 'userPasswordAuth',
  }

  const inputPasswordAuth2Props = {
    classAdded: 'Input_passwordAuth',
    type: 'text',
    placeholder: DICTIONARY.RepeatPassword[language],
    typeEvent: 'ONCHANGE_USER_PASSWORD_AUTH_2',
    storeFormGroup: 'user',
    storeFormProp: 'userPasswordAuth2',
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
      data: { branch },
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
                  <ButtonYrl {...buttonAuthFacebook} />
                  <ButtonYrl {...buttonAuthVkontakte} />
                  <ButtonYrl {...buttonAuthGoogle} />
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
                <InputYrl {...inputUserNameAuthProps} />
              )}
              {(branch == 'signInManually' ||
                branch === 'signUpManually' ||
                branch === 'forgetPassword') && (
                <InputYrl {...inputEmailAuthProps} />
              )}
              {(branch === 'signInManually' || branch === 'signUpManually') && (
                <InputYrl {...inputPasswordAuthProps} />
              )}
              {branch === 'signUpManually' && (
                <InputYrl {...inputPasswordAuth2Props} />
              )}

              <div className='_signInUpWrapper'>
                {(branch === 'signUpManually' ||
                  branch === 'forgetPassword' ||
                  branch === 'signOut') && <ButtonYrl {...buttonAuthBack} />}

                {(branch === 'signInManually' ||
                  branch === 'signUpManually' ||
                  branch === 'forgetPassword' ||
                  branch === 'signOut') && (
                  <ButtonYrl {...buttonAuthSignInUpOut} />
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

                  <ButtonYrl {...buttonAuthBack} />
                </div>

                <div className={`_wrapperSignInWith ${vkontakteButtonShowUp}`}>
                  {isOAuthVKontakteScriptLoaded && <div id='vk_auth'></div>}
                  <ButtonYrl {...buttonAuthBack} />
                </div>

                <div className={`_wrapperSignInWith ${googleButtonShowUp}`}>
                  {/* {isOAuthGoogleScriptLoaded &&
                    branch === 'signInWithGoogle' && ( */}
                  <div id='g_id_onload' className='_signInWith'></div>
                  {/* )} */}
                  {step === 'opt_out_or_no_session' && (
                    <div>{DICTIONARY.PleaseReloadThePage[language]}</div>
                  )}
                  <ButtonYrl {...buttonAuthBack} />
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
              <ButtonYrl {...buttonSignUp} />
            </div>
            <div className='col'>
              <ButtonYrl {...buttonForgetPassword} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
