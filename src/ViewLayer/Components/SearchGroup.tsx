import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'
import { Input } from './Input'
import { Button } from './Button'

export const SearchGroup: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
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
    // handleEvents,
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
