import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export const isGetingSavedAnanlyticsEvent = (envTypeIn = envType) => false
