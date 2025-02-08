import React, { ReactElement } from 'react'

import { useNavigate } from 'react-router-dom'

import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from 'yourails_common'
import { SelectLanguage, SelectLanguagePropsType } from '../SelectLanguage'
import { getSideNavigationItemsPropsArr } from './getSideNavigationItemsPropsArr'
import { ButtonYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { withPropsYrl } from 'yourails_common'
import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'

import {
  GetSideNavigationItemsResType,
  SideNavigationComponentPropsType,
  SideNavigationPropsType,
  SideNavigationPropsOutType,
  SideNavigationComponentType,
  SideNavigationType,
} from './SideNavigationTypes'

/**
 * @description Component to render SideNavigation
 * @import import { SideNavigation, SideNavigationPropsType, SideNavigationPropsOutType, SideNavigationType } 
             from '../Components/SideNavigation/SideNavigation'
 */
const SideNavigationComponent: SideNavigationComponentType = (
  props: SideNavigationComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { sub, language, isSideNavLeftVisible },
    handleEvents,
  } = props

  const navigate = useNavigate()

  const sideNavigationItemsPropsArr: GetSideNavigationItemsResType[] =
    getSideNavigationItemsPropsArr({
      navigate,
      sub,
      language,
      handleEvents,
    })

  const getSiteMenuItems: Function = (
    sideNavigationItemsPropsArrIn: GetSideNavigationItemsResType[]
  ): ReactElement[] => {
    return sideNavigationItemsPropsArrIn.map(
      (sideNavigationItemsProp: GetSideNavigationItemsResType, index: number) => {
        const { navLinkProps, buttonYrlProps } = sideNavigationItemsProp
        if (navLinkProps) {
          return (
            <div key={`sideNavLinkItem-${index}`} className='_item'>
              <NavLinkWithQuery {...navLinkProps}>
                <ButtonYrl {...buttonYrlProps} />
              </NavLinkWithQuery>
            </div>
          )
        }
        return (
          <div key={`sideNavigationItem-${index}`} className='_item'>
            <ButtonYrl {...buttonYrlProps} />
          </div>
        )
      }
    )
  }

  const classNameAdd = isSideNavLeftVisible ? 'SideNavigation_show' : ''

  const languageSelectProps: SelectLanguagePropsType = {
    LANGUAGES: LANGUAGES_APP,
    language,
    mode: null,
    typeEvent: 'SELECT_LANGUAGE_APP',
    classAdded: 'SelectLanguage__AppLanguage',
    languagesSelected: [{ value: language }],
  }

  const propsOut: SideNavigationPropsOutType = {}

  return (
    <div
      className={`SideNavigation ${classNameAdd}`}
      onClick={event => handleEvents(event, { typeEvent: 'SET_SIDE_NAVIGATION_LEFT' })}
    >
      <div
        className='__content'
        // onClick={event => handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })}
      >
        <div className='__menuGroup'>
          <div className='_groupItem _languageSelect'>
            <SelectLanguage {...languageSelectProps} />
          </div>
          {getSiteMenuItems(sideNavigationItemsPropsArr)}
        </div>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['sub', 'language', 'isSideNavLeftVisible']

export const SideNavigation: React.FunctionComponent = withPropsYrl({
  handleEvents: handleEventsIn,
})(withStoreStateSelectedYrl(storeStateSliceProps, React.memo(SideNavigationComponent)))

export type {
  SideNavigationPropsType,
  SideNavigationPropsOutType,
  SideNavigationComponentType,
  SideNavigationType,
}
