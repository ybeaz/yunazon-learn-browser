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
      userId,
      userIdExternal,
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

    if (!userIdExternal) {
      obj = {
        testCapture: 'should return 200 code and data defined',
        method: 'post',
        payload: {
          operationName: 'CreateUser',
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
          query: `mutation CreateUser($userInputGraphql: UserInputGraphql!){ \
        createUser(userInputGraphql: $userInputGraphql) { ...UserModelGraphqlAll }} \
        fragment ${FRAGMENTS['UserModelGraphqlAll']}`,
        },
        options: { headers: { ...headers } },
        url: <string>`${SERVERS[envType]}/graphql`,
      }
    } else {
      obj = {
        testCapture: 'should return 200 code and data defined',
        method: 'post',
        payload: {
          operationName: 'UpdateUser',
          variables: {
            userInputGraphql2: {
              userAvatar,
              userBirthYear,
              userEmail,
              userGender,
              userId: userIdExternal,
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
          query: `mutation UpdateUser($userInputGraphql2: UserInputGraphql2!){ \
        updateUser(userInputGraphql2: $userInputGraphql2) { ...UserModelGraphqlAll }} \
        fragment ${FRAGMENTS['UserModelGraphqlAll']}`,
        },
        options: { headers: { ...headers } },
        url: <string>`${SERVERS[envType]}/graphql`,
      }
    }

    return obj
  }
