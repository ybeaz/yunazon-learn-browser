import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_USERID_DATA_AWS_COGNITO: ReducerType = (store, data) => {
  const { userIdDataAwsCognito } = data

  return { ...store, userIdDataAwsCognito }
}
