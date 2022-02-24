import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface ProfilesMatrixArgs {}

export const ProfilesMatrix: React.FunctionComponent<ProfilesMatrixArgs> = (
  props: ProfilesMatrixArgs
): ReactElement => {
  const propsOut = {}

  const getProfilesList = profiles => {
    return profiles.map(profile => {
      const { userNameNick } = profile
      return <div>{userNameNick}</div>
    })
  }

  return <div className='ProfilesMatrix'>{getProfilesList([])}</div>
}
