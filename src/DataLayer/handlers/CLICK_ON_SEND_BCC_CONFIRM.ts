import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch, getState } = store

export const CLICK_ON_SEND_BCC_CONFIRM: ActionEventType = (event, data) => {
  const state = getState()
  const sendBccValue = state.forms.sendBcc

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'sendBcc',
    searchParamsValue: sendBccValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_SEND_BCC_CONFIRM',
  })

  console.info('CLICK_ON_SEND_BCC_CONFIRM [11]', { sendBccValue })

  dispatch(actionSync.SET_URLPARAMSQUERY_TO_STORE({ propName: 'sendBcc', value: sendBccValue }))

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'isSendBccInputVisible',
      value: false,
    })
  )
}
