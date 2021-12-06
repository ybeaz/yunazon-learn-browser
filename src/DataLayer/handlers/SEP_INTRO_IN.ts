import { store } from '../store'
import { IActionEvent } from '../../Interfaces/IActionEvent'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedAnanlyticsEvent } from '../../Analytics/getSavedAnanlyticsEvent'
import { getAzProps } from '../../Analytics/getAzProps'
import { getResultDataFromStore } from '../../ViewLayer/Hooks/getResultDataFromStore'

const { dispatch, getState } = store

export const SEP_INTRO_IN: IActionEvent = (event, data) => {
  const data2 = [
    {
      childName: data.intro,
      isActive: true,
      childProps: { 'data.intro': data.intro },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
