import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { CLICK_ON_TAG } from './CLICK_ON_TAG'
import { CLICK_ON_CANCEL_APPLIED_SEARCH } from './CLICK_ON_CANCEL_APPLIED_SEARCH'

const { dispatch, getState } = store

export const CLICK_ON_CANCEL_APPLIED_ALL: ActionEventType = (event, dataIn) => {
  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: 'pageModules',
      first: 1,
      direction: 'set',
    })
  )
  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: 'pageTags',
      first: 1,
      direction: 'set',
    })
  )
  CLICK_ON_CANCEL_APPLIED_SEARCH({}, {})
  CLICK_ON_TAG({}, { tagCloud: { value: undefined } })
}
