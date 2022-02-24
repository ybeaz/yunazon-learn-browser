import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from './Button'
import { IUser } from '../../Interfaces/IRootStore'

interface ProfilePlateArgs {
  profile: IUser
}

export const ProfilePlate: React.FunctionComponent<ProfilePlateArgs> = (
  props: ProfilePlateArgs
): ReactElement => {
  const {
    userAvatar,
    userNameNick,
    userLocaleCountry,
    userSkillsExpertise,
    userLanguages,
    userInfoAbout,
  } = props.profile

  const propsOut = {
    buttonAvatarProps: {
      icon: userAvatar ? null : 'FaUserCircle',
      icon2: null,
      imageSrc: userAvatar,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_Avatar',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
  }

  return (
    <div className='ProfilePlate'>
      <div className='_col'>
        <div className='_button'>
          <Button {...propsOut.buttonAvatarProps} />
        </div>
        <div className='_userNameNick'>{userNameNick}</div>
      </div>

      <div className='_col _userSkillsExpertise'>{userSkillsExpertise}</div>
      <div className='_col _userLanguages'>{userLanguages}</div>
      <div className='_col _userLocaleCountry'>{userLocaleCountry}</div>
      <div className='_col _userInfoAbout'>{userInfoAbout}</div>
    </div>
  )
}
