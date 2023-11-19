import { gql, DocumentNode } from '@apollo/client'

export const getAuthAwsCognitoUserDataGql: DocumentNode = gql`
  query getAuthAwsCognitoUserData(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserData(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      refresh_token
      message
    }
  }
`
