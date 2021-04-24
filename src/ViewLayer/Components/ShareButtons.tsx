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
  return (
    <div className='ShareButtons'>
      <FacebookShareButton
        url={'https://www.facebook.com/sharer/sharer.php?u=#url'}
        quote={'Facebook'}
      >
        <FacebookIcon size={41} />
      </FacebookShareButton>
    </div>
  )
}
