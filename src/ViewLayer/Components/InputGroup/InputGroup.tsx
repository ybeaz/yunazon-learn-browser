import React, { ReactElement } from 'react'

import { InputYrl, ButtonYrl } from '../../ComponentsLibrary/'

import {
  InputGroupComponentPropsType,
  InputGroupPropsType,
  InputGroupPropsOutType,
  InputGroupComponentType,
  InputGroupType,
} from './InputGroupTypes'

export const InputGroup: InputGroupComponentType = (
  props: InputGroupComponentPropsType
) => {
  const propsOut: InputGroupPropsOutType = {
    inputSearchProps: {
      classAdded: 'Input_search',
      type: 'text',
      placeholder: 'Search...',
      typeEvent: 'ONCHANGE_SEARCH_INPUT',
      typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
      storeFormProp: 'searchInput',
    },
    buttonMdSearchProps: {
      icon: 'MdSearch',
      classAdded: 'Button_MdSearch',
      action: { typeEvent: 'CLICK_ON_SEARCH_BUTTON' },
    },
  }

  return (
    <div className='InputGroup'>
      <div className='searchDiv'>
        <InputYrl {...propsOut.inputSearchProps} />
      </div>
      <ButtonYrl {...propsOut.buttonMdSearchProps} />
    </div>
  )
}
