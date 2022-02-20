import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'
import { userStoreDefault } from '../../DataLayer/rootStoreDefault'

const { dispatch } = store

export const AUTH_SIGN_OUT: IActionEvent = (event, data) => {
  const data2 = [
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))

  window.FB.logout(function (response) {
    // console.info('handleEvents [248]', 'FB logout', { response })
  })

  dispatch(actionSync.SET_USER_PROFILE(userStoreDefault))
}
