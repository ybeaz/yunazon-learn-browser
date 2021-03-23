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
export const SET_ECOM_ASSETS: Function = (data = true) => ({
  type: 'SET_ECOM_ASSETS',
  data,
})

export const TEST_ACTION: Function = (data = true) => ({
  type: 'TEST_ACTION',
  data,
})
