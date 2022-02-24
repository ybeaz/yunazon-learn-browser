import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { ProfilePlate } from './ProfilePlate'
import { IUser, IRootStore } from '../../Interfaces/IRootStore'

interface ProfilesMatrixArgs {}

export const ProfilesMatrix: React.FunctionComponent<ProfilesMatrixArgs> = (
  props: ProfilesMatrixArgs
): ReactElement => {
  const { users, language } = useSelector((store2: IRootStore) => store2)

  console.info('ProfilesMatrix [14]', { users, language })

  const propsOut = {}

  const getProfilesList = (profiles: IUser[]) => {
    return profiles.map((profile: IUser) => {
      const profilePlateProps = { profile }

      return <ProfilePlate {...profilePlateProps} />
    })
  }

  return <div className='ProfilesMatrix'>{getProfilesList(users)}</div>
}
