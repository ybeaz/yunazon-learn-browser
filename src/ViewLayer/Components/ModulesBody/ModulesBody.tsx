import React, { ReactElement, useEffect } from 'react'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { ModuleType } from '../../../@types/GraphqlTypes'
import { IconYrl, withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getDurationFromYoutubeSnippet } from '../../../Shared/getDurationFromYoutubeSnippet'
import { ContentPlate, ContentPlatePropsType } from '../../Components/ContentPlate/ContentPlate'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { DurationObjType, PaginationNameEnumType } from '../../../Interfaces/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { IconLabelWithClose } from '../IconLabelWithClose/IconLabelWithClose'
import {
  ModulesBodyComponentPropsType,
  ModulesBodyPropsType,
  ModulesBodyPropsOutType,
  ModulesBodyComponentType,
  ModulesBodyType,
} from './ModulesBodyTypes'

/**
 * @description Component to render ModulesBody
 * @import import { ModulesBody, ModulesBodyPropsType, ModulesBodyPropsOutType, ModulesBodyType } 
             from '../Components/ModulesBody/ModulesBody'
 */
const ModulesBodyComponent: ModulesBodyComponentType = (props: ModulesBodyComponentPropsType) => {
  const {
    classAdded,
    headline,
    handleEvents,
    storeStateSlice: {
      screenActive,
      durationMultiplier,
      modules,
      isLoadedGlobalVars,
      tagsSearchForModules,
      modulesSearchApplied,
      pageModules,
    },
  } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [JSON.stringify(modules)])

  const getPlateMatix: Function = (modules2: ModuleType[]): ReactElement => {
    const plates = modules2.map((module: ModuleType) => {
      const {
        moduleID,
        capture,
        isCompleted,
        contentType,
        contentID,
        duration: duration2,
        tags,
        thumbnails,
      } = module

      const contentComponentName = getContentComponentName(contentType)

      const durationObj = getDurationFromYoutubeSnippet(duration2)
      const { timeReadable: duration } = durationObj
      const durationObj2: DurationObjType = getMultipliedTimeStr(duration, durationMultiplier)

      const contentPlateProps: ContentPlatePropsType = {
        key: moduleID,
        contentComponentName,
        capture,
        isCompleted,
        durationObj: durationObj2,
        moduleID,
        contentID,
        screenType: screenActive,
        tags,
        thumbnails,
      }

      return <ContentPlate {...contentPlateProps} />
    })
    return <div className='AcademyMatrix__plates'>{plates}</div>
  }

  const propsOut: ModulesBodyPropsOutType = {
    iconLabelWithCloseTagProps: {
      classAdded: '_iconLabelWithCloseTag',
      icon: 'MdOutlineTag',
      capture: tagsSearchForModules || '',
      action: {
        type: 'CLICK_ON_TAG',
        data: { tagCloud: { value: null } },
      },
    },
    iconLabelWithCloseSearchProps: {
      classAdded: '_iconLabelWithCloseSearch',
      icon: 'MdSearch',
      capture: modulesSearchApplied || '',
      action: {
        type: 'ONCHANGE_INPUT_SEARCH',
        data: { storeFormProp: 'modulesSearch', value: '' },
      },
    },
    iconArrowForwardProps: {
      classAdded: 'Icon_ArrowForward',
      icon: 'MdArrowForwardIos',
      isDisplaying: true,
    },
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageModules'],
    },
  }

  return (
    <div className={getClasses('ModulesBody', classAdded)}>
      <div className='_h2Wrapper'>
        <h2 className='_h2' onClick={() => handleEvents({}, { type: 'CLICK_ON_ALL_MODULES' })}>
          {headline}
        </h2>
        {tagsSearchForModules && (
          <div className='_iconLabelWithCloseWrapper'>
            <IconYrl {...propsOut.iconArrowForwardProps} />
            <IconLabelWithClose {...propsOut.iconLabelWithCloseTagProps} />
          </div>
        )}
        {modulesSearchApplied && (
          <div className='_iconLabelWithCloseWrapper'>
            <IconYrl {...propsOut.iconArrowForwardProps} />
            <IconLabelWithClose {...propsOut.iconLabelWithCloseSearchProps} />
          </div>
        )}
      </div>
      {modules.length && isLoadedGlobalVars ? (
        <div className='_plateMatrixPagination'>
          <div className='_plateMatrixWrapper'>{getPlateMatix(modules)}</div>
          {!(pageModules.first === 0 && pageModules.offset > modules.length) && (
            <div className='_paginationNavigationWrapper'>
              <PaginationNavigation {...propsOut.paginationNavigationProps} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'screenActive',
  'durationMultiplier',
  'modules',
  'isLoadedGlobalVars',
  'tagsSearchForModules',
  'modulesSearchApplied',
  'pageModules',
]
export const ModulesBody: ModulesBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(ModulesBodyComponent))
)

export type {
  ModulesBodyPropsType,
  ModulesBodyPropsOutType,
  ModulesBodyComponentType,
  ModulesBodyType,
}
