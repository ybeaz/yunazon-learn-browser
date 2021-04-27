import React, { Component } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  PinterestIcon,
  VKIcon,
} from 'react-share'

export const ShareButtons: React.FunctionComponent<any> = (
  props
): JSX.Element => {
  // I stopped here
  // https://gist.github.com/saippuakauppias/247af51c6ed50503afe4
  // https://habr.com/ru/post/156185/

  const getShareButtons: Function = (
    shareButtonArray: any[]
  ): JSX.Element[] => {
    return null
  }

  return (
    <div className='ShareButtons'>
      <FacebookShareButton
        url={'https://www.facebook.com/sharer/sharer.php?u=#url'}
        quote={'Facebook'}
      >
        <FacebookIcon size={41} />
      </FacebookShareButton>
      <VKShareButton url={'https://vk.com/share.php'} title={'VKontakte'}>
        <VKIcon size={41} />
      </VKShareButton>
    </div>
  )
}
