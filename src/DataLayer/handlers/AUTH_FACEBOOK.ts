import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const AUTH_FACEBOOK: IActionEvent = (event, data) => {
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
    id: uidExternal,
    name: userName,
  } = data

  dispatch(
    actionAsync.GET_OAUTH_UI_DATA.REQUEST({
      userNameLast,
      userNameFirst,
      picture,
      uidExternal,
      userName,
    })
  )
}
