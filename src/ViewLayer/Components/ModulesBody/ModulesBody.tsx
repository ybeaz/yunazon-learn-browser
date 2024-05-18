import React, { ReactElement, useEffect } from 'react'

import { ModuleType } from '../../../@types/GraphqlTypes'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getDurationFromYoutubeSnippet } from '../../../Shared/getDurationFromYoutubeSnippet'
import { ContentPlate, ContentPlatePropsType } from '../../Components/ContentPlate/ContentPlate'
import { getContentComponentName } from '../../../Shared/getContentComponentName'
import { getMultipliedTimeStr } from '../../../Shared/getMultipliedTimeStr'
import { DurationObjType, PaginationNameEnumType } from '../../../Interfaces/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'

import { getClasses } from '../../../Shared/getClasses'
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
    storeStateSlice: { screenActive, durationMultiplier, modules, isLoadedGlobalVars },
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
        thumbnails,
      }

      return <ContentPlate {...contentPlateProps} />
    })
    return <div className='AcademyMatrix__plates'>{plates}</div>
  }

  const propsOut: ModulesBodyPropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageModules'],
    },
  }

  return (
    <div className={getClasses('ModulesBody', classAdded)}>
      {' '}
      {modules.length && isLoadedGlobalVars ? (
        <div className='_plateMatrixPagination'>
          <div className='_plateMatrixWrapper'>{getPlateMatix(modules)}</div>
          <div className='_paginationNavigationWrapper'>
            <PaginationNavigation {...propsOut.paginationNavigationProps} />
          </div>
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
]
export const ModulesBody: ModulesBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(ModulesBodyComponent)
)

export type {
  ModulesBodyPropsType,
  ModulesBodyPropsOutType,
  ModulesBodyComponentType,
  ModulesBodyType,
}
