import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const CLICK_AUTH_GOOGLE: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_OAUTH_STAGE('signInWithGoogle'))

  const data2 = [
    {
      childName: 'AuthUser',
      isActive: true,
      childProps: { scenario: { branch: 'signInWithGoogle', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))

  setTimeout(() => {
    try {
      window.google.accounts.id.prompt()
    } catch (error) {
      console.error('handleEvents [71]', { message: error.message })
    }
  }, 100)
}
