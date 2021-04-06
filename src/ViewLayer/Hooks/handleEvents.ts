import { store } from '../../DataLayer/store'
import * as action from '../../DataLayer/index.action'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'
import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'

export const handleEvents: Function = (
  event: EventListener,
  props: any
): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent
  const { dispatch } = store

  const output = {
    CLOSE_MODAL_GET_SCORES: () => {
      console.info('handleEvents [16]', {})
      dispatch(action.TOGGLE_MODAL_GET_SCORES())
    },

    COUNT_MODULE_QUIZ_SCORE: () => {
      const {
        screenType,
        userName,
        meta,
        capture,
        description,
        contentID,
        questions,
      } = data
      const score = getAnswersChecked2(questions)
      const { total, right, wrong } = score
      dispatch(action.TOGGLE_MODAL_GET_SCORES())
      // console.info('handleEvents [13]', { score, data })
      // alert(
      //   `Вы ответили на \n общее количество вопросов - ${total} \n правильно - ${right} \n не правильно - ${wrong}`
      // )

      // getPrintScreenAsPdf(
      //   {},
      //   {
      //     screenType,
      //     userName,
      //     meta,
      //     capture,
      //     description,
      //     contentID,
      //   }
      // )

      // dispatch(action.GET_ANSWERS_DEFAULT())
    },

    SELECT_COURSE_MODULE_CONTENTID: () => {
      dispatch(action.SELECT_COURSE_MODULE_CONTENTID(data))
    },

    SELECT_COURSE_MODULE: () => {
      dispatch(action.SELECT_COURSE_MODULE(data))
    },

    CLICK_CHECK: () => {
      dispatch(action.CLICK_CHECK(data))
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      dispatch(action.TOGGLE_SIDE_NAVIGATION())
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
