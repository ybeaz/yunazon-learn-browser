import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { getAzProps } from '../../Analytics/getAzProps'
import { getCopiedUrlToClipboard } from '../../Shared/getCopiedUrlToClipboard'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { getPrintedDocumentAs } from '../../Shared/getPrintedDocumentAs'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'
import { getResultDataFromStore } from './getResultDataFromStore'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'
import { getSetObjToLocalStorage } from '../../Shared/getSetObjToLocalStorage'
import { isParsableInt } from '../../Shared/isParsableInt'
import { store } from '../../DataLayer/store'
import { userStoreDefault } from '../../DataLayer/rootStoreDefault'

declare global {
  interface Window {
    google: any
  }
}

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

    SET_OAUTH_FB_SCRIPT_STATE: () => {
      dispatch(actionSync.SET_OAUTH_FB_SCRIPT_STATE(data))
    },

    SET_OAUTH_VK_SCRIPT_STATE: () => {
      dispatch(actionSync.SET_OAUTH_VK_SCRIPT_STATE(data))
    },

    SET_OAUTH_GOOGLE_SCRIPT_STATE: () => {
      dispatch(actionSync.SET_OAUTH_GOOGLE_SCRIPT_STATE(data))
    },

    AUTH_FACEBOOK: () => {
      const {
        componentsState: { oAuthStage },
      } = getState()
      if (oAuthStage !== 'signInWithFacebook') return

      const {
        last_name: familyName,
        first_name: givenName,
        picture: {
          data: { url: picture },
        },
        id: uidExternal,
        name: userName,
      } = data

      dispatch(
        actionAsync.GET_OAUTH_UI_DATA.REQUEST({
          familyName,
          givenName,
          picture,
          uidExternal,
          userName,
        })
      )
    },

    AUTH_VKONTAKTE: () => {
      const {
        componentsState: { oAuthStage },
      } = getState()
      if (oAuthStage !== 'signInWithVkontakte') return

      const {
        last_name: familyName,
        first_name: givenName,
        photo: picture,
        uid: uidExternal,
      } = data

      // const dataExample = {
      //   first_name: 'Роман',
      //   hash: '1cbcfa851256b76737c355ebd2cd779b',
      //   last_name: 'Ческидов',
      //   photo:
      //     'https://sun6-21.userapi.com/s/v1/if1/afL13qbgr9g5v1YLZNMAGgx2eY_NFdBlN2QjAxyYXyoDcb8Ay8-V00YUJOpWiRTG0-U21sTQ.jpg?size=400x0&amp;quality=96&amp;crop=42,345,875,893&amp;ava=1',
      //   photo_rec:
      //     'https://sun6-21.userapi.com/s/v1/if1/t02T5kJSs9DzY4SAwLr4sbiE6NEvsrzhbcC_k5X3M6ZqMo0oErfH8W-V_K0VgP-d5lPa0ji-.jpg?size=100x0&amp;quality=96&amp;crop=59,375,788,788&amp;ava=1',
      //   session: {
      //     expire: 1627513816,
      //     mid: 36823445,
      //     secret: '70f51c998b',
      //     sid: '658e0c483a0e6bfb998cf921eb1603ca0e2c9e15d6934d693caffbea9df2b0d360fe3ff9cfb9777bea4c5',
      //     sig: '2bf1}ba46679fcc68257356730e8270af',
      //   },
      //   uid: 36823445,
      // }

      dispatch(
        actionAsync.GET_OAUTH_UI_DATA.REQUEST({
          familyName,
          givenName,
          picture,
          uidExternal: uidExternal.toString(),
          userName: `${givenName} ${familyName}`,
        })
      )
    },

    AUTH_GOOGLE: () => {
      const {
        componentsState: { oAuthStage },
      } = getState()
      if (oAuthStage !== 'signInWithGoogle') return

      const [{ clientId, credential, select_by }] = data
      dispatch(
        actionAsync.GET_OAUTH_GOOGLE.REQUEST({
          clientId,
          credential,
          select_by,
        })
      )
    },

    CLICK_AUTH_FACEBOOK: () => {
      dispatch(actionSync.SET_OAUTH_STAGE('signInWithFacebook'))

      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signInWithFacebook', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))
    },

    CLICK_AUTH_VKONTAKTE: () => {
      dispatch(actionSync.SET_OAUTH_STAGE('signInWithVkontakte'))

      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signInWithVkontakte', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))
    },

    CLICK_AUTH_GOOGLE: () => {
      dispatch(actionSync.SET_OAUTH_STAGE('signInWithGoogle'))

      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signInWithGoogle', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))

      setTimeout(() => {
        try {
          window.google.accounts.id.prompt()
        } catch (error) {
          console.error('handleEvents [71]', { message: error.message })
        }
      }, 100)
    },

    ONCHANGE_USER_NAME_AUTH: () => {
      const { value } = event.target as HTMLInputElement
      dispatch(actionSync.ONCHANGE_USER_NAME_AUTH(value))
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

    GET_AUTH_SIGN_IN: () => {
      dispatch(actionAsync.GET_AUTH_SIGN_IN.REQUEST())
    },

    GET_AUTH_SIGN_UP: () => {
      dispatch(actionAsync.GET_AUTH_SIGN_UP.REQUEST())
    },

    SEND_AUTH_FORGET_PASSWORD: () => {
      handleEvents({}, { typeEvent: 'DEV_STAGE' })
    },

    AUTH_SIGN_OUT: () => {
      const data2 = [
        {
          childName: 'AuthUser',
          isActive: false,
          childProps: { scenario: { branch: 'signOut', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))

      window.FB.logout(function (response) {
        // console.info('handleEvents [248]', 'FB logout', { response })
      })

      dispatch(actionSync.SET_USER(userStoreDefault))
    },

    CLICK_SIGN_UP: () => {
      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signUpManually', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))
    },

    CLICK_FORGET_PASSWORD: () => {
      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'forgetPassword', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))
    },

    CLICK_AUTH_SIGN_IN_UP_BACK: () => {
      dispatch(actionSync.SET_OAUTH_STAGE('signInManually'))

      const data2 = [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps: { scenario: { branch: 'signInManually', step: '' } },
        },
      ]
      dispatch(actionSync.SET_MODAL_FRAMES(data2))
    },

    STOP_PROPAGATION: () => {
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

    GO_ACADEMY_SCREEN: () => {
      const { history } = data
      history.push('/academy')
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
      const { screenType, userName, capture, contentID, meta, description } =
        data

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
