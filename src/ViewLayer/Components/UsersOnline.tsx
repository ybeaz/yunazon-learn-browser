import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonYrl } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { Image } from '../ComponentsLibrary/Image'
import { SERVERS_MAIN } from '../../Constants/servers.const'

const USERS_MAMBA_FACES = [
  { fileName: '1868053633_square_small.jpg', userName: '' },
  { fileName: '2076335835_square.jpg', userName: '' },
  { fileName: '2092394665_square_small.jpg', userName: '' },
  { fileName: '2095751868_square_small.jpg', userName: '' },
  { fileName: '2097072552_square_small.jpg', userName: '' },
  { fileName: '1871510118_square.jpg', userName: '' },
  { fileName: '2082779324_square.jpg', userName: '' },
  { fileName: '2092491718_square.jpg', userName: '' },
  { fileName: '2095917018_square_small.jpg', userName: '' },
  { fileName: '2097295944_square.jpg', userName: '' },
  { fileName: '1943494764_square.jpg', userName: '' },
  { fileName: '2083852218_square_small.jpg', userName: '' },
  { fileName: '2093118322_square.jpg', userName: '' },
  { fileName: '2096297624_square_small.jpg', userName: '' },
  { fileName: '2050767738_square.jpg', userName: '' },
  { fileName: '2084777062_square_small.jpg', userName: '' },
  { fileName: '2094320651_square_small.jpg', userName: '' },
  { fileName: '2096712036_square.jpg', userName: '' },
]

interface IUserOnline {
  fileName: string
  userName: string
}

interface IGetUsersJsx {
  (usersOnline: IUserOnline[], language: string): ReactElement[]
}

interface UsersOnlineArgs {}

export const UsersOnline: React.FunctionComponent<UsersOnlineArgs> = (
  props: UsersOnlineArgs
): ReactElement => {
  const navigate = useNavigate()
  const { language } = useSelector((store2: RootStoreType) => store2)

  const getUsersJsx: IGetUsersJsx = (usersOnline, language2) =>
    usersOnline.map((userOnline: IUserOnline) => {
      const { fileName, userName } = userOnline

      const imageProps = {
        classAdded: 'Image_UsersOnline',
        src: `${SERVERS_MAIN.remote}/images/faces_mamba/${fileName}`,
        action: {
          typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
          data: {
            history: navigate,
            path: '/see-you',
            source: 'usersOnline',
            value: `${fileName} ${userName}`,
          },
        } as ActionReduxType,
      }

      return <Image {...imageProps} />
    })

  const propsOut = {
    iconMdArrowForwardIosProps: {
      icon: 'MdArrowRight',
      icon2: null,
      classAdded: 'IconYrl_ArrowRight2',
    },
    buttonMdArrowForwardIosProps: {
      icon: 'MdArrowRight',
      icon2: null,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_MdArrowRight2',
      action: {
        typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
        data: {
          history: navigate,
          path: '/see-you',
          source: 'usersOnlineNext',
          value: 'next',
        },
      } as ActionReduxType,
      isDisplaying: true,
      tooltipText: DICTIONARY['Next'][language],
      tooltipPosition: 'top',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
  }

  return (
    <div className='UsersOnline'>
      <div className='_images'>
        {getUsersJsx(USERS_MAMBA_FACES, language)}
        <ButtonYrl {...propsOut.buttonMdArrowForwardIosProps} />
      </div>
    </div>
  )
}
