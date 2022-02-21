import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS } from './fragments'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { IUser } from '../Interfaces/IRootStore'

interface IHeaders {
  'Access-Control-Allow-Origin': string
  'Content-Type': string
  timestamp: number
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

interface IGetSavedUserProfileConnector {
  (user: IUser): {
    testCapture: string
    method: string
    payload: {
      operationName: string
      variables: any
      query: string
    }
    options: { headers: IHeaders }
    url: string
  }
}

export const getSavedUserProfileConnector: IGetSavedUserProfileConnector =
  user => {
    const envType: string = getDetectedEnv()

    const {
      userAvatar,
      userBirthYear,
      userEmail,
      userGender,
      userIdAuth,
      userInfoAbout,
      userLanguages,
      userLocaleCity,
      userLocaleCountry,
      userMedia,
      userName,
      userNameFirst,
      userNameLast,
      userNameMiddle,
      userNameNick,
      userPhone,
      userRoles,
      userSkillsExpertise,
      userWebLink,
      userZoneInfo,
    } = user

    let obj: any

    if (!userIdAuth) {
      obj = {
        testCapture: 'should return 200 code and data defined',
        method: 'post',
        payload: {
          operationName: 'createUser',
          variables: {
            userInputGraphql: {
              userAvatar,
              userBirthYear,
              userEmail,
              userGender,
              userInfoAbout,
              userLanguages,
              userLocaleCity,
              userLocaleCountry,
              userMedia,
              userName,
              userNameFirst,
              userNameLast,
              userNameMiddle,
              userNameNick,
              userPhone,
              userRoles,
              userSkillsExpertise,
              userWebLink,
              userZoneInfo,
            },
          },
          query: `mutation createUser($userInputGraphql: UserInputGraphql!){ \
        createUser(userInputGraphql: $userInputGraphql) { ...UserModelGraphqlAll }} \
        fragment ${FRAGMENTS['UserModelGraphqlAll']}`,
        },
        options: { headers: { ...headers } },
        url: `${SERVERS[envType]}/graphql`,
      }
    } else {
      obj = {
        testCapture: 'should return 200 code and data defined',
        method: 'post',
        payload: {
          operationName: 'updateUser',
          variables: {
            userInputGraphql2: {
              userAvatar,
              userBirthYear,
              userEmail,
              userGender,
              userIdAuth,
              userInfoAbout,
              userLanguages,
              userLocaleCity,
              userLocaleCountry,
              userMedia,
              userName,
              userNameFirst,
              userNameLast,
              userNameMiddle,
              userNameNick,
              userPhone,
              userRoles,
              userSkillsExpertise,
              userWebLink,
              userZoneInfo,
            },
          },
          query: `mutation updateUser($userInputGraphql2: UserInputGraphql2!){ \
        updateUser(userInputGraphql2: $userInputGraphql2) { ...UserModelGraphqlAll }} \
        fragment ${FRAGMENTS['UserModelGraphqlAll']}`,
        },
        options: { headers: { ...headers } },
        url: `${SERVERS[envType]}/graphql`,
      }
    }

    return obj
  }
