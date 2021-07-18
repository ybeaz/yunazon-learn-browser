import { DICTIONARY } from '../../Constants/dictionary.const'
import { isParsableInt } from '../../Shared/isParsableInt'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from './getResultDataFromStore'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'
import { store } from '../../DataLayer/store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
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

    CLICK_AUTH_FACEBOOK: () => {
      handleEvents({}, { typeEvent: 'DEV_STAGE' })
    },

    CLICK_AUTH_TWITTER: () => {
      handleEvents({}, { typeEvent: 'DEV_STAGE' })
    },

    CLICK_AUTH_GOOGLE: () => {
      handleEvents({}, { typeEvent: 'DEV_STAGE' })
    },

    ONCHANGE_EMAIL_AUTH: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_EMAIL_AUTH(value))
    },

    ONCHANGE_PASSWORD_AUTH: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_PASSWORD_AUTH(value))
    },

    ONCHANGE_PASSWORD_AUTH_2: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_PASSWORD_AUTH_2(value))
    },

    SEND_AUTH_SIGNIN: () => {
      dispatch(actionAsync.SEND_AUTH_SIGNIN.REQUEST())
    },

    SEND_AUTH_SIGNUP: () => {
      dispatch(actionAsync.SEND_AUTH_SIGNUP.REQUEST())
    },

    SEND_AUTH_FORGET_PASSWORD: () => {
      handleEvents({}, { typeEvent: 'DEV_STAGE' })
    },

    CLICK_SIGNUP: () => {
      dispatch(actionSync.SET_MODAL_FRAMES([]))
      const data = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signUp', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data))
    },

    CLICK_FORGET_PASSWORD: () => {
      dispatch(actionSync.SET_MODAL_FRAMES([]))
      const data = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'forgetPassword', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data))
    },

    CLICK_AUTH_SIGN_IN_UP_BACK: () => {
      dispatch(actionSync.SET_MODAL_FRAMES([]))
      const data = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signIn', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data))
    },

    STOP_PROPAGATION: () => {
      // event.persist()
      // event.nativeEvent.stopImmediatePropagation()
      event.stopPropagation()
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
      dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())
    },

    GET_INITIAL_QUERY_SETTING: () => {
      const { si, search, searchInput, ln, language } = getParsedUrlQuery()

      const searchInputIn = !!si
        ? si
        : !!search
        ? search
        : !!searchInput
        ? searchInput
        : undefined
      const languageIn = !!ln ? ln : !!language ? language : undefined

      dispatch(
        actionSync.GET_INITIAL_QUERY_SETTING({
          languageIn,
          searchInputIn,
        })
      )
    },

    GET_COURSE_QUERY_PR_QN: () => {
      const { courseID, index } = data
      const { pr, rp, qn, nq } = getParsedUrlQuery()

      const passRateIn = !!pr
        ? parseFloat(pr)
        : !!rp
        ? parseFloat(rp)
        : undefined
      const questionNumber = !!qn ? qn : !!nq ? nq : undefined

      const isReducing = questionNumber === 'all' || qn === 'inf' ? false : true

      let questionNumberIn =
        isParsableInt(questionNumber) && parseInt(questionNumber, 10)

      dispatch(
        actionSync.GET_COURSE_QUERY_PR_QN({
          courseID,
          index,
          isReducing,
          questionNumberIn,
          passRateIn,
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
      dispatch(actionSync.TOGGLE_MEDIA_LOADED({ mediaKey, isMediaLoaded }))
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

      dispatch(actionSync.TOGGLE_START_COURSE(isStarting))
    },

    ONCHANGE_SEARCH_INPUT: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_SEARCH_INPUT(value))
    },

    SELECT_LANGUAGE: () => {
      getSavedAnanlyticsEvent(event, getAzProps('LANGUAGE_SELECTED')(data))

      dispatch(actionSync.SELECT_LANGUAGE(data))
      getSetObjToLocalStorage({ language: data })
    },

    SEND_EMAIL_DOCUMENT: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_EMAIL_SENT')(data))

      dispatch(actionAsync.SEND_EMAIL_DOCUMENT.REQUEST(data))
    },

    ONCHANGE_EMAIL_CC: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_EMAIL_CC(value))
    },

    ONCHANGE_EMAIL_TO: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_EMAIL_TO(value))
    },

    SET_MODAL_FRAMES: () => {
      dispatch(actionSync.SET_MODAL_FRAMES(data))
    },

    COPY_URL_TO_CLIPBOARD: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_LINK_COPIED')(data))

      getCopiedUrlToClipboard()
    },

    TOGGLE_IS_DOCUMENT_ADDED: () => {
      dispatch(actionSync.TOGGLE_IS_DOCUMENT_ADDED(data))
    },

    PRINT_DOCUMENT: () => {
      getSavedAnanlyticsEvent(event, getAzProps('DOCUMENT_PRINTED')(data))

      getPrintedDocumentAs()
    },

    FIND_DOCUMENT: () => {
      dispatch(actionAsync.FIND_DOCUMENT.REQUEST(data))
    },

    ADD_DOCUMENT: () => {
      const { courses } = getState()
      const options = getResultDataFromStore(courses)
      event?.preventDefault &&
        getSavedAnanlyticsEvent(
          event,
          getAzProps('PERSONAL_DATA_SUBMITTED')(options)
        )

      dispatch(actionAsync.ADD_DOCUMENT.REQUEST(data))
    },

    SET_QUESTION_SLIDE: () => {
      dispatch(actionSync.SET_QUESTION_SLIDE(data))
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

      dispatch(actionSync.PLUS_QUESTION_SLIDE(data))
    },

    ONCHANGE_FIRST_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_FIRST_NAME_MODAL(value))
    },

    ONCHANGE_MIDDLE_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_MIDDLE_NAME_MODAL(value))
    },

    ONCHANGE_LAST_NAME_MODAL: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_LAST_NAME_MODAL(value))
    },

    CLOSE_MODAL_GET_SCORES: () => {
      const { courses } = getState()
      const options = getResultDataFromStore(courses)
      event?.preventDefault &&
        getSavedAnanlyticsEvent(event, getAzProps('WENT_BACK')(options))

      dispatch(actionSync.GET_ANSWERS_DEFAULT())
      dispatch(actionSync.SET_QUESTION_SLIDE(0))
      dispatch(
        actionSync.SET_MODAL_FRAMES([
          {
            childName: 'QuestionScores',
            isActive: false,
            childProps: {},
          },
        ])
      )
    },

    PRINT_SCORES: () => {
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

      dispatch(actionSync.GET_ANSWERS_DEFAULT())
    },

    SELECT_COURSE_MODULE_CONTENTID: () => {
      dispatch(actionSync.SELECT_COURSE_MODULE_CONTENTID(data))
    },

    SELECT_COURSE_MODULE: () => {
      getSavedAnanlyticsEvent(event, getAzProps('COURSE_PLATE_CLICKED')(data))

      dispatch(actionSync.SELECT_COURSE_MODULE(data))
    },

    CLICK_CHECK: () => {
      dispatch(actionSync.CLICK_CHECK(data))
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      event.stopPropagation()

      dispatch(actionSync.TOGGLE_SIDE_NAVIGATION())

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
