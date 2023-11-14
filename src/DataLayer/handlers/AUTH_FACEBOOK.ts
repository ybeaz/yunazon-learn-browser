import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const AUTH_FACEBOOK: ActionEventType = (event, data) => {
  const {
    componentsState: { oAuthStage },
  } = getState()
  if (oAuthStage !== 'signInWithFacebook') return

  const {
    last_name: userNameLast,
    first_name: userNameFirst,
    picture: {
      data: { url: picture },
    },
    id: userIdExternal,
    name: userName,
  } = data

  dispatch(
    actionAsync.GET_OAUTH_UI_DATA.REQUEST({
      userNameLast,
      userNameFirst,
      picture,
      userIdExternal,
      userName,
    })
  )
}
