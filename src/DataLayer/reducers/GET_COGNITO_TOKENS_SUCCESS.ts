import { IReducer } from '../../Interfaces/IReducer'

export const GET_COGNITO_TOKENS_SUCCESS: IReducer = (store, data) => {
  const { forms } = store

  const { user } = forms

  const userNext = { ...user, userAwsCognitoAuth: data }

  const formsNext = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
