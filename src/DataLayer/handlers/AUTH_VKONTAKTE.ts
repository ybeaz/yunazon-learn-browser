import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const AUTH_VKONTAKTE: ActionEventType = (event, data) => {
  const {
    componentsState: { oAuthStage },
  } = getState()
  if (oAuthStage !== 'signInWithVkontakte') return

  const {
    last_name: nameLast,
    first_name: nameFirst,
    photo: picture,
    uid: userIdExternal,
  } = data

  // const dataExample = {
  //   first_name: 'Роман',
  //   hash: '1cbcfa851256b76737c355ebd2cd779b',
  //   last_name: 'Ческидов',
  //   photo:
  //     'https://sun6-21.userapi.com/s/v1/if1/afL13qbgr9g5v1YLZNMAGgx2eY_NFdBlN2QjAxyYXyoDcb8Ay8-V00YUJOpWiRTG0-U21sTQ.jpg?size=400x0&amp;quality=96&amp;crop=42,345,875,893&amp;ava=1',
  //   photo_rec:
  //     'https://sun6-21.userapi.com/s/v1/if1/t02T5kJSs9DzY4SAwLr4sbiE6NEvsrzhbcC_k5X3M6ZqMo0oErfH8W-V_K0VgP-d5lPa0ji-.jpg?size=100x0&amp;quality=96&amp;crop=59,375,788,788&amp;ava=1',
  //   session: {
  //     expire: 1627513816,
  //     mid: 36823445,
  //     secret: '70f51c998b',
  //     sid: '658e0c483a0e6bfb998cf921eb1603ca0e2c9e15d6934d693caffbea9df2b0d360fe3ff9cfb9777bea4c5',
  //     sig: '2bf1}ba46679fcc68257356730e8270af',
  //   },
  //   uid: 36823445,
  // }

  dispatch(
    actionAsync.GET_OAUTH_UI_DATA.REQUEST({
      nameLast,
      nameFirst,
      picture,
      userIdExternal: userIdExternal.toString(),
      userName: `${nameFirst} ${nameLast}`,
    })
  )
}
