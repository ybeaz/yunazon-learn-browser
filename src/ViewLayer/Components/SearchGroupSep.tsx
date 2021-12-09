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

      <h2 className='_titleSection'>{DICTIONARY['Online'][language]}</h2>
      <UsersOnline />

      <h2 className='_titleSection'>
        {DICTIONARY['Catalog_of_Topics'][language]}
      </h2>
      <CategoryCatalog />

      <h2 className='_titleSection'>
        {DICTIONARY['Service_works_simply'][language]}
      </h2>
      <HowItWorksSep />

      <h2 className='_titleSection'>{DICTIONARY['Here_you'][language]}</h2>
      <ServiceFunctionsSep />

      {false && (
        <>
          <h2 className='_titleSection'>
            {DICTIONARY['Success_Stories'][language]}
          </h2>
          <SuccessfulCasesSep />
        </>
      )}
    </div>
  )
}
