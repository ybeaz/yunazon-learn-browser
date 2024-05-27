import React, { ReactElement } from 'react'

import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { InputYrl } from '../../ComponentsLibrary/InputYrl/InputYrl'
import { getClasses } from '../../../Shared/getClasses'

import {
  InputGroupYrlComponentPropsType,
  InputGroupYrlPropsType,
  InputGroupYrlPropsOutType,
  InputGroupYrlComponentType,
  InputGroupYrlType,
} from './InputGroupYrlTypes'

/**
 * @description Component to render InputGroupYrl
 * @propsOut 
    InputGroupYrlProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'text',
        placeholder: 'Search...',
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        storeFormProp: 'modulesSearch',
      },
      buttonSubmitProps: {
        icon: 'MdSearch',
        classAdded: 'Button_MdSearch',
        action: { typeEvent: 'CLICK_ON_SEARCH_BUTTON' },
      },
    },
 * @import import { InputGroupYrl, InputGroupYrlPropsType } from '../ComponentsLibrary/'
 */
export const InputGroupYrl: InputGroupYrlComponentType = (
  props: InputGroupYrlComponentPropsType
) => {
  const { classAdded, inputProps, buttonSubmitProps } = props

  const propsOut: InputGroupYrlPropsOutType = {
    inputProps: {
      ...inputProps,
      classAdded: 'Input_InputGroupYrl',
    },
    buttonSubmitProps,
  }

  return (
    <div className={getClasses('InputGroupYrl', classAdded)}>
      <div className='_inputWrapper'>
        <InputYrl {...propsOut.inputProps} />
      </div>
      <ButtonYrl {...propsOut.buttonSubmitProps} />
    </div>
  )
}

export type {
  InputGroupYrlPropsType,
  InputGroupYrlPropsOutType,
  InputGroupYrlComponentType,
  InputGroupYrlType,
}
