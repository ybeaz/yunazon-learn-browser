import { ProfileType } from '../../@types/GraphqlTypes'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ReducerType } from '../../Interfaces/ReducerType'
import { getUniqArrBy } from '../../Shared/getUniqArrBy'

export const SET_PROFILES: ReducerType = (
  store: RootStoreType,
  data: any
): RootStoreType => {
  const { profiles } = store
  const profilesNext = getUniqArrBy(
    ['profileID'],
    [...data, ...profiles]
  ).filter((profile: ProfileType) => profile.isActive === true)
  const storeNext = { ...store, profiles: profilesNext }
  console.info('SET_PROFILES [16]', { profiles, data, profilesNext })
  return storeNext
}
