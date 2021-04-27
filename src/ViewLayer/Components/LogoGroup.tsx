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
      <div className='LogoGroup__div'>
        <img
          className='LogoGroup__div_img'
          src='https://yourails.com/imgs/logoYouRailsV13.png'
        />
      </div>
      <div className='LogoGroup__brand'>YouRails</div>
    </Link>
  )
}
