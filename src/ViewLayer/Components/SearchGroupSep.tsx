import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { SuccessfulCasesSep } from './SuccessfulCasesSep'
import { ServiceFunctionsSep } from './ServiceFunctionsSep'
import { HowItWorksSep } from './HowItWorksSep'
import { UsersOnline } from './UsersOnline'
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
      <UsersOnline />
      <CategoryCatalog />
      <HowItWorksSep />
      <ServiceFunctionsSep />
      <SuccessfulCasesSep />
    </div>
  )
}
