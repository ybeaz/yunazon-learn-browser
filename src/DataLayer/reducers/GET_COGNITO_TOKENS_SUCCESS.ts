import { ReducerType } from '../../Interfaces/ReducerType'

export const GET_COGNITO_TOKENS_SUCCESS: ReducerType = (store, data) => {
  const { forms } = store

  const { user } = forms

  const userNext = { ...user, userAwsCognitoAuth: data }

  const formsNext = { ...forms, user: userNext }

  return { ...store, forms: formsNext }
}
