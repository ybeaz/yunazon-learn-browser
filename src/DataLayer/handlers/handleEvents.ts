import { getOpenedUrlInNewTab } from '../../Shared/getOpenedUrlInNewTab'

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

interface HandlerEventsProps {
  typeEvent: string
  type?: string
  data: any
}

export const handleEvents: Function = (
  event: any,
  props: HandlerEventsProps
): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent
  const { dispatch, getState } = store

  const output = {
    SET_OAUTH_FB_SCRIPT_STATE: () => {},

    SET_OAUTH_VK_SCRIPT_STATE: () => {},

    SET_OAUTH_GOOGLE_SCRIPT_STATE: () => {},

    AUTH_FACEBOOK: () => {},

    AUTH_VKONTAKTE: () => {},

    AUTH_GOOGLE: () => {},

    CLICK_AUTH_FACEBOOK: () => {},

    CLICK_AUTH_VKONTAKTE: () => {},

    CLICK_AUTH_GOOGLE: () => {},

    ONCHANGE_USER_NAME_AUTH: () => {},

    ONCHANGE_EMAIL_AUTH: () => {},

    ONCHANGE_PASSWORD_AUTH: () => {},

    ONCHANGE_PASSWORD_AUTH_2: () => {},

    GET_AUTH_SIGN_IN: () => {},

    GET_AUTH_SIGN_UP: () => {},

    SEND_AUTH_FORGET_PASSWORD: () => {},

    AUTH_SIGN_OUT: () => {},

    CLICK_SIGN_UP: () => {},

    CLICK_FORGET_PASSWORD: () => {},

    CLICK_AUTH_SIGN_IN_UP_BACK: () => {},

    STOP_PROPAGATION: () => {},

    CREATE_COURSE() {},

    GO_HOME: () => {},

    GO_ACADEMY_SCREEN: () => {},

    GET_INITIAL_QUERY_SETTING: () => {},

    GET_COURSE_QUERY_PR_QN: () => {},

    CLICK_SOCIAL_NET_BUTTON: () => {},

    GO_BACK_FROM_CERTIFICATE: () => {},

    CLICK_LOGO_GROUP: () => {},

    SAVE_ANALYTICS_INIT_DATA: () => {},

    TOGGLE_MEDIA_LOADED: () => {},

    TOGGLE_START_COURSE: () => {},

    ONCHANGE_SEARCH_INPUT: () => {},

    SELECT_LANGUAGE: () => {},

    SEND_EMAIL_DOCUMENT: () => {},

    ONCHANGE_EMAIL_CC: () => {},

    ONCHANGE_EMAIL_TO: () => {},

    SET_MODAL_FRAMES: () => {},

    COPY_URL_TO_CLIPBOARD: () => {},

    TOGGLE_IS_DOCUMENT_ADDED: () => {},

    PRINT_DOCUMENT: () => {},

    FIND_DOCUMENT: () => {},

    ADD_DOCUMENT: () => {},

    SET_QUESTION_SLIDE: () => {},

    PLUS_QUESTION_SLIDE: () => {},

    ONCHANGE_FIRST_NAME_MODAL: () => {},

    ONCHANGE_MIDDLE_NAME_MODAL: () => {},

    ONCHANGE_LAST_NAME_MODAL: () => {},

    CLOSE_MODAL_GET_SCORES: () => {},

    PRINT_SCORES: () => {},

    SELECT_COURSE_MODULE_CONTENTID: () => {},

    SELECT_COURSE_MODULE: () => {},

    CLICK_CHECK: () => {},

    TOGGLE_SIDE_NAVIGATION: () => {},
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
