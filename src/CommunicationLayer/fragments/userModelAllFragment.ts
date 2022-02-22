import gql from 'graphql-tag'

export const userModelAllFragment = gql`
  fragment UserModelGraphqlAll on UserModelGraphql {
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
