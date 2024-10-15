import { ActionReduxType } from 'yourails_common'

export interface CreateSyncAction {
  [key: string]: Function
}

/**
 * @description Function to create syncronous actions
 * @param actions
 * @returns
 */
export const createSyncActions: Function = (actions: string[]): CreateSyncAction => {
  return actions.reduce((actionsSync, currentAction) => {
    const currentActionNext = {
      [currentAction]: (data: any): ActionReduxType => ({
        type: currentAction,
        data,
      }),
    }
    return { ...actionsSync, ...currentActionNext }
  }, {})
}
