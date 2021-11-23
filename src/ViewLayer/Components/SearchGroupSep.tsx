import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SearchFormSep } from './SearchFormSep/SearchFormSep'

interface SearchGroupSepArgs {}

export const SearchGroupSep: React.FunctionComponent<SearchGroupSepArgs> = (
  props: SearchGroupSepArgs
): JSX.Element => {
  const { language } = useSelector((store2: IRootStore) => store2)

  return (
    <div className='SearchGroupSep'>
      <h1 className='__titleScreen'>
        {DICTIONARY['Fast_Knowledge_and_Experience_Exchange'][language]}
      </h1>
      <SearchFormSep />
    </div>
  )
}

/*
Messeging or voice chatting don't need to show your image
*/
