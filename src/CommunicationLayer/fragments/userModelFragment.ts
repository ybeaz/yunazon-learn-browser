import gql from 'graphql-tag'

export const userModelFragment = gql`
  fragment UserModelGraphqlAll on UserModelGraphql {
    userIdProfile
    userIdAuth
    userDateCreated
    userDateUpdated
    userDateDeleted
    userAvatar
    userBirthYear
    userEmail
    userGender
    userInfoAbout
    userLanguages
    userLocaleCity
    userLocaleCountry
    userMedia
    userName
    userNameNick
    userSkillsExpertise
  }
`

export const userModelExtendedGraphql = gql`
  fragment UserModelGraphqlAll on UserModelExtendedGraphql {
    responseMessage {
      status
      message
    }
    userIdProfile
    userIdAuth
    userDateCreated
    userDateUpdated
    userDateDeleted
    userAvatar
    userBirthYear
    userEmail
    userGender
    userInfoAbout
    userLanguages
    userLocaleCity
    userLocaleCountry
    userMedia
    userName
    userNameNick
    userSkillsExpertise
  }
`
