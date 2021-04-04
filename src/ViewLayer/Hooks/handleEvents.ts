import { store } from '../../DataLayer/store'
import * as action from '../../DataLayer/index.action'

export const handleEvents: Function = (
  event: EventListener,
  props: any
): void => {
  const { type: typeIn, typeEvent, data } = props
  const type = typeIn ? typeIn : typeEvent

  const output = {
    SELECT_COURSE_MODULE_CONTENTID: () => {
      store.dispatch(action.SELECT_COURSE_MODULE_CONTENTID(data))
    },

    SELECT_COURSE_MODULE: () => {
      store.dispatch(action.SELECT_COURSE_MODULE(data))
    },

    CLICK_CHECK: () => {
      store.dispatch(action.CLICK_CHECK(data))
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      store.dispatch(action.TOGGLE_SIDE_NAVIGATION())
    },
  }

  output[type]
    ? output[type]()
    : console.info('handleEvents [error]', 'strange type', {
        typeIn,
        typeEvent,
        type,
      })
}
