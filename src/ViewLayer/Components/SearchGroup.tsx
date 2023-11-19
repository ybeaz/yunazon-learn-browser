import React, { ReactElement } from 'react'

import { InputYrl } from '../ComponentsLibrary/InputYrl/InputYrl'
import { ButtonYrl } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'

export const SearchGroup: React.FunctionComponent<any> = (
  props: any
): ReactElement => {
  const inputSearchProps = {
    classAdded: 'Input_search',
    type: 'text',
    placeholder: 'Search...',
    typeEvent: 'ONCHANGE_SEARCH_INPUT',
    storeFormProp: 'searchInput',
  }

  const buttonMdSearchProps = {
    icon: 'MdSearch',
    classAdded: 'Button_MdSearch',
    // action: { typeEvent: ''}
  }

  return (
    <div className='SearchGroup'>
      <div className='searchDiv'>
        <InputYrl {...inputSearchProps} />
      </div>
      <ButtonYrl {...buttonMdSearchProps} />
    </div>
  )
}
