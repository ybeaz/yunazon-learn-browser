import React, { ReactElement } from 'react'

import { InputYrl, ButtonYrl } from '../../ComponentsLibrary/'

import {
  SearchGroupComponentPropsType,
  SearchGroupPropsType,
  SearchGroupPropsOutType,
  SearchGroupComponentType,
  SearchGroupType,
} from './SearchGroupTypes'

export const SearchGroup: SearchGroupComponentType = (
  props: SearchGroupComponentPropsType
) => {
  const propsOut: SearchGroupPropsOutType = {
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
    <div className='SearchGroup'>
      <div className='searchDiv'>
        <InputYrl {...propsOut.inputSearchProps} />
      </div>
      <ButtonYrl {...propsOut.buttonMdSearchProps} />
    </div>
  )
}
