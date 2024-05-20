import React from 'react'
import { PaginationNavigationPropsType } from '../../Components/'
import { RootStoreType } from '../../../Interfaces/'

export type ModulesBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  headline: string
  storeStateSlice: {
    durationMultiplier: RootStoreType['scorm']['durationMultiplier']
    modules: RootStoreType['modules']
    isLoadedGlobalVars: RootStoreType['isLoaded']['isLoadedGlobalVars']
    screenActive: RootStoreType['componentsState']['screenActive']
  }
}

export type ModulesBodyPropsType = Omit<ModulesBodyComponentPropsType, 'storeStateSlice'>

export type ModulesBodyPropsOutType = {
  paginationNavigationProps: PaginationNavigationPropsType
}

/**
 * @import import { ModulesBodyComponentPropsType, ModulesBodyPropsType, ModulesBodyPropsOutType, ModulesBodyComponentType, ModulesBodyType } from './ModulesBodyTypes'
 */
export interface ModulesBodyComponentType
  extends React.FunctionComponent<ModulesBodyComponentPropsType> {
  (props: ModulesBodyComponentPropsType): React.ReactElement
}

export type ModulesBodyType = React.FunctionComponent<ModulesBodyPropsType>
