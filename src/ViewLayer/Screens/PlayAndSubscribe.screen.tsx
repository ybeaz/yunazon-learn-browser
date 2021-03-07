import React from 'react'

export const PlayAndSubscribeScreen: Function = (): JSX.Element => {
  return (
    <div className='PlayAndSubscribe'>
      ScreenPlayAndSubscribe :-)
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/i7VAC69Kr80'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
