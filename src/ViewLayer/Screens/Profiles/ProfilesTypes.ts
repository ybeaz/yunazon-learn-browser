import React from 'react'

import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type ProfilesComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
}

export type ProfilesPropsType = Omit<
  ProfilesComponentPropsType,
  'storeStateSlice'
>

export type ProfilesPropsOutType = Record<string, any>

/**
 * @import import { ProfilesComponentPropsType, ProfilesPropsType, ProfilesPropsOutType, ProfilesComponentType, ProfilesType } from './ProfilesTypes'
 */
export interface ProfilesComponentType
  extends React.FunctionComponent<ProfilesComponentPropsType> {
  (props: ProfilesComponentPropsType): React.ReactElement
}

export type ProfilesType = React.FunctionComponent<ProfilesPropsType>
