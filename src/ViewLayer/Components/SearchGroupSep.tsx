import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { InstallMobileApp } from './InstallMobileApp'
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
        {DICTIONARY['Fast_Knowledge_and_Experience_Exchange'][language]}
      </h1>
      <SearchFormSep />
      <InstallMobileApp />
      <CategoryCatalog />
    </div>
  )
}
