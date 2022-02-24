import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { IUser } from '../Interfaces/IRootStore'
import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { createUserQuery } from './queries/createUserQuery'
import { updateUserQuery } from './queries/updateUserQuery'

interface IGetSavedUserProfileConnector {
  (user: IUser): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
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
      userIdProfile,
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

    let obj: IConnectorOutput

    if (!userIdProfile) {
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
          query: createUserQuery,
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
              userIdProfile,
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
          query: updateUserQuery,
        },
        options: { headers: { ...headers } },
        url: `${SERVERS[envType]}/graphql`,
      }
    }

    return obj
  }
