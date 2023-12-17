import React from 'react'

import { InputYrl, ButtonYrl } from '../../ComponentsLibrary/'
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

  const nameLastLabel = DICTIONARY.nameLast[language]
  const nameFirstLabel = DICTIONARY.nameFirst[language]
  const nameMiddleLabel = DICTIONARY.nameMiddle[language]

  const propsOut: FormInputNamesPropsOutType = {
    inputFirstNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'first name...',
      typeEvent: 'ONCHANGE_FIRST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'nameFirst',
    },
    inputMiddleNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'second name...',
      typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'nameMiddle',
    },
    inputLastNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'last name...',
      typeEvent: 'ONCHANGE_LAST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'nameLast',
    },
    buttonForwardProps,
  }

  return (
    <div className={getClasses('FormInputNames', classAdded)}>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>{nameFirstLabel}*</label>
          <InputYrl {...propsOut.inputFirstNameProps} />
        </div>
        <div className='_group'>
          <label className='_label'>{nameLastLabel}*</label>
          <InputYrl {...propsOut.inputLastNameProps} />
        </div>
        <div className='_group'>
          <label className='_label'>{nameMiddleLabel}</label>
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

export const FormInputNames = React.memo(FormInputNamesComponent)

export type {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
}
