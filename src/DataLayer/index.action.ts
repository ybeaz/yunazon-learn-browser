const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

// Asynchroneous actions for saga
export const GET_GLOBAL_VARS: any = createRequestTypes('GET_GLOBAL_VARS')
export const GET_PRODUCT_CARD: any = createRequestTypes('GET_PRODUCT_CARD')

// Synchroneours redux actions
export const TOGGLE_SIDE_NAVIGATION: Function = (): any => ({
  type: 'TOGGLE_SIDE_NAVIGATION',
})

export const TEST_ACTION: Function = (data = true): any => ({
  type: 'TEST_ACTION',
  data,
})
