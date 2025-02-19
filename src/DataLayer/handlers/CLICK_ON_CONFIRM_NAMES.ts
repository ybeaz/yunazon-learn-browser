import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync } from '../../DataLayer/index.action'
import { getProfileActiveToUpdate } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'

const { dispatch, getState } = store

export const CLICK_ON_CONFIRM_NAMES: ActionEventType = (event, data) => {
  const stateSelected: RootStoreType = getState()
  const { profileActive, isUpdatingProfile } = getProfileActiveToUpdate(stateSelected)

  if (!isUpdatingProfile) return
  dispatch(actionAsync.UPDATE_PROFILE.REQUEST({ profile: profileActive }))
}
