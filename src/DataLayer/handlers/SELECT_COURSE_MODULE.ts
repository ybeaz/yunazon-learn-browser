import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch } = store

export const SELECT_COURSE_MODULE: IActionEvent = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('COURSE_PLATE_CLICKED')(data))

  dispatch(actionSync.SELECT_COURSE_MODULE(data))
}
