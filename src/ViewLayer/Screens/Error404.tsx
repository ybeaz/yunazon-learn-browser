import React, { ReactElement } from 'react'

import { ScreensEnumType } from 'yourails_common'

const Error404: React.FunctionComponent = (): ReactElement => {
  const screenType = ScreensEnumType['Error404']

  return (
    <div className='Error404'>
      <div className=''>
        <div className=''>
          <div className='error-template'>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className='error-actions'>
              <a href='/' className='btn btn-primary btn-lg'>
                <span className='glyphicon glyphicon-home' />
                Take Me Home
              </a>
              <a href='/' className='btn btn-default btn-lg'>
                <span className='glyphicon glyphicon-envelope' />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Error404 as default }
