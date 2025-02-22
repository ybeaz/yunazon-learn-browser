import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_AUTH_VKONTAKTE: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_OAUTH_STAGE('signInWithVkontakte'))

  const data2 = [
    {
      childName: 'AuthUser',
      isActive: true,
      childProps: { scenario: { branch: 'signInWithVkontakte', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
