import React from 'react'

import { withPropsYrl, InputYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'

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
const FormInputNamesComponent: FormInputNamesComponentType = (props: FormInputNamesPropsType) => {
  const { classAdded, language, buttonForwardProps, handleEvents } = props

  const nameLastLabel = DICTIONARY.nameLast[language]
  const nameFirstLabel = DICTIONARY.nameFirst[language]
  const nameMiddleLabel = DICTIONARY.nameMiddle[language]

  const propsOut: FormInputNamesPropsOutType = {
    inputFirstNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'first name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
      storeFormProp: 'nameFirst',
    },
    inputMiddleNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'second name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
      storeFormProp: 'nameMiddle',
    },
    inputLastNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'last name...',
      handleEvents,
      typeEvent: 'ONCHANGE_FORMS_GROUP_PROP',
      storeFormGroup: 'profileActive',
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
      </form>
    </div>
  )
}

export const FormInputNames: FormInputNamesType = withPropsYrl({ handleEvents: handleEventsIn })(
  React.memo(FormInputNamesComponent)
)

export type {
  FormInputNamesPropsType,
  FormInputNamesPropsOutType,
  FormInputNamesComponentType,
  FormInputNamesType,
}
