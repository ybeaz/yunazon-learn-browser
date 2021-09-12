import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_AUTH_GOOGLE = (event: any, data: any): void => {
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
