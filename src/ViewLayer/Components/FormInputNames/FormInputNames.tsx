import React from 'react'

import { withPropsYrl, InputYrl, ButtonYrl } from '../../ComponentsLibrary'
import { getClasses } from '../../../Shared/getClasses'
import { DICTIONARY } from '../../../Constants/dictionary.const'

import {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
} from './FormInputNamesTypes'

/**
 * @description Component to render FormInputNames
 * @import import { FormInputNames, FormInputNamesPropsType, FormInputNamesType } 
             from '../Components/FormInputNames/FormInputNames'
 */
const FormInputNamesComponent: FormInputNamesComponentType = (
  props: FormInputNamesPropsType
) => {
  const { classAdded, language, buttonForwardProps } = props

  const lastNameLabel = DICTIONARY.userNameLast[language]
  const firstNameLabel = DICTIONARY.userNameFirst[language]
  const middleNameLabel = DICTIONARY.userNameMiddle[language]

  const propsOut: FormInputNamesPropsOutType = {
    inputFirstNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'first name...',
      typeEvent: 'ONCHANGE_FIRST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameFirst',
    },
    inputMiddleNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'second name...',
      typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameMiddle',
    },
    inputLastNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'last name...',
      typeEvent: 'ONCHANGE_LAST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameLast',
    },
    buttonForwardProps,
  }

  return (
    <div className={getClasses('FormInputNames', classAdded)}>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>{firstNameLabel}*</label>
          <InputYrl {...propsOut.inputFirstNameProps} />
        </div>
        <div className='_group'>
          <label className='_label'>{lastNameLabel}*</label>
          <InputYrl {...propsOut.inputLastNameProps} />
        </div>
        <div className='_group'>
          <label className='_label'>{middleNameLabel}</label>
          <InputYrl {...propsOut.inputMiddleNameProps} />
        </div>
        <div className='_buttons'>
          {/* <ButtonYrl {...buttonCancelProps} /> */}
          <ButtonYrl {...propsOut.buttonForwardProps} />
        </div>
      </form>
    </div>
  )
}

export const FormInputNames = withPropsYrl({})(
  React.memo(FormInputNamesComponent)
)

export type {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
}
