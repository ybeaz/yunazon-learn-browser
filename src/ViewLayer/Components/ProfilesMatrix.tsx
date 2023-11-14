import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { ProfilePlate } from './ProfilePlate'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { UserType } from '../../Interfaces/UserType'

interface ProfilesMatrixArgs {}

export const ProfilesMatrix: React.FunctionComponent<ProfilesMatrixArgs> = (
  props: ProfilesMatrixArgs
): ReactElement => {
  const { users, language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  const getProfilesList = (profiles: UserType[]) => {
    return profiles.map((profile: UserType) => {
      const profilePlateProps = { language, profile }

      return <ProfilePlate {...profilePlateProps} />
    })
  }

  return <div className='ProfilesMatrix'>{getProfilesList(users)}</div>
}
