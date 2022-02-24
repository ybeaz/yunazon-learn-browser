import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IUser } from '../../Interfaces/IRootStore'

interface ProfilePlateArgs {
  profile: IUser
}

export const ProfilePlate: React.FunctionComponent<ProfilePlateArgs> = (
  props: ProfilePlateArgs
): ReactElement => {
  const propsOut = {}
  const {
    userAvatar,
    userNameNick,
    userLocaleCountry,
    userSkillsExpertise,
    userLanguages,
    userInfoAbout,
  } = props.profile
  return (
    <div className='ProfilePlate'>
      <div className='_userAvatar'>{userAvatar}</div>
      <div className='_userNameNick'>{userNameNick}</div>
      <div className='_userSkillsExpertise'>{userSkillsExpertise}</div>
      <div className='_userLanguages'>{userLanguages}</div>
      <div className='_userLocaleCountry'>{userLocaleCountry}</div>
      <div className='_userInfoAbout'>{userInfoAbout}</div>
    </div>
  )
}
