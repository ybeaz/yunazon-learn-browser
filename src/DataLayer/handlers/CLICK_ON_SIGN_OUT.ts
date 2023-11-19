import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_SIGN_OUT: ActionEventType = (event, data) => {
  const {
    authAwsCognitoUserData: { refresh_token },
  } = getState()

  dispatch(
    actionAsync.GET_AUTH_AWS_COGNITO_USER_REVOKED.REQUEST({
      refresh_token,
    })
  )
}
