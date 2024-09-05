import React from 'react'
import { TagType, ProfileType, DocumentType } from '../../../@types/index'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { GetExpertiseInfoResType } from '../../../Shared/getExpertiseInfo'
export type Certificate2BodyComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  language: RootStoreType['language']
  profile: ProfileType
  tagCloud: TagType
  expertiseInfo: GetExpertiseInfoResType
}

export type Certificate2BodyPropsType = Certificate2BodyComponentPropsType

export type Certificate2BodyPropsOutType = Record<string, any>

/**
 * @import import { Certificate2BodyComponentPropsType, Certificate2BodyPropsType, Certificate2BodyPropsOutType, Certificate2BodyComponentType, Certificate2BodyType } from './Certificate2BodyTypes'
 */
export interface Certificate2BodyComponentType
  extends React.FunctionComponent<Certificate2BodyComponentPropsType> {
  (props: Certificate2BodyComponentPropsType): React.ReactElement
}

export type Certificate2BodyType = React.FunctionComponent<Certificate2BodyPropsType>
