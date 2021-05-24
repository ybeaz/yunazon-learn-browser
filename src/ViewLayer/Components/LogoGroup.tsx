import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getStringifyToAzClass } from '../../Shared/getStringifyToAzClass'

export const LogoGroup: React.FunctionComponent<any> = (): JSX.Element => {
  const trackObj = { type: 'click', name: 'logo clicked' }
  const azClass = getStringifyToAzClass({ obj: trackObj })

  return (
    <Link
      className={`LogoGroup ${azClass}`}
      to={{
        pathname: `/home`,
      }}
    >
      <div className={`__div `}>
        <img
          className='_img'
          src='https://yourails.com/images/logoYouRailsV13.png'
        />
      </div>
      <div className='__brand'>YouRails</div>
    </Link>
  )
}
