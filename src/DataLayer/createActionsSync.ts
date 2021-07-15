interface IAction {
  type: string
  data?: any
}

export interface ICreateSyncAction {
  [key: string]: Function
}

/**
 * @description Function to create syncronous actions
 * @param actions
 * @returns
 */
export const createSyncActions: Function = (
  actions: string[]
): ICreateSyncAction => {
  return actions.reduce((actions, currentAction) => {
    const currentActionNext = {
      [currentAction]: (data: any): IAction => ({
        type: currentAction,
        data,
      }),
    }
    return { ...actions, ...currentActionNext }
  }, {})
}
