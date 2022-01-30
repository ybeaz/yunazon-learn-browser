import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Select as SelectAntd } from 'antd'
import 'antd/dist/antd.css'

import { CATEGORIES_TO_EXCHANGE } from '../../Constants/categoriesToExchange.const'
import { getStdDictionaryOptions } from '../../shared/getStdDictionaryOptions'
import { IAddedProps } from '../../Interfaces/IAddedProps'
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
      profile: { avatar, skillsExpertise },
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
    inputNameProps: {
      classAdded: 'Input_ProfileBody_userNameFirst',
      type: 'text',
      placeholder: 'name',
      typeEvent: 'string',
      storeFormProp: 'userNameFirst',
      storeFormGroup: 'profile',
    },
    selectSkillsExpertizeProps: {
      allowClear: true,
      componentId: nanoid(),
      value: skillsExpertise,
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
  }

  const classCol01 = '_col_1'
  const classCol02 = '_col_1'

  console.info('ProfileBody [27]', { skillsExpertise })

  return (
    <div className='ProfileBody'>
      <div className={`_row`}>
        <h2 className='_title'>Profile</h2>
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
          {DICTIONARY['Communication media'][language]}
        </div>
        <div className={classCol02}>
          <Input {...propsOut.inputNameProps} />
        </div>
      </div>
      <div className='_row'>
        <div className={classCol01}>
          {DICTIONARY['Category_info_you_are_looking_for'][language]}
          {' *'}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectSkillsExpertizeProps} />
        </div>
      </div>
    </div>
  )
}
