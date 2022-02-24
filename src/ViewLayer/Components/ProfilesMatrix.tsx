import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'

interface ProfilesMatrixArgs {}

export const ProfilesMatrix: React.FunctionComponent<ProfilesMatrixArgs> = (
  props: ProfilesMatrixArgs
): ReactElement => {
  const { users, language } = useSelector((store2: IRootStore) => store2)

  console.info('ProfilesMatrix [14]', { users, language })

  const propsOut = {}

  const getProfilesList = profiles => {
    return profiles.map(profile => {
      const { userNameNick } = profile
      return <div>{userNameNick}</div>
    })
  }

  return <div className='ProfilesMatrix'>{getProfilesList(users)}</div>
}
