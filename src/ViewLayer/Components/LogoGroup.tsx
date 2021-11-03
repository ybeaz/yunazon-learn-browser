import React from 'react'
import { Link } from 'react-router-dom'

import { handleEvents } from '../../DataLayer/index.handleEvents'

interface LogoGroupArgs {
  brandName: string
}

export const LogoGroup: React.FunctionComponent<LogoGroupArgs> = (
  props
): JSX.Element => {
  const { brandName } = props

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
      <div className='__brand'>{brandName}</div>
    </Link>
  )
}
