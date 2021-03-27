import { store } from '../../DataLayer/store'
import { getArrCheckedChangedById } from '../../Shared/getArrCheckedChangedById'

export const handleEvents: Function = (
  event: EventListener,
  { typeEvent, data }: any
): void => {
  const output = {
    TOGGLE_SIDE_NAVIGATION: () => {
      // console.info('handleEvents [9]', { typeEvent })
      store.dispatch({ type: typeEvent })
    },
    CLICK_CHECK: () => {
      const { checkInputs, setCheckInputs, labelKey, multi } = data
      const checkInputsNext = getArrCheckedChangedById(
        checkInputs,
        labelKey,
        multi
      )
      setCheckInputs(checkInputsNext)
    },
  }

  output[typeEvent]
    ? output[typeEvent]()
    : console.info('handleEvents [error]', 'strange type', typeEvent)
}
