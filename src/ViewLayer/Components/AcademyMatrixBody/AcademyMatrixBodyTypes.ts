import React from 'react'
import { TagsCloudBodyPropsType } from '../TagsCloudBody/TagsCloudBodyTypes'
import { ModulesBodyPropsType } from '../ModulesBody/ModulesBodyTypes'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type AcademyMatrixBodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type AcademyMatrixBodyPropsType = Omit<
  AcademyMatrixBodyComponentPropsType,
  'storeStateSlice'
>

export type AcademyMatrixBodyPropsOutType = {
  tagsCloudBodyProps: TagsCloudBodyPropsType
  modulesBodyProps: ModulesBodyPropsType
}

/**
 * @import import { AcademyMatrixBodyComponentPropsType, AcademyMatrixBodyPropsType, AcademyMatrixBodyPropsOutType, AcademyMatrixBodyComponentType, AcademyMatrixBodyType } from './AcademyMatrixBodyTypes'
 */
export interface AcademyMatrixBodyComponentType
  extends React.FunctionComponent<AcademyMatrixBodyComponentPropsType> {
  (props: AcademyMatrixBodyComponentPropsType): React.ReactElement
}

export type AcademyMatrixBodyType = React.FunctionComponent<AcademyMatrixBodyPropsType>
