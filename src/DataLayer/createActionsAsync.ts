const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export interface CreateRequestTypes {
  REQUEST: Function
  SUCCESS: Function
  FAILURE: Function
}

export interface CreateAsyncAction {
  [key: string]: CreateRequestTypes
}

/**
 * @description Function to return functions in object accepted data
 *              with three props suffixes: _REQUEST, _SUCCESS, _FAILURE
 * @param base => data => return {}
 * @example  await dispatch(action.GET_COURSES.REQUEST())
 * @example2 dispatch(action.GET_COURSES.SUCCESS(myObject))
 * @example3 action.GET_COURSES.SUCCESS(myObject).type - this returns type string 'GET_COURSES_SUCCESS'
 * @returns object of the kind {REQUEST: "ADD_DOCUMENT_REQUEST", SUCCESS: "ADD_DOCUMENT_SUCCESS", FAILURE: "ADD_DOCUMENT_FAILURE"}
 */
const createRequestTypes: Function = (base: string): CreateRequestTypes =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type: string): any => {
    acc[type] = (data: any = undefined) => {
      return data
        ? { type: `${base}_${type}`, data }
        : { type: `${base}_${type}` }
    }
    return acc
  }, {})

/**
 * @description Function to create asyncronous actions
 * @param actions
 * @returns
 */
export const createAsyncAction: Function = (
  actions: string[]
): CreateAsyncAction => {
  return actions.reduce((actionsAsync, currentAction) => {
    const currentActionNext = {
      [currentAction]: createRequestTypes(currentAction),
    }
    return { ...actionsAsync, ...currentActionNext }
  }, {})
}

/**
 * @description NOT USED. LEGACY. Function to return object with three props suffixes: _REQUEST, _SUCCESS, _FAILURE
 * @param base
 * @returns object of the kind {REQUEST: "ADD_DOCUMENT_REQUEST", SUCCESS: "ADD_DOCUMENT_SUCCESS", FAILURE: "ADD_DOCUMENT_FAILURE"}
 */
export const createRequestTypesLegacy = (base: string) =>
  [REQUEST, SUCCESS, FAILURE].reduce(
    (acc: Record<string, any>, type: string) => {
      acc[type] = `${base}_${type}`
      return acc
    },
    {}
  )
