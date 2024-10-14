import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
// import 'antd/dist/antd.css'

import { getOptionsUserLocaleCountry } from 'yourails_common'
import { getOptionsUserLanguages } from 'yourails_common'
import { getOptionsAntdStandard } from 'yourails_common'
import { COUNTRIES } from 'yourails_common'
import { MEDIA } from 'yourails_common'
import { GENDER } from 'yourails_common'
import { LANGUAGES } from 'yourails_common'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { withPropsYrl, ButtonYrl } from 'yourails_common'
import { handleEvents as handleEventsIn, HandleEventType } from '../../DataLayer/index.handleEvents'
import { UserType } from '../../Interfaces/UserType'

interface IOptionStandard {
  label: string
  value: string
}
interface ProfilePlatePropsType {
  profile: UserType
  language: string
  handleEvents: HandleEventType
}

export const ProfilePlateComponent: React.FunctionComponent<ProfilePlatePropsType> = (
  props: ProfilePlatePropsType
): ReactElement => {
  const { language, profile, handleEvents } = props

  const {
    userAvatar,
    userGender,
    userInfoAbout,
    userLanguages,
    userLocaleCountry,
    userMedia,
    userNameNick,
    userSkillsExpertise,
  } = profile

  const stubOnAction = () => {}

  const filterOption = (input: any, option: IOptionStandard) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const getSelectAntdAddedProps = (input: string[]): any => {
    let res: any = { defaultValue: [] }
    if (input && input.length) {
      res = {
        value: input,
      }
    }
    return res
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
      handleEvents,
    },
    selectCommonPart: {
      allowClear: false,
      componentId: nanoid(),
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      placeholder: DICTIONARY['select'][language],
      style: { width: '100%' },
      showSearch: false,
      open: false,
      removeIcon: null,
      bordered: false,
    },
    userSkillsExpertiseProps() {
      return {
        ...this.selectCommonPart,
        // @ts-expect-error
        ...getSelectAntdAddedProps(userSkillsExpertise),
        options: getOptionsAntdStandard(
          // @ts-expect-error
          userSkillsExpertise,
          CATEGORIES_TO_EXCHANGE,
          language
        ),
      }
    },
    userLanguagesProps() {
      return {
        ...this.selectCommonPart,
        // @ts-expect-error
        ...getSelectAntdAddedProps(userLanguages),
        // @ts-expect-error
        options: getOptionsUserLanguages(userLanguages, LANGUAGES, language),
      }
    },
    userMediaProps() {
      return {
        ...this.selectCommonPart,
        // @ts-expect-error
        ...getSelectAntdAddedProps(userMedia),
        // @ts-expect-error
        options: getOptionsAntdStandard(userMedia, MEDIA, language),
      }
    },
    userGenderProps() {
      return {
        ...this.selectCommonPart,
        // @ts-expect-error
        ...getSelectAntdAddedProps([userGender]),
        options: userGender ? getOptionsAntdStandard([userGender], GENDER, language) : [],
      }
    },
    userLocaleCountryProps() {
      return {
        ...this.selectCommonPart,
        // @ts-expect-error
        ...getSelectAntdAddedProps([userLocaleCountry]),
        options: getOptionsUserLocaleCountry(
          // @ts-expect-error
          userLocaleCountry,
          COUNTRIES,
          language
        ),
      }
    },
  }

  return (
    <div className='ProfilePlate'>
      <div className='_col'>
        <div className='_button'>
          <ButtonYrl {...propsOut.buttonAvatarProps} />
        </div>
        <div className='_userNameNick'>{userNameNick}</div>
      </div>

      <div className='_col'>
        <label className='_label'>{DICTIONARY['Competencies'][language]}</label>
        <div className='_userSkillsExpertise'>
          <SelectAntd {...propsOut.userSkillsExpertiseProps()} />
        </div>
      </div>

      <div className='_col'>
        <div className='_colLanguages'>
          <label className='_label'>{DICTIONARY['Languages'][language]}</label>
          <div className='_userLanguages'>
            <SelectAntd {...propsOut.userLanguagesProps()} />
          </div>
        </div>

        <div className='_colMedia'>
          <label className='_label'>{DICTIONARY['Media'][language]}</label>
          <div className='_userMedia'>
            <SelectAntd {...propsOut.userMediaProps()} />
          </div>
        </div>

        <div className='_colGender'>
          <label className='_label'>{DICTIONARY['Gender'][language]}</label>
          <div className='_userMedia'>
            <SelectAntd {...propsOut.userGenderProps()} />
          </div>
        </div>

        <div className='_colCountry'>
          <label className='_label'>{DICTIONARY['Country'][language]}</label>
          <div className='_userLocaleCountry'>
            <SelectAntd {...propsOut.userLocaleCountryProps()} />
          </div>
        </div>
      </div>

      <div className='_col'>
        <label className='_label'>{DICTIONARY['AboutUser'][language]}</label>
        <div className='_userInfoAbout'>{userInfoAbout}</div>
      </div>
    </div>
  )
}

export const ProfilePlate: React.FunctionComponent<ProfilePlatePropsType> = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(ProfilePlateComponent))
