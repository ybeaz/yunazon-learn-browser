import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOpenedUrlInNewTab } from 'yourails_common'

const { dispatch, getState } = store

export const AUTH_GOOGLE: ActionEventType = (event, data) => {
  const {
    componentsState: { oAuthStage },
  } = getState()
  if (oAuthStage !== 'signInWithGoogle') return

  const response = data && data[0]

  if (response === null) {
    const data2 = [
      {
        childName: 'AuthUser',
        isActive: true,
        childProps: {
          scenario: {
            branch: 'signInWithGoogle',
            step: 'opt_out_or_no_session',
          },
        },
      },
    ]
    dispatch(actionSync.SET_MODAL_FRAMES(data2))

    window.google.accounts.id.prompt((notification: any) => {
      console.log('handleEvents [147]', notification)
    })
    getOpenedUrlInNewTab('https://accounts.google.com/')
    return
  }

  const { clientId, credential, select_by } = response
  dispatch(
    actionAsync.GET_OAUTH_GOOGLE.REQUEST({
      clientId,
      credential,
      select_by,
    })
  )
}
