import { ReducerType } from '../../Interfaces/ReducerType'

export const SET_AUTH_AWS_COGNITO_USER_DATA: ReducerType = (store, data) => {
  const { source, authAwsCognitoUserData: authAwsCognitoUserDataIn } = data
  const refresh_token_in = authAwsCognitoUserDataIn?.refresh_token

  const refresh_token_localStorage = localStorage.getItem('refresh_token')

  const {
    authAwsCognitoUserData: { refresh_token: refresh_token_storeStateApp },
  } = store

  let refresh_token = ''
  if (refresh_token_in) refresh_token = refresh_token_in
  else if (refresh_token_storeStateApp)
    refresh_token = refresh_token_storeStateApp
  else if (refresh_token_localStorage)
    refresh_token = refresh_token_localStorage

  const authAwsCognitoUserDataNext = {
    ...authAwsCognitoUserDataIn,
    refresh_token,
  }

  return { ...store, authAwsCognitoUserData: authAwsCognitoUserDataNext }
}
