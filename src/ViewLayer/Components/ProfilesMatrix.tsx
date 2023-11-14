import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { ProfilePlate } from './ProfilePlate'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { IUser } from '../../Interfaces/IUser'

interface ProfilesMatrixArgs {}

export const ProfilesMatrix: React.FunctionComponent<ProfilesMatrixArgs> = (
  props: ProfilesMatrixArgs
): ReactElement => {
  const { users, language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  const getProfilesList = (profiles: IUser[]) => {
    return profiles.map((profile: IUser) => {
      const profilePlateProps = { language, profile }

      return <ProfilePlate {...profilePlateProps} />
    })
  }

  return <div className='ProfilesMatrix'>{getProfilesList(users)}</div>
}
