import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

/** @description Flag to toggle display of the Cognito signin option in the Header */
export const isAwsCognitoAuth = (envTypeIn = envType) => true
/** @description Flag to toggle option to save analytics to the proprietor server, service statee TODO */
export const isGetingSavedAnanlyticsEvent = (envTypeIn = envType) => false
/** @description Flag template */
export const isTemplate = (envTypeIn = envType) => false
