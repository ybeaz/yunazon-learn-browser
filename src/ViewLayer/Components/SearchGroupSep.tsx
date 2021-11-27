import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { CategoryCatalog } from './CategoryCatalog'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SearchFormSep } from './SearchFormSep/SearchFormSep'

interface SearchGroupSepArgs {}

export const SearchGroupSep: React.FunctionComponent<SearchGroupSepArgs> = (
  props: SearchGroupSepArgs
): ReactElement => {
  const { language } = useSelector((store2: IRootStore) => store2)

  return (
    <div className='SearchGroupSep'>
      <h1 className='__titleScreen'>
        {DICTIONARY['Knowledge_Exchange_and_Useful_Contacts'][language]}
      </h1>
      <SearchFormSep />
      <CategoryCatalog />
    </div>
  )
}
