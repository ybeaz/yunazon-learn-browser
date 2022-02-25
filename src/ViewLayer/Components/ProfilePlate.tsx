import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { getOptionsUserSkillsExpertise } from '../../Shared/getOptionsUserSkillsExpertise'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IAddedProps } from '../../Interfaces/IAddedProps'
import { Button } from './Button'
import { IUser } from '../../Interfaces/IRootStore'

interface IProfilePlateArgs {
  profile: IUser
  language: string
}

export const ProfilePlate: React.FunctionComponent<IProfilePlateArgs> = (
  props: IProfilePlateArgs
): ReactElement => {
  const { language, profile } = props

  const {
    userAvatar,
    userNameNick,
    userLocaleCountry,
    userSkillsExpertise,
    userLanguages,
    userInfoAbout,
  } = profile

  const stubOnAction = () => {}

  const optionsUserSkillsExpertise = getOptionsUserSkillsExpertise(
    userSkillsExpertise,
    CATEGORIES_TO_EXCHANGE,
    language
  )

  // const optionsForUserLanguages = getOptionsUserSkillsExpertise(
  //   userSkillsExpertise,
  //   CATEGORIES_TO_EXCHANGE,
  //   language
  // )

  console.info('ProfilePlate [34]', {
    optionsUserSkillsExpertise,
    userSkillsExpertise,
    CATEGORIES_TO_EXCHANGE,
    language,
  })

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  let userSkillsExpertiseAddedProps: IAddedProps = { defaultValue: [] }

  if (userSkillsExpertise && userSkillsExpertise.length) {
    userSkillsExpertiseAddedProps = {
      value: userSkillsExpertise,
    }
  }

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
    userSkillsExpertiseProps: {
      allowClear: false,
      componentId: nanoid(),
      ...userSkillsExpertiseAddedProps,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: optionsUserSkillsExpertise,
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
      open: false,
      removeIcon: null,
      bordered: false,
    },
    userLanguagesProps: {
      allowClear: false,
      componentId: nanoid(),
      ...userSkillsExpertiseAddedProps,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: optionsUserSkillsExpertise,
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
      open: false,
      removeIcon: null,
      bordered: false,
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

      <div className='_col'>
        <label>Компетенции</label>
        <div className='_userSkillsExpertise'>
          <SelectAntd {...propsOut.userSkillsExpertiseProps} />
        </div>
      </div>

      <div className='_col'>
        <label>Языки</label>
        <div className='_userLanguages'>
          <SelectAntd {...propsOut.userLanguagesProps} />
        </div>
      </div>

      {/* <div className='_col _userLanguages'>{userLanguages}</div> */}
      <div className='_col _userLocaleCountry'>{userLocaleCountry}</div>
      <div className='_col _userInfoAbout'>{userInfoAbout}</div>
    </div>
  )
}
