import { IHandleEventsProps } from '../Interfaces/IHandleEventsProps'

import { TEMPLATE } from './handlers/TEMPLATE'
import { ADD_DOCUMENT } from './handlers/ADD_DOCUMENT'
import { AUTH_FACEBOOK } from './handlers/AUTH_FACEBOOK'
import { AUTH_GOOGLE } from './handlers/AUTH_GOOGLE'
import { AUTH_SIGN_OUT } from './handlers/AUTH_SIGN_OUT'
import { AUTH_VKONTAKTE } from './handlers/AUTH_VKONTAKTE'
import { CLICK_AUTH_FACEBOOK } from './handlers/CLICK_AUTH_FACEBOOK'
import { CLICK_AUTH_GOOGLE } from './handlers/CLICK_AUTH_GOOGLE'
import { CLICK_AUTH_SIGN_IN_UP_BACK } from './handlers/CLICK_AUTH_SIGN_IN_UP_BACK'
import { CLICK_AUTH_VKONTAKTE } from './handlers/CLICK_AUTH_VKONTAKTE'
import { CLICK_CHECK } from './handlers/CLICK_CHECK'
import { CLICK_FORGET_PASSWORD } from './handlers/CLICK_FORGET_PASSWORD'
import { CLICK_LOGO_GROUP } from './handlers/CLICK_LOGO_GROUP'
import { CLICK_SIGN_UP } from './handlers/CLICK_SIGN_UP'
import { CLICK_SOCIAL_NET_BUTTON } from './handlers/CLICK_SOCIAL_NET_BUTTON'
import { CLOSE_MODAL_GET_SCORES } from './handlers/CLOSE_MODAL_GET_SCORES'
import { COPY_URL_TO_CLIPBOARD } from './handlers/COPY_URL_TO_CLIPBOARD'
import { CREATE_COURSE } from './handlers/CREATE_COURSE'
import { DEV_STAGE } from './handlers/DEV_STAGE'
import { FIND_DOCUMENT } from './handlers/FIND_DOCUMENT'
import { GET_AUTH_SIGN_IN } from './handlers/GET_AUTH_SIGN_IN'
import { GET_AUTH_SIGN_UP } from './handlers/GET_AUTH_SIGN_UP'
import { GET_COURSE_QUERY_PR_QN } from './handlers/GET_COURSE_QUERY_PR_QN'
import { GET_INITIAL_QUERY_SETTING } from './handlers/GET_INITIAL_QUERY_SETTING'
import { GO_ACADEMY_SCREEN } from './handlers/GO_ACADEMY_SCREEN'
import { GO_BACK_FROM_CERTIFICATE } from './handlers/GO_BACK_FROM_CERTIFICATE'
import { GO_HOME } from './handlers/GO_HOME'
import { ONCHANGE_EMAIL_AUTH } from './handlers/ONCHANGE_EMAIL_AUTH'
import { ONCHANGE_EMAIL_CC } from './handlers/ONCHANGE_EMAIL_CC'
import { ONCHANGE_EMAIL_TO } from './handlers/ONCHANGE_EMAIL_TO'
import { ONCHANGE_FIRST_NAME_MODAL } from './handlers/ONCHANGE_FIRST_NAME_MODAL'
import { ONCHANGE_LAST_NAME_MODAL } from './handlers/ONCHANGE_LAST_NAME_MODAL'
import { ONCHANGE_MIDDLE_NAME_MODAL } from './handlers/ONCHANGE_MIDDLE_NAME_MODAL'
import { ONCHANGE_PASSWORD_AUTH } from './handlers/ONCHANGE_PASSWORD_AUTH'
import { ONCHANGE_PASSWORD_AUTH_2 } from './handlers/ONCHANGE_PASSWORD_AUTH_2'
import { ONCHANGE_SEARCH_INPUT } from './handlers/ONCHANGE_SEARCH_INPUT'
import { ONCHANGE_USER_NAME_AUTH } from './handlers/ONCHANGE_USER_NAME_AUTH'
import { PLUS_QUESTION_SLIDE } from './handlers/PLUS_QUESTION_SLIDE'
import { PRINT_DOCUMENT } from './handlers/PRINT_DOCUMENT'
import { PRINT_SCORES } from './handlers/PRINT_SCORES'
import { SAVE_ANALYTICS_INIT_DATA } from './handlers/SAVE_ANALYTICS_INIT_DATA'
import { SELECT_COURSE_MODULE } from './handlers/SELECT_COURSE_MODULE'
import { SELECT_COURSE_MODULE_CONTENTID } from './handlers/SELECT_COURSE_MODULE_CONTENTID'
import { SELECT_LANGUAGE } from './handlers/SELECT_LANGUAGE'
import { SELECT_ON_CHANGE } from './handlers/SELECT_ON_CHANGE'
import { SEND_AUTH_FORGET_PASSWORD } from './handlers/SEND_AUTH_FORGET_PASSWORD'
import { SEND_EMAIL_DOCUMENT } from './handlers/SEND_EMAIL_DOCUMENT'
import { SET_MODAL_FRAMES } from './handlers/SET_MODAL_FRAMES'
import { SET_OAUTH_FB_SCRIPT_STATE } from './handlers/SET_OAUTH_FB_SCRIPT_STATE'
import { SET_OAUTH_GOOGLE_SCRIPT_STATE } from './handlers/SET_OAUTH_GOOGLE_SCRIPT_STATE'
import { SET_OAUTH_VK_SCRIPT_STATE } from './handlers/SET_OAUTH_VK_SCRIPT_STATE'
import { SET_QUESTION_SLIDE } from './handlers/SET_QUESTION_SLIDE'
import { STOP_PROPAGATION } from './handlers/STOP_PROPAGATION'
import { TOGGLE_IS_DOCUMENT_ADDED } from './handlers/TOGGLE_IS_DOCUMENT_ADDED'
import { TOGGLE_MEDIA_LOADED } from './handlers/TOGGLE_MEDIA_LOADED'
import { TOGGLE_SIDE_NAVIGATION } from './handlers/TOGGLE_SIDE_NAVIGATION'
import { TOGGLE_START_COURSE } from './handlers/TOGGLE_START_COURSE'

interface HandleEventsInterface {
  (event: any, props: IHandleEventsProps): void
}

export const handleEvents: HandleEventsInterface = (event, props): void => {
  const { type: typeStore, typeEvent, data } = props
  const type = typeStore ? typeStore : typeEvent

  const output = {
    TEMPLATE,
    ADD_DOCUMENT,
    AUTH_FACEBOOK,
    AUTH_GOOGLE,
    AUTH_SIGN_OUT,
    AUTH_VKONTAKTE,
    CLICK_AUTH_FACEBOOK,
    CLICK_AUTH_GOOGLE,
    CLICK_AUTH_SIGN_IN_UP_BACK,
    CLICK_AUTH_VKONTAKTE,
    CLICK_CHECK,
    CLICK_FORGET_PASSWORD,
    CLICK_LOGO_GROUP,
    CLICK_SIGN_UP,
    CLICK_SOCIAL_NET_BUTTON,
    CLOSE_MODAL_GET_SCORES,
    COPY_URL_TO_CLIPBOARD,
    CREATE_COURSE,
    DEV_STAGE,
    FIND_DOCUMENT,
    GET_AUTH_SIGN_IN,
    GET_AUTH_SIGN_UP,
    GET_COURSE_QUERY_PR_QN,
    GET_INITIAL_QUERY_SETTING,
    GO_ACADEMY_SCREEN,
    GO_BACK_FROM_CERTIFICATE,
    GO_HOME,
    ONCHANGE_EMAIL_AUTH,
    ONCHANGE_EMAIL_CC,
    ONCHANGE_EMAIL_TO,
    ONCHANGE_FIRST_NAME_MODAL,
    ONCHANGE_LAST_NAME_MODAL,
    ONCHANGE_MIDDLE_NAME_MODAL,
    ONCHANGE_PASSWORD_AUTH_2,
    ONCHANGE_PASSWORD_AUTH,
    ONCHANGE_SEARCH_INPUT,
    ONCHANGE_USER_NAME_AUTH,
    PLUS_QUESTION_SLIDE,
    PRINT_DOCUMENT,
    PRINT_SCORES,
    SAVE_ANALYTICS_INIT_DATA,
    SELECT_COURSE_MODULE_CONTENTID,
    SELECT_COURSE_MODULE,
    SELECT_LANGUAGE,
    SELECT_ON_CHANGE,
    SEND_AUTH_FORGET_PASSWORD,
    SEND_EMAIL_DOCUMENT,
    SET_MODAL_FRAMES,
    SET_OAUTH_FB_SCRIPT_STATE,
    SET_OAUTH_GOOGLE_SCRIPT_STATE,
    SET_OAUTH_VK_SCRIPT_STATE,
    SET_QUESTION_SLIDE,
    STOP_PROPAGATION,
    TOGGLE_IS_DOCUMENT_ADDED,
    TOGGLE_MEDIA_LOADED,
    TOGGLE_SIDE_NAVIGATION,
    TOGGLE_START_COURSE,
  }

  output[type] && output[type](event, data)
}
