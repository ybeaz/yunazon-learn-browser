import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export const isAwsCognitoAuth = (envTypeIn = envType) => true
export const isGetingSavedAnanlyticsEvent = (envTypeIn = envType) => false
