import { store } from '../store'
import {
  ActionEventType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_MODULE_CREATE_SUBMIT: ActionEventType = (event, data) => {
  const enumValues = Object.values(CreateModuleStagesEnumType)

  enumValues.forEach((key: CreateModuleStagesEnumType) => {
    dispatch(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType[key],
        status: CreateModuleStatusEnumType['todo'],
      })
    )
  })

  dispatch(actionAsync.GET_MODULE_ASSEMBLED.REQUEST())
}
