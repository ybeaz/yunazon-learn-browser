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
    last_name: familyName,
    first_name: givenName,
    picture: {
      data: { url: picture },
    },
    id: uidExternal,
    name: userName,
  } = data

  dispatch(
    actionAsync.GET_OAUTH_UI_DATA.REQUEST({
      familyName,
      givenName,
      picture,
      uidExternal,
      userName,
    })
  )
}
