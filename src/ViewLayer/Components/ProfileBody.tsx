import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { SelectLanguage } from './SelectLanguage'
import { getCountriesOptions } from '../../shared/getCountriesOptions'
import { COUNTRIES } from '../../Constants/countries.const'
import { LANGUAGES } from '../../Constants/languages.const'
import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { getStdDictionaryOptions } from '../../shared/getStdDictionaryOptions'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { Image } from './Image'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from './Input'

interface ProfileBodyArgs {}

export const ProfileBody: React.FunctionComponent<ProfileBodyArgs> = (
  props: ProfileBodyArgs
): ReactElement => {
  const {
    language,
    forms: {
      profile: {
        userLanguages,
        userCountry,
        userNameFirst,
        userInfoAbout,
        userSkillsExpertise,
        avatar,
      },
    },
  } = useSelector((store: IRootStore) => store)

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0

  const defaultOption = DICTIONARY.notSelected
  const stubOnAction = () => {}

  const propsOut = {
    imageAvatarProps: {
      classAdded: 'Image_ProfileBody_avatar',
      src: avatar,
    },
    inputAvatarFileProps: {
      classAdded: 'Input_ProfileBody_avatar',
      type: 'file',
      placeholder: '',
      typeEvent: 'GET_AVATAR_PATH',
      accept: 'image/png, image/jpeg, image/jpg',
    },
    inputUserNameFirstProps: {
      classAdded: 'Input_ProfileBody_userNameFirst',
      type: 'text',
      placeholder: 'name',
      typeEvent: 'ONCHANGE_USER_NAME_FIRST',
      storeFormProp: 'userNameFirst',
      storeFormGroup: 'profile',
    },
    selectSkillsExpertizeProps: {
      allowClear: true,
      componentId: nanoid(),
      value: userSkillsExpertise,
      filterOption,
      mode: 'multiple' as 'multiple' | 'tags',
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: 'SELECT_SKILLS_EXPERTISE', data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
    selectUserLanguagesProps: {
      LANGUAGES,
      language,
      mode: 'multiple' as 'multiple' | 'tags',
      typeEvent: 'SELECT_USER_LANGUAGES',
      classAdded: 'SelectUserLanguages__ProfileBody',
      languagesSelected: userLanguages.map(item => ({ value: item })),
    },
    inputUserInfoAboutProps: {
      tagName: 'textarea',
      classAdded: 'Input_ProfileBody_userInfoAbout',
      placeholder: 'about',
      typeEvent: 'ONCHANGE_USER_INFO_ABOUT',
      storeFormProp: 'userInfoAbout',
      storeFormGroup: 'profile',
    },
    selectUserCountryProps: {
      allowClear: true,
      componentId: nanoid(),
      value: userCountry,
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents({}, { typeEvent: 'SELECT_USER_COUNTRY', data: values }),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: 'children',
      options: getCountriesOptions(COUNTRIES, language, defaultOption),
      placeholder: DICTIONARY['select'][language],
      showSearch: true,
      style: { width: '100%' },
    },
  }

  const classCol01 = '_col_1'
  const classCol02 = '_col_1'

  console.info('ProfileBody [91]', {
    userLanguages,
    userCountry,
    userNameFirst,
    userInfoAbout,
    userSkillsExpertise,
  })

  return (
    <div className='ProfileBody'>
      <div className={`_row`}>
        <h2 className='_title'>{DICTIONARY['Profile'][language]}</h2>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          <Image {...propsOut.imageAvatarProps} />
        </div>
        <div className={classCol02}>
          <Input {...propsOut.inputAvatarFileProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY['Name'][language]}
          {' *'}
        </div>
        <div className={classCol02}>
          <Input {...propsOut.inputUserNameFirstProps} />
        </div>
      </div>
      <div className='_row'>
        <div className={classCol01}>
          {DICTIONARY['Expertise'][language]}
          {' *'}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectSkillsExpertizeProps} />
        </div>
      </div>
      <div className='_row'>
        <div className={classCol01}>
          {DICTIONARY['Speaking_languages'][language]}
          {' *'}
        </div>
        <div className={classCol02}>
          <SelectLanguage {...propsOut.selectUserLanguagesProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY['Country'][language]}
          {' *'}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectUserCountryProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>{DICTIONARY['About_me'][language]}</div>
        <div className={classCol02}>
          <Input {...propsOut.inputUserInfoAboutProps} />
        </div>
      </div>
    </div>
  )
}
