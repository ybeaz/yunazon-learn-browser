import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const LogoGroup: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <Link
      className='LogoGroup'
      to={{
        pathname: `/home`,
      }}
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
