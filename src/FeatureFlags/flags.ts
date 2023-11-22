import { ClientHttpType } from '../@types/ClientHttpType'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

const envType: string = getDetectedEnv()

export interface FeatureFlagType {
  (envTypeIn?: string): boolean | any
}

/** @description Flag isQuestionScoresModalWindow */
export const isQuestionScoresModalWindow: FeatureFlagType = (
  envTypeIn = envType
) => false

/** @description Flag isInput */
export const isInputNamesModalWindow: FeatureFlagType = (envTypeIn = envType) =>
  false

/** @description Flag isInput */
export const isRedirectToCertificate: FeatureFlagType = (envTypeIn = envType) =>
  false

/** @description Flag to select Http client for graphql connection */
export const selectGraphqlHttpClientFlag: FeatureFlagType = (
  envTypeIn = envType
) => ClientHttpType['apolloClient']

/** @description Flag to toggle display of the Cognito signin option in the Header */
export const isAwsCognitoAuth: FeatureFlagType = (envTypeIn = envType) => true

/** @description Flag to toggle option to save analytics to the proprietor server, service statee TODO */
export const isGetingSavedAnanlyticsEvent: FeatureFlagType = (
  envTypeIn = envType
) => false

/** @description Flag template */
export const isTemplate: FeatureFlagType = (envTypeIn = envType) => false
