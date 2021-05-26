import React, { Component } from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  VKShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  VKIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

import { handleEvents } from '../Hooks/handleEvents'

interface INetShareData {
  ButtonComponent: any
  url: string
  netTitleField: string
  netTitle: string
  IconComponent: any
  iconSize: number
  linkRef?: string
}

const netShareData: INetShareData[] = [
  {
    ButtonComponent: TelegramShareButton,
    url: 'https://telegram.me/share/url',
    netTitleField: 'title',
    netTitle: 'Telegram',
    IconComponent: TelegramIcon,
    iconSize: 41,
    linkRef:
      'https://stackoverflow.com/questions/31356360/share-a-link-via-url-scheme-to-telegram',
  },
  {
    ButtonComponent: WhatsappShareButton,
    url: 'https://api.whatsapp.com/send',
    netTitleField: 'title',
    netTitle: 'Whatsapp',
    IconComponent: WhatsappIcon,
    iconSize: 41,
    linkRef:
      'https://stackoverflow.com/questions/33426752/linkedin-share-post-url',
  },
  {
    ButtonComponent: FacebookShareButton,
    url: 'https://www.facebook.com/sharer/sharer.php?u=#url',
    netTitleField: 'quote',
    netTitle: 'Facebook',
    IconComponent: FacebookIcon,
    iconSize: 41,
  },
  {
    ButtonComponent: VKShareButton,
    url: 'https://vk.com/share.php',
    netTitleField: 'title',
    netTitle: 'VKontakte',
    IconComponent: VKIcon,
    iconSize: 41,
  },
  {
    ButtonComponent: LinkedinShareButton,
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://www.linkedin.com%2Fsharing%2Fshare-offsite%2F%3Furl%3D%22%22',
    netTitleField: 'title',
    netTitle: 'Linkedin',
    IconComponent: LinkedinIcon,
    iconSize: 41,
    linkRef:
      'https://stackoverflow.com/questions/33426752/linkedin-share-post-url',
  },
  {
    ButtonComponent: TwitterShareButton,
    url: 'http://twitter.com/share',
    netTitleField: 'title',
    netTitle: 'Twitter',
    IconComponent: TwitterIcon,
    iconSize: 41,
    linkRef: 'https://habr.com/ru/post/156185/',
  },
]

export const ShareButtons: React.FunctionComponent<any> = (
  props
): JSX.Element => {
  // I stopped here
  // https://gist.github.com/saippuakauppias/247af51c6ed50503afe4
  // https://habr.com/ru/post/156185/

  const getNetShareButtons: Function = (
    netShareData: INetShareData[]
  ): JSX.Element[] => {
    return netShareData.map(item => {
      const {
        ButtonComponent,
        url,
        netTitleField,
        netTitle,
        IconComponent,
        iconSize,
      } = item

      const buttonProps = { url, [netTitleField]: netTitle }
      const iconProps = { size: iconSize }
      return (
        <ButtonComponent
          {...buttonProps}
          onClick={event =>
            handleEvents(event, {
              typeEvent: 'CLICK_SOCIAL_NET_BUTTON',
              data: { buttonProps: item },
            })
          }
        >
          <IconComponent {...iconProps} />
        </ButtonComponent>
      )
    })
  }

  return <div className='ShareButtons'>{getNetShareButtons(netShareData)}</div>
}
