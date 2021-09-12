import React from 'react'
import { Link } from 'react-router-dom'

import { handleEvents } from '../../DataLayer/index.handleEvents'

export const LogoGroup: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <Link
      className='LogoGroup'
      to={{
        pathname: `/home`,
      }}
      onClick={() => handleEvents({}, { typeEvent: 'CLICK_LOGO_GROUP' })}
    >
      <div className='__div'>
        <img
          className='_img'
          src='https://yourails.com/images/logoYouRails.png'
        />
      </div>
      <div className='__brand'>YouRails Academy</div>
    </Link>
  )
}
