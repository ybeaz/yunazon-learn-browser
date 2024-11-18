import { ClientHttpType } from 'yourails_common'
import { getDetectedEnv } from 'yourails_common'

const envType: string = getDetectedEnv()

export interface FeatureFlagType {
  (envTypeIn?: string): boolean | any
}

/**
 * @description Flag to toggle adding course create functionality
 *              (Reason is NetAngels is blocked from ChatGPT)
 */
export const isCourseCreateSectionFlag: FeatureFlagType = (envTypeIn = envType) =>
  envTypeIn === 'local' ? true : false

/**
 * @description Flag to toggle adding objections to the content
 */
export const isObjectionsStageForCourseCreateFlag: FeatureFlagType = (envTypeIn = envType) => false

/** @description Flag to select Http client for graphql connection */
export const selectGraphqlHttpClientFlag: FeatureFlagType = (envTypeIn = envType) =>
  ClientHttpType['axiosClient']

/** @description Flag to toggle display of the Cognito signin option in the Header */
export const isAwsCognitoAuth: FeatureFlagType = (envTypeIn = envType) => true

/** @description Flag to toggle option to save analytics to the proprietor server, service statee TODO */
export const isGetingSavedAnanlyticsEvent: FeatureFlagType = (envTypeIn = envType) => false

/** @description Flag template */
export const isTemplate: FeatureFlagType = (envTypeIn = envType) => false

/**
 * @description Feature flag for development and debugging
 */

/** @description Flag isDebugModelWindowQuestionScoresSuccess */
export const isDebugModelWindowQuestionScoresSuccess: FeatureFlagType = (envTypeIn = envType) =>
  false

/** @description Flag isDebugModelWindowQuestionScoresFailure */
export const isDebugModelWindowQuestionScoresFailure: FeatureFlagType = (envTypeIn = envType) =>
  false

/** @description Flag isDebugCertificateRedirectTo */
export const isDebugCertificateRedirectTo: FeatureFlagType = (envTypeIn = envType) => false

/**
 * @description DEPRECIATED:

export const isLoadingLocalStorageStoreState: FeatureFlagType = (
  envTypeIn = envType
) => false
*/
