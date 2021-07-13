import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const AuthUser: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  return (
    <div className='AuthUser'>
      <div className='container'>
        <form>
          <div className='row'>
            <h2 className='header2'>Login with Social Media or Manually</h2>
          </div>
          <div className='row'>
            <div className='col'>
              <a href='#' className='fb btn'>
                <i className='fa fa-facebook fa-fw'></i> Login with Facebook
              </a>
              <a href='#' className='twitter btn'>
                <i className='fa fa-twitter fa-fw'></i> Login with Twitter
              </a>
              <a href='#' className='google btn'>
                <i className='fa fa-google fa-fw'></i> Login with Google+
              </a>
            </div>

            <div className='vl'>
              <span className='vl-innertext'>or</span>
            </div>

            <div className='col'>
              <div className='hide-md-lg'>
                <p>Or sign in manually:</p>
              </div>

              <input
                type='text'
                name='username'
                placeholder='Username'
                required
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <input type='submit' value='Login' />
            </div>
          </div>
        </form>
      </div>

      <div className='bottom-container'>
        <div className='row'>
          <div className='col'>
            <a href='#' className='btn'>
              Sign up
            </a>
          </div>
          <div className='col'>
            <a href='#' className='btn'>
              Forgot password?
            </a>
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
