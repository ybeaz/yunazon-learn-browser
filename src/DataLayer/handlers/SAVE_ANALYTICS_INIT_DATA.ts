import { store } from '../store'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsInitData } from '../../Analytics/getSavedAnanlyticsInitData'

const { dispatch, getState } = store

export const SAVE_ANALYTICS_INIT_DATA = (event: any, data: any): void => {
  getSavedAnanlyticsInitData()
}
