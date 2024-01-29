import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch } = store

export const SELECT_MODULE: ActionEventType = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('COURSE_PLATE_CLICKED')(data))

  dispatch(actionSync.SELECT_MODULE(data))
}
