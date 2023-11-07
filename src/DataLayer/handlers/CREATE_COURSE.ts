import { IActionEvent } from '../../Interfaces/IActionEvent'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { handleEvents } from '../index.handleEvents'

export const CREATE_COURSE: IActionEvent = (event, data) => {
  const options = data
  getSavedAnanlyticsEvent(event, getAzProps('CLICK_ADD_COURSE_BUTTON')(options))
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
