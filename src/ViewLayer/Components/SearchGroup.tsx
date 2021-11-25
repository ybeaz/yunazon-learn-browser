import React, { ReactElement } from 'react'

import { Input } from './Input'
import { Button } from './Button'

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
        <Input {...inputSearchProps} />
      </div>
      <Button {...buttonMdSearchProps} />
    </div>
  )
}
