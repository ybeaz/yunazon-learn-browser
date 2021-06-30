import { DICTIONARY } from '../../Constants/dictionary.const'
import { isParsableInt } from '../../Shared/isParsableInt'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from './getResultDataFromStore'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'
import { store } from '../../DataLayer/store'
import * as action from '../../DataLayer/index.action'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'

interface Props {
  typeEvent: string
  type?: string
  data: any
}

export const handleEvents: Function = (event: any, props: Props): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent
  const { dispatch, getState } = store

  const output = {
    DEV_STAGE: () => {
      const { language } = getState()
      const message = DICTIONARY.weAreWorkingOnThis[language]
      alert(message)
    },

    CREATE_COURSE() {
      const options = data
      getSavedAnanlyticsEvent(
        event,
        getAzProps('CLICK_ADD_COURSE_BUTTON')(options)
      )
      this.DEV_STAGE()
    },

    GO_HOME: () => {
      const { history } = data
      history.push('/home')
      dispatch(action.TOGGLE_SIDE_NAVIGATION())
    },

    REDUCE_QUESTIONS_NUMBER: () => {
      const { courseID, index } = data
      const { qn, nq } = getParsedUrlQuery()
      const questionNumber = qn || nq

      const isReducing = questionNumber === 'all' || qn === 'inf' ? false : true
      let questionNumberIn =
        isParsableInt(questionNumber) && parseInt(questionNumber, 10)

      dispatch(
        action.REDUCE_QUESTIONS_NUMBER({
          courseID,
          index,
          isReducing,
          questionNumberIn,
        })
      )
    },

    CLICK_SOCIAL_NET_BUTTON: () => {
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

      getSavedAnanlyticsEvent(
        event,
        getAzProps('CLICK_SOCIAL_NET_BUTTON')(options)
      )
    },

    GO_BACK_FROM_CERTIFICATE: () => {
      getSavedAnanlyticsEvent(
        event,
        getAzProps('FROM_CERTIFICATE_WENT_BACK')(data)
      )
    },

    CLICK_LOGO_GROUP: () => {
      getSavedAnanlyticsEvent(event, getAzProps('LOGO_CLICKED')())
    },

    SAVE_ANALYTICS_INIT_DATA: () => {
      getSavedAnanlyticsInitData()
    },

    TOGGLE_MEDIA_LOADED: () => {
      const { mediaKey, isMediaLoaded } = data
      dispatch(action.TOGGLE_MEDIA_LOADED({ mediaKey, isMediaLoaded }))
    },

    TOGGLE_START_COURSE: () => {
      const { isStarting, courseCapture, courseID, moduleID, contentID } = data
      event?.preventDefault &&
        isStarting &&
        getSavedAnanlyticsEvent(
          event,
          getAzProps('MODULE_STARTED')({
            courseCapture,
            courseID,
            moduleID,
            contentID,
          })
        )

      dispatch(action.TOGGLE_START_COURSE(isStarting))
    },

    ONCHANGE_SEARCH_INPUT: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_SEARCH_INPUT(value))
    },

    SELECT_LANGUAGE: () => {
      getSavedAnanlyticsEvent(event, getAzProps('LANGUAGE_SELECTED')(data))

      dispatch(action.SELECT_LANGUAGE(data))
      getSetObjToLocalStorage({ language: data })
    },

    SEND_EMAIL_DOCUMENT: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_EMAIL_SENT')(data))

      dispatch(action.SEND_EMAIL_DOCUMENT.REQUEST(data))
    },

    ONCHANGE_EMAIL_CC: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_EMAIL_CC(value))
    },

    ONCHANGE_EMAIL_TO: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_EMAIL_TO(value))
    },

    TOGGLE_MODAL_FRAME: () => {
      dispatch(action.TOGGLE_MODAL_FRAME(data))
    },

    COPY_URL_TO_CLIPBOARD: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_LINK_COPIED')(data))

      getCopiedUrlToClipboard()
    },

    TOGGLE_IS_DOCUMENT_ADDED: () => {
      dispatch(action.TOGGLE_IS_DOCUMENT_ADDED(data))
    },

    PRINT_DOCUMENT: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_PRINTED')(data))

      getPrintedDocumentAs()
    },

    FIND_DOCUMENT: () => {
      dispatch(action.FIND_DOCUMENT.REQUEST(data))
    },

    ADD_DOCUMENT: () => {
      const { courses } = getState()
      const options = getResultDataFromStore(courses)

      event?.preventDefault &&
        getSavedAnanlyticsEvent(
          event,
          getAzProps('PERSONAL_DATA_SUBMITTED')(options)
        )

      dispatch(action.ADD_DOCUMENT.REQUEST(data))
    },

    SET_QUESTION_SLIDE: () => {
      dispatch(action.SET_QUESTION_SLIDE(data))
    },

    PLUS_QUESTION_SLIDE: () => {
      const { step } = data
      const {
        courses,
        componentsState: { questionsSlideNumber },
      } = getState()

      const { courseCapture } = getResultDataFromStore(courses)
      const options = { courseCapture, questionsSlideNumber }
      event?.preventDefault &&
        step === 1 &&
        getSavedAnanlyticsEvent(
          event,
          getAzProps('QUESTIONS_STEPPED_FORWARD')(options)
        )

      dispatch(action.PLUS_QUESTION_SLIDE(data))
    },

    ONCHANGE_FIRST_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_FIRST_NAME_MODAL(value))
    },

    ONCHANGE_MIDDLE_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_MIDDLE_NAME_MODAL(value))
    },

    ONCHANGE_LAST_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(action.ONCHANGE_LAST_NAME_MODAL(value))
    },

    CLOSE_MODAL_GET_SCORES: () => {
      const { courses } = getState()
      const options = getResultDataFromStore(courses)
      event?.preventDefault &&
        getSavedAnanlyticsEvent(event, getAzProps('WENT_BACK')(options))

      dispatch(action.GET_ANSWERS_DEFAULT())
      dispatch(action.SET_QUESTION_SLIDE(0))
      dispatch(action.TOGGLE_MODAL_FRAME(false))
    },

    OPEN_MODAL_GET_SCORES: () => {
      const { courses } = getState()
      const options = getResultDataFromStore(courses)
      event?.preventDefault &&
        getSavedAnanlyticsEvent(event, getAzProps('RESULTS_SUBMITTED')(options))

      dispatch(action.TOGGLE_MODAL_FRAME(true))
    },

    PRINT_SCORES: () => {
      dispatch(action.TOGGLE_MODAL_FRAME(false))

      const {
        screenType,
        userName,
        userEmail,
        capture,
        courseID,
        moduleID,
        contentID,
        meta,
        description,
      } = data

      getPrintScreenAsPdf({
        screenType,
        userName,
        meta,
        capture,
        description,
        contentID,
      })

      dispatch(action.GET_ANSWERS_DEFAULT())
    },

    COUNT_MODULE_QUIZ_SCORE: () => {
      dispatch(action.TOGGLE_MODAL_FRAME(true))
    },

    SELECT_COURSE_MODULE_CONTENTID: () => {
      dispatch(action.SELECT_COURSE_MODULE_CONTENTID(data))
    },

    SELECT_COURSE_MODULE: () => {
      getSavedAnanlyticsEvent(event, getAzProps('COURSE_PLATE_CLICKED')(data))

      dispatch(action.SELECT_COURSE_MODULE(data))
    },

    CLICK_CHECK: () => {
      dispatch(action.CLICK_CHECK(data))
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      dispatch(action.TOGGLE_SIDE_NAVIGATION())

      getSavedAnanlyticsEvent(event, getAzProps('SIDE_PANEL_TOGGLED')())
    },
  }

  output[type]
    ? output[type]()
    : console.info('handleEvents [error]', 'strange type', {
        typeStore,
        typeEvent,
        type,
        data,
      })
}
