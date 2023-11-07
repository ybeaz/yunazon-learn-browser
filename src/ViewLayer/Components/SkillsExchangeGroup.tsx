import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { ProfilesMatrix } from './ProfilesMatrix'
import { Button } from '../ComponentsLibrary/Button'
import { IAction } from '../../Interfaces/IAction'
import { SuccessfulCasesSep } from './SuccessfulCasesSep'
import { ServiceFunctionsSep } from './ServiceFunctionsSep'
import { HowItWorksSep } from './HowItWorksSep'
import { UsersOnline } from './UsersOnline'
import { CategoryCatalog } from './CategoryCatalog'
import { IRootStore } from '../../Interfaces/IRootStore'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SearchFormSep } from './SearchFormSep'
interface SkillsExchangeGroupArgs {
  sfb: boolean
  scs: boolean
  sfs: boolean
  hiw: boolean
}

export const SkillsExchangeGroup: React.FunctionComponent<
  SkillsExchangeGroupArgs
> = (props: SkillsExchangeGroupArgs): ReactElement => {
  const { sfb, scs, sfs, hiw } = props

  const flags = {
    isHowItWorksSep: hiw,
    isServiceFunctionsSep: sfs,
    isSuccessfulCasesSep: scs,
    isSearchFormSepBottom: sfb,
  }

  const { language } = useSelector((store2: IRootStore) => store2)

  const propsOut = {
    buttonBackToTopProps: {
      icon: 'MdArrowRight',
      icon2: null,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_BackToTop',
      action: {} as IAction,
      isDisplaying: true,
      tooltipText: DICTIONARY['Up'][language],
      tooltipPosition: 'top',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    searchFormSepTopProps: {
      position: 'top',
    },
    searchFormSepBottomProps: {
      position: 'bottom',
    },
  }

  return (
    <div className='SkillsExchangeGroup'>
      <SearchFormSep {...propsOut.searchFormSepTopProps} />

      <h2 className='_titleSection'>Users</h2>
      <ProfilesMatrix />

      <h2 className='_titleSection'>{DICTIONARY['Online'][language]}</h2>
      <UsersOnline />

      <h2 className='_titleSection'>
        {DICTIONARY['Catalog_of_Topics'][language]}
      </h2>
      <CategoryCatalog />

      {flags.isHowItWorksSep && (
        <>
          <h2 className='_titleSection'>
            {DICTIONARY['Service_works_simply'][language]}
          </h2>
          <HowItWorksSep />
        </>
      )}

      {flags.isServiceFunctionsSep && (
        <>
          <h2 className='_titleSection'>{DICTIONARY['Here_you'][language]}</h2>
          <ServiceFunctionsSep />
        </>
      )}

      {flags.isSuccessfulCasesSep && (
        <>
          <h2 className='_titleSection'>
            {DICTIONARY['Success_Stories'][language]}
          </h2>
          <SuccessfulCasesSep />
        </>
      )}

      {flags.isSearchFormSepBottom && (
        <SearchFormSep {...propsOut.searchFormSepBottomProps} />
      )}

      <a href='/sep#id_header_SkillsExchangeMatrix'>
        <Button {...propsOut.buttonBackToTopProps} />
      </a>
    </div>
  )
}
