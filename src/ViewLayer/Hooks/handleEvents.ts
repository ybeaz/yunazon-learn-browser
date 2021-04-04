import { store } from '../../DataLayer/store'
import { getArrCheckedChangedById } from '../../Shared/getArrCheckedChangedById'

export const handleEvents: Function = (
  event: EventListener,
  props: any
): void => {
  const { type: typeIn, typeEvent, data } = props
  const type = typeIn ? typeIn : typeEvent
  console.info('handleEvents [9]', { type, typeEvent, data })

  const output = {
    SELECT_COURSE_MODULE: () => {
      store.dispatch({ type, data })
    },

    CLICK_CHECK: () => {
      const {
        courseID,
        moduleID,
        questionID,
        checkInputs,
        setCheckInputs,
        optionID,
        multi,
      } = data
      console.info('handleEvents [34]', {
        courseID,
        questionID,
        optionID,
        checkInputs,
        setCheckInputs,
        multi,
      })

      store.dispatch({
        type,
        data: { courseID, moduleID, questionID, optionID },
      })

      const checkInputsNext = getArrCheckedChangedById(
        checkInputs,
        optionID,
        multi
      )
      setCheckInputs(checkInputsNext)
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      // console.info('handleEvents [9]', { typeEvent })
      store.dispatch({ type })
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
