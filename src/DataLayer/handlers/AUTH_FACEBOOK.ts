import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const AUTH_FACEBOOK: ActionEventType = (event, data) => {
  const {
    componentsState: { oAuthStage },
  } = getState()
  if (oAuthStage !== 'signInWithFacebook') return

  const {
    last_name: nameLast,
    first_name: nameFirst,
    picture: {
      data: { url: picture },
    },
    id: userIdExternal,
    name: userName,
  } = data

  dispatch(
    actionAsync.GET_OAUTH_UI_DATA.REQUEST({
      nameLast,
      nameFirst,
      picture,
      userIdExternal,
      userName,
    })
  )
}
