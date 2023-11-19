import { gql, DocumentNode } from '@apollo/client'

export const getAuthAwsCognitoUserRefreshedGql: DocumentNode = gql`
  query getAuthAwsCognitoUserRefreshed(
    $userIdDataAwsCognitoInput: UserIdDataAwsCognitoInputType!
  ) {
    getAuthAwsCognitoUserRefreshed(
      userIdDataAwsCognitoInput: $userIdDataAwsCognitoInput
    ) {
      sub
      email
      preferred_username
      cognito_groups
      exp
      message
    }
  }
`
