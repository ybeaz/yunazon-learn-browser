import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { handleEvents } from '../index.handleEvents'

export const CREATE_COURSE = (event: any, data: any): void => {
  const options = data
  getSavedAnanlyticsEvent(event, getAzProps('CLICK_ADD_COURSE_BUTTON')(options))
  handleEvents({}, { typeEvent: 'DEV_STAGE' })
}
