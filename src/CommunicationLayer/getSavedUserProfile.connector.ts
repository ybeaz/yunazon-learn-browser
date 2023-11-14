import axios from 'axios'

import { SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'
import { UserType } from '../Interfaces/UserType'
import {
  ConnectorOutputType,
  AxiosRequestHeaders,
} from '../Interfaces/ConnectorOutputType'
import { createUserQuery } from './queries/createUserQuery'
import { updateUserQuery } from './queries/updateUserQuery'

interface IGetSavedUserProfileConnector {
  (user: UserType): ConnectorOutputType
}

const headers: AxiosRequestHeaders = {
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

    let obj: ConnectorOutputType

    if (!userIdProfile) {
      obj = {
        testCapture: 'should return 200 code and data defined',
        axiosClient: axios.create({
          baseURL: `${SERVERS[envType]}/graphql`,
          timeout: 1000,
          headers,
        }),
        method: 'post',
        params: {
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
      }
    } else {
      obj = {
        testCapture: 'should return 200 code and data defined',
        axiosClient: axios.create({
          baseURL: `${SERVERS[envType]}/graphql`,
          timeout: 1000,
          headers,
        }),
        method: 'post',
        params: {
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
      }
    }

    return obj
  }
