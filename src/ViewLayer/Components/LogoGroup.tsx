import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { handleEvents } from '../Hooks/handleEvents'

export const LogoGroup: React.FunctionComponent<any> = (): JSX.Element => {
  const saveAnalyticsEvent = {
    type: 'SAVE_ANALYTICS_EVENT',
    data: { type: 'click', name: 'logo clicked' },
  }

  return (
    <Link
      className='LogoGroup'
      to={{
        pathname: `/home`,
      }}
      onClick={() => handleEvents({}, saveAnalyticsEvent)}
    >
      <div className='__div'>
        <img
          className='_img'
          src='https://yourails.com/images/logoYouRailsV13.png'
        />
      </div>
      <div className='__brand'>YouRails</div>
    </Link>
  )
}
