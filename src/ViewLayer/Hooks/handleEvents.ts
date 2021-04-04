import { store } from '../../DataLayer/store'
import * as action from '../../DataLayer/index.action'
import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'

export const handleEvents: Function = (
  event: EventListener,
  props: any
): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent

  const output = {
    COUNT_MODULE_QUIZ_SCORE: () => {
      const { questions } = data
      const score = getAnswersChecked2(questions)
      console.info('handleEvents [13]', { score, data })
      const { total, right, wrong } = score
      alert(
        `Вы ответили на \n общее количество вопросов - ${total} \n правильно - ${right} \n не правильно - ${wrong}`
      )
    },

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
        typeStore,
        typeEvent,
        type,
      })
}
