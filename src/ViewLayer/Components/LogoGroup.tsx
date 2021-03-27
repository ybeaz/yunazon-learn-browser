import React, { useState, useEffect } from 'react'

export const LogoGroup: Function = (): JSX.Element => {
  return (
    <div className='LogoGroup'>
      <div className='LogoGroup__div'>
        <img
          className='LogoGroup__div_img'
          src='https://ynm.userto.com/filestorage/logoYunazonV13.png'
        />
      </div>
      <div className='LogoGroup__brand'>YouRails</div>
    </div>
  )
}
