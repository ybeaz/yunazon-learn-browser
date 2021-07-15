import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Button } from './Button'
import { Input } from './Input'

export const AuthUser: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const { language } = useSelector((store: IRootStore) => store)

  const buttonAuthFacebook = {
    icon: '',
    captureLeft: DICTIONARY.loginWithFacebook[language],
    classAdded: 'Button_AuthFacebook',
    action: {
      typeEvent: 'CLICK_AUTH_FACEBOOK',
      data: {},
    },
  }

  const buttonAuthTwitter = {
    icon: '',
    captureLeft: DICTIONARY.loginWithTwitter[language],
    classAdded: 'Button_AuthTwitter',
    action: {
      typeEvent: 'CLICK_AUTH_TWITTER',
      data: {},
    },
  }

  const buttonAuthGoogle = {
    icon: '',
    captureLeft: DICTIONARY.loginWithGoogle[language],
    classAdded: 'Button_AuthGoogle',
    action: {
      typeEvent: 'CLICK_AUTH_GOOGLE',
      data: {},
    },
  }

  const inputEmailAuthProps = {
    classAdded: 'Input_usernameAuth',
    type: 'text',
    placeholder: DICTIONARY.email[language],
    typeEvent: 'ONCHANGE_EMAIL_AUTH',
    storeFormProp: 'emailAuth',
  }

  const inputPasswordAuthProps = {
    classAdded: 'Input_passwordAuth',
    type: 'text',
    placeholder: DICTIONARY.password[language],
    typeEvent: 'ONCHANGE_PASSWORD_AUTH',
    storeFormProp: 'passwordAuth',
  }

  const buttonAuthLogin = {
    icon: '',
    captureLeft: DICTIONARY.login[language],
    classAdded: 'Button_AuthLogin',
    action: {
      typeEvent: 'CLICK_AUTH_LOGIN',
      data: {},
    },
  }

  const buttonSignUp = {
    icon: '',
    captureLeft: DICTIONARY.signUp[language],
    classAdded: 'Button_SignUp',
    action: {
      typeEvent: 'CLICK_SING_UP',
      data: {},
    },
  }

  const buttonForgetPassword = {
    icon: '',
    captureLeft: DICTIONARY.forgetPassword[language],
    classAdded: 'Button_ForgetPassword',
    action: {
      typeEvent: 'CLICK_FORGET_PASSWORD',
      data: {},
    },
  }

  return (
    <div className='AuthUser'>
      <div className='container'>
        <form className='form'>
          <div className='row'>
            <h2 className='header2'>
              {DICTIONARY.loginSocialMediaEmail[language]}
            </h2>
          </div>
          <div className='row'>
            <div className='col'>
              <Button {...buttonAuthFacebook} />
              <Button {...buttonAuthTwitter} />
              <Button {...buttonAuthGoogle} />
            </div>

            <div className='vl'>
              <span className='vl-innertext'>{DICTIONARY.or[language]}</span>
            </div>

            <div className='col'>
              <div className='hide-md-lg'>
                <p>{DICTIONARY.orSignInManually[language]}</p>
              </div>

              <Input {...inputEmailAuthProps} />
              <Input {...inputPasswordAuthProps} />

              <Button {...buttonAuthLogin} />
            </div>
          </div>
        </form>
      </div>

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
    </div>
  )
}

// For future authorization

/* <div classNameName='ModalFrame__content_inner_form_group'>
                  <label classNameName='ModalFrame__content_inner_form_group_label'>
                    Email
                  </label>
                  <Input {...inputEmailProps} value={emailModal} />
                </div> */

/* <label>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <p>
              By creating an account you agree to our{' '}
              <a href='#'>Terms Privacy</a>.
            </p> */
