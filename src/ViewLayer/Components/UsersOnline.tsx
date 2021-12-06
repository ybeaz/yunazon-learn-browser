import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { IAction } from '../../Interfaces/IAction'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Image } from './Image'

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

interface IUser {
  fileName: string
  userName: string
}

interface IGetUsersJsx {
  (users: IUser[], language: string): ReactElement[]
}

interface UsersOnlineArgs {}

export const UsersOnline: React.FunctionComponent<UsersOnlineArgs> = (
  props: UsersOnlineArgs
): ReactElement => {
  const history = useHistory()
  const { language } = useSelector((store2: IRootStore) => store2)

  const getUsersJsx: IGetUsersJsx = (categories2, language2) =>
    categories2.map((item: IUser) => {
      const { fileName, userName } = item

      const imageProps = {
        classAdded: 'Image_UsersOnline',
        src: `https://yourails.com/images/faces_mamba/${fileName}`,
        action: {
          typeEvent: 'SEP_CLICK_BUTTON_SEARCH',
          data: {
            history,
            path: '/see-you',
            source: 'usersOnline',
            value: `${fileName} ${userName}`,
          },
        } as IAction,
      }

      return <Image {...imageProps} />
    })

  const propsOut = {}
  return (
    <div className='UsersOnline'>
      <h2 className='_title padding: p_2_0_1_0'>
        {DICTIONARY['Online'][language]}
      </h2>
      <div className='_images'>{getUsersJsx(USERS_MAMBA_FACES, language)}</div>
    </div>
  )
}
