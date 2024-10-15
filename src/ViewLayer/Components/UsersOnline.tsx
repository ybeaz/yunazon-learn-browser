import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { withPropsYrl, ButtonYrl, ImageYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../DataLayer/index.handleEvents'
import { HandleEventType } from 'yourails_common'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { RootStoreType } from '../../Interfaces/RootStoreType'
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

interface UserOnlineType {
  fileName: string
  userName: string
}

interface GetUsersJsxType {
  (usersOnline: UserOnlineType[], language: string): ReactElement[]
}

interface UsersOnlinePropsType {
  handleEvents: HandleEventType
}

export const UsersOnlineComponent: React.FunctionComponent<UsersOnlinePropsType> = ({
  handleEvents,
}: UsersOnlinePropsType): ReactElement => {
  const navigate = useNavigate()
  const { language } = useSelector((store2: RootStoreType) => store2)

  const getUsersJsx: GetUsersJsxType = (usersOnline, language2) =>
    usersOnline.map((userOnline: UserOnlineType) => {
      const { fileName, userName } = userOnline

      const imageProps = {
        classAdded: 'Image_UsersOnline',
        src: `${SERVERS_MAIN.remote}/images/faces_mamba/${fileName}`,
        handleEvents,
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

      return <ImageYrl {...imageProps} />
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
      handleEvents,
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

export const UsersOnline: React.FunctionComponent<UsersOnlinePropsType> = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(UsersOnlineComponent))
