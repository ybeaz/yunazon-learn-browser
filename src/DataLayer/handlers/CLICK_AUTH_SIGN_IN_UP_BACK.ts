import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_AUTH_SIGN_IN_UP_BACK: ActionEventType = (event, data) => {
  const { branch } = data

  const {
    componentsState: { modalFrames },
  } = getState()

  let data2

  if (branch === 'signOut') {
    data2 = []
  } else {
    dispatch(actionSync.SET_OAUTH_STAGE('signInManually'))

    data2 = [
      {
        childName: 'AuthUser',
        isActive: true,
        childProps: { scenario: { branch: 'signInManually', step: '' } },
      },
    ]
  }

  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
