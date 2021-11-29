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
      <SearchFormSep />
      <CategoryCatalog />
    </div>
  )
}
