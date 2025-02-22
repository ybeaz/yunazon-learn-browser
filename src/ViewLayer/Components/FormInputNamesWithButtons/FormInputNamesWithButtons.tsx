import React from 'react'

import classNames from 'classnames'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { FormInputNames } from '../FormInputNames/FormInputNames'
import { ButtonYrl } from 'yourails_common'
import {
  FormInputNamesWithButtonsComponentPropsType,
  FormInputNamesWithButtonsPropsType,
  FormInputNamesWithButtonsPropsOutType,
  FormInputNamesWithButtonsComponentType,
  FormInputNamesWithButtonsType,
} from './FormInputNamesWithButtonsTypes'

/**
 * @description Component to render FormInputNamesWithButtons
 * @import import { FormInputNamesWithButtons, FormInputNamesWithButtonsPropsType, FormInputNamesWithButtonsPropsOutType, FormInputNamesWithButtonsType } 
             from '../Components/FormInputNamesWithButtons/FormInputNamesWithButtons'
 */
const FormInputNamesWithButtonsComponent: FormInputNamesWithButtonsComponentType = (
  props: FormInputNamesWithButtonsComponentPropsType
) => {
  const { classAdded, formInputNamesProps, buttonConfirmEditNameProps, isDisplaying, isVisible } =
    props

  const propsOut: FormInputNamesWithButtonsPropsOutType = {
    formInputNamesProps,
    buttonConfirmEditNameProps,
  }

  return (
    <div
      className={classNames('FormInputNamesWithButtons', {
        [classAdded]: !!classAdded,
        FormInputNamesWithButtons_display_none: isDisplaying === false,
        FormInputNamesWithButtons_visible_none: isVisible === false,
      })}
    >
      <FormInputNames {...propsOut.formInputNamesProps} />
      <ButtonYrl {...propsOut.buttonConfirmEditNameProps} />
    </div>
  )
}

const FormInputNamesWithButtons: FormInputNamesWithButtonsType = React.memo(
  FormInputNamesWithButtonsComponent
)

export type { FormInputNamesWithButtonsPropsType, FormInputNamesWithButtonsType }
export { FormInputNamesWithButtons }
