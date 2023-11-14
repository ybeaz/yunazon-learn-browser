import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'

const { getState } = store

export const CLICK_SOCIAL_NET_BUTTON: ActionEventType = (event, data) => {
  const { buttonProps } = data
  const { documents } = getState()
  const documentsLen = documents.length
  const documentLast = documentsLen && documents[documentsLen - 1]

  const options = documentLast && {
    netTitle: buttonProps.netTitle,
    documentCapture: documentLast.capture,
    documentID: documentLast.documentID,
    courseID: documentLast.courseID,
    contentID: documentLast.contentIDs[0],
  }

  getSavedAnanlyticsEvent(event, getAzProps('CLICK_SOCIAL_NET_BUTTON')(options))
}
