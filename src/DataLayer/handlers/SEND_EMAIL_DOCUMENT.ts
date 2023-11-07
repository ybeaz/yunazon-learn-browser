import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { dispatch } = store

export const SEND_EMAIL_DOCUMENT: IActionEvent = (event, data) => {
  getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_EMAIL_SENT')(data))

  dispatch(actionAsync.SEND_EMAIL_DOCUMENT.REQUEST(data))
}
